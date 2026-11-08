/* ==========================================================================
   Progress store — everything about your attempts lives in ONE object:

   {
     app: "ugc-net-combo", version: 1, updated: "<ISO time>",
     tests: {
       "<slug>": { attempts: [ { id, date, correct, wrong, skipped, total, marks,
                                 maxMarks, timeTakenSec, answers: {Q1:"B",...},
                                 topics: { "<topic>": {correct,wrong,skipped,total} } } ] }
     },
     inProgress: {
       "<slug>": { answers, visited, current, remainingMs, savedAt }
     }
   }

   It is kept in the browser (localStorage) automatically, and can be
   exported to / imported from a single JSON file, so the same file works
   on phone and laptop. Importing MERGES: attempts are matched by id, so
   nothing is lost or duplicated when you combine files from two devices.
   ========================================================================== */
var Progress = (function () {
  var KEY = 'combo_progress_v1';
  var REPO_FILE = 'progress/progress.json';   // optional copy kept in the repo

  function empty() { return { app: 'ugc-net-combo', version: 1, updated: null, tests: {}, inProgress: {} }; }

  function load() {
    var data;
    try { data = JSON.parse(localStorage.getItem(KEY)) || empty(); } catch (e) { data = empty(); }
    data.tests = data.tests || {}; data.inProgress = data.inProgress || {};
    // one-time migration of the old "last score only" record
    try {
      var old = JSON.parse(localStorage.getItem('combo_last') || 'null');
      if (old) {
        Object.keys(old).forEach(function (slug) {
          var r = old[slug], t = data.tests[slug] = data.tests[slug] || { attempts: [] };
          if (!t.attempts.length) t.attempts.push({ id: 'legacy-' + slug, date: null, correct: r.correct, wrong: r.wrong,
            skipped: r.total - r.correct - r.wrong, total: r.total, marks: r.marks });
        });
        localStorage.removeItem('combo_last');
        save(data);
      }
    } catch (e) {}
    return data;
  }

  function save(data) {
    data.updated = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { console.warn('could not save progress', e); }
  }

  function attempts(slug) { var t = load().tests[slug]; return t ? t.attempts : []; }

  function addAttempt(slug, rec) {
    var data = load();
    var t = data.tests[slug] = data.tests[slug] || { attempts: [] };
    rec.id = rec.id || (Date.now().toString(36) + Math.random().toString(36).slice(2, 7));
    rec.date = rec.date || new Date().toISOString();
    t.attempts.push(rec);
    delete data.inProgress[slug];
    save(data);
  }

  function getInProgress(slug) { return load().inProgress[slug] || null; }
  function setInProgress(slug, state) { var d = load(); state.savedAt = new Date().toISOString(); d.inProgress[slug] = state; save(d); }
  function clearInProgress(slug) { var d = load(); delete d.inProgress[slug]; save(d); }

  // ---- merge two progress objects (used by import and repo-load) ----
  function merge(base, incoming) {
    if (!incoming || !incoming.tests) throw new Error('Not a progress file');
    Object.keys(incoming.tests).forEach(function (slug) {
      var into = base.tests[slug] = base.tests[slug] || { attempts: [] };
      var have = {}; into.attempts.forEach(function (a) { have[a.id] = true; });
      (incoming.tests[slug].attempts || []).forEach(function (a) { if (!have[a.id]) { into.attempts.push(a); have[a.id] = true; } });
      into.attempts.sort(function (x, y) { return String(x.date || '').localeCompare(String(y.date || '')); });
    });
    // unfinished tests: keep whichever copy was saved most recently
    Object.keys(incoming.inProgress || {}).forEach(function (slug) {
      var a = base.inProgress[slug], b = incoming.inProgress[slug];
      if (!a || String(b.savedAt) > String(a.savedAt)) base.inProgress[slug] = b;
    });
    return base;
  }

  function exportFile() {
    var data = load();
    var blob = new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'progress.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function importFile(file) {
    return file.text().then(function (txt) {
      var data = merge(load(), JSON.parse(txt));
      save(data);
      return data;
    });
  }

  function loadFromRepo() {
    return fetch(REPO_FILE + '?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('No ' + REPO_FILE + ' in the repo yet'); return r.json(); })
      .then(function (incoming) { var data = merge(load(), incoming); save(data); return data; });
  }


  // ---- import a saved coaching-site report page (needs assets/report-map.js) ----
  // The report marks the answer key with "is_correct_ans" and your wrong pick with
  // "is_wrong_ans". A question you answered correctly is marked only by a trailing
  // space after "is_correct_ans" in the class attribute; no marker = not attempted.
  function readReport(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var picks = {};   // serial -> { given: 'A'|null, key: 'B' }
    doc.querySelectorAll('div.qus_ans_wrap').forEach(function (b) {
      var serial = parseInt(b.getAttribute('data-serial'), 10);
      var lis = b.querySelectorAll('.ans_wrapper_mock li.English');
      if (!lis.length) lis = b.querySelectorAll('.ans_wrapper_mock li');
      var key = null, given = null, attempted = false;
      Array.prototype.slice.call(lis, 0, 4).forEach(function (li, i) {
        var cls = li.getAttribute('class') || '', L = 'ABCD'[i];
        if (cls.indexOf('is_correct_ans') !== -1) { key = L; if (/is_correct_ans\s+$/.test(cls)) attempted = true; }
        if (cls.indexOf('is_wrong_ans') !== -1) given = L;
      });
      if (!given && attempted) given = key;
      picks[serial] = { given: given, key: key };
    });
    return picks;
  }

  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }

  // Adds the report as one attempt each for Paper 1, Paper 2 and the full mock of test N.
  function importReport(html, testNo) {
    if (!window.REPORT_MAP || !REPORT_MAP[testNo]) throw new Error('No question map for test ' + testNo);
    var picks = readReport(html);
    var n = Object.keys(picks).length;
    if (!n) throw new Error('No questions found — save the full report page (Ctrl+S) and try again');
    var data = load(), summary = {};
    ['p1', 'p2', 'full'].forEach(function (tag) {
      var m = REPORT_MAP[testNo][tag], slug = 'combo-' + (testNo < 10 ? '0' : '') + testNo + '-' + tag;
      var answers = {}, topics = {}, c = 0, w = 0, sk = 0;
      m.serials.forEach(function (serial, i) {
        var qid = 'Q' + (i + 1), p = picks[serial] || {}, key = m.key[i], topic = m.topics[i];
        var out = 'skipped';
        if (p.given) { answers[qid] = p.given; if (p.given === key) { out = 'correct'; c++; } else { out = 'wrong'; w++; } } else sk++;
        var ts = topics[topic] = topics[topic] || { correct: 0, wrong: 0, skipped: 0, total: 0 };
        ts[out]++; ts.total++;
      });
      var t = data.tests[slug] = data.tests[slug] || { attempts: [] };
      var id = 'report-' + slug + '-' + hash(JSON.stringify(answers));
      if (!t.attempts.some(function (a) { return a.id === id; })) {
        t.attempts.push({ id: id, date: new Date().toISOString(), source: 'coaching report', correct: c, wrong: w,
          skipped: sk, total: m.serials.length, marks: c * 2, maxMarks: m.serials.length * 2, answers: answers, topics: topics });
      }
      summary[tag] = c + ' correct, ' + w + ' wrong, ' + sk + ' skipped';
    });
    save(data);
    return summary;
  }

  function reset() { localStorage.removeItem(KEY); }

  return { load: load, attempts: attempts, addAttempt: addAttempt, getInProgress: getInProgress,
           setInProgress: setInProgress, clearInProgress: clearInProgress,
           exportFile: exportFile, importFile: importFile, importReport: importReport, readReport: readReport, loadFromRepo: loadFromRepo, reset: reset };
})();
