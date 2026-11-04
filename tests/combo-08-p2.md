<!-- Combo Test 8 · Paper 2 (CSA) · original question numbers kept in the source data -->

## Q1
<div class="stem"><p>Consider the following statements:</p> <p>Statement I : In stop and wait protocol sender sends one frame and then waits for an acknowledgement before proceeding for next frame.</p> <p>Statement II : Go-back ARQ uses 6 number of sequence bits then sender window is 32 and receiver window size is 1.</p> <p>Choose the correct answer from the options given below?</p></div>

## Q1 - Options
(A) Both Statement I and Statement II are false
(B) Both Statement I and Statement II are true
(C) Statement I is false but Statement II is true
(D) Statement I is true but Statement II is false

## Q1 - Hint
**Answer:** D  
**Topic:** Computer Networks – Flow Control

- **I ✔** – stop-and-wait sends one frame and waits for its ACK.
- **II ✘** – Go-Back-N with 6 sequence bits has sender window 2⁶ − 1 = **63**, not 32 (32 = 2⁵ is the Selective Repeat window).

## Q2
<div class="stem"><p>Which table for a dynamic pipeline become more interesting when a nonlinear pattern is follows?</p></div>

## Q2 - Options
(A) Reservation Table
(B) Confusion Table
(C) Inverted Table
(D) Greedy Table

## Q2 - Hint
**Answer:** A  
**Topic:** Computer Organization – Pipelining

A **reservation table** shows which stage each operation uses at each clock cycle. It matters most for **non-linear (dynamic) pipelines** with feedback, where it is used to find forbidden latencies and avoid collisions.

## Q3
<div class="stem"><p>If you want to align text to the right side of an block element in a cascading style sheet (CSS) then which of the following property would you use?</p></div>

## Q3 - Options
(A) Right align
(B) Justify
(C) Left align
(D) Text align

## Q3 - Hint
**Answer:** D  
**Topic:** Web Technologies – CSS

Use the **text-align** property: `text-align: right;`.

## Q4
<div class="stem"><p>A system is having 8 M bytes of video memory for bit-mapped graphics with 64-bit colour. What is the maximum resolution it can support?</p></div>

## Q4 - Options
(A) 800 x 600
(B) 1024 x 768
(C) 1280 x 1024
(D) 1920 x 1440

## Q4 - Hint
**Answer:** B  
**Topic:** Computer Graphics – Frame Buffer

8 MB / 8 bytes per pixel (64-bit colour) = 2²⁰ = 1,048,576 pixels.  
1024 × 768 = 786,432 ✔ fits; 1280 × 1024 = 1,310,720 ✘ → maximum **1024 × 768**.

## Q5
<div class="stem"><p>Graph G(V,E) is a connected planar graph with no cycles of length less than 4, if |V| = 15, then maximum value of |E| is -<br/> </p></div>

## Q5 - Options
(A) 24
(B) 25
(C) 26
(D) 27

## Q5 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Planar Graphs

No cycle shorter than 4 → every face has ≥ 4 edges → E ≤ 2V − 4 = 2(15) − 4 = **26**.

## Q6
<div class="stem"><p>The kind of symbols for basic syntactic elements of first-order logic are</p> <p>A. Constant</p> <p>B. Domain</p> <p>C. Predicate</p> <p>D. Temporal</p> <p>E. Function</p> <p>Choose the correct answer from the options given below:</p></div>

## Q6 - Options
(A) B, D only
(B) A, B, C only
(C) A, C, E only
(D) C, D only

## Q6 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – First-Order Logic

FOL's basic syntactic symbols: **constants** (objects), **predicates** (relations), **functions**, plus variables, connectives and quantifiers. "Domain" and "temporal" are not symbol types.

## Q7
<div class="stem"><p>The maximum number of binary trees that can be formed with 4 unlabeled nodes is:-</p></div>

## Q7 - Options
(A) 10
(B) 15
(C) 14
(D) 13

## Q7 - Hint
**Answer:** C  
**Topic:** Data Structures – Counting Binary Trees

The number of distinct binary trees (shapes) with n unlabeled nodes is the **Catalan number** Cₙ = (2n)! / ((n+1)! n!).

C₄ = 8! / (5! · 4!) = 40320 / (120 × 24) = **14**.

## Q8
<div class="stem"><p>Match the LIST-I with LIST-II</p> <table> <tbody> <tr> <td> <p>LIST-I</p> </td> <td> <p>LIST-II</p> </td> </tr> <tr> <td> <p>A. RAID level 1</p> </td> <td> <p>I. bit-interleaved parity organization</p> </td> </tr> <tr> <td> <p>B. RAID level 2</p> </td> <td> <p>II. disk mirroring</p> </td> </tr> <tr> <td> <p>C. RAID level 3</p> </td> <td> <p>III. block-interleaved parity organization</p> </td> </tr> <tr> <td> <p>D. RAID level 4</p> </td> <td> <p>IV. ECC organization</p> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q8 - Options
(A) A-II, B-I, C-IV, D-III
(B) A-II, B-IV, C-I, D-III
(C) A-III, B-IV, C-I, D-II
(D) A-IV, B-III, C-II, D-I

## Q8 - Hint
**Answer:** B  
**Topic:** Operating Systems – RAID

RAID 1 → mirroring (II); RAID 2 → ECC (Hamming) (IV); RAID 3 → bit-interleaved parity (I); RAID 4 → block-interleaved parity (III).

## Q9
<div class="stem"><p>Consider a fuzzy set</p> <p>X = {(20, 0) (30, 0.2) (40, 0.4) (60, 0.8) (70, 1) (80, 1)}.</p> <p>The X0.2 will be -</p></div>

## Q9 - Options
(A) {30, 40, 60, 70, 80}
(B) {40, 60, 70}
(C) {60, 70}
(D) {20, 30, 40, 60, 70}

## Q9 - Hint
**Answer:** A  
**Topic:** Soft Computing – Fuzzy α-cut

