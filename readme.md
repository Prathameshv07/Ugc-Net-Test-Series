# NET Practice — static test series (no CSV, no backend)

Everything runs as plain static files — works on GitHub Pages with zero
build step. Each test is a pair of files (`.html` + `.md`); one shared
engine and stylesheet power every test page; one manifest file drives the
picker on the home page.

## File structure

```
index.html                     ← the picker (reads assets/tests-manifest.js)
assets/
  quiz-style.css                ← shared look, used by every page
  quiz-engine.js                 ← shared logic, used by every test page
  tests-manifest.js              ← the ONE file you edit to register a test
templates/
  test-template.html             ← duplicate this per new test
  answers-template.md            ← duplicate this per new test
```

## Adding a new test — the full workflow

1. Copy `templates/test-template.html` and `templates/answers-template.md`
   into wherever you're organizing tests (e.g. `tests/paper2-csa/dbms-01.html`
   and `tests/paper2-csa/dbms-01.md`) — keep the same base filename for both.
2. In the `.html` file:
   - Fill in `TEST_CONFIG` (name, timeMinutes, marksPerQuestion, and
     `answerKey` pointing at the matching `.md` file).
   - Fix the `../assets/...` paths if you've placed the file in a
     different folder depth than the template.
   - Duplicate a `.question` block per question. For each:
     - `data-id="Qn"` — must match a `## Qn` heading in the `.md` file.
     - `data-topic="..."` — optional, powers the weak-topic chart on Mix/PYP
       tests. Skip it on single-topic tests.
     - Mark the correct option with `data-correct="true"`.
     - Optionally fill the `.hint-content` block (text, tips, or a YouTube
       `<iframe>` embed) — shown on demand during the attempt, doesn't give
       the answer away.
3. In the `.md` file: one `## Qn` heading per question, with the explanation
   underneath (full Markdown — tables, images, embeds all work).
4. Add one entry to `assets/tests-manifest.js` pointing at the new `.html`
   file. This is what makes it show up on the home page picker.

## How taking a test works

- First time (per name, per test): only **Start test (timed)** is offered —
  a genuine cold attempt, which is what actually builds exam recall.
- After finishing once: the same page always offers **Retake (timed)** for
  another real attempt, and **Revise (view Q&A, no timer)** to browse freely
  — you never need to redo a timed test just to reread it.
- Results show a correct/wrong/skipped donut and, if you used `data-topic`,
  a weakest-topic-first accuracy bar list.
- Everything (who's taking it, attempt history, last scores) is stored in
  that browser's `localStorage` — it's per-device, not synced between you
  and your friend. Each of you sees your own history on your own device.

## Two things to remember

- **Test locally with a server, not by double-clicking the file.** Opening
  an `.html` file directly (`file://`) blocks the fetch of its `.md` answer
  key — that's a browser security restriction, not a bug. Run
  `python3 -m http.server` in the project folder and open
  `http://localhost:8000` to test before pushing. It works normally once
  hosted on GitHub Pages (that's real `http`).
- **The manifest is the only place a test "exists" for the picker.** Creating
  the `.html`/`.md` pair alone won't make it show up on the home page —
  add its entry to `tests-manifest.js` too.
