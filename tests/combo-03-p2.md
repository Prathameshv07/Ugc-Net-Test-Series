<!-- Combo Test 3 · Paper 2 (CSA) · original question numbers kept in the source data -->

## Q1
<div class="stem"><p>Match the following: </p> <table> <tbody> <tr> <td> <p>List I</p> </td> <td> <p>List II</p> </td> </tr> <tr> <td> <p>(a) Cavalier Projection</p> </td> <td> <p>(i)The direction of projection is chosen so that there is no foreshortening of lines perpendicular to the xy plane.</p> </td> </tr> <tr> <td> <p>(b) Cabinet Projection</p> </td> <td> <p>(ii) The direction of projection is chosen so that lines perpendicular to the xy planes are foreshortened by half their lengths.</p> </td> </tr> <tr> <td> <p>(c) Isometric Projection</p> </td> <td> <p>(iii) The direction of projection makes equal angles with all of the principal axis.</p> </td> </tr> <tr> <td> <p>(d) Orthographic Projection</p> </td> <td> <p>(iv) Projections are characterized by the fact that the direction of projection is perpendicular to the view plane.</p> </td> </tr> </tbody> </table> <p>codes:<br/> (a)     (b)     (c)      (d)</p></div>

## Q1 - Options
(A) (i)      (iii)     (iv)     (ii)
(B) (ii)      (iii)     (i)      (iv)
(C) (iv)     (ii)      (iii)     (i)
(D) (i)      (ii)      (iii)     (iv)

## Q1 - Hint
**Answer:** D  
**Topic:** Computer Graphics – Projections

- **Cavalier** – oblique projection with **no foreshortening** of lines perpendicular to the view plane (i)
- **Cabinet** – those lines are **foreshortened to half** (ii)
- **Isometric** – projection direction makes **equal angles** with all three principal axes (iii)
- **Orthographic** – projection direction **perpendicular** to the view plane (iv)

## Q2
<div class="stem"><p>In Java, which of the following statements is/are True?</p> <p>S1 : The ‘final’ keyword applied to a class definition prevents the class from being extended through derivation.</p> <p>S2 : A class can only inherit one class but can implement multiple interfaces.</p> <p>S3 : Java permits a class to replace the implementation of a method that it has inherited. It is called method overloading.</p> <p>S4 : Constants that can’t be changed are declared using the static keyword.</p> <p>Code:</p></div>

## Q2 - Options
(A) S1 and S2 only
(B) S1 and S3 only
(C) S1, S2 and S4 only
(D) All of the above

## Q2 - Hint
**Answer:** A  
**Topic:** Programming – Java

- **S1 ✔** – a `final` class cannot be extended.
- **S2 ✔** – Java has single class inheritance but a class can implement many interfaces.
- **S3 ✘** – replacing an inherited method's implementation is **overriding**, not overloading.
- **S4 ✘** – constants use **final** (usually `static final`); `static` alone doesn't make a value constant.

## Q3
<div class="stem"><p>Which of the following statements is/are CORRECT?</p> <p>The intersection of two regular languages is regular.</p> <p>I.The intersection of two context-free languages is context-free.</p> <p>II.The intersection of two recursive languages is recursive.</p> <p>III.The intersection of two recursively enumerable languages is recursively enumerable.</p></div>

## Q3 - Options
(A) I, II, III
(B) II, III, IV
(C) I, III, IV
(D) All of the above

## Q3 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Closure Properties

Take the four statements in order (the source numbering is shifted):

1. Regular ∩ Regular → **regular** ✔
2. CFL ∩ CFL → **not always CFL** ✘ (e.g. aⁿbⁿcᵐ ∩ aᵐbⁿcⁿ = aⁿbⁿcⁿ)
3. Recursive ∩ Recursive → **recursive** ✔
4. RE ∩ RE → **RE** ✔

The true ones are the 1st, 3rd and 4th statements = option (C) "I, III, IV".

> **⚠ Note:** The stem's numbering is off by one (the first statement has no label). Read the options as the 1st, 3rd and 4th statements.

## Q4
<div class="stem"><p>Which of the following is/are behavioral testing technique(s)?</p> <p>(A) Equivalence Partitioning</p> <p>(B) State-Based Testing Method</p> <p>(C) Boundary Value Analysis</p> <p>(D) Data flow Testing</p> <p>(E) Loop Testing</p> <p>Choose the correct answer from the options given below</p></div>

## Q4 - Options
(A) (B) and (D) only
(B) (A), (B) and (C) only
(C) (D) and (E) only
(D) (A), (C) and (E) only

## Q4 - Hint
**Answer:** B  
**Topic:** Software Engineering – Testing Techniques

**Behavioural (black-box)** techniques use the specification, not the code:

- Equivalence partitioning (A) ✔
- State-based testing (B) ✔
- Boundary value analysis (C) ✔

Data-flow testing and loop testing need the **code structure** → white-box.

## Q5
<div class="stem"><p>If a processor has 32-bit virtual address, 28-bit physical address, 2 kB page size How many bits are required for the virtual, physical page number?</p></div>

## Q5 - Options
(A) 17, 21
(B) 21, 17
(C) 6, 10
(D) 10, 6

## Q5 - Hint
**Answer:** B  
**Topic:** Operating Systems – Paging

Page size 2 KB = 2¹¹ → offset 11 bits.

- Virtual page number = 32 − 11 = **21**
- Physical frame number = 28 − 11 = **17**

## Q6
<div class="stem"><p>Let Ri(A) and Wi(A) denote read and write operations respectively on a data item A by a transaction T. Consider the following schedule.</p> <p>S : R1(A) , W2(A) , R3(A) , W1(A) , W3(A)</p> <p>Which one of the following options is correct?</p></div>

## Q6 - Options
(A) S is conflict serializable but not view serializable
(B) S is not conflict serializable but view serializable
(C) S is both conflict serializable and view serializable
(D) Neither conflict serializable nor view serializable

## Q6 - Hint
**Answer:** B  
**Topic:** DBMS – Serializability

S: R1(A), W2(A), R3(A), W1(A), W3(A)

**Conflict serializability:** R1(A) → W2(A) gives T1 → T2; W2(A) → W1(A) gives T2 → T1 → **cycle** → not conflict serializable.

**View serializability:** check the serial order T1, T2, T3:

- T1 reads the initial A ✔
- T3 reads A written by T2 ✔
- Final writer is T3 ✔

Same view → **view serializable** (thanks to blind writes).

## Q7
<div class="stem"><p>Consider a system with 2 level caches. Access times of Level 1 cache, Level 2 cache and main memory are 1 ns, 10ns, and 100 ns, respectively. The hit rates of Level 1 and Level 2 caches are 0.6 and 0.8, respectively. What is the average access time of the system ignoring the search time within the cache?</p></div>

## Q7 - Options
(A) 11.8 ns
(B) 12.8 ns
(C) 12.6 ns
(D) 11.4 ns

## Q7 - Hint
**Answer:** A  
**Topic:** Computer Organization – Multilevel Cache

Ignoring search time, each access is served by the level where it hits:

T_avg = H1·T1 + (1−H1)·H2·T2 + (1−H1)(1−H2)·Tm  
= 0.6 × 1 + 0.4 × 0.8 × 10 + 0.4 × 0.2 × 100  
= 0.6 + 3.2 + 8.0 = **11.8 ns**

## Q8
<div class="stem"><p>Which of the following statements is/are false?</p> <p>I. The Kruskal's algorithm for determining minimum cost spanning tree with 'n' vertices and 'm' edges in the graph takes a time of O(m log n).</p> <p>II. B.F.S &amp; D.F.S can be used to find the connected components of a graph.</p> <p>III. An offline algorithm is one that can process its input piece-by-piece in a serial fashion.</p> <p>IV. Shortest paths problem can be solved using matrix multiplication.</p></div>

## Q8 - Options
(A) I and II
(B) II and III
(C) III and IV
(D) I and IV

## Q8 - Hint
**Answer:** C  
**Topic:** Algorithms – Graph Algorithms

- **I – True.** Kruskal: O(m log m) = O(m log n).
- **II – True.** BFS/DFS find connected components.
- **III – False.** Processing input piece by piece describes an **online** algorithm.
- **IV –** key treats it as false.

> **⚠ Note:** As in Test 1 Q19: statement IV is actually true (CLRS solves all-pairs shortest paths by repeated "min-plus" matrix multiplication). Only III is strictly false; the key gives (C).

## Q9
<div class="stem"><p>Five jobs A, B, C, D and E are waiting in Ready Queue. Their expected runtimes are 9, 6, 3, 5 and x respectively. All jobs entered in Ready queue at time zero. They must run in ............. order to minimize average response time if 3 &lt; x &lt; 5.</p></div>

## Q9 - Options
(A) B, A, D, E, C
(B) C, E, D, B, A
(C) E, D, C, B, A
(D) C, B, A, E, D

## Q9 - Hint
**Answer:** B  
**Topic:** Operating Systems – CPU Scheduling

To minimise average response/waiting time when all arrive at t = 0, run **Shortest Job First**.

Run times: C = 3, E = x (3 < x < 5), D = 5, B = 6, A = 9.

Ascending order: **C, E, D, B, A**.

## Q10
<div class="stem"><p>Consider a B+ tree in which the search key is 14 bytes long, block size is 2048 bytes, record pointer is 12 bytes long and block pointer is 10 bytes long. The maximum number of keys that can be accommodated in each non-leaf node of the tree is</p></div>

## Q10 - Options
(A) 50
(B) 85
(C) 51
(D) 84

## Q10 - Hint
**Answer:** D  
**Topic:** DBMS – B+ Tree Order

A non-leaf node of order p has **p block pointers** and **p − 1 keys**:

p × 10 + (p − 1) × 14 ≤ 2048  
24p − 14 ≤ 2048 ⇒ 24p ≤ 2062 ⇒ p ≤ 85.9 ⇒ **p = 85**

Maximum keys = p − 1 = **84**.

(Record pointers are only in leaf nodes, so the 12 bytes is not used here.)

## Q11
<div class="stem"><p>Consider the grammar shown below</p> <p>S → iEtSS’|a</p> <p>S’ → eS|ε</p> <p>E → b</p> <p>In the predictive parse table, M, of this grammar, the entries M[S', e] and M[S', $] respectively are</p></div>