X₀.₂ = {x : μ(x) ≥ 0.2} = {30, 40, 60, 70, 80} (20 has μ = 0, so it's out).

## Q10
<div class="stem"><p>Consider the following statements:</p> <p>(a) Assignment problem can be used to minimize the cost.</p> <p>(b) Assignment problem is a special case of transportation problem.</p> <p>(C) Assignment problem requires that only one activity be assigned to each resources.</p> <p>Which of the following options is correct?</p></div>

## Q10 - Options
(A) (a) and (b) only
(B) (a) and (c) only
(C) (b) and (c) only
(D) (a), (b) and (c)

## Q10 - Hint
**Answer:** D  
**Topic:** Operations Research – Assignment Problem

All three are true: it minimises cost, it is a special case of the transportation problem (unit supply and demand), and it assigns one job per resource.

## Q11
<div class="stem"><p>Consider the following statements.</p> <p>I.TCP connections are full duplex and byte streams.</p> <p>II.UDP handles congestion but not flow control.</p> <p>III.The timeout value used in TCP is set to twice the propagation delay from the sender to the receiver.</p> <p>IV.UDP works well in unidirectional communication, suitable for broadcast information.</p> <p>Which of the above statements are true?</p></div>

## Q11 - Options
(A) I, II and III
(B) I and IV
(C) II and III
(D) All of the above

## Q11 - Hint
**Answer:** B  
**Topic:** Computer Networks – TCP & UDP

I ✔ (TCP is full-duplex, byte stream); II ✘ (UDP has no congestion or flow control); III ✘ (the TCP timeout is adaptive); IV ✔ (UDP suits broadcast).

## Q12
<div class="stem"><p>Consider the following code where 'k' is a global parameter:</p> <p>Multi Dequeue (Q)</p> <p>{</p> <p>m = k:</p> <p>while (queue is not empty and m&gt;0 )</p> <p>{</p> <p>Dequeue (Q)</p> <p>m = m-1;</p> <p>}</p> <p>}</p> <p>What is the worst case time complexity of a sequence of n MultiDequeue() operation on initially empty queue ?</p></div>

## Q12 - Options
(A) O(n)
(B) O(n+k)
(C) O(nk)
(D) O(n2)

## Q12 - Hint
**Answer:** A  
**Topic:** Data Structures – Amortized Analysis

Each MultiDequeue loop runs only while the queue is non-empty. Starting from an **empty** queue (and with no enqueues) every call does O(1) work, so n calls cost **O(n)**.

(Even with enqueues mixed in, the total number of dequeues can't exceed the number of enqueues, which still gives O(n) overall.)

## Q13
<div class="stem"><p>Which of the following option is not correct?</p></div>

## Q13 - Options
(A) If queue is implemented with a linked list, keeping track of a front pointer, only rear pointers will change an insertion into an non-empty queue.
(B) Queue data structure can be used to implement LRU page replacement and Quick sort algorithm
(C) Queue can be used to implement Quick sort but not LRU page fault algorithm
(D) Both (A) and (C)

## Q13 - Hint
**Answer:** C  
**Topic:** Data Structures – Queues

(A) ✔ – inserting into a non-empty linked queue changes only the rear. (B) ✔ – queues can be used for LRU order and for an iterative quick sort. **(C) is NOT correct** because it contradicts (B).

## Q14
<div class="stem"><p>Consider the following Graph of disk scheduling and identify the disk scheduling algorithm representing by this graph.</p> <p><img src="tests/img/t8/q14-8cbaa6.png"/></p> <p>Queue 84, 125, 11, 36, 170, 20, 172, 45</p> <ul> </ul></div>

## Q14 - Options
(A) SSTF<br> <ul> </ul>
(B) SCAN<br> <ul> </ul>
(C) C-SCAN<br> <ul> </ul>
(D) C-LOOK<br> <ul> </ul>

## Q14 - Hint
**Answer:** D  
**Topic:** Operating Systems – Disk Scheduling

The head moves upward serving 36, 45, 84, 125, 170, **172** (the last request, not the disk end at 199), then **jumps back** to the lowest request **11** and continues upward to 20. Going only as far as the last request and jumping back without serving = **C-LOOK**.

## Q15
<div class="stem"><p>Consider an array consisting of +ve and -ve numbers. What would be the worst case comparison the numbers having sign together i.e. all +ve on one side, +ve on other?</p></div>

## Q15 - Options
(A) N – 1
(B) N
(C) N + 1
(D) [N + (N-1)]/ 2

## Q15 - Hint
**Answer:** A  
**Topic:** Algorithms – Partitioning

Use the quick-sort **partition** idea with 0 as the pivot: one pass compares each of the other elements once → **N − 1** comparisons in the worst case.

## Q16
<div class="stem"><p>Which of the following traversal is sufficient to construct BST from given traversal-</p> <p>(1) Inorder</p> <p>(2) Preorder</p> <p>(3) Postorder</p></div>

## Q16 - Options
(A) any one of 1,2,3
(B) either 2 or 3
(C) 2 and 3
(D) 1 and 3

## Q16 - Hint
**Answer:** C  
**Topic:** Data Structures – BST Construction

For a **BST**, the inorder sequence is just the keys in sorted order, so **preorder alone** (or **postorder alone**) is enough to rebuild the tree: inorder is always available by sorting.

> **⚠ Note:** Either preorder **or** postorder suffices, which is option **(B)** (the source's own solution says B). The key's (C) "2 and 3" asks for more than is needed.

## Q17
<div class="stem"><p>In an unweighted, undirected connected graph, the shortest path from a node S to entry other node is computed most efficiently, in terms of time complexity of –</p></div>

## Q17 - Options
(A) Dijkstra algorithm starting from S.
(B) Warshall's algorithm
(C) Performing a DFS starting from S.
(D) Performing a BFS starting from S.

## Q17 - Hint
**Answer:** D  
**Topic:** Algorithms – Shortest Paths

In an unweighted graph, **BFS** from S gives shortest paths in **O(V + E)**, which is faster than Dijkstra's O((V + E) log V).

## Q18
<div class="stem"><p>Definition's of ______ organized into following four categories namely. Thinking Humanly, Thinking Rationally, Acting Humanly. Acting Rationally</p></div>

## Q18 - Options
(A) Machine Learning
(B) Deep Learning
(C) Artificial Intelligence
(D) Neural Network

## Q18 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Definitions

Russell & Norvig organise definitions of **Artificial Intelligence** into four approaches: thinking humanly, thinking rationally, acting humanly (Turing test) and acting rationally (rational agents).

## Q19
<div class="stem"><p>Which one of the following algorithm design techniques is used in finding all pairs of shortest distances in a graph-</p></div>

## Q19 - Options
(A) Dynamic programming
(B) Backtracking
(C) Greedy
(D) Divide and conquer

## Q19 - Hint
**Answer:** A  
**Topic:** Algorithms – Design Paradigms

All-pairs shortest paths → **Floyd–Warshall** → **dynamic programming**.

## Q20
<div class="stem"><p>Consider the following recursive function of tower of Hanoi.</p> <p>T(n) = 2T(n - 1) + 1</p> <p>Find the number of function calls and moves respectively for moving 3 disks.</p></div>

## Q20 - Options
(A) 15, 7
(B) 7, 15
(C) 7, 7
(D) 15, 15

## Q20 - Hint
**Answer:** A  
**Topic:** Algorithms – Recursion (Tower of Hanoi)

- **Moves:** M(n) = 2M(n−1) + 1 → 2ⁿ − 1 = **7** for n = 3.
- **Function calls** (counting the call for n = 0 as a call that does nothing): C(n) = 2C(n−1) + 1 with C(0) = 1 → 2ⁿ⁺¹ − 1 = **15**.

(Calls, moves) = (15, 7).

## Q21
<div class="stem"><p>Consider the following code segment:</p> <p>int arr[ ] = [0, 1, 2, 3, 4);</p> <p>int i=1, *ptr;</p> <p>ptr = arr + 2;</p> <p>arrange the following printf statements in the increasing order of their output.</p> <p>(A) printf ("%d", ptr[i]);</p> <p>(B) printf ("%d", ptr[i+1]);</p> <p>(C) printf ("%d", ptr[-i]);</p> <p>(D) printf ("%d", ptr[-i+1]);</p> <p>Choose the correct answer from the options given below :</p></div>

## Q21 - Options
(A) (C), (A), (B), (D) 
(B) (C), (D), (A), (B)
(C) (D), (A), (B), (C) 
(D) (A), (B), (D), (C)

## Q21 - Hint
**Answer:** B  
**Topic:** Programming in C – Pointers

ptr = arr + 2, i = 1: ptr[1] = 3, ptr[2] = 4, ptr[−1] = 1, ptr[0] = 2 → increasing: **C, D, A, B**.

## Q22
<div class="stem"><p>Consider the following statements regarding multiple access techniques &amp; identify the CORRECT ones.</p> <p>A. ALOHA is used for multiple access on a shared medium</p> <p>B. TDMA uses WALSH TABLES for time slot allocation</p> <p>C. CSMA/CD was invented for wireless networks</p> <p>D. CDMA codes are sequence of number generated by orthogonal codes</p> <p>Choose the correct answer from the options given below:</p></div>

## Q22 - Options
(A) A &amp; B only
(B) B &amp; C only
(C) C &amp; D only
(D) A &amp; D only

## Q22 - Hint
**Answer:** D  
**Topic:** Computer Networks – Multiple Access

- **A ✔** – ALOHA is a random-access protocol for a shared medium.
- **B ✘** – Walsh tables are used in **CDMA**, not TDMA.
- **C ✘** – CSMA/CD is for **wired** Ethernet; wireless uses **CSMA/CA**.
- **D ✔** – CDMA chip sequences come from orthogonal (Walsh) codes.

## Q23
<div class="stem"><p>Consider the following grammar</p> <p>S → AB</p> <p>А → а</p> <p>A → BaB</p> <p>A → bbA</p> <p>Which of the following statements is false?</p></div>

## Q23 - Options
(A) The length of every string produced by this grammar is even.
(B) No string produced by this grammar has three consecutive a's
(C) The length of substring produced by B is always odd
(D) No string produced by this grammar has four consecutive b's

## Q23 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Grammars

Same grammar as Test 1 Q12; the intended production is **B → bbA**.

- |A| is odd and |B| = 2 + |A| is odd → |S| is even ✔
- No "aaa" ✔
- B always has odd length ✔
- B → bbA → bb(BaB) → bb(bbA)aB → "**bbbb**" appears → (D) is **false**.

> **⚠ Note:** The stem prints "A → bbA"; it should be "B → bbA".

## Q24
<div class="stem"><p>The number of states in DFA accepting the regular expression</p> <p>1*01 (0 + 11)* are –</p></div>

## Q24 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q24 - Hint
**Answer:** B  
**Topic:** Theory of Computation – DFA

L = 1\*01(0 + 11)\*.

- q0: loop on 1; on 0 → q1
- q1: on 1 → q2 (accept)
- q2: on 0 → q2; on 1 → q3
- q3: on 1 → q2

That gives **4** useful states (q0, q1, q2, q3).

(A complete DFA also needs a dead state for q1 on 0 and q3 on 0, giving 5; the key counts the 4 live states.)

## Q25
<div class="stem"><p>Networks that use different technologies can be connected using :</p></div>

## Q25 - Options
(A) Packets
(B) Switches
(C) Bridges
(D) Routers

## Q25 - Hint
**Answer:** D  
**Topic:** Computer Networks – Devices

**Routers** work at the network layer using IP (logical) addresses, so they can join networks built on **different technologies** (Ethernet, Wi-Fi, WAN links). Bridges and switches connect segments of the same LAN technology.

## Q26
<div class="stem"><p>Match the LIST-I with LIST-II</p> <p><img src="tests/img/t8/q26-0d7dfe.png"/></p> <p>Choose the correct answer from the options given below:</p></div>

## Q26 - Options
(A) A-I, B-II, C-III, D-IV
(B) A-II, B-I, C-III, D-IV
(C) A-III, B-II, C-IV, D-I
(D) A-IV, B-III, C-I, D-II

## Q26 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Chomsky Hierarchy

- Type 0 → unrestricted grammars → **recursively enumerable** (IV)
- Type 1 → context-sensitive, x → y with |x| ≤ |y| (III)
- Type 2 → context-free, normal forms such as **GNF** (II)
- Type 3 → regular, i.e. **(right/left) linear** grammars (I)

## Q27
<div class="stem"><p>A Block of address is granted to a small organisation. We know one of address is 221.7.8.39/28. What is first address in the block ?</p></div>

## Q27 - Options
(A) 221.7.8.0
(B) 221.7.8.32
(C) 221.0.0.0
(D) 221.7.8.4

## Q27 - Hint
**Answer:** B  
**Topic:** Computer Networks – CIDR

/28 → last 4 bits are the host part → block size 16. Last octet 39 = 0010 0111 → zero the last 4 bits → 0010 0000 = **32** → first address **221.7.8.32**.

## Q28
<div class="stem"><p>Which is not a part of TCP header?</p></div>

## Q28 - Options
(A) Sequence Number
(B) Source Port Address
(C) Urgent Pointer
(D) Destination IP Address

## Q28 - Hint
**Answer:** D  
**Topic:** Computer Networks – TCP Header

The TCP header has ports, sequence and ack numbers, flags, window, checksum and urgent pointer. **IP addresses are in the IP header**, not TCP's (the checksum uses them only through a pseudo-header).

## Q29
<div class="stem"><p>The hamming distance between 10101 and 11110 is-</p></div>

## Q29 - Options
(A) 2
(B) 3
(C) 4
(D) 5

## Q29 - Hint
**Answer:** B  
**Topic:** Computer Networks – Hamming Distance

10101 ⊕ 11110 = 01011 → **3** ones → distance = 3.

## Q30
<div class="stem"><p>Consider the minterm list form of a Boolean function F given below :</p> <p>F(P, Q, R, S) = ⅀m (0, 2, 5, 7, 9, 11) + d(3, 8, 10, 12, 14)</p> <p>Here, m denotes a minterm and d denotes a don't care term. The number of essential prime implicants of the function F is _______.</p></div>

## Q30 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q30 - Hint
**Answer:** A  
**Topic:** Digital Logic – K-Map

F = Σm(0,2,5,7,9,11) + d(3,8,10,12,14).

**Step 1 – Form the largest groups** (don't-cares may be used):

- **Q'S'** = (0, 2, 8, 10)
- **P'QS** = (5, 7)
- **PQ'** = (8, 9, 10, 11)

**Step 2 – Check which are essential:**

- m0 → only Q'S' covers it → essential
- m5 → only P'QS → essential
- m9 → only PQ' → essential

These three cover every minterm → **3** essential prime implicants.

## Q31
<div class="stem"><p>In a database file structure, the search key field is 9 bytes long, the block size is 512 bytes, a record pointer is 7 bytes and a block pointer is 6 bytes. The largest possible order of a non-leaf node in a B+ tree implementing this file structure is</p></div>

## Q31 - Options
(A) 23
(B) 24
(C) 34
(D) 44

## Q31 - Hint
**Answer:** C  
**Topic:** DBMS – B+ Tree Order

6n + 9(n − 1) ≤ 512 → 15n ≤ 521 → **n = 34**.

## Q32
<div class="stem"><p>Which of the following is the best case of cohesion?</p></div>

## Q32 - Options
(A) Functional Cohesion
(B) Communication Cohesion
(C) Logical Cohesion
(D) Temporal Cohesion

## Q32 - Hint
**Answer:** A  
**Topic:** Software Engineering – Cohesion

Cohesion from best to worst: **Functional** > Sequential > Communicational > Procedural > Temporal > Logical > Coincidental.

## Q33
<div class="stem"><p>y<sub>acc</sub> is which of the following parsers?</p></div>

## Q33 - Options
(A) Predictive Parser
(B) SLR Parser
(C) CLR Parser
(D) LALR Parser

## Q33 - Hint
**Answer:** D  
**Topic:** Compiler Design – Parser Generators

**YACC** generates **LALR(1)** parsers.

## Q34
<div class="stem"><p>Consider the following flow graph:</p> <p><img src="tests/img/t8/q34-295f7c.png"/></p> <p>What is the cyclomatic complexity of above figure?</p></div>

## Q34 - Options
(A) 5
(B) 4
(C) 3
(D) 2

## Q34 - Hint
**Answer:** B  
**Topic:** Software Engineering – Cyclomatic Complexity

Nodes N = 11 (1–11).  
Edges: 1→2, 1→11, 2→3, 3→4, 3→6, 4→5, 5→10, 6→7, 6→8, 7→9, 8→9, 9→10, 10→1 → **E = 13**.

V(G) = E − N + 2 = 13 − 11 + 2 = **4**.

(Check: decision nodes 1, 3, 6 → 3 + 1 = 4.)

## Q35
<div class="stem"><p>When to stop testing?</p></div>

## Q35 - Options
(A) When all quality goals defined at the start of the project have been met.
(B) When running short of time
(C) Both A and B
(D) None of the above

## Q35 - Hint
**Answer:** A  
**Topic:** Software Engineering – Testing

Stop testing when the predefined **quality goals and exit criteria** (coverage, defect density, reliability targets) are met, not just because time is running out.

## Q36
<div class="stem"><p>Evolutionary model is combination of which two models?</p></div>

## Q36 - Options
(A) Prototype and Incremental
(B) Prototype and Iterative
(C) Incremental and Iterative
(D) Waterfall and Incremental

## Q36 - Hint
**Answer:** C  
**Topic:** Software Engineering – Process Models

The evolutionary model combines **iterative** (repeated refinement) and **incremental** (delivering in pieces) development.

## Q37
<div class="stem"><p>Match the following:</p> <p>List-1                                                               List -II</p> <p>(a) Business Requirement Specification         i. System Integration testing</p> <p>(b) System Requirement Specification            ii. Acceptance testing</p> <p>(c) High Level Design                                     iii. Unit testing</p> <p>(d) Low Level Design                                     iv. Component testing</p> <p>Which of the following is true:</p></div>

## Q37 - Options
(A) a-ii, b-i, c-iv, d-iii
(B) a-i, b-ii, c-iv, d-iii
(C) a-iii, b-iv, c-i, d-ii
(D) None of the above

## Q37 - Hint
**Answer:** A  
**Topic:** Software Engineering – V-Model

Each development phase on the left of the V pairs with a test level on the right:

- Business requirements ↔ **acceptance testing**
- System requirements ↔ **system integration testing**
- High-level design ↔ **component (integration) testing**
- Low-level design ↔ **unit testing**

## Q38
<div class="stem"><p>If every requirement can be checked by a cost-effective process, then the SRS is-</p></div>

## Q38 - Options
(A) Verifiable
(B) Traceable
(C) Modifiable
(D) Complete

## Q38 - Hint
**Answer:** A  
**Topic:** Software Engineering – SRS

**Verifiable**: every requirement can be checked by a finite, cost-effective process.

## Q39
<div class="stem"><p><img src="tests/img/t8/q39-ad58b2.png"/></p> <p>Considering above binary tree, what will be the inorder traversal</p></div>

## Q39 - Options
(A) BADCEGFH
(B) GHFEDCBA
(C) BACDEGFH
(D) GHFDEBCA

## Q39 - Hint
**Answer:** A  
**Topic:** Data Structures – Tree Traversal

Tree: A (left B, right C); C (left D, right E); E (right F); F (left G, right H).

Inorder (L, Root, R): B, **A**, D, **C**, E, G, **F**, H = **BADCEGFH**.

## Q40
<div class="stem"><p>Which scheduler handle the degree of multiprogramming?</p></div>

## Q40 - Options
(A) Medium term scheduler
(B) Long term scheduler
(C) Short term scheduler
(D) None of these

## Q40 - Hint
**Answer:** B  
**Topic:** Operating Systems – Schedulers

The **long-term (job) scheduler** decides how many processes are admitted into memory → it controls the **degree of multiprogramming**.

## Q41
<div class="stem"><p>The Global conceptual Schema in a distributed database contains information about global relations. The condition that all the data of the global relation must be mapped into the fragments, that is, it must not happen that a data item which belongs to a global relation does not belong to any fragment, is called :</p></div>

## Q41 - Options
(A) Disjointness condition
(B) Completeness condition
(C) Reconstruction condition
(D) Aggregation condition

## Q41 - Hint
**Answer:** B  
**Topic:** DBMS – Distributed Databases

Fragmentation rules:

- **Completeness** – every data item of the global relation appears in some fragment ✔
- Reconstruction – the global relation can be rebuilt from its fragments
- Disjointness – a data item isn't repeated across fragments (horizontal fragmentation)

## Q42
<div class="stem"><p>Consider the following table:</p> <p><img src="tests/img/t8/q42-172c8b.png"/></p> <p>Compute the average waiting time of process using round robin scheduling with time quantum 5.</p></div>

## Q42 - Options
(A) 7.1
(B) 7.3
(C) 7.5
(D) 8

## Q42 - Hint
**Answer:** C  
**Topic:** Operating Systems – Round Robin

P1(0,5), P2(1,7), P3(3,3), P4(4,6); quantum 5.

| 0–5 | 5–10 | 10–13 | 13–18 | 18–20 | 20–21 |
|---|---|---|---|---|---|
| P1 ✔ | P2 (2 left) | P3 ✔ | P4 (1 left) | P2 ✔ | P4 ✔ |

WT = CT − AT − BT: P1 = 0, P2 = 20 − 1 − 7 = 12, P3 = 13 − 3 − 3 = 7, P4 = 21 − 4 − 6 = 11.

Average = 30 / 4 = **7.5**.

## Q43
<div class="stem"><p>Let S be the binary semaphore variable S=1 initially. Assume that no blocked processes exist in the system. If the following operations performed how many blocked processes are present in the system at the end?</p> <p>5P, 7V, 10P, 140, 18P, 25V</p></div>

## Q43 - Options
(A) 0
(B) 13
(C) 14
(D) 20

## Q43 - Hint
**Answer:** C  
**Topic:** Operating Systems – Semaphores

Treat S as a counting semaphore (each P −1, each V +1), with "140" read as **14V**:

1 − 5 = −4 → +7 = 3 → −10 = −7 → +14 = 7 → −18 = −11 → +25 = **14**.

A negative value −k means k blocked processes; the final value is **+14**, which means **no process is blocked**.

> **⚠ Note:** By the standard rule, the final value S = 14 means **0** blocked processes, option **(A)**. The key's 14 confuses the semaphore value with the number of blocked processes.

## Q44
<div class="stem"><p>Choose the correct statement(s)</p> <p>A. A problem which is NP-Complete will have the property that it can be solved in polynomial time iff all other NP-complete problems can also be solved in polynomial time.</p> <p>B. All NP-complete problem are NP-hard problems.</p> <p>C. If an NP-hard problem can be solved in polynomial time, then all NP-complete problem can be solved in polynomial time</p> <p>D. All NP-hard-problems are not NP-complete.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q44 - Options
(A) A, C only
(B) B. D only
(C) A, B, C only
(D) A, B, C, D

## Q44 - Hint
**Answer:** D  
**Topic:** Algorithms – NP-Completeness

- A ✔ – if one NP-complete problem is in P, all of them are.
- B ✔ – NP-complete = NP ∩ NP-hard.
- C ✔ – a polynomial-time algorithm for an NP-hard problem would solve every NP problem (including NP-complete ones) in polynomial time.
- D ✔ – some NP-hard problems (e.g. the halting problem) are not in NP, so they are not NP-complete.

## Q45
<div class="stem"><p>A Symbol table is not modified in which phase of a compiler?</p></div>

## Q45 - Options
(A) Semantic Analysis
(B) Syntax Analysis
(C) Lexical Analysis
(D) All of the above

## Q45 - Hint
**Answer:** D  
**Topic:** Compiler Design – Symbol Table

The symbol table is created and **used in every phase**: lexical analysis inserts identifiers, syntax and semantic analysis add types and scope, and code generation adds addresses.

> **⚠ Note:** As worded ("not modified in which phase"), the key's "all of the above" is wrong: the symbol table **is** modified in these phases. The intended question is probably "which phases **use** the symbol table", whose answer is all of them.

## Q46
<div class="stem"><p> Find the correct sequence of prototype software development model.</p> <p>A. Start</p> <p>B. Develop Prototype</p> <p>C. Deliver to customer</p> <p>D. Quick Design</p> <p>E. Quick Play</p> <p>Choose the correct answer from the options given below:</p></div>

## Q46 - Options
(A) A, B, C, D, E
(B) A, E, D, B, C
(C) A, B, D, E, C
(D) A, B, E, D, C

## Q46 - Hint
**Answer:** B  
**Topic:** Software Engineering – Prototyping

Prototype model flow (as per the key): Start → requirements gathering ("Quick Plan") → Quick Design → Build Prototype → (customer evaluation, refinement) → Deliver.

## Q47
<div class="stem"><p>Let N = Number of states in minimized NFA</p> <p>D = Number of states in minmized DFA</p> <p>Which is true ?</p></div>

## Q47 - Options
(A) N &lt; D
(B) N ≥ D
(C) N = D.
(D) N ≤ D

## Q47 - Hint
**Answer:** D  
**Topic:** Theory of Computation – NFA vs DFA

Every DFA is also an NFA, so the minimal NFA is never larger: **N ≤ D**. It can be much smaller: D may be up to 2ᴺ.

## Q48
<div class="stem"><p>Consider the two cascaded 2-to-1 multiplexers as shown in the figure.</p> <p><img src="tests/img/t8/q48-b201f9.png"/></p> <p>The minimal sum of products form of the output X is-</p></div>

## Q48 - Options
(A) ~P~Q + PQR
(B) ~PQ+ QR
(C) PQ + ~P~QR
(D) ~Q~R + PQR

## Q48 - Hint
**Answer:** D  
**Topic:** Digital Logic – Multiplexers

**MUX 1** (select P): input 0 = 0, input 1 = R → output = P'·0 + P·R = **PR**.  
**MUX 2** (select Q): input 0 = R', input 1 = PR → X = Q'·R' + Q·PR.

X = **Q'R' + PQR**.

## Q49
<div class="stem"><p>The primary function of firewall in network security is</p></div>

## Q49 - Options
(A) To monitor network traffic and detect anomalies.
(B) To create virtual private networks for secure communication.
(C) To filter incoming and outgoing network traffic based on security rules
(D) To encrypt data before Transmission.

## Q49 - Hint
**Answer:** C  
**Topic:** Computer Networks – Firewalls

A firewall **filters incoming and outgoing traffic** according to security rules (addresses, ports, protocols, state).

## Q50
<div class="stem"><p>The minimum number of D flip-flops needed to design a mod-258 counter is:</p></div>

## Q50 - Options
(A) 9
(B) 18
(C) 512
(D) 258

## Q50 - Hint
**Answer:** A  
**Topic:** Digital Logic – Counters

A mod-258 counter needs n flip-flops with 2ⁿ ≥ 258 → 2⁸ = 256 < 258 ≤ 512 = 2⁹ → **9** flip-flops.

## Q51
<div class="stem"><p>Match List-I with List-II. List I gives 3 x 3 matrices representing 2D transformations and List-II shows the corresponding transformation diagrams.</p> <p><img src="tests/img/t8/q51-ee6ed0.png"/></p> <p>Choose the correct answer from the options given below:</p></div>

## Q51 - Options
(A) A-IV, B-II, C-III, D-I 
(B) A-IV, B-III, C-II, D-I
(C) A-III, B.II, C-IV, D-I 
(D) A-II, B-IV, C-III, D-I

## Q51 - Hint
**Answer:** D  
**Topic:** Computer Graphics – 2D Transformations

- A = diag(2, 2, 1) → **scale(2, 2)** (II)
- B (2, 2 in the last column) → **translate(2, 2)** (IV)
- C (cos 60 = 0.5, sin 60 = 0.866) → **rotate 60°** (III)
- D [[1,2],[0,1]] → **x-shear by 2** (I)

## Q52
<div class="stem"><p>The format : A → aB refers to which of the following?</p></div>

## Q52 - Options
(A) Chomsky Normal Form
(B) Greibach Normal Form
(C) Backus Naur Form
(D) None of the mentioned

## Q52 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Normal Forms

**Greibach Normal Form**: every rule is A → aα, i.e. a terminal followed by zero or more variables. A → aB fits. (CNF uses A → BC or A → a.)

## Q53
<div class="stem"><p>Which of the following is not a divide and conquer method</p></div>

## Q53 - Options
(A) Binary Search
(B) Merge Sort
(C) Quick Sort
(D) Heap Sort

## Q53 - Hint
**Answer:** D  
**Topic:** Algorithms – Design Paradigms

Binary search, merge sort and quick sort split the problem into subproblems (divide and conquer). **Heap sort** builds a heap and repeatedly extracts the maximum, which is a selection approach based on a data structure, not divide and conquer.

## Q54
<div class="stem"><p>What will be the efficiency of stop and wait protocol, if the transmission time for a frame is 20 ns and propagation time is 30 ns ?</p></div>

## Q54 - Options
(A) 20%
(B) 25%
(C) 40%
(D) 66%

## Q54 - Hint
**Answer:** B  
**Topic:** Computer Networks – Stop-and-Wait

a = Tp / Tt = 30 / 20 = 1.5.  
Efficiency η = 1 / (1 + 2a) = 1 / (1 + 3) = **25%**.

## Q55
<div class="stem"><p>The maximum number of points that can be displayed without overlap on a CRT is referred as-</p></div>

## Q55 - Options
(A) Picture
(B) Resolution
(C) Persistence
(D) Neither (B) nor (C)

## Q55 - Hint
**Answer:** B  
**Topic:** Computer Graphics – Display

**Resolution** = the maximum number of points that can be displayed without overlap.

## Q56
<div class="stem"><p>As per the Software Engineering Institute (SEI), the correct sequence is</p> <p>A. Initial</p> <p>B. Repeatable</p> <p>C. Managed</p> <p>D. Optimizing</p> <p>E. Defined</p> <p>Choose the correct answer from the options given below:</p></div>

## Q56 - Options
(A) A, B, C, D, E
(B) A, B, E, C, D
(C) A, E, C, D, B
(D) A, E, B, C, D

## Q56 - Hint
**Answer:** B  
**Topic:** Software Engineering – CMM

Initial → Repeatable → **Defined** → Managed → Optimizing = A, B, E, C, D.

## Q57
<div class="stem"><p>What does a pixel mask mean?</p></div>

## Q57 - Options
(A) string containing only 1's
(B) string containing only 0's
(C) string containing two 0's
(D) string containing 1's and 0's

## Q57 - Hint
**Answer:** D  
**Topic:** Computer Graphics – Line Attributes

A **pixel mask** is a bit string of **1s and 0s** that specifies which pixels along a line are drawn (1) or skipped (0). It is used for dashed and dotted lines, e.g. 11110000.

## Q58
<div class="stem"><p>Consider the following disk request sequence for a disk with 100 tracks:</p> <p>98, 183, 37, 122, 14, 124, 65, 67</p> <p>Head pointer is starting at 53. Find the number of head movements in cylinders using SSTF scheduling-</p></div>

## Q58 - Options
(A) 221
(B) 219
(C) 236
(D) 225

## Q58 - Hint
**Answer:** C  
**Topic:** Operating Systems – Disk Scheduling (SSTF)

Head at 53. Always go to the nearest pending request:

| Move | Distance |
|---|---|
| 53 → 65 | 12 |
| 65 → 67 | 2 |
| 67 → 37 | 30 |
| 37 → 14 | 23 |
| 14 → 98 | 84 |
| 98 → 122 | 24 |
| 122 → 124 | 2 |
| 124 → 183 | 59 |

Total = **236** cylinders. (The stem says 100 tracks but lists 183; ignore that inconsistency.)

## Q59
<div class="stem"><p>Software Testability is simply how easily a software program can be tested. Which one characteristics does not lead to testable software?</p></div>

## Q59 - Options
(A) Observability
(B) Controllability
(C) Repairability
(D) Understandability

## Q59 - Hint
**Answer:** C  
**Topic:** Software Engineering – Testability

Testability characteristics (Bach/Pressman): **operability, observability, controllability, decomposability, simplicity, stability, understandability**. **Repairability** is a maintainability attribute, not a testability one.

## Q60
<div class="stem"><p>In synchronization, which algorithm satisfy progress, mutual exclusion and bounded waiting?</p></div>

## Q60 - Options
(A) Dekker's algorithm
(B) Test and set
(C) Peterson's algorithm
(D) None of these

## Q60 - Hint
**Answer:** C  
**Topic:** Operating Systems – Synchronization

**Peterson's algorithm** (2 processes) satisfies **mutual exclusion, progress and bounded waiting** in software. A simple test-and-set lock does not guarantee bounded waiting.

## Q61
<div class="stem"><p>Which of the following query/queries return the employee id and name of employees whose salary is greater than the salary of all employees in department number 20 of university. order result by employee id (refer table structures given above).</p> <p>A.Select eid, name from employee where salary &gt; (select salary from employee where deptno=20) order by eid</p> <p>B.Select eid, name from employee where salary &gt; (select salary from employee where deptno=20);</p> <p>C.Select eid, name from employee where salary &gt; all(select salary from employee where deptno=20) order by eid</p> <p>Choose the correct answer from the options given below:</p></div>

## Q61 - Options
(A) (a) and (b) only
(B) (a) and (c) only
(C) (b) only
(D) (c) only

## Q61 - Hint
**Answer:** D  
**Topic:** DBMS – SQL Subqueries

- (A), (B): `salary > (subquery)` needs the subquery to return **one value**; department 20 has many employees → runtime error. (B) also lacks ORDER BY.
- **(C)**: `> ALL (subquery)` compares with every salary in dept 20 and orders by eid ✔

## Q62
<div class="stem"><p>The register which contains the data to be written into or read out of the addressed location is called:</p></div>

## Q62 - Options
(A) Memory addressed register
(B) Memory Data register
(C) Program counter
(D) Index register

## Q62 - Hint
**Answer:** B  
**Topic:** Computer Organization – Registers

**MDR (Memory Data Register / MBR)** holds the data being written to or read from memory. MAR holds the **address**.

## Q63
<div class="stem"><p>Consider a 4-segment pipeline with stage delays (2ns, 8ns, 3ns, 10ns). Find the time taken to execute 100 tasks in the above pipeline.</p></div>

## Q63 - Options
(A) 1020 ns
(B) 1000 ns
(C) 1030 ns
(D) can't find out

## Q63 - Hint
**Answer:** C  
**Topic:** Computer Organization – Pipelining

Cycle time = max(2, 8, 3, 10) = 10 ns. Time = (k + n − 1) × 10 = (4 + 99) × 10 = **1030 ns**.

## Q64
<div class="stem"><p>Regarding the code optimization, choose the correct sequence</p> <p>A. Algebraic Simplification</p> <p>B. Use of machine idioms</p> <p>C. Redundant instruction elimination</p> <p>D. Flow of control optimization</p> <p>E. Improved target code</p> <p>Choose the correct answer from the options given below:</p></div>

## Q64 - Options
(A) A, C, B, D, E
(B) B, C, D, A, E
(C) C, D, A, B, E
(D) D, B, A, C, E

## Q64 - Hint
**Answer:** C  
**Topic:** Compiler Design – Peephole Optimization

Typical peephole optimization sequence (as per the key): redundant instruction elimination → flow-of-control optimization → algebraic simplification → use of machine idioms → improved target code.

## Q65
<div class="stem"><p>Which of the following is true about the z-buffer algorithm?</p></div>

## Q65 - Options
(A) It is a depth sort algorithm
(B) No limitation on total number of objects
(C) Comparisons of objects is done
(D) z-buffer is initialized to background colour at start of algorithm

## Q65 - Hint
**Answer:** B  
**Topic:** Computer Graphics – Z-buffer

- Z-buffer is an **image-space** algorithm that compares **depths per pixel**, not objects.
- It handles **any number of objects** ✔ (B).
- The z-buffer is initialised to the **maximum depth**; the **frame buffer** is initialised to the background colour.

## Q66
<div class="stem"><p>An autonomous homogenous environment is which of the following ?</p></div>

## Q66 - Options
(A) The same DBMS is at each node and each DBMS works independently.
(B) The same DBMS is at each node and a central DBMS coordinates database access.
(C) A different DBMS is at each node and each DBMS works independently.
(D) A different DBMS is at each node and a central DBMS coordinates database access.

## Q66 - Hint
**Answer:** A  
**Topic:** DBMS – Distributed Databases

**Homogeneous** = the same DBMS at every site; **autonomous** = each site's DBMS works independently (no central coordinator).

## Q67
<div class="stem"><p>A distributed database can use which of the following strategies?</p></div>

## Q67 - Options
(A) Totally centralized at one location and accessed by many sites
(B) Partially or totally replicated across sites
(C) Partitioned into segments at different sites
(D) All of the above

## Q67 - Hint
**Answer:** D  
**Topic:** DBMS – Distributed Databases

Distributed database design options: **centralised** (one site, accessed by many), **replication** (partial or full copies) and **fragmentation/partitioning**, or combinations of these.

## Q68
<div class="stem"><p>The various aspects of data mining methodologies is/are ____________</p> <p>(i) Mining various and new kinds of knowledge</p> <p>(ii) Mining knowledge in multidimensional space</p> <p>(iii) Pattern evaluation and pattern or constraint-guided mining.</p> <p>(iv)  Handling uncertainty, noise, or incompleteness of data</p></div>

## Q68 - Options
(A) (i), (ii) and (iv) only
(B) (ii), (iii) and (iv) only
(C) (i), (ii) and (iii) only
(D) All (i), (i), (iii) and (iv)

## Q68 - Hint
**Answer:** D  
**Topic:** Data Mining – Issues

Han & Kamber's "mining methodology" issues include: mining new kinds of knowledge, mining in multidimensional space, pattern evaluation and constraint-guided mining, and handling noise and incomplete data → all four.

## Q69
<div class="stem"><p>When is it best to use a NoSQL database?</p></div>

## Q69 - Options
(A) When providing confidentiality, integrity and availability is crucial
(B) When the data is predictable
(C) When the retrieval of large quantities of data is needed
(D) When the retrieval speed of data is not critical

## Q69 - Hint
**Answer:** C  
**Topic:** DBMS – NoSQL

NoSQL stores (key-value, document, column-family) scale horizontally and suit **retrieving large volumes of (often unstructured) data quickly**. When strict ACID transactions are crucial, an RDBMS is usually preferred.

## Q70
<div class="stem"><p>Match the following:</p> <p><img src="tests/img/t8/q70-10b0b6.png"/></p></div>

## Q70 - Options
(A) (a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)
(B) (a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)
(C) (a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)
(D) (a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)

## Q70 - Hint
**Answer:** B  
**Topic:** Computer Networks – Layers

- MAC sublayer → **channel allocation** (ii)
- Data link layer → **synchronisation** (framing) (iv)
- Session layer → **checkpoints** (i)
- Presentation layer → **syntax and semantics** (iii)

## Q71
<div class="stem"><p>Consider a binary code that consists only four valid codewords as given below.</p> <p>00000, 01011, 10101, 11110</p> <p>Let minimum Hamming distance of code be p and maximum number of erroneous bits that can be corrected by the code be q. The value of p and q are:</p></div>

## Q71 - Options
(A) p = 3 and q = 1
(B) p = 3 and q = 2
(C) p = 4 and q = 1
(D) p = 4 and q = 2

## Q71 - Hint
**Answer:** A  
**Topic:** Computer Networks – Hamming Distance

Pairwise distances: 3, 3, 4, 4, 3, 3 → d_min = **p = 3** → corrects ⌊(3 − 1)/2⌋ = **q = 1** error.

## Q72
<div class="stem"><p>Consider bit stream</p> <p>01111010111111011110111</p> <p>Using bit stuffing how many 0's should be stuffed in data using a flag pattern of ‘01111’</p></div>

## Q72 - Options
(A) 5
(B) 4
(C) 3
(D) 6

## Q72 - Hint
**Answer:** A  
**Topic:** Computer Networks – Bit Stuffing

Flag = 01111, so data must never contain four 1s in a row → the sender **stuffs a 0 after every three consecutive 1s**.

Runs of 1s in 0 **1111** 0 1 0 **111111** 0 **1111** 0 **111**:

- 1111 → 1 stuffed (after the 3rd 1)
- 1 → 0
- 111111 → 2 stuffed (after the 3rd 1, and again after 3 more)
- 1111 → 1
- 111 (at the end) → 1

Total = 1 + 2 + 1 + 1 = **5**.

## Q73
<div class="stem"><p>Consider statement about DNS</p> <p>S1 : A primary server loads all the information from the disk file and secondary server loads all information from primary server by zone transfer.</p> <p>S2 : DNS some times uses caching for faster response which is authoritative.</p> <p>S3 : UDP is used when size of response message is less than 512 B otherwise TCP is used.</p> <p>Which are correct?</p></div>

## Q73 - Options
(A) S1, S2
(B) S1, S3
(C) S2, S3
(D) S1, S2, S3

## Q73 - Hint
**Answer:** D  
**Topic:** Computer Networks – DNS

- S1 ✔ – the primary loads from its zone file; secondaries use zone transfer.
- S3 ✔ – UDP for responses under 512 bytes, otherwise TCP.
- S2 – DNS caches responses for speed (the key treats S2 as true).

> **⚠ Note:** Cached replies are marked **non-authoritative**, so strictly S2 is false and the answer would be (B) S1, S3. The key gives (D), as in Test 1 Q45.

## Q74
<div class="stem"><p>What is the output for below program :</p> <p># include &lt;stdio.h&gt;</p> <p>int main()</p> <p>{</p> <p>int n ;</p> <p>for (n = 7; n! = 0; n - -)</p> <p>printf (" n = %d", n - -) ;</p> <p>getchar () ;</p> <p>return 0 ;</p> <p>}</p></div>

## Q74 - Options
(A) 1 3 5 7
(B) 3 5 7
(C) 7 5 31
(D) Infinite loop

## Q74 - Hint
**Answer:** D  
**Topic:** Programming in C – Loops

n is decremented **twice** per iteration: once in printf (n--) and once in the loop update. n goes 7 → 5 → 3 → 1 → −1 → … and is never exactly 0 when the test `n != 0` runs → **infinite loop**.

## Q75
<div class="stem"><p>Which of the following does not interrupt a running process?</p></div>

## Q75 - Options
(A) Device
(B) Timer
(C) Scheduler
(D) Power Failure

## Q75 - Hint
**Answer:** C  
**Topic:** Operating Systems – Interrupts

Devices (I/O completion), the timer and power failure all generate **interrupts**. The **scheduler** is OS code that runs **because of** an interrupt (e.g. a timer tick); it doesn't interrupt a process itself.

## Q76
<div class="stem"><p>Which of the following type of function is an ideal candidate for being declared inline ?</p></div>

## Q76 - Options
(A) A function that is small and not called frequently
(B) A function that is small and called frequently
(C) A function that is not small and is not called frequently
(D) A function that is not small and is called frequently

## Q76 - Hint
**Answer:** B  
**Topic:** Programming in C++ – Inline Functions

Inlining removes call overhead but copies the body at every call site. It pays off for **small functions called frequently**: big savings, little code growth.

## Q77
<div class="stem"><p>Which of the following is true?</p></div>

## Q77 - Options
(A) All objects of a class share all data members of class
(B) Objects of a class do not share non-static members. Every object has its own copy
(C) Objects of a class do not share code of non-static methods, they have their own copy
(D) None of the above

## Q77 - Hint
**Answer:** B  
**Topic:** Programming in C++ – Objects

Each object has its **own copy of non-static data members**. Static members, and the code of all member functions, are **shared** by all objects of the class.

## Q78
<div class="stem"><p>The process of digitizing a given picture definition into a set of pixel-intensity for storage in the frame buffer is called</p></div>

## Q78 - Options
(A) Rasterization
(B) Encoding
(C) Scan conversion
(D) True color system

## Q78 - Hint
**Answer:** C  
**Topic:** Computer Graphics – Basics

**Scan conversion** turns a picture definition (lines, polygons) into pixel intensities in the frame buffer. (Rasterization is often used as a synonym; the key uses "scan conversion".)

## Q79
<div class="stem"><p>The three major methods of allowing disk space that are in wide use are:</p></div>

## Q79 - Options
(A) Linked
(B) Indexed
(C) Contiguous
(D) All of these

## Q79 - Hint
**Answer:** D  
**Topic:** Operating Systems – File Allocation

The three standard disk allocation methods are **contiguous, linked and indexed**.

## Q80
<div class="stem"><p>In basic COCOMO, a organic project has the size of 7.5 KLOC. What will be the effort?</p></div>

## Q80 - Options
(A) 10 PM
(B) 20 PM
(C) 18 PM
(D) 16 PM

## Q80 - Hint
**Answer:** B  
**Topic:** Software Engineering – COCOMO

Organic mode: E = 2.4 (KLOC)^1.05 = 2.4 × 7.5^1.05 ≈ 2.4 × 8.29 ≈ **19.9 ≈ 20 PM**.

## Q81
<div class="stem"><p>Assume that f(n) and g(n) are asymptotically positive. Which of the following is correct?</p></div>

## Q81 - Options
(A) f(n)=O(g(n)) and g(n)=O(h(n)) à f(n)=ω(h(n))
(B) f(n)= Ω (g(n)) and g(n)= Ω(h(n)) à f(n)=O(h(n))
(C) f(n)=o(g(n)) and g(n)=o(h(n)) à f(n)=o(h(n))
(D) f(n)=ω(g(n)) and g(n)=ω(h(n)) à f(n)= Ω (h(n))

## Q81 - Hint
**Answer:** C  
**Topic:** Algorithms – Asymptotic Notation

Little-o is **transitive**: f = o(g) and g = o(h) ⇒ f = o(h).

- (A) O and O give O, not ω.
- (B) Ω and Ω give Ω, not O.
- (D) ω and ω give ω (so also Ω); the key treats only (C) as the intended answer.

## Q82
<div class="stem"><p>Which of the following are correct for the neural network?</p> <p>A. The training time depends upon the size of network.</p> <p>B. Neural network can be simulated on the conventional computer.</p> <p>C. Neural network mimic the same way as that of the humans brain.</p> <p>D. A neural network include feedback.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q82 - Options
(A) A and B only
(B) A, C and D only
(C) A. B and C only
(D) A and C only

## Q82 - Hint
**Answer:** B  
**Topic:** Machine Learning – Neural Networks

- **A ✔** – bigger networks take longer to train.
- **B ✔** – neural networks are routinely **simulated on conventional computers** (that is how most are run).
- **C** – ANNs are **inspired by** the brain, but they don't work "the same way".
- **D ✔** – recurrent networks include feedback.

> **⚠ Note:** B is clearly true and C overstates the brain analogy, so the better answer is **(A) A and B** (or A, B, D). The key's (B) "A, C, D" leaves out the plainly true statement B.

## Q83
<div class="stem"><p>In the rational agent approach,</p> <ol> <li>AI acts rationally means acting so as to achieve one's goals, given one's beliefs</li> <li>The ability to achieve human-level performance in all cognitive tasks, </li> <li> Both 1 and 2</li> <li> None of the above</li> </ol></div>

## Q83 - Options
(A) 1
(B) 2
(C) 3
(D) 4

## Q83 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Rational Agents

In the rational-agent approach, acting rationally means **acting to achieve one's goals given one's beliefs** (statement 1). Human-level performance in all cognitive tasks is the goal of strong/general AI, not the definition of rationality.

## Q84
<div class="stem"><p>Crossword puzzle in Partially Observable or Fully Observable?</p></div>

## Q84 - Options
(A) Fully Observable
(B) Partially Observable
(C) Both 1 and 2
(D) None of the above

## Q84 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Environments

A crossword puzzle shows the agent the **entire grid and all clues** → **fully observable** (also deterministic, static, discrete, single-agent).

## Q85
<div class="stem"><p>In Hill Climbing , Make a big jump. Randomly select a state far away from the current state, is solution of -</p></div>

## Q85 - Options
(A) Plateau
(B) Local maximum 
(C) Ridge
(D) None of the Above

## Q85 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Hill Climbing

On a **plateau** all neighbours have the same value, so there is no direction to climb. The fix is a **big jump** to a distant random state.

(Local maximum → backtrack or random restart; ridge → move in several directions at once.)

## Q86
<div class="stem"><p>Which of the following is not true about Global Variables:</p></div>

## Q86 - Options
(A) The values of the Global variables which are sent to the called function may be changed inadvertently by the called function.
(B) Functions are supposed to be independent and isolated modules. This character is lost, if they use global variables.
(C) It is not immediately apparent to the reader which values are being sent to the called function
(D) A function that uses global variables does not suffer from reusability.

## Q86 - Hint
**Answer:** D  
**Topic:** Programming – Global Variables

Global variables cause side effects (A), break module independence (B) and hide data flow (C). They **do** hurt reusability, because the function depends on outside state. So "does not suffer from reusability" (D) is the false statement.

## Q87
<div class="stem"><p>Match the following-</p> <p><img src="tests/img/t8/q87-62672a.png"/></p></div>

## Q87 - Options
(A) P-2, Q-1, R-3,S-4
(B) P-4, Q-, R-2, S-1
(C) P-2, Q-4, R-1, S-3
(D) P-4, Q-3, R-1,S-2

## Q87 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Search

- BFS → **complete** if a solution exists (2)
- DFS → not guaranteed complete or optimal (4)
- Best-first → expands the most promising node by heuristic (1)
- A\* → f(n) = g(n) + h(n) avoids already-expensive paths (3)

## Q88
<div class="stem"><p>Which of the following searches belongs to a totally ordered plan search?</p></div>

## Q88 - Options
(A) Forward state-space search
(B) Hill-climbing search
(C) Depth-first search
(D) Breadth-first search

## Q88 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Planning

**Forward (and backward) state-space search** produce **totally ordered plans** (a strict linear sequence of actions). Partial-order planners leave some actions unordered.

## Q89
<div class="stem"><p>Feedforward networks are used for?</p></div>

## Q89 - Options
(A) Pattern mapping
(B) Pattern association
(C) Pattern classification
(D) All of the above

## Q89 - Hint
**Answer:** D  
**Topic:** Machine Learning – Feedforward Networks

Feed-forward networks are used for **pattern mapping, pattern association and pattern classification**.

## Q90
<div class="stem"><p>A heuristic function is called consistent -</p></div>

## Q90 - Options
(A) h(n) ≤ h*(n),h always underestimates the true cost.
(B) heuristic satisfies the triangle inequality (for all nodes n1,n2):h(n1) ≤ c(n1 → n2) + h(n2)
(C) Both A and B
(D) None of the above

## Q90 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Heuristics

**Consistent (monotone)**: h(n₁) ≤ c(n₁, n₂) + h(n₂) (triangle inequality). (A) is the definition of **admissible**.

## Q91
<div class="stem"><p>Choose the correct option describing the features of Artificial neural network</p> <p>A. It is essentially machine learning algorithm.</p> <p>B. It is useful when solving the problems for which the data set is very large.</p> <p>C. They are able to extract features without input from the programmer.</p> <p>D. These are systems modeled on the human brain and nervous system.</p> <p>Choose the correct answer from the options given below</p></div>

## Q91 - Options
(A) All the statements are correct.
(B) Only B &amp; C are correct.
(C) Only A &amp; D are correct.
(D) All the statements are not correct.

## Q91 - Hint
**Answer:** A  
**Topic:** Machine Learning – Neural Networks

All four statements are correct: ANNs are machine-learning algorithms (A), work best with large datasets (B), learn features automatically without hand-crafted features (C), and are inspired by the brain's neurons and synapses (D).

## Q92
<div class="stem"><p>In Intermediate COCOMO Model ,the software development effort as a function of program size and set of ____________Cost Drivers</p></div>

## Q92 - Options
(A) 14
(B) 15
(C) 5
(D) 12

## Q92 - Hint
**Answer:** B  
**Topic:** Software Engineering – COCOMO

Intermediate COCOMO adjusts effort with **15 cost drivers** (product, hardware, personnel and project attributes) combined into the Effort Adjustment Factor.

## Q93
<div class="stem"><p>Consider the following statements regarding risk management strategies:</p> <p>S1: In Reactive strategies –team builds a plan to avoid risks if they can or to minimize risks if they turn into problems.</p> <p>S2:In Proactive strategies–team does nothing until a risk becomes a problem.</p> <p> Which of the above is not Correct?</p></div>

## Q93 - Options
(A) Only S1
(B) Only S2
(C) Both S1and S2
(D) None of the above

## Q93 - Hint
**Answer:** C  
**Topic:** Software Engineering – Risk Management

The definitions are **swapped**:

- **Reactive** = do nothing until a risk becomes a problem (fire-fighting).
- **Proactive** = plan ahead to avoid or minimise risks.

Both statements are incorrect.

## Q94
<div class="stem"><p>A computer has 10 tape drives with n processes competing for them. Each process may need two drives. What is the maximum value of n for the system to be deadlock free?</p></div>

## Q94 - Options
(A) 4
(B) 12
(C) 9
(D) 11

## Q94 - Hint
**Answer:** C  
**Topic:** Operating Systems – Deadlock

Each process needs 2 drives. Worst case: each holds 1. Deadlock-free if n(2 − 1) + 1 ≤ 10 → n ≤ 9 → **n = 9**.

## Q95
<div class="stem"><p>Match the following</p> <p><img src="tests/img/t8/q95-9eb155.png"/></p></div>

## Q95 - Options
(A) P-2, Q-1, R-3,S-4
(B) P-4, Q-3, R-2, S-1
(C) P-2, Q-1, R-4, S-3
(D) P-4, Q-3, R-1,S-2

## Q95 - Hint
**Answer:** C  
**Topic:** Operating Systems – Distributed Systems

- Load balancing → distribute processes to even out the workload (2)
- Computation speed-up → sub-processes run concurrently on different sites (1)
- Process migration → execute a whole process, or parts of it, at different sites (4)
- Data access → run the process remotely instead of moving all the data (3)

## Q96
<div class="stem"><p>Consider the following statements.</p> <p>S1: 3NF is designed to allow transitive dependencies.</p> <p>S2: A relational schema R is in 3NF, Every non-prime attribute of R is non-transitively dependent on every key of R.</p></div>

## Q96 - Options
(A) Only S1 true.
(B) Only S2 is true.
(C) Both S1 &amp; S2 are false.
(D) Both S1 and S2 are true.

## Q96 - Hint
**Answer:** B  
**Topic:** DBMS – 3NF

- **S1 ✘** – 3NF **removes** transitive dependencies of non-prime attributes on keys.
- **S2 ✔** – in 3NF every non-prime attribute is **non-transitively** dependent on every key.

## Q97
<div class="stem"><p>String pattern matching , ‘%ram%’ matches-</p></div>

## Q97 - Options
(A) any string containing “ram” as a substring.
(B) any string containing starting with “ram”.
(C) any string containing an ending with “”.ram
(D) matches any string of exactly 3 characters.

## Q97 - Hint
**Answer:** A  
**Topic:** DBMS – SQL LIKE

In LIKE, `%` matches **any sequence** of characters (including none), so `'%ram%'` matches any string **containing "ram"**. (`_` matches exactly one character.)

## Q98
<div class="stem"><p>The total number of unused and used states in n-bit Johnson counter are given by :</p></div>

## Q98 - Options
(A) 2*n and 2<sup>n</sup> – 2*n
(B) 2*n and 2*n
(C) 2<sup>n</sup> – 2*n and 2*n
(D) 2<sup>n</sup> – 2*n and 2<sup>n</sup> – 2*n

## Q98 - Hint
**Answer:** C  
**Topic:** Digital Logic – Johnson Counter

An n-bit Johnson (twisted-ring) counter cycles through **2n** states, so **2ⁿ − 2n** states are unused.

## Q99
<div class="stem"><p>Which of the following statements is incorrect about Graph.</p> <ul> </ul></div>

## Q99 - Options
(A) A finite graph is bipartite if and only if it contains no cycles of even length.<br> <ul> </ul>
(B) If u and v are two vertices of a tree, there is a unique path connecting them.<br> <ul> </ul>
(C) The sum of the degrees of the vertices of any finite graph is even. <br> <ul> </ul>
(D) If the distance d(u, v) between two vertices u and v that can be connected by a path in a graph is defined to be the length of the shortest path connecting them, then the distance function satisfies the triangle inequality: d(u, v) + d(v, w) ≥ d(u, w). <br> <ul> </ul>

## Q99 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Graph Theory

- **(A) ✘** – a graph is bipartite **iff it has no odd-length cycles**; even cycles are fine.
- (B) ✔ – in a tree the path between two vertices is unique.
- (C) ✔ – the handshake lemma: sum of degrees = 2E.
- (D) ✔ – shortest-path distance satisfies the triangle inequality.

## Q100
<div class="stem"><p>From a deck of 52 playing cards, king, queen and jack of clubs are removed and then shuffled. A card is drawn from the remaining cards. Find the probability of getting a Jack:</p></div>

## Q100 - Options
(A) 3/52
(B) 3/49
(C) 1/13
(D) 1/ 4

## Q100 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Probability

49 cards remain, and only the club jack was removed → 3 jacks left → P = **3/49**.
