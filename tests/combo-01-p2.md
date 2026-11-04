<!-- Combo Test 1 · Paper 2 (CSA) · original question numbers kept in the source data -->

## Q1
<div class="stem"><p>Consider the following statements:</p> <p>I. Paging is a method of memory allocation by which the program is subdivided into equal portions, or pages and core is subdivided into equal portions or blocks.</p> <p>II. External fragmentation exists when the total memory is insufficient to satisfy a request.</p> <p>III. Paging suffers from internal fragmentation and segmentation suffers from external fragmentation problem.</p> <p>Which of the above statements are true?</p></div>

## Q1 - Options
(A) I and II
(B) I and III
(C) II and III
(D) All of the above

## Q1 - Hint
**Answer:** B  
**Topic:** Operating Systems – Memory Management

Check each statement against the definitions.

- **I – True.** Paging divides the logical address space (program) into fixed-size *pages* and physical memory into same-size *frames/blocks*.
- **II – False.** External fragmentation is when the **total** free memory *is* enough, but it is **not contiguous**, so the request still cannot be satisfied. The statement says the opposite.
- **III – True.** Paging: last page of a process may be partly empty → *internal* fragmentation. Segmentation: variable-size segments leave scattered holes → *external* fragmentation.

True statements = I and III.

## Q2
<div class="stem"><p>The following simple undirected graph is referred to as the Peterson graph</p> <p><img src="tests/img/t1/q2-da4cac.png"/></p> <p>Which of the following statements is/are TRUE?</p> <p>I. The chromatic number of the graph is 3</p> <p>II. The graph has a Hamiltonian path</p> <p>III. The following graph is isomorphic to the Peterson graph.</p> <p><img src="tests/img/t1/q2-b5282a.png"/></p> <p>IV. The size of the largest independent set of the given graph is 3. (A subset of vertices of a graph form an independent set if no two vertices of the subset are adjacent.)</p></div>

## Q2 - Options
(A) I, II, III
(B) II, III, IV
(C) I, III, IV
(D) All of the above

## Q2 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Graph Theory

Recall the standard facts about the **Petersen graph** (10 vertices, 15 edges, 3-regular).

- **I – True.** It contains odd cycles (5-cycles), so it needs at least 3 colours; a 3-colouring exists. χ = 3.
- **II – True.** It has a Hamiltonian **path** (it is famous for *not* having a Hamiltonian **cycle**).
- **III – True.** The second drawing is a standard redrawing of the Petersen graph (10 vertices, every vertex of degree 3, girth 5), so the two are isomorphic.
- **IV – False.** The largest independent set has size **4**, not 3 (e.g. pick 2 non-adjacent outer vertices and 2 suitable inner vertices).

So I, II, III are true.

## Q3
<div class="stem"><p>Let R (ABCDEFGH) be a relation schema and F be the set of dependencies F={A → B, ABCD → E, EF → G, EF→H and ACDF→EG). The minimal cover of a set of functional dependencies is</p></div>

## Q3 - Options
(A) A→B, ACD → E, EF→G, and EF →H
(B) A → B, ACD → E, EF → G, EF→H and ACDF →G
(C) A→B, ACD → E, EF → G, EF → H and ACDF→E
(D) A→B, ABC → E, EF → H and EF→G

## Q3 - Hint
**Answer:** A  
**Topic:** DBMS – Functional Dependencies (Minimal Cover)

**Step 1 – Split right-hand sides.** ACDF → EG becomes ACDF → E and ACDF → G.  
F = {A→B, ABCD→E, EF→G, EF→H, ACDF→E, ACDF→G}

**Step 2 – Remove extraneous attributes on the left.**  
In ABCD→E: since A→B, B can be derived from A. (ACD)⁺ = {A,C,D,B,E} contains E, so B is extraneous → **ACD→E**.

**Step 3 – Remove redundant FDs.**

