<!-- Combo Test 2 · Paper 2 (CSA) · original question numbers kept in the source data -->

## Q1
<div class="stem"><p>Which one of the following non functional quality attributes is not highly affected by the architecture of the software?</p></div>

## Q1 - Options
(A) Performance
(B) Reliability
(C) Usability
(D) Portability

## Q1 - Hint
**Answer:** C  
**Topic:** Software Engineering – Software Architecture

Architecture (how components are structured, distributed and communicate) strongly determines **performance, reliability, portability** and security. **Usability** depends mostly on user-interface design, so it is the attribute least affected by architecture.

## Q2
<div class="stem"><p>Consider the minterm list form of a Boolean function F given below.</p> <p>F(P, Q, R, S) = Σm(0, 2, 5, 7, 9, 11) + d(3, 8, 10, 12, 14)</p> <p>Here, m denotes a minterm and d denotes a don’t care term. The number of essential prime implicants of the function F is _______ .</p></div>

## Q2 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q2 - Hint
**Answer:** A  
**Topic:** Digital Logic – K-Map

F(P,Q,R,S) = Σm(0,2,5,7,9,11) + d(3,8,10,12,14).

**Step 1 – Form the largest groups** (don't-cares may be used):

- **Q'S'** = (0, 2, 8, 10) — uses dc 8, 10
- **P'QS** = (5, 7)
- **PQ'** = (8, 9, 10, 11) — uses dc 8, 10

**Step 2 – Check which are essential:**

- m0 is covered only by Q'S' → essential
- m5 is covered only by P'QS → essential
- m9 is covered only by PQ' → essential

Remaining minterms 2, 7, 11 are already covered by these.

Essential prime implicants = **3**.

## Q3
<div class="stem"><p>A lexical analyzer uses the following patterns to recognize three tokens T1, T2, and T3 over the alphabet {a,b,c}.</p> <p>T1: a?(b∣c)*a</p> <p>T2: b?(a∣c)*b</p> <p>T3: c?(b∣a)*c</p> <p>Note that ‘x?’ means 0 or 1 occurrence of the symbol x. Note also that the analyzer outputs the token that matches the longest possible prefix.</p> <p>If the string bbaacabc is processes by the analyzer, which one of the following is the sequence of tokens it outputs?</p></div>

## Q3 - Options
(A) T1T2T3
(B) T1T1T3
(C) T2T1T3
(D) T3T3

## Q3 - Hint
**Answer:** D  
**Topic:** Compiler Design – Lexical Analysis

Rewrite: T1 = a?(b|c)\*a, T2 = b?(a|c)\*b, T3 = c?(a|b)\*c. The analyser takes the **longest matching prefix**.

**Input: bbaacabc**

**Token 1** – try each pattern on the prefix:

- T1: "bba" (skip a?, (b|c)\* = bb, then a) → length 3
- T2: "bb" (b?, then b) → length 2
- T3: "bbaac" (skip c?, (a|b)\* = bbaa, then c) → length **5** ✔ longest

**Token 2** – remaining "abc":

- T1: only "a" → length 1
- T3: "abc" ((a|b)\* = ab, then c) → length **3** ✔

Output: **T3 T3**.

## Q4
<div class="stem"><p>The statement (¬ p) ⇒ (¬ q) is logically equivalent to which of the statements below?</p> <p>I. p ⇒ q</p> <p>II. q ⇒ p</p> <p>III. (¬q) ∨ p</p> <p>IV. (¬p) ∨ q</p></div>

## Q4 - Options
(A) I only
(B) II and IV only
(C) II only
(D) II and III only

## Q4 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Propositional Logic

(¬p) ⇒ (¬q) ≡ ¬(¬p) ∨ ¬q ≡ **p ∨ ¬q**.

- I. p ⇒ q ≡ ¬p ∨ q ✘
- II. q ⇒ p ≡ ¬q ∨ p ✔ (contrapositive of the given statement)
- III. ¬q ∨ p ✔
- IV. ¬p ∨ q ✘

## Q5
<div class="stem"><p>In perspective projection (from 3D to 2D), objects behind the centre of projection are projected upside down and backward onto the view-plane. This is known as</p></div>

## Q5 - Options
(A) Topological distortion
(B) Vanishing point
(C) View confusion
(D) Perspective foreshortening

## Q5 - Hint
**Answer:** C  
**Topic:** Computer Graphics – Projections

Perspective-projection anomalies:

- **Perspective foreshortening** – farther objects look smaller.
- **Vanishing points** – parallel lines appear to meet.
- **View confusion** – objects **behind** the centre of projection get projected **upside down and backwards** ✔
- **Topological distortion** – a line through the plane of the COP gets broken into pieces at infinity.

## Q6
<div class="stem"><p>Match the 5 CMM Maturity levels/CMMI staged representations in List- I with their characterizations in List-II:</p> <p>List – I                                                                                 List - II</p> <p>(a) Initial                        (i) Processes are improved quantitatively and continually.</p> <p>(b) Repeatable              (ii) The plan for a project comes from a template for plans.</p> <p>(c) Defined                    (iii) The plan uses processes that can be measured  quantitatively.</p> <p>(d) Managed                 (iv) There may not exist a plan or it may be abandoned.</p> <p>(e) Optimizing               (v) There’s a plan and people stick to it.</p> <p>Code:</p> <p>      (a)  (b)   (c)  (d)  (e)</p></div>

## Q6 - Options
(A) (iv)  (v)   (i)   (iii)  (ii)
(B) (i)    (ii)   (iv)  (v)  (iii)
(C) (v)   (iv)  (ii)   (iii)  (i)
(D) (iv)  (v)   (ii)   (iii)  (i)

## Q6 - Hint
**Answer:** D  
**Topic:** Software Engineering – CMM Levels

- **Initial** – ad hoc; a plan may not exist or is abandoned → (iv)
- **Repeatable** – there is a plan and people stick to it → (v)
- **Defined** – plans come from a standard organisational template → (ii)
- **Managed** – processes measured quantitatively → (iii)
- **Optimizing** – continuous quantitative improvement → (i)

## Q7
<div class="stem"><p>Which of the following is true for semi-dynamic ​ environment ?</p></div>

## Q7 - Options
(A) The environment itself does not change with the passage of time but the agent’s performance score does.
(B) The environment change while the agent is deliberating.
(C) Even if the environment changes with the passage of time while deliberating, the performance score does not change.
(D) Environment and performance score, both change simultaneously.

## Q7 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Agents & Environments

- **Static** – nothing changes while the agent thinks.
- **Dynamic** – the environment changes while the agent deliberates.
- **Semi-dynamic** – the environment itself **doesn't** change with time, but the agent's **performance score does** (e.g. chess with a clock).

## Q8
<div class="stem"><p>Triangle free graphs have the property of clique number is __________</p></div>

## Q8 - Options
(A) less than or equal to 3
(B) less than or equal to 2
(C) greater than 3
(D) more than 10

## Q8 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Graph Theory

A triangle is a clique of size 3. Triangle-free ⇒ no K₃ ⇒ the largest clique has at most 2 vertices (a single edge) ⇒ **clique number ≤ 2**.

## Q9
<div class="stem"><p>Consider a fuzzy set old as defined below</p> <p>Old = {(20, 0.1), (30, 0.2), (40, 0.4), (50, 0.6), (60, 0.8), (70, 1), (80, 1)}</p> <p>Then the alpha-cut for alpha = 0.4 for the set old will be</p></div>

## Q9 - Options
(A) {(40, 0.4)}
(B) {50, 60, 70, 80}
(C) {(20, 0.1), (30, 0.2)}
(D) {(20, 0), (30, 0), (40, 1), (50, 1), (60, 1), (70, 1), (80, 1)}

## Q9 - Hint
**Answer:** D  
**Topic:** Soft Computing – Fuzzy Sets (α-cut)

An α-cut is a **crisp** set: elements with μ ≥ α get membership 1, the rest 0.

α = 0.4: 20 (0.1) → 0, 30 (0.2) → 0, 40 (0.4) → 1, 50, 60, 70, 80 → 1.

Result: {(20,0), (30,0), (40,1), (50,1), (60,1), (70,1), (80,1)}.

Option (B) misses 40 (since 0.4 ≥ 0.4 must be included).

## Q10
<div class="stem"><p>Consider the following two sentences :</p> <p>(a) The planning graph data structure can be used to give a better heuristic for a planning problem.</p> <p>(b) Dropping negative effects from every action schema in a planning problem results in a relaxed problem.</p> <p>Which of the following is correct with respect to the above sentences ?</p></div>

## Q10 - Options
(A) Both sentence (a) and sentence (b) are false.
(B) Both sentence (a) and sentence (b) are true.
(C) Sentence (a) is true but sentence (b) is false.
(D) Sentence (a) is false but sentence (b) is true.

## Q10 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Planning

- **(a) True.** A planning graph gives good heuristic estimates (e.g. level-sum, set-level).
- **(b) True.** Ignoring delete lists (dropping negative effects) gives a **relaxed problem** whose solution cost is an admissible heuristic.

## Q11
<div class="stem"><p>In the context of 3D Computer graphics, which of the following statements is/are correct?</p> <p>A. Under perspective projection, each set of parallel lines in the object do not stay parallel in the image (except those that are parallel to the viewplane to start with).</p> <p>B. Applying a perspective transformation in the graphics pipeline to a vertex involves dividing by its 'z' coordinate.</p> <p>C. Perspective transformation is a linear transformation.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q11 - Options
(A) (A) and (B) only
(B) (A) and (C) only
(C) (B) and (C) only
(D) (A), (B) and (C)

## Q11 - Hint
**Answer:** A  
**Topic:** Computer Graphics – Perspective Projection

- **A – True.** Parallel lines converge to vanishing points unless they are parallel to the view plane.
- **B – True.** Perspective divide: x' = x·d/z, y' = y·d/z.
- **C – False.** Dividing by z is **not linear** (it is linear only in homogeneous coordinates before the divide).

## Q12
<div class="stem"><p>R(A,B,C,D) is a relation. Which of the following does not have a lossless join, dependency preserving BCNF decomposition?</p></div>

## Q12 - Options
(A) A → B, B → CD
(B) A → B, B → C, C → D
(C) AB → C, C → AD
(D) A → BCD

## Q12 - Hint
**Answer:** C  
**Topic:** DBMS – Normalization (BCNF)

Check option (C): AB → C, C → AD.

**Step 1 – Keys:** (AB)⁺ = ABCD → AB is a key; (BC)⁺ = BCAD → BC is a key.  
**Step 2 – BCNF violation:** C → AD, and C is not a superkey.  
**Step 3 – Decompose on C → AD:** R1(C, A, D), R2(B, C). This is lossless (common attribute C is a key of R1).  
**Step 4 – Dependency check:** AB → C needs A, B, C together; neither R1 nor R2 contains A, B and C together → **lost**.

Any BCNF decomposition must split C → A away from AB → C, so it cannot preserve dependencies.

Others work: (A) → (AB),(BCD); (B) → (AB),(BC),(CD); (D) is already in BCNF.

## Q13
<div class="stem"><p>Consider the following sets:</p> <p>S1.  Set of all recursively enumerable languages over the alphabet {0,1}</p> <p>S2.  Set of all syntactically valid C programs</p> <p>S3.  Set of all languages over the alphabet {0,1}</p> <p>S4.  Set of all non-regular languages over the alphabet {0,1}</p> <p>Which of the above sets are uncountable? </p></div>

## Q13 - Options
(A) S2 and S3
(B) S3 and S4
(C) S1 and S4
(D) S1 and S2

## Q13 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Countability

- **S1** – RE languages ↔ Turing machines, which can be listed → **countable**.
- **S2** – C programs are finite strings over a finite alphabet → **countable**.
- **S3** – all languages over {0,1} = power set of Σ\*, a countably infinite set → **uncountable** (Cantor).
- **S4** – regular languages are countable, and all languages minus a countable set is still uncountable → **uncountable**.

## Q14
<div class="stem"><p>A sender is employing public key cryptography to send a secret message to a receiver. Which one of the following statements is TRUE?</p></div>

## Q14 - Options
(A) Sender encrypts using receiver’s public key
(B) Sender encrypts using his own public key
(C) Receiver decrypts using sender’s public key
(D) Receiver decrypts using his own public key

## Q14 - Hint
**Answer:** A  
**Topic:** Computer Networks – Cryptography

For **confidentiality**, the sender encrypts with the **receiver's public key**, and only the receiver's **private key** can decrypt.

(For a digital signature it is reversed: sign with the sender's private key, verify with the sender's public key.)

## Q15
<div class="stem"><p>A ______ is a graph which has the same number of edges as its complement must have number of vertices congruent to 4m or 4m modulo 4(for integral values of number of edges).</p></div>

## Q15 - Options
(A) Subgraph
(B) Hamiltonian graph
(C) Euler graph
(D) Self complementary graph

## Q15 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Graph Theory

A **self-complementary** graph is isomorphic to its complement, so it has half of all possible edges: e = n(n−1)/4. For e to be an integer, n(n−1) must be divisible by 4 ⇒ **n ≡ 0 or 1 (mod 4)**.

## Q16
<div class="stem"><p>In Software configuration management, what is the primary purpose of version control?</p></div>

## Q16 - Options
(A) To control the changes made to software
(B) To document user requirements
(C) To estimate project cost
(D) To design the software architecture

## Q16 - Hint
**Answer:** A  
**Topic:** Software Engineering – Configuration Management

**Version control** records every change to files (who, what, when), lets you go back to old versions and manages parallel work. Its purpose is to **control changes** made to the software.

## Q17
<div class="stem"><p>Let G be any connected, weighted, undirected graph.</p> <p>I. G  has a unique minimum spanning tree, if no two edges of G have the same weight.</p> <p>II. G  has a unique minimum spanning tree, if, for every cut of G, there is a unique minimum-weight edge crossing the cut.</p> <p>Which of the above statements is/are TRUE?</p></div>

## Q17 - Options
(A) I only
(B) II only
(C) Both I and II
(D) Neither I nor II

## Q17 - Hint
**Answer:** C  
**Topic:** Algorithms – Minimum Spanning Tree

- **I – True.** If all edge weights are distinct, the MST is unique. Suppose two MSTs differed; the lightest edge in their difference would give a cheaper tree, a contradiction.
- **II – True.** If every cut has a **unique** lightest crossing edge, the cut property forces that edge into every MST, so the MST is unique. (This condition is weaker than I.)

## Q18
<div class="stem"><p>A certain processor uses a fully associative cache of size 16 kB. The cache block size is 16 bytes. Assume that the main memory is byte addressable and uses a 32-bit address. How many bits are required for the Tag and the Index fields respectively in the addresses generated by the processor?</p></div>

## Q18 - Options
(A) 28 bits and 0 bits
(B) 24 bits and 4 bits
(C) 24 bits and 0 bits
(D) 28 bits and 4 bits

## Q18 - Hint
**Answer:** A  
**Topic:** Computer Organization – Cache Mapping

**Fully associative** ⇒ any block can go anywhere ⇒ **no index/line field (0 bits)**.

- Offset = log₂(16 B) = 4 bits
- Tag = 32 − 4 = **28 bits**

## Q19
<div class="stem"><p>STRIPS addresses the problem of efficiently representing and implementation of a planner. It is not related to which one of the following?</p></div>

## Q19 - Options
(A) SHAKEY
(B) SRI
(C) NLP
(D) None of these

## Q19 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Planning (STRIPS)

**STRIPS** (Stanford Research Institute Problem Solver) was developed at **SRI** (Fikes & Nilsson, 1971) as the planner for the robot **Shakey**. It has nothing to do with **NLP**.

## Q20
<div class="stem"><p>A free list contains three memory areas of sizes 6 KB, 15 KB and 12 KB. The next three memory requests are for 10 KB, 2 KB and 14 KB. Which of the memory allocation strategy that would be able to accommodate all the three requests?</p></div>

## Q20 - Options
(A) Best Fit
(B) Worst Fit
(C) Next Fit
(D) First Fit

## Q20 - Hint
**Answer:** A  
**Topic:** Operating Systems – Memory Allocation

Holes: 6, 15, 12 KB. Requests: 10, 2, 14 KB.

**Best fit** (smallest hole that fits):

- 10 → 12 (leaves 2)
- 2 → the 2 KB hole (leaves 0)
- 14 → 15 ✔ all satisfied

**First fit:** 10 → 15 (leaves 5); 2 → 6 (leaves 4); 14 → none of 4, 5, 12 ✘  
**Worst fit:** 10 → 15 (5); 2 → 12 (10); 14 → none ✘  
**Next fit:** fails like first fit.

## Q21
<div class="stem"><p>Match the pairs in the following questions:</p> <p><img src="tests/img/t2/q71-1f9fb2.png"/></p></div>

## Q21 - Options
(A) (a)-(r), (b)-(s), (c)-(p), (d) - (q)
(B) (a)-(r), (b)-(q), (c)-(p), (d) - (s)
(C) (a)-(q), (b)-(r), (c)-(s), (d) - (p)
(D) (a)-(q), (b)-(r), (c)-(p), (d) - (s)

## Q21 - Hint
**Answer:** D  
**Topic:** DBMS – Basic Concepts

- Secondary index → **B-tree** (q)
- Non-procedural query language → **domain calculus** (r)
- Closure of attributes → computed from **functional dependencies** (p)
- Natural join → a **relational algebra operation** (s)

## Q22
<div class="stem"><p>The asymptotic upper bound solution of the recurrence relation given by</p> <p>T(n) = 2T(n/2) + n/logn is :</p></div>

## Q22 - Options
(A) O(n<sup>2</sup>)
(B) O(n log n)
(C) O(n log log n)
(D) O(log log n)

## Q22 - Hint
**Answer:** C  
**Topic:** Algorithms – Recurrences (Extended Master Theorem)

T(n) = 2T(n/2) + n / log n.

**Step 1:** Compare with aT(n/b) + Θ(nᵏ logᵖ n): a = 2, b = 2, k = 1, p = −1.  
**Step 2:** bᵏ = 2 = a → **case 2** of the extended Master theorem.  
**Step 3:** Sub-cases of case 2:

- p > −1 → Θ(nᵏ log^(p+1) n)
- **p = −1 → Θ(nᵏ log log n)** ✔
- p < −1 → Θ(nᵏ)

T(n) = **Θ(n log log n)**.

(Plain Master theorem does not apply: n/log n is not polynomially smaller than n.)

## Q23
<div class="stem"><p>The preorder traversal of a binary search tree is 15, 10, 12, 11, 20, 18, 16, 19.</p> <p>Which one of the following is the postorder traversal of the tree?</p></div>

## Q23 - Options
(A) 20, 19, 18, 16, 15, 12, 11, 10
(B) 11, 12, 10, 16, 19, 18, 20, 15
(C) 10, 11, 12, 15, 16, 18, 19, 20
(D) 19, 16, 18, 20, 11, 12, 10, 15

## Q23 - Hint
**Answer:** B  
**Topic:** Data Structures – BST Traversals

Preorder: 15, 10, 12, 11, 20, 18, 16, 19.

**Step 1 – Root** = 15. Smaller values (10, 12, 11) form the left subtree; larger (20, 18, 16, 19) the right.  
**Step 2 – Left subtree:** root 10 → 12 is its right child → 11 is 12's left child.  
**Step 3 – Right subtree:** root 20 → 18 is its left child → 16 and 19 are 18's children.  
**Step 4 – Postorder (Left, Right, Root):**

- Left: 11, 12, 10
- Right: 16, 19, 18, 20
- Root: 15

Postorder = **11, 12, 10, 16, 19, 18, 20, 15**.

## Q24
<div class="stem"><p>Consider the following statements:</p> <p>S1: There exists infinite sets A, B, C such that A ∩ (B U C) is finite.</p> <p>S2: There exists two irrational numbers x and y such that (x+y) is rational.</p> <p>Which of the following is true about S1 and S2?</p></div>

## Q24 - Options
(A) Only S1 is correct
(B) Only S2 is correct
(C) Both S1 and S2 are correct
(D) None of S1 and S2 is correct

## Q24 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Sets & Numbers

- **S1 – True.** A = evens, B = primes, C = odds (all infinite). B ∪ C = primes ∪ odds; its only even member is 2 ⇒ A ∩ (B ∪ C) = {2}, which is finite.
- **S2 – True.** x = √2, y = −√2 are irrational, but x + y = 0 is rational.

## Q25
<div class="stem"><p>Consider the following statements:</p> <p>S1: A heuristic is admissible if it never overestimates the cost to reach the goal.</p> <p>S2: A heuristic is monotonous if it follows triangle inequality property.</p> <p>Which of the following is true referencing the above statements?</p> <p>Choose the correct answer from the code given below:</p></div>

## Q25 - Options
(A) Neither of the statements S1 and S2 are true
(B) Statement S1 is false but statement S2 is true
(C) Statement S1 is true but statement S2 is false
(D) Both the statements S1 and S2 are true

## Q25 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Heuristics

- **S1 – True.** Admissible: h(n) ≤ h\*(n), i.e. it never overestimates.
- **S2 – True.** Monotone (consistent): h(n) ≤ c(n, n') + h(n'), which is the **triangle inequality**.

## Q26
<div class="stem"><p>Consider the following languages:</p> <p><img src="tests/img/t2/q76-960852.png"/><br/> Which of the above languages are context-free?</p></div>

## Q26 - Options
(A) I and IV only
(B) I and II only
(C) II and III only
(D) II and IV only

## Q26 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Context-Free Languages

- **I.** aᵐbⁿcᵖdᵠ with m + p = n + q. A PDA pushes for a's, pops for b's (or pushes if the stack runs out, tracking the sign), then does the same with c's and d's. One counter is enough → **CFL**.
- **II.** m = n and p = q → (aⁿbⁿ)(cᵖdᵖ), a concatenation of two CFLs → **CFL**.
- **III.** m = n = p → needs three-way equality like aⁿbⁿcⁿ → **not CFL**.
- **IV.** mn = p + q → needs multiplication → **not CFL**.

## Q27
<div class="stem"><p>Beam-penetration and shadow-mask are used for producing color in CRT Displays. Which of the following is true?</p> <p>I. The beam-penetration is used with raster scan systems.</p> <p>II. Shadow-mask is used in random scan monitors..</p> <p>III. Beam-penetration method is better than shadow-mask method</p> <p>.IV. Shadow-mask method is better than the beam-penetration method.</p></div>

## Q27 - Options
(A) I and II
(B) II and III
(C) III only
(D) IV only

## Q27 - Hint
**Answer:** D  
**Topic:** Computer Graphics – Colour CRT

- I ✘ – beam penetration is used with **random-scan** (vector) displays.
- II ✘ – shadow mask is used with **raster-scan** systems.
- III ✘ / **IV ✔** – shadow mask gives far more colours (millions) than beam penetration (about 4), so it is better.

## Q28
<div class="stem"><p>Consider the following relations:</p> <p>R1 (a,b) iff (a+b) is even over the set of integers</p> <p>R2 (a,b) iff (a+b) is odd over the set of integers</p> <p>R3 (a,b) iff a.b &gt; 0 over the set of non-zero rational numbers</p> <p>R4 (a,b) iff (a - b) ≤ 2 over the set of natural numbers</p> <p>Which of the following statements is correct?</p></div>

## Q28 - Options
(A) R1 and R2 are equivalence relations, R3 and R4 are not
(B) R1 and R3 are equivalence relations, R2 and R4 are not
(C) R1 and R4 are equivalence relations, R2 and R3 are not
(D) R1, R2, R3 and R4 are all equivalence relations

## Q28 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Relations

- **R1** (a+b even ⇔ same parity): reflexive (2a even), symmetric, transitive → **equivalence**.
- **R2** (a+b odd): a + a = 2a is never odd → not reflexive ✘
- **R3** (ab > 0 ⇔ same sign, over non-zero rationals): a² > 0 reflexive; symmetric; same sign is transitive → **equivalence**.
- **R4** (a − b ≤ 2): 1 − 5 ≤ 2 but 5 − 1 = 4 > 2 → not symmetric ✘

## Q29
<div class="stem"><p>Consider the following statements:</p> <p>P. There exists no simple, undirected and connected graph with 80 vertices and 77 edges.</p> <p>Q: All vertices of Euler graph are of even degree.</p> <p>R. Every simple, undirected, connected and acyclic graph with 50 vertices has at least two vertices of degree one.</p> <p>S. There exits a bipartite graph with more than ten vertices which is 2-colorable.</p> <p>What is the number of correct statements among the above statements.</p></div>

## Q29 - Options
(A) 1
(B) 2
(C) 3
(D) 4

## Q29 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Graph Theory

- **P – True.** A connected graph on 80 vertices needs at least 79 edges; 77 is too few.
- **Q – True.** An Eulerian graph (has an Euler circuit) has every vertex of even degree.
- **R – True.** A connected acyclic graph is a tree; every tree with ≥ 2 vertices has at least 2 leaves.
- **S – True.** Every bipartite graph is 2-colourable, of any size.

All **4** correct.

## Q30
<div class="stem"><p>Consider a system with 3 processes that share 4 instances of the same resource type. Each process can request a maximum of K instances. Resource instances can be requested and released only one at a time. The largest value of K that will always avoid deadlock is _________.</p></div>

## Q30 - Options
(A) 2
(B) 3
(C) 4
(D) 5

## Q30 - Hint
**Answer:** A  
**Topic:** Operating Systems – Deadlock

Worst case: every process holds (K − 1) and waits for one more. Deadlock is avoided if one extra instance is still free:

3(K − 1) + 1 ≤ 4 ⇒ 3K − 2 ≤ 4 ⇒ K ≤ 2.

Largest **K = 2**.

## Q31
<div class="stem"><p>Which one of the following is a key factor for preferring B+ trees to binary search trees for indexing database relations?</p></div>

## Q31 - Options
(A) Database relations have a large number of records
(B) Database relations are sorted on the primary key
(C) B+ trees require less memory than binary search trees
(D) Data transfer from disks is in block

## Q31 - Hint
**Answer:** D  
**Topic:** DBMS – Indexing

Disks transfer data in **blocks**. A B+ tree node holds many keys and fits a whole block, so the tree is very short (high fan-out) and needs few disk accesses. A BST stores one key per node and would need about log₂n block reads.

## Q32
<div class="stem"><p>What is start frame delimeter (SFD) in ethernet frame?</p></div>

## Q32 - Options
(A) 10101010
(B) 10101011
(C) 00000000
(D) 11111111

## Q32 - Hint
**Answer:** B  
**Topic:** Computer Networks – Ethernet

Ethernet frame starts with a **7-byte preamble** (10101010 × 7) and then a **1-byte SFD = 10101011**. The final "11" signals that the frame begins next.

## Q33
<div class="stem"><p>A message is made up entirely of characters from the set X = {P, Q, R, S, T}. The table of probabilities for each of the characters is shown below:</p> <p><img src="tests/img/t2/q83-79f222.png"/><br/> If a message of 100 characters over X is encoded using Huffman coding, then the expected length of the encoded message in bits is __________.</p></div>

## Q33 - Options
(A) 225
(B) 226
(C) 227
(D) 228

## Q33 - Hint
**Answer:** A  
**Topic:** Algorithms – Huffman Coding

Probabilities: T 0.08, R 0.17, S 0.19, P 0.22, Q 0.34.

**Step 1 – Merge the two smallest each time:**

- 0.08 (T) + 0.17 (R) = 0.25
- 0.19 (S) + 0.22 (P) = 0.41
- 0.25 + 0.34 (Q) = 0.59
- 0.41 + 0.59 = 1.00

**Step 2 – Code lengths (depth):** S, P, Q → 2 bits; T, R → 3 bits.

**Step 3 – Average length** = 0.19×2 + 0.22×2 + 0.34×2 + 0.08×3 + 0.17×3  
= 0.38 + 0.44 + 0.68 + 0.24 + 0.51 = **2.25 bits/char**.

100 characters → **225 bits**.

## Q34
<div class="stem"><p>If a processor has 32-bit virtual address, 28-bit physical address, 2 kB page size How many bits are required for the virtual, physical page number?</p></div>

## Q34 - Options
(A) 17, 21
(B) 21, 17
(C) 6, 10
(D) 10, 6

## Q34 - Hint
**Answer:** B  
**Topic:** Operating Systems – Paging

Page size 2 KB = 2¹¹ → offset 11 bits.

- Virtual page number = 32 − 11 = **21 bits**
- Physical frame number = 28 − 11 = **17 bits**

## Q35
<div class="stem"><p>The probability that it will rain today is 0.5. The probability that it will rain tomorrow is 0.6. The probability that it will rain either today or tomorrow is 0.7. What is the probability that it will rain today and tomorrow?</p></div>

## Q35 - Options
(A) 0.3
(B) 0.25
(C) 0.35
(D) 0.4

## Q35 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Probability

P(A ∪ B) = P(A) + P(B) − P(A ∩ B)  
0.7 = 0.5 + 0.6 − P(A ∩ B) ⇒ P(A ∩ B) = **0.4**.

## Q36
<div class="stem"><p>Consider the following languages over the alphabet Σ = {a, b, c}.</p> <p>Let L1 = {a<sup>n</sup> b<sup>n</sup> c<sup>m</sup>│m,n ≥ 0} and L2 = {a<sup>m</sup> b<sup>n</sup> c<sup>n</sup>│m,n ≥ 0}</p> <p>Which of the following are context-free languages?</p> <p>I. L1 ∪ L2</p> <p>2. L1 ∩ L2</p></div>

## Q36 - Options
(A) I only
(B) II only
(C) I and II
(D) Neither I nor II

## Q36 - Hint
**Answer:** A  
**Topic:** Theory of Computation – Closure Properties

- L1 = aⁿbⁿcᵐ and L2 = aᵐbⁿcⁿ are both CFLs.
- **L1 ∪ L2** – CFLs are closed under union → **CFL** ✔
- **L1 ∩ L2** = { aⁿbⁿcⁿ } → **not CFL** ✘ (CFLs are not closed under intersection)

## Q37
<div class="stem"><p>The graph shown below 8 edges with distinct integer edge weights. The minimum spanning tree (MST) is of weight 36 and contains the edges: {(A, C), (B, C), (B, E), (E, F), (D, F)}. The edge weights of only those edges which are in the MST are given in the figure shown below. The minimum possible sum of weights of all 8 edges of this graph is ______________.</p> <p><img src="tests/img/t2/q87-64bca1.png"/></p></div>

## Q37 - Options
(A) 69
(B) 70
(C) 71
(D) 72

## Q37 - Hint
**Answer:** A  
**Topic:** Algorithms – Minimum Spanning Tree

MST edges: A–C 9, B–C 2, B–E 15, E–F 4, D–F 6 → total **36** ✔

Each non-MST edge must be **heavier than every MST edge on the cycle it creates** (otherwise it would replace one), and all weights are distinct integers.

- **A–B:** cycle A–C–B, max = 9 → smallest unused weight > 9 = **10**
- **C–D:** path C–B–E–F–D, max = 15 → **16**
- **E–D:** path E–F–D, max = 6 → **7**

Minimum total = 36 + 10 + 16 + 7 = **69**.

## Q38
<div class="stem"><p>Which rule of inference is used in each of these arguments, “If it is Wednesday, then the Smartmart will be crowded. It is Wednesday. Thus, the Smartmart is crowded.”</p></div>

## Q38 - Options
(A) Modus tollens
(B) Modus ponens
(C) Disjunctive syllogism
(D) Simplification

## Q38 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Rules of Inference

p → q (Wednesday → crowded), p (it is Wednesday) ∴ q (crowded). This is **modus ponens**.

(Modus tollens: p → q, ¬q ∴ ¬p.)

## Q39
<div class="stem"><p>Which of the following statements are true?</p> <p>(A) A sentence α entails another sentence β if β is true in few worlds where α is true.</p> <p>(B) Forward chaining and backward chaining are very natural reasoning algorithms for knowledge bases in Horn form.</p> <p>(C) Sound inference algorithms derive all sentences that are entailed.</p> <p>(D) Propositional logic does not scale to environments of unbounded size.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q39 - Options
(A) (A) and (B) only
(B) (B) and (C) only
(C) (C) and (D) only
(D) (B) and (D) only

## Q39 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Knowledge & Inference

- **A ✘** – α ⊨ β means β is true in **all** worlds where α is true, not "few".
- **B ✔** – forward and backward chaining are the natural (linear-time) algorithms for Horn knowledge bases.
- **C ✘** – deriving **all** entailed sentences is **completeness**; soundness means deriving **only** entailed sentences.
- **D ✔** – propositional logic needs a separate symbol for each fact, so it cannot scale to unbounded worlds (first-order logic is needed).

## Q40
<div class="stem"><p><img src="tests/img/t2/q90-d71c05.png"/></p></div>

## Q40 - Options
(A) (i) - (a), (ii) - (d), (iii) - (b), (iv) - (c)
(B) (i)- (d), (ii) - (a), (iii) - (c), (iv) - (b)
(C) (i)- (d), (ii) - (a), (iii) - (b), (iv) - (c)
(D) (i) - (d), (ii) - (b), (iii) - (a), (iv) - (c)

## Q40 - Hint
**Answer:** C  
**Topic:** Compiler Design – Parsing & Tools

- (i) **BNF** → notation for **general context-free grammars** (d)
- (ii) **Lexical analysis** → tokens described by **regular expressions** (a)
- (iii) **YACC** → generates **LALR(1)** parsers (b)
- (iv) **Recursive descent** → top-down, suits **LL(1)** grammars (c)

## Q41
<div class="stem"><p>Consider three data items D1, D2 and D3 and the following execution schedule of transactions T1, T2 and T3. In the diagram, R(D) and W(D) denote the actions reading and writing the data item D respectively. </p> <p><img src="tests/img/t2/q91-6a714e.png"/></p> <p>Which of the following statements is correct?   </p></div>

## Q41 - Options
(A) The schedule is serializable as T2; T3; T1
(B) The schedule is serializable as T2; T1; T3
(C) The schedule is serializable as T3; T2; T1
(D) The schedule is not serializable

## Q41 - Hint
**Answer:** D  
**Topic:** DBMS – Conflict Serializability

Draw the precedence graph using conflicting pairs (same item, at least one write, different transactions):

- T2 W(D2) before T3 R(D2) → **T2 → T3**
- T1 W(D1) before T2 R(D1) → **T1 → T2**
- T3 W(D2) before T1 R(D2) → **T3 → T1**

T1 → T2 → T3 → T1 is a **cycle** ⇒ the schedule is **not conflict serializable**. With no blind writes, it is not view serializable either.

## Q42
<div class="stem"><p>Consider the C struct defined below:</p> <p>    struct data   {</p> <p>        int marks [100];</p> <p>        char grade;</p> <p>        int cnumber;</p> <p>    };</p> <p>    struct data student;</p> <p>The base address of student is available in register R1. The field student.grade can be accessed efficiently using</p></div>

## Q42 - Options
(A) Post-increment addressing mode, (R1)+
(B) Pre-decrement addressing mode, -(R1)
(C) Register direct addressing mode, R1
(D) Index addressing mode, X(R1), where X is an offset represented in 2’s complement 16-bit representation

## Q42 - Hint
**Answer:** D  
**Topic:** Computer Organization – Addressing Modes

student.grade is at a **fixed offset** from the base: 100 ints × 4 B = 400 bytes. With base in R1, the effective address = R1 + 400 → **indexed (base + displacement) addressing**, X(R1).

Auto-increment/decrement modes change R1 by one element size; register direct would give the base itself.

## Q43
<div class="stem"><p>Which of the following predicate calculus statements is valid:</p></div>

## Q43 - Options
(A) (∀x) P(x) ∨ (∀x)Q(x) → (∀x){P(x) ∨ Q(x)}
(B) (∃x)P(x) ∧ ∃(x)Q(x) → (∃x){P(x) ∧ Q(x)}
(C) (∀x){P(x) ∨ Q(x)} → (∀x)P(x) ∨ (∀x)Q(x)
(D) (∃x){P(x) ∨ Q(x)} → ~(∀x)P(x) ∨ (∃x)Q(x)

## Q43 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Predicate Logic

- **(A) Valid.** If P holds for all x, or Q holds for all x, then for every x, P(x) ∨ Q(x) holds.
- (B) ✘ – some x with P and some (possibly different) x with Q doesn't mean one x has both.
- (C) ✘ – the converse of (A): e.g. P = "even", Q = "odd" — every number is even or odd, but not all are even and not all are odd.
- (D) ✘ – not valid in general.

## Q44
<div class="stem"><p>Let Ri(A) and Wi(A) denote read and write operations respectively on a data item A by a transaction T. Consider the following schedule.</p> <p>S : R1(A) , W2(A) , R3(A) , W1(A) , W3(A)</p> <p>Which one of the following options is correct?</p></div>

## Q44 - Options
(A) S is conflict serializable but not view serializable
(B) S is not conflict serializable but view serializable
(C) S is both conflict serializable and view serializable
(D) Neither conflict serializable nor view serializable

## Q44 - Hint
**Answer:** B  
**Topic:** DBMS – Serializability

S: R1(A), W2(A), R3(A), W1(A), W3(A).

**Conflict serializable?**

- R1(A) → W2(A): T1 → T2
- W2(A) → W1(A): T2 → T1 ⇒ **cycle** → not conflict serializable.

**View serializable?** Try serial order T1 → T2 → T3:

- Initial read: T1 reads the original A in both ✔
- R3(A) reads from T2 in both (T2 is the last writer before T3) ✔
- Final write: T3 in both ✔

So S is **view serializable** (possible because of the blind writes W2, W3).

## Q45
<div class="stem"><p>Statement 1: When a node is split during insertion, the middle key is promoted to the parent as well as retained in right half-node.</p> <p>Statement 2: When a key is deleted from the leaf, it is also deleted from the non-leaf nodes of the tree.</p></div>

## Q45 - Options
(A) Statement 1 is true but statement 2 is false
(B) Statement 2 is true but statement 1 is false
(C) Both the statements are true
(D) Both the statements are false

## Q45 - Hint
**Answer:** A  
**Topic:** DBMS – B+ Trees

- **Statement 1 – True** (for B+ trees). On a leaf split, the middle key is **copied** up to the parent and also kept in the right leaf, because all keys must stay in the leaves.
- **Statement 2 – False.** Deleting a key from a leaf does **not** require deleting it from internal nodes; the internal copy can stay as a separator.

## Q46
<div class="stem"><p>If the memory access time is denoted by ‘ma’ and ‘p’ is the probability of a page fault (0 &lt;= p &lt;= 1). Then the effective access time for a demand paged memory is ____________</p></div>

## Q46 - Options
(A) p x ma + (1-p) x page fault time
(B) ma + page fault time
(C) (1-p) x ma + p x page fault time
(D) none of the mentioned

## Q46 - Hint
**Answer:** C  
**Topic:** Operating Systems – Virtual Memory

EAT = (1 − p) × memory access time + p × page-fault service time.

With probability (1−p) the access is a normal memory access; with probability p we pay the page-fault time.

## Q47
<div class="stem"><p>Which of the following is not Agility Feature in Software Engineering.</p></div>

## Q47 - Options
(A) The self-organizing teams as well as communication and collaboration between team members and stakeholders, customers
(B) Welcome the change as an opportunity
(C) Separate phase for different activities like the testing phase will be separated from the build phase
(D) Frequent and rapid delivery of software so that customer can have quick access to software and can give feedback

## Q47 - Hint
**Answer:** C  
**Topic:** Software Engineering – Agile

Agile features: self-organising teams, close collaboration, **welcoming change**, frequent small releases. **Separate fixed phases** (testing as a phase after building) is a **waterfall** trait; in agile, testing goes on throughout each iteration.

## Q48
<div class="stem"><p>Which of the following is NOT true with respect to a transparent bridge and a router?</p></div>

## Q48 - Options
(A) Both bridge and router selectively forward data packets
(B) A bridge uses IP addresses while a router uses MAC addresses
(C) A bridge builds up its routing table by inspecting incoming packets
(D) A router can connect between a LAN and a WAN

## Q48 - Hint
**Answer:** B  
**Topic:** Computer Networks – Network Devices

A (transparent) **bridge** works at the **data-link layer** using **MAC** addresses; a **router** works at the **network layer** using **IP** addresses. Statement (B) swaps them, so it is NOT true.

(A), (C) and (D) are true: both forward selectively, bridges learn by inspecting incoming frames, and routers connect LANs to WANs.

## Q49
<div class="stem"><p>Match the following :</p> <p>a. Script                                          i. Directed graph with labelled nodes for graphical representation of knowledge</p> <p>b. Conceptual Dependencies       ii. Knowledge about objects and events is stored in record-like structures consisting of     slots and slot values.</p> <p>c. Frames                                       iii. Primitive concepts and rules to represent natural language statements</p> <p>d. Associative Network                   iv. Frame like structures used to represent stereotypical patterns for commonly occurring   events in terms of actors, roles, props and scenes</p> <p>Codes :</p> <p>a    b   c   d</p></div>

## Q49 - Options
(A) iv    ii    i   iii
(B) iv   iii   ii    i
(C) ii    iii   iv   i
(D) i    iii    iv   ii

## Q49 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Knowledge Representation

- **Script** → stereotyped event sequences with actors, roles, props, scenes (iv)
- **Conceptual dependency** → primitive concepts and rules for natural-language meaning (iii)
- **Frames** → record-like slots and fillers (ii)
- **Associative (semantic) network** → directed graph with labelled nodes (i)

## Q50
<div class="stem"><p>Consider a demand paging system with four-page frames (initially empty) and an LRU page replacement policy. For the following page reference string 7, 2,7,3, 2,5,3, 4,6,7,7,1,5,6,1 the page fault rate, defined as the ratio of number of page faults to the number of memory accesses (rounded off to one decimal place) is_________.</p></div>

## Q50 - Options
(A) 1.5
(B) 0.5
(C) 0.6
(D) 0.8

## Q50 - Hint
**Answer:** C  
**Topic:** Operating Systems – Page Replacement (LRU)

4 frames, LRU. Reference string: 7, 2, 7, 3, 2, 5, 3, 4, 6, 7, 7, 1, 5, 6, 1

| Ref | Frames after | Fault? |
|---|---|---|
| 7 | 7 | F |
| 2 | 7 2 | F |
| 7 | 7 2 | – |
| 3 | 7 2 3 | F |
| 2 | 7 2 3 | – |
| 5 | 7 2 3 5 | F |
| 3 | 7 2 3 5 | – |
| 4 | 2 3 5 4 (out 7) | F |
| 6 | 3 5 4 6 (out 2) | F |
| 7 | 3 4 6 7 (out 5) | F |
| 7 | – | – |
| 1 | 4 6 7 1 (out 3) | F |
| 5 | 6 7 1 5 (out 4) | F |
| 6 | – | – |
| 1 | – | – |

Faults = **9**, accesses = 15 → fault rate = 9 / 15 = **0.6**.

## Q51
<div class="stem"><p>Let R and S be two fuzzy relations defined as :</p> <p><img src="tests/img/t2/q101-c88c01.png"/></p> <p>Then, the resulting relation, T, which relates elements of universe x to the elements of universe z using max-min composition is given by :</p> <p><img src="tests/img/t2/q101-ae36d1.png"/></p></div>

## Q51 - Options
(A) (1)
(B) (2)
(C) (3)
(D) (4)

## Q51 - Hint
**Answer:** C  
**Topic:** Soft Computing – Fuzzy Relations (Max–Min Composition)

T(x, z) = max over y of min( R(x, y), S(y, z) ).

R: x1 = (0.6, 0.4), x2 = (0.7, 0.3). S: y1 = (0.8, 0.5, 0.1), y2 = (0.0, 0.6, 0.4).

**Row x1:**

- z1 = max(min(.6,.8), min(.4,0)) = max(.6, 0) = **0.6**
- z2 = max(min(.6,.5), min(.4,.6)) = max(.5, .4) = **0.5**
- z3 = max(min(.6,.1), min(.4,.4)) = max(.1, .4) = **0.4**

**Row x2:**

- z1 = max(min(.7,.8), min(.3,0)) = **0.7**
- z2 = max(min(.7,.5), min(.3,.6)) = max(.5, .3) = **0.5**
- z3 = max(min(.7,.1), min(.3,.4)) = max(.1, .3) = **0.3**

T = [[0.6, 0.5, 0.4], [0.7, 0.5, 0.3]] → matrix **(3)**.

## Q52
<div class="stem"><p>In 16-bit 2's complement representation, the decimal number -28 is:</p></div>

## Q52 - Options
(A) 1111 1111 1110 0100
(B) 1111 1111 0001 1100
(C) 0000 0000 1110 0100
(D) 1000 0000 1110 0100

## Q52 - Hint
**Answer:** A  
**Topic:** Digital Logic – 2's Complement

**Step 1:** +28 = 0000 0000 0001 1100  
**Step 2:** Invert → 1111 1111 1110 0011  
**Step 3:** Add 1 → **1111 1111 1110 0100** = −28

## Q53
<div class="stem"><p>Software coupling involves dependencies among pieces of software called modules. Which of the following are correct statements with respect to module coupling ?</p> <p>P: Common Coupling occurs when two modules share the same global data.</p> <p>Q: Control Coupling occur when modules share a composite data structure and use only part of it.</p> <p>R: Content coupling occurs when one module modifies or relies on the internal working of another module.</p></div>

## Q53 - Options
(A) P and Q only
(B) P and R only
(C) Q and R only
(D) All of P, Q and R

## Q53 - Hint
**Answer:** B  
**Topic:** Software Engineering – Coupling

- **P – True.** Common coupling = modules share **global data**.
- **Q – False.** Sharing a composite data structure and using only part of it is **stamp coupling**. Control coupling = one module passes a **control flag** that steers the other's logic.
- **R – True.** Content coupling = one module modifies or relies on the internals of another (worst type).

## Q54
<div class="stem"><p>Identify the language generated by the following grammar, where S is the start variable.</p> <p>S → XY</p> <p> X → aX|a</p> <p>Y → aYb|ϵ</p></div>

## Q54 - Options
(A) {a<sup>m</sup> b<sup>n</sup> │ m ≥ n, n &gt; 0}
(B) {a<sup>m</sup> b<sup>n</sup> │ m ≥ n, n ≥ 0}
(C) {a<sup>m</sup> b<sup>n</sup> │ m &gt; n, n ≥ 0}
(D) {a<sup>m</sup> b<sup>n</sup> │ m &gt; n, n &gt; 0}

## Q54 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Grammars

- X → aX | a generates aᵏ with **k ≥ 1**.
- Y → aYb | ε generates aⁿbⁿ with **n ≥ 0**.
- S → XY gives a^(k+n) bⁿ.

Let m = k + n; since k ≥ 1, **m > n**, with n ≥ 0 → { aᵐbⁿ | m > n, n ≥ 0 }.

## Q55
<div class="stem"><p>A relational database contains two tables student and department in which student table has columns roll_no, name and dept_id and department table has columns dept_id and dept_name. The following insert statements were executed successfully to populate the empty tables:</p> <p>Insert into department values (1, 'Mathematics')</p> <p>Insert into department values (2, 'Physics')</p> <p>Insert into student values (1, 'Navin', 1)</p> <p>Insert into student values (2, 'Mukesh', 2)</p> <p>Insert into student values (3, 'Gita', 1)</p> <p>How many rows and columns will be retrieved by the following SQL statement?</p> <p>Select * from student, department</p></div>

## Q55 - Options
(A) 0 row and 4 columns
(B) 3 rows and 4 columns
(C) 3 rows and 5 columns
(D) 6 rows and 5 columns

## Q55 - Hint
**Answer:** D  
**Topic:** DBMS – SQL (Cartesian Product)

`FROM student, department` with no WHERE clause is a **Cartesian product**:

- Rows = 3 × 2 = **6**
- Columns = 3 + 2 = **5** (dept_id appears twice)

## Q56
<div class="stem"><p>Consider the game tree given below:</p> <p><img src="tests/img/t2/q106-442d92.png"/></p> <p>Here O and □ represent MIN and MAX nodes respectively, The value of the root node of the game tree is:</p></div>

## Q56 - Options
(A) 4 
(B) 7
(C) 11
(D) 12

## Q56 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Minimax

Evaluate bottom-up: each MIN node takes the **minimum** of its children, each MAX node the **maximum**, alternating level by level up to the root. Carrying this out on the given tree gives a root value of **7**.

> **⚠ Note:** The figure in the source is very low resolution and several leaf values are not readable, so the full working cannot be reproduced here. The answer follows the key (this is a known PYQ with answer 7).

## Q57
<div class="stem"><p>Given below are two statements:</p> <p>Statement I: A genetic algorithm is a stochastic hill-climbing search in which a large population of states is maintained.</p> <p>Statement II: In nondeterministic environments, agents can apply AND-OR search to generate contingent plans that reach the goal regardless of which outcomes occur during execution.</p> <p>In the light of the above statements, choose the Correct answer from the options given below</p></div>

## Q57 - Options
(A) Both Statement I and Statement II are true
(B) Both Statement and Statement II are false
(C) Statement I is correct but Statement II is false
(D) Statement is incorrect but Statement II is true

## Q57 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Search

- **I – True.** Russell & Norvig describe a genetic algorithm as a stochastic hill-climbing (beam) search that keeps a **population** of states and creates new ones by crossover and mutation.
- **II – True.** In nondeterministic environments, **AND–OR search** produces **contingency plans** that reach the goal whatever outcome occurs.

## Q58
<div class="stem"><p>Which of the following statements is false?</p></div>

## Q58 - Options
(A) The set of rational numbers is an abelian group under addition.
(B) The set of integers in an abelian group under addition.
(C) The set of rational numbers form an abelian group under multiplication.
(D) The set of real numbers excluding zero in an abelian group under multiplication.

## Q58 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Group Theory

- (A) (ℚ, +): closed, associative, identity 0, inverse −a, commutative ✔
- (B) (ℤ, +): same ✔
- **(C) (ℚ, ×): 0 has no multiplicative inverse → not a group** ✘ (false statement)
- (D) (ℝ − {0}, ×): identity 1, inverse 1/a, commutative ✔

## Q59
<div class="stem"><p>A _____ point of a fuzzy set A is a point x ∈ X at which μA (x) = 0.5</p></div>

## Q59 - Options
(A) Core
(B) Support
(C) Crossover
(D) α-cut

## Q59 - Hint
**Answer:** C  
**Topic:** Soft Computing – Fuzzy Sets

- **Crossover point:** μ(x) = 0.5 ✔
- Core: μ(x) = 1
- Support: μ(x) > 0
- α-cut: μ(x) ≥ α

## Q60
<div class="stem"><p>Which one of the following statements is TRUE?</p></div>

## Q60 - Options
(A) The LALR(1) parser for a grammar G cannot have a reduce-reduce conflict if the LR(1) parser for G does not have reduce-reduce conflict.
(B) The symbol table is accessed only during the lexical analysis phase.
(C) Data flow analysis is necessary for run-time memory management.
(D) LR(1) parsing is sufficient for deterministic context-free languages.

## Q60 - Hint
**Answer:** D  
**Topic:** Compiler Design – Parsing

- (A) False – merging LR(1) states with the same core into LALR(1) **can create reduce–reduce conflicts** (it can never create shift–reduce ones).
- (B) False – the symbol table is used in **all** phases.
- (C) False – data-flow analysis is for **optimisation**, not run-time memory management.
- **(D) True** – every deterministic CFL has an LR(1) grammar, so LR(1) parsing is sufficient for DCFLs.

## Q61
<div class="stem"><p>Match the following vi commands in Unix:<br/> List — I                              List — II<br/> a. : w                 i. saves the file and quits editing mode<br/> b. : x                 ii. escapes unix shell<br/> c. : q                 iii. saves file and remains in editing mode<br/> d. : sh               iv. quits editing mode and no changes are saved to the file</p> <p>Codes<br/> a b c d</p></div>

## Q61 - Options
(A) ii iii i iv
(B) iv iii ii i
(C) iii iv i ii
(D) iii i iv ii

## Q61 - Hint
**Answer:** D  
**Topic:** Operating Systems – Unix (vi editor)

- **:w** → save, stay in the editor (iii)
- **:x** → save and quit (i)
- **:q** → quit (no save; fails if there are unsaved changes, :q! forces) (iv)
- **:sh** → escape to the Unix shell (ii)

## Q62
<div class="stem"><p>Consider a max heap, represented by the array:</p> <p><img src="tests/img/t2/q112-2dc833.png"/></p> <p>now consider that a value 35 is inserted into this heap. After insertion, the new heap is</p></div>

## Q62 - Options
(A) 40, 30, 20, 10, 15, 16, 17, 8, 4, 35
(B) 40, 35, 20, 10, 30, 16, 17, 8, 4, 15
(C) 40, 30, 20, 10, 35, 16, 17, 8, 4, 15
(D) 40, 35, 20, 10, 15, 16, 17, 8, 4, 30

## Q62 - Hint
**Answer:** B  
**Topic:** Data Structures – Heap Insertion

Heap: 40, 30, 20, 10, 15, 16, 17, 8, 4. Insert 35 at index 10.

**Step 1:** Parent of 10 is 5 (value 15); 35 > 15 → swap. 35 is now at index 5.  
**Step 2:** Parent of 5 is 2 (value 30); 35 > 30 → swap. 35 is now at index 2.  
**Step 3:** Parent of 2 is 1 (value 40); 35 < 40 → stop.

Result: **40, 35, 20, 10, 30, 16, 17, 8, 4, 15**.

## Q63
<div class="stem"><p>Consider the set of processes with arrival time (in milliseconds), CPU burst time (in milliseconds), and priority (0 is the highest priority) shown below. None of the processes have I/O burst time.</p> <p><img src="tests/img/t2/q113-5a48e2.png"/></p> <p>The average waiting time (in milliseconds) of all the processes using preemptive priority scheduling algorithm is __________.</p></div>

## Q63 - Options
(A) 29
(B) 30
(C) 31
(D) 32

## Q63 - Hint
**Answer:** A  
**Topic:** Operating Systems – Preemptive Priority Scheduling

Processes (AT, BT, priority; 0 = highest): P1(0, 11, 2), P2(5, 28, 0), P3(12, 2, 3), P4(2, 10, 1), P5(9, 16, 4).

**Gantt chart:**

| 0–2 | 2–5 | 5–33 | 33–40 | 40–49 | 49–51 | 51–67 |
|---|---|---|---|---|---|---|
| P1 | P4 | P2 | P4 | P1 | P3 | P5 |

- t = 2: P4 (pri 1) preempts P1 (P1 has 9 left).
- t = 5: P2 (pri 0) preempts P4 (P4 has 7 left) and runs to completion.
- After 33: pick by priority → P4, then P1, then P3, then P5.

| Process | CT | WT = CT − AT − BT |
|---|---|---|
| P1 | 49 | 49 − 0 − 11 = 38 |
| P2 | 33 | 33 − 5 − 28 = 0 |
| P3 | 51 | 51 − 12 − 2 = 37 |
| P4 | 40 | 40 − 2 − 10 = 28 |
| P5 | 67 | 67 − 9 − 16 = 42 |

Average WT = 145 / 5 = **29 ms**.

## Q64
<div class="stem"><p>Which of the following statements is/are true ?</p> <p>P: Software Reengineering is preferable for software products having high failure rates, having poor design and/or having poor code structure</p> <p>Q: Software Reverse Engineering is the process of analyzing software with the objective of recovering its design and requirement specification.</p></div>

## Q64 - Options
(A) P only
(B) Neither P nor Q
(C) Q only
(D) Both P and Q

## Q64 - Hint
**Answer:** D  
**Topic:** Software Engineering – Maintenance

- **P – True.** Re-engineering (restructure and rebuild) suits systems with high failure rates, poor design or poor code structure.
- **Q – True.** Reverse engineering analyses existing software to **recover its design and specifications**.

## Q65
<div class="stem"><p>Given below are two statements:</p> <p>Statement I: In Ceasar Cipher each letter of Plain text is replaced by another letter for encryption.</p> <p>Statement II: Diffie Hellman algorithm is used for exchange of secret key.</p> <p>In the light of the above statements, choose the correct answer from the options given below</p></div>

## Q65 - Options
(A) Both Statement I and Statement II are true
(B) Both Statement I and Statement II are false
(C) Statement I is correct but Statement II is false
(D) Statement I is incorrect but Statement II is true

## Q65 - Hint
**Answer:** A  
**Topic:** Computer Networks – Cryptography

- **I – True.** Caesar cipher replaces each plaintext letter with the letter a fixed number of positions later (substitution, shift = 3 traditionally).
- **II – True.** Diffie–Hellman lets two parties agree on a **shared secret key** over an insecure channel.

## Q66
<div class="stem"><p>Which one of the following correctly determines the solution of the recurrence relation with T(1) = 1?</p> <p>T(n) = 2T(n/2) + logn</p> <p>Θ(n)</p> <p>Θ(nlog n)</p> <p>Θ(n<sup>2</sup>)</p> <p>Θ(log⁡n)</p></div>

## Q66 - Options
(A) Θ(n)
(B) Θ(nlog n)
(C) Θ(n2)
(D) Θ(log⁡n)

## Q66 - Hint
**Answer:** A  
**Topic:** Algorithms – Recurrences (Master Theorem)

T(n) = 2T(n/2) + log n

**Step 1:** a = 2, b = 2, f(n) = log n.  
**Step 2:** n^(log_b a) = n.  
**Step 3:** log n = O(n^(1−ε)) → f is polynomially smaller → **Case 1**.  
**Step 4:** T(n) = **Θ(n)**.

## Q67
<div class="stem"><p>Solve the following L.P.P. by graphical method</p> <p>Max Z = 3x1 + 2x2</p> <p>S.T.</p> <p>x1-x2 ≥ 1</p> <p>x1+x2 ≥ 3</p> <p>x1, x2 ≥ 0</p></div>

## Q67 - Options
(A) 6
(B) 20
(C) Unbounded Solution
(D) Feasible Solution

## Q67 - Hint
**Answer:** C  
**Topic:** Optimization – Linear Programming

Max Z = 3x₁ + 2x₂, subject to x₁ − x₂ ≥ 1, x₁ + x₂ ≥ 3, x₁, x₂ ≥ 0.

**Step 1 – Plot:** x₁ − x₂ = 1 through (1,0),(0,−1); x₁ + x₂ = 3 through (3,0),(0,3).  
**Step 2 – Feasible region:** both are "≥" constraints, so the region lies to the right/above, starting at the corner (2, 1), and **extends without limit** (e.g. x₁ → ∞, x₂ = 0 satisfies both).  
**Step 3:** Along that direction Z = 3x₁ → ∞.

The solution is **unbounded**.

## Q68
<div class="stem"><p>In a binary tree, for every node the difference between the number of nodes in the left and right subtrees is at most 2. If the height of the tree is h &gt; 0, then the minimum number of nodes in the tree is:</p></div>

## Q68 - Options
(A) 2<sup>h-1</sup>
(B) 2<sup>h-1</sup> + 1
(C) 2<sup>h</sup> - 1
(D) 2<sup>h</sup>

## Q68 - Hint
**Answer:** B  
**Topic:** Data Structures – Binary Trees

Let N(h) = minimum nodes for height h (height = edges on the longest path).

**Step 1 – Build the smallest tree:** the root needs one subtree of height h−1 (N(h−1) nodes); the other may have up to 2 fewer nodes: N(h−1) − 2.  
**Step 2 – Recurrence:** N(h) = 1 + N(h−1) + N(h−1) − 2 = 2N(h−1) − 1.  
**Step 3 – Base:** N(1) = 2 (root + one child).  
**Step 4 – Values:** N(2) = 3, N(3) = 5, N(4) = 9 … = **2^(h−1) + 1**.

(The options lost their superscripts in the source: (B) is 2^(h−1) + 1.)

## Q69
<div class="stem"><p>Match the following learning modes w.r.t. characteristics of available information for learning :</p> <p>a. Supervised            i. Instructive information on desired responses, explicitly specified by a teacher.</p> <p>b. Recording             ii. A priori design information for memory storing</p> <p>c. Reinforcement      iii. Partial information about desired responses, or only “right” or “wrong”   evaluative information</p> <p>d. Unsupervised        iv. No information about desired responses</p> <p>Codes :</p> <p>a   b    c    d</p></div>

## Q69 - Options
(A) i    ii    iii   iv
(B) i    iii   ii    iv
(C) ii   iv   iii   i
(D) ii   iii   iv   i

## Q69 - Hint
**Answer:** A  
**Topic:** Machine Learning – Learning Paradigms

- **Supervised** – the teacher gives the explicit desired response (i)
- **Recording** – a priori design information stored in memory (ii)
- **Reinforcement** – only partial / right-or-wrong evaluative feedback (iii)
- **Unsupervised** – no information about the desired response (iv)

## Q70
<div class="stem"><p>Consider the minterm list form of a Boolean function F given below.</p> <p>F(P, Q, R, S) = Σm(0, 2, 5, 7, 9, 11) + d(3, 8, 10, 12, 14)Here, m denotes a minterm and d denotes a don’t care term. The number of essential prime implicants of the function F is _______ .</p></div>

## Q70 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q70 - Hint
**Answer:** A  
**Topic:** Digital Logic – K-Map

Same function as Q52: F = Σm(0,2,5,7,9,11) + d(3,8,10,12,14).

- **Q'S'** (0, 2, 8, 10) – only group covering m0 → essential
- **P'QS** (5, 7) – only group covering m5 → essential
- **PQ'** (8, 9, 10, 11) – only group covering m9 → essential

These three cover every minterm → **3** essential prime implicants.

## Q71
<div class="stem"><p>The number of different spanning trees in complete graph, K4 and bipartite graph K2,2 have .......... and .....…. respectively.</p></div>

## Q71 - Options
(A) 14, 14
(B) 16, 14
(C) 16, 4
(D) 14, 4

## Q71 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Spanning Trees

- **K₄:** Cayley's formula nⁿ⁻² = 4² = **16**.
- **K₂,₂:** formula m^(n−1)·n^(m−1) = 2¹·2¹ = **4**. (K₂,₂ is just a 4-cycle; remove any one of its 4 edges.)

## Q72
<div class="stem"><p>Assume that for a certain processor, a read request takes 50 nanoseconds on a cache miss and 5 nanoseconds on a cache hit. Suppose while running a program, it was observed that 80% of the processors read requests result in a cache hit. The average and access time in nanoseconds is  _______.</p></div>

## Q72 - Options
(A) 14
(B) 15
(C) 16
(D) 17

## Q72 - Hint
**Answer:** A  
**Topic:** Computer Organization – Cache

Average access time = h × t_hit + (1 − h) × t_miss  
= 0.8 × 5 + 0.2 × 50 = 4 + 10 = **14 ns**.

## Q73
<div class="stem"><p>Let G be a graph with 100 vertices numbered 1 to 100. Two vertices i and j are adjacent if |i - j| = 8 or |i - j| = 12. The number of connected components in G is </p></div>

## Q73 - Options
(A) 8
(B) 4
(C) 12
(D) 25

## Q73 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Graph Connectivity

Edges connect i and j when they differ by 8 or 12.

- Both 8 and 12 are multiples of 4, so an edge never changes **i mod 4** → at least 4 components.
- Within one residue class you can move by 4 (go +12 then −8), so each class is fully connected.

Components = gcd(8, 12) = **4**.

## Q74
<div class="stem"><p>Consider a hash table with 9 slots.  The hash function is h(k) = k mod 9.  The collisions are resolved by chaining.  The following 9 keys are inserted in the order: 5, 28, 19, 15, 20, 33, 12, 17, 10.  The maximum, minimum, and average chain lengths in the hash table, respectively, are</p></div>

## Q74 - Options
(A) 3, 0, and 1
(B) 3, 3, and 3
(C) 4, 0, and 1
(D) 3, 0, and 2

## Q74 - Hint
**Answer:** A  
**Topic:** Data Structures – Hashing (Chaining)

h(k) = k mod 9:

| Key | 5 | 28 | 19 | 15 | 20 | 33 | 12 | 17 | 10 |
|---|---|---|---|---|---|---|---|---|---|
| Slot | 5 | 1 | 1 | 6 | 2 | 6 | 3 | 8 | 1 |

Chain lengths: slot 1 → 3 (28, 19, 10); slot 6 → 2; slots 2, 3, 5, 8 → 1; slots 0, 4, 7 → 0.

- Maximum = **3**
- Minimum = **0**
- Average = 9 keys / 9 slots = **1**

## Q75
<div class="stem"><p>Which homogeneous 2D matrix transforms the figure (a) on the left side to the figure (b) on the right ?</p> <p><img src="tests/img/t2/q125-df1697.png"/></p></div>

## Q75 - Options
(A) <em>[Figure from original not available]</em>
(B) <em>[Figure from original not available]</em>
(C) <em>[Figure from original not available]</em>
(D) <em>[Figure from original not available]</em>

## Q75 - Hint
**Answer:** B  
**Topic:** Computer Graphics – 2D Transformations

Compare the figures:

- (a) house: body (0,0)–(2,2), roof peak at (1,3), pointing **up**.
- (b) peak at (0,2) pointing **left**; body from x = 2 to 6, y = 1 to 3.

**Step 1 – Rotate 90° CCW:** (x, y) → (−y, x); "up" becomes "left".  
**Step 2 – Scale x by 2:** the house's height (3) becomes length 6 along x; its width stays 2.  
**Step 3 – Translate by (6, 1):** check corner (0,0) → (0,0) → (0,0) → **(6,1)** ✔; peak (1,3) → (−3,1) → (−6,1) → **(0,2)** ✔.

Combined matrix = [[0, −2, 6], [1, 0, 1], [0, 0, 1]].

> **⚠ Note:** The option matrices were images that are missing from the source export. The key is (B); match it against the matrix derived above.

## Q76
<div class="stem"><p>Suppose an organization want 6 subnets, and each subnet has at least 22 hosts. What subnet mask should the organization use to fulfil the above condition?</p></div>

## Q76 - Options
(A) 255.255.255.128
(B) 255.255.255.224
(C) 255.255.255.240
(D) 255.255.255.255

## Q76 - Hint
**Answer:** B  
**Topic:** Computer Networks – Subnetting

Class C, last octet = 8 bits.

**Step 1:** 6 subnets → 2³ = 8 ≥ 6 → borrow **3 bits**.  
**Step 2:** Host bits left = 5 → 2⁵ − 2 = **30 hosts** ≥ 22 ✔  
**Step 3:** Mask last octet = 11100000 = **224** → 255.255.255.224.

(.240 would leave only 14 hosts.)

## Q77
<div class="stem"><p>Consider the following two-process synchronization solution.</p> <p>Process 0                                                            Process 1</p> <p>---------                                                                    ---------</p> <p>Entry: loop while (turn == 1);                Entry: loop while (turn == 0);</p> <p>  (critical section)                                          (critical section)</p> <p>Exit: turn = 1;                                           Exit: turn = 0;</p> <p>The shared variable turn is initialized to zero. Which one of the following is TRUE?</p></div>

## Q77 - Options
(A) This is a correct two-process synchronization solution.
(B) This solution violates mutual exclusion requirement.
(C) This solution violates progress requirement.
(D) This solution violates bounded wait requirement.

## Q77 - Hint
**Answer:** C  
**Topic:** Operating Systems – Process Synchronization

This is **strict alternation**.

- **Mutual exclusion – ✔** turn can't be 0 and 1 at once.
- **Progress – ✘** if it is P1's turn (turn = 1) but P1 doesn't want to enter, P0 is blocked even though the CS is free.
- **Bounded waiting – ✔** each process waits at most one turn.

## Q78
<div class="stem"><p>Let G = (V, T, S, P) be any context-free grammar without any λ-productions or unit productions. Let K be the maximum number of symbols on the right of any production in P. The maximum number of production rules for any equivalent grammar in Chomsky normal form is given by: Where | | denotes the cardinality of the set.</p></div>

## Q78 - Options
(A) (K – 1) |P| + |T| - 1
(B) (K – 1) |P| +|T|
(C) K |P| + |T| - 1

## Q78 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Chomsky Normal Form

Converting to CNF:

- A production with k symbols on the right is broken into a chain of **(k − 1)** binary productions → at most (K − 1)|P| productions.
- Each terminal a in a long right side gets a new production Xₐ → a → at most **|T|** extra productions.

Maximum = **(K − 1)|P| + |T|**.

> **⚠ Note:** Only three options appear in the source for this question.

## Q79
<div class="stem"><p>If a software project has 2000 lines of code (LOC) and the average productivity rate is 10 LOC per person-hour, how many person-hours are required to complete the project?</p></div>

## Q79 - Options
(A) 100
(B) 150
(C) 200
(D) 250

## Q79 - Hint
**Answer:** C  
**Topic:** Software Engineering – Estimation

Effort = Size / Productivity = 2000 LOC / 10 LOC per person-hour = **200 person-hours**.

## Q80
<div class="stem"><p>Consider two strings A = "qpqrr" and B = "pqprqrp". Let x be the length of the longest common subsequence (not necessarily contiguous) between A and B and let y be the number of such longest common subsequences between A and B. Then x+10y = _________.</p></div>

## Q80 - Options
(A) 34
(B) 35
(C) 36
(D) 37

## Q80 - Hint
**Answer:** A  
**Topic:** Algorithms – Dynamic Programming (LCS)

A = qpqrr, B = pqprqrp.

**Step 1 – Fill the LCS table.** L[i][j] = L[i−1][j−1] + 1 if the characters match, otherwise max(L[i−1][j], L[i][j−1]).

| | – | p | q | p | r | q | r | p |
|---|---|---|---|---|---|---|---|---|
| – | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| q | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| p | 0 | 1 | 1 | 2 | 2 | 2 | 2 | 2 |
| q | 0 | 1 | 2 | 2 | 2 | 3 | 3 | 3 |
| r | 0 | 1 | 2 | 2 | 3 | 3 | 4 | 4 |
| r | 0 | 1 | 2 | 2 | 3 | 3 | 4 | 4 |

**Step 2 – Length:** the bottom-right cell gives x = **4**.

**Step 3 – Count the distinct LCSs** by tracing back every path that keeps the value 4:

- **qpqr** (q-p-q-r)
- **pqrr** (p-q-r-r)
- **qprr** (q-p-r-r)

So y = **3**.

**Step 4:** x + 10y = 4 + 30 = **34**.

## Q81
<div class="stem"><p>Consider the following statements regarding key</p> <p>I. A super key is an attribute or combination of attributes that uniquely identify records in an RDBMS table.</p> <p>II. A candidate key is a subset of a super key.</p> <p>III. All super keys are candidate keys but vice versa is not true.</p></div>

## Q81 - Options
(A) Only (I) is true
(B) (I) and (III) are true
(C) Only (II) is true
(D) (I) and (II) are true

## Q81 - Hint
**Answer:** D  
**Topic:** DBMS – Keys

- **I – True.** A super key is any attribute set that uniquely identifies tuples.
- **II – True.** A candidate key is a **minimal** super key, so it is a subset of a super key.
- **III – False.** It's the reverse: every candidate key is a super key, not every super key is a candidate key.

## Q82
<div class="stem"><p>Consider a 4-to-1 multiplexer with two select lines S1 and S0, given below </p> <p><img src="tests/img/t2/q132-175f57.png"/></p> <p>The minimal sum-of-products form of the Boolean expression for the output F of the multiplexer is      </p></div>

## Q82 - Options
(A) <em>[Figure from original not available]</em>
(B) <em>[Figure from original not available]</em>
(C) <em>[Figure from original not available]</em>
(D) <em>[Figure from original not available]</em>

## Q82 - Hint
**Answer:** A  
**Topic:** Digital Logic – Multiplexer

Inputs: I0 = 0, I1 = 1, I2 = R, I3 = R'; selects S1 = P, S0 = Q.

**Step 1 – Write F:** F = P'Q'(0) + P'Q(1) + PQ'(R) + PQ(R')  
= P'Q + PQ'R + PQR'

**Step 2 – Minimise:** P'Q + PQR' = Q(P' + PR') = Q(P' + R') = P'Q + QR'

**Minimal SOP: F = P'Q + QR' + PQ'R**.

> **⚠ Note:** The option expressions were images missing from the source export. The key is (A); it should match the expression above.

## Q83
<div class="stem"><p>Which of the following is true about characteristics of CISC and RISC ?</p> <p>S1: In CISC: Load/store architecture that does not allow direct transfers from one memory location to another, such transfers must take place via a processor register.</p> <p>S2: In RISC: Transfers from one memory location to another by using a single Move instruction.</p></div>

## Q83 - Options
(A) Only S1
(B) Only S2
(C) Both S1 and S2
(D) None of the above

## Q83 - Hint
**Answer:** D  
**Topic:** Computer Organization – RISC vs CISC

- **S1 ✘** – a **load/store** architecture (memory-to-memory moves only via registers) describes **RISC**, not CISC.
- **S2 ✘** – a single memory-to-memory **Move** instruction is a **CISC** feature, not RISC.

Both statements swap RISC and CISC → none is true.

## Q84
<div class="stem"><p>Consider the transition diagram of a PDA given below with input alphabet Σ = {a,b} and stack alphabet Γ = {X,Z}. Z is the initial stack symbol. Let L denote the language accepted by the PDA. </p> <p><img src="tests/img/t2/q134-619d4d.png"/><br/> Which one of the following is TRUE?</p></div>

## Q84 - Options
(A) L = {a<sup>n</sup> b<sup>n</sup>│n ≥ 0} and is not accepted by any ﬁnite automata
(B) L = {a<sup>n</sup> |n≥0} ∪ {a<sup>n</sup>b<sup>n</sup>|n ≥ 0} and is not accepted by any deterministic PDA
(C) L is not accepted by any Turing machine that halts on every input
(D) L = {a<sup>n</sup> |n ≥ 0} ∪ {a<sup>n</sup> b<sup>n</sup> |n ≥ 0} and is deterministic context-free

## Q84 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Pushdown Automata

Trace the PDA (q0 and q2 are final):

- q0: on a, push X (loop) → reading only a's and stopping in q0 accepts **aⁿ**.
- q0 → q1 on b popping X; q1 pops one X per b.
- q1 → q2 on ε when the top is Z (all X's popped) → accepts **aⁿbⁿ**.

So L = {aⁿ} ∪ {aⁿbⁿ}. At every step at most one move applies (the ε-move only fires on Z, the b-moves only on X) → the PDA is **deterministic** → L is a **DCFL**.

## Q85
<div class="stem"><p>Consider the following code sequence having five instructions I1 to I5. Each of these instructions has the following format.</p> <p>OP Ri, Rj, Rk</p> <p>where operation OP is performed on contents of registers Rj and Rk and the result is stored in register Ri.</p> <p>I1 : ADD R1, R2, R3</p> <p>I2 : MUL R7, R1, R3</p> <p>I3 : SUB R4, R1, R5</p> <p>I4 : ADD R3, R2, R4</p> <p>I5 : MUL R7, R8, R9</p> <p>Consider the following three statements:</p> <p>S1: There is an anti-dependence between instructions I2 and I5.</p> <p>S2: There is an anti-dependence between instructions I2 and I4.</p> <p>S3: Within an instruction pipeline an anti-dependence always creates one or more stalls.</p></div>

## Q85 - Options
(A) Only S1 is true
(B) Only S2 is true
(C) Only S1 and S3 are true
(D) Only S2 and S3 are true

## Q85 - Hint
**Answer:** B  
**Topic:** Computer Organization – Pipeline Hazards

Anti-dependence = **WAR** (a later instruction writes a register an earlier one reads).

- **S1 ✘** – I2 reads R1, R3; I5 writes R7. I2 *writes* R7 too (that's WAW, output dependence), not WAR.
- **S2 ✔** – I2 **reads R3**, and I4 later **writes R3** → WAR.
- **S3 ✘** – in an in-order pipeline, reads happen early and writes late, so WAR usually causes no stall; register renaming removes it anyway.

## Q86
<div class="stem"><p>Consider an unpipelined machine with 10nsec clock cycles which uses four cycles for ALU operations and branches where as five cycles for memory operation. Assume that the relative frequencies of these operations are 40%, 20% and 40%, respectively. Due to clock skew and setup pipeline let us consider that the machine adds one nsec overhead to the clock. How much speedup is observed in the instruction execution rate when a pipelined machine is considered.</p></div>

## Q86 - Options
(A) 2 times
(B) 4 times
(C) 6 times
(D) 8 times

## Q86 - Hint
**Answer:** B  
**Topic:** Computer Organization – Pipelining

**Unpipelined:** average CPI = 4(0.4) + 4(0.2) + 5(0.4) = 1.6 + 0.8 + 2.0 = 4.4  
→ time per instruction = 4.4 × 10 = **44 ns**

**Pipelined:** ideally 1 instruction per cycle; cycle = 10 + 1 (overhead) = **11 ns**

Speed-up = 44 / 11 = **4**.

## Q87
<div class="stem"><p>Suppose a system has 12 instances of some resource with n processes competing for that resource. Each process may require 4 instances of the resource. The maximum value of n for which the system never enters into deadlock is</p></div>

## Q87 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q87 - Hint
**Answer:** A  
**Topic:** Operating Systems – Deadlock

Worst case: each process holds 3 (one less than its need of 4). To avoid deadlock at least one more must remain free:

3n + 1 ≤ 12 ⇒ n ≤ 3.67 ⇒ **n = 3**.

## Q88
<div class="stem"><p>Consider the following expression grammar. The seman­tic rules for expression calculation are stated next to each grammar production.</p> <p> E → number    E.val = number. val</p> <p> E →  E '+' E    E(1).val = E(2).val + E(3).val</p> <p> E →  E '×' E  E(1).val = E(2).val × E(3).val</p> <p>Assume the conflicts in Part (a) of this question are resolved and an LALR(1) parser is generated for parsing arithmetic expressions as per the given grammar. Consider an expression 3 × 2 + 1. What precedence and associativity properties does the generated parser realize?</p></div>

## Q88 - Options
(A) Equal precedence and left associativity; expression is evaluated to 7
(B) Equal precedence and right associativity; expression is evaluated to 9
(C) Precedence of '×' is higher than that of '+', and both operators are left associative; expression is evaluated to 7
(D) Precedence of '+' is higher than that of '×', and both operators are left associative; expression is evaluated to 9

## Q88 - Hint
**Answer:** B  
**Topic:** Compiler Design – Conflict Resolution in YACC

The grammar E → E+E | E×E | number is **ambiguous** and gives shift–reduce conflicts. YACC's default resolves them in favour of **shift**.

Parsing 3 × 2 + 1: after 3 × 2, on seeing '+' the parser **shifts** instead of reducing, so it evaluates 2 + 1 first → 3 × (2 + 1) = **9**.

Always shifting = **equal precedence, right associativity**.

## Q89
<div class="stem"><p>Which of the statement are CORRECT ?</p> <p>(A) Constructors are invoked automatically when the objects are created.</p> <p>(B) Constructors do not have return types, not even void and therefore they cannot return values.</p> <p>(C) Constructors cannot be inherited though a derived class can call the base class constructors.</p> <p>(D) Constructors can be declared as virtual.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q89 - Options
(A) (A), (B) and (D) Only
(B) (A), (B) and (C) Only
(C) (B), (C) and (D) Only
(D) (A), (C) and (D) Only     

## Q89 - Hint
**Answer:** B  
**Topic:** Programming in C++ – Constructors

- **(A) ✔** – called automatically when an object is created.
- **(B) ✔** – no return type, not even void.
- **(C) ✔** – not inherited, but the derived constructor can call the base constructor (initialiser list).
- **(D) ✘** – constructors **cannot be virtual** (destructors can).

## Q90
<div class="stem"><p>Which one of the following regular expressions correctly represents the language of the finite automaton given below</p> <p><img src="tests/img/t2/q140-f504df.png"/></p></div>

## Q90 - Options
(A) ab*bab* + ba*aba*
(B) (ab*b)*ab* + (ba*a)*ba*
(C) (ab*b+ba*a)*(a*+b*)
(D) (ba*a+ ab*b)* (ab* + ba*)

## Q90 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Regular Expressions

States: start S, top T (final, loop b), bottom U (final, loop a).

- **Going round the top and back to S:** a, then b\*, then b back to S → **ab\*b**
- **Going round the bottom and back to S:** b, then a\*, then a back to S → **ba\*a**
- **Ending in T:** a then b\* → **ab\***; **ending in U:** b then a\* → **ba\***

RE = (ba\*a + ab\*b)\* (ab\* + ba\*).

## Q91
<div class="stem"><p>Suppose a stack implementation supports an instruction REVERSE, which reverses the order of elements on the stack, in addition to the PUSH and POP instructions. Which one of the following statements is TRUE with respect to this modified stack?</p></div>

## Q91 - Options
(A) A queue cannot be implemented using this stack.
(B) A queue can be implemented where ENQUEUE takes a single instruction and DEQUEUE takes a sequence of two instructions.
(C) A queue can be implemented where ENQUEUE takes a sequence of three instructions and DEQUEUE takes a single instruction.
(D) A queue can be implemented where both ENQUEUE and DEQUEUE take a single instruction each.

## Q91 - Hint
**Answer:** C  
**Topic:** Data Structures – Stack & Queue

Keep the stack so that the **front of the queue is on top**.

- **DEQUEUE** = 1 instruction: **POP**.
- **ENQUEUE x** = 3 instructions: **REVERSE** (front goes to the bottom, so the rear is on top), **PUSH x**, **REVERSE** again (front back on top).

## Q92
<div class="stem"><p>An IP router with a Maximum Transmission Unit (MTU) of 1500 bytes has received an IP packet of size 4404 bytes with an IP header of length 20 bytes. The values of the relevant fields in the header of the third IP fragment generated by the router for this packet are</p></div>

## Q92 - Options
(A) MF bit: 0, Datagram Length: 1444; Offset: 370
(B) MF bit: 1, Datagram Length: 1424; Offset: 185
(C) MF bit: 1, Datagram Length: 1500; Offset: 370
(D) MF bit: 0, Datagram Length: 1424; Offset: 2960

## Q92 - Hint
**Answer:** A  
**Topic:** Computer Networks – IP Fragmentation

**Step 1 – Data size:** total 4404 − 20 header = **4384 bytes** of data.  
**Step 2 – Max data per fragment:** 1500 − 20 = 1480 (a multiple of 8 ✔).  
**Step 3 – Split:** 1480 + 1480 + **1424** = 4384.

| Fragment | Data | Total length | Offset (÷8) | MF |
|---|---|---|---|---|
| 1 | 0–1479 | 1500 | 0 | 1 |
| 2 | 1480–2959 | 1500 | 185 | 1 |
| 3 | 2960–4383 | **1444** | **370** | **0** |

The third fragment is the last, so MF = 0, length = 1424 + 20 = 1444, offset = 2960 / 8 = 370.

## Q93
<div class="stem"><p>Match the following:</p> <p><img src="tests/img/t2/q143-fd4044.png"/></p></div>

## Q93 - Options
(A) P-4, Q-3, R-2,S-1
(B) P-4, Q-3, R-1, S-2
(C) P-2, Q-3, R-4, S-1
(D) P-2, Q-3, R-1,S-4

## Q93 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Environment Types

- **Fully observable** → sensors give the complete state (4)
- **Deterministic** → next state fully determined by current state and action (3)
- **Semi-dynamic** → environment doesn't change, performance score does (2)
- **Discrete** → limited, distinct percepts and actions (1)

## Q94
<div class="stem"><p>Which of the following statements is/are ​false ?</p> <p>P: The clean-room strategy to software engineering is based on the incremental software process model.</p> <p>Q: The clean-room strategy to software engineering is one of the ways to overcome “unconscious” copying of copyrighted code.</p> <p>Choose the correct answer from the code given below:</p></div>

## Q94 - Options
(A) Neither P and Q
(B) P only
(C) Both P and Q
(D) Q only

## Q94 - Hint
**Answer:** A  
**Topic:** Software Engineering – Cleanroom

- **P – True.** Cleanroom SE develops software in **increments** with formal verification and statistical testing.
- **Q – True.** The term "clean-room design" also refers to re-implementing functionality **without seeing the original code**, which avoids unconscious copying of copyrighted code.

Neither is false.

## Q95
<div class="stem"><p>Consider the following minimax game tree search. What will be the value propagated at the root ?</p> <p><img src="tests/img/t2/q145-9e973b.png"/></p></div>

## Q95 - Options
(A) 6
(B) 3
(C) 5
(D) 4

## Q95 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Minimax

Work bottom-up (MAX picks max, MIN picks min).

**Left MIN node** – its MAX children: max(4) = 4, max(6, 2, 6) = 6, max(3, 9) = 9 → MIN = **4**  
**Middle MIN node** – max(5, 2) = 5, max(7, 3) = 7 → MIN = **5**  
**Right MIN node** – max(1) = 1, max(7, 2) = 7, max(4, 6, 3) = 6 → MIN = **1**

**Root (MAX)** = max(4, 5, 1) = **5**.

## Q96
<div class="stem"><p>Match List - I with List - II.</p> <p>List - I                                                  List - II</p> <p>(A) BCNF iff                     (I) every JD is implied by the candidate keys</p> <p>(B) 5 NF iff                        (II) all underlying domains contain scalar values only</p> <p>(C) 1 NF iff                       (III) every MVD is implied by the candidate keys</p> <p>(D) 4 NF iff                       (IV) every FD is implied by the candidate keys</p> <p>Choose the correct answer from the options given below :</p></div>

## Q96 - Options
(A) (A)-(III), (B)-(II), (C)-(I), (D)-(IV)
(B) (A)-(IV), (B)-(I), (C)-(II), (D)-(III)
(C) (A)-(II), (B)-(III), (C)-(IV), (D)-(I)
(D) (A)-(IV), (B)-(I), (C)-(III), (D)-(II)

## Q96 - Hint
**Answer:** B  
**Topic:** DBMS – Normal Forms

Each higher normal form generalises "everything is implied by the candidate keys":

- **BCNF** ⇔ every **FD** is implied by candidate keys (IV)
- **4NF** ⇔ every **MVD** is implied by candidate keys (III)
- **5NF** ⇔ every **JD** is implied by candidate keys (I)
- **1NF** ⇔ all domains are **atomic/scalar** (II)

## Q97
<div class="stem"><p>Which of the following are the principles tasks of the linker?</p> <p>I.Resolve external references among separately compiled program units.</p> <p>II.Translate assembly language to machine code.</p> <p>III.Relocate code and data relative to the beginning of the program.</p> <p>IV.Enforce access-control restrictions on system libraries.</p></div>

## Q97 - Options
(A) I and II
(B) I and III
(C) II and III
(D) I and IV

## Q97 - Hint
**Answer:** B  
**Topic:** System Software – Linker

A linker:

- **resolves external references** between separately compiled modules (I) ✔
- **relocates** code and data relative to the program's start (III) ✔

Translating assembly to machine code (II) is the **assembler's** job; access control (IV) is the OS's.

## Q98
<div class="stem"><p>The extent to which a software performs its intended functions without failures, is termed as</p></div>

## Q98 - Options
(A) Robustness
(B) Correctness
(C) Reliability
(D) Accuracy

## Q98 - Hint
**Answer:** C  
**Topic:** Software Engineering – Quality Attributes

- **Reliability** – performs intended functions **without failure** over time ✔
- Correctness – meets its specification
- Robustness – behaves sensibly under invalid inputs or stress
- Accuracy – precision of results

## Q99
<div class="stem"><p>Consider the following code segment:</p> <p>int arr[ ] = [0, 1, 2, 3, 4);</p> <p>int i=1, *ptr;</p> <p>ptr = arr + 2;</p> <p>arrange the following printf statements in the increasing order of their output.</p> <p>(A) printf ("%d", ptr[i]);</p> <p>(B) printf ("%d", ptr[i+1]);</p> <p>(C) printf ("%d", ptr[-i]);</p> <p>(D) printf ("%d", ptr[-i+1]);</p> <p>Choose the correct answer from the options given below :</p></div>

## Q99 - Options
(A) (C), (A), (B), (D) 
(B) (C), (D), (A), (B)
(C) (D), (A), (B), (C) 
(D) (A), (B), (D), (C)

## Q99 - Hint
**Answer:** B  
**Topic:** Programming in C – Pointers & Arrays

arr = {0, 1, 2, 3, 4}; ptr = arr + 2, so ptr[k] = arr[2 + k]; i = 1.

- (A) ptr[1] = arr[3] = **3**
- (B) ptr[2] = arr[4] = **4**
- (C) ptr[−1] = arr[1] = **1**
- (D) ptr[0] = arr[2] = **2**

Increasing: **C (1), D (2), A (3), B (4)**.

## Q100
<div class="stem"><p>Match the following</p> <p><img src="tests/img/t2/q150-01af85.png"/></p></div>

## Q100 - Options
(A) P-3, Q-4, R-2,S-1
(B) P-4, Q-3, R-2, S-1
(C) P-3, Q-1, R-4, S-2
(D) P-4, Q-3, R-1,S-2

## Q100 - Hint
**Answer:** B  
**Topic:** Software Engineering – Testing

- **Recovery testing** → forces the software to fail in many ways and checks recovery (4)
- **Stress testing** → demands resources in abnormal quantity, frequency or volume (3)
- **Deployment testing** → exercises the software in each target environment (2)
- **Security testing** → verifies built-in protection mechanisms (1)
