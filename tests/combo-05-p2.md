<!-- Combo Test 5 · Paper 2 (CSA) · original question numbers kept in the source data -->

## Q1
<div class="stem"><p>Consider the following statements:</p> <p>Statement I : A counting semaphore was initialized to 10. Then 6P (wait) operations and 4V (signal) operations were completed on this semaphore. The resulting value of the semaphore is 8.</p> <p>Statement II : Round Robin, Priority and SRTF scheduling algorithms may cause starvation.</p> <p>Choose the correct answer from the options given below?</p></div>

## Q1 - Options
(A) Both Statement I and Statement II are false
(B) Both Statement I and Statement II are true
(C) Statement I is false but Statement II is true
(D) Statement I is true but Statement II is false

## Q1 - Hint
**Answer:** D  
**Topic:** Operating Systems – Semaphores & Scheduling

- **I ✔** – each P decrements and each V increments: 10 − 6 + 4 = **8**.
- **II ✘** – Priority and SRTF can starve processes, but **Round Robin cannot**; every process gets the CPU within (n − 1)·q time.

## Q2
<div class="stem"><p>Given the following STUDENT-COURSE scheme: STUDENT (Rollno, Name, Courseno)    COURSE (Courseno, Coursename, Capacity), where Rollno is the primary key of relation STUDENT and Courseno is the primary key of relation COURSE. Attribute Coursename of COURSE  takes unique values only.  The number of records in COURSE and STUDENT tables are 3  and  5 respectively. Following  relational algebra query is</p> <p>executed: R=STUDENT X COURSE</p> <p>Match List I with List II in context to the above problem statement.</p> <p>List I                                                    List II</p> <p>A. Degree of table R                            I. 15</p> <p>B. Cardinality of table R                       II. NIL</p> <p>C. Foreign key of relation STUDENT     III. 6</p> <p>D. Foreign key of relation COURSE      IV. Courseno</p> <p>Choose the correct answer from the options given below:</p></div>

## Q2 - Options
(A) A -I , B -III , C -IV , D - II
(B) A -I , B -III , C -IV , D – II
(C) A -I , B -III, C -II , D – IV
(D) A -III , B -I , C -IV , D - II

## Q2 - Hint
**Answer:** D  
**Topic:** DBMS – Relational Algebra

R = STUDENT × COURSE:

- Degree = 3 + 3 = **6** (A-III)
- Cardinality = 5 × 3 = **15** (B-I)
- STUDENT's foreign key = **Courseno** (C-IV)
- COURSE has **no** foreign key (D-II)

## Q3
<div class="stem"><p>Consider an Ethernet segment with a transmission speed of 10<sup>8</sup> bits/sec and a maximum segment length of 500 meters. If the speed of propagation of the signal in the medium is 2×10<sup>8</sup> meters/sec, then the minimum frame size (in bits) required for collision detection is</p></div>

## Q3 - Options
(A) 500 bits
(B) 5000 bits
(C) 50 bits
(D) 62.5 Bytes

## Q3 - Hint
**Answer:** A  
**Topic:** Computer Networks – CSMA/CD

Collision detection needs transmission time ≥ 2 × propagation time.

**Step 1:** Tp = 500 m / (2 × 10⁸ m/s) = **2.5 μs** → round trip = 5 μs.  
**Step 2:** Minimum frame = bandwidth × 2Tp = 10⁸ × 5 × 10⁻⁶ = **500 bits**.

## Q4
<div class="stem"><p>Consider the following statements:</p> <p>P. There exists no simple, undirected and connected graph with 80 vertices and 77 edges.</p> <p>Q: All vertices of Euler graph are of even degree.</p> <p>R. Every simple, undirected, connected and acyclic graph with 50 vertices has at least two vertices of degree one.</p> <p>S. There exits a bipartite graph with more than ten vertices which is 2-colorable.</p> <p>What is the number of correct statements among the above statements.</p></div>

## Q4 - Options
(A) 1
(B) 2
(C) 3
(D) 4

## Q4 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Graph Theory

- **P ✔** – a connected graph on 80 vertices needs at least 79 edges.
- **Q ✔** – every vertex of an Eulerian graph has even degree.
- **R ✔** – a tree with ≥ 2 vertices has at least 2 leaves.
- **S ✔** – every bipartite graph is 2-colourable.

All **4** are correct.

## Q5
<div class="stem"><p>The simplified Boolean expression for the following K‐map to find F (A, B, C, D) in SOP:</p> <p><img src="tests/img/t5/q5-13b684.png"/></p></div>

## Q5 - Options
(A) BD + A̅BD̅ + A̅CD + ACD̅ + ABD
(B) BD + A̅BD̅ + A̅C̅D + ACD̅
(C) A̅BD̅ + A̅C̅D + ACD̅ + ABD
(D) A̅BC̅ + A̅CD + AC̅D + ABC

## Q5 - Hint
**Answer:** D  
**Topic:** Digital Logic – K-Map

Read the 1s (rows AB = 00, 01, 11, 10; columns CD = 00, 01, 11, 10): m3, m4, m5, m7, m9, m13, m14, m15.

Group them:

- **A'BC'** → (4, 5)
- **A'CD** → (3, 7)
- **AC'D** → (9, 13)
- **ABC** → (14, 15)

Together these cover every 1 with 4 pairs:  
F = A'BC' + A'CD + AC'D + ABC.

(Note: no quad exists — the 1s form a "pinwheel" pattern around the centre.)

## Q6
<div class="stem"><p>Identify the correct statement with respect to Evolutionary development.</p></div>

## Q6 - Options
(A) Evolutionary development usually has two flavours; exploratory development and throw-away prototyping
(B) Very large projects are usually done using evolutionary development based approach
(C) It facilitates easy project management, through the high volume of documentation it generates
(D) Sometimes the construction of a throw-away prototype is not followed by a re-implementation of the software system using a more structured approach

## Q6 - Hint
**Answer:** A  
**Topic:** Software Engineering – Process Models

Sommerville: evolutionary development has two flavours, **exploratory development** and **throw-away prototyping**. It suits small/medium systems and produces little documentation, and a throw-away prototype is always followed by a proper re-implementation.

## Q7
<div class="stem"><p>A1, A2, A3 and A4 are the four algorithms to solve the same problem and their efficiency classes are log(n), log(log(n)), nlog(n) and n<sup>2</sup> respectively. Which is the second best algorithm ?</p></div>

## Q7 - Options
(A) A1
(B) A2
(C) A3
(D) A4

## Q7 - Hint
**Answer:** B  
**Topic:** Algorithms – Growth of Functions

Rank from best (slowest growing) to worst:

1. **log log n** (A2)
2. **log n** (A1)
3. n log n (A3)
4. n² (A4)

The **best** is A2 and the **second best** is A1.

> **⚠ Note:** By this ranking the second-best algorithm is **A1 (log n)**, option (A). The key's (B) A2 is actually the best algorithm.

## Q8
<div class="stem"><p>The representation of 4 bit code 1101 into 7 bit, even parity Hamming code is</p></div>

## Q8 - Options
(A) (1010101)
(B) (1111001)
(C) (1011101)
(D) (1110000)

## Q8 - Hint
**Answer:** A  
**Topic:** Computer Networks – Hamming Code

Positions p1 p2 d3 p4 d5 d6 d7; data 1101 → d3 = 1, d5 = 1, d6 = 0, d7 = 1.

- p1 = d3 ⊕ d5 ⊕ d7 = 1⊕1⊕1 = **1**
- p2 = d3 ⊕ d6 ⊕ d7 = 1⊕0⊕1 = **0**
- p4 = d5 ⊕ d6 ⊕ d7 = 1⊕0⊕1 = **0**

Code = **1010101**.

## Q9
<div class="stem"><p>Consider the following threads, T<sub>1</sub>, T<sub>2</sub>, and T<sub>3</sub> executing on a single processor, synchronized using three binary semaphore variables, S<sub>1</sub>, S<sub>2</sub>, and S<sub>3</sub>, operated upon using standard wait() and signal(). The threads can be context switched in any order and at any time.</p> <p><img src="tests/img/t5/q9-077035.png"/></p> <p>Which initialization of the semaphores would print the sequence BCABCABCA?</p></div>

## Q9 - Options
(A) S1 = 1; S2 = 0; S3 = 0
(B) S1 = 1; S2 = 1; S3 = 1
(C) S1 = 1; S2 = 1; S3 = 0
(D) S1 = 0; S2 = 1; S3 = 1

## Q9 - Hint
**Answer:** A  
**Topic:** Operating Systems – Semaphores

Each thread waits on one semaphore and signals the next:

- T2: wait(S1) → print B → signal(S3)
- T1: wait(S3) → print C → signal(S2)
- T3: wait(S2) → print A → signal(S1)

To print **B first**, only T2 may start → **S1 = 1, S2 = 0, S3 = 0**. Then the chain B → C → A → B … repeats.

## Q10
<div class="stem"><p>Arrange the following examples of Artificial Intelligence (AI) in the order of increasing complexity :</p> <p>A. Spam email detection using rule-based systems.</p> <p>B. Handwritten digit recognition using shallow neural networks.</p> <p>C. Image classification using convolutional neural networks.</p> <p>D. Autonomous driving using reinforcement learning algorithms.</p> <p>Choose the correct answer from the options given below :</p></div>

## Q10 - Options
(A) A, B, C, D
(B) B, A, C, D
(C) A, B, D, C
(D) B, C, A, D

## Q10 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Applications

Increasing complexity:

1. Rule-based spam filter – fixed hand-written rules (A)
2. Digit recognition with a shallow neural net (B)
3. Image classification with deep CNNs (C)
4. Autonomous driving with reinforcement learning – real-time decisions in a dynamic environment (D)

## Q11
<div class="stem"><p>Select the 'False' statement from the following statements about Normal Forms</p></div>

## Q11 - Options
(A) Lossless preserving decomposition into 3NF is always possible
(B) Lossless preserving decomposition into BCNF is always possible
(C) Any Relation with two attributes is in BCNF
(D) BCNF is stronger than 3NF

## Q11 - Hint
**Answer:** B  
**Topic:** DBMS – Normal Forms