## Q11 - Options
(A) {S’ →  e S} and { S'  →  ε}
(B) {S’ →  e S} and {}
(C) {S’ →  ε} and { S'  →  ε}
(D) {S' → e S, S' → ε} and { S'  →  ε}

## Q11 - Hint
**Answer:** D  
**Topic:** Compiler Design – LL(1) Parse Table

**Step 1 – FIRST / FOLLOW:**

- FIRST(eS) = {e}; S' → ε means we need FOLLOW(S').
- FOLLOW(S') = FOLLOW(S) = {$, e} (S is followed by S' in S → iEtSS', and FIRST(S') contains e).

**Step 2 – Fill entries:**

- S' → eS goes into M[S', e].
- S' → ε goes into M[S', x] for every x in FOLLOW(S') → M[S', e] and M[S', $].

M[S', e] = {S' → eS, S' → ε} (a **conflict** – the dangling-else ambiguity); M[S', $] = {S' → ε}.

## Q12
<div class="stem"><p>What is x in the following program?</p> <p>#include &lt;stdio.h&gt;</p> <p>int main ()</p> <p>{typedef (* (* arrfptr [3]) ()) [10];</p> <p>arrfptr x ;</p> <p>return 0;</p> <p>}</p></div>

## Q12 - Options
(A) x is a pointer
(B) A-(iii), B-(ii), C-(i), D-(iv)
(C) x is a array of three pointer
(D) x is an array of three function pointer

## Q12 - Hint
**Answer:** C  
**Topic:** Programming in C – Complex Declarations

Read `typedef (*(*arrfptr[3])())[10];` from the name outwards:

- arrfptr[3] → array of 3
- *arrfptr[3] → of pointers
- (*arrfptr[3])() → to functions
- *(…)() → returning a pointer
- (…)[10] → to an array of 10 (int, by default)

So x is an **array of three pointers**, each pointing to a function that returns a pointer to an array of 10 ints.

> **⚠ Note:** Option (D) "array of three function pointers" is the more precise description; the key's (C) "array of three pointers" is also true. Option (B) is garbled in the source. If both appear in an exam, prefer the more specific one.

## Q13
<div class="stem"><p>Which one of the following pairs is correctly matched in the context of database design?</p> <p><img src="tests/img/t3/q63-dd2586.png"/></p> <p>Codes :</p> <p>I    II   III   IV</p></div>

## Q13 - Options
(A) D  A   B   C
(B) D  C   B   A
(C) C  D   A   B
(D) C  A   D   B

## Q13 - Hint
**Answer:** D  
**Topic:** DBMS – ER Model

- Specialization → subset of a higher-level set forms lower-level sets (C)
- Generalization → union of lower-level sets forms a higher-level set (A)
- Aggregation → relationship set treated as a higher-level entity (D)
- Mapping cardinality → number of entities associated via a relationship (B)

I-C, II-A, III-D, IV-B.

## Q14
<div class="stem"><p>In the Artificial Neural Network,In input layer every neuron is associated with some weight values, These values are</p> <p>(i) initialized randomly</p> <p>(ii) updated during the model training process</p> <p>(iii) Initialized with constant value</p> <p>(iv) remain constant during the model training process</p></div>

## Q14 - Options
(A) (i) and (ii)
(B) (ii) and (iii)
(C) (iii) and (iv)
(D) (i) and (iv)

## Q14 - Hint
**Answer:** A  
**Topic:** Machine Learning – Neural Networks

Weights are **initialised randomly** (to break symmetry; constant initial values make all neurons learn the same thing) and are **updated during training** by back-propagation and gradient descent.

## Q15
<div class="stem"><p>Let Nf and Np denote the classes of languages accepted by non-deterministic finite automata and non-deterministic push-down automata, respectively. Let Df and Dp denote the classes of languages accepted by deterministic finite automata and deterministic push-down automata, respectively. Which one of the following is TRUE?</p></div>

## Q15 - Options
(A) Df ⊂ Nf and Dp ⊂ Np
(B) Df ⊂ Nf and Dp = Np
(C) Df = Nf and Dp = Np
(D) Df = Nf and Dp ⊂ Np

## Q15 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Automata Equivalence

- **DFA = NFA** in power (subset construction) → Df = Nf.
- **DPDA ⊂ NPDA** – DPDAs accept only deterministic CFLs; e.g. even-length palindromes wwᴿ need nondeterminism → Dp ⊂ Np.

## Q16
<div class="stem"><p>Consider the following two statements about database transaction schedules:</p> <p>I. Strict two-phase locking protocol generates conflict serializable schedules that are also recoverable.</p> <p>II. Timestamp-ordering concurrency control protocol with Thomas Write Rule can generate view serializable schedules that are not conflict serializable.</p> <p>Which of the above statements is/are TRUE?</p></div>

## Q16 - Options
(A) Both I and II
(B) Neither I nor II
(C) II only
(D) I only

## Q16 - Hint
**Answer:** A  
**Topic:** DBMS – Concurrency Control

- **I – True.** Strict 2PL holds exclusive locks until commit/abort → schedules are conflict serializable and also **strict** (hence recoverable, cascadeless).
- **II – True.** The **Thomas write rule** ignores obsolete writes, allowing schedules that are view serializable but **not** conflict serializable.

## Q17
<div class="stem"><p>Consider an instance of TCP’s Additive Increase Multiplicative Decrease (AIMD) algorithm where the window size at the start of the slow start phase is 2 MSS and the threshold at the start of the first transmission is 8 MSS. Assume that a timeout occurs during the fifth transmission. Find the congestion window size at the end of the tenth transmission.</p></div>

## Q17 - Options
(A) 8 MSS
(B) 14 MSS
(C) 7 MSS
(D) 12 MSS

## Q17 - Hint
**Answer:** C  
**Topic:** Computer Networks – TCP Congestion Control

Start: cwnd = 2 MSS, ssthresh = 8 MSS. Slow start doubles cwnd until ssthresh, then congestion avoidance adds 1 per round.

| Transmission | cwnd | Phase |
|---|---|---|
| 1 | 2 | slow start |
| 2 | 4 | slow start |
| 3 | 8 | reaches threshold |
| 4 | 9 | +1 |
| 5 | 10 | **timeout** → ssthresh = 10/2 = 5, cwnd reset to 2 |
| 6 | 2 | slow start |
| 7 | 4 | slow start |
| 8 | 5 | capped at new ssthresh |
| 9 | 6 | +1 |
| 10 | **7** | +1 |

Window during the 10th transmission = **7 MSS**.

## Q18
<div class="stem"><p>Given a binary-max heap. The elements are stored in an arrays as 25, 14, 16, 13, 10, 8, 12. What is the content of the array after two delete operations?</p></div>

## Q18 - Options
(A) 14,13,8,12,10
(B) 14,12,13,10,8
(C) 14,13,12,8,10
(D) 14,13,12,10,8

## Q18 - Hint
**Answer:** C  
**Topic:** Data Structures – Heap Deletion

Heap: 25, 14, 16, 13, 10, 8, 12.

**Delete 1 (remove 25):** move last (12) to root → 12, 14, 16, 13, 10, 8. Sift down: larger child 16 → swap → **16, 14, 12, 13, 10, 8**.

**Delete 2 (remove 16):** move last (8) to root → 8, 14, 12, 13, 10.

- Children 14, 12 → swap with 14 → 14, 8, 12, 13, 10
- 8's children are 13, 10 → swap with 13 → **14, 13, 12, 8, 10**

## Q19
<div class="stem"><p>Given a project with an estimated effort of 1500 person-hours and a team of 5 people, how many days will it take to complete the project, if each person works 8 hours a day?</p></div>

## Q19 - Options
(A) 30
(B) 37.5
(C) 40
(D) 45.5

## Q19 - Hint
**Answer:** B  
**Topic:** Software Engineering – Effort Estimation

Team capacity per day = 5 people × 8 hours = 40 person-hours.  
Duration = 1500 / 40 = **37.5 days**.

## Q20
<div class="stem"><p>Which of the following is an example of a display system in computer graphic?</p> <p>a) Raster scan display</p> <p>b) Direct view storage tube</p> <p>c) Indirect view storage tube</p> <p>d) Display adapter</p> <p>Choose the correct option from below:</p></div>

## Q20 - Options
(A) a,b
(B) a,c
(C) c,d
(D) a,d

## Q20 - Hint
**Answer:** D  
**Topic:** Computer Graphics – Display Devices

Display systems (devices that actually show the image) include the **raster-scan display** and the **direct-view storage tube (DVST)**. A display adapter (graphics card) only drives the display; an "indirect view storage tube" is not a standard display system.

> **⚠ Note:** The source's own solution names raster scan and DVST, which is option **(A) a, b**. The key's (D) a, d seems to be a keying error.

## Q21
<div class="stem"><p>Choose the correct option from below about the counting semaphores.</p></div>

## Q21 - Options
(A) In counting semaphores, when a process is selected for entering into the critical section, it is shifted from blocked state to ready state.
(B) In counting semaphores, when a process is selected for entering into the critical section, it is shifted from ready state to blocked state.
(C) In counting semaphores, when a process is selected for entering into the critical section, it is shifted from waiting state to running state.
(D) In counting semaphores, when a process is selected for entering into the critical section, it is shifted from running state to waiting state.

## Q21 - Hint
**Answer:** A  
**Topic:** Operating Systems – Semaphores

With a counting semaphore, a process that executes wait() when the value is ≤ 0 is **blocked**. When signal() selects it to enter the critical section it is woken up: moved from **blocked → ready**; the scheduler later dispatches it to running.

## Q22
<div class="stem"><p>A ________ point of a fuzzy set A is a point x ∈ X at which μ<sub>Α</sub>(x) = 0.5</p></div>

## Q22 - Options
(A) Core
(B) Support
(C) Crossover
(D) α-cut

## Q22 - Hint
**Answer:** C  
**Topic:** Soft Computing – Fuzzy Sets

**Crossover point:** μ(x) = 0.5. (Core: μ = 1; support: μ > 0; α-cut: μ ≥ α.)

## Q23
<div class="stem"><p>Which of the following statements are true regarding C++?</p> <p>(a) Overloading a function gives the capability to an existing operator to operate on other data types.</p> <p>(b) Inheritance in object-oriented programming provides support to reusability.</p> <p>(c) When object of a derived class is defined, first the constructor of derived class is executed then constructor of a base class is executed.</p> <p>(d) Overloading is a type of polymorphism.</p> <p>Choose the correct option from those given below:</p></div>

## Q23 - Options
(A) (a) and (b) only
(B) (a), (b) and (c) only
(C) (b) and (d) only
(D) (b), (c) and (d) only

## Q23 - Hint
**Answer:** C  
**Topic:** Programming in C++ – OOP Concepts

- (a) ✘ – giving an operator new meaning for other types is **operator** overloading, not function overloading.
- (b) ✔ – inheritance supports reuse.
- (c) ✘ – the **base** constructor runs first, then the derived one.
- (d) ✔ – overloading is compile-time polymorphism.

## Q24
<div class="stem"><p>Consider the following statements:</p> <p>S1: Microprogrammed control unit is faster than a hardwired control unit.</p> <p>S2: Microprogrammed control unit facilitates easy implementation of new instructions. S3: Microprogrammed control unit is useful when very small programs are to be run.</p> <p>Which of the above is corr</p></div>

