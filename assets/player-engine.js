/* ==========================================================================
   Universal test player. One page (player.html) + this engine handles every
   test. Reads ?test=<slug> from the URL, looks up that slug in
   TESTS_MANIFEST (assets/tests-manifest.js, loaded before this file), fetches
   the test's questions.md (and, on demand, answers.md), and renders
   everything: start screen, timed attempt, and untimed revise mode.

   No per-test HTML or JS is needed anymore -- adding a test is purely:
   write questions.md + answers.md, add one manifest entry.
   ========================================================================== */

(function () {
  // ---------------- Markdown section parsers ----------------

  function parseQuestionsMd(text) {
    const parts = text.split(/^##\s+(Q\d+(?:\s*-\s*(?:Options|Hint))?)\s*$/m);
    const data = {};
    for (let i = 1; i < parts.length; i += 2) {
      const label = parts[i].trim();
      const body = (parts[i + 1] || '').trim();
      const m = label.match(/^(Q\d+)(?:\s*-\s*(Options|Hint))?$/);
      if (!m) continue;
      const qid = m[1];
      const kind = m[2];
      if (!data[qid]) data[qid] = { stem: '', options: [], hint: '' };
      if (kind === 'Options') {
        const optParts = body.split(/^\(([A-E])\)\s*/m);
        for (let j = 1; j < optParts.length; j += 2) {
          data[qid].options.push({ letter: optParts[j], text: (optParts[j + 1] || '').trim() });
        }
      } else if (kind === 'Hint') {
        data[qid].hint = body;
      } else {
        data[qid].stem = body;
      }
    }
    return data;
  }

  function parseAnswersMd(text) {
    const parts = text.split(/^##\s+(Q\d+)\s*$/m);
    const data = {};
    for (let i = 1; i < parts.length; i += 2) {
      const qid = parts[i].trim();
      let body = (parts[i + 1] || '').trim();
      const answerMatch = body.match(/\*\*Answer:\*\*\s*([A-E])/);
      const topicMatch = body.match(/\*\*Topic:\*\*\s*(.+)/);
      const correct = answerMatch ? answerMatch[1] : null;
      const topic = topicMatch ? topicMatch[1].trim() : null;
      body = body.replace(/\*\*Answer:\*\*\s*[A-E]\s*/, '').replace(/\*\*Topic:\*\*\s*.+/, '').trim();
      body = body.replace(/^-{3,}\s*$/gm, '').trim();
      data[qid] = { correct, topic, explanation: body };
    }
    return data;
  }

  function qidNum(qid) { return parseInt(qid.replace('Q', ''), 10); }
  function escapeHtml(s) {
    return (s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  function renderMd(text) { return text ? marked.parse(text) : ''; }
  function renderMdInline(text) { return text ? marked.parseInline(text) : ''; }
  function renderMath(el) {
    if (window.renderMathInElement) {
      renderMathInElement(el, {
        // delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
        delimiters: [{ left: '$$', right: '$$', display: false }, { left: '$', right: '$', display: false }],
        throwOnError: false
      });
    }
  }

  // ---------------- boot ----------------

  const params = new URLSearchParams(location.search);
  const slug = params.get('test');
  const root = document.getElementById('player-root');
  const statusEl = document.getElementById('player-status');

  if (!slug) {
    root.innerHTML = '<div class="notice">No test specified. Go back to the <a href="index.html">home page</a> and pick one.</div>';
    return;
  }
  const cfg = (window.TESTS_MANIFEST || []).find(t => t.slug === slug);
  if (!cfg) {
    root.innerHTML = `<div class="notice">No test with slug "${escapeHtml(slug)}" found in tests-manifest.js.</div>`;
    return;
  }
  document.title = cfg.title + ' — UGC NET Practice Test Series';

  let questions = {};   // {qid: {stem, options, hint}}
  let qids = [];         // ordered list
  let answers = null;    // filled in lazily
  let current = 0;
  let userAnswers = {};
  let visited = {};
  let endsAt = null, timerHandle = null, submitted = false;

  fetch(cfg.questionsFile)
    .then(r => { if (!r.ok) throw new Error('fetch failed'); return r.text(); })
    .then(text => {
      questions = parseQuestionsMd(text);
      qids = Object.keys(questions).sort((a, b) => qidNum(a) - qidNum(b));
      statusEl.textContent = `${qids.length} questions loaded.`;
      renderStart();
    })
    .catch(err => {
      statusEl.textContent = '';
      root.innerHTML = `<div class="notice">Couldn't load ${escapeHtml(cfg.questionsFile)}. If you're testing locally by
        double-clicking this file, that won't work — run a local server
        (<code>python3 -m http.server</code>) or use GitHub Pages.</div>`;
    });

  async function ensureAnswers() {
    if (answers) return answers;
    const res = await fetch(cfg.answersFile);
    if (!res.ok) throw new Error('answers fetch failed');
    answers = parseAnswersMd(await res.text());
    return answers;
  }

  // ---------------- start screen ----------------

  function renderStart() {
    root.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'q-card';
    card.style.maxWidth = '560px';
    card.style.margin = '0 auto';
    card.innerHTML = `
      <h2 style="margin-top:0">${escapeHtml(cfg.title)}</h2>
      <div class="sub">${qids.length} questions · ${cfg.minutes} min · ${qids.length * cfg.marksPerQuestion} marks</div>`;
    const btnRow = document.createElement('div');
    btnRow.style.display = 'flex';
    btnRow.style.gap = '10px';

    const startBtn = document.createElement('button');
    startBtn.className = 'btn btn-primary';
    startBtn.textContent = 'Take test (timed)';
    startBtn.onclick = beginTimedAttempt;

    const reviseBtn = document.createElement('button');
    reviseBtn.className = 'btn';
    reviseBtn.textContent = 'Revise (view Q&A, no timer)';
    reviseBtn.onclick = beginRevise;

    btnRow.append(startBtn, reviseBtn);
    card.appendChild(btnRow);
    root.appendChild(card);
  }

  // ---------------- timed attempt ----------------

  function beginTimedAttempt() {
    submitted = false;
    current = 0;
    userAnswers = {};
    visited = { [qids[0]]: true };
    root.innerHTML = '';

    const timerBar = document.createElement('div');
    timerBar.className = 'timer-bar';
    timerBar.innerHTML = `
      <div><div class="timer-label">${escapeHtml(cfg.title)}</div><div id="qPosition" style="font-size:13px;color:var(--muted)"></div></div>
      <div style="text-align:right"><div class="timer-label">Time remaining</div><div id="timerClock" class="timer-clock"></div></div>`;
    root.appendChild(timerBar);

    const quizWrap = document.createElement('div');
    quizWrap.className = 'quiz-wrap';
    root.appendChild(quizWrap);

    const qCard = document.createElement('div');
    qCard.className = 'q-card';
    quizWrap.appendChild(qCard);

    const palette = document.createElement('div');
    palette.className = 'palette';
    palette.innerHTML = `
      <div class="palette-title">Question palette</div>
      <div class="palette-grid" id="paletteGrid"></div>
      <div class="palette-legend">
        <div class="legend-item"><span class="legend-swatch" style="background:var(--correct)"></span>Answered</div>
        <div class="legend-item"><span class="legend-swatch" style="background:var(--warn)"></span>Visited, not answered</div>
        <div class="legend-item"><span class="legend-swatch" style="background:var(--not-visited)"></span>Not visited</div>
      </div>
      <button class="btn btn-primary" id="submitAllBtn" style="width:100%;margin-top:14px;">Submit test</button>`;
    quizWrap.appendChild(palette);

    const navRow = document.createElement('div');
    navRow.className = 'nav-row';
    navRow.innerHTML = `
      <button class="btn" id="prevBtn">&larr; Previous</button>
      <div class="right">
        <button class="btn" id="clearBtn">Clear response</button>
        <button class="btn btn-primary" id="nextBtn">Save &amp; Next &rarr;</button>
        <button class="btn btn-primary" id="submitBtn" style="display:none;">Submit test</button>
      </div>`;
    root.appendChild(navRow);

    function renderQuestion() {
      const qid = qids[current];
      const q = questions[qid];
      qCard.innerHTML = `<div class="q-index">Question ${current + 1} of ${qids.length} · ${qid}</div>
        <div class="q-text">${renderMd(q.stem)}</div>
        <div class="options"></div>
        ${q.hint ? `<button class="hint-toggle" type="button">💡 Hint</button><div class="hint-content" hidden>${renderMd(q.hint)}</div>` : ''}`;
      const optsWrap = qCard.querySelector('.options');
      q.options.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'option' + (userAnswers[qid] === opt.letter ? ' selected' : '');
        label.dataset.letter = opt.letter;
        label.innerHTML = `<input type="radio" name="opt" ${userAnswers[qid] === opt.letter ? 'checked' : ''}>
          <span><strong>${opt.letter}.</strong> ${renderMdInline(opt.text)}</span>`;
        label.onclick = () => { userAnswers[qid] = opt.letter; renderQuestion(); };
        optsWrap.appendChild(label);
      });
      const hintBtn = qCard.querySelector('.hint-toggle');
      if (hintBtn) hintBtn.onclick = () => { const hc = qCard.querySelector('.hint-content'); hc.hidden = !hc.hidden; };
      renderMath(qCard);

      document.getElementById('qPosition').textContent = `Question ${current + 1} of ${qids.length}`;
      document.getElementById('prevBtn').disabled = current === 0;
      const isLast = current === qids.length - 1;
      document.getElementById('nextBtn').style.display = isLast ? 'none' : '';
      document.getElementById('submitBtn').style.display = isLast ? '' : 'none';
      updatePalette();
    }

    function updatePalette() {
      const grid = document.getElementById('paletteGrid');
      grid.innerHTML = '';
      qids.forEach((qid, i) => {
        const cell = document.createElement('button');
        let cls = 'p-cell';
        if (userAnswers[qid]) cls += ' answered';
        else if (visited[qid]) cls += ' visited';
        if (i === current) cls += ' current';
        cell.className = cls;
        cell.textContent = i + 1;
        cell.onclick = () => { current = i; visited[qid] = true; renderQuestion(); };
        grid.appendChild(cell);
      });
    }

    document.getElementById('prevBtn').onclick = () => { current--; visited[qids[current]] = true; renderQuestion(); };
    document.getElementById('nextBtn').onclick = () => { current++; visited[qids[current]] = true; renderQuestion(); };
    document.getElementById('clearBtn').onclick = () => { delete userAnswers[qids[current]]; renderQuestion(); };
    document.getElementById('submitBtn').onclick = finish;
    document.getElementById('submitAllBtn').onclick = finish;

    renderQuestion();

    endsAt = Date.now() + cfg.minutes * 60 * 1000;
    function tick() {
      if (submitted) { clearInterval(timerHandle); return; }
      const remaining = endsAt - Date.now();
      const clock = document.getElementById('timerClock');
      if (!clock) { clearInterval(timerHandle); return; }
      if (remaining <= 0) { clock.textContent = '00:00'; clearInterval(timerHandle); finish(); return; }
      const total = Math.round(remaining / 1000);
      clock.textContent = `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
      clock.classList.toggle('low', remaining < 60000);
    }
    tick();
    timerHandle = setInterval(tick, 500);

    async function finish() {
      if (submitted) return;
      submitted = true;
      clearInterval(timerHandle);
      let ans, loadError = null;
      try { ans = await ensureAnswers(); } catch (e) { loadError = e; ans = {}; }

      let correctCount = 0, wrongCount = 0, skipped = 0;
      const topicStats = {};
      const detail = qids.map(qid => {
        const given = userAnswers[qid] || null;
        const a = ans[qid] || {};
        const correct = a.correct || null;
        const topic = a.topic || null;
        let outcome = 'skipped';
        if (given) { if (given === correct) { outcome = 'correct'; correctCount++; } else { outcome = 'wrong'; wrongCount++; } }
        else skipped++;
        if (topic) {
          topicStats[topic] = topicStats[topic] || { correct: 0, wrong: 0, skipped: 0, total: 0 };
          topicStats[topic][outcome]++;
          topicStats[topic].total++;
        }
        return { qid, given, correct, topic, outcome, explanation: a.explanation };
      });
      const marks = correctCount * cfg.marksPerQuestion - wrongCount * (cfg.negativeMarking || 0);
      renderResults(detail, correctCount, wrongCount, skipped, marks, topicStats, loadError);
    }
  }

  // ---------------- results ----------------

  function renderDonut(correctCount, wrongCount, skipped, total) {
    const cPct = total ? (correctCount / total * 100) : 0;
    const wPct = total ? (wrongCount / total * 100) : 0;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;gap:20px;flex-wrap:wrap;';
    const donut = document.createElement('div');
    donut.style.cssText = `width:130px;height:130px;border-radius:50%;flex-shrink:0;position:relative;
      background:conic-gradient(var(--correct) 0 ${cPct}%, var(--wrong) ${cPct}% ${cPct + wPct}%, var(--line) ${cPct + wPct}% 100%);`;
    const hole = document.createElement('div');
    hole.style.cssText = `position:absolute;inset:22px;border-radius:50%;background:var(--surface);
      display:flex;align-items:center;justify-content:center;font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:15px;`;
    hole.textContent = `${correctCount}/${total}`;
    donut.appendChild(hole);
    const legend = document.createElement('div');
    legend.innerHTML = `
      <div class="legend-item" style="margin-bottom:6px"><span class="legend-swatch" style="background:var(--correct)"></span>Correct — ${correctCount}</div>
      <div class="legend-item" style="margin-bottom:6px"><span class="legend-swatch" style="background:var(--wrong)"></span>Wrong — ${wrongCount}</div>
      <div class="legend-item"><span class="legend-swatch" style="background:var(--line)"></span>Skipped — ${skipped}</div>`;
    wrap.append(donut, legend);
    return wrap;
  }

  function renderTopicBars(topicStats) {
    const topics = Object.keys(topicStats);
    if (!topics.length) return null;
    topics.sort((a, b) => (topicStats[a].correct / topicStats[a].total) - (topicStats[b].correct / topicStats[b].total));
    const wrap = document.createElement('div');
    wrap.style.marginTop = '10px';
    topics.forEach(topic => {
      const s = topicStats[topic];
      const pct = Math.round(s.correct / s.total * 100);
      const row = document.createElement('div');
      row.style.marginBottom = '10px';
      row.innerHTML = `
        <div style="display:flex;justify-content:space-between;font-size:13.5px;margin-bottom:4px;">
          <span>${escapeHtml(topic)}</span><span style="color:var(--muted)">${s.correct}/${s.total}</span></div>
        <div style="height:8px;border-radius:5px;background:var(--paper);overflow:hidden;">
          <div style="height:100%;width:${pct}%;background:${pct < 50 ? 'var(--wrong)' : pct < 80 ? 'var(--warn)' : 'var(--correct)'};"></div>
        </div>`;
      wrap.appendChild(row);
    });
    return wrap;
  }

  function renderResults(detail, correctCount, wrongCount, skipped, marks, topicStats, loadError) {
    root.innerHTML = '';
    const hero = document.createElement('div');
    hero.className = 'score-hero';
    hero.innerHTML = `<div class="score-big">${correctCount} / ${qids.length}</div><div style="color:var(--muted)">${marks} marks</div>`;
    root.appendChild(hero);

    const chartCard = document.createElement('div');
    chartCard.className = 'q-card';
    chartCard.style.marginBottom = '20px';
    chartCard.appendChild(renderDonut(correctCount, wrongCount, skipped, qids.length));
    const bars = renderTopicBars(topicStats);
    if (bars) {
      const h = document.createElement('div');
      h.style.cssText = 'margin-top:18px;font-size:13px;color:var(--muted);';
      h.textContent = 'Accuracy by topic (weakest first):';
      chartCard.append(h, bars);
    }
    root.appendChild(chartCard);

    if (loadError) {
      const notice = document.createElement('div');
      notice.className = 'notice';
      notice.textContent = "Couldn't load the answer key — this happens when opening the file directly from disk (works fine once hosted). Your score above is still accurate, but explanations can't be shown right now.";
      root.appendChild(notice);
    }

    let filter = 'all';
    const filterRow = document.createElement('div'); filterRow.className = 'review-filter';
    const listWrap = document.createElement('div');
    root.append(filterRow, listWrap);

    function draw() {
      filterRow.innerHTML = '';
      [['all', 'All'], ['wrong', 'Wrong only'], ['skipped', 'Skipped only']].forEach(([key, label]) => {
        const b = document.createElement('button');
        b.className = 'btn' + (filter === key ? ' btn-primary' : '');
        b.textContent = label;
        b.onclick = () => { filter = key; draw(); };
        filterRow.appendChild(b);
      });
      listWrap.innerHTML = '';
      detail.filter(d => filter === 'all' || d.outcome === filter).forEach(d => {
        const q = questions[d.qid];
        const item = document.createElement('div');
        item.className = 'review-item';
        const tagClass = d.outcome === 'correct' ? 'correct' : d.outcome === 'wrong' ? 'wrong' : 'skipped';
        const tagLabel = d.outcome === 'correct' ? 'Correct' : d.outcome === 'wrong' ? 'Wrong' : 'Skipped';
        item.innerHTML = `<span class="tag ${tagClass}">${tagLabel}</span>` + (d.topic ? ` <span class="tag skipped">${escapeHtml(d.topic)}</span>` : '');
        const qDiv = document.createElement('div');
        qDiv.className = 'q-text'; qDiv.style.marginTop = '10px';
        qDiv.innerHTML = renderMd(q.stem);
        item.appendChild(qDiv);
        const optsWrap = document.createElement('div');
        optsWrap.className = 'options';
        q.options.forEach(opt => {
          const isCorrect = opt.letter === d.correct;
          const isUserWrong = opt.letter === d.given && d.given !== d.correct;
          const row = document.createElement('label');
          row.className = 'option' + (isCorrect ? ' is-correct' : '') + (isUserWrong ? ' is-wrong-pick' : '');
          const badge = isCorrect ? '<span class="tag correct" style="margin-left:8px;">Correct answer</span>'
                      : isUserWrong ? '<span class="tag wrong" style="margin-left:8px;">Your answer</span>' : '';
          row.innerHTML = `<input type="radio" disabled ${opt.letter === d.given ? 'checked' : ''}>
            <span><strong>${opt.letter}.</strong> ${renderMdInline(opt.text)}${badge}</span>`;
          optsWrap.appendChild(row);
        });
        item.appendChild(optsWrap);
        if (d.explanation) {
          const ex = document.createElement('div'); ex.className = 'explain';
          ex.innerHTML = renderMd(d.explanation);
          item.appendChild(ex);
          renderMath(ex);
        }
        listWrap.appendChild(item);
      });
    }
    draw();

    const backBtn = document.createElement('button');
    backBtn.className = 'btn'; backBtn.style.marginTop = '16px';
    backBtn.textContent = '← Back to start screen';
    backBtn.onclick = renderStart;
    root.appendChild(backBtn);
  }

  // ---------------- revise mode ----------------

  async function beginRevise() {
    root.innerHTML = '<div class="notice">Loading…</div>';
    let ans, loadError = null;
    try { ans = await ensureAnswers(); } catch (e) { loadError = e; ans = {}; }
    root.innerHTML = '';
    const h = document.createElement('div');
    h.className = 'sub';
    h.textContent = `${cfg.title} — revision mode. No timer, answers shown inline.`;
    root.appendChild(h);
    if (loadError) {
      const notice = document.createElement('div'); notice.className = 'notice';
      notice.textContent = "Couldn't load the answer key — works once hosted (GitHub Pages / local server).";
      root.appendChild(notice);
    }
    qids.forEach(qid => {
      const q = questions[qid];
      const a = ans[qid] || {};
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = a.topic ? `<span class="tag skipped">${escapeHtml(a.topic)}</span>` : '';
      const qIndex = document.createElement('div'); qIndex.className = 'q-index'; qIndex.textContent = qid;
      const qText = document.createElement('div'); qText.className = 'q-text'; qText.innerHTML = renderMd(q.stem);
      item.append(qIndex, qText);
      const optsWrap = document.createElement('div');
      optsWrap.className = 'options';
      q.options.forEach(opt => {
        const isCorrect = opt.letter === a.correct;
        const row = document.createElement('label');
        row.className = 'option' + (isCorrect ? ' is-correct' : '');
        const badge = isCorrect ? '<span class="tag correct" style="margin-left:8px;">Correct answer</span>' : '';
        row.innerHTML = `<input type="radio" disabled ${isCorrect ? 'checked' : ''}>
          <span><strong>${opt.letter}.</strong> ${renderMdInline(opt.text)}${badge}</span>`;
        optsWrap.appendChild(row);
      });
      item.appendChild(optsWrap);
      if (a.explanation) {
        const ex = document.createElement('div'); ex.className = 'explain'; ex.innerHTML = renderMd(a.explanation);
        item.appendChild(ex);
        renderMath(ex);
      }
      root.appendChild(item);
    });
    const backBtn = document.createElement('button');
    backBtn.className = 'btn'; backBtn.style.marginTop = '16px';
    backBtn.textContent = '← Back to start screen';
    backBtn.onclick = renderStart;
    root.appendChild(backBtn);
  }
})();