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
tests/
  combo-NN-p1.md        — Paper 1 of combo test NN
  combo-NN-p2.md        — Paper 2
  combo-NN-full.md      — both papers together (3-hour mock)
  img/tN/               — figures used by test N
```

Each test is one Markdown file: `## Qn` (question), `## Qn - Options`, then `## Qn - Hint` holding `**Answer:**`, `**Topic:**` and the explanation. Orange "⚠ Note" boxes mark questions where the coaching key or the question itself looks wrong.

The last score for each test is saved in the browser (localStorage) and shown on the home page.

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