- ACDF→E: ACD→E already gives E → redundant.
- ACDF→G: (ACDF)⁺ using the rest = ACDF → B (A→B) → E (ACD→E) → G (EF→G). G is derivable → redundant.
- A→B, ACD→E, EF→G, EF→H are each needed (removing any one, its RHS can't be derived).

Minimal cover = {A→B, ACD→E, EF→G, EF→H}.

## Q4
<div class="stem"><p>Let x, y, z, a, b, c be the attributes of an entity set E. If {x}, {x,y}, {a,b}, {a,b,c}, {x,y,z} are superkeys then which of the following are the candidate keys?</p></div>

## Q4 - Options
(A) {x,y} and {a,b}
(B) {x} and {a,b}
(C) {x,y,z} and {a,b,c}
(D) {z} and {c}

## Q4 - Hint
**Answer:** B  
**Topic:** DBMS – Keys

A **candidate key** is a *minimal* super key — no proper subset of it is a super key.

- {x} is a super key and has no smaller subset → candidate key.
- {x,y} and {x,y,z} contain {x} → not minimal.
- {a,b} is a super key; is {a} or {b} a super key? Not given → {a,b} is minimal → candidate key.
- {a,b,c} contains {a,b} → not minimal.

Candidate keys: {x} and {a,b}.

## Q5
<div class="stem"><p>Identify the correct statement with respect to Evolutionary development.</p></div>

## Q5 - Options
(A) Evolutionary development usually has two flavours; exploratory development and throw-away prototyping
(B) Very large projects are usually done using evolutionary development based approach
(C) It facilitates easy project management, through the high volume of documentation it generates
(D) Sometimes the construction of a throw-away prototype is not followed by a re-implementation of the software system using a more structured approach

## Q5 - Hint
**Answer:** A  
**Topic:** Software Engineering – Process Models

- **(A) Correct.** Sommerville describes two types of evolutionary development: *exploratory development* (work with the customer, evolve a final system) and *throw-away prototyping* (prototype to understand requirements, then discard).
- (B) Wrong – evolutionary development is suited to **small/medium** systems; large projects suffer from poor structure.
- (C) Wrong – it produces **little** documentation, which actually makes management (visibility) harder.
- (D) Wrong – by definition a throw-away prototype is discarded and the system is re-implemented properly.

## Q6
<div class="stem"><p>How many 32K x 1 RAM chips are needed to provide a memory capacity of 256K-bytes?</p></div>

## Q6 - Options
(A) 8
(B) 32
(C) 64
(D) 128

## Q6 - Hint
**Answer:** C  
**Topic:** Computer Organization – Memory Organization

**Step 1:** Required capacity = 256K bytes = 256K × 8 bits.  
**Step 2:** One chip = 32K × 1 bit.  
**Step 3:** Number of chips = (256K × 8) / (32K × 1) = 8 × 8 = **64**.

(Arranged as 8 rows of 32K depth × 8 chips wide for an 8-bit word.)

## Q7
<div class="stem"><p>Consider the following statements</p> <p>A. C-Fuzzy means clustering is a supervised method of learning</p> <p>B. PCA is used for dimension reduction</p> <p>C. Apriori is not a supervised technique</p> <p>D. When a machine learning model becomes so specially tuned to its exact input data that it fails to generalize to other similar data it is called underfitting.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q7 - Options
(A) A and B
(B) B and C
(C) C and D
(D) D and A

## Q7 - Hint
**Answer:** B  
**Topic:** Machine Learning

- **A – False.** Fuzzy C-Means is a *clustering* algorithm → **unsupervised** (no labels).
- **B – True.** PCA projects data onto principal components → dimensionality reduction.
- **C – True.** Apriori mines frequent itemsets/association rules without labels → not supervised.
- **D – False.** Fitting training data so closely that it fails to generalise is **overfitting**, not underfitting.

Correct: B and C.

## Q8
<div class="stem"><p>Which of the following statements is TRUE?</p></div>

## Q8 - Options
(A) Virtual functions do not implement polymorphism
(B) Virtual functions do not permit calling of derived class functions using a base class pointer
(C) We can never build an object from a class containing a pure virtual function
(D) Pure virtual functions can never have a body

## Q8 - Hint
**Answer:** C  
**Topic:** Programming in C++ – Polymorphism

- (A) False – virtual functions are exactly how C++ achieves **run-time polymorphism**.
- (B) False – they *allow* a base-class pointer to call the derived-class version.
- **(C) True** – a class with at least one pure virtual function (`= 0`) is **abstract**; you cannot create its objects (only pointers/references).
- (D) False – a pure virtual function *may* have a body defined outside the class (commonly done for pure virtual destructors).

## Q9
<div class="stem"><p>Which of the following option is not correct?</p></div>

## Q9 - Options
(A) If queue is implemented with a linked list, keeping track of a front pointer, only rear pointers will change an insertion into an non-empty queue.
(B) Queue data structure can be used to implement LRU page replacement and Quick sort algorithm
(C) Queue can be used to implement Quick sort but not LRU page fault algorithm
(D) Both (A) and (C)

## Q9 - Hint
**Answer:** C  
**Topic:** Data Structures – Queues

The question asks for the statement that is **not correct**.

- (A) Correct – in a linked-list queue, insertion at a non-empty queue only changes the rear (and the old last node's link); front is unchanged.
- (B) Correct – a queue (FIFO) can model LRU page replacement order, and an explicit queue/stack of sub-ranges can drive Quick Sort iteratively.
- **(C) Not correct** – it says a queue *cannot* be used for LRU, which contradicts (B).
- (D) Wrong because (A) is correct.

## Q10
<div class="stem"><p>The result evaluating the postfix expression  10  5 +  60 6 /  * 8 -   is</p></div>

## Q10 - Options
(A) 284
(B) 213
(C) 142
(D) 71

## Q10 - Hint
**Answer:** C  
**Topic:** Data Structures – Stack (Postfix Evaluation)

Scan left to right; push operands, pop two on each operator (second popped is left operand).

| Symbol | Action | Stack |
|---|---|---|
| 10, 5 | push | 10, 5 |
| + | 10+5 | 15 |
| 60, 6 | push | 15, 60, 6 |
| / | 60/6 | 15, 10 |
| * | 15×10 | 150 |
| 8 | push | 150, 8 |
| − | 150−8 | **142** |

## Q11
<div class="stem"><p>Let f(A, B, C, D) = Π (2, 3, 5, 9, 11, 12, 13).The total number of prime implicants and essential prime implicants are denoted by P and Q respectively. What is the value Q % P where % denotes the modulo operator?</p></div>

## Q11 - Options
(A) 1
(B) 2
(C) 3
(D) 4

## Q11 - Hint
**Answer:** B  
**Topic:** Digital Logic – K-Map / Prime Implicants

**Step 1 – Convert maxterms to minterms.** f = Π(2,3,5,9,11,12,13) → f = Σ(0,1,4,6,7,8,10,14,15).

**Step 2 – Find all prime implicants** (largest groups):

- Quad (6,7,14,15) → BC
- Pairs that can't grow into quads: (0,1) A'B'C', (0,4) A'C'D', (0,8) B'C'D', (4,6) A'BD', (8,10) AB'D', (10,14) ACD'

Total **P = 7**.

**Step 3 – Essential PIs** (cover a minterm no other PI covers):

- m1 only in (0,1) → essential.
- m7 and m15 only in BC → essential.
- m4, m8, m10, m0, m6, m14 each appear in ≥ 2 PIs.

**Q = 2.** Q % P = 2 % 7 = **2**.

## Q12
<div class="stem"><p>Consider the following grammar</p> <p>S → AB</p> <p>A → a</p> <p>A → BaB</p> <p>A → bbA</p> <p>Which of the following statements is false?</p></div>

## Q12 - Options
(A) The length of every string produced by this grammar is even.
(B) No string produced by this grammar has three consecutive a's
(C) The length of substring produced by B is always odd
(D) No string produced by this grammar has four consecutive b's

## Q12 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Context-Free Grammars

The intended grammar (standard GATE question) is S → AB, A → a, A → BaB, **B → bbA**.

**Lengths:** |A| is odd (a = 1; BaB = 2|B|+1). |B| = 2 + |A| = odd. |S| = |A| + |B| = odd + odd = **even** → (A) true, (C) true.

**Consecutive a's:** every a from A is surrounded by B's that start with bb, so at most two a's can meet (…a)(a…) → no "aaa" → (B) true.

**Consecutive b's:** B → bbA → bb(BaB) → bb(bbA)aB → "bbbb…" appears → four consecutive b's **are** possible, so (D) is **false**.

> **⚠ Note:** The stem prints "A → bbA"; it should be "B → bbA" (otherwise B has no production). The answer above uses the intended grammar.

## Q13
<div class="stem"><p>Which scheduler handle the degree of multiprogramming?</p></div>

## Q13 - Options
(A) Medium term scheduler
(B) Long term scheduler
(C) Short term scheduler
(D) None of these

## Q13 - Hint
**Answer:** B  
**Topic:** Operating Systems – Process Scheduling

The **long-term (job) scheduler** decides which jobs are admitted from disk into the ready queue, so it directly controls **how many processes are in memory = degree of multiprogramming**.

- Short-term: picks the next ready process for the CPU.
- Medium-term: swaps processes out/in (can reduce the degree temporarily, but the standard answer is long-term).

## Q14
<div class="stem"><p>Given a Turing Machine M = ({q0, q1, q2, q3}, {a, b}, {a, b, B}, δ, B, {q3}) Where δ is a transition function defined as δ(q0, a) = (q1, a, R)</p> <p>δ(q1, b) = (q2, b, R)</p> <p>δ(q2, a) = (q2, a, R)</p> <p>δ(q3, b) = (q3, b, R)</p> <p>The language L(M) accepted by the Turing Machine is given as:<br/> </p></div>

## Q14 - Options
(A) aa*b
(B) abab
(C) aba*b
(D) aba*

## Q14 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Turing Machines

The head only moves right, so the TM behaves like a DFA.

- q0 –a→ q1 : string must start with **a**
- q1 –b→ q2 : then **b**
- q2 –a→ q2 : any number of **a**'s (loop)
- q2 –b→ q3 (final): end with **b**

Accepted strings: a b a* b → **aba*b**.

> **⚠ Note:** The stem lists δ(q3, b); for q3 to be reachable it must be δ(q2, b) = (q3, b, R). Read it that way.

## Q15
<div class="stem"><p>The hash function used in double hashing is of the form:</p></div>

## Q15 - Options
(A) h(k, i)=(h1(k)+h2(k)+i)mod m
(B) h(k, i)=(h1(k)+h2(k)-i)mod m
(C) h(k, i)=(h1(k)+ih2(k))mod m
(D) h(k, i)=(h1(k)-ih2(k))mod m

## Q15 - Hint
**Answer:** C  
**Topic:** Data Structures – Hashing

Double hashing uses a second hash function to decide the **step size** on the i-th probe:

h(k, i) = (h1(k) + i · h2(k)) mod m, i = 0, 1, 2, …

Linear probing would be (h1(k) + i) mod m; quadratic adds c1·i + c2·i².

## Q16
<div class="stem"><p>Match List-I with List-II and choose the correct answer from the code given below:</p> <p>List I (Graph Algorithm)                  List II (Time Complexity)</p> <p>(a) Dijkstra’s algorithm                   (i) O(E lg E)</p> <p>(b) Kruskal’s algorithm                   (ii) Θ(V<sup>3</sup>)</p> <p>(c) Floyd-Warshall algorithm          (iii) O(V<sup>2</sup>)</p> <p>(d) Topological sorting                    (iv) Θ(V+E)</p> <p>where V and E are the number of vertices and edges in graph respectively.</p></div>

## Q16 - Options
(A) (a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)
(B) (a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)
(C) (a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)
(D) (a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)

## Q16 - Hint
**Answer:** B  
**Topic:** Algorithms – Graph Algorithms

Match each algorithm with its standard bound:

- (a) **Dijkstra** with adjacency matrix / array → **O(V²)** → (iii)
- (b) **Kruskal** – dominated by sorting edges → **O(E lg E)** → (i)
- (c) **Floyd–Warshall** – three nested loops over V → **Θ(V³)** → (ii)
- (d) **Topological sort** – one DFS → **Θ(V + E)** → (iv)

(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv).

## Q17
<div class="stem"><p>Which of the following testing methods uses fault simulation technique?</p></div>

## Q17 - Options
(A) unit testing
(B) beta testing
(C) stress testing
(D) mutation testing

## Q17 - Hint
**Answer:** D  
**Topic:** Software Engineering – Testing

**Mutation testing** deliberately inserts small faults (mutants) into the program — e.g. changing `<` to `<=` — and checks whether the test suite detects ("kills") them. Inserting artificial faults = **fault simulation**.

Unit, beta and stress testing don't inject faults.

## Q18
<div class="stem"><p>Given below are two statements:</p> <p>Statement (I): The friend function and the member functions of a friend class directly access the private and protected data.</p> <p>Statement (II): The friend function can access the private data through the member functions of the base class</p> <p>In the light of the above statements, choose the most appropriate answer from the options given below:</p></div>

## Q18 - Options
(A) Both Statement I and Statement II are correct
(B) Both Statement I and Statement II are incorrect
(C) Statement I is correct but Statement II is incorrect
(D) Statement I is incorrect but Statement II is correct

## Q18 - Hint
**Answer:** A  
**Topic:** Programming in C++ – Friend Functions

- **Statement I – Correct.** A friend function, and all member functions of a friend class, can directly access the private and protected members of the class that grants friendship.
- **Statement II – Correct (as intended).** A friend function can also reach private data indirectly by calling the class's member functions, which themselves access private data.

Both correct.

## Q19
<div class="stem"><p>Which of the following statements is/are false?</p> I. The Kruskal's algorithm for determining minimum cost spanning tree with 'n' vertices and 'm' edges in the graph takes a time of O(m log n). II. B.F.S &amp; D.F.S can be used to find the connected components of a graph. III. An offline algorithm is one that can process its input piece-by-piece in a serial fashion. IV. Shortest paths problem can be solved using matrix multiplication.</div>

## Q19 - Options
(A) I and II
(B) II and III
(C) III and IV
(D) I and IV

## Q19 - Hint
**Answer:** C  
**Topic:** Algorithms – Graph Algorithms

- **I – True.** Kruskal: O(m log m) = O(m log n), since m ≤ n² ⇒ log m ≤ 2 log n.
- **II – True.** Running BFS/DFS from every unvisited vertex finds connected components.
- **III – False.** Processing input piece-by-piece as it arrives defines an **online** algorithm; an offline algorithm has the whole input at the start.
- **IV –** Per the key, treated as false.

Key answer: III and IV.

> **⚠ Note:** Statement IV is actually true: CLRS Ch. 25.1 solves all-pairs shortest paths using a matrix-multiplication-like method (repeated squaring, Θ(n³ log n)). Only III is strictly false; the key picks (C). Remember: "shortest paths via matrix multiplication" is a valid textbook technique.

## Q20
<div class="stem"><p>In software maintenance tackling the changes in the hardware or software environment where the software works, is</p></div>

## Q20 - Options
(A) Corrective maintenance
(B) Perfective maintenance
(C) Adaptive maintenance
(D) Preventive maintenance

## Q20 - Hint
**Answer:** C  
**Topic:** Software Engineering – Maintenance

Types of maintenance:

- **Corrective** – fix bugs found after delivery.
- **Adaptive** – modify software to work in a **changed environment** (new OS, hardware, DBMS) ✔
- **Perfective** – add features / improve performance on user request.
- **Preventive** – restructure to prevent future problems.

## Q21
<div class="stem"><p>Match the following with reference to object oriented modelling:</p> <p>List - I        List - II</p> <p>(a) Polymorphism    (i) Picking both operator and attributes with operations appropriate to model an object</p> <p>(b) Inheritance         (ii) Hiding implementation details of methods from users of objects</p> <p>(c) Encapsulation    (iii) Using similar operations to do similar things</p> <p>(d) Abstraction        (iv) Create new classes from existing class</p> <p>Codes:</p> <p>(a) (b) (c) (d)</p> <p>(iv) (iii) (i) (ii)</p> <p>(iii) (iv) (i) (ii)</p> <p>(iii) (i) (ii) (iv)</p> <p>(iv) (iii) (ii) (i)</p></div>

## Q21 - Options
(A) (1)
(B) (2)
(C) (3)
(D) (4)

## Q21 - Hint
**Answer:** B  
**Topic:** Object-Oriented Concepts

- (a) Polymorphism → using similar operations to do similar things → (iii)
- (b) Inheritance → create new classes from existing ones → (iv)
- (c) Encapsulation → bundling attributes with appropriate operations into an object → (i)
- (d) Abstraction → hiding implementation details from users → (ii)

(iii), (iv), (i), (ii) = code (2) = option B.

## Q22
<div class="stem"><p>Which of the following are external qualities of a software product?</p></div>

## Q22 - Options
(A) Maintainability, reusability, portability, efficiency, correctness.
(B) Correctness, reliability, robustness, efficiency, usability.
(C) Portability, interoperability, maintainability, reusability.
(D) Robustness, efficiency, reliability, maintainability, reusability.

## Q22 - Hint
**Answer:** B  
**Topic:** Software Engineering – Software Quality

**External qualities** are visible to users: correctness, reliability, robustness, efficiency (performance), usability.  
**Internal qualities** matter to developers: maintainability, reusability, portability, readability, testability.

Options A, C, D all mix in internal qualities. Only (B) is purely external.

## Q23
<div class="stem"><p>Let R be the relation on the set of positive integers such that aRb if and only if a and b are distinct and have a common divisor other than 1.</p> <p>Which one of the following statements about R is true?</p></div>

## Q23 - Options
(A) R is symmetric and reflexive but not transitive
(B) R is reflexive but not symmetric and not transitive
(C) R is transitive but not reflexive and not symmetric
(D) R is symmetric but not reflexive and not transitive

## Q23 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Relations

aRb ⇔ a ≠ b and gcd(a, b) > 1.

- **Reflexive?** No – aRa needs a ≠ a, impossible.
- **Symmetric?** Yes – a ≠ b and gcd(a,b) > 1 ⇒ b ≠ a and gcd(b,a) > 1.
- **Transitive?** No – 3R15 (gcd 3), 15R5 (gcd 5), but 3 and 5 have gcd 1 ⇒ not 3R5.

Symmetric, not reflexive, not transitive.

## Q24
<div class="stem"><p>The maximum number of points that can be displayed without overlap on a CRT is referred as</p></div>

## Q24 - Options
(A) Picture
(B) Resolution
(C) Persistence
(D) Neither (B) nor (C)

## Q24 - Hint
**Answer:** B  
**Topic:** Computer Graphics – Display Devices

**Resolution** = maximum number of points (pixels) that can be displayed without overlap on a CRT, usually stated as horizontal × vertical points.

**Persistence** = how long the phosphor keeps glowing after excitation.

## Q25
<div class="stem"><p>Assertion A: A Raster scan device is a CRT graphic device and can use a television monitor for display</p> <p>Reason R: In Raster scan display the picture is composed of a series of dots. These dots are traced out as a series of horizontal lines. Television works in a similar fashion</p> <p>In the light of the above statements, choose the correct answer from the options given below.</p></div>

## Q25 - Options
(A) Both A and R are true and R is the correct explanation of A
(B) Both A and R are true but R is not the correct explanation of A
(C) A is true but R is false
(D) A is false but R is true

## Q25 - Hint
**Answer:** A  
**Topic:** Computer Graphics – Raster Scan

- **A – True.** A raster-scan system is a CRT-based device; since it scans like a TV, an ordinary television monitor can be used.
- **R – True.** The image is a matrix of dots (pixels) traced row by row in horizontal scan lines — exactly how TV works.

R is the reason a TV monitor can serve as a raster display → R explains A.

## Q26
<div class="stem"><p>A 4-way set-associative cache memory unit with a capacity of 16 KB is built using a block size of 8 words. The word length is 32 bits. The size of the physical address space is 4 GB. The number of bits for the TAG field is _____</p></div>

## Q26 - Options
(A) 17
(B) 18
(C) 19
(D) 20

## Q26 - Hint
**Answer:** D  
**Topic:** Computer Organization – Cache Mapping

**Step 1 – Block size.** 8 words × 32 bits = 8 × 4 B = 32 B → **offset = 5 bits** (byte-addressable).  
**Step 2 – Lines.** 16 KB / 32 B = 2¹⁴ / 2⁵ = 2⁹ = 512 lines.  
**Step 3 – Sets.** 4-way → 512 / 4 = 128 sets → **set index = 7 bits**.  
**Step 4 – Address.** 4 GB = 2³² → 32-bit physical address.  
**Tag = 32 − 7 − 5 = 20 bits.**

(Same result if you take word addressing: 30-bit word address − 7 set − 3 word bits = 20.)

## Q27
<div class="stem"><p>The representation of 4 bit code 1101 into 7 bit, even parity Hamming code is</p></div>

## Q27 - Options
(A) (1010101)
(B) (1111001)
(C) (1011101)
(D) (1110000)

## Q27 - Hint
**Answer:** A  
**Topic:** Computer Networks – Error Correction (Hamming Code)

7-bit Hamming code positions: p1 p2 d3 p4 d5 d6 d7. Data 1101 → d3=1, d5=1, d6=0, d7=1.

Even parity:

- p1 checks 1,3,5,7: d3⊕d5⊕d7 = 1⊕1⊕1 = **1**
- p2 checks 2,3,6,7: d3⊕d6⊕d7 = 1⊕0⊕1 = **0**
- p4 checks 4,5,6,7: d5⊕d6⊕d7 = 1⊕0⊕1 = **0**

Code word (positions 1→7): 1 0 1 0 1 0 1 = **1010101**.

## Q28
<div class="stem"><p>What is the output of the following program?</p> <p>#include&lt;stdio.h&gt;</p> <p>int main()</p> <p>{ int i=3;</p> <p>while (i- -)</p> <p>{ int i=10;</p> <p>i--;</p> <p>printf("%d", i);</p> <p>}</p> <p>printf("%d", i);</p> <p>}</p></div>

## Q28 - Options
(A) 990 
(B) 9990
(C) 999 - 1 
(D) 99 - 1

## Q28 - Hint
**Answer:** C  
**Topic:** Programming in C – Scope & Post-decrement

Outer i = 3. `while (i--)` tests the **old** value, then decrements.

| Test value | Outer i after | Inside loop |
|---|---|---|
| 3 (true) | 2 | new local i = 10 → 9, print **9** |
| 2 (true) | 1 | print **9** |
| 1 (true) | 0 | print **9** |
| 0 (false) | −1 | loop ends |

The inner `int i` shadows the outer one only inside the block. Last printf prints outer i = **−1**. Output: **999-1**.

## Q29
<div class="stem"><p>Consider the following grammar along with translation rules</p> <p><img src="tests/img/t1/q29-b9a1e9.png"/></p> <p>Here # and % are operators and id is a token that represents an integer and id. val represents the corresponding integer value. The set of non-terminals is {S, T, R, P} and a subscripted non-terminal indicates an instance of the non-terminal. Using this translation scheme, the computed value of S.val for root of the parse tree for the expression 20#10%5#8%2%2 is _____________.</p></div>

## Q29 - Options
(A) 60
(B) 55
(C) 75
(D) 80

## Q29 - Hint
**Answer:** D  
**Topic:** Compiler Design – Syntax-Directed Translation

From the rules: **#** means multiplication (S → S # T), **%** means division (T → T % R).

- % is lower in the grammar tree (generated under T) → **higher precedence** than #.
- Both are left-recursive → **left associative**.

Expression 20 # 10 % 5 # 8 % 2 % 2  
= 20 × (10 ÷ 5) × ((8 ÷ 2) ÷ 2)  
= 20 × 2 × 2 = **80**.

## Q30
<div class="stem"><p>Match the following:</p> <table> <tbody> <tr> <td> <p>List I</p> </td> <td> <p>List II</p> </td> </tr> <tr> <td> <p>a) Medium Access Sublayer</p> </td> <td> <p>i. Check Points</p> </td> </tr> <tr> <td> <p>b) Data Link Layer</p> </td> <td> <p>ii. Channel Allocation Problem</p> </td> </tr> <tr> <td> <p>c) Session Layer</p> </td> <td> <p>iii. Syntax and Semantic Information</p> </td> </tr> <tr> <td> <p>d) Presentation Layer</p> </td> <td> <p>iv. Framing</p> </td> </tr> </tbody> </table></div>

