# PYQ pipeline — real UGC NET papers → playable tests + a high-yield ranking

Input: the saved web pages of each exam (one file per exam, named like `0_jun_2026.txt`).
Output: 30 full-paper tests, ~100 topic-wise practice sets, and the `priority.html` dashboard.

> **Current state:** all 2,249 questions from the 15 sittings (Dec 2018 – Jun 2026) are already labelled
> by Claude in `pyq/topic-map.json` — nothing to run for them. Step 2 below is only needed when you add NEW papers.
> Answer keys that looked wrong or debatable while labelling are listed in `pyq/key-flags.txt`.

## Run order (each step reads what the previous one wrote)

```bash
# 1. Extract  (no AI)  — also splices in your Mermaid diagrams from pyq_diagrams.md
python tools/pyq/pyq_extract.py --src <folder with saved pages> --out . --diagrams pyq_diagrams.md

# 2. Classify — gives every question ONE topic ID from tools/pyq/pyq-topics.txt
export GEMINI_API_KEY=...            # set GEMINI_API_KEY=... on Windows cmd
python tools/pyq/pyq_classify.py --root . --ai-only      # ~150 calls, ~20 min, RESUMABLE (just re-run if it stops)
python tools/pyq/pyq_classify.py --root . --spotcheck 40 # writes pyq/spotcheck.txt: eyeball 40 random labels

# 3. (optional) make the images that aren't diagrams local, so nothing depends on the source site's CDN
python tools/pyq/pyq_localize_images.py --root .

# 4. Build — topic lines, ranking, practice sets, manifest, dashboard data
python tools/pyq/pyq_build.py --root .
```

Without `--ai-only`, step 2 uses free keyword rules only. That is a **DRAFT**: ~75–80% precise, and the
dashboard says so in a banner. Don't trust the "coaching list vs data" comparison until the AI pass has run.

## Fixing things: pyq-marks.txt
Wrong topic on some questions? Add a line to `pyq-marks.txt` and re-run step 4:

    2026-jun-p2 Q21,Q35,Q40-Q44 = C23      # these questions are Deadlock
    2025-jun-p2 Q12 *                      # star it -> appears in the "My marked questions" set

Bad lines are reported with their line number when you build.

## What to hand-edit, what not to
| File | Hand-edit? |
|---|---|
| `pyq-marks.txt`, `tools/pyq/pyq-topics.txt` | yes — these are yours |
| `pyq/papers/*.md` | yes (e.g. fix a garbled question), but **never re-run step 1 afterwards** — it overwrites them. `**Topic:**` lines are managed by step 4. |
| `pyq/sets/*`, `assets/pyq-manifest.js`, `assets/priority-data.js`, `pyq/topic-map.json`, `pyq/pyq-index.json` | no — generated |

## Things worth knowing
- **Nov 2020 Paper 2**: 24 of 100 questions are OCR-damaged in the source (options literally say "OCR review required"). They're kept out of tests (76 playable) but still counted in the ranking. See `pyq/pyq-review.txt`.
- **7 questions accept more than one answer** (the official key allows it). The player scores any accepted option; the answer line reads `**Answer:** A, C`.
- **Diagrams**: where `pyq_diagrams.md` has a faithful Mermaid version, it replaces the image. Partial ones (e.g. the planar-graph options) keep the real image. `pyq/pyq-review.txt` lists images still without a diagram.
- **Exact repeats are rare** (~0.5% of Paper 2). The ranking is about *concepts*, not questions to memorise.
- **Paper 1 topics** were built from the standard 10 Paper 1 units, not from a file you supplied — review `tools/pyq/pyq-topics.txt` (`@topics paper1`).