- (A) ✔ – a lossless, dependency-preserving 3NF decomposition always exists.
- **(B) ✘** – a lossless BCNF decomposition always exists, but it **may not preserve dependencies**. The statement ("lossless preserving") is treated as the false one.
- (C) ✔ – any two-attribute relation is in BCNF.
- (D) ✔ – BCNF is stricter than 3NF.

## Q12
<div class="stem"><p>Of the following sort algorithms, which has execution time that is least dependent on initial ordering of the input ?</p></div>

## Q12 - Options
(A) Insertion sort
(B) Quick sort
(C) Merge sort
(D) Selection sort

## Q12 - Hint
**Answer:** C  
**Topic:** Algorithms – Sorting

Merge sort always splits in half and merges → **Θ(n log n) in every case**, whatever the input order.

Insertion sort is O(n) on sorted input and O(n²) on reverse order; quick sort degrades to O(n²) on sorted input with a poor pivot.

(Selection sort is also always Θ(n²) comparisons; the standard answer is merge sort.)

## Q13
<div class="stem"><p>Consider a program that consists of 8 pages (from 0 to 7) and we have 4 page frames in the physical memory for the pages. The page reference string is :</p> <p>1 2 3 2 5 6 3 4 6 3 7 3 1 5 3 6 3 4 2 4 3 4 5 1</p> <p>The number of page faults in LRU and optimal page replacement algorithms are respectively (without including initial page faults to fill available page frames with pages):</p></div>

## Q13 - Options
(A) 9 and 6
(B) 10 and 7
(C) 9 and 7
(D) 10 and 6

## Q13 - Hint
**Answer:** B  
**Topic:** Operating Systems – Page Replacement

String (24 references), 4 frames. The first 4 distinct pages (1, 2, 3, 5) only fill the frames and are **not counted**.

**LRU** (evict the page whose last use is oldest), from the first replacement:

| Ref | Evict | Frames after |
|---|---|---|
| 6 | 1 | 2 3 5 6 |
| 4 | 2 | 3 4 5 6 |
| 7 | 5 | 3 4 6 7 |
| 1 | 4 | 1 3 6 7 |
| 5 | 6 | 1 3 5 7 |
| 6 | 7 | 1 3 5 6 |
| 4 | 1 | 3 4 5 6 |
| 2 | 5 | 2 3 4 6 |
| 5 | 6 | 2 3 4 5 |
| 1 | 2 | 1 3 4 5 |

All other references are hits → LRU faults = **10**.

**Optimal** (evict the page used farthest in the future):

| Ref | Evict | Frames after |
|---|---|---|
| 6 | 2 | 1 3 5 6 |
| 4 | 5 | 1 3 6 4 |
| 7 | 4 | 1 3 6 7 |
| 5 | 7 | 1 3 6 5 |
| 4 | 6 | 1 3 5 4 |
| 2 | 1 | 3 5 4 2 |
| 1 | – | (last reference, any victim) |

Optimal faults = **7**.

## Q14
<div class="stem"><p>If a processor has 32-bit virtual address, 28-bit physical address, 2 kB page size How many bits are required for the virtual, physical page number?</p></div>

## Q14 - Options
(A) 17,21
(B) 21,17
(C) 6,10
(D) 10,6

## Q14 - Hint
**Answer:** B  
**Topic:** Operating Systems – Paging

Offset = log₂(2 KB) = 11 bits.

- VPN = 32 − 11 = **21**
- PFN = 28 − 11 = **17**

## Q15
<div class="stem"><p>Consider a system with twelve magnetic tape drives and three processes P1, P2 and P3. Process P1 requires maximum ten tape drives, process P2 may need as many as four tape drives and P3 may need up to nine tape drives. Suppose that at time t1, process P1 is holding five tape drives, process P2 is holding two tape drives and process P3 is holding three tape drives. At time t1, system is in:</p></div>

## Q15 - Options
(A) safe state
(B) unsafe state
(C) deadlocked state
(D) starvation state

## Q15 - Hint
**Answer:** B  
**Topic:** Operating Systems – Banker's Algorithm

Held: P1 = 5, P2 = 2, P3 = 3 → total 10 → **available = 2**.

Remaining need: P1 = 10 − 5 = 5; P2 = 4 − 2 = 2; P3 = 9 − 3 = 6.

- P2 (needs 2 ≤ 2) can finish → releases 2 → available = 4.
- P1 needs 5 > 4 ✘; P3 needs 6 > 4 ✘.

No safe sequence → **unsafe state** (not necessarily deadlocked yet).

## Q16
<div class="stem"><p>Consider the following database table having A, B, C and D as its four attributes and four possible candidate keys (I, II, III and IV) for this table :</p> <p>I : {B}</p> <p>II : {B, C}</p> <p>III : {A, D}</p> <p>IV : {C, D}</p> <p>If different symbols stand for different values in the table</p> <table> <tbody> <tr> <td> <p>A</p> </td> <td> <p>B</p> </td> <td> <p>C</p> </td> <td> <p>D</p> </td> </tr> <tr> <td> <p>a1</p> </td> <td> <p>b1</p> </td> <td> <p>c1</p> </td> <td> <p>d1</p> </td> </tr> <tr> <td> <p>a2</p> </td> <td> <p>b3</p> </td> <td> <p>c3</p> </td> <td> <p>d1</p> </td> </tr> <tr> <td> <p>a1</p> </td> <td> <p>b2</p> </td> <td> <p>c1</p> </td> <td> <p>d2</p> </td> </tr> </tbody> </table> <p>(e.g., d1 is definitely not equal to d2), then which of the above could not be the candidate key for the database table ?</p></div>

## Q16 - Options
(A) I and III only
(B) III and IV only
(C) II only
(D) I only

## Q16 - Hint
**Answer:** C  
**Topic:** DBMS – Candidate Keys

Tuples: (a1, b1, c1, d1), (a2, b3, c3, d1), (a1, b2, c1, d2).

- **{B}:** b1, b3, b2 all distinct → unique ✔ (could be a key)
- **{B, C}:** unique, but contains {B} → **not minimal** → **cannot be a candidate key** ✘
- **{A, D}:** (a1,d1), (a2,d1), (a1,d2) distinct ✔
- **{C, D}:** (c1,d1), (c3,d1), (c1,d2) distinct ✔

Only **II** can't be a candidate key.

## Q17
<div class="stem"><p>Match List 1 with List 2 and choose the correct answer from the code given below</p> <table> <tbody> <tr> <td> </td> <td> <p>List 1</p> </td> <td> <p>List 2</p> </td> </tr> <tr> <td> <p>(a)</p> </td> <td> <p>Greedy Best-first Search</p> </td> <td> <p>(i) Selects a node for expansion if optimal path to that node has been found</p> </td> </tr> <tr> <td> <p>(b)</p> </td> <td> <p>A* Search</p> </td> <td> <p>(ii) Avoids substantial overhead associated with keeping the sorted queue of node</p> </td> </tr> <tr> <td> <p>(c)</p> </td> <td> <p>Recursive Best-first sear</p> </td> <td> <p>(iii) Suffers from excessive node generation</p> </td> </tr> <tr> <td> <p>(d)</p> </td> <td> <p>Iterative-deepening A* Search</p> </td> <td> <p>(iv) Time complexity depends upon the quality of heuristic.</p> </td> </tr> </tbody> </table></div>

## Q17 - Options
(A) (a)-(iv), (b)-(iii), (c) -(ii), (d)-(i)
(B) (a)-(i), (b)-(iv), (c) -(iii), (d)-(ii)
(C) (a)-(iv), (b)-(i), (c) -(ii), (d)-(iii)
(D) (a)-(i), (b)-(ii), (c) -(iii), (d)-(iv)

## Q17 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Informed Search

As per the key:

- Greedy best-first → (i)
- **A\*** → time complexity depends on the **quality of the heuristic** (iv)
- **RBFS** → suffers from **excessive node regeneration** (iii)
- **IDA\*** → avoids the overhead of a **sorted priority queue** (ii)

## Q18
<div class="stem"><p>An IPv4 packet has arrived with the first few hexadecimal digits as shown below. How many hops can this packet travel before being dropped? The data belong to what upper-layer protocol?(5 4 0 0 0 0 18 0 0 10 01 10 0 4 0 6 0 1.......)16</p></div>

## Q18 - Options
(A) 01 hops, TCP
(B) 02 hops, UDP
(C) 03 hops, ICMP
(D) 4 hops, TCP

## Q18 - Hint
**Answer:** D  
**Topic:** Computer Networks – IPv4 Header

Decode the header bytes in order:

- 4 | 5 → version 4, HLEN 5 (20 bytes); 00 → service type; 0018 → total length; 0010 → identification; 0100 → flags/offset
- **TTL = 04** → the packet can travel **4 more hops**
- **Protocol = 06** → **TCP** (17 = UDP, 1 = ICMP)

## Q19
<div class="stem"><p>First order logic Statements contains______.</p></div>

## Q19 - Options
(A) Predicate and Preposition
(B) Subject and an Object
(C) Predicate and Subject
(D) None of the above

## Q19 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – First-Order Logic

An FOL statement has a **subject** (what it is about) and a **predicate** (a property or relation), e.g. in "x is an integer", x is the subject and "is an integer" the predicate.

## Q20
<div class="stem"><p>An attribute A of datatype varchar (20) has value ‘Ram’ and the attribute B of datatype char (20) has value ‘Sita’ in oracle. The attribute A has _______ memory spaces and B has _______ memory spaces.</p></div>

## Q20 - Options
(A) 20,20
(B) 3,20
(C) 3,4
(D) 20,4

## Q20 - Hint
**Answer:** B  
**Topic:** DBMS – Data Types

- **VARCHAR(20)** stores only the actual characters → 'Ram' uses **3**.
- **CHAR(20)** is fixed length, padded with blanks → 'Sita' uses **20**.

## Q21
<div class="stem"><p>Match the following port numbers with their uses: </p> <p>(a) Forwar Reference Table         (i) Assembler directive </p> <p>(b) Mnemonic Table                     (ii) Uses array data structure</p> <p>(c) Segment Register Table         (iii) Contains machine OP code</p> <p>(d) EQU                                       (iv) Uses linked list data structure</p> <p>Codes : a b c d</p></div>