## Q30 - Options
(A) (a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)
(B) (a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)
(C) (a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)
(D) (a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)

## Q30 - Hint
**Answer:** B  
**Topic:** Computer Networks – OSI Layers

- (a) MAC sublayer → deciding who gets the shared channel = **channel allocation problem** (ii)
- (b) Data link layer → **framing** (iv)
- (c) Session layer → dialog control and **checkpoints** (synchronisation) (i)
- (d) Presentation layer → **syntax and semantics** of information exchanged (iii)

## Q31
<div class="stem"><p>Consider the following table:</p> <table> <tbody> <tr> <td> <p>Process</p> </td> <td> <p>P1</p> </td> <td> <p>P2</p> </td> <td> <p>P3</p> </td> <td> <p>P4</p> </td> </tr> <tr> <td> <p>AT</p> </td> <td> <p>0</p> </td> <td> <p>1</p> </td> <td> <p>3</p> </td> <td> <p>4</p> </td> </tr> <tr> <td> <p>BT</p> </td> <td> <p>5</p> </td> <td> <p>7</p> </td> <td> <p>3</p> </td> <td> <p>6</p> </td> </tr> </tbody> </table> <p>Compute the average waiting time of process using round robin scheduling with time quantum 5.</p></div>

## Q31 - Options
(A) 7.1
(B) 7.3
(C) 7.5
(D) 8

## Q31 - Hint
**Answer:** C  
**Topic:** Operating Systems – CPU Scheduling (Round Robin)

Processes (AT, BT): P1(0,5), P2(1,7), P3(3,3), P4(4,6); quantum = 5.

**Gantt chart:**

| 0–5 | 5–10 | 10–13 | 13–18 | 18–20 | 20–21 |
|---|---|---|---|---|---|
| P1 (done) | P2 (2 left) | P3 (done) | P4 (1 left) | P2 (done) | P4 (done) |

Queue order: after P1 at t=5 the queue is P2, P3, P4; P2 rejoins after P4.

| Process | CT | TAT = CT − AT | WT = TAT − BT |
|---|---|---|---|
| P1 | 5 | 5 | 0 |
| P2 | 20 | 19 | 12 |
| P3 | 13 | 10 | 7 |
| P4 | 21 | 17 | 11 |

Average WT = 30 / 4 = **7.5**.

## Q32
<div class="stem"><p>What is printed by the following ANSI C program?</p> <p>#include&lt;stdio.h&gt;</p> <p>int main(int argc, char *argv[])</p> <p>{</p> <p>   int x = 1, z[2] = {10, 11};</p> <p>   int *p = NULL;</p> <p>   p = &amp;x;</p> <p>   *p = 10;</p> <p>   p = &amp;z[1];</p> <p>   *(&amp;z[0] + 1) += 3;</p> <p>   printf("%d, %d, %dn", x, z[0], z[1]);</p> <p>   return 0;</p> <p>}</p></div>

## Q32 - Options
(A) 1, 10, 11
(B) 1, 10, 14
(C) 10, 14, 11
(D) 10, 10, 14

## Q32 - Hint
**Answer:** D  
**Topic:** Programming in C – Pointers

- `p = &x; *p = 10;` → **x = 10**.
- `p = &z[1];` (p not used further).
- `*(&z[0] + 1) += 3;` → &z[0] + 1 = &z[1] → z[1] = 11 + 3 = **14**.
- z[0] is untouched = **10**.

Output: 10, 10, 14.

## Q33
<div class="stem"><p>Match List - I with List - II according to input to the compiler phase that process it:</p> <p>List - I                                                 List - II</p> <p>(A) Syntax tree                                   (I) Code generator</p> <p>(B) Intermediate                                  (II) Semantic analyzer representation</p> <p>(C) Token stream                                (III) Lexical analyze</p> <p>(D) Character stream.                         (IV) Syntax analyser</p> <p>Choose the correct answer from the options given below:</p></div>

## Q33 - Options
(A) (A)-(IV), (B)-(III), (C)-(I), (D)-(II)
(B) (A)-(II), (B)-(I), (C)-(IV), (D)-(III)
(C) (A)-(II), (B)-(IV), (C)-(I), (D)-(III)
(D) (A)-(IV), (B)-(1), (C)-(II), (D)-(III)

## Q33 - Hint
**Answer:** B  
**Topic:** Compiler Design – Phases

Match each item to the phase that **takes it as input**:

- Character stream → **Lexical analyser** (III)
- Token stream → **Syntax analyser** (IV)
- Syntax tree → **Semantic analyser** (II)
- Intermediate representation → **Code generator** (I)

(A)-(II), (B)-(I), (C)-(IV), (D)-(III).

## Q34
<div class="stem"><p>Given below are some algorithms, and some algorithm design paradigms</p> <table> <tbody> <tr> <td> <p>List I</p> </td> <td> <p>List II</p> </td> </tr> <tr> <td> <p>(1) Dijkstra's Shortest Path</p> </td> <td> <p>i) Divide and Conquer</p> </td> </tr> <tr> <td> <p>(2) Floyd-Warshall algorithm</p> </td> <td> <p>(ii) Dynamic Programming</p> </td> </tr> <tr> <td> <p>(3) Binary search</p> </td> <td> <p>(iii) Greedy design</p> </td> </tr> <tr> <td> <p>(4) Backtracking search on a graph</p> </td> <td> <p>(iv) Depth-first search</p> </td> </tr> <tr> <td> </td> <td> <p>(v) Breadth-first search</p> </td> </tr> </tbody> </table> <p>Match the above algorithms on the left to the corresponding design paradigm they follow<br/> </p></div>

## Q34 - Options
(A) 1-i, 2-iii, 3-i, 4-v.
(B) 1-iii, 2-iii, 3-i, 4-v.
(C) 1-iii, 2-ii, 3-i, 4-iv.
(D) 1-iii, 2-ii, 3-i, 4-v.

## Q34 - Hint
**Answer:** C  
**Topic:** Algorithms – Design Paradigms

- Dijkstra – always picks the closest unvisited vertex → **Greedy** (iii)
- Floyd–Warshall – builds on D(k−1) → **Dynamic programming** (ii)
- Binary search – halve the problem each step → **Divide and conquer** (i)
- Backtracking on a graph – go deep, undo on failure → **Depth-first search** (iv)

## Q35
<div class="stem"><p>Consider the augmented grammar with {+, *, (, ), id} as the set of terminals.</p> <p>S' → S</p> <p>S → S + R|R</p> <p>R → R*P|P</p> <p>P → (S) | id</p> <p>If I<sub>0</sub> is the set of two LR(0) items {[S' → S.], [S → S. + R]}, then goto(closure(I<sub>0</sub>), +) contains exactly ______ items.</p></div>

