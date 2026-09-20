# NET Practice

A lightweight, self-hosted mock-test player for UGC NET exam prep — timed tests, an untimed revision mode, hints, and per-topic weak-area analytics. No backend, no database, no build step: it's static files on GitHub Pages, and every test is just two Markdown files.

> ⚠️ **Before making this repo public:** if your `questions.md`/`answers.md` files contain content extracted from a paid test-series provider, keep the repo **private** (GitHub's free tier supports private repos). Making it public would redistribute that provider's copyrighted material. This README and the code are fine to share either way — it's the actual question content that needs to stay private.

## What it does

- **Timed mock tests** with an OMR-style question palette (answered / visited / not-visited), a countdown timer, and per-question hints you can reveal without spoiling the answer.
- **Untimed revision mode** — browse every question with the answer and full explanation shown inline, any time, no need to retake a test just to reread it.
- **Results screen** with a correct/wrong/skipped breakdown and a weakest-topic-first accuracy chart, so you know exactly what to restudy.
- **Markdown-native content** — questions, options, hints, and explanations all support tables, images, and LaTeX math (`$...$`, rendered via KaTeX), so writing content is just... writing.
- **Two people, independent progress** — since it's just static files with no backend, everyone's attempt history lives in their own browser only.

## Live setup

1. Fork or clone this repo.
2. Enable GitHub Pages (Settings → Pages → deploy from the `main` branch).
3. Open the Pages URL — that's it, no build step, no server to run.

## Folder structure

```
index.html                     — the test picker (reads assets/tests-manifest.js)
player.html                    — the universal test player (?test=<slug> picks the test)
assets/
  quiz-style.css                 — shared visual design
  player-engine.js                — all quiz logic: fetch, parse, render, score
  tests-manifest.js               — the ONE file you edit to register a new test
templates/
  questions-template.md           — duplicate this per new test
  answers-template.md             — duplicate this per new test
tools/
  extract_html.py                  — turns a saved test-site report into questions.md + a ground-truth JSON
  generate_answers.py              — calls the Gemini API to write explanations, grounded on that ground truth
  migrate_old_test.py              — one-off converter for older-format tests
<category>/<subcategory>/        — your actual test content lives here, e.g. paper2-csa/topic-wise/
```

## Adding a new test

**By hand:** duplicate `templates/questions-template.md` and `templates/answers-template.md`, follow the format notes at the top of each, then add one entry to `assets/tests-manifest.js`.

**From a saved test-site report:**
```bash
python3 tools/extract_html.py report.html paper2-csa/topic-wise os-03
python3 tools/generate_answers.py paper2-csa/topic-wise/os-03-questions.md \
  paper2-csa/topic-wise/os-03-source.json paper2-csa/topic-wise/os-03-answers.md \
  tools/prompt-net-practice.txt tools/CSA_Syllabus.pdf paper2-csa/topic-wise/os-03-assets
```
Then add the manifest entry. `extract_html.py` pulls the correct answer straight from the source site's own markup rather than guessing, and `generate_answers.py` calls the Gemini API once per question (free tier) to write a topic/hint/explanation, using the site's official solution as grounding when one exists.

### The `answers.md` contract

Every `## Qn` section must start with exactly:
```
**Answer:** B
**Topic:** Some Topic
```
The player reads these two lines directly for scoring and the weak-topic chart. Get the format wrong and that question silently scores as unanswered — no error is thrown, so double-check this if a score looks off.

## Local development

Don't test by double-clicking the HTML files — browsers block `fetch()` of local `.md` files over `file://`. Instead:
```bash
python3 -m http.server
```
then open `http://localhost:8000`.

## Tech

Vanilla HTML/CSS/JS, [marked.js](https://marked.js.org/) for Markdown, [KaTeX](https://katex.org/) for math, [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) for extraction, the [Gemini API](https://ai.google.dev/) for explanation generation. No frameworks, no build step, no dependencies to install for the site itself.

## License

Personal project — add a license of your choice if you make the code (not the question content) public. [MIT](https://choosealicense.com/licenses/mit/) is a reasonable default if you're unsure.
