# UGC NET · Combo Test Series

A personal, static mock-test site for the 10 coaching-class combo tests (Paper 1 + Paper 2). No backend and no build step: it runs on GitHub Pages.

## Folder structure

```
index.html              — test picker (reads assets/tests-manifest.js)
player.html             — the test player (?test=<slug>)
assets/
  quiz-style.css        — styles
  player-engine.js      — loads a test's Markdown file, runs timer, scoring, revise mode
  tests-manifest.js     — list of the 30 tests (10 × Paper 1 / Paper 2 / Full)
  progress.js           — saving, history, export / import of progress.json, report import
  report-map.js         — coaching question numbers → this site's numbers, key and topics
progress/               — optional place to upload your progress.json
tests/
  combo-NN-p1.md        — Paper 1 of combo test NN
  combo-NN-p2.md        — Paper 2
  combo-NN-full.md      — both papers together (3-hour mock)
  img/tN/               — figures used by test N
```

Each test is one Markdown file: `## Qn` (question), `## Qn - Options`, then `## Qn - Hint` holding `**Answer:**`, `**Topic:**` and the explanation. Orange "⚠ Note" boxes mark questions where the coaching key or the question itself looks wrong.

## Progress (no server needed)

- **Autosave:** while a timed test is running, answers, position and remaining time are saved in the browser every few seconds. Close the tab and come back later to see **Resume** on the test's start screen. The timer pauses while you are away.
- **History:** every submitted attempt is kept (date, score, time taken, your answers, topic-wise stats). The start screen lists past attempts, and the home page shows last/best marks.
- **One file for everything:** **⬇ Export file** downloads `progress.json` with all tests' attempts and any unfinished test. **⬆ Import file** merges a file back in, on any device. Merging never duplicates or deletes attempts, so phone and laptop files can be combined.
- **Repo copy (optional):** upload your exported `progress.json` into the `progress/` folder of this repo (GitHub website or app). On another device, press **↻ Load repo copy** to merge it. GitHub Pages can read files from the repo but can't write to them, so uploading the file is a manual step.

- **Coaching report import:** save a test's report page from the coaching site (Ctrl+S → "Webpage, HTML only"), pick the combo test number on the home page and press **⬆ Import report page**. It reads the answer key and your marked answers and adds the attempt to Paper 1, Paper 2 and the full mock of that test. Importing the same page twice adds nothing. Each saved attempt has a **Review** button on the test's start screen that shows your answers against the correct ones with explanations.

Everything is stored under one browser key (`combo_progress_v1`) and handled by `assets/progress.js`.

## Deploy on GitHub Pages

1. Create a new repository and upload everything in this folder (keep the folder structure).
2. Settings → Pages → Source: **Deploy from a branch** → branch `main`, folder `/ (root)` → Save.
3. After a minute the site is live at `https://<username>.github.io/<repo>/`.

## Run locally

Browsers block loading local files, so double-clicking `index.html` won't work. Instead:

```
python3 -m http.server
```

then open http://localhost:8000.