## Q21 - Options
(A) (ii) (iii) (iv) (i)   
(B) (iii) (iv) (ii) (i)
(C) (iv) (i) (iii) (ii)
(D) (iv) (iii) (ii) (i)

## Q21 - Hint
**Answer:** D  
**Topic:** System Software – Assembler

- Forward reference table → **linked list** (iv)
- Mnemonic (opcode) table → machine **op codes** (iii)
- Segment register table → **array** (ii)
- EQU → **assembler directive** (i)

## Q22
<div class="stem"><p>Consider a 3-bit counter, designed using T flip-flop, as shown below:</p> <p> <img src="tests/img/t5/q22-e447b5.png"/></p> <p>Assuming the initial state of the counter given by PQR as 000, what are the next three states?</p></div>

## Q22 - Options
(A) 001, 010, 000
(B) 001, 010, 111
(C) 011, 101, 111
(D) 011, 101, 000

## Q22 - Hint
**Answer:** D  
**Topic:** Digital Logic – Counters

From the circuit: T_P = R, T_Q = P', T_R = Q'. A T flip-flop toggles when T = 1: next = present ⊕ T.

| Present PQR | T_P = R | T_Q = P' | T_R = Q' | Next PQR |
|---|---|---|---|---|
| 000 | 0 | 1 | 1 | **011** |
| 011 | 1 | 1 | 0 | **101** |
| 101 | 1 | 0 | 1 | **000** |

Next three states: 011, 101, 000.

## Q23
<div class="stem"><p>Let Σ = {a, b} and language L = {aa, bb}. Then, the complement of L is</p></div>

## Q23 - Options
(A) {λ, a, b, ab, ba} ∪ {w∈{a, b}* | |w| &gt; 3}
(B) {a, b, ab, ba} ∪ {w∈{a, b}* | |w| &gt; 3}
(C) {w ∈ { a, b}* | |w| &gt; 3} ∪ {a, b, ab, ba}
(D) {λ, a, b, ab, ba} ∪ {w ∈ {a, b}* | |w| ≥ 3}

## Q23 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Complement

Complement of L = Σ\* − {aa, bb}:

- Length 0: λ
- Length 1: a, b
- Length 2: ab, ba (aa, bb removed)
- **All strings of length ≥ 3**

= {λ, a, b, ab, ba} ∪ {w : |w| ≥ 3}. Options (A) and (C) wrongly start at |w| > 3, missing length-3 strings.

## Q24
<div class="stem"><p>Let Ri(A) and Wi(A) denote read and write operations respectively on a data item A by a transaction T. Consider the following schedule.</p> <p>S : R1(A) , W2(A) , R3(A) , W1(A) , W3(A)</p> <p>Which one of the following options is correct?</p></div>

## Q24 - Options
(A) S is conflict serializable but not view serializable
(B) S is not conflict serializable but view serializable
(C) S is both conflict serializable and view serializable
(D) Neither conflict serializable nor view serializable

## Q24 - Hint
**Answer:** B  
**Topic:** DBMS – Serializability

S: R1(A), W2(A), R3(A), W1(A), W3(A).

