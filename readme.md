# NET Practice

A lightweight, self-hosted mock-test player for UGC NET exam prep — timed tests, an untimed revision mode, hints, per-topic weak-area analytics, math (KaTeX), and diagrams (Mermaid). No backend, no database, no build step: static files on GitHub Pages, and every test is **one Markdown file**.

## What it does

- **Timed mock tests** — OMR-style question palette (answered / visited / not-visited), countdown timer, per-question hints that don't spoil the answer.
- **Untimed revision mode** — every question with the answer and full explanation shown inline, any time.
- **Weak-topic accuracy chart** on the results screen, worst topic first.
- **Rich content** — Markdown tables, images, LaTeX math (`$...$`), and Mermaid diagrams all render natively. Diagrams are meant to be used sparingly — see `prompt-net-practice-v3.txt`'s guidance on when one actually helps versus when it's just decoration.
- **One file per test** — question, options, hint, answer, and explanation all live together. Nothing to keep in sync across files, nothing to lose track of in a diff.

## Folder structure

```
index.html                     — the test picker (reads assets/tests-manifest.js)
player.html                    — the universal test player (?test=<slug> picks the test)
assets/
  quiz-style.css                 — shared visual design
  player-engine.js                — all quiz logic: fetch, parse, render, score
  tests-manifest.js               — the ONE file you edit to register a new test
templates/
  test-template.md                 — duplicate this per new test (hand-authoring)
paper2-csa/topic-wise/            — your actual tests live here, e.g. 01-dbms.md
```

## The single-file format

```
## Q1
<question text — Markdown, tables, images, math, all fine>

## Q1 - Options
(A) ...
(B) ...
(C) ...
(D) ...

## Q1 - Hint
<one-sentence hint, doesn't reveal the answer>

**Answer:** C
**Topic:** whatever label helps you find this again
<the rest of the explanation — as much as you want, any Markdown>

## Q2
...
```

The player reads `**Answer:**` and `**Topic:**` directly off those lines for scoring and the weak-topic chart. Get that exact wording wrong and the question silently scores as unanswered — no error is thrown, so double-check this if a score looks off. When content is generated via `generate_answers.py`, the explanation is a richer structured breakdown (Topic/Solution/Option analysis/Trap/Rule to memorise/Concept Refresher/Flashcard) — the two lines above are still exactly what the player looks for regardless of everything else around them.

## Adding a new test

**From a saved test-site report:**
```bash
python3 tools/extract_html.py report.html paper2-csa/topic-wise 12-newtest
python3 tools/generate_answers.py paper2-csa/topic-wise/12-newtest-source.json \
  paper2-csa/topic-wise/12-newtest.md tools/prompt-net-practice-v3.txt \
  tools/CSA_Syllabus.pdf paper2-csa/topic-wise/12-newtest-assets
```
`generate_answers.py` calls the Gemini API once per question. The prompt tells the model to solve independently and treat the site's answer key as evidence, not authority — it'll flag a `⚠ KEY CONFLICT` if its own analysis disagrees, which the script also surfaces in its console output so you know which questions to double-check.

**By hand:** duplicate `templates/test-template.md`, follow the notes at the top, add one entry to `assets/tests-manifest.js`.

Either way, the manifest entry is what makes a test show up on the picker — the `.md` file alone won't appear without it:
```js
{
  slug: "12-newtest",
  title: "New Test",
  category: "Paper 2 (CSA) — Topic-wise",
  file: "paper2-csa/topic-wise/12-newtest.md",
  questions: 25,
  minutes: 30,
  marksPerQuestion: 2,
  negativeMarking: 0
}
```

## Diagrams and math

Both render natively — nothing to configure. A `$...$` inline or `$$...$$` block renders as math (KaTeX). A ` ```mermaid ` fenced code block renders as an actual diagram. Per the prompt's own guidance: most questions need neither — reach for a diagram only when a concept is genuinely structural or sequential (state machines, scheduling timelines, tree/graph structures) and would be clearer as a picture than a sentence.

## Local development

Don't test by double-clicking the HTML files — browsers block `fetch()` of local files over `file://`. Instead:
```bash
python3 -m http.server
```
then open `http://localhost:8000`.

## Tech

Vanilla HTML/CSS/JS, [marked.js](https://marked.js.org/) for Markdown, [KaTeX](https://katex.org/) for math, [Mermaid](https://mermaid.js.org/) for diagrams, [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) for extraction, the [Gemini API](https://ai.google.dev/) for explanation generation.

## License

[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc/4.0/)

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.  
You are free to **use, share, and adapt** the material for **non-commercial and educational purposes**, as long as proper **credit is given** and any changes are noted.

Learn more: [http://creativecommons.org/licenses/by-nc/4.0/](http://creativecommons.org/licenses/by-nc/4.0/)
