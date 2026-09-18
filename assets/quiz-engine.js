/* ==========================================================================
   Shared quiz engine. Loaded by every test page. Reads:
     - window.TEST_CONFIG = { name, timeMinutes, marksPerQuestion, negativeMarking, answerKey }
     - the .question blocks already present inside #quiz-questions
       (optional data-topic="..." per question enables the weak-topic chart)

   Flow: start screen -> (first time: timed test only) OR
         (already attempted before: choice of Retake [timed] or Revise [untimed]).
   Revising never requires retaking the timed test again.
   ========================================================================== */

(function(){
  const cfg = Object.assign({
    name: 'Test',
    timeMinutes: 30,
    marksPerQuestion: 2,
    negativeMarking: 0,
    answerKey: null
  }, window.TEST_CONFIG || {});

  const root = document.getElementById('quiz-root');
  const questionsContainer = document.getElementById('quiz-questions');
  if (!root || !questionsContainer){
    console.error('quiz-engine: #quiz-root or #quiz-questions not found.');
    return;
  }

  const questions = Array.from(questionsContainer.querySelectorAll('.question'));
  const total = questions.length;
  let current = 0;
  const visited = new Array(total).fill(false);
  let endsAt = null;
  let timerHandle = null;
  let submitted = false;

  // detach questions container from the DOM for now; we rebuild the shell around it later
  questionsContainer.remove();

  function renderMath(el){
    if (window.renderMathInElement){
      renderMathInElement(el, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$',  right: '$',  display: false}
        ],
        throwOnError: false
      });
    }
  }
  
  function escapeHtml(s){
    return (s||'').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  }

  const HISTORY_KEY = 'net_practice_history';
  function historyAll(){
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  }
  function lastAttempt(){
    const attempts = historyAll()[cfg.name];
    return attempts && attempts.length ? attempts[attempts.length - 1] : null;
  }
  function saveHistory(summary){
    const history = historyAll();
    if (!history[cfg.name]) history[cfg.name] = [];
    history[cfg.name].push(summary);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }

  // function currentWho(){
  //   return (localStorage.getItem('net_practice_who') || 'me').trim().toLowerCase() || 'me';
  // }
  // function historyFor(who){
  //   return JSON.parse(localStorage.getItem(`net_practice_history_${who}`) || '{}');
  // }
  // function lastAttempt(){
  //   const h = historyFor(currentWho());
  //   const attempts = h[cfg.name];
  //   return attempts && attempts.length ? attempts[attempts.length - 1] : null;
  // }
  // function saveHistory(summary){
  //   const who = currentWho();
  //   const key = `net_practice_history_${who}`;
  //   const history = JSON.parse(localStorage.getItem(key) || '{}');
  //   if (!history[cfg.name]) history[cfg.name] = [];
  //   history[cfg.name].push(summary);
  //   localStorage.setItem(key, JSON.stringify(history));
  // }

  // ---- who bar in header ----
  // const headerBrand = document.querySelector('header .brand');
  // if (headerBrand && headerBrand.parentElement && !document.getElementById('whoInput')){
  //   const whoBar = document.createElement('div');
  //   whoBar.className = 'who';
  //   whoBar.innerHTML = `Taking this as <input id="whoInput" type="text" placeholder="your name"/>`;
  //   headerBrand.parentElement.appendChild(whoBar);
  // }
  // const whoInput = document.getElementById('whoInput');
  // if (whoInput){
  //   whoInput.value = localStorage.getItem('net_practice_who') || '';
  //   whoInput.addEventListener('input', () => {
  //     localStorage.setItem('net_practice_who', whoInput.value);
  //     renderStartScreen();
  //   });
  // }

  async function fetchAndParseAnswerKey(url){
    const res = await fetch(url);
    if (!res.ok) throw new Error('Could not fetch answer key: ' + url);
    const text = await res.text();
    const sections = {};
    const parts = text.split(/^##\s+(\S+)\s*$/m);
    for (let i = 1; i < parts.length; i += 2){
      const id = parts[i].trim();
      const body = (parts[i+1] || '').trim();
      sections[id] = marked.parse(body);
    }
    return sections;
  }

  // ============================== START SCREEN ==============================
  function renderStartScreen(){
    root.innerHTML = '';
    const last = lastAttempt();
    const card = document.createElement('div');
    card.className = 'q-card';
    card.style.maxWidth = '560px';
    card.style.margin = '0 auto';
    card.innerHTML = `
      <h2 style="margin-top:0">${escapeHtml(cfg.name)}</h2>
      <div class="sub" style="margin-bottom:18px">
        ${total} questions · ${cfg.timeMinutes} min · ${total*cfg.marksPerQuestion} marks
      </div>
    `;
    if (last){
      const info = document.createElement('div');
      info.className = 'notice';
      info.innerHTML = `Last attempt: <strong>${last.correctCount}/${last.total}</strong> correct
        (${last.wrongCount} wrong, ${last.skipped} skipped) — ${new Date(last.when).toLocaleDateString()}.`;
      card.appendChild(info);
    }
    const btnRow = document.createElement('div');
    btnRow.style.display = 'flex';
    btnRow.style.gap = '10px';
    btnRow.style.marginTop = '10px';

    // if (!last){
    //   const startBtn = document.createElement('button');
    //   startBtn.className = 'btn btn-primary';
    //   startBtn.textContent = 'Start test (timed)';
    //   startBtn.onclick = beginTimedAttempt;
    //   btnRow.appendChild(startBtn);
    // } else {
    //   const retakeBtn = document.createElement('button');
    //   retakeBtn.className = 'btn btn-primary';
    //   retakeBtn.textContent = 'Retake (timed)';
    //   retakeBtn.onclick = beginTimedAttempt;
    //   const reviseBtn = document.createElement('button');
    //   reviseBtn.className = 'btn';
    //   reviseBtn.textContent = 'Revise (view Q&A, no timer)';
    //   reviseBtn.onclick = beginRevise;
    //   btnRow.append(retakeBtn, reviseBtn);
    // }

    const startBtn = document.createElement('button');
    startBtn.className = 'btn btn-primary';
    startBtn.textContent = last ? 'Retake (timed)' : 'Take test (timed)';
    startBtn.onclick = beginTimedAttempt;

    const reviseBtn = document.createElement('button');
    reviseBtn.className = 'btn';
    reviseBtn.textContent = 'Review (view Q&A, no timer)';
    reviseBtn.onclick = beginRevise;

    btnRow.append(startBtn, reviseBtn);

    card.appendChild(btnRow);
    root.appendChild(card);
  }

  // ============================== TIMED ATTEMPT ==============================
  function beginTimedAttempt(){
    root.innerHTML = '';
    submitted = false;
    current = 0;
    visited.fill(false);
    visited[0] = true;

    root.appendChild(questionsContainer);

    const timerBar = document.createElement('div');
    timerBar.className = 'timer-bar';
    timerBar.innerHTML = `
      <div>
        <div class="timer-label">${escapeHtml(cfg.name)}</div>
        <div id="qPosition" style="font-size:13px;color:var(--muted)"></div>
      </div>
      <div style="text-align:right">
        <div class="timer-label">Time remaining</div>
        <div id="timerClock" class="timer-clock"></div>
      </div>`;
    root.insertBefore(timerBar, questionsContainer);

    const quizWrap = document.createElement('div');
    quizWrap.className = 'quiz-wrap';
    root.insertBefore(quizWrap, questionsContainer);
    quizWrap.appendChild(questionsContainer);

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
    questionsContainer.after(navRow);

    questions.forEach((q, i) => {
      q.style.display = i === 0 ? '' : 'none';
      q.classList.add('q-card');
      q.querySelectorAll('.q-index-injected').forEach(el => el.remove());
      const idxEl = document.createElement('div');
      idxEl.className = 'q-index q-index-injected';
      idxEl.textContent = `Question ${i+1} of ${total}` + (q.dataset.id ? ` · ${q.dataset.id}` : '');
      q.insertBefore(idxEl, q.firstChild);

      q.querySelectorAll('.option input').forEach(inp => { inp.checked = false; });
      q.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        const input = opt.querySelector('input');
        if (input){
          input.name = 'q' + i;
          input.onchange = () => {
            opt.parentElement.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            updatePalette();
          };
        }
      });

      const hintBtn = q.querySelector('.hint-toggle');
      const hintContent = q.querySelector('.hint-content');
      if (hintBtn && hintContent){
        hintContent.hidden = true;
        hintBtn.onclick = () => { hintContent.hidden = !hintContent.hidden; };
      }
    });

    function isAnswered(i){ return !!questions[i].querySelector('.option input:checked'); }
    function selectedLetter(i){
      const checked = questions[i].querySelector('.option input:checked');
      return checked ? checked.closest('.option').dataset.letter : null;
    }
    function correctLetter(i){
      const correctOpt = questions[i].querySelector('.option[data-correct="true"]');
      return correctOpt ? correctOpt.dataset.letter : null;
    }
    function showQuestion(i){
      questions[current].style.display = 'none';
      current = i;
      visited[current] = true;
      questions[current].style.display = '';
      document.getElementById('qPosition').textContent = `Question ${current+1} of ${total}`;
      document.getElementById('prevBtn').disabled = current === 0;
      const isLast = current === total - 1;
      document.getElementById('nextBtn').style.display = isLast ? 'none' : '';
      document.getElementById('submitBtn').style.display = isLast ? '' : 'none';
      updatePalette();
      window.scrollTo({top:0, behavior:'smooth'});
    }
    function updatePalette(){
      const grid = document.getElementById('paletteGrid');
      grid.innerHTML = '';
      questions.forEach((_, i) => {
        const cell = document.createElement('button');
        let cls = 'p-cell';
        if (isAnswered(i)) cls += ' answered';
        else if (visited[i]) cls += ' visited';
        if (i === current) cls += ' current';
        cell.className = cls;
        cell.textContent = i + 1;
        cell.onclick = () => showQuestion(i);
        grid.appendChild(cell);
      });
    }
    document.getElementById('prevBtn').onclick = () => showQuestion(current - 1);
    document.getElementById('nextBtn').onclick = () => showQuestion(current + 1);
    document.getElementById('clearBtn').onclick = () => {
      const checked = questions[current].querySelector('.option input:checked');
      if (checked){ checked.checked = false; checked.closest('.option').classList.remove('selected'); }
      updatePalette();
    };
    document.getElementById('submitBtn').onclick = finish;
    document.getElementById('submitAllBtn').onclick = finish;
    updatePalette();

    const storageKey = 'net_practice_timer_' + cfg.name;
    endsAt = Date.now() + cfg.timeMinutes * 60 * 1000;
    sessionStorage.setItem(storageKey, endsAt);

    function formatTime(ms){
      const t = Math.max(0, Math.round(ms/1000));
      const m = Math.floor(t/60), s = t%60;
      return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
    function tick(){
      if (submitted){ clearInterval(timerHandle); return; }
      const remaining = endsAt - Date.now();
      const clock = document.getElementById('timerClock');
      if (!clock) { clearInterval(timerHandle); return; }
      if (remaining <= 0){
        clock.textContent = '00:00';
        clearInterval(timerHandle);
        finish();
        return;
      }
      clock.textContent = formatTime(remaining);
      clock.classList.toggle('low', remaining < 60000);
    }
    tick();
    timerHandle = setInterval(tick, 500);

    async function finish(){
      if (submitted) return;
      submitted = true;
      clearInterval(timerHandle);
      sessionStorage.removeItem(storageKey);

      let correctCount = 0, wrongCount = 0, skipped = 0;
      const topicStats = {};
      const detail = questions.map((q, i) => {
        const given = selectedLetter(i);
        const correct = correctLetter(i);
        const topic = q.dataset.topic || null;
        let outcome = 'skipped';
        if (given){ if (given === correct){ outcome = 'correct'; correctCount++; } else { outcome = 'wrong'; wrongCount++; } }
        else skipped++;
        if (topic){
          if (!topicStats[topic]) topicStats[topic] = { correct:0, wrong:0, skipped:0, total:0 };
          topicStats[topic][outcome]++;
          topicStats[topic].total++;
        }
        return { id: q.dataset.id || ('Q' + (i+1)), qNode:q, given, correct, outcome, topic };
      });

      const marks = correctCount * cfg.marksPerQuestion - wrongCount * (cfg.negativeMarking || 0);
      saveHistory({ correctCount, wrongCount, skipped, total, marks, when: Date.now() });

      let explanations = {}, explainError = null;
      if (cfg.answerKey){
        try{ explanations = await fetchAndParseAnswerKey(cfg.answerKey); }
        catch(err){ explainError = err; }
      }
      renderResults(detail, correctCount, wrongCount, skipped, marks, topicStats, explanations, explainError);
    }
  }

  // ============================== RESULTS ==============================
  function renderDonut(correctCount, wrongCount, skipped, total){
    const cPct = total ? (correctCount/total*100) : 0;
    const wPct = total ? (wrongCount/total*100) : 0;
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.alignItems = 'center';
    wrap.style.gap = '20px';
    wrap.style.flexWrap = 'wrap';
    const donut = document.createElement('div');
    donut.style.width = '130px';
    donut.style.height = '130px';
    donut.style.borderRadius = '50%';
    donut.style.background = `conic-gradient(var(--correct) 0 ${cPct}%, var(--wrong) ${cPct}% ${cPct+wPct}%, var(--line) ${cPct+wPct}% 100%)`;
    donut.style.flexShrink = '0';
    donut.style.position = 'relative';
    const hole = document.createElement('div');
    hole.style.position = 'absolute'; hole.style.inset = '22px';
    hole.style.borderRadius = '50%'; hole.style.background = 'var(--surface)';
    hole.style.display = 'flex'; hole.style.alignItems = 'center'; hole.style.justifyContent = 'center';
    hole.style.fontFamily = "'IBM Plex Mono', monospace"; hole.style.fontWeight = '600'; hole.style.fontSize = '15px';
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

  function renderTopicBars(topicStats){
    const topics = Object.keys(topicStats);
    if (topics.length === 0) return null;
    topics.sort((a,b) => (topicStats[a].correct/topicStats[a].total) - (topicStats[b].correct/topicStats[b].total));
    const wrap = document.createElement('div');
    wrap.style.marginTop = '10px';
    topics.forEach(topic => {
      const s = topicStats[topic];
      const pct = Math.round(s.correct/s.total*100);
      const row = document.createElement('div');
      row.style.marginBottom = '10px';
      row.innerHTML = `
        <div style="display:flex;justify-content:space-between;font-size:13.5px;margin-bottom:4px;">
          <span>${escapeHtml(topic)}</span><span style="color:var(--muted)">${s.correct}/${s.total}</span>
        </div>
        <div style="height:8px;border-radius:5px;background:var(--paper);overflow:hidden;">
          <div style="height:100%;width:${pct}%;background:${pct < 50 ? 'var(--wrong)' : pct < 80 ? 'var(--warn)' : 'var(--correct)'};"></div>
        </div>`;
      wrap.appendChild(row);
    });
    return wrap;
  }

  function renderResults(detail, correctCount, wrongCount, skipped, marks, topicStats, explanations, explainError){
    root.innerHTML = '';
    const hero = document.createElement('div');
    hero.className = 'score-hero';
    hero.innerHTML = `<div class="score-big">${correctCount} / ${total}</div>
      <div style="color:var(--muted);margin-top:2px">${marks} marks</div>`;
      // <div style="color:var(--muted);margin-top:2px">${marks} marks${whoInput && whoInput.value ? ' · as ' + escapeHtml(whoInput.value) : ''}</div>`;
    root.appendChild(hero);

    const chartCard = document.createElement('div');
    chartCard.className = 'q-card';
    chartCard.style.marginBottom = '20px';
    chartCard.appendChild(renderDonut(correctCount, wrongCount, skipped, total));
    const topicBars = renderTopicBars(topicStats);
    if (topicBars){
      const h = document.createElement('div');
      h.style.marginTop = '18px'; h.style.fontSize = '13px'; h.style.color = 'var(--muted)';
      h.textContent = 'Accuracy by topic (weakest first):';
      chartCard.append(h, topicBars);
    }
    root.appendChild(chartCard);

    if (explainError){
      const notice = document.createElement('div');
      notice.className = 'notice';
      notice.textContent = "Couldn't load the answer key file (this happens if you're opening this page directly from disk — it works once hosted, e.g. GitHub Pages, or via a local server). Your score above is still accurate.";
      root.appendChild(notice);
    }

    let filter = 'all';
    const filterRow = document.createElement('div'); filterRow.className = 'review-filter';
    const listWrap = document.createElement('div');
    root.append(filterRow, listWrap);

    function draw(){
      filterRow.innerHTML = '';
      [['all','All'],['wrong','Wrong only'],['skipped','Skipped only']].forEach(([key,label]) => {
        const b = document.createElement('button');
        b.className = 'btn' + (filter===key ? ' btn-primary' : '');
        b.textContent = label;
        b.onclick = () => { filter = key; draw(); };
        filterRow.appendChild(b);
      });
      listWrap.innerHTML = '';
      detail.filter(d => filter==='all' || d.outcome===filter).forEach(d => {
        listWrap.appendChild(buildReviewItem(d, explanations));
      });
    }
    draw();

    const backRow = document.createElement('div');
    backRow.style.marginTop = '16px';
    const startOverBtn = document.createElement('button');
    startOverBtn.className = 'btn';
    startOverBtn.textContent = '← Back to start screen';
    startOverBtn.onclick = renderStartScreen;
    backRow.appendChild(startOverBtn);
    root.appendChild(backRow);
  }

  function buildReviewItem(d, explanations){
    const item = document.createElement('div');
    item.className = 'review-item';
    const tagClass = d.outcome === 'correct' ? 'correct' : d.outcome === 'wrong' ? 'wrong' : 'skipped';
    const tagLabel = d.outcome === 'correct' ? 'Correct' : d.outcome === 'wrong' ? 'Wrong' : 'Skipped';
    item.innerHTML = `<span class="tag ${tagClass}">${tagLabel}</span>` + (d.topic ? ` <span class="tag skipped">${escapeHtml(d.topic)}</span>` : '');
    const clone = d.qNode.cloneNode(true);
    clone.classList.remove('q-card');
    clone.querySelectorAll('.q-index-injected, .hint-toggle, .hint-content').forEach(el => el.remove());
    clone.querySelectorAll('.option').forEach(opt => {
      opt.querySelectorAll('input').forEach(inp => inp.remove());
      if (opt.dataset.letter === d.correct) opt.style.color = 'var(--correct)';
      if (d.given && opt.dataset.letter === d.given && d.given !== d.correct) opt.style.color = 'var(--wrong)';
    });
    item.appendChild(clone);
    if (explanations[d.id]){
      const ex = document.createElement('div'); ex.className = 'explain'; ex.innerHTML = explanations[d.id];
      item.appendChild(ex);
      renderMath(ex);          // ← add this line
    }
    return item;
  }

  // ============================== REVISE MODE ==============================
  async function beginRevise(){
    root.innerHTML = '<div class="notice">Loading explanations…</div>';
    let explanations = {}, explainError = null;
    if (cfg.answerKey){
      try{ explanations = await fetchAndParseAnswerKey(cfg.answerKey); }
      catch(err){ explainError = err; }
    }
    root.innerHTML = '';
    const h = document.createElement('div');
    h.className = 'sub';
    h.textContent = `${cfg.name} — revision mode. No timer, answers shown inline.`;
    root.appendChild(h);
    if (explainError){
      const notice = document.createElement('div'); notice.className = 'notice';
      notice.textContent = "Couldn't load the answer key file — works once hosted (GitHub Pages / local server).";
      root.appendChild(notice);
    }
    questions.forEach((q, i) => {
      const d = {
        id: q.dataset.id || ('Q'+(i+1)),
        qNode: q,
        given: null,
        correct: (q.querySelector('.option[data-correct="true"]') || {}).dataset ? q.querySelector('.option[data-correct="true"]').dataset.letter : null,
        outcome: 'skipped',
        topic: q.dataset.topic || null
      };
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = d.topic ? `<span class="tag skipped">${escapeHtml(d.topic)}</span>` : '';
      const clone = q.cloneNode(true);
      clone.classList.remove('q-card');
      clone.querySelectorAll('.q-index-injected, .hint-toggle, .hint-content').forEach(el => el.remove());
      clone.querySelectorAll('.option').forEach(opt => {
        opt.querySelectorAll('input').forEach(inp => inp.remove());
        if (opt.dataset.correct === 'true') opt.style.color = 'var(--correct)';
      });
      item.appendChild(clone);
      if (explanations[d.id]){
        const ex = document.createElement('div'); ex.className = 'explain'; ex.innerHTML = explanations[d.id];
        item.appendChild(ex);
        renderMath(ex);        // ← add this line
      }
      root.appendChild(item);
    });
    const backRow = document.createElement('div');
    backRow.style.marginTop = '16px';
    const startOverBtn = document.createElement('button');
    startOverBtn.className = 'btn'; startOverBtn.textContent = '← Back to start screen';
    startOverBtn.onclick = renderStartScreen;
    backRow.appendChild(startOverBtn);
    root.appendChild(backRow);
  }

  renderStartScreen();
})();