## Q35 - Options
(A) 4
(B) 5
(C) 6
(D) 7

## Q35 - Hint
**Answer:** B  
**Topic:** Compiler Design – LR(0) Items

closure(I0) contains [S → S.+R] (plus S'→S.). On symbol **+**:

**Step 1 – Advance the dot:** S → S + .R  
**Step 2 – Closure** (dot before R, then before P):

- R → .R * P
- R → .P
- P → .(S)
- P → .id

Total = 1 + 4 = **5 items**.

## Q36
<div class="stem"><p>A system is having 8 M bytes of video memory for bit-mapped graphics with 64-bit colour. What is the maximum resolution it can support?</p></div>

## Q36 - Options
(A) 800 x 600
(B) 1024 x 768
(C) 1280 x 1024
(D) 1920 x 1440

## Q36 - Hint
**Answer:** B  
**Topic:** Computer Graphics – Frame Buffer

**Step 1:** Memory = 8 MB = 8 × 2²⁰ bytes.  
**Step 2:** 64-bit colour = 8 bytes per pixel.  
**Step 3:** Max pixels = 8 × 2²⁰ / 8 = 2²⁰ = 1,048,576.

Check options:

- 1024 × 768 = 786,432 ✔ fits
- 1280 × 1024 = 1,310,720 ✘ too many

Maximum = **1024 × 768**.

## Q37
<div class="stem"><p>Given below are two statements:</p> <p>Statement I: The laws of nature put two fundamental limits on data rate of a channel. The H.Nyquist limit restricts the number of independent samples per second to twice the band-width in a Noiseless channel.</p> <p>Statement II: Shannon's major result about noised channel is that maximum data rate of a channel whose band width is H Hz. and whose signal to noise ratio is S/N is given by:</p> <p>  Maximum number of bits/sec = Hlog<sub>2</sub>(1+ S/N)</p> <p>In the light of the above statements, choose the correct answer from the options given below</p></div>

## Q37 - Options
(A) Both Statement I and Statement II are true
(B) Both Statement I and Statement II are false
(C) Statement I is correct but Statement II is false
(D) Statement is incorrect but Statement II is true.

## Q37 - Hint
**Answer:** A  
**Topic:** Computer Networks – Channel Capacity

- **Statement I – True.** Nyquist: a noiseless channel of bandwidth B can carry at most **2B independent samples/sec**; bit rate = 2B log₂ L.
- **Statement II – True.** Shannon: for a noisy channel, C = H log₂(1 + S/N) bits/sec.

Both true.

## Q38
<div class="stem"><p>What is the output of the following program?</p> <p>#include &lt;stdio.h&gt;</p> <p># define SQR(x) (x*x)</p> <p>int main ()</p> <p>{ int a, b = 3;</p> <p>a = SQR(b+2);</p> <p>printf("%d",a);</p> <p>return 0;</p> <p>}</p></div>

## Q38 - Options
(A) 25
(B) 11
(C) Garbage value
(D) 24

## Q38 - Hint
**Answer:** B  
**Topic:** Programming in C – Macros

The macro is SQR(x) (x*x) — no brackets around x. Macros do **text substitution**:

SQR(b+2) → (b+2*b+2)

With b = 3: 3 + 2×3 + 2 = 3 + 6 + 2 = **11** (multiplication first).

## Q39
<div class="stem"><p>Match List I with List II</p> <table> <tbody> <tr> <td> <p>List-I (Software Process Models)</p> </td> <td> <p>List-II (Software Systems)</p> </td> </tr> <tr> <td> <p>(A) Waterfall model</p> </td> <td> <p>(i) e-business software that starts with only the basic functionalities and then moves on to more  advanced features.</p> </td> </tr> <tr> <td> <p>(B) Incremental development</p> </td> <td> <p>(ii) An inventory control system for a supermarket to be developed within three months.</p> </td> </tr> <tr> <td> <p>(C) Prototyping</p> </td> <td> <p>(iii) A virtual reality system for simulating vehicle navigation in a highway.</p> </td> </tr> <tr> <td> <p>(D) RAD</p> </td> <td> <p>(iv) Automate the manual system for student record maintenance in a school.</p> </td> </tr> </tbody> </table> <p>Choose the correct option from those given below:</p></div>

## Q39 - Options
(A) (A)-(ii), (B)-(iv), (C)-(i), (D)-(iii)
(B) (A)-(i), (B)-(iii), (C)-(iv), (D)-(ii)
(C) (A)-(iii), (B)-(ii), (C)-(iv), (D)-(i)
(D) (A)-(iv), (B)-(i), (C)-(iii), (D)-(ii)

## Q39 - Hint
**Answer:** D  
**Topic:** Software Engineering – Process Models

Pick the model that best fits each system:

- **Waterfall** – requirements fully known and stable → automating an existing manual student record system (iv)
- **Incremental** – deliver basic functions first, add advanced ones later → e-business software (i)
- **Prototyping** – requirements unclear / novel UI → VR vehicle-navigation simulator (iii)
- **RAD** – very short, fixed time-frame → inventory system in 3 months (ii)

## Q40
<div class="stem"><p>Early binding refers to a binding performed at compile time and late binding refers to a binding performed at execution time. Consider the following statements:</p> i. Static scope facilitates w1 bindings. ii. Dynamic scope requires w2 bindings. iii. Early bindings w3 execution efficiency. iv. Late bindings w4 execution efficiency. <p>The right choices of w1, w2, w3 and w4 (in that order) are </p></div>

## Q40 - Options
(A) Early, late, decrease, increase
(B) Late, early, increase, decrease
(C) Late, early, decrease, increase
(D) Early, late, increase, decrease

## Q40 - Hint
**Answer:** D  
**Topic:** Programming Languages – Binding & Scope

- Static scope is resolved from program text → can bind at compile time → **early**.
- Dynamic scope depends on the call sequence → needs **late** (run-time) binding.
- Early binding removes run-time look-ups → **increases** efficiency.
- Late binding adds run-time work → **decreases** efficiency.

Early, late, increase, decrease.

## Q41
<div class="stem"><p>Consider the Grammar :</p> <p><img src="tests/img/t1/q41-81b8b0.png"/><br/> If I<sub>0</sub>= CLOSURE ( {[S→.A]} then, how many items be in the set for GOTO (I<sub>0</sub>,$)</p></div>

## Q41 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q41 - Hint
**Answer:** C  
**Topic:** Compiler Design – LR(0) Items

Grammar: S → A, A → $B$ | id, B → B,A | A.

**Step 1 – I0 = closure({S → .A})** = { S → .A, A → .$B$, A → .id }

**Step 2 – GOTO(I0, $):** advance the dot over $ → A → $.B$

**Step 3 – Closure** (dot before B, then before A):

- B → .B,A
- B → .A
- A → .$B$
- A → .id

Total = 1 + 4 = **5 items**.

## Q42
<div class="stem"><p>To guarantee correction of upto t errors, the minimum Hamming distance d min in a block code must be ________.</p></div>

## Q42 - Options
(A) t+1
(B) t−2
(C) 2t−1
(D) 2t+1

## Q42 - Hint
**Answer:** D  
**Topic:** Computer Networks – Error Detection & Correction

- To **detect** up to s errors: d_min ≥ s + 1.
- To **correct** up to t errors: the "spheres" of radius t around code words must not overlap → d_min ≥ **2t + 1**.

## Q43
<div class="stem"><p>Strong Artificial Intelligence means __________</p></div>

## Q43 - Options
(A) The embodiment of human intellectual capabilities within a computer
(B) A set of computer programs that produce output that would be considered to reflect intelligence if it were generated by humans
(C) The study of mental faculties through the use of mental models implemented on a computer
(D) All of the mentioned

## Q43 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Basics

- **Strong AI** – a machine that actually *has* human-like intellect (the embodiment of human intellectual capabilities in a computer). → (A)
- **Weak AI** – programs whose output *looks* intelligent (option B).
- **Cognitive science** – studying the mind using computer models (option C).

## Q44
<div class="stem"><p>Consider the truth table ---</p> <p><img src="tests/img/t1/q44-92720b.png"/></p> <p>From the given truth table F(A, B) is equivalent to: -</p></div>

## Q44 - Options
(A) ~B → ~A
(B) ~A →  ~B
(C) B → A
(D) None of the above

## Q44 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Propositional Logic

From the table: F = T, T, F, T for (A,B) = FF, FT, TF, TT. It is false only when A = T, B = F → this is exactly **A → B**.

Now check options:

- ~B → ~A is the **contrapositive** of A → B → equivalent ✔
- ~A → ~B ≡ B → A (false at A=F, B=T) ✘
- B → A (false at A=F, B=T) ✘

## Q45
<div class="stem"><p>Consider statement about DNS</p> <p>S1: A primary server loads all the information from the disk file and secondary server loads all information from primary server by zone transfer.</p> <p>S2: DNS some times uses caching for faster response which is authoritative.</p> <p>S3: UDP is used when size of response message is less than 512 B otherwise TCP is used.</p> <p>Which are correct?</p></div>

## Q45 - Options
(A) S1, S2
(B) S1, S3
(C) S2, S3
(D) S1, S2, S3

## Q45 - Hint
**Answer:** D  
**Topic:** Computer Networks – DNS

- **S1 – True.** A primary server loads zone data from its disk file; a secondary gets it from the primary by **zone transfer**.
- **S2 –** DNS does cache answers for faster responses (key treats it as true).
- **S3 – True.** UDP is used when the response is under 512 bytes; larger responses (and zone transfers) use TCP.

Key: all three.

> **⚠ Note:** Strictly, answers served from a cache are marked **unauthoritative** (Forouzan). If the exam treats the word "authoritative" strictly, S2 is false and the answer would be (B) S1, S3. The key gives (D).

## Q46
<div class="stem"><p>The number of arrangements of six identical balls in three identical bins is______. </p></div>

## Q46 - Options
(A) 3
(B) 21
(C) 12
(D) 7

## Q46 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Combinatorics (Partitions)

Identical balls and identical bins → count **partitions of 6 into at most 3 parts**:

6+0+0, 5+1+0, 4+2+0, 3+3+0, 4+1+1, 3+2+1, 2+2+2 → **7**.

(If bins were distinct it would be C(8,2) = 28.)

## Q47
<div class="stem"><p>In 16-bit 2's complement representation, the decimal number -28 is:</p></div>

## Q47 - Options
(A) 1111 1111 1110 0100
(B) 1111 1111 0001 1100
(C) 0000 0000 1110 0100
(D) 1000 0000 1110 0100

## Q47 - Hint
**Answer:** A  
**Topic:** Digital Logic – 2's Complement

**Step 1:** +28 in 16 bits = 0000 0000 0001 1100  
**Step 2:** 1's complement = 1111 1111 1110 0011  
**Step 3:** Add 1 → **1111 1111 1110 0100** = −28

## Q48
<div class="stem"><p>How will you free the memory allocated b the following program?</p> <p>#include &lt;stdio.h&gt;</p> <p>#include&lt;stdlib.h&gt;</p> <p>#define MAXROW 3</p> <p>#define MAXCOL 4</p> <p>int main ()</p> <p>{</p> <p>int** p, i, j:</p> <p>p = (int**) malloc (MAXROW* size of (int*));</p> <p>return 0;</p> <p>}</p></div>

## Q48 - Options
(A) memfree (int p);
(B) dealloc (p);
(C) malloc (p, 0);
(D) free (p);

## Q48 - Hint
**Answer:** D  
**Topic:** Programming in C – Dynamic Memory

Memory from `malloc` is released with **free()**. `free(p);` releases the array of row pointers.

memfree/dealloc are not C library functions; `malloc(p, 0)` is invalid. (If each row were also malloc'ed, you would first free each p[i], then p.)

## Q49
<div class="stem"><p>Which of the following is correct for the destination address 4A:30:10:21:10:1A</p></div>

## Q49 - Options
(A) unicast address
(B) multicast address
(C) broadcast address
(D) unicast and broadcast address

## Q49 - Hint
**Answer:** A  
**Topic:** Computer Networks – MAC Addressing

Look at the **least significant bit of the first byte**:

- LSB = 0 → unicast
- LSB = 1 → multicast
- all FF → broadcast

First byte 4A = 0100 101**0** → LSB = 0 → **unicast**.

## Q50
<div class="stem"><p>Which of the following need to be saved on a context switch from one thread (T1) of a process to another thread (T2) of the same process?</p> <p>I. Page table base register</p> <p>II. Stack pointer</p> <p>III. Program counter</p> <p>IV. General purpose registers</p></div>

## Q50 - Options
(A) I, II, III
(B) II, III, IV
(C) I, III, IV
(D) All of the above

## Q50 - Hint
**Answer:** B  
**Topic:** Operating Systems – Threads

Threads of the **same process share** the address space, so the **page table (and its base register) stays the same** → no need to save I.

Each thread has its own execution state, which must be saved:

- Stack pointer (II) – own stack
- Program counter (III) – own position in code
- General-purpose registers (IV)

Answer: II, III, IV.

## Q51
<div class="stem"><p>Let T(n) be a function defined by the recurrence T(n) = 2T(n/2) + √n for n ≥ 2 and T(1) = 1 Which of the following statements is TRUE?</p></div>

## Q51 - Options
(A) T(n) = θ(log n)
(B) T(n) = θ(√n)
(C) T(n) = θ(n)
(D) T(n) = θ(n log n)

## Q51 - Hint
**Answer:** C  
**Topic:** Algorithms – Recurrences (Master Theorem)

T(n) = 2T(n/2) + √n

**Step 1 – Identify:** a = 2, b = 2, f(n) = n^0.5.  
**Step 2 – Compute n^(log_b a)** = n^(log₂ 2) = n¹ = n.  
**Step 3 – Compare:** f(n) = n^0.5 grows **polynomially slower** than n (n^0.5 = O(n^(1−ε)) with ε = 0.5).  
**Step 4 – Case 1** applies: T(n) = Θ(n^(log_b a)) = **Θ(n)**.

## Q52
<div class="stem"><p>If D1, D2...Dn are domains in a relational model, then the relation is a table, which is a subset of</p></div>

## Q52 - Options
(A) D1⊕D2⊕...⊕Dn
(B) D1xD2x...xDn
(C) D1∪D2∪...∪Dn
(D) D1∩D2∩...∩Dn

## Q52 - Hint
**Answer:** B  
**Topic:** DBMS – Relational Model

In the relational model, a relation on domains D1, …, Dn is a set of n-tuples (d1, …, dn) with each di ∈ Di. The set of **all** such tuples is the Cartesian product D1 × D2 × … × Dn, so every relation (table) is a **subset of the Cartesian product**.

## Q53
<div class="stem"><p>The number of states in minimized DFA for the language: L= {awa | w € (a, b)*} is</p></div>

## Q53 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q53 - Hint
**Answer:** B  
**Topic:** Theory of Computation – DFA Minimisation

L = { a w a | w ∈ (a+b)* } → strings that **start with a, end with a, length ≥ 2**.

States:

- q0 (start): on a → q1; on b → **dead**
- q1 (started with a, last symbol not an accepting a): on a → q2; on b → q1
- q2 (final, last symbol a): on a → q2; on b → q1
- dead: loops on a, b

q1 and q2 differ (final vs non-final); none merge. **4 states** (including dead).

## Q54
<div class="stem"><p>In a binary tree, the number of internal nodes of degree 1 is 5, and the number of internal nodes of degree 2 is 10. The number of leaf nodes in the binary tree is</p></div>

## Q54 - Options
(A) 10
(B) 11
(C) 12
(D) 15

## Q54 - Hint
**Answer:** B  
**Topic:** Data Structures – Binary Trees

In any binary tree: **leaves n0 = n2 + 1** (n2 = nodes with 2 children).

Proof sketch: edges = n1 + 2n2 and also = n − 1 = (n0 + n1 + n2) − 1 ⇒ n0 = n2 + 1.

n2 = 10 ⇒ leaves = **11**. (n1 = 5 doesn't affect it.)

## Q55
<div class="stem"><p>What is the hexadecimal equivalent of the decimal number 491.25?</p></div>

## Q55 - Options
(A) 1EF.4
(B) 1EB.4
(C) 1EB.1
(D) 2EB.1

## Q55 - Hint
**Answer:** B  
**Topic:** Digital Logic – Number Systems

**Integer part (÷16):** 491 ÷ 16 = 30 r 11 (B); 30 ÷ 16 = 1 r 14 (E); 1 → 1. Read upward: **1EB**.  
**Fraction (×16):** 0.25 × 16 = 4.0 → **.4**.

491.25 = **1EB.4** (check: 256 + 224 + 11 = 491).

## Q56
<div class="stem"><p>Consider a list of recursive algorithms and a list of recurrence relations as shown below. Each recurrence relation corresponds to exactly one algorithm and is used to derive the time complexity of the algorithm.</p> <p><img src="tests/img/t1/q56-c4a4db.png"/></p></div>

## Q56 - Options
(A) P-II, Q-III, R-IV, S-I
(B) P-IV, Q-III, R-I, S-II
(C) P-III, Q-II, R-IV, S-I
(D) P-IV, Q-II, R-I, S-III

## Q56 - Hint
**Answer:** B  
**Topic:** Algorithms – Recurrence Relations

Write the recurrence each algorithm naturally produces:

- **P. Binary search** – one half-size subproblem + constant compare → T(n) = T(n/2) + 1 → **IV**
- **Q. Merge sort** – two halves + linear merge → T(n) = 2T(n/2) + cn → **III**
- **R. Quick sort** – partition into k and n−k parts + linear partition → T(n) = T(n−k) + T(k) + cn → **I**
- **S. Tower of Hanoi** – move n−1 disks twice + 1 move → T(n) = 2T(n−1) + 1 → **II**

P-IV, Q-III, R-I, S-II.

## Q57
<div class="stem"><p>Which of the following is correct?</p> I. Two phase locking is an optimistic protocol. II. Two phase locking is pessimistic protocol III. Time stamping is an optimistic protocol. IV. Time stamping is pessimistic protocol.</div>

## Q57 - Options
(A) I and III
(B) II and IV
(C) I and IV
(D) II and III

## Q57 - Hint
**Answer:** D  
**Topic:** DBMS – Concurrency Control

- **Pessimistic** protocols assume conflicts will happen and prevent them up front by **locking** → **Two-phase locking** is pessimistic (II ✔).
- **Optimistic** (non-locking) protocols let transactions run and check/resolve conflicts using ordering rules → **timestamp-based** protocols are grouped here (III ✔).

Answer: II and III.

## Q58
<div class="stem"><p>What is the output of following code?</p> <p>main ()</p> <p>{static float a[]={13.24,1.5,4.5,5.4.3.5}</p> <p>float *j, *k;</p> <p>j=a;</p> <p>k}=\textrm{a}+</p> <p>j=}=\mp@subsup{j}{*}{**</p> <p>k}=\textrm{k}/2\mathrm{ ;</p> <p>printf ("% f% f", *j, *k);</p> <p>}</p></div>

## Q58 - Options
(A) 13.25,4.5  
(B) 1.5,3.5  
(C) 13.24, 1.5, 4.5, 5.4, 3.5  
(D) Illegal use of pointer in main function

## Q58 - Hint
**Answer:** D  
**Topic:** Programming in C – Pointer Arithmetic

The intended code is:  
`j = a; k = a + 4; j = j * 2; k = k / 2;`

C allows only **adding/subtracting an integer** to a pointer and **subtracting two pointers**. Multiplying or dividing a pointer (`j * 2`, `k / 2`) is not allowed → compile error: **illegal use of pointer**.

> **⚠ Note:** The stem's code is garbled in the source; the intended statements are shown above.

## Q59
<div class="stem"><p>Arrange the following stages of a Turing Machine (TM) operation in the correct order as they occur during computation</p> <p>(A) Writing a symbol on the tape</p> <p>(B) Moving the tape head left to right</p> <p>(C) Reading a symbol from the tape</p> <p>(D) Transitioning to a new state based on the current state and symbol read</p> <p>(E) Halting and accepting or rejecting the input</p> <p>Choose the correct answer from the options given below:</p> <ul> </ul></div>

## Q59 - Options
(A) (C), (A), (B). (D) (E)<br> <ul> </ul>
(B) (C), (B), (A), (D), (E)<br> <ul> </ul>
(C) (C), (D) (A), (B), (E)<br> <ul> </ul>
(D) (C), (D), (B), (A), (E)<br> <ul> </ul>

## Q59 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Turing Machines

One TM step follows the transition δ(q, a) = (p, b, L/R):

1. **Read** the symbol under the head (C)
2. **Transition**: use current state + symbol to choose the move (D)
3. **Write** the new symbol (A)
4. **Move** the head (B)
5. Finally **halt** and accept/reject (E)

Order: C, D, A, B, E.

## Q60
<div class="stem"><p>Graph G(V,E) is a connected planar graph with no cycles of length less than 4, if |V|= 15, then maximum value of |E| is</p></div>

## Q60 - Options
(A) 24
(B) 25
(C) 26
(D) 27

## Q60 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Planar Graphs

For a connected planar graph:

**Step 1 – Euler:** V − E + F = 2.  
**Step 2 – Face bound:** no cycle shorter than 4 ⇒ every face has ≥ 4 edges ⇒ 4F ≤ 2E ⇒ F ≤ E/2.  
**Step 3 – Combine:** 2 = V − E + F ≤ V − E + E/2 ⇒ **E ≤ 2V − 4**.  
**Step 4:** E ≤ 2(15) − 4 = **26**.

## Q61
<div class="stem"><p>Match the following port numbers with their uses:</p> <p>List - I        List - II</p> <p>(a) 23        (i) World wide web</p> <p>(b) 25        (ii) Remote Login</p> <p>(c) 80        (iii) USENET news</p> <p>(d) 119        (iv) E - mail</p> <p>Codes :</p> <p>(a) (b) (c) (d)</p></div>

## Q61 - Options
(A) (iv) (i) (ii) (iii)
(B) (ii) (i) (iv) (iii)
(C) (ii) (iv) (iii) (i)
(D) (ii) (iv) (i) (iii)

## Q61 - Hint
**Answer:** D  
**Topic:** Computer Networks – Port Numbers

- 23 → **Telnet** → remote login (ii)
- 25 → **SMTP** → e-mail (iv)
- 80 → **HTTP** → World Wide Web (i)
- 119 → **NNTP** → USENET news (iii)

## Q62
<div class="stem"><p>Which one of the following pairs is correctly matched in the context of database design?</p> <table> <tbody> <tr> <td> <p>List-I (Database term)</p> </td> <td> <p>List-II (Definition)</p> </td> </tr> <tr> <td> <p>I. Specialization</p> </td> <td> <p>A. Result of taking the union of two or more disjoint (lower-level) entity sets to produce a higher-level entity set.</p> </td> </tr> <tr> <td> <p>II. Generalization</p> </td> <td> <p>B. Express the number of entities to which another entity can be associated via a relationship set.</p> </td> </tr> <tr> <td> <p>III. Aggregation</p> </td> <td> <p>C. Result of taking a subset of a higher-level entity set to form a lower-level entity set.</p> </td> </tr> <tr> <td> <p>IV. Mapping cardinality</p> </td> <td> <p>D. An abstraction in which relationship sets (along with their associated entity sets) are treated as higher-level entity sets, and can participate in relationships.</p> </td> </tr> </tbody> </table> <p>Codes :</p> <p> I    II   III   IV</p></div>

## Q62 - Options
(A) D  A   B   C
(B) D  C   B   A
(C) C  D   A   B
(D) C  A   D   B

## Q62 - Hint
**Answer:** D  
**Topic:** DBMS – ER Model

- **Specialization** – take a *subset* of a higher-level entity set to form lower-level sets (top-down) → C
- **Generalization** – *union* of lower-level entity sets into a higher-level set (bottom-up) → A
- **Aggregation** – treat a relationship set (with its entities) as a higher-level entity → D
- **Mapping cardinality** – number of entities another entity can be linked with → B

I-C, II-A, III-D, IV-B.

## Q63
<div class="stem"><p>Consider a paging hardware with a TLB. Assume that the entire page table and all the pages are in the physical memory. It takes 10 milliseconds to search the TLB and 80 milliseconds to access the physical memory. If the TLB hit ratio is 0.6, the effective memory access time (in milliseconds) is</p></div>

## Q63 - Options
(A) 132
(B) 133
(C) 122
(D) 125

## Q63 - Hint
**Answer:** C  
**Topic:** Operating Systems – Paging with TLB

**TLB hit** (0.6): TLB search + one memory access = 10 + 80 = 90  
**TLB miss** (0.4): TLB search + page-table access + data access = 10 + 80 + 80 = 170

EMAT = 0.6 × 90 + 0.4 × 170 = 54 + 68 = **122 ms**.

## Q64
<div class="stem"><p>Which of the following statements are true regarding C++?</p> <p>a) Overloading a function gives the capability to an existing operator to operate on other data types.</p> <p>b) Inheritance in object-oriented programming provides support to reusability.</p> <p>c) When object of a derived class is defined, first the constructor of derived class is executed then constructor of a base class is executed.</p> <p>d) Overloading is a type of polymorphism.</p> <p>Choose the correct option from those given below:</p></div>

