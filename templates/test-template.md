<!--
HOW TO USE THIS TEMPLATE (single-file format)
================================================
One file per test. Everything for a question lives together: question,
options, hint, answer, and explanation -- in that order, under the SAME
three headings the player recognises. There is no separate answers file
anymore.

- "## Qn" is the question stem. Full Markdown works: tables, images
  (![alt](url) or a plain <img> tag), bold/italic, and $...$ math (KaTeX).
  A ```mermaid fenced block renders as an actual diagram -- use sparingly,
  only when a diagram genuinely clarifies structure (see prompt-net-practice-v3.txt).
- "## Qn - Options" lists the choices as (A)/(B)/(C)/(D). Do NOT mark the
  correct one here -- that's declared later, in the Answer line below.
- "## Qn - Hint" is optional (delete the heading if a question has none).
  Right after the hint sentence, on the SAME section (no new heading),
  write the answer and explanation:
    **Answer:** C
    **Topic:** Whatever label helps you find this again later
    <however much explanation you want, any Markdown>
  The player reads "**Answer:**" and "**Topic:**" directly off these lines
  for scoring and the weak-topic chart -- get that exact wording right or
  the question silently scores as unanswered.
- Duplicate the block below per question. Qn must be unique (Q1, Q2, Q3...).

If you're generating this test via generate_answers.py instead of writing
it by hand, the AI writes a richer structured explanation automatically
(Topic/Solution/Option analysis/Trap/Rule to memorise/etc.) -- this simple
shape is just for hand-authoring a question quickly yourself.
-->

## Q1
Which data structure uses FIFO (First-In-First-Out) ordering?

## Q1 - Options
(A) Stack
(B) Queue
(C) Tree
(D) Graph

## Q1 - Hint
Think of a real queue at a ticket counter — who gets served first?

**Answer:** B
**Topic:** Data Structures

The FIFO principle (First-In-First-Out) is the defining property of a queue.
A stack is LIFO (Last-In-First-Out) — the classic wrong-option trap here.

## Q2
Given the truth table below, which gate does it represent?

| A | B | Output |
|---|---|--------|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

## Q2 - Options
(A) AND
(B) OR
(C) NAND
(D) XOR

## Q2 - Hint
This is the inverse of a well-known gate's truth table.

**Answer:** C
**Topic:** Digital Logic

This is the inverse of an AND gate's truth table (AND is 0,0,0,1 — flip
every output and you get NAND).
