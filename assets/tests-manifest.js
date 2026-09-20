/* ==========================================================================
   THE ONE FILE YOU EDIT TO REGISTER A NEW TEST.
   Each entry needs a unique "slug" -- that's what player.html?test=<slug>
   looks up. minutes/marksPerQuestion/negativeMarking drive the actual timer
   and scoring (set them explicitly per test; no auto-calculation anymore).
   ========================================================================== */

var TESTS_MANIFEST = [
  {
    slug: "01-dbms",
    title: "DBMS — Test 1",
    category: "Paper 2 (CSA) — Topic-wise",
    questionsFile: "paper2-csa/topic-wise/01-dbms-questions.md",
    answersFile: "paper2-csa/topic-wise/01-dbms-answers.md",
    questions: 25,
    minutes: 30,
    marksPerQuestion: 2,
    negativeMarking: 0
  },
  {
    slug: "02-os",
    title: "OS — Test 2",
    category: "Paper 2 (CSA) — Topic-wise",
    questionsFile: "paper2-csa/topic-wise/02-os-questions.md",
    answersFile: "paper2-csa/topic-wise/02-os-answers.md",
    questions: 24,
    minutes: 30,
    marksPerQuestion: 2,
    negativeMarking: 0
  },
  {
    slug: "03-toc",
    title: "TOC — Test 3",
    category: "Paper 2 (CSA) — Topic-wise",
    questionsFile: "paper2-csa/topic-wise/03-toc-questions.md",
    answersFile: "paper2-csa/topic-wise/03-toc-answers.md",
    questions: 25,
    minutes: 30,
    marksPerQuestion: 2,
    negativeMarking: 0
  },
  {
    slug: "04-se",
    title: "SE — Test 4",
    category: "Paper 2 (CSA) — Topic-wise",
    questionsFile: "paper2-csa/topic-wise/04-se-questions.md",
    answersFile: "paper2-csa/topic-wise/04-se-answers.md",
    questions: 25,
    minutes: 30,
    marksPerQuestion: 2,
    negativeMarking: 0
  },
  {
    slug: "05-coa",
    title: "COA — Test 5",
    category: "Paper 2 (CSA) — Topic-wise",
    questionsFile: "paper2-csa/topic-wise/05-coa-questions.md",
    answersFile: "paper2-csa/topic-wise/05-coa-answers.md",
    questions: 25,
    minutes: 30,
    marksPerQuestion: 2,
    negativeMarking: 0
  }
  // Add new tests below, following the same shape.
];