## Q64 - Options
(A) (a) and (b) only
(B) (a), (b) and (c) only
(C) (b) and (d) only
(D) (b), (c) and (d) only

## Q64 - Hint
**Answer:** C  
**Topic:** Programming in C++ – OOP Concepts

- **(a) False** as written – giving an *operator* new meaning for other data types is **operator** overloading, not function overloading.
- **(b) True** – inheritance reuses existing class code.
- **(c) False** – the **base** class constructor runs **first**, then the derived (destructors in reverse).
- **(d) True** – overloading is compile-time (static) polymorphism.

True: (b) and (d).

## Q65
<div class="stem"><p>If A= (4n + 2 | n is a natural number) and B={3n | n is a natural number). Which of the following is correct for A ∩ B?</p></div>

## Q65 - Options
(A) (12n<sup>2</sup> + 6n | n is a natural number}
(B) (24n - 12 | n is a natural number)
(C) (60n + 30 | n is a natural number}
(D) (12n - 6 | n is a natural number}

## Q65 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Sets

**Step 1:** A = {6, 10, 14, 18, 22, 26, 30, …} (n = 1, 2, …)  
**Step 2:** B = multiples of 3.  
**Step 3:** A ∩ B = {6, 18, 30, 42, …} – an AP with first term 6, difference 12.  
**Step 4:** General term = 6 + (n−1)·12 = **12n − 6**.