## Q24 - Options
(A) Only S1
(B) Only S2
(C) Only S3
(D) All S1, S2 and S3

## Q24 - Hint
**Answer:** B  
**Topic:** Computer Organization – Control Unit

- **S1 ✘** – microprogrammed control reads control words from control memory → **slower** than hardwired.
- **S2 ✔** – new instructions just need new microcode → easy to modify or extend.
- **S3 ✘** – its advantage is flexibility for **complex instruction sets**, not small programs.

## Q25
<div class="stem"><p>Match List-I with List-II.</p> <p><img src="tests/img/t3/q75-600411.png"/><br/> Choose the correct answer from the options given below:</p></div>

## Q25 - Options
(A) a-ll, b-IV, c-l, d-III
(B) a-ll, b-III, c-l, d-IV
(C) a-lll, b-ll, c-IV, d-l
(D) a-lll, b-IV, c-ll, d-l

## Q25 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Informed Search

- Greedy best-first → **incomplete** even in finite spaces (can loop) (II)
- A\* → computation and space are **too high** (IV)
- RBFS → linear space **O(d)** (I)
- SMA\* → optimal if the optimal solution is reachable in memory, otherwise the best reachable one (III)

## Q26
<div class="stem"><p>Let F is a Boolean function then F is said to be in DNF if F can be expressed as..............of the terms.</p></div>

## Q26 - Options
(A) Sum of products
(B) Division of multiplications
(C) Multiplication of divisions
(D) None of these

## Q26 - Hint
**Answer:** A  
**Topic:** Digital Logic – Canonical Forms

**DNF (disjunctive normal form)** = OR of AND-terms = **sum of products**. (CNF = product of sums.)

## Q27
<div class="stem"><p>Which of the following is the most relevant addressing mode to write position independent code?</p></div>

## Q27 - Options
(A) Direct
(B) Indirect
(C) Relative
(D) Indexed

## Q27 - Hint
**Answer:** C  
**Topic:** Computer Organization – Addressing Modes

**Relative (PC-relative)** addressing: EA = PC + offset. Addresses are relative to the current instruction, so the code runs correctly **wherever it is loaded** → position-independent code.

## Q28
<div class="stem"><p>Match the following with respect to RDBMS:</p> <table> <tbody> <tr> <td> <p>(a) Entity integrity</p> </td> <td> <p>(i) enforces some specific business rule that do not fall into entity or domain</p> </td> </tr> <tr> <td> <p>(b) Domain integrity</p> </td> <td> <p>(ii) Rows can't be deleted which are used by other records</p> </td> </tr> <tr> <td> <p>(c) Referential integrity</p> </td> <td> <p>(iii) enforces valid entries for a column</p> </td> </tr> <tr> <td> <p>(d) Userdefined integrity</p> </td> <td> <p>(iv) No duplicate rows in a table</p> </td> </tr> </tbody> </table> <p>Code:</p> <p>     (a)   (b)   (c)  (d)</p></div>

## Q28 - Options
(A) (iii)  (iv)  (i)   (ii)
(B) (iv)  (iii)  (ii)   (i)
(C) (iv)  (ii)   (iii)  (i)
(D) (ii)   (iii)  (iv)  (i)

## Q28 - Hint
**Answer:** B  
**Topic:** DBMS – Integrity Constraints

- Entity integrity → no duplicate rows (PK unique, not null) (iv)
- Domain integrity → valid values in a column (iii)
- Referential integrity → referenced rows can't be deleted (ii)
- User-defined → business rules (i)

## Q29
<div class="stem"><p>48. Match List - I with List - II.</p> <p>List - I                                                        List – II</p> <p>(A) Bresenham                                          (I) Hidden surface removal</p> <p>(B) Cohen-Sutherland                               (II) Line drawing algorithm</p> <p>(C) Sutherland-Hodgeman                        (III) Line clipping algorithm</p> <p>(D) Z-Buffer                                               (IV) Polygon clipping algorithm</p> <p>Choose the correct answer from the options given below :</p></div>

## Q29 - Options
(A) (A)-(III), (B)-(II), (C)-(IV), (D)-(I)
(B) (А)-(II), (B)-(III), (C)-(I), (D)-(IV)
(C) (A)-(II), (B)-(III), (C)-(IV), (D)-(I)
(D) (A)-(II), (B)-(IV), (C)-(III), (D)-(I)

## Q29 - Hint
**Answer:** C  
**Topic:** Computer Graphics – Algorithms

- **Bresenham** → line drawing (II)
- **Cohen–Sutherland** → line clipping (III)
- **Sutherland–Hodgman** → polygon clipping (IV)
- **Z-buffer** → hidden surface removal (I)

## Q30
<div class="stem"><p>Consider the following input for array, first partitioning with the array looking like this: 2 5 1 8 10 12 11 13 Which statement is correct?</p></div>

## Q30 - Options
(A) The pivot could be either the 8 or the 10.
(B) The pivot could be the 8, but it is notthe 10.
(C) The pivot is not the 8, but it could be the 10.
(D) Neither the 8 nor the10 is the pivot.

## Q30 - Hint
**Answer:** A  
**Topic:** Algorithms – Quick Sort (Partition)

After partitioning, the pivot is in its final place: **everything left is smaller, everything right is larger**.

Array: 2 5 1 8 10 12 11 13

- **8:** left {2, 5, 1} all < 8; right {10, 12, 11, 13} all > 8 ✔
- **10:** left {2, 5, 1, 8} all < 10; right {12, 11, 13} all > 10 ✔
- 12: 11 is on its right but smaller ✘

Either 8 or 10 could be the pivot.

## Q31
<div class="stem"><p>In __ disk scheduling algorithm, the disk head moves from one end to other end of the disk, serving the requests along the way. When the head reaches the other end, it immediately returns to the beginning of the disk without serving any requests on the return trip..</p></div>

## Q31 - Options
(A) LOOK
(B) SCAN
(C) C-LOOK
(D) C-SCAN

## Q31 - Hint
**Answer:** D  
**Topic:** Operating Systems – Disk Scheduling

**C-SCAN** (circular SCAN): the head serves requests in one direction to the end, then **jumps back to the beginning without serving** any requests, and continues in the same direction. This gives more uniform waiting time than SCAN.

(C-LOOK does the same but only goes as far as the last request, not the disk end.)

## Q32
<div class="stem"><p>Consider the following statements:</p> <p>S1 : ∀x P(x) ∨ ∀xQ(x) and ∀x(P(x) ∨ Q(x)) are not logically equivalent.</p> <p>S2 : ∃x P(x) ∧ ∃x Q(x) and ∃x (P(x) ∧ Q(x)) are not logically equivalent</p> <p>Which of the following statements is/are correct?</p></div>

## Q32 - Options
(A) Only S1
(B) Only S2
(C) Both S1 and S2
(D) Neither S1 nor S2

## Q32 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Predicate Logic

- **S1 ✔** – ∀x(P∨Q) does not imply ∀xP ∨ ∀xQ. Example: P = even, Q = odd. Every integer is even or odd, but not all are even and not all are odd.
- **S2 ✔** – ∃xP ∧ ∃xQ does not imply ∃x(P∧Q). Example: some integer is even and some is odd, but none is both.

Both pairs are **not** equivalent → both statements are correct.

## Q33
<div class="stem"><p>Given below are two statements:</p> <p>Statement I: Consider 20 bit ‘Branch’ microinstruction code format given below:</p> <p><img src="tests/img/t3/q83-b9f785.png"/></p> <p>Statement II: Instruction represented in above format can perform branch in 4 conditions.</p> <p>In the light of the above statements choose the most appropriate answer from the options given below</p></div>

## Q33 - Options
(A) Both Statement I and Statement II are correct
(B) Both Statement I and Statement II are incorrect
(C) Statement I is correct but Statement II is incorrect
(D) Statement I is incorrect but Statement II is correct

## Q33 - Hint
**Answer:** A  
**Topic:** Computer Organization – Microprogramming

Format: F1 (3) | F2 (3) | F3 (3) | CD (2) | BR (2) | AD (7) = 20 bits.

- **Statement I ✔** – this is the standard 20-bit microinstruction format (Mano).
- **Statement II ✔** – the condition field CD has **2 bits** → 2² = **4 conditions** for branching.

## Q34
<div class="stem"><p>Which of the following is NOT true in problem solving in artificial intelligence?</p></div>

## Q34 - Options
(A) Implements heuristic search techniques
(B) Solution steps are not explicit
(C) Knowledge is imprecise
(D) It works on or implements repetition mechanism

## Q34 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Problem Solving

AI problem solving uses **heuristic search**, deals with **imprecise knowledge**, and its solution steps are **not explicit** in advance. Simple **repetition** of fixed steps is how conventional algorithmic programs work, not a characteristic of AI problem solving.

## Q35
<div class="stem"><p>Consider the following statements:</p> <p>S1: An agent should strive to "do the right thing", based on what it can perceive and the actions it can perform.</p> <p>S2: The environment is semi-dynamic if the environment itself does not change with the passage of time but the agent's performance score does.</p> <p>S3:Simplex reflex agents take decisions on the basis of the current precepts and past history.</p> <p>Which of the above is TRUE.</p></div>

## Q35 - Options
(A) S1 and S3
(B) S1 and S2
(C) S2 and S3
(D) All of the above

## Q35 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Agents

- **S1 ✔** – a rational agent "does the right thing" given its percepts and actions.
- **S2 ✔** – semi-dynamic: the environment doesn't change but the performance score does.
- **S3 ✘** – a **simple reflex** agent uses **only the current percept**, ignoring history (model-based agents keep state).

## Q36
<div class="stem"><p>Which one of the following grammars generates the language L = {a<sup>i</sup>b<sup>j</sup> | i≠j}?</p></div>

## Q36 - Options
(A) S→AC|CB<br>           C→aCb|a|b<br>           A→aA|ϵ     <br>          B→Bb|ϵ
(B) S→aS|Sb|a|b
(C) S→AC|CB<br>     C→aCb|ϵ<br>     A→aA|ϵ   <br>     B→Bb|ϵ
(D) S→AC|CB<br>    C→aCb|ϵ<br>    A→aA|a<br>    B→Bb|b

## Q36 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Grammars

L = { aⁱbʲ | i ≠ j } = (more a's) ∪ (more b's).

Grammar (D):

- C → aCb | ε gives **aⁿbⁿ**.
- A → aA | a gives **at least one** a; B → Bb | b gives **at least one** b.
- S → AC gives aᵏ⁺ⁿbⁿ with k ≥ 1 ⇒ i > j ✔; S → CB gives aⁿbⁿ⁺ᵏ ⇒ j > i ✔

Why not the others: (C) lets A, B be ε → produces aⁿbⁿ (i = j) ✘. (A) can also produce i = j, e.g. A = a, C = b gives "ab" ✘. (B) generates strings like "ba"-free but also "ab" ✘.

