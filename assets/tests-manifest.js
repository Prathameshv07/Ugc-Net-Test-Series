/* ==========================================================================
   THE ONE FILE YOU EDIT TO REGISTER A NEW TEST.
   Add one object per test. The index page reads this array to build the
   picker — you never need to hand-edit index.html itself.

   Fields:
     title      - shown on the picker card
     category   - tests are grouped under this heading
     path       - relative path (from index.html) to the test's .html file
     questions  - question count (shown on the card; purely informational)
     minutes    - time limit (shown on the card; purely informational —
                  the REAL timer value lives in that test's own TEST_CONFIG)
   ========================================================================== */

const TESTS_MANIFEST = [
  {
    title: "DBMS — Test 1",
    category: "Paper 2 (CSA) — Topic-wise",
    path: "paper2-csa/topic-wise/dbms-01.html",
    questions: 25,
    minutes: 30
  },
  // {
  //   title: "Mix — Test 1",
  //   category: "Paper 1 — Mix",
  //   path: "templates/test-template.html",
  //   questions: 50,
  //   minutes: 60
  // }
  // Add new tests below, following the same shape:
  // {
  //   title: "OS — Test 2",
  //   category: "Paper 2 (CSA) — Topic-wise",
  //   path: "tests/paper2-csa/os-02.html",
  //   questions: 25,
  //   minutes: 30
  // },
];