## Q66
<div class="stem"><p>The degree sequence of a simple graph is the sequence of the degrees of the nodes in the graph in decreasing order. Which of the following sequences can not be the degree sequence of any graph?</p> <p>(I) 7, 6, 5, 4, 4, 3, 2, 1</p> <p>(II) 6, 6, 6, 6, 3, 3, 2, 2</p> <p>(III) 7, 6, 6, 4, 4, 3, 2, 2</p> <p>(IV) 8, 7, 7, 6, 4, 2, 1, 1</p></div>

## Q66 - Options
(A) I and II
(B) III and IV
(C) IV only
(D) II and IV

## Q66 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Graph Theory (Degree Sequence)

Use the **Havel–Hakimi** test: remove the largest degree d, subtract 1 from the next d degrees, re-sort, repeat. Fails if a negative appears.

- **I:** 7,6,5,4,4,3,2,1 → 5,4,3,3,2,1,0 → 3,2,2,1,0,0 → 1,1,0,0,0 → 0,0,0,0 ✔ graphical
- **II:** 6,6,6,6,3,3,2,2 → 5,5,5,2,2,2,1 → 4,4,1,1,1,1 → 3,1,0,0,0 → 0,−1,−1 ✘
- **III:** 7,6,6,4,4,3,2,2 → 5,5,3,3,2,1,1 → 4,2,2,1,1,0 → 1,1,0,0,0 → 0,0,0,0 ✔
- **IV:** 8 vertices, so max degree in a simple graph is 7; a degree **8** is impossible ✘

Not graphical: II and IV.

## Q67
<div class="stem"><p>Which of the following statements are true?</p> A)Minimax search is breadth-first; it processes all the nodes at a level before moving to a node in the next level. <p>B) The effectiveness of the alpha-beta pruning is highly dependent on the order in which the states are examined.</p> <p>C) The alpha-beta search algorithm computes the same optimal moves as the minimax algorithm.</p> <p>D) Optimal play in games of imperfect information does not require reasoning about the current and future belief states of each player.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q67 - Options
(A) (A) and (C) only
(B) (A) and (D) only
(C) (B) and (C) only
(D) (C) and (D) only

## Q67 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Game Playing

- **A – False.** Minimax explores the game tree **depth-first**.
- **B – True.** Alpha-beta prunes most when the best moves are examined first; bad ordering prunes nothing.
- **C – True.** Pruning only skips branches that can't affect the result, so alpha-beta returns the **same** move as minimax.
- **D – False.** With imperfect information, optimal play **does** require reasoning about belief states.