## Q37
<div class="stem"><p>The main memory of a computer has 2 cm blocks while the cache has 2 c blocks. If the cache uses the set associative mapping scheme with 2 blocks per set, then block k of the main memory maps to the set</p></div>

## Q37 - Options
(A) (k mod m) of the cache
(B) (k mod c) of the cache
(C) (k mod 2c) of the cache
(D) (k mod 2 cm) of the cache

## Q37 - Hint
**Answer:** B  
**Topic:** Computer Organization – Cache Mapping

2-way set associative: number of sets = 2c blocks / 2 = **c**. Block k maps to set **k mod (number of sets) = k mod c**.

## Q38
<div class="stem"><p>Which of the following is NOT true of deadlock prevention and deadlock avoidance schemes?</p></div>

## Q38 - Options
(A) In deadlock prevention, the request for resources is always granted if the resulting state is safe
(B) In deadlock avoidance, the request for resources is always granted if the result state is safe
(C) Deadlock avoidance is less restrictive than deadlock prevention
(D) Deadlock avoidance requires knowledge of resource requirements a priori

## Q38 - Hint
**Answer:** A  
**Topic:** Operating Systems – Deadlock

- **(A) NOT true** – checking for a **safe state** before granting is **avoidance** (Banker's algorithm), not prevention. Prevention removes one of the four necessary conditions.
- (B) ✔ avoidance grants only if the resulting state is safe.
- (C) ✔ avoidance is less restrictive than prevention.
- (D) ✔ avoidance needs maximum claims in advance.

## Q39
<div class="stem"><p>Consider the method mcq ( ) :</p> <p>int mcq (boolean a, boolean b, boolean c, boolean d)</p> <p>{</p> <p>int ans=1;</p> <p>if (a) {ans = 2;}</p> <p>else if (b) {ans = 3;}</p> <p>else if (c) {</p> <p>if (d) {ans=4;}</p> <p>}</p> <p>return ans ;</p> <p>}</p> <p>If</p> <p>M1 = Number of tests to exhaustively test mcq ( );</p> <p>M2 = Minimum number of tests to achieve full statement coverage for mcq ( ); and</p> <p>M3 = Minimum number of tests to achieve full branch coverage for mcq ( );</p> <p>then (M1, M2, M3) = ....................</p></div>

## Q39 - Options
(A) (16, 3, 5)
(B) (8, 5, 3)
(C) (8, 3, 5)
(D) (16, 4, 4)

## Q39 - Hint
**Answer:** A  
**Topic:** Software Engineering – Test Coverage

**M1 – exhaustive testing:** 4 Boolean inputs → 2⁴ = **16**.

**M2 – statement coverage:** must execute ans = 2, ans = 3 and ans = 4:

- a = T → ans = 2
- a = F, b = T → ans = 3
- a = F, b = F, c = T, d = T → ans = 4

→ **3** tests.

**M3 – branch coverage:** every decision (a, b, c, d) must be both true and false:

1. a = T
2. a = F, b = T
3. a = F, b = F, c = T, d = T
4. a = F, b = F, c = T, d = F
5. a = F, b = F, c = F

→ **5** tests.

(M1, M2, M3) = **(16, 3, 5)**.

## Q40
<div class="stem"><p>Consider two strings A = "qpqrr" and B = "pqprqrp". Let x be the length of the longest common subsequence (not necessarily contiguous) between A and B and let y be the number of such longest common subsequences between A and B. Then x + 10y = ___.</p></div>

## Q40 - Options
(A) 33
(B) 23
(C) 43
(D) 34

## Q40 - Hint
**Answer:** D  
**Topic:** Algorithms – Dynamic Programming (LCS)

A = qpqrr, B = pqprqrp.

**Step 1 – Fill the LCS table** (match → diagonal + 1, otherwise the larger of top and left):

| | – | p | q | p | r | q | r | p |
|---|---|---|---|---|---|---|---|---|
| – | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| q | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| p | 0 | 1 | 1 | 2 | 2 | 2 | 2 | 2 |
| q | 0 | 1 | 2 | 2 | 2 | 3 | 3 | 3 |
| r | 0 | 1 | 2 | 2 | 3 | 3 | 4 | 4 |
| r | 0 | 1 | 2 | 2 | 3 | 3 | 4 | 4 |

**Step 2:** LCS length x = **4** (bottom-right cell).

**Step 3:** Tracing back all paths gives three distinct LCSs: **qpqr, pqrr, qprr** → y = **3**.

**Step 4:** x + 10y = 4 + 30 = **34**.

## Q41
<div class="stem"><p>Testing a software for the performance towards extreme or abnormal resource utilization as against normal requirements is known as.</p></div>

## Q41 - Options
(A) Stress testing
(B) Recovery testing
(C) Performance testing
(D) Security testing

## Q41 - Hint
**Answer:** A  
**Topic:** Software Engineering – Testing

**Stress testing** pushes the system beyond normal limits (abnormal load, volume, frequency of resource use) to see how and when it fails.

## Q42
<div class="stem"><p>Arrange the following simple graphs based on number of spinning tree they have</p> <p>A. K<sub>3</sub> [Complete Graph with 3 nodes]</p> <p>B. K<sub>4</sub> [Complete Graph with 4 nodes]</p> <p>C. K<sub>2,2</sub> [Complete bipartite graph of the 2 nodes in each partition]</p> <p>D. C<sub>3</sub> [Cycle graph of 5 nodes]</p> <p>Choose the correct answer from the options given below:</p></div>

## Q42 - Options
(A) A, B, C, D
(B) A, C, B, D
(C) A, C, D, B
(D) D, B, C, A

## Q42 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Spanning Trees

- **K₃:** 3^(3−2) = **3**
- **K₄:** 4^(4−2) = **16**
- **K₂,₂:** 2¹ × 2¹ = **4** (it's a 4-cycle)
- **Cycle on 5 nodes:** remove any one of 5 edges → **5**

Ascending: K₃ (3), K₂,₂ (4), C₅ (5), K₄ (16) → **A, C, D, B**.

> **⚠ Note:** The stem writes "C3" but says 5 nodes; it means a cycle on 5 vertices.

## Q43
<div class="stem"><p>There are many sorting algorithms based on comparison. The running time of heapsort algorithm is O(n log n). Like P, but unlike Q, heapsort sorts in place where (P, Q) is equal to</p></div>

## Q43 - Options
(A) Merge sort, Quick sort
(B) Quick sort, Insertion sort
(C) Insertion sort, Quick sort
(D) Insertion sort, Merge sort

## Q43 - Hint
**Answer:** D  
**Topic:** Algorithms – Sorting

Heap sort is in place (O(1) extra space). **Insertion sort** is also in place; **merge sort** needs O(n) extra space → (P, Q) = (Insertion sort, Merge sort).

## Q44
<div class="stem"><p>Suppose the letters a, b, c, d, e, f have probabilities 1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. Which of the following is the Huffman code for the letter a, b, c, d, e, f?</p></div>

## Q44 - Options
(A) 0, 10, 110, 1110, 11110, 11111
(B) 11, 10, 011, 010, 001, 000
(C) 11, 10, 01, 001, 0001, 0000
(D) 110, 100, 010, 000, 001, 111

## Q44 - Hint
**Answer:** A  
**Topic:** Algorithms – Huffman Coding

Probabilities halve each time: 1/2, 1/4, 1/8, 1/16, 1/32, 1/32.

**Step 1:** Merge e + f = 1/16 → with d = 1/8 → with c = 1/4 → with b = 1/2 → with a = 1.  
**Step 2:** The tree is a "chain": each step peels off one letter.  
**Step 3:** Codes: a = 0, b = 10, c = 110, d = 1110, e = 11110, f = 11111.

Code length = −log₂(p) exactly: 1, 2, 3, 4, 5, 5 bits.

## Q45
<div class="stem"><p>A 4 input neuron has weights 4, 3, 2 and 1. The transfer function is linear with the constant of proportionality equal to 2 if inputs are 5, 4,10 and 50 respectively then output of the neuron will be:</p></div>

## Q45 - Options
(A) 102
(B) 204
(C) 69
(D) 138

## Q45 - Hint
**Answer:** B  
**Topic:** Machine Learning – Neuron Output

**Step 1 – Weighted sum:** 5×4 + 4×3 + 10×2 + 50×1 = 20 + 12 + 20 + 50 = **102**.  
**Step 2 – Linear transfer** with constant 2: output = 2 × 102 = **204**.

## Q46
<div class="stem"><p>Let A be a set with n elements. Let C be a collection of distinct subsets of A such that for any two subsets S1 and S2 in C, either S1 ⊂ S2 or S2 ⊂ S1. What is the maximum cardinality of C?</p></div>

## Q46 - Options
(A) n
(B) n + 1
(C) 2<sup>(n-1)</sup> + 1
(D) n!

## Q46 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Sets

A chain of subsets where each is contained in the next can have at most one subset of each size 0, 1, 2, …, n:

∅ ⊂ {a₁} ⊂ {a₁, a₂} ⊂ … ⊂ A → **n + 1** subsets.

## Q47
<div class="stem"><p>The most simplified form of the boolean function, x (A,B,C,D) = Σ (7,8,9,10,11,12,13,14,15) (expressed in sum of minterms) is?</p></div>

## Q47 - Options
(A) A + A'BCD
(B) AB + CD
(C) A + BCD
(D) ABC + D

## Q47 - Hint
**Answer:** C  
**Topic:** Digital Logic – K-Map

Σ(7, 8, 9, 10, 11, 12, 13, 14, 15):

- Minterms 8–15 all have A = 1 → group of 8 → **A**
- Minterm 7 = 0111 → pair it with 15 (1111) → **BCD**

F = **A + BCD**.

## Q48
<div class="stem"><p>. Consider the following statements</p> <ol> <li>In a vectored interrupt the interrupt source supplies the branch information to the processor through an interrupt vector.</li> <li>When an interrupt occurs, an operating system always resumes execution of interrupted process after processing the interrupt.</li> <li>A CPU generally handles an interrupt by executing an interrupt service routine by checking the interrupt register at the end of fetch cycle.</li> <li>In polling, the CPU periodically checks the status bits to know if any device needs its attention.</li> </ol> <p>Which of the above statements are false?</p></div>

## Q48 - Options
(A) I, II and IV
(B) II and III
(C) I and III
(D) I, III and IV

## Q48 - Hint
**Answer:** B  
**Topic:** Computer Organization – Interrupts

- **I ✔** – in a vectored interrupt the device supplies the vector/address of its ISR.
- **II ✘** – the OS does not *always* resume the interrupted process; it may schedule another (e.g. a higher-priority process became ready).
- **III ✘** – interrupts are checked **after the execute cycle** (at the end of the instruction), not after fetch.
- **IV ✔** – polling = CPU periodically checks device status bits.

False: II and III.

## Q49
<div class="stem"><p>The..........and.......differences between the endpoints position are assigned to parameters dx and dy in the DDA algorithm.</p></div>

## Q49 - Options
(A) Multiplication ,addition
(B) Multiplication ,horizontal
(C) Horizontal ,vertical
(D) Addition, Vertical

## Q49 - Hint
**Answer:** C  
**Topic:** Computer Graphics – DDA Line Algorithm

In DDA, dx = x₂ − x₁ is the **horizontal** difference and dy = y₂ − y₁ the **vertical** difference. Steps = max(|dx|, |dy|), and x, y are incremented by dx/steps and dy/steps.

## Q50
<div class="stem"><p>The Software Maturity Index (SMI) is defined as</p> <p>SMI = [Mf – (Fa + Fc + Fd)] / Mf</p> <p>Where</p> <p>Mf = the number of modules in the current release.</p> <p>Fa = the number of modules in the current release that have been added.</p> <p>Fc = the number of modules in the current release that have been changed.</p> <p>Fd = the number of modules in the current release that have been deleted.</p> <p>The product begins to stabilize when </p></div>

## Q50 - Options
(A) SMI approaches 1
(B) SMI approaches 0 
(C) SMI approaches -1
(D) None of the above

## Q50 - Hint
**Answer:** A  
**Topic:** Software Engineering – Metrics

SMI = [Mf − (Fa + Fc + Fd)] / Mf. As the product stabilises, fewer modules are added, changed or deleted → Fa + Fc + Fd → 0 → SMI → **1**.

## Q51
<div class="stem"><p>If a relation R is decomposed into R1 and R2, we say the decomposition is lossless, if</p></div>

## Q51 - Options
(A) The intersection of R1 and R2 is a null set
(B) R1 and R2 have no common attributes
(C) The intersection of R1 and R2 is a key of either of them
(D) The intersection of R1 and R2 is not a key of either of them

## Q51 - Hint
**Answer:** C  
**Topic:** DBMS – Decomposition

Decomposition of R into R1, R2 is **lossless** if:

1. R1 ∪ R2 = R (all attributes kept), and
2. **R1 ∩ R2 → R1 or R1 ∩ R2 → R2**, i.e. the common attributes form a **key (super key) of at least one** of them.

If there are no common attributes, the join becomes a Cartesian product, which is lossy.

## Q52
<div class="stem"><p>Match List I with List II</p> <table> <tbody> <tr> <td> <p>List I</p> </td> <td> <p>List II</p> </td> </tr> <tr> <td> <p>A. Regression</p> </td> <td> <p>I. Unsupervised Learning.</p> </td> </tr> <tr> <td> <p>B. KNN</p> </td> <td> <p>II. Supervised Leaning.</p> </td> </tr> <tr> <td> <p>C. Clustering</p> </td> <td> </td> </tr> <tr> <td> <p>D. Decision Tree</p> </td> <td> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q52 - Options
(A) A-I, B-II, C-I, D-II
(B) A-II, B-II, C-I, D-II
(C) A-I, B-II, C-II, D-I
(D) A-II B-II, C-II, D-I

## Q52 - Hint
**Answer:** B  
**Topic:** Machine Learning – Learning Types

- Regression → **supervised** (labelled numeric targets) (II)
- KNN → **supervised** (uses labelled neighbours) (II)
- Clustering → **unsupervised** (I)
- Decision tree → **supervised** (II)

## Q53
<div class="stem"><p>Match List I with List II</p> <p><img src="tests/img/t3/q103-67ef57.png"/></p> <p>Choose the correct answer from the options given below:</p></div>

## Q53 - Options
(A) (A)-(II), (B)-(IV), (C)-(I), (D)-(III)
(B) (A)-(II), (B)-(III), (C)-(1), (D)-(IV)
(C) (A)-(III), (B)-(II), (C)-(IV), (D)-(I)
(D) (A)-(III), (B)-(IV), (C)-(II), (D)-(I)

## Q53 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Informed Search

- Greedy best-first → incomplete even in a finite space (II)
- A\* → time and space complexity too high (IV)
- RBFS → O(d) space (I)
- SMA\* → optimal if reachable, else best reachable (III)

## Q54
<div class="stem"><p>How many check bits are required for 16 bit data word to detect 2 bit errors and single bit correction using hamming code?</p></div>

## Q54 - Options
(A) 5
(B) 6
(C) 7
(D) 8

## Q54 - Hint
**Answer:** B  
**Topic:** Computer Networks – Hamming Code (SEC-DED)

**Step 1 – Single-error correction:** find the smallest r with 2ʳ ≥ m + r + 1, m = 16.

- r = 4: 16 ≥ 21 ✘
- r = 5: 32 ≥ 22 ✔ → **5 check bits**

**Step 2 – Double-error detection:** add **1 overall parity bit**.

Total = 5 + 1 = **6** check bits.

## Q55
<div class="stem"><p>Equivalence partitioning is a .................. method that divides the input domain of a program into classes of data from which test cases can be derived.</p></div>

## Q55 - Options
(A) White-box testing 
(B) Black-box testing 
(C) Orthogonal array testing 
(D) Stress testing

## Q55 - Hint
**Answer:** B  
**Topic:** Software Engineering – Testing

**Equivalence partitioning** divides the input domain into classes expected to behave alike, using only the specification → a **black-box** technique.

## Q56
<div class="stem"><p><img src="tests/img/t3/q106-003a6e.png"/></p></div>

## Q56 - Options
(A) (a)- (r), (b) - (p), (c) - (s), (d) - (q)
(B) (a)- (s), (b) - (r), (c) - (p), (d) - (q)
(C) (a)- (q), (b) - (p), (c) - (s), (d) - (r)
(D) (a)- (p), (b) - (r), (c) - (s), (d) - (q)

## Q56 - Hint
**Answer:** A  
**Topic:** Algorithms – Design Paradigms

- Strassen's matrix multiplication → **divide and conquer** (r)
- Kruskal's MST → **greedy** (p)
- Biconnected components → **DFS** (articulation points via low values) (s)
- Floyd's all-pairs shortest path → **dynamic programming** (q)

## Q57
<div class="stem"><p>A pure ALOHA network transmits 200-bit frames on a shared channel of 200 kbps. What is the requirement to make this frame collision-free?</p></div>

## Q57 - Options
(A) 2msec
(B) 4msec
(C) 2sec
(D) 4sec

## Q57 - Hint
**Answer:** A  
**Topic:** Computer Networks – ALOHA

**Step 1:** Frame time T = 200 bits / 200 kbps = **1 ms**.  
**Step 2:** In pure ALOHA a frame collides if any other frame starts within T before or T after it → vulnerable time = **2T = 2 ms**.

For collision-free transmission, no other station may send during these **2 ms**.

## Q58
<div class="stem"><p>Bit-slice processors</p></div>

## Q58 - Options
(A) Can be cascaded to get any desired word length processor
(B) speed of operation is independent of the word length configured
(C) don’t contain anything equivalent of program counter in a ‘normal’ microprocessor
(D) contain only the data path of a ‘normal’ CPU

## Q58 - Hint
**Answer:** A  
**Topic:** Computer Organization – Bit-slice Processors

A **bit-slice** processor is a small-width ALU/register module (e.g. 4-bit). Slices are **cascaded** to build a processor of any desired word length (8, 16, 32 bits …).

## Q59
<div class="stem"><p>Consider the following grammar:</p> <p>S à S * E</p> <p>S à E</p> <p>E à F + E</p> <p>E à F</p> <p>F à id</p> <p>Consider the following LR(0) items corresponding to the grammar above.</p> <p>(i) S à S * .E</p> <p>(ii) E à F. + E</p> <p>(iii) E à F + .E</p> <p>Given the items above, which two of them will appear in the same set in the canonical sets-of-items for the grammar?</p></div>

## Q59 - Options
(A) (i) and (ii)
(B) (ii) and (iii)
(C) (i) and (iii)
(D) None of the above

## Q59 - Hint
**Answer:** D  
**Topic:** Compiler Design – LR(0) Items

Work out where each item appears:

- (i) S → S \* .E appears in GOTO(I, \*) from the state containing S → S .\* E
- (ii) E → F . + E appears in GOTO(I, F), together with E → F .
- (iii) E → F + .E appears in GOTO(I, +) from the state containing (ii)

Each item is created by a **different transition** (\*, F, +), so no two of them are in the same canonical set.

## Q60
<div class="stem"><p>A virtual memory system uses First In First Out (FIFO) page replacement policy and allocates a fixed number of frames to a process. Consider the following statements:</p> <p>P: Increasing the number of page frames allocated to a process sometimes increases the page fault rate.</p> <p>Q: Some programs do not exhibit locality of reference.</p> <p>Which one of the following is TRUE?</p></div>

## Q60 - Options
(A) Both P and Q are true, and Q is the reason for P
(B) Both P and Q are true, but Q is not the reason for P.
(C) P is false, but Q is true
(D) Both P and Q are false

## Q60 - Hint
**Answer:** B  
**Topic:** Operating Systems – Page Replacement

- **P – True.** FIFO suffers from **Belady's anomaly**: more frames can cause more faults (e.g. 1,2,3,4,1,2,5,1,2,3,4,5 gives 9 faults with 3 frames, 10 with 4).
- **Q – True.** Some programs (e.g. random access patterns) show little locality.

But Belady's anomaly comes from FIFO's **not being a stack algorithm**, not from lack of locality → Q is not the reason for P.

## Q61
<div class="stem"><p>Match the following entity symbol according to their representation:</p> <p><img src="tests/img/t3/q111-eb8e37.png"/></p></div>

## Q61 - Options
(A) (a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)
(B) (a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)
(C) (a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)
(D) (a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)

## Q61 - Hint
**Answer:** B  
**Topic:** DBMS – ER Diagram Notation

- Double rectangle → **weak entity** (iv)
- Double diamond → **identifying (weak) relationship** (ii)
- Double ellipse → **multivalued attribute** (iii)
- Dashed ellipse → **derived attribute** (i)

## Q62
<div class="stem"><p>Arrange the following steps of Feature Drive Development (FDD) process in the correct sequence:</p> <p>(A) Develop an overall model</p> <p>(B) Build by feature</p> <p>(C) Plan by feature</p> <p>(D) Design by feature</p> <p>(E) Build a feature list</p> <p>Choose the correct answer from the options given below:</p></div>

## Q62 - Options
(A) (A), (C), (B), (E), (D)
(B) (A), (E), (C), (D), (B)
(C) (B), (A), (D), (E), (C)
(D) (A), (B), (C), (E), (D)

## Q62 - Hint
**Answer:** B  
**Topic:** Software Engineering – Agile (FDD)

Feature Driven Development's 5 steps:

1. Develop an overall model (A)
2. Build a feature list (E)
3. Plan by feature (C)
4. Design by feature (D)
5. Build by feature (B)

## Q63
<div class="stem"><p>In Java, which of the following statements is/are True?</p> <p>S1: The ‘final’ keyword applied to a class definition prevents the class from being extended through derivation.</p> <p>S2: A class can only inherit one class but can implement multiple interfaces.</p> <p>S3: Java permits a class to replace the implementation of a method that it has inherited. It is called method overloading.</p> <p>Code:</p></div>

## Q63 - Options
(A) S1 and S2 only
(B) S1 and S3 only
(C) S2 and S3 only
(D) All of S1, S2 and S3

## Q63 - Hint
**Answer:** A  
**Topic:** Programming – Java

- **S1 ✔** – a `final` class can't be subclassed.
- **S2 ✔** – single class inheritance, multiple interfaces.
- **S3 ✘** – that is **overriding**, not overloading.

## Q64
<div class="stem"><p>In Ethernet when Manchester encoding is used, the bit rate is:</p></div>

## Q64 - Options
(A) Half the baud rate.
(B) Twice the baud rate.
(C) Same as the baud rate.
(D) None of the above

## Q64 - Hint
**Answer:** A  
**Topic:** Computer Networks – Encoding

Manchester encoding has a transition **in the middle of every bit**, so each bit takes two signal elements → baud rate = 2 × bit rate → **bit rate = half the baud rate**.

## Q65
<div class="stem"><p>Consider the following statements about the timeout value used in TCP.</p> <p> i. The timeout value is set to the RTT (Round Trip Time) measured during TCP connection establishment for the entire duration of the connection.</p> <p> ii. Appropriate RTT estimation algorithm is used to set the timeout value of a TCP connection.</p> <p> iii. Timeout value is set to twice the propagation delay from the sender to the receiver.</p> <p>Which of the following choices hold? </p></div>

## Q65 - Options
(A) (i) is false, but (ii) and (iii) are true
(B) (i) and (iii) are false, but (ii) is true
(C) (i) and (ii) are false, but (iii) is true
(D) (i), (ii) and (iii) are false

## Q65 - Hint
**Answer:** B  
**Topic:** Computer Networks – TCP Timers

- **(i) ✘** – RTT varies; TCP doesn't fix the timeout at the handshake RTT.
- **(ii) ✔** – TCP keeps estimating RTT (Jacobson/Karn: smoothed RTT + 4 × deviation) and sets the timeout from it.
- **(iii) ✘** – the timeout is not simply twice the propagation delay.

## Q66
<div class="stem"><p>Let ⊕ denotes XOR operation. Let 0 and 1 denotes the binary constants and F is the Boolean expression over two variables P and Q</p> <p>F(P, Q) = ((1 ⊕ P) ⊕ (P ⊕ Q) ⊕ (P ⊕ Q) ⊕ (Q ⊕ 0))</p> <p>Which of the following is equivalent expression to F?</p></div>

## Q66 - Options
(A) P  ⊕ Q
(B) P + Q
(C) (P + Q)’
(D) (P  ⊕ Q)’

## Q66 - Hint
**Answer:** D  
**Topic:** Digital Logic – XOR Algebra

Use: 1 ⊕ X = X', X ⊕ X = 0, X ⊕ 0 = X.

F = (1⊕P) ⊕ (P⊕Q) ⊕ (P⊕Q) ⊕ (Q⊕0)

**Step 1:** (P⊕Q) ⊕ (P⊕Q) = 0.  
**Step 2:** F = P' ⊕ Q = 1 ⊕ P ⊕ Q = (P ⊕ Q)'.

F = **XNOR(P, Q)**.

## Q67
<div class="stem"><p>2 - 3 - 4 trees are B- trees of order 4. They are isometric of _______ trees.</p></div>

## Q67 - Options
(A) AVL
(B) AA
(C) 2-3
(D) Red-Black

## Q67 - Hint
**Answer:** D  
**Topic:** Data Structures – Balanced Trees

A 2-3-4 tree is equivalent to a **red-black tree**:

- 2-node ↔ a black node
- 3-node ↔ black node + 1 red child
- 4-node ↔ black node + 2 red children

Every 2-3-4 tree maps to a red-black tree with the same key order (and vice versa).

## Q68
<div class="stem"><p>The line graph L(G) of a simple graph G is defined as follows: · There is exactly one vertex v(e) in L(G) for each edge e in G. · For any two edges e and e' in G, L(G) has an edge between v(e) and v(e'), if and only if e and e’ are incident with the same vertex in G.</p> <p>Which of the following statements is/are TRUE?</p> <p>(P) The line graph of a cycle is a cycle.</p> <p>(Q) The line graph of a clique is a clique.</p> <p>(R) The line graph of a planar graph is planar.</p> <p>(S) The line graph of a tree is a tree.</p></div>

## Q68 - Options
(A) P only
(B) P and R only
(C) R only
(D) P, Q and S only

## Q68 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Line Graphs

- **P ✔** – Cₙ has n edges, each adjacent to exactly two others in a ring → L(Cₙ) = Cₙ.
- **Q ✘** – in Kₙ (n ≥ 4), edges (1,2) and (3,4) share no vertex → not adjacent in L(G) → not a clique.
- **R ✘** – the star K₁,₅ is planar, but its line graph is K₅ (non-planar).
- **S ✘** – the star K₁,₃ is a tree, but its line graph is K₃ (a triangle) → not a tree.

## Q69
<div class="stem"><p>Consider the following tables (relations):</p> <p>Primary keys in the tables are shown using underline. Now, consider the following query:</p> <p>SELECT S.Name, Sum (P.Marks)</p> <p>FROM Students S, Performance P</p> <p>WHERE S.Roll-No = P.Roll-No</p> <p>GROUP BY S.Name</p> <p><img src="tests/img/t3/q119-f0f020.png"/></p> <p>The number of rows returned by the above query is</p></div>

## Q69 - Options
(A) 0 
(B) 1
(C) 2 
(D) 3

## Q69 - Hint
**Answer:** C  
**Topic:** DBMS – SQL (GROUP BY)

**Step 1 – Join** Students with Performance on Roll-No: rows exist for 18CS101 (Ramesh), 18CS102 (Mukesh), 18CS103 (Ramesh).  
**Step 2 – GROUP BY S.Name:** two students share the name **Ramesh** → they fall into one group.

Groups: **Ramesh**, **Mukesh** → **2 rows**.

## Q70
<div class="stem"><p>Language L1 is defined by the grammar: S1 -&gt; aS1b | ε Language L2 is defined by the grammar: S2 -&gt; abS2 | ε</p> <p>Consider the following statements:</p> <p>P: L1 is regular Q: L2 is regular</p> <p>Which one of the following is TRUE?</p></div>

## Q70 - Options
(A) Both P and Q are true
(B) P is true and Q is false
(C) P is false and Q is true
(D) Both P and Q are false

## Q70 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Regular Languages

- L1 = { aⁿbⁿ } – needs counting → **not regular** → P false.
- L2 = (ab)\* – just repetitions of "ab" → **regular** → Q true.

## Q71
<div class="stem"><p>An algorithm performs (log N)1/2 find operations, N insert operations, (log N)1/2 delete operations, and (log N)1/2 decrease-key operations on a set of data items with keys drawn from a linearly ordered set. For a delete operation, a pointer is provided to the record that must be deleted. For the decrease-key operation, a pointer is provided to the record that has its key decreased. Which one of the following data structures is the most suited for the algorithm to use, if the goal is to achieve the best total asymptotic complexity considering all the operations</p></div>

## Q71 - Options
(A) Unsorted array
(B) Min-heap
(C) Sorted array
(D) Sorted doubly linked list

## Q71 - Hint
**Answer:** A  
**Topic:** Data Structures – Choosing a Structure

Operations: N inserts, √log N finds, √log N deletes (pointer given), √log N decrease-keys (pointer given).

| Structure | N inserts | √logN finds | deletes + decrease-keys | Total |
|---|---|---|---|---|
| **Unsorted array** | O(1) each → O(N) | O(N) each → O(N√logN) | O(1) each | **O(N√logN)** |
| Min-heap | O(log N) → O(N log N) | O(N) | O(log N) | O(N log N) |
| Sorted array / DLL | O(N) → O(N²) | … | … | O(N²) |

Unsorted array wins.

## Q72
<div class="stem"><p>Consider the following languages</p> <p>L1 = {a<sup>p</sup> | p is a prime number}</p> <p>L2 = {a<sup>n</sup>b<sup>m</sup>c<sup>2m</sup> | n ≥ 0, m ≥ 0}</p> <p>L3 = {a<sup>n</sup>b<sup>n</sup>c<sup>2n</sup> | n ≥ 0}</p> <p>L4 = {a<sup>n</sup>b<sup>n</sup> | n ≥ 1}</p> <p>Which of the following are CORRECT?</p> <p>I. L1 is context-free but not regular.</p> <p>II. L2 is not context-free</p> <p>III. L3 is not context-free but recursive.</p> <p>IV. L4 is deterministic context-free </p></div>

## Q72 - Options
(A) I, II and IV only
(B) II and III only
(C) I and IV only
(D) III and IV only

## Q72 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Language Classes

- **I ✘** – {aᵖ | p prime} is **not CFL** (pumping lemma; primes have no linear pattern).
- **II ✘** – aⁿbᵐc²ᵐ **is** CFL (push 2 per b, pop 1 per c).
- **III ✔** – aⁿbⁿc²ⁿ needs two comparisons → not CFL, but a TM decides it → recursive.
- **IV ✔** – aⁿbⁿ (n ≥ 1) is accepted by a DPDA → DCFL.

## Q73
<div class="stem"><p>Match the following database terms to their functions:</p> <p>List-I                                  List-II</p> <p>(a) Normalization `             (i) Enforces match of primary key to foreign key</p> <p>(b) Data Dictionary            (ii) Reduces data redundancy in a database</p> <p>(c) Referential Integrity      (iii) Define view(s) of the database for particular user(s).</p> <p>(d) External Schema          (iv) Contains metadata describing database structure.</p> <p>Codes:</p> <p>(a)   (b)   (c)    (d)</p></div>

## Q73 - Options
(A) (iv)   (iii)   (i)   (ii)
(B) (ii)    (iv)   (i)   (iii)
(C) (ii)   (iv)   (iii)   (i)
(D) (iv)   (iii)   (ii)   (i)

## Q73 - Hint
**Answer:** B  
**Topic:** DBMS – Basic Concepts

- Normalization → reduces redundancy (ii)
- Data dictionary → metadata (iv)
- Referential integrity → PK–FK match (i)
- External schema → user views (iii)

## Q74
<div class="stem"><p>Consider the following statements:</p> <p>  I. The smallest element in a max-heap is always at a leaf node</p> <p> II. The second largest element in a max-heap is always a child of the root node</p> <p>III. A max-heap can be constructed from a binary search tree in Θ(n) time</p> <p>IV. A binary search tree can be constructed from a max-heap in Θ(n) time</p> <p>Which of the above statements is/are TRUE?</p></div>

## Q74 - Options
(A) II, III and IV
(B) I, II and III
(C) I, III and IV
(D) I, II and IV

## Q74 - Hint
**Answer:** B  
**Topic:** Data Structures – Heaps

- **I ✔** – the minimum can't have children (any child would be smaller), so it is at a leaf.
- **II ✔** – the 2nd largest is only smaller than the root, so it must be the root's child.
- **III ✔** – any array, including BST elements, can be heapified in **Θ(n)** (bottom-up build-heap).
- **IV ✘** – a BST would give a sorted order; comparison sorting needs Ω(n log n), so not Θ(n).

## Q75
<div class="stem"><p>Consider the following clauses:</p> <p> i. Not inherently suitable for client authentication.</p> <p>ii. Not a state sensitive protocol.</p> <p>iii. Must be operated with more than one server.</p> <p>iv. Suitable for structured message organization.</p> <p>v. May need two ports on the serve side for proper operation. </p> <p>The option that has the maximum number of correct matches is</p></div>

## Q75 - Options
(A) IMAP-(i), FTP-(ii), HTTP-(iii), DNS-(iv), POP3-(v)
(B) FTP-(i), POP3-(ii), SMTP-(iii), HTTP-(iv), IMAP-(v)
(C) POP3-(i), SMTP-(ii), DNS-(iii), IMAP-(iv), HTTP-(v)
(D) SMTP-(i), HTTP-(ii), IMAP-(iii), DNS-(iv), FTP-(v)

## Q75 - Hint
**Answer:** D  
**Topic:** Computer Networks – Application Protocols

Check option (D):

- **SMTP – (i)** basic SMTP has no built-in client authentication (SMTP-AUTH is an extension) ✔
- **HTTP – (ii)** stateless ✔
- **IMAP – (iii)** used with separate sending (SMTP) and mailbox servers (as per the key)
- **DNS – (iv)** hierarchical, structured message format ✔
- **FTP – (v)** two ports (21 control, 20 data) ✔

(D) has the most correct matches.

## Q76
<div class="stem"><p>Which of the following are decidable?</p> <p>I. Whether the intersection of two regular languages is infinite</p> <p>II. Whether a given context-free language is regular</p> <p>III .Whether two push-down automata accept the same language</p> <p>IV .Whether a given grammar is context-free     </p></div>

## Q76 - Options
(A) I and II
(B) I and IV
(C) II and III
(D) II and IV

## Q76 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Decidability

- **I ✔ decidable** – regular ∩ regular is regular; finiteness of a regular language is decidable (check for cycles in the DFA).
- **II ✘** – whether a CFL is regular is **undecidable**.
- **III ✘** – equivalence of two PDAs (CFLs) is **undecidable**.
- **IV ✔** – whether a grammar is context-free is a **syntactic check** of its productions.

## Q77
<div class="stem"><p>Match the following:</p> <p><img src="tests/img/t3/q127-8463af.png"/></p></div>

## Q77 - Options
(A) A-(iv), B-(ii), C-(i), D- (iii)
(B) A-(ii), B-(iii), C-(iv), D-(i)
(C) A-(iii), B-(iv), C-(i), D-(ii)
(D) A-(i), B-(iv), C-(ii), D-(iii)

## Q77 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Algebraic Structures

Each structure adds one property:

- **Semigroup** – closure + **associativity** (ii)
- **Monoid** – semigroup + **identity** (i)
- **Group** – monoid + **inverse** (iii)
- **Abelian group** – group + **commutativity** (iv)

A-(i), B-(iv), C-(ii), D-(iii).

## Q78
<div class="stem"><p>Match all items in Group 1 with correct options from those given in Group 2.</p> <p>Group 1                               Group 2</p> <p>P. Regular expression      1. Syntax analysis</p> <p>Q. Pushdown automata   2. Code generation</p> <p>R. Dataflow analysis       3. Lexical analysis</p> <p>S. Register allocation     4. Code optimization</p></div>

## Q78 - Options
(A) P-4. Q-1, R-2, S-3
(B) P-3, Q-1, R-4, S-2
(C) P-3, Q-4, R-1, S-2
(D) P-2, Q-1, R-4, S-3

## Q78 - Hint
**Answer:** B  
**Topic:** Compiler Design – Phases & Tools

- Regular expressions → **lexical analysis** (3)
- Pushdown automata → **syntax analysis** (CFG parsing) (1)
- Data-flow analysis → **code optimisation** (4)
- Register allocation → **code generation** (2)

## Q79
<div class="stem"><p>Consider the following English sentence:</p> <p>“Agra and Gwalior are both in India”.</p> <p>A student has written a logical sentence for the above English sentence in First-Order Logic using predicate In(x, y), which means x is in y, as follows:</p> <p>In(Agra, India) V In(Gwalior, India)</p> <p>Which one of the following is correct with respect to the above logical sentence?</p></div>

## Q79 - Options
(A) It is syntactically valid but does not express the meaning of the English sentence.
(B) It is syntactically valid and expresses the meaning of the English sentence also.
(C) It is syntactically invalid but expresses the meaning of the English sentence.
(D) It is syntactically invalid and does not express the meaning of the English sentence.

## Q79 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – First-Order Logic

"Agra and Gwalior are **both** in India" needs **AND**: In(Agra, India) ∧ In(Gwalior, India).

The student wrote ∨ (OR). It is well-formed FOL (**syntactically valid**) but only says **at least one** is in India → it **does not express** the meaning.

## Q80
<div class="stem"><p>Which one of the following is NOT desired in a good Software Requirement Specifications (SRS) document?</p></div>

## Q80 - Options
(A) Functional Requirements
(B) Non-Functional Requirements
(C) Goals of Implementation
(D) Algorithms for Software Implementation

## Q80 - Hint
**Answer:** D  
**Topic:** Software Engineering – SRS

A good SRS states **what** the system must do: functional and non-functional requirements, goals and constraints. **How** to implement it (algorithms, design choices) belongs to the **design** documents.

## Q81
<div class="stem"><p>Match the following:</p> <p><img src="tests/img/t3/q131-e3e8d0.png"/></p> <p>A  B  C   D</p></div>

## Q81 - Options
(A) 1  2  3   4
(B) 2  3  1   4
(C) 3  2  4   1
(D) 3  2  1   4

## Q81 - Hint
**Answer:** D  
**Topic:** Machine Learning – Learning Types

- Supervised → manual labels **are** used (3)
- Unsupervised → manual labels are **not** used (2)
- Reinforcement → rewards after a sequence of actions (1)
- Inductive → learns general rules **from examples** (4)

## Q82
<div class="stem"><p>The performance of a pipelined processor suffers if</p></div>

## Q82 - Options
(A) the pipeline stages have different delays
(B) consecutive instructions are dependent on each other
(C) the pipeline stages share hardware resources
(D) All of the above

## Q82 - Hint
**Answer:** D  
**Topic:** Computer Organization – Pipelining

Ideal speed-up needs equal stage delays, independent instructions and no shared hardware. Each listed situation hurts:

- Unequal stage delays → the clock must match the **slowest** stage.
- Dependent instructions → **data hazards** cause stalls.
- Shared hardware → **structural hazards**.

All of the above.

## Q83
<div class="stem"><p>The steps for analysis and design of object oriented system.</p> <p>(A) Draw interaction diagrams</p> <p>(B) Draw state chart and object diagram</p> <p>(C) Draw use case and activity diagram</p> <p>(D) Draw component and deployment diagram</p> <p>(E) Draw class diagram</p> <p>Choose the correct answer from the options given below:</p></div>

## Q83 - Options
(A) (E)→(B)→(A)→(C)→(D)
(B) (B)→(A)→(E)→(D)→(C)
(C) (E)→(C)→(B)→(D)→(A)
(D) (C)→(A)→(E)→(B)→(D)

## Q83 - Hint
**Answer:** D  
**Topic:** Software Engineering – UML / OOAD

Use case + activity (C) → interaction diagrams (A) → class diagram (E) → state chart + object diagrams (B) → component + deployment (D).

## Q84
<div class="stem"><p>Suppose a cloud contains software stack such as Operating system, Application software, etc. This model is referred as _________ model.</p></div>

## Q84 - Options
(A) SaaS
(B) IaaS
(C) MaaS
(D) PaaS

## Q84 - Hint
**Answer:** A  
**Topic:** Cloud Computing – Service Models

When the provider delivers the **whole stack**, including the OS and **application software**, and the user just uses the application, it is **SaaS**.

- IaaS → user gets VMs, storage, networks and installs their own OS and apps.
- PaaS → user gets a runtime/platform and deploys their own apps.

## Q85
<div class="stem"><p>Consider the DAG with Consider V = {1, 2, 3, 4, 5, 6}, shown below.</p> <p><img src="tests/img/t3/q135-58a6df.png"/></p> <p>Which of the following is NOT a topological ordering?</p></div>

## Q85 - Options
(A) 1 2 3 4 5 6
(B) 1 3 2 4 5 6
(C) 1 3 2 4 6 5
(D) 3 2 4 1 6 5

## Q85 - Hint
**Answer:** D  
**Topic:** Algorithms – Topological Sort

Edges from the figure: 1→2, 1→3, 2→4, 2→5, 3→4, 3→6, 4→5, 4→6.

A topological order must list each vertex **before** all its successors.

- (D) 3, 2, 4, **1**, 6, 5 – vertex 1 comes **after** 2 and 3, but 1→2 and 1→3 → **invalid**.
- (A), (B), (C) all start with 1, then place 2 and 3 before 4, and 4 before 5 and 6 → valid.

## Q86
<div class="stem"><p>What is the converse of the following assertion?</p> <p>I stay only if you go</p></div>

## Q86 - Options
(A) I stay if you go
(B) If I stay then you go
(C) If you do not go then I do not stay
(D) If I do not stay then you go

## Q86 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Propositional Logic

"I stay **only if** you go" = **stay → go** ("p only if q" means p → q).

Converse of p → q is q → p: **go → stay** = "I stay **if** you go".

(B) restates the original; (C) is the contrapositive (same meaning).

## Q87
<div class="stem"><p>Consider an undirected graph G where self-loops are not allowed. The vertex set of G is {(i, j): 1 &lt;= i &lt;= 12, 1 &lt;= j &lt;= 12}. There is an edge between (a, b) and (c, d) if |a − c| &lt;= 1 and |b − d| &lt;= 1.</p> <p>The number of edges in this graph is __________.</p></div>

## Q87 - Options
(A) 500
(B) 502
(C) 506
(D) 510

## Q87 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Graph Counting

A 12 × 12 grid where each vertex connects to all 8 neighbours (a "king's graph"). Count edges by direction:

- **Horizontal:** 12 rows × 11 = 132
- **Vertical:** 12 columns × 11 = 132
- **Diagonal (↘):** 11 × 11 = 121
- **Anti-diagonal (↗):** 11 × 11 = 121

Total = 132 + 132 + 121 + 121 = **506**.

## Q88
<div class="stem"><p>Match the following according to compiler phases and their inputs:</p> <p><img src="tests/img/t3/q138-d9a214.png"/></p></div>

## Q88 - Options
(A) A -&gt; (ii), B -&gt; (iii), C -&gt; (iv), D -&gt; (i)
(B) A -&gt; (ii), B -&gt; (i), C -&gt; (iii), D -&gt; (iv)
(C) A -&gt; (iii), B -&gt; (iv), C -&gt; (i), D -&gt; (ii)
(D) A -&gt; (i), B -&gt; (iv), C -&gt; (ii), D -&gt; (iii)

## Q88 - Hint
**Answer:** C  
**Topic:** Compiler Design – Phases

Input to each phase:

- Syntax tree → **semantic analyser** (iii)
- Character stream → **lexical analyser** (iv)
- Intermediate representation → **code generator** (i)
- Token stream → **syntax analyser** (ii)

## Q89
<div class="stem"><p>There are three cards in a box. Both sides of one card are black, both sides of one card are red, and the third card has one black side and one red side. We pick a card at random and observe only one side.</p> <p>What is the probability that the opposite side is the same colour as the one side we observed?</p></div>

## Q89 - Options
(A) 3/4
(B) 2/3
(C) 1/2
(D) 1/3

## Q89 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Probability

Count the **sides**, not the cards: 6 sides in total (BB card: 2 black sides; RR card: 2 red; BR card: 1 black, 1 red).

Each side is equally likely to be the one observed. The hidden side matches for the 4 sides on the BB and RR cards, and not for the 2 sides on the BR card.

P = 4/6 = **2/3**.

(Not 1/2 – that mistake counts cards instead of sides.)

## Q90
<div class="stem"><p>Perform the following operation for the binary equivalent of the decimal numbers (−14)<sub>10</sub>+(−15)<sub>10</sub> The solution in 8 bit representation is:</p></div>

## Q90 - Options
(A) 11100011
(B) 00011101
(C) 10011101
(D) 11110011

## Q90 - Hint
**Answer:** A  
**Topic:** Digital Logic – 2's Complement Arithmetic

**Step 1:** −14 + (−15) = −29.  
**Step 2:** +29 = 0001 1101.  
**Step 3:** 1's complement = 1110 0010; add 1 → **1110 0011**.

Check: −14 = 1111 0010, −15 = 1111 0001; sum = 1 1110 0011 → drop the carry → 1110 0011 ✔ (no overflow; both negative and the result is negative).

## Q91
<div class="stem"><p>Select the correct option.</p> a) 3 NF is the most accurate normal form for designing database because lossless join and dependency preserving decomposition is always possible. b) Every relation can decompose into 2 NF, 3 NF with dependency preserving decomposition. c) Every relation is possible to decomposed into 2 NF, 3 NF, with lossless join decomposition.<br/> d) Not every relation can decompose into BCNF with dependency preserving.</div>

## Q91 - Options
(A) a, b
(B) a, c, d
(C) b, c, d
(D) a, b, c,d

## Q91 - Hint
**Answer:** D  
**Topic:** DBMS – Normalization

- (a) ✔ – 3NF is the usual design target because a decomposition that is **both lossless and dependency-preserving** always exists.
- (b) ✔ – 2NF/3NF: dependency-preserving decomposition is always possible.
- (c) ✔ – 2NF/3NF: lossless decomposition is always possible.
- (d) ✔ – BCNF can't always preserve dependencies (e.g. AB → C, C → B).

## Q92
<div class="stem"><p>Which of the following statements are true ?</p> <p>(i) Every logic network is equivalent to one using just NAND gates or just NOR gates.</p> <p>(ii) Boolean expressions and logic networks correspond to labelled acyclic digraphs.</p> <p>(iii) No two Boolean algebras with n atoms are isomorphic.</p> <p>(iv) Non-zero elements of finite Boolean algebras are not uniquely expressible as joins of atoms.</p></div>

## Q92 - Options
(A) (i) and (iv) only
(B) (i) and (ii) only
(C) (i), (ii) and (iii) only
(D) (ii), (iii) and (iv) only

## Q92 - Hint
**Answer:** B  
**Topic:** Digital Logic – Boolean Algebra

- **(i) ✔** – NAND and NOR are **universal** gates.
- **(ii) ✔** – expressions/networks are DAGs with gates as labelled nodes.
- **(iii) ✘** – any two finite Boolean algebras with n atoms **are** isomorphic (both ≅ power set of an n-set).
- **(iv) ✘** – every non-zero element **is uniquely** expressible as a join of atoms.

## Q93
<div class="stem"><p>Given U = {1, 2, 3, 4, 5, 6, 7}</p> <p>A = {(3, 0.7), (5, 1), (6, 0.8)}</p> <p>then A~ will be : (where ~ is complement)</p></div>

## Q93 - Options
(A) {(4, 0.7), (2, 1), (1, 0.8)}
(B) {(4, 0.3), (5, 0), (6, 0.2) }
(C) {(1, 1), (2, 1), (3, 0.3), (4, 1), (6, 0.2), (7, 1)}
(D) {(3, 0.3), (6.0.2)}

## Q93 - Hint
**Answer:** C  
**Topic:** Soft Computing – Fuzzy Complement

μ_A'(x) = 1 − μ_A(x) for **every** x in U. Elements not listed in A have μ = 0, so their complement is 1.

| x | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| μ_A | 0 | 0 | 0.7 | 0 | 1 | 0.8 | 0 |
| μ_A' | 1 | 1 | 0.3 | 1 | 0 | 0.2 | 1 |

Dropping the zero-membership element 5: {(1,1), (2,1), (3,0.3), (4,1), (6,0.2), (7,1)}.

## Q94
<div class="stem"><p>Which of these are the 5 generic software engineering framework activities ? </p></div>

## Q94 - Options
(A) Communication, planning, modelling, construction, deployment 
(B) Communication, risk management, measurement, production, reviewing 
(C) Analysis, designing, programming, Debugging, maintenance 
(D) Analysis, planning, designing, programming, testing

## Q94 - Hint
**Answer:** A  
**Topic:** Software Engineering – Process Framework

Pressman's 5 generic framework activities: **Communication, Planning, Modeling, Construction, Deployment**.

## Q95
<div class="stem"><p>Match the following:</p> <p><img src="tests/img/t3/q145-602acb.png"/></p></div>

## Q95 - Options
(A) P – 2 Q – 1 R – 3 S – 5
(B) P – 1 Q – 4 R – 2 S – 3
(C) P – 1 Q – 4 R – 2 S – 5
(D) P – 2 Q – 4 R – 1 S – 3

## Q95 - Hint
**Answer:** B  
**Topic:** Computer Networks – Protocol Layers

- SMTP → **application** (1)
- BGP → routing between autonomous systems → **network** layer (4)
- TCP → **transport** (2)
- PPP → **data link** (3)

## Q96
<div class="stem"><p>Consider the following two finite automata.</p> <p>M1 accepts L1 and M2 accepts L2. </p> <p>Which one of the following is TRUE?</p> <p><img src="tests/img/t3/q146-c3bbbc.png"/></p></div>

## Q96 - Options
(A) L1 = L2
(B) L1 ∩ L2‘ = ∅
(C) L1 ∪ L2 ≠ L1
(D) A and B 

## Q96 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Finite Automata

- **M2** accepts (0+1)\* 11 (0+1)\* = strings containing **"11"**.
- **M1:** from the start, 0 loops; 1 goes to the middle state; from there 1 reaches the accepting trap, while 0 goes back to start. So M1 also accepts exactly the strings containing **"11"**.

L1 = L2 ⇒ (A) true; L1 ∩ L2' = L1 − L2 = ∅ ⇒ (B) true. (C) is false since L1 ∪ L2 = L1.

## Q97
<div class="stem"><p>The following three golden rules:</p> <p>(i) Place the user in control</p> <p>(ii) Reduce the user’s memory load</p> <p>(iii) Make the interface consistent are for </p></div>

## Q97 - Options
(A) User satisfaction 
(B) Good interface design 
(C) Saving system’s resources 
(D) None of these

## Q97 - Hint
**Answer:** B  
**Topic:** Software Engineering – UI Design

Mandel's **three golden rules** of user-interface design:

1. Place the user in control
2. Reduce the user's memory load
3. Make the interface consistent

## Q98
<div class="stem"><p>A CPU has two modes-privileged and non-privileged. In order to change the mode from privileged to non-privileged</p></div>

## Q98 - Options
(A) a hardware interrupt is needed
(B) a software interrupt is needed
(C) a privileged instruction (which does not generate an interrupt) is needed
(D) a non-privileged instruction (which does not generate an interrupt is needed)

## Q98 - Hint
**Answer:** D  
**Topic:** Operating Systems – CPU Modes

Going **down** from kernel (privileged) to user mode is safe, so it is done with an ordinary instruction (e.g. loading the PSW mode bit, or a return-from-kernel) without an interrupt. The non-privileged instruction is the key's answer.

Going **up** (user → kernel) requires a software interrupt / trap (system call).

## Q99
<div class="stem"><p>Match the following Requirement gathering steps with its definition</p> <p><img src="tests/img/t3/q149-753870.png"/></p></div>

## Q99 - Options
(A) P-2, Q-1, R-3,S-4
(B) P-2, Q-3, R-4, S-1
(C) P-3, Q-4, R-1, S-2
(D) P-4, Q-3, R-1, S-2

## Q99 - Hint
**Answer:** B  
**Topic:** Software Engineering – Requirements Engineering

- **Inception** → basic understanding of the problem (2)
- **Elicitation** → detailed requirement gathering from users (3)
- **Elaboration** → expand and refine requirements (4)
- **Negotiation** → reconcile conflicts (1)

## Q100
<div class="stem"><p>Consider the languages L1,L2 and L3 as given below.  Which of the following statements is NOT TRUE?</p> <p><img src="tests/img/t3/q150-d90c35.png"/></p></div>

## Q100 - Options
(A) Push Down Automate (PDA) can be used to recognize L1 and L2
(B) L1 is a regular language
(C) All the three languages are context free
(D) Turing machines can be used to recognize all the languages

## Q100 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Language Hierarchy

- L1 = 0ᵖ1ᵠ → **regular** (0⁺1⁺)
- L2 = 0ᵖ1ᵖ → **CFL**, not regular
- L3 = 0ᵖ1ᵖ0ᵖ → **not CFL** (context-sensitive)

(A) ✔ a PDA handles L1 and L2. (B) ✔. (D) ✔ a TM recognises all three.  
**(C) is NOT true** because L3 is not context-free.
