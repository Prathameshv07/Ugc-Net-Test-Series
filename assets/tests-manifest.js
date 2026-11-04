/* The 10 coaching-class combo tests. Each test = Paper 1, Paper 2 and a full mock. */
var TESTS_MANIFEST = [
 {
  "slug": "combo-01-p1",
  "title": "Combo Test 1 · Paper 1",
  "category": "Combo Test 01",
  "file": "tests/combo-01-p1.md",
  "questions": 49,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-01-p2",
  "title": "Combo Test 1 · Paper 2 (CSA)",
  "category": "Combo Test 01",
  "file": "tests/combo-01-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-01-full",
  "title": "Combo Test 1 · Full Mock (P1 + P2)",
  "category": "Combo Test 01",
  "file": "tests/combo-01-full.md",
  "questions": 149,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-02-p1",
  "title": "Combo Test 2 · Paper 1",
  "category": "Combo Test 02",
  "file": "tests/combo-02-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-02-p2",
  "title": "Combo Test 2 · Paper 2 (CSA)",
  "category": "Combo Test 02",
  "file": "tests/combo-02-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-02-full",
  "title": "Combo Test 2 · Full Mock (P1 + P2)",
  "category": "Combo Test 02",
  "file": "tests/combo-02-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-03-p1",
  "title": "Combo Test 3 · Paper 1",
  "category": "Combo Test 03",
  "file": "tests/combo-03-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-03-p2",
  "title": "Combo Test 3 · Paper 2 (CSA)",
  "category": "Combo Test 03",
  "file": "tests/combo-03-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-03-full",
  "title": "Combo Test 3 · Full Mock (P1 + P2)",
  "category": "Combo Test 03",
  "file": "tests/combo-03-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-04-p1",
  "title": "Combo Test 4 · Paper 1",
  "category": "Combo Test 04",
  "file": "tests/combo-04-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-04-p2",
  "title": "Combo Test 4 · Paper 2 (CSA)",
  "category": "Combo Test 04",
  "file": "tests/combo-04-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-04-full",
  "title": "Combo Test 4 · Full Mock (P1 + P2)",
  "category": "Combo Test 04",
  "file": "tests/combo-04-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-05-p1",
  "title": "Combo Test 5 · Paper 1",
  "category": "Combo Test 05",
  "file": "tests/combo-05-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-05-p2",
  "title": "Combo Test 5 · Paper 2 (CSA)",
  "category": "Combo Test 05",
  "file": "tests/combo-05-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-05-full",
  "title": "Combo Test 5 · Full Mock (P1 + P2)",
  "category": "Combo Test 05",
  "file": "tests/combo-05-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-06-p1",
  "title": "Combo Test 6 · Paper 1",
  "category": "Combo Test 06",
  "file": "tests/combo-06-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-06-p2",
  "title": "Combo Test 6 · Paper 2 (CSA)",
  "category": "Combo Test 06",
  "file": "tests/combo-06-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-06-full",
  "title": "Combo Test 6 · Full Mock (P1 + P2)",
  "category": "Combo Test 06",
  "file": "tests/combo-06-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-07-p1",
  "title": "Combo Test 7 · Paper 1",
  "category": "Combo Test 07",
  "file": "tests/combo-07-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-07-p2",
  "title": "Combo Test 7 · Paper 2 (CSA)",
  "category": "Combo Test 07",
  "file": "tests/combo-07-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-07-full",
  "title": "Combo Test 7 · Full Mock (P1 + P2)",
  "category": "Combo Test 07",
  "file": "tests/combo-07-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-08-p1",
  "title": "Combo Test 8 · Paper 1",
  "category": "Combo Test 08",
  "file": "tests/combo-08-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-08-p2",
  "title": "Combo Test 8 · Paper 2 (CSA)",
  "category": "Combo Test 08",
  "file": "tests/combo-08-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-08-full",
  "title": "Combo Test 8 · Full Mock (P1 + P2)",
  "category": "Combo Test 08",
  "file": "tests/combo-08-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-09-p1",
  "title": "Combo Test 9 · Paper 1",
  "category": "Combo Test 09",
  "file": "tests/combo-09-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-09-p2",
  "title": "Combo Test 9 · Paper 2 (CSA)",
  "category": "Combo Test 09",
  "file": "tests/combo-09-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-09-full",
  "title": "Combo Test 9 · Full Mock (P1 + P2)",
  "category": "Combo Test 09",
  "file": "tests/combo-09-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-10-p1",
  "title": "Combo Test 10 · Paper 1",
  "category": "Combo Test 10",
  "file": "tests/combo-10-p1.md",
  "questions": 50,
  "minutes": 60,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-10-p2",
  "title": "Combo Test 10 · Paper 2 (CSA)",
  "category": "Combo Test 10",
  "file": "tests/combo-10-p2.md",
  "questions": 100,
  "minutes": 120,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 },
 {
  "slug": "combo-10-full",
  "title": "Combo Test 10 · Full Mock (P1 + P2)",
  "category": "Combo Test 10",
  "file": "tests/combo-10-full.md",
  "questions": 150,
  "minutes": 180,
  "marksPerQuestion": 2,
  "negativeMarking": 0
 }
];