- R1(A) → W2(A): T1 → T2; W2(A) → W1(A): T2 → T1 → **cycle** → not conflict serializable.
- Serial order T1, T2, T3 gives the same initial read, the same read-from (T3 reads T2's write) and the same final write (T3) → **view serializable** (blind writes).

## Q25
<div class="stem"><p>Which of the following mechanisms is intended to ensure the users, processes or threads are allowed to use secure entities in the computer only if the protection policy permits such use?</p></div>

## Q25 - Options
(A) Authentication
(B) Denial of service
(C) Authorization
(D) Masquerading

## Q25 - Hint
**Answer:** C  
**Topic:** Operating Systems – Security

- **Authentication** – verifies **who** you are.
- **Authorization** – decides **what** you may access, according to the protection policy ✔
- Masquerading – pretending to be someone else (an attack).

## Q26
<div class="stem"><p>The correct matching for the following pairs is</p> <p>(A) DMA I/O                                      (1) High speed RAM</p> <p>(B) Cache                                         (2) Disk</p> <p>(C) Interrupt I/O                                (3) Printer</p> <p>(D) Condition Code Register            (4) ALU</p></div>

## Q26 - Options
(A) A – 4 B – 3 C – 1 D – 2
(B) A – 2 B – 1 C – 3 D – 4
(C) A – 4 B – 1 C – 2 D – 3
(D) A – 2 B – 3 C – 4 D – 1

## Q26 - Hint
**Answer:** B  
**Topic:** Computer Organization – I/O & Registers

- DMA I/O → bulk transfer devices such as the **disk** (2)
- Cache → **high-speed RAM** (1)
- Interrupt I/O → slow devices such as a **printer** (3)
- Condition code register → status flags set by the **ALU** (4)

## Q27
<div class="stem"><p>Given relations R(w,x) and S(y,z), the result of</p> <p>SELECT DISTINCT w, x</p> <p>FROM R, S</p> <p>Is guaranteed to be same as R, if</p></div>

## Q27 - Options
(A) R has no duplicates and S is non-empty
(B) R and S have no duplicates
(C) S has no duplicates and R is non-empty
(D) R and S have the same number of tuples

## Q27 - Hint
**Answer:** A  
**Topic:** DBMS – SQL Semantics

FROM R, S is a Cartesian product.

- If S is **empty**, R × S is empty → the result is empty, not R.
- If S has k ≥ 1 rows, each R row repeats k times; **DISTINCT** removes the repeats → the result equals R **only if R itself has no duplicates**.

So: R has no duplicates and S is non-empty.

## Q28
<div class="stem"><p>A scheduling Algorithm assigns priority proportional to the waiting time of a process. Every process starts with priority zero (lowest priority). The scheduler reevaluates the process priority for every ‘T’ time units and decides next process to be scheduled. If the process have no I/O operations and all arrive at time zero, then the scheduler implements _________ criteria.</p></div>

## Q28 - Options
(A) Priority scheduling
(B) Round Robin Scheduling
(C) Shortest Job First
(D) FCFS

## Q28 - Hint
**Answer:** B  
**Topic:** Operating Systems – CPU Scheduling

Priority grows with **waiting time**, and priorities are re-evaluated every T units. The process that has waited longest always gets the CPU next for T units, then its waiting time resets to 0 → it goes to the back. That is exactly **Round Robin** with quantum T.

## Q29
<div class="stem"><p>Following declaration of an array of struct, assumes size of byte, short, int and long are 1, 2, 3 and 4 respectively. Alignment rule stipulates that n-byte field must be located at an address divisible by n. The fields in a struct are not rearranged, padding is used to ensure alignment. All elements of array should be of same size.</p> <p>Struct complx</p> <p>Short s</p> <p>Byte b</p> <p>Long l</p> <p>Int i</p> <p>End complx</p> <p>Complx C[10]</p> <p>Assuming C is located at an address divisible by 8, what is the total size of C, in Bytes ?</p></div>

## Q29 - Options
(A) 150
(B) 160
(C) 200
(D) 240

## Q29 - Hint
**Answer:** B  
**Topic:** Computer Organization – Structure Alignment

Sizes: short 2, byte 1, long 4, int 3; an n-byte field must sit at an address divisible by n.

**Laying out one element starting at offset 0:**

- short s → 0–1
- byte b → 2
- long l → needs a multiple of 4 → 4–7 (pad at 3)
- int i → needs a multiple of 3 → 9–11 (pad at 8)

That's 12 bytes, and 12 keeps every field aligned for all array elements (12k + 4 is divisible by 4; 12k + 9 by 3) → 10 × 12 = 120 bytes.

The key instead adds the raw sizes (2 + 1 + 4 + 3 = 10) and rounds each element up to 16 (a multiple of 8) → 10 × 16 = **160**.

> **⚠ Note:** With these unusual sizes (int = 3), strict alignment gives **120 bytes**, which is not an option. The key's 160 comes from rounding each element to 16 bytes. (The original GATE version, with int = 4 and long = 8, gives 240.)

## Q30
<div class="stem"><p>Set of key attributes that identify weak entities related to some owner entity is classified as:</p></div>

## Q30 - Options
(A) Structural key
(B) String key
(C) Partial key
(D) Foreign key

## Q30 - Hint
**Answer:** C  
**Topic:** DBMS – Weak Entities

A weak entity is identified by its owner's key plus its own **partial key** (discriminator), the attributes that distinguish weak entities belonging to the same owner.

## Q31
<div class="stem"><p>To guarantee correction of upto t errors, the minimum Hamming distance d min in a block code must be ________.</p></div>

## Q31 - Options
(A) t+1
(B) t−2
(C) 2t−1
(D) 2t+1

## Q31 - Hint
**Answer:** D  
**Topic:** Computer Networks – Error Correction

To **correct** t errors, the code words must be at least **2t + 1** apart, so a received word with ≤ t errors is still closest to the original. (To **detect** s errors: d_min ≥ s + 1.)

## Q32
<div class="stem"><p>The sequence of fields is an IP datagram will be:</p> <p>A. flags</p> <p>B. options</p> <p>C. Protocol</p> <p>D. Identification</p> <p>E. Service type</p> <p>Choose the correct answer from the options given below:</p></div>

## Q32 - Options
(A) E, D, A, C, В
(B) D, A, B, C, E
(C) D, E, C, B, A
(D) E, C, D, A, B

## Q32 - Hint
**Answer:** A  
**Topic:** Computer Networks – IPv4 Header

IPv4 header field order: Version, HLEN, **Service type (E)**, Total length, **Identification (D)**, **Flags (A)**, Fragment offset, TTL, **Protocol (C)**, Checksum, Source IP, Destination IP, **Options (B)**.

Order: E, D, A, C, B.

## Q33
<div class="stem"><p>In software maintenance tackling the changes in the hardware or software environment where the software works, is</p></div>

## Q33 - Options
(A) Corrective maintenance
(B) Perfective maintenance
(C) Adaptive maintenance
(D) Preventive maintenance

## Q33 - Hint
**Answer:** C  
**Topic:** Software Engineering – Maintenance

Changing software so it keeps working in a **new hardware or software environment** is **adaptive maintenance**.

## Q34
<div class="stem"><p>The number of different spanning trees in complete graph, K4 and bipartite graph K2,2 have .......... and .....…. respectively.</p></div>

## Q34 - Options
(A) 14, 14
(B) 16, 14
(C) 16, 4
(D) 14, 4

## Q34 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Spanning Trees

- K₄: Cayley → 4^(4−2) = **16**
- K₂,₂ (a 4-cycle): 2¹ × 2¹ = **4**

## Q35
<div class="stem"><p>The strategy used to reduce the number of tree branches and the number of static evaluations applied in case of a game tree is</p></div>

## Q35 - Options
(A) Minmax strategy   
(B) Alpha-beta pruning strategy   
(C) Constraint satisfaction strategy   
(D) Static max strategy

## Q35 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Game Playing

**Alpha–beta pruning** skips branches that can't affect the minimax decision, reducing both the number of branches explored and the number of static evaluations.

## Q36
<div class="stem"><p>If G is a grammar with productions</p> <p>S → SaS | aSb | bSa | SS | ∈</p> <p>Where S is the start variable. Then which one of the following strings in not generated by G?</p></div>

## Q36 - Options
(A) abab
(B) aaab
(C) abbaa
(D) babba

## Q36 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Context-Free Grammars

Look at what each production adds:

- aSb and bSa add **one a and one b**
- SaS adds **one extra a**
- SS and ε add nothing

So every generated string has **#a ≥ #b**.

| String | a | b | Possible? |
|---|---|---|---|
| abab | 2 | 2 | ✔ |
| aaab | 3 | 1 | ✔ |
| abbaa | 3 | 2 | ✔ |
| **babba** | 2 | 3 | ✘ |

## Q37
<div class="stem"><p>Consider the statement, “Either – 2 ≤ x ≤ – 1 or 1 ≤ x ≤2”. The negation of this statement is</p></div>

## Q37 - Options
(A) x &lt; – 2 or 2 &lt; x or – 1 &lt; x &lt; 1
(B) x &lt; – 2 or 2 &lt; x
(C) – 1 &lt; x &lt; 1
(D) x ≤ – 2 or 2 &lt; x or – 1 &lt; x &lt; 1

## Q37 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Negation

Statement: x ∈ [−2, −1] **or** x ∈ [1, 2].

Negation = x is in **neither** interval:

- x < −2, or
- −1 < x < 1 (the gap between them), or
- x > 2

= "x < −2 or 2 < x or −1 < x < 1".

(D) is wrong because it uses x ≤ −2, which wrongly includes −2.

## Q38
<div class="stem"><p>In __________ disk scheduling algorithm, the disk head moves from one end to other end of the disk, serving the requests along the way. When the head reaches the other end, it immediately returns to the beginning of the disk without serving any requests on the return trip.</p></div>

## Q38 - Options
(A) LOOK
(B) SCAN
(C) C-LOOK
(D) C-SCAN

## Q38 - Hint
**Answer:** D  
**Topic:** Operating Systems – Disk Scheduling

**C-SCAN**: serve requests from one end to the other, then jump straight back to the start **without serving** on the return trip.

## Q39
<div class="stem"><p>Consider the following program fragment in assembly language :</p> <p>mov ax, 0h</p> <p>mov cx, 0A h</p> <p>doloop :</p> <p>dec ax</p> <p>loop doloop</p> <p>What is the value of ax and cx registers after the completion of the doloop ?</p></div>

## Q39 - Options
(A) ax=FFF5 h and cx=0 h
(B) ax=FFF6 h and cx=0 h
(C) ax=FFF7 h and cx=0A h
(D) ax=FFF5 h and cx=0A h

## Q39 - Hint
**Answer:** B  
**Topic:** Computer Organization – Assembly (8086)

- ax = 0, cx = 0Ah = 10.
- The `loop` instruction decrements cx and jumps while cx ≠ 0 → the body runs **10 times**.
- ax is decremented 10 times: 0 − 10 = −10 = **FFF6h** (16-bit two's complement).
- cx ends at **0**.

## Q40
<div class="stem"><p>In the case of parallelization, Amdahl’s law states that if P is the proportion of a program that can be made parallel and (1 - P) is the proportion that cannot be parallelized, then the maximum speed-up that can be achieved by using N processors is:</p></div>

## Q40 - Options
(A) <em>[Figure from original not available]</em>
(B) <em>[Figure from original not available]</em>
(C) <em>[Figure from original not available]</em>
(D) <em>[Figure from original not available]</em>

## Q40 - Hint
**Answer:** C  
**Topic:** Computer Organization – Amdahl's Law

Amdahl's law: Speed-up = 1 / [ (1 − P) + P / N ].

The serial part (1 − P) is unaffected by N; the parallel part P is divided among N processors. As N → ∞, speed-up → 1 / (1 − P).

> **⚠ Note:** The option formulas were images that are missing from the source. Choose the option matching 1 / ((1 − P) + P/N); the key is (C).

## Q41
<div class="stem"><p>If we use internal data forwarding to speed up the performance of a CPU (R1, R2 and R3 are registers and M[100] is a memory reference), then the sequence of operations</p> <p>R1 → M[100]</p> <p>M[100] → R2</p> <p>M[100] → R3</p> <p>can be replaced by</p></div>

## Q41 - Options
(A) R1 → R3, R2 → M[100]
(B) M[100] → R2, R1 → R2, R1 → R3
(C) R1 → M[100], R2 → R3
(D) R1 → R2, R1 → R3, R1 → M[100]

## Q41 - Hint
**Answer:** D  
**Topic:** Computer Organization – Data Forwarding

R1 is stored to M[100], and then M[100] is read twice. With forwarding, the CPU can pass **R1 directly** to R2 and R3 without re-reading memory, and still perform the store:

R1 → R2, R1 → R3, R1 → M[100].

## Q42
<div class="stem"><p>A horn clause is ......................</p></div>

## Q42 - Options
(A) A clause in which no variables occur in the expression   
(B) A clause that has at least one negative literal   
(C) A dis junction of a number of literals   
(D) A clause that has at most one positive literal

## Q42 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Logic

A **Horn clause** is a disjunction of literals with **at most one positive literal**, e.g. ¬A ∨ ¬B ∨ C ≡ (A ∧ B) → C. Horn clauses allow efficient forward and backward chaining.

## Q43
<div class="stem"><p>Which of the following devices takes data sent from one network device and forwards it to the destination node based on MAC address ?</p></div>

## Q43 - Options
(A) Hub
(B) Modem
(C) Switch
(D) Gateway

## Q43 - Hint
**Answer:** C  
**Topic:** Computer Networks – Devices

A **switch** (layer 2) learns MAC addresses and forwards a frame only to the port of the destination MAC. A hub broadcasts to all ports; a gateway connects different protocols.

## Q44
<div class="stem"><p>Suppose an organization want 6 subnets, and each subnet has at least 22 hosts. What subnet mask should the organization use to fulfil the above condition?</p></div>

## Q44 - Options
(A) 255.255.255.128
(B) 255.255.255.224
(C) 255.255.255.240
(D) 255.255.255.255

## Q44 - Hint
**Answer:** B  
**Topic:** Computer Networks – Subnetting

6 subnets → 3 subnet bits (2³ = 8); host bits = 5 → 30 hosts ≥ 22 ✔. Mask = 11100000 = **255.255.255.224**.

## Q45
<div class="stem"><p>Identify the true statement from the given statements</p> <p>(1) Number of child pointers in a B/ B+ tree node is always equal to number of keys in it plus one.</p> <p>(2) B/B tree is defined by a term minimum depends on hard disk block size, key and address sizes.</p></div>

## Q45 - Options
(A) (1)
(B) (1) and (2)
(C) (2)
(D) None of these

## Q45 - Hint
**Answer:** B  
**Topic:** Data Structures – B/B+ Trees

- **(1) ✔** – an internal node with n keys has **n + 1** child pointers.
- **(2) ✔** – the minimum degree (order) of a B/B+ tree is chosen so a node fits a **disk block**, so it depends on block size, key size and pointer size.

## Q46
<div class="stem"><p>Which of the following statements is/are True?</p> <p>P : C programming language has a weak type system with static types.</p> <p>Q : Java programming language has a strong type system with static types. Code:</p></div>

## Q46 - Options
(A) P only
(B) Q only
(C) Both P and Q
(D) Neither P nor Q

## Q46 - Hint
**Answer:** C  
**Topic:** Programming Languages – Type Systems

- **P ✔** – C is statically typed (types checked at compile time) but **weakly** typed (implicit conversions, unchecked casts, pointer tricks).
- **Q ✔** – Java is statically and **strongly** typed (no unchecked casts; type errors are caught).

## Q47
<div class="stem"><p>Consider a triangle PQR with coordinates as P(0,0), Q(2,2) and R(10,4). If this triangle is to be magnified to four times its size while keeping R(10, 4) fixed, then the coordinates of the magnified triangle are:</p></div>

## Q47 - Options
(A) (-20 -12), Q(-20, -4) and R(10, 4)
(B) (-30, -12), Q(-22, -4) and R(10, 4)
(C) (-25, -10), Q(-22,  -4) and R(10, 4)
(D) (-30, -12), Q(-22,  -4) and R(10, 4)

## Q47 - Hint
**Answer:** B  
**Topic:** Computer Graphics – Scaling about a Fixed Point

Scale by 4 about R(10, 4): P' = R + 4(P − R).

- **P:** (10,4) + 4(0−10, 0−4) = (10,4) + (−40,−16) = **(−30, −12)**
- **Q:** (10,4) + 4(2−10, 2−4) = (10,4) + (−32,−8) = **(−22, −4)**
- **R** stays (10, 4).

> **⚠ Note:** Options (B) and (D) are identical in the source; both match the result.

## Q48
<div class="stem"><p>Software does not wear-out in the traditional sense of the term, but software does tend to deteriorate as it evolves, because :</p></div>

## Q48 - Options
(A) Software suffers from exposure to hostile environments.
(B) Defects are more likely to arise after software has been used often.
(C) Multiple change requests introduce errors in component interactions.
(D) Software spare parts become harder to order

## Q48 - Hint
**Answer:** C  
**Topic:** Software Engineering – Software Characteristics

Software doesn't physically wear out, but each **change request** risks introducing new defects in component interactions. Over many changes the failure rate rises again, so software **deteriorates**.

## Q49
<div class="stem"><p>How many total bits are required for a direct-mapped cache with 128 KB of data and 1 word block size, assuming a 32-bit address and 1 word size of 4 bytes ?</p></div>

## Q49 - Options
(A) 2 Mbits
(B) 1.7 Mbits
(C) 2.5 Mbits
(D) 1.5 Mbits

## Q49 - Hint
**Answer:** D  
**Topic:** Computer Organization – Cache Size

**Step 1 – Lines:** 128 KB / 4 B = 32K = 2¹⁵ lines → index = 15 bits.  
**Step 2 – Offset:** 4 B block → 2 bits.  
**Step 3 – Tag:** 32 − 15 − 2 = **15 bits**.  
**Step 4 – Bits per line:** 32 (data) + 15 (tag) + 1 (valid) = **48**.  
**Step 5 – Total:** 2¹⁵ × 48 = 1,572,864 bits = **1.5 Mbits**.

## Q50
<div class="stem"><p>Consider the following algorithms and their running times:</p> <table> <tbody> <tr> <td> <p>Algorithms</p> </td> <td> <p>Complexities</p> </td> </tr> <tr> <td> <p>A. Breadth First Search</p> </td> <td> <p>I. Θ(v + E)</p> </td> </tr> <tr> <td> <p>B. Rabin-Karp Algorithms</p> </td> <td> <p>II. O(v + E)</p> </td> </tr> <tr> <td> <p>C. Depth First Search</p> </td> <td> <p>III. Θ((n – m -1)m)</p> </td> </tr> <tr> <td> <p>D. Heap Sort (Worst Case)</p> </td> <td> <p>IV. O(n2)</p> </td> </tr> <tr> <td> <p>E. Quick Sort(Worst sort)</p> </td> <td> <p>V. O(n lg n)</p> </td> </tr> </tbody> </table> <p>Which one of the following is correct</p></div>

## Q50 - Options
(A) A-III, B-II, C-I, D-IV, E-V
(B) A-II, B-III, C-I, D-IV, E-V
(C) A-II, B-III, C-I, D-V, E-IV
(D) A-III, B-I, C-II, D-IV, E-V

## Q50 - Hint
**Answer:** C  
**Topic:** Algorithms – Complexities

- BFS → **O(V + E)** (II) (only reachable vertices are visited)
- Rabin–Karp worst case → **Θ((n − m + 1)m)** (III)
- DFS → **Θ(V + E)** (I) (visits every vertex and edge)
- Heap sort worst → **O(n log n)** (V)
- Quick sort worst → **O(n²)** (IV)

## Q51
<div class="stem"><p>To overcome difficulties in Readers-Writers problem, which of the following statement/s is/are true ?</p> <p>Writers are given exclusive access to shared objects</p> <p>Readers are given exclusive access to shared objects</p> <p>Both readers and writers are given exclusive access to shared objects.</p> <p>Choose the correct answer from the code given below:</p></div>

## Q51 - Options
(A) 1 only
(B) Both 2 and 3
(C) 2 only
(D) 3 only

## Q51 - Hint
**Answer:** A  
**Topic:** Operating Systems – Readers–Writers

Readers only read, so many can share the data at once. A writer changes the data, so it needs **exclusive** access (no other readers or writers). Only statement 1 is true.

## Q52
<div class="stem"><p>The following Finite Automaton recognizes which of the given languages?</p> <p><img src="tests/img/t5/q52-2c04cc.png"/></p></div>

## Q52 - Options
(A) {1, 0}* {01}
(B) {1, 0}* {1}
(C) {1}{1, 0}* {1}
(D) 1*0* {0, 1}

## Q52 - Hint
**Answer:** A  
**Topic:** Theory of Computation – Finite Automata

Transitions: A –1→ A, A –0→ B; B –0→ B, B –1→ C (final); C –0→ B, C –1→ A.

C is reached only by reading **0 then 1**, and any other symbol sends us back to A or B. So the DFA accepts exactly the strings **ending in "01"** → {0, 1}\* {01}.

## Q53
<div class="stem"><p>Match List-I with List-II:</p> <p>List - I                                                         List - II</p> <p>A. Channelization protocol                         I. ALOHA</p> <p>B. Bit-oriented protocol                              II. TDMA</p> <p>C. Random-access protocol                      III. Reservation</p> <p>D. Controlled-access protocol                   IV. HDLC</p> <p>Choose the correct answer from the options given below :</p></div>

## Q53 - Options
(A) A-I, B-III, C-IV, D-II
(B) A-II, B-IV, C-I, D-III
(C) A-IV, B-III, C-II, D-I
(D) A-III, B-IV, C-I, D-II

## Q53 - Hint
**Answer:** B  
**Topic:** Computer Networks – Multiple Access

- Channelization → **TDMA** (also FDMA, CDMA) (II)
- Bit-oriented protocol → **HDLC** (IV)
- Random access → **ALOHA** (I)
- Controlled access → **reservation** (also polling, token passing) (III)

## Q54
<div class="stem"><p>Consider the language L given by the regular expression (a + b) *b(a +b) over the alphabet {a, b}. The smallest number of states needed in a deterministic finite-state automaton (DFA) accepting L is ______.</p></div>

## Q54 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q54 - Hint
**Answer:** B  
**Topic:** Theory of Computation – DFA Minimisation

L = (a+b)\* b (a+b) → strings whose **second-last symbol is b**.

The DFA must remember the **last two symbols**: aa, ab, ba, bb → 2² = **4 states** (final: ba, bb).

In general, "k-th symbol from the end is b" needs 2ᵏ states.

## Q55
<div class="stem"><p><img src="tests/img/t5/q55-9ebc44.png"/></p></div>

## Q55 - Options
(A) (iii) (iv) (i) (ii)
(B) (iv) (iii) (i) (ii)
(C) (iv) (iii) (ii) (i)
(D) (iii) (iv) (ii) (i)

## Q55 - Hint
**Answer:** A  
**Topic:** Operating Systems – System Calls

- CreateProcess() ↔ **fork()** (iii)
- WaitForSingleObject() ↔ **wait()** (iv)
- CreateFile() ↔ **open()** (i)
- CloseHandle() ↔ **close()** (ii)

## Q56
<div class="stem"><p>Given below are two statements:</p> <p>Statement (I): The friend function and the member functions of a friend class directly access the private and protected data.</p> <p>Statement (II): The friend function can access the private data through the member functions of the base class</p> <p>In the light of the above statements, choose the most appropriate answer from the options given below:</p></div>

## Q56 - Options
(A) Both Statement I and Statement II are correct
(B) Both Statement I and Statement II are incorrect
(C) Statement I is correct but Statement II is incorrect
(D) Statement I is incorrect but Statement II is correct

## Q56 - Hint
**Answer:** A  
**Topic:** Programming in C++ – Friend Functions

- **I ✔** – friend functions and friend-class members can directly access private and protected members.
- **II ✔** – a friend function can also reach private data indirectly by calling the class's member functions.

## Q57
<div class="stem"><p>Consider an instruction of the type LW R1, 20(R2) which during execution reads a 32 bit word from memory and stores it in a 32 bit register R1. The effective address of the memory location is obtained by adding a constant 20 and contents of R2. Which of the following best reflects the addressing mode implemented by this instruction for operand in memory?</p></div>

## Q57 - Options
(A) Immediate addressing
(B) Register addressing
(C) Register Indirect addressing
(D) Indexed addressing

## Q57 - Hint
**Answer:** D  
**Topic:** Computer Organization – Addressing Modes

EA = 20 + [R2]: a constant plus a register → **indexed (base + displacement) addressing**. Register indirect would use [R2] alone; immediate would put 20 itself in R1.

## Q58
<div class="stem"><p><img src="tests/img/t5/q58-498058.png"/></p></div>

## Q58 - Options
(A) B D A C
(B) B D C A
(C) D B C A
(D) D B A C

## Q58 - Hint
**Answer:** D  
**Topic:** Software Engineering – V&V

- I. "Built the **right system**?" → **validation** (D)
- II. "Built the system **right**?" → **verification** (B)
- III. Show defects exist / give confidence → **testing** (A)
- IV. Find the cause and fix it → **debugging** (C)

Order: D, B, A, C.

## Q59
<div class="stem"><p>Let p, q and r be prepositions and the expression (p → q) → r be a contradiction. Then, the expression (r → p) → q is</p></div>

## Q59 - Options
(A) a tautology
(B) a contradiction
(C) always TRUE when p is FALSE
(D) always TRUE when q is TRUE

## Q59 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Propositional Logic

**Step 1:** (p → q) → r is a contradiction (always false). An implication is false only when the antecedent is T and the consequent is F → **p → q = T and r = F**.

**Step 2:** Evaluate (r → p) → q. Since r = F, r → p = **T**. So the expression = T → q = **q**.

It is true exactly when q is true → "always TRUE when q is TRUE".

## Q60
<div class="stem"><p>Consider the following two commands C1 and C2 on the relation R from an SQL database:</p> <p>C1: drop table R;</p> <p>C2: delete from R;</p> <p>Which of the following statements is TRUE?</p> <p>I. Both C1 and C2 delete the schema for R.</p> <p>II. C2 retains relation R, but deletes all tuples in R.</p> <p>III. C1 deletes not only all tuples of R, but also the schema for R.</p></div>

## Q60 - Options
(A) I only
(B) I and II only
(C) II and III only
(D) I, II and III

## Q60 - Hint
**Answer:** C  
**Topic:** DBMS – SQL (DROP vs DELETE)

- **DROP TABLE R** removes the data **and** the schema (the table no longer exists) → III ✔
- **DELETE FROM R** removes all rows but **keeps** the table structure → II ✔
- I ✘ – DELETE does not remove the schema.

## Q61
<div class="stem"><p>Which one of the following statements is incorrect?</p></div>

## Q61 - Options
(A) Pareto analysis is a statistical method used for analyzing causes, and is one of the primary tools for quality management.
(B) Reliability of a software specifies the probability of failure-free operation of that software for a given time duration.
(C) The reliability of a system can also be specified as the Mean Time To Failure (MTTF).
(D) In white-box testing, the test cases are decided from the specifications or the requirements

## Q61 - Hint
**Answer:** D  
**Topic:** Software Engineering – Testing & Reliability

- (A) ✔ Pareto analysis (80/20) is a basic quality tool.
- (B) ✔ Reliability = probability of failure-free operation for a given time.
- (C) ✔ Reliability can be stated as MTTF.
- **(D) ✘** – test cases from **specifications** = **black-box** testing; white-box uses the code structure.

## Q62
<div class="stem"><p>If one uses straight two-way merge sort algorithm to sort the following elements in ascending order: 20, 47, 15, 8, 9, 4, 40, 30, 12, 17 then the order of these elements after second pass of the algorithm is:</p></div>

## Q62 - Options
(A) 8, 9, 15, 20, 47, 4, 12, 17, 30, 40
(B) 8, 15, 20, 47, 4, 9, 30, 40, 12, 17
(C) 15, 20, 47, 4, 8, 9, 12, 30, 40, 17
(D) 4, 8, 9, 15, 20, 47, 12, 17, 30, 40

## Q62 - Hint
**Answer:** B  
**Topic:** Algorithms – Merge Sort (Passes)

Straight two-way merge sort merges runs of size 1 → 2 → 4 …

**Pass 1** (pairs): (20,47) (8,15) (4,9) (30,40) (12,17)  
**Pass 2** (merge pairs of runs):

- (20,47) + (8,15) → 8, 15, 20, 47
- (4,9) + (30,40) → 4, 9, 30, 40
- (12,17) stays as it is

After pass 2: **8, 15, 20, 47, 4, 9, 30, 40, 12, 17**.

## Q63
<div class="stem"><p>Consider the following statements</p> <p>S1: LRU page replacement algorithm suffers from the belady's anomaly</p> <p>S2: Shortest remaining time first scheduling may cause starvations</p> <p>S3: Stack is shared by all threads in a process</p></div>

## Q63 - Options
(A) S1, S2 and S3 are true
(B) S1, S3 false and S2 is true
(C) S1, S2 are false and S3 is true
(D) S1, S2 and S3 are false

## Q63 - Hint
**Answer:** B  
**Topic:** Operating Systems – Concepts

- **S1 ✘** – LRU is a **stack algorithm**, so it never suffers from Belady's anomaly (FIFO does).
- **S2 ✔** – SRTF can starve long processes.
- **S3 ✘** – each thread has its **own stack**; threads share code, data, heap and files.

## Q64
<div class="stem"><p>Consider the following statements regarding key</p> <p>I. A super key is an attribute or combination of attributes that uniquely identify records in an RDBMS table.</p> <p>II. A candidate key is a subset of a super key.</p> <p>III. All super keys are candidate keys but vice versa is not true.</p></div>

## Q64 - Options
(A) Only (I) is true
(B) (I) and (III) are true
(C) Only (II) is true
(D) (I) and (II) are true

## Q64 - Hint
**Answer:** D  
**Topic:** DBMS – Keys

- **I ✔** – a super key uniquely identifies records.
- **II ✔** – a candidate key is a minimal super key, hence a subset of a super key.
- **III ✘** – reversed: every candidate key is a super key, not every super key is a candidate key.

## Q65
<div class="stem"><p>Consider the set of activities related to e-mail</p> <p>A : Send an e-mail from a mail client to mail server</p> <p>B : Download e-mail headers from mail box and retrieve mails from server to a cache</p> <p>C : Checking e-mail through a web browser</p> <p>The application level protocol used for each activity in the same sequence is</p></div>

## Q65 - Options
(A) SMTP, HTTPS, IMAP
(B) SMTP, POP, IMAP
(C) SMTP, IMAP, HTTPS
(D) SMTP, IMAP, POP

## Q65 - Hint
**Answer:** C  
**Topic:** Computer Networks – E-mail Protocols

- A: client → mail server (sending) → **SMTP**
- B: download headers, keep mail on the server, cache locally → **IMAP**
- C: check mail through a web browser → **HTTP(S)** (webmail)

## Q66
<div class="stem"><p>Consider the following functions from positives integers to real numbers</p> <p>10, √n, n, log<sub>2</sub>n, 100/n.</p> <p>The CORRECT arrangement of the above functions in increasing order of asymptotic complexity is:</p></div>

## Q66 - Options
(A) log<sub>2</sub>n, 100/n, 10, √n, n
(B) 100/n, 10, log<sub>2</sub>n, √n, n
(C) 10, 100/n ,√n, log<sub>2</sub>n, n
(D) 100/n, log<sub>2</sub>n, 10 ,√n, n

## Q66 - Hint
**Answer:** B  
**Topic:** Algorithms – Asymptotic Growth

- 100/n → **decreases** towards 0 (smallest)
- 10 → constant
- log₂ n → grows slowly
- √n → grows faster than log n
- n → linear

Order: 100/n, 10, log₂ n, √n, n.

## Q67
<div class="stem"><p>In XML, DOCTYPE declaration specifies to include a reference to __________ file.</p></div>

## Q67 - Options
(A) Document type Definition
(B) Document type declaration
(C) Document transfer definition
(D) Document type language

## Q67 - Hint
**Answer:** A  
**Topic:** Web Technologies – XML

The `<!DOCTYPE …>` declaration links an XML document to its **DTD (Document Type Definition)**, which defines the allowed elements and attributes.

## Q68
<div class="stem"><p>Let r= a(a + b)*, s=aa*b and t=a*b be three regular expressions. Consider the following :</p> <p>(i). L(s) ⊆ L(r) and L(s) ⊆ L(t)</p> <p>(ii). L(r) ⊆ L(s) and L(s) ⊆ L(t)</p></div>

## Q68 - Options
(A) Only (i) is correct
(B) Both (i) and (ii) are correct
(C) Only (ii) is correct
(D) Neither (i) nor (ii) is correct

## Q68 - Hint
**Answer:** A  
**Topic:** Theory of Computation – Regular Languages

- L(s) = aa\*b = a⁺b (one or more a's, then b)
- L(t) = a\*b (zero or more a's, then b) → L(s) ⊆ L(t) ✔
- L(r) = a(a+b)\* (all strings starting with a) → every a⁺b starts with a → L(s) ⊆ L(r) ✔

(i) is true. (ii) says L(r) ⊆ L(s), which is false ("aa" ∈ L(r) but not in L(s)).

## Q69
<div class="stem"><p>In which of the following shading models of polygons, the interpolation of intensity values is done along the scan line?</p></div>

## Q69 - Options
(A) Gourard shading
(B) Phong shading
(C) Constant shading
(D) Flat shading

## Q69 - Hint
**Answer:** A  
**Topic:** Computer Graphics – Shading

**Gouraud shading** computes intensities at the vertices and **interpolates intensity** along the edges and then **along each scan line**. Phong interpolates **normals** instead; flat (constant) shading uses one intensity per polygon.

## Q70
<div class="stem"><p>Which one of the following is FALSE?</p></div>

## Q70 - Options
(A) There is a unique minimal DFA for every regular language
(B) Every NFA can be converted to an equivalent PDA
(C) Compliment of every context-free language is recursive
(D) Every non-deterministic PDA can be converted to an equivalent deterministic PDA

## Q70 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Automata

- (A) ✔ – every regular language has a unique minimal DFA (up to renaming of states).
- (B) ✔ – an NFA is a PDA that doesn't use its stack.
- (C) ✔ – CFLs are recursive, and recursive languages are closed under complement.
- **(D) ✘** – NPDAs are **strictly more powerful** than DPDAs (e.g. even-length palindromes).

## Q71
<div class="stem"><p>Match list I with List II</p> <p>LIST I                                                                   LIST II</p> <p>A. Text planning                                                   I. Natural language understanding.</p> <p>B. Sentence planning                                          II. Natural language generation.</p> <p>C. Sentence generation</p> <p>D. Map the input to useful representations</p> <p>Choose the correct answer from the options given below.</p> <ul> </ul></div>

## Q71 - Options
(A) A-I, B-II, C-I, D-II<br> <ul> </ul>
(B) A-II, B-II, C-I, D-II<br> <ul> </ul>
(C) A-I, B-II, C-II, D-I<br> <ul> </ul>
(D) A-II, B-II, C-II, D-I<br> <ul> </ul>

## Q71 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – NLP

- **NLG** (generation) stages: text planning, sentence planning, sentence (text) realisation → A, B, C → II
- **NLU** (understanding) maps input to useful representations → D → I

## Q72
<div class="stem"><p>A computer has 1000 K of main memory. The jobs arrive and finish in the sequence Job 1 requiring 200 K arrives Job 2 requiring 350 K arrives Job 3 requiring 300 K arrives Job 1 finishes Job 4 requiring 120 K arrives Job 5 requiring 150 K arrives Job 6 requiring 80 K arrives Among best fit and first fit, which performs better for this sequence?</p></div>

## Q72 - Options
(A) First fit
(B) Best fit
(C) Both perform the same
(D) None of the above

## Q72 - Hint
**Answer:** A  
**Topic:** Operating Systems – Memory Allocation

**State after Job 1 finishes:** holes = 200K (at 0) and 150K (at 850).

**First fit:**

- J4 (120) → 200 hole → leaves 80
- J5 (150) → 150 hole → leaves 0
- J6 (80) → 80 hole ✔ all placed

**Best fit:**

- J4 (120) → smallest that fits = 150 → leaves 30
- J5 (150) → 200 → leaves 50
- J6 (80) → holes are 30 and 50 → **fails** ✘

First fit performs better here.

## Q73
<div class="stem"><p>A 5-ary tree is tree in which every internal node has exactly 5 children. The number of left nodes in such a tree with 8 internal nodes will be:</p></div>

## Q73 - Options
(A) 30
(B) 33
(C) 45
(D) 130

## Q73 - Hint
**Answer:** B  
**Topic:** Data Structures – m-ary Trees

Full m-ary tree with I internal nodes: leaves L = (m − 1)I + 1 = 4 × 8 + 1 = **33**.

## Q74
<div class="stem"><p>In most general case, the computer needs to process each instruction with the following sequence of steps:</p> <p>(A) Calculate the effective address</p> <p>(B) Execute the instruction</p> <p>(C) Fetch the instruction from memory</p> <p>(D) Fetch the operand from memory</p> <p>(E) Decode the instruction</p> <p>Choose the correct answer from the options given below:</p></div>

## Q74 - Options
(A) (A), (B), (C), (D), (E)
(B) (A), (B), (C), (E), (D)
(C) (C), (E), (A), (D), (B)
(D) (C), (E), (D), (A), (B)

## Q74 - Hint
**Answer:** C  
**Topic:** Computer Organization – Instruction Cycle

Fetch the instruction (C) → Decode (E) → Calculate the effective address (A) → Fetch the operand (D) → Execute (B).

## Q75
<div class="stem"><p>Consider the following statements related to compiler construction :</p> <p>Lexical Analysis is specified by context-free grammars and implemented by pushdown automata.</p> <p>Syntax Analysis is specified by regular expressions and implemented by finite-state machine.</p> <p> Which of the above statement(s) is/are correct ?</p></div>

## Q75 - Options
(A) Only I
(B) Only II
(C) Both I and II
(D) Neither I nor II

## Q75 - Hint
**Answer:** D  
**Topic:** Compiler Design – Lexical vs Syntax Analysis

Both statements swap the tools:

- Lexical analysis → **regular expressions**, implemented by **finite automata**.
- Syntax analysis → **context-free grammars**, implemented by **pushdown automata** (parsers).

## Q76
<div class="stem"><p>Consider the following relation on subsets of the set S of integers between 1 and 2014. For two distinct subsets U and V of S we say U &lt; V if the minimum element in the symmetric difference of the two sets is in U. Consider the following two statements:</p> <p>S1: There is a subset of S that is larger than every other subset.<br/> S2: There is a subset of S that is smaller than every other subset.</p> <p>Which one of the following is CORRECT?</p></div>

## Q76 - Options
(A) Both S1 and S2 are true
(B) S1 is true and S2 is false
(C) S2 is true and S1 is false
(D) Neither S1 nor S2 is true

## Q76 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Orderings

U < V when the smallest element where they differ belongs to **U**.

**S1 (largest subset):** compare ∅ with any V: the difference is V, and its minimum is in V → V < ∅. So **∅ is larger than every other subset** ✔

**S2 (smallest subset):** compare S with any U ⊂ S: the difference is S − U, whose minimum is in S → S < U. So **S is smaller than every other subset** ✔

## Q77
<div class="stem"><p>In TCP/IP Reference model, the job of _______ layer is to permit hosts to inject packets into any network and travel them independently to the destination.</p> <p>(1) Physical</p> <p>(2) Transport</p> <p>(3) Application</p> <p>(4) Internet</p></div>

## Q77 - Options
(A) (1)
(B) (2) and (3)
(C) (3) and (4)
(D) (4)

## Q77 - Hint
**Answer:** D  
**Topic:** Computer Networks – TCP/IP Model

The **Internet layer** (IP) lets hosts inject packets into any network and have them travel **independently** (possibly by different routes) to the destination.

## Q78
<div class="stem"><p>Which one of the following is not an informed search technique?</p></div>

## Q78 - Options
(A) Hill climbing search 
(B) Best first search   
(C) A* search
(D) Depth first search

## Q78 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Search

**DFS** is uninformed (blind): it uses no heuristic. Hill climbing, best-first and A\* all use a heuristic h(n), so they are informed.

## Q79
<div class="stem"><p>In the given language L={ab,aa,baa}, number of strings are in L*</p></div>

## Q79 - Options
(A) baaaba
(B) aabaaaa
(C) baaabaaaabaa
(D) baaabaaa

## Q79 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Kleene Star

Try to split each string into pieces from {ab, aa, baa}:

- (A) baaaba → baa · ab · a → leftover "a" ✘
- (B) aabaaaa → **aa · baa · aa** ✔
- (C) baaabaaaabaa → **baa · ab · aa · aa · baa** ✔
- (D) baaabaaa → baa · ab · aa · a → leftover "a" ✘

> **⚠ Note:** Strings (B) and (C) are both in L\*. The question (garbled in the source) seems to ask which one is in L\*; the key gives (C), but (B) also works.

## Q80
<div class="stem"><p>In IPv4 addressing, a block of address can be define as x.y.z.t/n in which x.y.z.t define one of the address and /n define the mask</p> <p>(B) The first address in the block can be found by setting the rightmost 32-n bits to Os</p> <p>(C) Address of class C is used for multicast communication</p> <p>(D) There are five classes in IPv4 address</p> <p>(E) Supernetting combine several networks into one large network</p> <p>Choose the correct answer from the options given below:</p></div>

## Q80 - Options
(A) (A), (B) and (C) Only
(B) (A), (B), (D) and (E) Only
(C) (A), (C), (D) and (E) Only
(D) (C), (D) and (E) Only

## Q80 - Hint
**Answer:** B  
**Topic:** Computer Networks – IPv4 Addressing

- (A) ✔ – CIDR notation x.y.z.t/n.
- (B) ✔ – first address = set the rightmost 32 − n bits to 0.
- (C) ✘ – multicast uses **class D**, not C.
- (D) ✔ – there are five classes, A to E.
- (E) ✔ – supernetting combines several networks into one larger block.

True: A, B, D, E.

## Q81
<div class="stem"><p>What is route poisoning?</p></div>

## Q81 - Options
(A) It sends back the protocol received from a router as a poison pill, which stop the regular updates
(B) It is information received from a router that can not be sent back to the originating router
(C) It prevent regular update message from reinstating a route that has just come up
(D) It describes when a router sets metrics for a downed link to infinity

## Q81 - Hint
**Answer:** D  
**Topic:** Computer Networks – Routing

**Route poisoning**: when a link goes down, the router advertises that route with an **infinite metric** (e.g. 16 in RIP), so other routers drop it quickly and count-to-infinity is avoided.

## Q82
<div class="stem"><p>Which of the following is not used in standard JPEG image compression?</p></div>

## Q82 - Options
(A) Huffman coding
(B) Runlength encoding
(C) Zig-zag scan
(D) K-L Transform

## Q82 - Hint
**Answer:** D  
**Topic:** Image Processing – JPEG

Standard JPEG: colour conversion → 8×8 **DCT** → quantisation → **zig-zag scan** → **run-length** coding → **Huffman** coding. The **KL (Karhunen–Loève) transform** is optimal in theory but too expensive, so JPEG uses the DCT instead.

## Q83
<div class="stem"><p><img src="tests/img/t5/q83-c4199c.png"/></p> <p>Consider the following Hasse diagrams.  Which all of the above represent a lattice?   </p></div>

## Q83 - Options
(A) (i) and (iv) only
(B) (ii) and (iii) only
(C) (iii) only
(D) (i), (ii) and (iv) only

## Q83 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Lattices

A poset is a lattice if **every pair** has a least upper bound (join) and a greatest lower bound (meet).

- **(i)** diamond (M2) → every pair has a join and meet ✔
- **(iv)** pentagon N₅ → still a lattice (non-distributive) ✔
- **(ii)** two elements have more than one minimal upper bound (no unique join) ✘
- **(iii)** pairs in the middle levels have two incomparable upper bounds ✘

## Q84
<div class="stem"><p>Which one of the following regular expressions correctly represents the language of the finite automaton given below</p> <p><img src="tests/img/t5/q84-76c423.png"/></p></div>

## Q84 - Options
(A) ab*bab* + ba*aba*
(B) (ab*b)*ab* + (ba*a)*ba*
(C) (ab*b+ba*a)*(a*+b*)
(D) (ba*a+ ab*b)* (ab* + ba*)

## Q84 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Regular Expressions

States: start S, upper final U (loop b), lower final L (loop a).

- Loops back to S: a b\* b (via U) or b a\* a (via L) → (ab\*b + ba\*a)\*
- Finish in U: ab\*; finish in L: ba\*

RE = (ba\*a + ab\*b)\* (ab\* + ba\*).

## Q85
<div class="stem"><p>Consider the following scheduling<br/> A. Gang scheduling            s. Guaranteed scheduling<br/> B. Rate Monotonic scheduling    t. Thread scheduling<br/> C. Fair share scheduling        u. Real time scheduling</p> <p>Matching the table in the order A, B, C gives</p></div>

## Q85 - Options
(A) t, u, s
(B) s, t, u
(C) u, s, t
(D) u, t, s

## Q85 - Hint
**Answer:** A  
**Topic:** Operating Systems – Scheduling Types

- **Gang** scheduling → schedules related **threads** together on different processors (t)
- **Rate monotonic** → **real-time** scheduling (u)
- **Fair share** → **guaranteed** share per user or group (s)

## Q86
<div class="stem"><p>Which of the following statement(s) is/are TRUE with regard to software testing?</p> <p>I. Regression testing technique ensures that the software product runs correctly after the changes during maintenance.</p> <p>II. Equivalence partitioning is a white-box testing technique that divides the input domain of a program into classes of data from which test cases can be derived.</p></div>

## Q86 - Options
(A) only I
(B) only II
(C) both I and II
(D) neither I nor II

## Q86 - Hint
**Answer:** A  
**Topic:** Software Engineering – Testing

- **I ✔** – regression testing checks that the software still works after maintenance changes.
- **II ✘** – equivalence partitioning is **black-box**, not white-box.

## Q87
<div class="stem"><p>Distributed operating systems consist of:</p></div>

## Q87 - Options
(A) Loosely coupled O.S. software on a loosely coupled hardware.
(B) Loosely coupled O.S. software on a tightly coupled hardware.
(C) Tightly coupled O.S. software on a loosely coupled hardware.
(D) Tightly coupled O.S. software on a tightly coupled hardware.

## Q87 - Hint
**Answer:** C  
**Topic:** Operating Systems – Distributed Systems

A distributed OS makes a set of independent machines (**loosely coupled hardware**, no shared memory) look like one system, which needs **tightly coupled software**. (Network OS = loosely coupled software on loosely coupled hardware.)

## Q88
<div class="stem"><p>Match the following:</p> <p>(a) Huffman codes                              (i) O(n<sup>2</sup>)</p> <p>(b) Optimal Polygon triangulation       (ii) θ(n<sup>3</sup>)</p> <p>(c) Activity selection problem             (iii) O(nlgn)</p> <p>(d) Quicksort                                     (iv) θ(n)</p> <p>a  b  c  d</p></div>

## Q88 - Options
(A) i, ii, iv, iii
(B) i iv, ii, iii
(C) iii, ii, iv, i
(D) iii, iv, ii, i

## Q88 - Hint
**Answer:** C  
**Topic:** Algorithms – Complexities

- Huffman codes → **O(n log n)** (heap) (iii)
- Optimal polygon triangulation (DP) → **Θ(n³)** (ii)
- Activity selection (greedy, pre-sorted) → **Θ(n)** (iv)
- Quick sort worst case → **O(n²)** (i)

## Q89
<div class="stem"><p>The characters of the string K R P C S N Y T J M are inserted into a hash table of size 10 using hash function</p> <p>h(x) = ((ord(x) - ord(A) + 1)) mod 10</p> <p>If linear probing is used to resolve collisions, then the following insertion causes collision</p></div>

## Q89 - Options
(A) Y
(B) C
(C) M
(D) P

## Q89 - Hint
**Answer:** C  
**Topic:** Data Structures – Hashing

h(x) = alphabet position mod 10:

| Char | K | R | P | C | S | N | Y | T | J | M |
|---|---|---|---|---|---|---|---|---|---|---|
| Pos | 11 | 18 | 16 | 3 | 19 | 14 | 25 | 20 | 10 | 13 |
| Slot | 1 | 8 | 6 | 3 | 9 | 4 | 5 | 0 | 0 ✘ | 3 ✘ |

Y → 5 (empty), C → 3 (empty), P → 6 (empty). **M → 3** is already taken by C → **collision**. (J also collides with T, but J isn't an option.)

## Q90
<div class="stem"><p>Arrange the following encoding strategies used in Genetic Algorithms (GAs) in the correct sequence starting from the initial step and ending with the final representation of solutions:</p> <p>Binary Encoding</p> <p>Real valued Encoding</p> <p>Permutation Encoding</p> <p>Gray coding</p> <p>Choose the correct answer from the options given below:</p></div>

## Q90 - Options
(A) (D), (B), (A), (C)
(B) (B), (D), (A), (C)
(C) (C), (D), (A), (B)
(D) (B), (C), (A), (D)

## Q90 - Hint
**Answer:** C  
**Topic:** Soft Computing – Genetic Algorithms

As per the key: Permutation encoding (C) → Gray coding (D) → Binary encoding (A) → Real-valued encoding (B).

These are alternative ways to represent chromosomes:

- **Binary** – bit strings
- **Gray** – binary variant where neighbouring values differ by 1 bit
- **Real-valued** – floating-point genes
- **Permutation** – orderings (e.g. TSP)

## Q91
<div class="stem"><p>Given the following statements:</p> <p>(A) Frequency Division Multiplexing is a technique that can be applied when the bandwidth of a link is greater than combined bandwidth of signals to be transmitted.</p> <p>(B) Wavelength Division Multiplexing (WDM) is an analog multiplexing Technique to combine optical signals.</p> <p>(C) WDM is a Digital Multiplexing Technique.</p> <p>(D) TDM is a Digital Multiplexing Technique.</p> <p>Which of the following is correct?</p></div>

## Q91 - Options
(A) (A), (B), (C) and (D) are true.
(B) (A), (B), (C) and (D) are false.
(C) (A), (B) and (D) are false; (C) is true.
(D) (A), (B) and (D) are True; (C) is false.

## Q91 - Hint
**Answer:** D  
**Topic:** Computer Networks – Multiplexing

- **(A) ✔** – FDM works when link bandwidth exceeds the combined bandwidth of the signals.
- **(B) ✔** – WDM is an **analog** technique for combining optical signals (FDM for light).
- **(C) ✘** – WDM is not digital.
- **(D) ✔** – TDM is a **digital** multiplexing technique.

## Q92
<div class="stem"><p>Semaphores are used to solve the problem of</p> <p>I. Race Condition</p> <p>II. Process Synchronization</p> <p>III. Mutual Exclusion</p> <p>IV. None of the above</p></div>

## Q92 - Options
(A) I and II
(B) II and III
(C) All of the above
(D) None of the above

## Q92 - Hint
**Answer:** B  
**Topic:** Operating Systems – Semaphores

Semaphores provide **process synchronization** (ordering, signalling) and **mutual exclusion** (binary semaphore around a critical section); in doing so they also prevent race conditions. Since option (C) "All of the above" would include IV "None of the above", which is contradictory, the best choice is **II and III**.

## Q93
<div class="stem"><p>In a room containing 28 people, there are 18 people who speak English, 15 people who speak Hindi and 22 people who speak Kannada. 9 persons speak both English and Hindi, 11 persons speak both Hindi and Kannada whereas 13 persons speak both Kannada and English. How many people speak all three languages?</p></div>

## Q93 - Options
(A) 9
(B) 8
(C) 7
(D) 6

## Q93 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Inclusion–Exclusion

|E ∪ H ∪ K| = |E| + |H| + |K| − |E∩H| − |H∩K| − |K∩E| + |E∩H∩K|

28 = 18 + 15 + 22 − 9 − 11 − 13 + x  
28 = 55 − 33 + x = 22 + x ⇒ **x = 6**

## Q94
<div class="stem"><p>Match List - I with List - II.</p> <p>List - I                   List - II</p> <p>(A) BCNF iff         (I) every JD is implied by the candidate keys</p> <p>(B) 5 NF iff           (II) all underlying domains contain scalar values only</p> <p>(C) 1 NF iff           (III) every MVD is implied by the candidate keys</p> <p>(D) 4 NF iff           (IV) every FD is implied by the candidate keys</p> <p>Choose the correct answer from the options given below :</p></div>

## Q94 - Options
(A) (A)-(III), (B)-(II), (C)-(I), (D)-(IV)
(B) (A)-(IV), (B)-(I), (C)-(II), (D)-(III)
(C) (A)-(II), (B)-(III), (C)-(IV), (D)-(I)
(D) (A)-(IV), (B)-(I), (C)-(III), (D)-(II)

## Q94 - Hint
**Answer:** B  
**Topic:** DBMS – Normal Forms

- BCNF ⇔ every **FD** implied by candidate keys (IV)
- 5NF ⇔ every **JD** implied by candidate keys (I)
- 1NF ⇔ **scalar / atomic** domains (II)
- 4NF ⇔ every **MVD** implied by candidate keys (III)

## Q95
<div class="stem"><p>The map colouring problem can be solved using which of the following technique?</p></div>

## Q95 - Options
(A) Means-end analysis 
(B) Constraint satisfaction 
(C) AO* search 
(D) Breadth first search

## Q95 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – CSP

Map colouring is the textbook **constraint satisfaction problem**: variables = regions, domains = colours, constraint = adjacent regions differ. It is solved with backtracking, forward checking and arc consistency.

## Q96
<div class="stem"><p>In a positive-edge-triggered JK flip-flop, if J and K both are high then the output will be _____ on the rising edge of the clock.</p></div>

## Q96 - Options
(A) No change
(B) Set
(C) Reset
(D) Toggle

## Q96 - Hint
**Answer:** D  
**Topic:** Digital Logic – Flip-Flops

JK flip-flop: J = K = 1 → **toggle** (Q⁺ = Q') on each active clock edge. (J=0, K=0 hold; J=1, K=0 set; J=0, K=1 reset.)

## Q97
<div class="stem"><p>Assume the following regarding the development of a software system P: - Estimated lines of code of P : 33, 480 LOC - Average productivity for P : 620 LOC per person-month - Number of software developers : 6 - Average salary of a software developer : 50,000 per month If E, D and C are the estimated development effort (in person-months), estimated development time (in months), and estimated development cost (in Lac) respectively, then (E, D, C) =_________.</p></div>

## Q97 - Options
(A) (48, 8, 24)
(B) (54, 9, 27)
(C) (60, 10, 30)
(D) (42, 7, 21)

## Q97 - Hint
**Answer:** B  
**Topic:** Software Engineering – Effort Estimation

- **E** = 33,480 / 620 = **54 person-months**
- **D** = 54 / 6 developers = **9 months**
- **C** = 54 × ₹50,000 = ₹27,00,000 = **27 lakh**

## Q98
<div class="stem"><p>What is the highest type number that can be assigned to the following grammar?<br/> S → Aa<br/> A → Ba<br/> B → abc</p></div>

## Q98 - Options
(A) Type 0
(B) Type 1
(C) Type 2
(D) Type 3

## Q98 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Chomsky Hierarchy

S → Aa, A → Ba, B → abc: every rule has at most one non-terminal, always at the **left end** → **left-linear** grammar → regular → **Type 3** (the highest type number). The language is just {abcaa}.

## Q99
<div class="stem"><p>Consider the following statements :</p> <p>(a) Assignment problem can be used to minimize the cost.</p> <p>(b) Assignment problem is a special case of transportation problem.</p> <p>(c) Assignment problem requires that only one activity be assigned to each resource.</p> <p>Which of the following options is correct ?</p></div>

## Q99 - Options
(A) (a) and (b) only
(B) (a) and (c) only
(C) (b) and (c) only
(D) (a), (b) and (c)

## Q99 - Hint
**Answer:** D  
**Topic:** Operations Research – Assignment Problem

- **(a) ✔** – it minimises total cost (or maximises profit).
- **(b) ✔** – it is a special transportation problem with all supplies and demands equal to 1.
- **(c) ✔** – one activity (job) per resource (worker), and vice versa.

## Q100
<div class="stem"><p>In compiler optimization, operator strength reduction uses mathematical identities to replace slow math operations with faster operations. Which of the following code replacements is an illustration of operator strength reduction ?</p></div>

## Q100 - Options
(A) Replace P + P by 2 * P or Replace 3 + 4 by 7.
(B) Replace P * 32 by P &lt; &lt; 5
(C) Replace P * 0 by 0
(D) Replace (P &lt; &lt;4) – P by P * 15

## Q100 - Hint
**Answer:** B  
**Topic:** Compiler Design – Code Optimization

**Strength reduction** replaces an expensive operator with a cheaper equivalent: P \* 32 → **P << 5** (shifting is cheaper than multiplying).

(A) 3 + 4 → 7 is constant folding; (C) P \* 0 → 0 is algebraic simplification; (D) goes the wrong way (cheap → expensive).
