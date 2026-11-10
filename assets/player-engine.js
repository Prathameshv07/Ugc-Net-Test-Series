/* ==========================================================================
   Universal test player. One page (player.html) + this engine handles every
   test. Reads ?test=<slug> from the URL, looks up that slug in
   TESTS_MANIFEST (assets/tests-manifest.js), fetches the test's ONE
   Markdown file (question + options + hint + answer + explanation, all
   together per question), and renders everything: start screen, timed
   attempt, and untimed revise mode.

   File format per question (single file, no separate answers file):
     ## Qn
     <question text>
     ## Qn - Options
     (A) ...
     (B) ...
     ## Qn - Hint
     <hint sentence>

     **Answer:** X
     ...rest of the explanation (Topic, Solution, whatever headings the
     content uses)...
   Everything from "**Answer:**" onward, up to the next "## Q(n+1)" heading,
   is captured as that question's answer/explanation blob.
   ========================================================================== */

(function () {
  function parseTestMd(text) {
    const parts = text.split(/^##\s+(Q\d+(?:\s*-\s*(?:Options|Hint))?)\s*$/m);
    const data = {};
    for (let i = 1; i < parts.length; i += 2) {
      const label = parts[i].trim();
      const body = (parts[i + 1] || '').trim();
      const m = label.match(/^(Q\d+)(?:\s*-\s*(Options|Hint))?$/);
      if (!m) continue;
      const qid = m[1], kind = m[2];
      if (!data[qid]) data[qid] = { stem: '', options: [], hint: '', correct: null, correctAll: [], topic: null, explanation: '' };
      if (kind === 'Options') {
        const optParts = body.split(/^\(([A-E])\)\s*/m);
        for (let j = 1; j < optParts.length; j += 2) {
          data[qid].options.push({ letter: optParts[j], text: (optParts[j + 1] || '').trim() });
        }
      } else if (kind === 'Hint') {
        const answerIdx = body.search(/\*\*Answer:\*\*/);
        if (answerIdx === -1) {
          data[qid].hint = body;
        } else {
          data[qid].hint = body.slice(0, answerIdx).trim();
          const rest = body.slice(answerIdx);
          // "**Answer:** C" normally; "**Answer:** C, D" when the official key accepts several options
          const ansLine = rest.match(/\*\*Answer:\*\*[ \t]*([^\n]*)/);
          const letters = ansLine ? (ansLine[1].match(/\b[A-E]\b/g) || []) : [];
          data[qid].correct = letters[0] || null;
          data[qid].correctAll = letters;
          data[qid].topic = extractTopic(rest);
          data[qid].explanation = rest.trim();
        }
      } else {
        data[qid].stem = body;
      }
    }
    return data;
  }

  // Deliberately forgiving: real content uses several different phrasings
  // for the topic line ("**Unit:** 5" / "**Unit – 5: X** → *Y*" /
  // "X (Unit 5)" / plain "**Topic:** X"). Rather than parse out a clean
  // Unit vs Sub-topic split (too inconsistent across existing content to
  // do reliably -- see the chat for why), this just grabs a single
  // readable label and strips Markdown decoration, good enough to bucket
  // similar wrong answers together for the weak-topic chart.
  function extractTopic(text) {
    let m = text.match(/\*\*Unit:\*\*\s*(.+?)(?:\n|$).*?\*\*Sub-topic:\*\*\s*(.+?)(?:\n|$)/s);
    if (m) return m[2].trim();
    m = text.match(/###\s*(?:\d+\.\s*)?Topic\s*\n+([^\n]+)/) || text.match(/\*\*Topic:\*\*\s*(.+)/);
    if (!m) return null;
    let topic = m[1];
    const arrowIdx = topic.indexOf('→');
    if (arrowIdx !== -1) topic = topic.slice(arrowIdx + 1);
    return topic.replace(/\*\*|\*|_/g, '').trim().replace(/\.$/, '');
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
        delimiters: [{ left: '$$', right: '$$', display: false }, { left: '$', right: '$', display: false }],
        throwOnError: false
      });
    }
  }
  // Mermaid diagrams: marked turns ```mermaid fences into
  // <pre><code class="language-mermaid">...</code></pre>; mermaid.js expects
  // <pre class="mermaid">raw text</pre> instead, so convert then render.
  function renderDiagrams(el) {
    if (!window.mermaid) return;
    const blocks = el.querySelectorAll('code.language-mermaid');
    if (!blocks.length) return;
    blocks.forEach(code => {
      const pre = document.createElement('pre');
      pre.className = 'mermaid';
      pre.textContent = code.textContent;
      code.parentElement.replaceWith(pre);
    });
    try { mermaid.run({ nodes: el.querySelectorAll('.mermaid') }); } catch (e) { console.warn('mermaid render failed', e); }
  }
  function renderExtras(el) { renderMath(el); renderDiagrams(el); }

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

  let questions = {};
  let qids = [];
  let current = 0;
  let userAnswers = {};
  let visited = {};
  let flagged = {};
  let qtime = {};
  let endsAt = null, timerHandle = null, submitted = false;

  fetch(cfg.file)
    .then(r => { if (!r.ok) throw new Error('fetch failed'); return r.text(); })
    .then(text => {
      questions = parseTestMd(text);
      qids = Object.keys(questions).sort((a, b) => qidNum(a) - qidNum(b));
      statusEl.textContent = `${qids.length} questions loaded.`;
      receiveHandoff(location.hash);
      renderStart();
    })
    .catch(err => {
      statusEl.textContent = '';
      root.innerHTML = `<div class="notice">Couldn't load ${escapeHtml(cfg.file)}. If you're testing locally by
        double-clicking this file, that won't work — run a local server
        (<code>python3 -m http.server</code>) or use GitHub Pages.</div>`;
    });

  // ---------------- hand-off between devices ----------------
  // The whole unfinished attempt is packed into the link itself (after #h=), one character
  // per question:  -  not visited   .  visited, unanswered   *  marked, unanswered
  //                a-e answered     A-E answered and marked
  // plus the current question and the seconds left. Nothing is uploaded anywhere: the part
  // after # never leaves the browser, and the other device just saves it locally.
  let handoffNote = '';

  function packState(st) {
    const chars = qids.map(qid => {
      const a = (st.answers || {})[qid], m = (st.marked || {})[qid];
      if (a) return m ? a.toUpperCase() : a.toLowerCase();
      if (m) return '*';
      return (st.visited || {})[qid] ? '.' : '-';
    }).join('');
    return ['1', slug, st.current || 0, Math.round((st.remainingMs || 0) / 1000), chars].join('~');
  }

  function unpackState(code) {
    const parts = code.split('~');
    if (parts.length !== 5 || parts[0] !== '1') throw new Error('This is not a valid hand-off code.');
    if (parts[1] !== slug) throw new Error('This code belongs to a different test (' + parts[1] + ').');
    const chars = parts[4];
    if (chars.length !== qids.length) throw new Error('The code does not match this test\'s questions.');
    const st = { answers: {}, visited: {}, marked: {}, current: Math.min(+parts[2] || 0, qids.length - 1), remainingMs: (+parts[3] || 0) * 1000 };
    qids.forEach((qid, i) => {
      const c = chars[i];
      if (c === '-') return;
      st.visited[qid] = true;
      if (c === '*') st.marked[qid] = true;
      else if (/[a-e]/.test(c)) st.answers[qid] = c.toUpperCase();
      else if (/[A-E]/.test(c)) { st.answers[qid] = c; st.marked[qid] = true; }
    });
    return st;
  }

  function handoffLink(st) {
    return location.origin + location.pathname + '?test=' + encodeURIComponent(slug) + '#h=' + packState(st);
  }

  // accepts a full link, "#h=..." or the bare code
  function receiveHandoff(text) {
    if (!text) return false;
    const m = String(text).match(/h=([^\s&]+)/);
    const code = decodeURIComponent(m ? m[1] : String(text).trim());
    if (!code || code.indexOf('~') === -1) return false;
    try {
      const st = unpackState(code);
      Progress.setInProgress(slug, st);
      const n = Object.keys(st.answers).length;
      handoffNote = `Progress received from your other device: ${n} answered, ${Math.floor(st.remainingMs / 60000)} min left. Press Resume to continue.`;
    } catch (e) {
      handoffNote = 'Could not load the hand-off: ' + e.message;
    }
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    return true;
  }

  function showHandoff(st, onStop) {
    const link = handoffLink(st);
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-box">
        <h3 style="margin-top:0">Continue on another device</h3>
        <p class="sub">Scan with the other device's camera, or send yourself the link. It carries your answers, marks, current question and the time left (${Math.floor((st.remainingMs || 0) / 60000)} min).</p>
        <div id="handoffQr" class="handoff-qr"></div>
        <input class="handoff-link" readonly value="${escapeHtml(link)}">
        <div class="modal-actions">
          <button class="btn" id="hoCopy">Copy link</button>
          ${navigator.share ? '<button class="btn" id="hoShare">Share…</button>' : ''}
          <button class="btn btn-primary" id="hoStop">Stop here</button>
          <button class="btn" id="hoClose">Keep going here</button>
        </div>
        <p class="legend-note">After the other device opens the link, press <b>Stop here</b> on this one so you don't answer on both.</p>
      </div>`;
    document.body.appendChild(overlay);
    const qrBox = overlay.querySelector('#handoffQr');
    if (window.QRCode) new QRCode(qrBox, { text: link, width: 220, height: 220, correctLevel: QRCode.CorrectLevel.L });
    else qrBox.innerHTML = '<div class="sub">QR code needs an internet connection — use Copy link instead.</div>';
    const close = () => overlay.remove();
    overlay.querySelector('#hoCopy').onclick = e => {
      const inp = overlay.querySelector('.handoff-link'); inp.select();
      (navigator.clipboard ? navigator.clipboard.writeText(link) : Promise.reject()).catch(() => document.execCommand('copy'));
      e.target.textContent = 'Copied ✓';
    };
    const sh = overlay.querySelector('#hoShare');
    if (sh) sh.onclick = () => navigator.share({ title: cfg.title, url: link }).catch(() => {});
    overlay.querySelector('#hoClose').onclick = close;
    overlay.querySelector('#hoStop').onclick = () => { close(); onStop && onStop(); };
    overlay.onclick = e => { if (e.target === overlay) close(); };
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
    startBtn.onclick = () => beginTimedAttempt();

    const reviseBtn = document.createElement('button');
    reviseBtn.className = 'btn';
    reviseBtn.textContent = 'Revise (view Q&A, no timer)';
    reviseBtn.onclick = beginRevise;

    const saved = Progress.getInProgress(slug);
    if (saved) {
      const n = Object.keys(saved.answers || {}).length;
      const mins = Math.floor(saved.remainingMs / 60000), secs = Math.floor(saved.remainingMs / 1000) % 60;
      const resumeBtn = document.createElement('button');
      resumeBtn.className = 'btn btn-primary';
      resumeBtn.textContent = `Resume (${n} answered · ${mins}:${String(secs).padStart(2, '0')} left)`;
      resumeBtn.onclick = () => beginTimedAttempt(saved);
      startBtn.className = 'btn';
      startBtn.textContent = 'Start over (timed)';
      startBtn.onclick = () => { Progress.clearInProgress(slug); beginTimedAttempt(); };
      btnRow.append(resumeBtn);
    }
    btnRow.style.flexWrap = 'wrap';
    btnRow.append(startBtn, reviseBtn);
    if (handoffNote) {
      const note = document.createElement('div');
      note.className = 'notice'; note.style.margin = '12px 0'; note.textContent = handoffNote;
      card.appendChild(note); handoffNote = '';
    }
    card.appendChild(btnRow);

    const recv = document.createElement('details');
    recv.className = 'handoff-receive';
    recv.innerHTML = `<summary>Continue from another device</summary>
      <p class="sub">On the other device, press <b>📱 Hand off</b> during the test and scan its QR code with this device's camera. Or paste the link / code here:</p>
      <div class="handoff-row"><input class="handoff-link" placeholder="Paste link or code"><button class="btn">Load</button></div>`;
    recv.querySelector('button').onclick = () => {
      if (!receiveHandoff(recv.querySelector('input').value)) handoffNote = 'That doesn\'t look like a hand-off link or code.';
      renderStart();
    };
    card.appendChild(recv);

    const past = Progress.attempts(slug);
    if (past.length) {
      const h = document.createElement('div');
      h.className = 'history';
      h.innerHTML = `<div class="history-title">Your attempts</div>` + past.slice().reverse().map(a => {
        const d = a.date ? new Date(a.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : 'earlier';
        const t = a.timeTakenSec ? ` · ${Math.round(a.timeTakenSec / 60)} min` : '';
        const src = a.source ? ` · ${escapeHtml(a.source)}` : '';
        const rev = a.answers ? ` <button class="btn btn-small" data-review="${escapeHtml(a.id)}">Review</button>` : '';
        return `<div class="history-row"><span>${d}${src}</span><span>${a.correct}/${a.total} correct · ${a.marks} marks${t}${rev}</span></div>`;
      }).join('');
      card.appendChild(h);
      h.querySelectorAll('[data-review]').forEach(btn => {
        btn.onclick = () => reviewAttempt(past.find(a => a.id === btn.dataset.review));
      });
    }
    root.appendChild(card);
  }

  // ---------------- timed attempt ----------------

  function beginTimedAttempt(resume) {
    submitted = false;
    endsAt = null;
    current = resume ? (resume.current || 0) : 0;
    userAnswers = resume ? Object.assign({}, resume.answers) : {};
    visited = resume ? Object.assign({}, resume.visited) : { [qids[0]]: true };
    flagged = resume ? Object.assign({}, resume.marked || {}) : {};
    // per-question time log: qid -> [[startEpochSec, endEpochSec], ...]; visit n = index + 1
    qtime = resume && resume.qtime ? JSON.parse(JSON.stringify(resume.qtime)) : {};
    let segQid = null, segStart = 0;
    function openSeg() { if (submitted) return; segQid = qids[current]; segStart = Date.now(); }
    function closeSeg() {
      if (!segQid) return;
      const now = Date.now();
      if (now - segStart >= 1000) (qtime[segQid] = qtime[segQid] || []).push([Math.round(segStart / 1000), Math.round(now / 1000)]);
      segQid = null;
    }
    function switchSeg() { if (segQid !== qids[current]) { closeSeg(); openSeg(); } }
    const totalMs = cfg.minutes * 60 * 1000;
    function saveState() {
      if (submitted || !endsAt) return;
      // include the still-running visit in the saved copy without splitting it
      const snap = JSON.parse(JSON.stringify(qtime));
      if (segQid && Date.now() - segStart >= 1000) (snap[segQid] = snap[segQid] || []).push([Math.round(segStart / 1000), Math.round(Date.now() / 1000)]);
      Progress.setInProgress(slug, { answers: userAnswers, visited, marked: flagged, qtime: snap, current, remainingMs: Math.max(0, endsAt - Date.now()) });
    }
    window.onpagehide = saveState;
    document.onvisibilitychange = () => {
      if (document.hidden) { saveState(); closeSeg(); }        // time away from the tab isn't counted
      else if (!submitted && endsAt) openSeg();
    };
    root.innerHTML = '';

    const timerBar = document.createElement('div');
    timerBar.className = 'timer-bar';
    timerBar.innerHTML = `
      <div><div class="timer-label">${escapeHtml(cfg.title)}</div><div id="qPosition" style="font-size:13px;color:var(--muted)"></div></div>
      <div style="text-align:right"><div class="timer-label">Time remaining</div><div id="timerClock" class="timer-clock"></div></div>
      <button class="btn handoff-btn" id="handoffBtn" type="button" title="Continue this attempt on another device">📱 Hand off</button>
      <button class="btn palette-toggle" id="paletteToggle" type="button">☰ Questions</button>`;
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
      <div class="palette-legend" id="paletteLegend"></div>
      <button class="btn btn-primary" id="submitAllBtn" style="width:100%;margin-top:14px;">Submit test</button>`;
    quizWrap.appendChild(palette);
    document.getElementById('paletteToggle').onclick = () => quizWrap.classList.toggle('show-palette');
    document.getElementById('handoffBtn').onclick = () => {
      saveState();
      const st = { answers: userAnswers, visited, marked: flagged, current, remainingMs: Math.max(0, endsAt - Date.now()) };
      showHandoff(st, () => {           // stop here: keep the saved state, leave the test without submitting
        saveState(); submitted = true; clearInterval(timerHandle);
        window.onpagehide = null; document.onvisibilitychange = null; document.onkeydown = null;
        handoffNote = 'Paused here — continue on your other device. (You can also Resume here later.)';
        submitted = false; endsAt = null; renderStart();
      });
    };

    const navRow = document.createElement('div');
    navRow.className = 'nav-row';
    navRow.innerHTML = `
      <button class="btn" id="prevBtn">&larr; Previous</button>
      <div class="right">
        <button class="btn" id="clearBtn">Clear response</button>
        <button class="btn btn-mark" id="markBtn">☆ Mark for review</button>
        <button class="btn btn-primary" id="nextBtn">Save &amp; Next &rarr;</button>
        <button class="btn btn-primary" id="submitBtn" style="display:none;">Submit test</button>
      </div>`;
    root.appendChild(navRow);

    function renderQuestion() {
      switchSeg();
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
        label.onclick = e => {
          e.preventDefault();                       // one click = one update (no double fire from the radio)
          userAnswers[qid] = opt.letter;
          optsWrap.querySelectorAll('.option').forEach(l => {
            const on = l.dataset.letter === opt.letter;
            l.classList.toggle('selected', on); l.querySelector('input').checked = on;
          });
          updatePalette(); saveState();
        };
        optsWrap.appendChild(label);
      });
      const hintBtn = qCard.querySelector('.hint-toggle');
      if (hintBtn) hintBtn.onclick = () => { const hc = qCard.querySelector('.hint-content'); hc.hidden = !hc.hidden; };
      renderExtras(qCard);

      document.getElementById('qPosition').textContent = `Question ${current + 1} of ${qids.length}`;
      document.getElementById('prevBtn').disabled = current === 0;
      const isLast = current === qids.length - 1;
      document.getElementById('nextBtn').style.display = isLast ? 'none' : '';
      document.getElementById('submitBtn').style.display = isLast ? '' : 'none';
      updatePalette();
      saveState();
    }

    function updatePalette() {
      const grid = document.getElementById('paletteGrid');
      grid.innerHTML = '';
      qids.forEach((qid, i) => {
        const cell = document.createElement('button');
        let cls = 'p-cell';
        if (userAnswers[qid] && flagged[qid]) cls += ' answered marked';
        else if (flagged[qid]) cls += ' marked';
        else if (userAnswers[qid]) cls += ' answered';
        else if (visited[qid]) cls += ' visited';
        if (i === current) cls += ' current';
        cell.className = cls;
        cell.textContent = i + 1;
        cell.onclick = () => { quizWrap.classList.remove('show-palette'); goTo(i); };
        grid.appendChild(cell);
      });
      let ans = 0, notAns = 0, mk = 0, ansMk = 0, nv = 0;
      qids.forEach(qid => {
        if (userAnswers[qid] && flagged[qid]) ansMk++; else if (flagged[qid]) mk++;
        else if (userAnswers[qid]) ans++; else if (visited[qid]) notAns++; else nv++;
      });
      const sw = c => `<span class="legend-swatch p-cell ${c}"></span>`;
      document.getElementById('paletteLegend').innerHTML = `
        <div class="legend-item">${sw('answered')}Answered — ${ans}</div>
        <div class="legend-item">${sw('visited')}Not answered — ${notAns}</div>
        <div class="legend-item">${sw('marked')}Marked, not answered — ${mk}</div>
        <div class="legend-item">${sw('answered marked')}Answered &amp; marked — ${ansMk}</div>
        <div class="legend-item">${sw('')}Not visited — ${nv}</div>
        <div class="legend-note">Answered &amp; marked questions are still evaluated.</div>`;
      const mb = document.getElementById('markBtn');
      if (mb) mb.textContent = flagged[qids[current]] ? '★ Unmark' : (current === qids.length - 1 ? '☆ Mark for review' : '☆ Mark & Next');
    }

    function goTo(i) {
      current = i; visited[qids[current]] = true; renderQuestion();
      const top = qCard.getBoundingClientRect().top;
      if (top < 70 || top > window.innerHeight * 0.4) window.scrollTo({ top: window.scrollY + top - 140, behavior: 'smooth' });
    }
    function confirmSubmit() {
      const left = qids.length - Object.keys(userAnswers).length;
      const mk = Object.keys(flagged).length;
      let msg = left ? `${left} question${left === 1 ? ' is' : 's are'} unanswered.` : 'All questions answered.';
      if (mk) msg += ` ${mk} marked for review.`;
      msg += ' Submit the test now?';
      if (confirm(msg)) finish();
    }
    document.getElementById('prevBtn').onclick = () => goTo(current - 1);
    document.getElementById('nextBtn').onclick = () => goTo(current + 1);
    document.getElementById('clearBtn').onclick = () => {
      delete userAnswers[qids[current]];
      qCard.querySelectorAll('.option').forEach(l => { l.classList.remove('selected'); l.querySelector('input').checked = false; });
      updatePalette(); saveState();
    };
    document.getElementById('markBtn').onclick = () => {
      const qid = qids[current];
      if (flagged[qid]) { delete flagged[qid]; updatePalette(); saveState(); return; }
      flagged[qid] = true; saveState();
      if (current < qids.length - 1) goTo(current + 1); else updatePalette();
    };
    document.onkeydown = e => {
      if (submitted || e.ctrlKey || e.metaKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      const k = e.key.toLowerCase(), opts = qCard.querySelectorAll('.option');
      const idx = '1234'.indexOf(k) !== -1 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
      if (idx !== -1 && k.length === 1 && opts[idx]) { opts[idx].click(); e.preventDefault(); }
      else if (e.key === 'ArrowRight' && current < qids.length - 1) goTo(current + 1);
      else if (e.key === 'ArrowLeft' && current > 0) goTo(current - 1);
      else if (k === 'm') document.getElementById('markBtn').click();
    };
    document.getElementById('submitBtn').onclick = confirmSubmit;
    document.getElementById('submitAllBtn').onclick = confirmSubmit;

    endsAt = Date.now() + (resume ? resume.remainingMs : totalMs);
    renderQuestion();
    let lastSave = Date.now();
    function tick() {
      if (submitted) { clearInterval(timerHandle); return; }
      const remaining = endsAt - Date.now();
      const clock = document.getElementById('timerClock');
      if (!clock) { clearInterval(timerHandle); return; }
      if (remaining <= 0) { clock.textContent = '00:00'; clearInterval(timerHandle); finish(); return; }
      const total = Math.round(remaining / 1000);
      clock.textContent = `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
      clock.classList.toggle('low', remaining < 60000);
      if (Date.now() - lastSave > 5000) { lastSave = Date.now(); saveState(); }
    }
    tick();
    timerHandle = setInterval(tick, 500);

    function finish() {
      if (submitted) return;
      closeSeg();
      submitted = true;
      clearInterval(timerHandle);

      let correctCount = 0, wrongCount = 0, skipped = 0;
      const topicStats = {};
      const detail = qids.map(qid => {
        const q = questions[qid];
        const given = userAnswers[qid] || null;
        const correct = q.correct;
        const topic = q.topic;
        const accepted = q.correctAll;
        let outcome = 'skipped';
        if (given) { if (accepted.includes(given)) { outcome = 'correct'; correctCount++; } else { outcome = 'wrong'; wrongCount++; } }
        else skipped++;
        if (topic) {
          topicStats[topic] = topicStats[topic] || { correct: 0, wrong: 0, skipped: 0, total: 0 };
          topicStats[topic][outcome]++;
          topicStats[topic].total++;
        }
        return { qid, given, correct, accepted, topic, outcome, explanation: q.explanation, marked: !!flagged[qid], visits: qtime[qid] || [] };
      });
      const marks = correctCount * cfg.marksPerQuestion - wrongCount * (cfg.negativeMarking || 0);
      const answersGiven = {};
      detail.forEach(d => { if (d.given) answersGiven[d.qid] = d.given; });
      Progress.addAttempt(slug, {
        correct: correctCount, wrong: wrongCount, skipped, total: qids.length, marks,
        maxMarks: qids.length * cfg.marksPerQuestion,
        timeTakenSec: Math.round((totalMs - Math.max(0, endsAt - Date.now())) / 1000),
        answers: answersGiven, marked: Object.keys(flagged), topics: topicStats, qtime
      });
      window.onpagehide = null; document.onvisibilitychange = null; document.onkeydown = null;
      renderResults(detail, correctCount, wrongCount, skipped, marks, topicStats);
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
    let topics = Object.keys(topicStats);
    if (topics.length > 12) topics = topics.filter(t => topicStats[t].total >= 2);   // full papers: skip one-off topics
    if (!topics.length) return null;
    topics.sort((a, b) => (topicStats[a].correct / topicStats[a].total) - (topicStats[b].correct / topicStats[b].total));
    topics = topics.slice(0, 12);
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

  // ---------------- time per question ----------------
  const secOf = v => (v || []).reduce((t, [a, b]) => t + (b - a), 0);
  function fmtSec(t) { t = Math.round(t); return t >= 60 ? `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, '0')}s` : `${t}s`; }
  function fmtClock(sec) { const d = new Date(sec * 1000); return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); }

  function renderTimeSummary(detail) {
    const timed = detail.filter(d => d.visits && d.visits.length);
    if (!timed.length) return null;
    const avg = o => { const xs = timed.filter(d => d.outcome === o); return xs.length ? fmtSec(xs.reduce((t, d) => t + secOf(d.visits), 0) / xs.length) : '—'; };
    const slow = timed.slice().sort((a, b) => secOf(b.visits) - secOf(a.visits)).slice(0, 5);
    const box = document.createElement('div');
    box.className = 'q-card'; box.style.marginBottom = '20px';
    box.innerHTML = `<div style="font-weight:600;margin-bottom:8px">Time per question</div>
      <div class="time-grid">
        <div><div class="timer-label">Avg · correct</div><b>${avg('correct')}</b></div>
        <div><div class="timer-label">Avg · wrong</div><b>${avg('wrong')}</b></div>
        <div><div class="timer-label">Avg · skipped</div><b>${avg('skipped')}</b></div>
        <div><div class="timer-label">Revisited</div><b>${timed.filter(d => d.visits.length > 1).length} questions</b></div>
      </div>
      <div class="timer-label" style="margin-top:12px">Slowest five</div>
      <div>${slow.map(d => `<span class="tag ${d.outcome === 'correct' ? 'correct' : d.outcome === 'wrong' ? 'wrong' : 'skipped'}">${d.qid} · ${fmtSec(secOf(d.visits))}</span>`).join(' ')}</div>`;
    return box;
  }

  function renderResults(detail, correctCount, wrongCount, skipped, marks, topicStats) {
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
    const timeCard = renderTimeSummary(detail);
    if (timeCard) root.appendChild(timeCard);

    let filter = 'all';
    const filterRow = document.createElement('div'); filterRow.className = 'review-filter';
    const listWrap = document.createElement('div');
    root.append(filterRow, listWrap);

    function draw() {
      filterRow.innerHTML = '';
      [['all', 'All'], ['wrong', 'Wrong only'], ['skipped', 'Skipped only'], ['marked', 'Marked'], ['slow', 'Slowest first']].forEach(([key, label]) => {
        const b = document.createElement('button');
        b.className = 'btn' + (filter === key ? ' btn-primary' : '');
        b.textContent = label;
        b.onclick = () => { filter = key; draw(); };
        filterRow.appendChild(b);
      });
      listWrap.innerHTML = '';
      const shown = filter === 'slow' ? detail.slice().sort((a, b) => secOf(b.visits) - secOf(a.visits))
        : detail.filter(d => filter === 'all' || (filter === 'marked' ? d.marked : d.outcome === filter));
      shown.forEach(d => {
        const q = questions[d.qid];
        const item = document.createElement('div');
        item.className = 'review-item';
        const tagClass = d.outcome === 'correct' ? 'correct' : d.outcome === 'wrong' ? 'wrong' : 'skipped';
        const tagLabel = d.outcome === 'correct' ? 'Correct' : d.outcome === 'wrong' ? 'Wrong' : 'Skipped';
        item.innerHTML = `<span class="tag ${tagClass}">${tagLabel}</span>` + (d.marked ? ' <span class="tag marked">★ Marked</span>' : '') + (d.topic ? ` <span class="tag skipped">${escapeHtml(d.topic)}</span>` : '') +
          (d.visits && d.visits.length ? `<div class="time-line">⏱ ${fmtSec(secOf(d.visits))} · ${d.visits.length} visit${d.visits.length > 1 ? 's' : ''}: ` +
            d.visits.map(([a, b], i) => `#${i + 1} ${fmtClock(a)}–${fmtClock(b)} (${fmtSec(b - a)})`).join(' · ') + '</div>' : '');
        const qDiv = document.createElement('div');
        qDiv.className = 'q-text'; qDiv.style.marginTop = '10px';
        qDiv.innerHTML = renderMd(q.stem);
        item.appendChild(qDiv);
        const optsWrap = document.createElement('div');
        optsWrap.className = 'options';
        q.options.forEach(opt => {
          const isCorrect = d.accepted.includes(opt.letter);
          const isUserWrong = opt.letter === d.given && !d.accepted.includes(d.given);
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
          renderExtras(ex);
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

  // ---------------- review a saved attempt ----------------

  function reviewAttempt(a) {
    let c = 0, w = 0, sk = 0;
    const topicStats = {};
    const detail = qids.map(qid => {
      const q = questions[qid], given = (a.answers || {})[qid] || null;
      let outcome = 'skipped';
      if (given) { if (q.correctAll.includes(given)) { outcome = 'correct'; c++; } else { outcome = 'wrong'; w++; } } else sk++;
      if (q.topic) {
        const ts = topicStats[q.topic] = topicStats[q.topic] || { correct: 0, wrong: 0, skipped: 0, total: 0 };
        ts[outcome]++; ts.total++;
      }
      return { qid, given, correct: q.correct, accepted: q.correctAll, topic: q.topic, outcome, explanation: q.explanation, marked: (a.marked || []).includes(qid), visits: (a.qtime || {})[qid] || [] };
    });
    renderResults(detail, c, w, sk, c * cfg.marksPerQuestion - w * (cfg.negativeMarking || 0), topicStats);
  }

  // ---------------- revise mode ----------------

  function beginRevise() {
    root.innerHTML = '';
    const h = document.createElement('div');
    h.className = 'sub';
    h.textContent = `${cfg.title} — revision mode. No timer, answers shown inline.`;
    root.appendChild(h);
    qids.forEach(qid => {
      const q = questions[qid];
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = q.topic ? `<span class="tag skipped">${escapeHtml(q.topic)}</span>` : '';
      const qIndex = document.createElement('div'); qIndex.className = 'q-index'; qIndex.textContent = qid;
      const qText = document.createElement('div'); qText.className = 'q-text'; qText.innerHTML = renderMd(q.stem);
      item.append(qIndex, qText);
      const optsWrap = document.createElement('div');
      optsWrap.className = 'options';
      q.options.forEach(opt => {
        const isCorrect = q.correctAll.includes(opt.letter);
        const row = document.createElement('label');
        row.className = 'option' + (isCorrect ? ' is-correct' : '');
        const badge = isCorrect ? '<span class="tag correct" style="margin-left:8px;">Correct answer</span>' : '';
        row.innerHTML = `<input type="radio" disabled ${isCorrect ? 'checked' : ''}>
          <span><strong>${opt.letter}.</strong> ${renderMdInline(opt.text)}${badge}</span>`;
        optsWrap.appendChild(row);
      });
      item.appendChild(optsWrap);
      if (q.hint) {
        const hintEl = document.createElement('div'); hintEl.className = 'hint-content'; hintEl.style.marginTop = '10px';
        hintEl.innerHTML = '💡 ' + renderMd(q.hint);
        item.appendChild(hintEl);
      }
      if (q.explanation) {
        const ex = document.createElement('div'); ex.className = 'explain'; ex.innerHTML = renderMd(q.explanation);
        item.appendChild(ex);
        renderExtras(ex);
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