## Q68
<div class="stem"><p>What is the output of following code?</p> <p>main ()</p> <p>struct s1</p> <p>{ char*z;</p> <p>int i;</p> <p>struct s1 * p;</p> <p>}</p> <p>static struct $1 a [] = {</p> <p>{"Nagpur", 1, a+1}</p> <p>{"Raipur', 2, a+2}</p> <p>{"Kanpur', 3, a}</p> <p>};</p> <p>struct s1* ptr =a;</p> <p>printf(%s%s %s ln", a[0].z, ptr }-&gt;\textrm{z},\textrm{a}[2]-\textrm{p}-&gt;\textrm{z}\mathrm{ );</p> <p>}</p></div>

## Q68 - Options
(A) Nagpur Raipur Kanpur
(B) Nagpur Nagpur Nagpur
(C) Kanpur Kanpur Kanpur
(D) Error

## Q68 - Hint
**Answer:** B  
**Topic:** Programming in C – Structures & Pointers

Array a[3] of structures (intended code):

- a[0] = {"Nagpur", 1, a+1}, a[1] = {"Raipur", 2, a+2}, a[2] = {"Kanpur", 3, a}

Evaluate:

- `a[0].z` → **Nagpur**
- `ptr->z` with ptr = a → a[0].z → **Nagpur**
- `a[2].p->z` → a[2].p = a → a[0].z → **Nagpur**

Output: Nagpur Nagpur Nagpur.

## Q69
<div class="stem"><p>A 5-ary tree is tree in which every internal node has exactly 5 children. The number of left nodes in such a tree with 8 internal nodes will be:</p></div>

## Q69 - Options
(A) 30
(B) 33
(C) 45
(D) 130

## Q69 - Hint
**Answer:** B  
**Topic:** Data Structures – Trees (n-ary)

In a full m-ary tree with I internal nodes:

- Total nodes N = mI + 1 (each internal node gives m children, plus root)
- Leaves L = N − I = (m − 1)I + 1

m = 5, I = 8 ⇒ L = 4 × 8 + 1 = **33**.

## Q70
<div class="stem"><p>Which of the following properties correctly describe a Regular Grammar?</p> <p>(A) All production rules are of the form A→xB or A→ x, where A and B are non terminal symbols and x is a terminal symbol.</p> <p>(B) Regular grammars are more powerful than context-free grammars and can express any type of language.</p> <p>(C) There is a direct correspondence between regular grammar and finite automata.</p> <p>(D) Regular grammars can generate languages that are not recognised by any type of automata.</p> <p>Choose the correct answer from the options given below:</p> <ul> </ul></div>

## Q70 - Options
(A) (A) and (B) Only<br> <ul> </ul>
(B) (B) and (C) Only<br> <ul> </ul>
(C) (C) and (D) Only<br> <ul> </ul>
(D) (A) and (C) Only<br> <ul> </ul>

## Q70 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Regular Grammars

- **(A) True** – right-linear form: A → xB or A → x.
- (B) False – regular grammars are **less** powerful than CFGs.
- **(C) True** – every regular grammar ↔ an equivalent finite automaton.
- (D) False – regular languages are exactly those accepted by finite automata.

## Q71
<div class="stem"><p>A system has 27 instances of resource R such that 5+n process share them. Five processes request three instance of resource R and what is the value of n processes requesting 4 instances of the same resource R in such a way that the system is in a safe state.</p></div>

## Q71 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q71 - Hint
**Answer:** C  
**Topic:** Operating Systems – Deadlock

Deadlock-freedom condition: if each process i needs at most mᵢ instances, the system is safe when  
Σ(mᵢ − 1) < R (total instances).

**Step 1:** 5 processes need 3 each → 5 × (3−1) = 10.  
**Step 2:** n processes need 4 each → n × (4−1) = 3n.  
**Step 3:** 10 + 3n < 27 ⇒ 3n < 17 ⇒ n < 5.67.

Maximum **n = 5**.

## Q72
<div class="stem"><p>Which of the following is true while converting CFG to LL(1) grammar ?</p></div>

## Q72 - Options
(A) Remove left recursion
(B) Factoring grammar
(C) Both (A) and (B)
(D) Only (A)

## Q72 - Hint
**Answer:** C  
**Topic:** Compiler Design – Top-Down Parsing

To prepare a CFG for an LL(1) (predictive) parser:

1. **Remove left recursion** – otherwise the top-down parser loops forever.
2. **Left factor** – removes common prefixes so the parser can choose a production with one look-ahead.

Both are needed (they help, but don't guarantee LL(1) — an ambiguous grammar still won't be LL(1)).

## Q73
<div class="stem"><p>Consider α, β, γ as logical variables. Identify which of the following represents correct logical equivalence :</p> <p>(α˄(β˅γ)) ≡ ((α ˄ β) ˅ (α ˄ γ) )</p> <p>(α ˅ β) ≡ ~ α ˅ β</p> <p>(α → β) ≡ (~ β → ~α)</p> <p>(~(α ˅ β)) ≡ (~α → ~β )</p> <p>Choose the correct answer from the options given below:</p></div>

## Q73 - Options
(A) (A) and (D) only
(B) (B) and (C) only
(C) (A) and (C) only
(D) (B) and (D) only

## Q73 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Logical Equivalence

- **A ✔** – distributive law: α∧(β∨γ) ≡ (α∧β)∨(α∧γ).
- **B ✘** – α∨β vs ¬α∨β: at α=T, β=F the left is T, the right is F.
- **C ✔** – contrapositive: α→β ≡ ¬β→¬α.
- **D ✘** – ¬(α∨β) ≡ ¬α∧¬β, but ¬α→¬β ≡ α∨¬β; they differ (e.g. α=T, β=F).

## Q74
<div class="stem"><p>In a genetic algorithm optimization problem the fitness function is defined as f(x) = x²-4x+4. Given a population of four individuals with values of x: (1.5, 2.0, 3.0, 4.5]</p> <p>What is the fitness value of the individual that will be selected as the parent for reproduction in one generation?</p></div>

## Q74 - Options
(A) 2.25
(B) 6.0
(C) 0.0
(D) 6.25

## Q74 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Genetic Algorithms

f(x) = x² − 4x + 4 = (x − 2)².

| x | 1.5 | 2.0 | 3.0 | 4.5 |
|---|---|---|---|---|
| f(x) | 0.25 | 0 | 1 | **6.25** |

In GA, the fittest individual (highest fitness value) is most likely to be selected as a parent → **6.25** (x = 4.5).

## Q75
<div class="stem"><p>Given the following STUDENT-COURSE scheme: STUDENT (Rollno, Name, Courseno)    COURSE (Courseno, Coursename, Capacity), where Rollno is the primary key of relation STUDENT and Courseno is the primary key of relation COURSE. Attribute Coursename of COURSE  takes unique values only.  The number of records in COURSE and STUDENT tables are 3  and  5 respectively. Following  relational algebra query is</p> <p>executed: R=STUDENT X COURSE</p> <p>Match List I with List II in context to the above problem statement.</p> <p><img src="tests/img/t1/q75-9b6739.png"/></p> <p>Choose the correct answer from the options given below:</p></div>

## Q75 - Options
(A) A -I , B -III , C -IV , D - II
(B) A -I , B -III , C -IV , D – II
(C) A -I , B -III, C -II , D – IV
(D) A -III , B -I , C -IV , D - II

## Q75 - Hint
**Answer:** D  
**Topic:** DBMS – Relational Algebra

R = STUDENT × COURSE (Cartesian product).

- **Degree** of R = attributes = 3 + 3 = **6** → A-III
- **Cardinality** of R = rows = 5 × 3 = **15** → B-I
- STUDENT's foreign key = **Courseno** (refers to COURSE) → C-IV
- COURSE has **no** foreign key → D-II (NIL)

## Q76
<div class="stem"><p>In an unweighted, undirected connected graph, the shortest path from a node S to entry other node is computed most efficiently, in terms of time complexity of -</p></div>

## Q76 - Options
(A) Dijkstra algorithm starting from S.
(B) Warshall's algorithm
(C) Performing a DFS starting from S.
(D) Performing a BFS starting from S.

## Q76 - Hint
**Answer:** D  
**Topic:** Algorithms – Shortest Paths

In an **unweighted** graph each edge counts as 1, so BFS visits vertices in order of distance from S. BFS gives all shortest paths in **O(V + E)**.

Dijkstra also works but costs O((V+E) log V); Warshall is all-pairs O(V³); DFS doesn't give shortest paths.

## Q77
<div class="stem"><p>A transaction may be in one of the following states during its execution life cycle in concurrent execution</p> <p>environment.</p> <p>A. FAILED</p> <p>B. TERMINATED</p> <p>C. PARTIALLY COMMITTED</p> <p>D. COMMITTED</p> <p>E. ACTIVE</p> <p>Given a transaction in active state during its execution, find its next transitioned state from the options given</p> <p>below:</p></div>

## Q77 - Options
(A) A only
(B) C only
(C) D only
(D) Either A or C only

## Q77 - Hint
**Answer:** D  
**Topic:** DBMS – Transaction States

Transaction state diagram:

Active → **Partially committed** (after the last statement) → Committed → Terminated  
Active → **Failed** (if an error occurs) → Aborted → Terminated

From Active the next state is either **Failed** or **Partially committed**.

## Q78
<div class="stem"><p>There are many sorting algorithms based on comparison. The running time of heapsort algorithm is O(n log n). Like P, but unlike Q, heapsort sorts in place where (P, Q) is equal to</p></div>

## Q78 - Options
(A) Merge sort, Quick sort
(B) Quick sort, Insertion sort
(C) Insertion sort, Quick sort
(D) Insertion sort, Merge sort

## Q78 - Hint
**Answer:** D  
**Topic:** Algorithms – Sorting

**In-place** = uses only O(1) extra memory.

- Heap sort – in place ✔
- Insertion sort – in place ✔ (like heap sort)
- Merge sort – needs O(n) auxiliary array ✘ (unlike heap sort)

(P, Q) = (Insertion sort, Merge sort).

## Q79
<div class="stem"><p>Semaphores are used to solve the problem of</p> I. Race Condition II. Process Synchronization III. Mutual Exclusion</div>

## Q79 - Options
(A) I and II
(B) II and III
(C) All of the above
(D) None of the above

## Q79 - Hint
**Answer:** C  
**Topic:** Operating Systems – Synchronization

A semaphore with wait(P)/signal(V) can:

- prevent **race conditions** by guarding shared data,
- enforce **mutual exclusion** (binary semaphore/mutex),
- **order events** between processes (synchronisation, e.g. producer–consumer).

All three.

## Q80
<div class="stem"><p>Match List I with List II</p> <table> <tbody> <tr> <td> <p>List-I</p> </td> <td> <p>List-II</p> </td> </tr> <tr> <td> <p>(A) Greedy Best first search</p> </td> <td> <p>(I) The space complexity as O(d) where d = depth of the deepest optimal solution</p> </td> </tr> <tr> <td> <p>(B) A*</p> </td> <td> <p>(II) Incomplete even if the search space is finite</p> </td> </tr> <tr> <td> <p>(C) Recursive best first search</p> </td> <td> <p>(III) Optimal if optimal solution is reachable otherwise return the best reachable optimal solution</p> </td> </tr> <tr> <td> <p>(D) SMA*</p> </td> <td> <p>(IV) Computation and space complexity is two light</p> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q80 - Options
(A) (A)-(II), (B)-(IV), (C)-(I), (D)-(III)
(B) (A)-(II), (B)-(III), (C)-(1), (D)-(IV)
(C) (A)-(III), (B)-(II), (C)-(IV), (D)-(I)
(D) (A)-(III), (B)-(IV), (C)-(II), (D)-(I)

## Q80 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Informed Search

- **Greedy best-first** – follows h(n) only; the tree-search version can loop → **incomplete even in a finite space** (II)
- **A*** – keeps all generated nodes; time and space grow exponentially → its main drawback is **heavy computation and space** (IV)
- **RBFS** – recursive, keeps only the current path → **linear space O(d)** (I)
- **SMA*** – uses all available memory; optimal if the optimal solution fits, otherwise returns the best reachable solution (III)

## Q81
<div class="stem"><p>Which of the following DMA transfer modes and interrupt handling mechanisms will enable the highest I/O band-width?</p></div>

## Q81 - Options
(A) Transparent DMA and Polling interrupts
(B) Cycle-stealing and Vectored interrupts
(C) Block transfer and Vectored interrupts
(D) Block transfer and Polling interrupts

## Q81 - Hint
**Answer:** C  
**Topic:** Computer Organization – DMA & Interrupts

- **Block (burst) transfer DMA** sends an entire block in one go → highest data rate for I/O. (Cycle stealing sends one word at a time; transparent DMA only uses idle bus cycles.)
- **Vectored interrupts** go straight to the right handler without polling each device → fastest servicing.

Highest I/O bandwidth: block transfer + vectored interrupts.

## Q82
<div class="stem"><p>Match the following database terms to their functions:</p> <p>List-I                                      List-II</p> <p>(a) Normalization `                (i) Enforces match of primary key to foreign key</p> <p>(b) Data Dictionary                (ii) Reduces data redundancy in a database</p> <p>(c) Referential Integrity         (iii) Define view(s) of the database for particular user(s).</p> <p>(d) External Schema             (iv) Contains metadata describing database structure.</p> <p>Codes:</p> <p>      (a)   (b)   (c)    (d)</p></div>

## Q82 - Options
(A) (iv)   (iii)   (i)   (ii)
(B) (ii)    (iv)   (i)   (iii)
(C) (ii)   (iv)   (iii)   (i)
(D) (iv)   (iii)   (ii)   (i)

## Q82 - Hint
**Answer:** B  
**Topic:** DBMS – Basic Concepts

- Normalization → **reduces data redundancy** (ii)
- Data dictionary → **metadata** about database structure (iv)
- Referential integrity → foreign key must match a primary key (i)
- External schema → **user views** (iii)

## Q83
<div class="stem"><p>Suppose that we have numbers between 1 and 1,000 in a binary search tree and want to search for the number 364. Which of the following sequences could not be the sequence of nodes examined ?</p></div>

## Q83 - Options
(A) 925, 221, 912, 245, 899, 259, 363, 364
(B) 3, 400, 388, 220, 267, 383, 382, 279, 364
(C) 926, 203, 912, 241, 913, 246, 364
(D) 3, 253, 402, 399, 331, 345, 398, 364

## Q83 - Hint
**Answer:** C  
**Topic:** Data Structures – Binary Search Tree

Rule: once you go **left** at a node x, every later node must be **< x**; once you go **right** at x, every later node must be **> x**. Track the allowed range (low, high).

(C) 926 → go left: (−, 926)  
203 → go right: (203, 926)  
912 → go left: (203, 912)  
241 → go right: (241, 912)  
**913** → not in (241, 912) ✘ impossible.

(A), (B), (D) stay within their ranges at every step.

## Q84
<div class="stem"><p>Which one of the following non functional quality attributes is not highly affected by the architecture of the software?</p></div>

## Q84 - Options
(A) Performance
(B) Reliability
(C) Usability
(D) Portability

## Q84 - Hint
**Answer:** C  
**Topic:** Software Engineering – Software Architecture

Architecture (component structure, communication, distribution) strongly shapes **performance, reliability, portability** (and security, maintainability).

**Usability** depends mostly on the user-interface design rather than the overall architecture → least affected.

## Q85
<div class="stem"><p>Consider the following statements:</p> <p>Statement I : A counting semaphore was initialized to 10. Then 6P (wait) operations and 4V (signal) operations were completed on this semaphore. The resulting value of the semaphore is 8.</p> <p>Statement II : Round Robin, Priority and SRTF scheduling algorithms may cause starvation.</p> <p>Choose the correct answer from the options given below?</p></div>

## Q85 - Options
(A) Both Statement I and Statement II are false
(B) Both Statement I and Statement II are true
(C) Statement I is false but Statement II is true
(D) Statement I is true but Statement II is false

## Q85 - Hint
**Answer:** D  
**Topic:** Operating Systems – Semaphores & Scheduling

- **Statement I – True.** Each P (wait) decrements, each V (signal) increments: 10 − 6 + 4 = **8**.
- **Statement II – False.** Priority and SRTF can starve processes, but **Round Robin cannot** — every process gets a turn within (n−1)·q time.

## Q86
<div class="stem"><p>The steps for analysis and design of object oriented system.</p> <p>(A) Draw interaction diagrams</p> <p>(B) Draw state chart and object diagram</p> <p>(C) Draw use case and activity diagram</p> <p>(D) Draw component and deployment diagram</p> <p>(E) Draw class diagram</p> <p>Choose the correct answer from the options given below:</p></div>

## Q86 - Options
(A) (E)→(B)→(A)→(C)→(D)
(B) (B)→(A)→(E)→(D)→(C)
(C) (E)→(C)→(B)→(D)→(A)
(D) (C)→(A)→(E)→(B)→(D)

## Q86 - Hint
**Answer:** D  
**Topic:** Software Engineering – UML / OOAD

Typical OOAD flow, from requirements to deployment:

1. **Use case + activity diagrams** – capture requirements (C)
2. **Interaction diagrams** – how objects collaborate per use case (A)
3. **Class diagram** – classes, attributes, relationships (E)
4. **State chart + object diagrams** – dynamic behaviour of classes (B)
5. **Component + deployment diagrams** – implementation/physical view (D)

C → A → E → B → D.

## Q87
<div class="stem"><p>    Windows                               UNIX</p> <p>(a) Create - process ()            (i) Open ()</p> <p>(b) WaitForSingleObject ()     (ii) Close ()</p> <p>(c) CreateFile ()                      (iii) Fork ()</p> <p>(d) CloseHandle ()                (iv) Wait ()</p> <p>Code :</p> <p>(a)    (b)    (c)    (d)</p></div>

## Q87 - Options
(A) (iii)    (iv)    (i)    (ii)
(B) (iv)    (iii)    (i)    (ii)
(C) (iv)    (iii)    (ii)    (i)
(D) (iii)    (iv)    (ii)    (i)

## Q87 - Hint
**Answer:** A  
**Topic:** Operating Systems – System Calls

Windows vs UNIX equivalents:

- CreateProcess() ↔ **fork()** (iii)
- WaitForSingleObject() ↔ **wait()** (iv)
- CreateFile() ↔ **open()** (i)
- CloseHandle() ↔ **close()** (ii)

## Q88
<div class="stem"><p>A  <img src="tests/img/t1/q88-4d182a.png"/> point of a fuzzy set A is a point x∈X at which μA(x)=0.5</p></div>

## Q88 - Options
(A) Core
(B) Support
(C) Crossover
(D) α-cut

## Q88 - Hint
**Answer:** C  
**Topic:** Soft Computing – Fuzzy Sets

- **Crossover point** – μA(x) = **0.5** ✔
- Core – μA(x) = 1
- Support – μA(x) > 0
- α-cut – μA(x) ≥ α

## Q89
<div class="stem"><p>A direct mapped cache memory of size 1MB with block size 2KB has 9 bits in the tag. The size of main memory is</p></div>

## Q89 - Options
(A) 512 MB
(B) 128 MB
(C) 64 MB
(D) 32 MB

## Q89 - Hint
**Answer:** A  
**Topic:** Computer Organization – Cache Mapping

Direct-mapped address = Tag | Line | Offset.

**Step 1 – Offset:** block = 2 KB = 2¹¹ → 11 bits.  
**Step 2 – Line:** 1 MB / 2 KB = 2²⁰ / 2¹¹ = 2⁹ → 9 bits.  
**Step 3 – Tag:** 9 bits (given).  
**Step 4:** Address = 9 + 9 + 11 = 29 bits → memory = 2²⁹ B = **512 MB**.

## Q90
<div class="stem"><p>Arrange the following stages of parsing in the correct order as they typically occur in the compilation process.</p> <p>(A) Lexical Analysis</p> <p>(B) Sematic Analysis</p> <p>(C) Syntax Analysis</p> <p>(D) Intermediate Code Generation</p> <p>(E) Code Optimization</p> <p>Choose the correct answer from the options given below:</p></div>

## Q90 - Options
(A) (A), (B), (C), (D), (E)
(B) (A), (C), (B), (D), (E)
(C) (A), (D), (B), (C), (E)
(D) (A), (C), (D), (B), (E)

## Q90 - Hint
**Answer:** B  
**Topic:** Compiler Design – Phases

Order of compiler phases:  
Lexical analysis (A) → Syntax analysis (C) → Semantic analysis (B) → Intermediate code generation (D) → Code optimization (E).

## Q91
<div class="stem"><p>Let G be an undirected complete graph on n vertices, where n &gt; 2. Then, the number of different Hamiltonian cycles in G is equal to</p></div>

## Q91 - Options
(A) n!
(B) 1
(C) (n-1)!
(D) (n-1)!/2

## Q91 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Hamiltonian Cycles

In Kₙ, any ordering of the n vertices is a Hamiltonian cycle → n! orderings. But:

- The same cycle can **start at any of n vertices** → divide by n → (n−1)!
- Each cycle can be traversed in **2 directions** → divide by 2

Number = **(n − 1)! / 2**.

## Q92
<div class="stem"><p><img src="tests/img/t1/q92-a819b9.png"/></p></div>

## Q92 - Options
(A) A- II        B- IV        C- III          D- I
(B) A- III       B- IV        C- II           D- I
(C) A- I         B- III         C- IV         D- II
(D) A- II        B- IV        C- I            D- III

## Q92 - Hint
**Answer:** A  
**Topic:** Computer Graphics – 2D Transformations

Read each 3×3 homogeneous matrix:

- **A** = diag(2, 2, 1) → scale by 2 in x and y → **II** (scale(2,2))
- **B** has 2, 2 in the last column → move by (2, 2) → **IV** (translate)
- **C** = [[cos60, −sin60], [sin60, cos60]] (0.5, 0.866) → **rotate 60°** → **III**
- **D** = [[1, 2], [0, 1]] → x' = x + 2y → **x-shear by 2** → **I**

## Q93
<div class="stem"><p>Consider the grammar defined by the following production rules, with two operators ∗ and +</p> <p>    S --&gt; T * P</p> <p>    T --&gt; U | T * U</p> <p>    P --&gt; Q + P | Q</p> <p>    Q --&gt; Id</p> <p>    U --&gt; Id</p> <p>Which one of the following is TRUE?</p></div>

## Q93 - Options
(A) + is left associative, while ∗ is right associative
(B) + is right associative, while ∗ is left associative
(C) Both + and ∗ are right associative
(D) Both + and ∗ are left associative

## Q93 - Hint
**Answer:** B  
**Topic:** Compiler Design – Grammars (Associativity)

Rule of thumb: **left-recursive** production ⇒ left associative; **right-recursive** ⇒ right associative.

- T → T * U is **left-recursive** ⇒ * is **left associative**.
- P → Q + P is **right-recursive** ⇒ + is **right associative**.

## Q94
<div class="stem"><p>______ is the logical translation of the statement, “None of the solutions are correct”.</p></div>

## Q94 - Options
(A) ∃x(S(x)∧¬C(x))
(B) ∃x(¬S(x)∧C(x))
(C) ∃x(¬S(x)∧¬C(x))
(D) ¬∃x(S(x)∧C(x))

## Q94 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Predicate Logic

Let S(x): x is a solution; C(x): x is correct.

"None of the solutions are correct" = "There does **not exist** an x that is a solution **and** correct":

**¬∃x (S(x) ∧ C(x))** ≡ ∀x (S(x) → ¬C(x)).

(A) means "some solution is not correct" – weaker statement.

## Q95
<div class="stem"><p>Consider the two class classification task that consists of the following points:</p> <p>Class C1 : [1, -1], [-1, 1], [-1, -1]</p> <p>Class C2 : [1, 1]</p> <p>The decision boundary between the two classes C1 and C2 using single perceptron is given by:</p></div>

## Q95 - Options
(A) x1 - x2 - 0.5 = 0
(B) - x1 + x2 - 0.5 = 0
(C) 0.5(x1 + x2) - 1.5 = 0
(D) x1 + x2 - 0.5 = 0

## Q95 - Hint
**Answer:** D  
**Topic:** Machine Learning – Perceptron

We need a line with all C1 points on one side and the C2 point on the other. Test g(x) = x1 + x2 − 0.5:

| Point | Class | g |
|---|---|---|
| (1, 1) | C2 | 1.5 > 0 |
| (1, −1) | C1 | −0.5 < 0 |
| (−1, 1) | C1 | −0.5 < 0 |
| (−1, −1) | C1 | −2.5 < 0 |

This separates the classes perfectly (an AND-like boundary). Option (A) gives +1.5 for (1,−1), so it fails.

## Q96
<div class="stem"><p>Consider a fuzzy set</p> <p>X = {(20, 0) (30, 0.2) (40, 0.4) (60, 0.8) (70, 1) (80, 0.1)}. The X0.2 will be -</p></div>

## Q96 - Options
(A) {30, 40, 60, 70}
(B) {40, 60, 70}
(C) {60, 70}
(D) {20, 30, 40, 60, 70}

## Q96 - Hint
**Answer:** A  
**Topic:** Soft Computing – Fuzzy Sets (α-cut)

α-cut: X_α = { x | μ(x) ≥ α }.

For α = 0.2: 30 (0.2), 40 (0.4), 60 (0.8), 70 (1) qualify; 20 (0) and 80 (0.1) don't.

X₀.₂ = **{30, 40, 60, 70}**.

## Q97
<div class="stem"><p>Given the following statements :</p> (A) A class of languages that is closed under union and complementation has to be closed under intersection. (B) A class of languages that is closed under union and intersection has to be closed under complementation. <p> Which of the following options is correct ?</p></div>

## Q97 - Options
(A) Both (A) and (B) are false.
(B) Both (A) and (B) are true.
(C) (A) is true, (B) is false.
(D) (A) is false, (B) is true.

## Q97 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Closure Properties

- **(A) True.** By De Morgan, L1 ∩ L2 = complement( complement(L1) ∪ complement(L2) ) — only union and complement are used.
- **(B) False.** Counterexample: the class of **finite** languages is closed under union and intersection but **not** complement (complement of a finite language is infinite).

## Q98
<div class="stem"><p>Match the following with respect to RDBMS:</p> <p>(a) Entity integrity                 (i) enforces some specific business rule that do not fall into entity or domain</p> <p>(b) Domain integrity              (ii) Rows can't be deleted which are used by other records</p> <p>(c) Referential integrity        (iii) enforces valid entries for a column</p> <p>(d) Userdefined integrity       (iv) No duplicate rows in a table</p> <p>(a)   (b)   (c)  (d)</p></div>

## Q98 - Options
(A) (iii)  (iv)  (i)   (ii)
(B) (iv)  (iii)  (ii)   (i)
(C) (iv)  (ii)   (iii)  (i)
(D) (ii)   (iii)  (iv)  (i)

## Q98 - Hint
**Answer:** B  
**Topic:** DBMS – Integrity Constraints

- **Entity integrity** – primary key unique and non-null → no duplicate rows (iv)
- **Domain integrity** – valid values for a column (iii)
- **Referential integrity** – rows referenced by other records can't be deleted (ii)
- **User-defined integrity** – specific business rules (i)

## Q99
<div class="stem"><p>The Boolean expression for the output 'f' of the multiplexer shown below is    </p> <p><img src="tests/img/t1/q99-879c89.png"/></p></div>

## Q99 - Options
(A) (P⊕Q⊕R)’
(B) P⊕Q⊕R
(C) P+Q+R
(D) (P+Q+R)’

## Q99 - Hint
**Answer:** B  
**Topic:** Digital Logic – Multiplexer

4:1 MUX with selects P (MSB), Q and inputs I0 = R, I1 = R', I2 = R', I3 = R.

**Step 1:** f = P'Q'·R + P'Q·R' + PQ'·R' + PQ·R  
**Step 2:** Group: (P'Q' + PQ)·R + (P'Q + PQ')·R' = (P⊕Q)'·R + (P⊕Q)·R'  
**Step 3:** That is XNOR(X)·R + X·R' with X = P⊕Q, i.e. X ⊕ R.

f = **P ⊕ Q ⊕ R**.

## Q100
<div class="stem"><p>Which of the following is the correct decomposition of the directed graph given below into its strongly connected components?<br/> <img src="tests/img/t1/q100-baf263.png"/></p></div>

## Q100 - Options
(A) {P, Q, R, S}, {T}, {U}, {V}
(B) {P, Q, R, S, T, V}, {U}
(C) {P, Q, S, T, V}, {R}, {U}
(D) {P, Q, R, S, T, U, V}

## Q100 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Graph Theory (SCC)

Edges: P→Q, P→R, Q→R, Q→V, Q→T, V→T, R→T, R→S, S→P, T→S, T→U, S→U.

- Cycle P→Q→V→T→S→P puts **P, Q, V, T, S** together.
- P→R→S→P adds **R**.
- U has only incoming edges (T→U, S→U), nothing leaves U → U alone.

SCCs: **{P, Q, R, S, T, V}, {U}**.
