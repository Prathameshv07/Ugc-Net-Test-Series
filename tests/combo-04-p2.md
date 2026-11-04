<!-- Combo Test 4 · Paper 2 (CSA) · original question numbers kept in the source data -->

## Q1
<div class="stem"><p>An Internet Service Provider (ISP) has the following chunk of CIDR- based IP addresses available with it 218.14.192.0/22. The ISP wants to give half of this chunk of addresses to Organization A and a quarter to Organization B, while retaining the remaining with it. Which of the following is a valid prefix length for Organization A and Organization B ?</p></div>

## Q1 - Options
(A) 23 and 24
(B) 20 and 21
(C) 22 and 22
(D) 22 and 23

## Q1 - Hint
**Answer:** A  
**Topic:** Computer Networks – CIDR

**Step 1:** /22 → 32 − 22 = 10 host bits → 2¹⁰ = 1024 addresses.  
**Step 2:** Half = 512 = 2⁹ addresses → 9 host bits → prefix **/23** (Org A).  
**Step 3:** Quarter = 256 = 2⁸ → 8 host bits → prefix **/24** (Org B).

Rule: each halving of the block adds 1 to the prefix length.

## Q2
<div class="stem"><p>Consider a demand paging system with four-page frames (initially empty) and an LRU page replacement policy. For the following page reference string 7, 2,7,3, 2,5,3, 4,6,7,7,1,5,6,1 the page fault rate, defined as the ratio of number of page faults to the number of memory accesses (rounded off to one decimal place) is_________.</p></div>

## Q2 - Options
(A) 1.5
(B) 0.5
(C) 0.6
(D) 0.8

## Q2 - Hint
**Answer:** C  
**Topic:** Operating Systems – Page Replacement (LRU)

4 frames, LRU. String: 7, 2, 7, 3, 2, 5, 3, 4, 6, 7, 7, 1, 5, 6, 1

- Faults: 7, 2, 3, 5 (fill frames) → then 4 (out 7), 6 (out 2), 7 (out 5), 1 (out 3), 5 (out 4)
- Hits: 7, 2, 3, 7, 6, 1

Faults = **9** out of 15 → rate = 9/15 = **0.6**.

## Q3
<div class="stem"><p>Which of the following is the type of software that has self-replicating software that causes damage to files and system ?</p></div>

## Q3 - Options
(A) Viruses
(B) Trojan horses
(C) Bots
(D) None of the above

## Q3 - Hint
**Answer:** A  
**Topic:** Computer Networks – Malware

A **virus** is self-replicating code that attaches to host files and damages files and systems. A Trojan does not replicate; bots are remotely controlled machines.

## Q4
<div class="stem"><p>If every requirement can be checked by a cost effective process, then SRS is called</p></div>

## Q4 - Options
(A) Verifiable
(B) Traceable
(C) Modifiable
(D) Complete

## Q4 - Hint
**Answer:** A  
**Topic:** Software Engineering – SRS Characteristics

- **Verifiable** – every requirement can be checked by a cost-effective process (test, inspection) ✔
- Traceable – each requirement's origin and its later links are clear.
- Modifiable – easy to change consistently.
- Complete – everything is included.

## Q5
<div class="stem"><p>In a RSA cryptosystem, a participant A uses two prime numbers p = 11 and q = 5 to generate her public and private keys. If the public key of A is 3, then the private key of A is ___.</p></div>

## Q5 - Options
(A) 27
(B) 28
(C) 29
(D) 30

## Q5 - Hint
**Answer:** A  
**Topic:** Computer Networks – RSA

**Step 1:** n = 11 × 5 = 55; φ(n) = 10 × 4 = **40**.  
**Step 2:** Find d with e·d ≡ 1 (mod 40), e = 3.  
**Step 3:** Try multiples: 40k + 1 divisible by 3 → k = 2 → 81 / 3 = **27**.

Check: 3 × 27 = 81 = 2 × 40 + 1 ✔. Private key d = **27**.

## Q6
<div class="stem"><p>If an operating system does not allow a child process to exist when the parent process has been terminated, this phenomenon is called as</p></div>

## Q6 - Options
(A) Threading
(B) Cascading termination
(C) Zombie termination
(D) Process killing

## Q6 - Hint
**Answer:** B  
**Topic:** Operating Systems – Processes

**Cascading termination**: when a parent terminates (normally or abnormally), the OS terminates **all its children** as well. Zombie = a finished child whose exit status hasn't been collected yet.

## Q7
<div class="stem"><p>In a token ring network the transmission speed is 107 bps and the propagation speed is 200 m/μs. The 1-bit delay in this network is equivalent to-</p></div>

## Q7 - Options
(A) 20 m
(B) 30 m
(C) 50 m
(D) 40 m

## Q7 - Hint
**Answer:** A  
**Topic:** Computer Networks – Token Ring

**Step 1:** Time for 1 bit = 1 / 10⁷ s = **0.1 μs**.  
**Step 2:** Distance the signal travels in that time = 200 m/μs × 0.1 μs = **20 m**.

So a 1-bit delay equals 20 m of cable.

## Q8
<div class="stem"><p>A disk drive has 100 cylinders, numbered 0 to 99. Disk requests come to the disk driver for cyclinders 12, 26, 24, 4, 42, 8 and 50 in that order. The driver is currently serving a request at cyclinder 24. A seek takes 6 msec per cyclinder moved. How much seek time is needed for shortest seek time first (SSTF) algorithm?</p></div>

## Q8 - Options
(A) 0.984 sec
(B) 0.396 sec
(C) 0.738 sec 
(D) 0.42 sec

## Q8 - Hint
**Answer:** D  
**Topic:** Operating Systems – Disk Scheduling (SSTF)

Head at 24 (that request is being served). Pending: 12, 26, 4, 42, 8, 50.

| Move | Distance |
|---|---|
| 24 → 26 (nearest) | 2 |
| 26 → 12 (14 vs 42 at 16) | 14 |
| 12 → 8 | 4 |
| 8 → 4 | 4 |
| 4 → 42 | 38 |
| 42 → 50 | 8 |

Total = 70 cylinders × 6 ms = 420 ms = **0.42 s**.

## Q9
<div class="stem"><p>A Binary Search Tree (BST) stores values in the range 37 to 573. Consider the following sequence of keys.</p> <p>I.  81, 537, 102, 439, 285, 376, 305</p> <p>II. 52, 97, 121, 195, 242, 381, 472</p> <p>III. 142, 248, 520, 386, 345, 270, 307</p> <p>IV. 550, 149, 507, 395, 463, 402, 270</p> <p>Suppose the BST has been unsuccessfully searched for key 273. Which all of the above sequences list nodes in the order in which we could have encountered them in the search?</p></div>

## Q9 - Options
(A) II and III only
(B) I and III only
(C) III and IV only
(D) III only

## Q9 - Hint
**Answer:** D  
**Topic:** Data Structures – BST Search Path

Searching for 273: at each node go **left if 273 < node, right if 273 > node**, and keep a valid range (low, high).

- **I:** 81 → R, 537 → L, 102 → R, 439 → L, 285 → **L** (273 < 285), but next is **376 > 285** ✘
- **II:** … 381 → **L**, but next is **472 > 381** ✘
- **III:** 142 R (142, ∞), 248 R (248, ∞), 520 L (248, 520), 386 L (248, 386), 345 L (248, 345), 270 R (270, 345), 307 in range ✔
- **IV:** 550 L, 149 R, 507 L, 395 L (149, 395), then **463 > 395** ✘

Only **III**.

## Q10
<div class="stem"><p>Suppose that a group contains 7 members. Each member of the group wants to communicate secretly with the others using symmetric key cryptographic system. The communication between any two persons should not be decodable by the others in the group. The number of keys required in the system as a whole to satisfy the confidentiality requirement is</p></div>

## Q10 - Options
(A) 21
(B) 14
(C) 42
(D) 49

## Q10 - Hint
**Answer:** A  
**Topic:** Computer Networks – Symmetric Keys

Each **pair** of members needs its own secret key → number of pairs = C(7, 2) = 7 × 6 / 2 = **21**.

## Q11
<div class="stem"><p>Consider the following set of processes and the length of CPU burst time given in milliseconds:</p> <p>Process                                            CPU Burst time (ms)</p> <p>P1                                                      5</p> <p>P2                                                      7</p> <p>P3                                                      6</p> <p>P4                                                      4</p> <p>Assume that processes being scheduled with Round-Robin Scheduling Algorithm with time quantum 4 ms. The the waiting time for P4 is .............. ms.</p></div>

## Q11 - Options
(A) 0
(B) 4
(C) 12
(D) 6

## Q11 - Hint
**Answer:** C  
**Topic:** Operating Systems – Round Robin

All arrive at 0, quantum 4. Order P1, P2, P3, P4.

| 0–4 | 4–8 | 8–12 | 12–16 |
|---|---|---|---|
| P1 (1 left) | P2 (3 left) | P3 (2 left) | **P4 done** |

P4 (burst 4) starts at 12 and finishes in one quantum → WT(P4) = 12 − 0 = **12 ms**.

## Q12
<div class="stem"><p>Consider the game tree given below:</p> <p><img src="tests/img/t4/q62-036b73.png"/></p> <p>Here O and □ represent MIN and MAX nodes respectively, The value of the root node of the game tree is:</p></div>

## Q12 - Options
(A) 4
(B) 7
(C) 11
(D) 12

## Q12 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Minimax

Evaluate bottom-up, alternating MIN and MAX: each MIN node takes the smallest child value, each MAX node the largest. Propagating the leaf values gives a root value of **7**.

> **⚠ Note:** Several leaf values in the source figure are missing or not legible, so the full working can't be reproduced. The answer follows the key (same question as Test 2 Q106).

## Q13
<div class="stem"><p>The period of a signal is 100 ms. Its frequency is _________.</p></div>

## Q13 - Options
(A) 100<sup>3</sup>Hertz
(B) 10<sup>-2</sup>KHz
(C) 10<sup>-3</sup>KHz
(D) 10<sup>5</sup> Hertz

## Q13 - Hint
**Answer:** B  
**Topic:** Computer Networks – Signals

f = 1 / T = 1 / 0.1 s = **10 Hz** = 10⁻² kHz.

## Q14
<div class="stem"><p>Consider the following recurrence:</p> <p><img src="tests/img/t4/q64-d73685.png"/></p> <p>Which of the following is true?</p></div>

## Q14 - Options
(A) T(n)= O(log log n)
(B) T(n) = O(log n)
(C) T(n) = O(n1/2)
(D) T(n)= O(n)

## Q14 - Hint
**Answer:** B  
**Topic:** Algorithms – Recurrences (Change of Variable)

T(n) = 2T(√n) + 1

**Step 1 – Substitute** n = 2ᵐ, so √n = 2^(m/2). Let S(m) = T(2ᵐ).  
**Step 2:** S(m) = 2S(m/2) + 1.  
**Step 3 – Master theorem:** a = 2, b = 2, f = 1 → n^(log₂2) = m dominates → S(m) = Θ(m).  
**Step 4 – Back-substitute:** m = log n ⇒ T(n) = **Θ(log n)**.

## Q15
<div class="stem"><p>Consider the regular expression R = (a + b)* (aa + bb) (a + b)* Which deterministic finite automaton accepts the language represented by the regular expression R ?</p> <p><img src="tests/img/t4/q65-fe19b0.png"/></p></div>

## Q15 - Options
(A) A.
(B) B.
(C) C.
(D) D.

## Q15 - Hint
**Answer:** A  
**Topic:** Theory of Computation – DFA Construction

R = (a+b)\*(aa+bb)(a+b)\* = strings containing **aa or bb**.

DFA (A):

- S0 – start. On a → S1 (last symbol a); on b → S2 (last symbol b).
- S1 –a→ S3 (seen aa); S1 –b→ S2.
- S2 –b→ S4 (seen bb); S2 –a→ S1.
- S3, S4 are **accepting** and lead only to each other or themselves → once aa/bb is seen, accept forever.

This is exactly "contains aa or bb".

## Q16
<div class="stem"><p>Consider the following statements:</p> <p>Statement I : In stop and wait protocol sender sends one frame and then waits for an acknowledgement before proceeding for next frame.</p> <p>Statement II : Go-back ARQ uses 6 number of sequence bits then sender window is 32 and receiver window size is 1.</p> <p>Choose the correct answer from the options given below?</p></div>

## Q16 - Options
(A) Both Statement I and Statement II are false
(B) Both Statement I and Statement II are true
(C) Statement I is false but Statement II is true
(D) Statement I is true but Statement II is false

## Q16 - Hint
**Answer:** D  
**Topic:** Computer Networks – Flow Control

- **I ✔** – stop-and-wait sends one frame and waits for its ACK.
- **II ✘** – Go-Back-N with m = 6 sequence bits: sender window = 2ᵐ − 1 = **63** (not 32); receiver window = 1.

(A window of 2ᵐ⁻¹ = 32 applies to **Selective Repeat**.)

## Q17
<div class="stem"><p>Consider the following statements regarding relational database model:</p> <p>(a) NULL values can be used to opt a tuple out of enforcement of a foreign key.</p> <p>(b) Suppose that table T has only one candidate key. If Q is in 3NF, then it is also in BCNF.</p> <p>(c) The difference between the project operator (Π) in relational algebra and the SELECT keyword in SQL is that if the resulting table/set has more than one occurrences of the same tuple, then Π will return only one of them, while SQL SELECT will return all.</p> <p>One can determine that:</p></div>

## Q17 - Options
(A) a) and (b) are true.
(B) a) and (c) are true.
(C) b) and (c) are true.
(D) (a), (b) and (c) are true.

## Q17 - Hint
**Answer:** D  
**Topic:** DBMS – Relational Concepts

- **(a) ✔** – a foreign key that is NULL is not checked against the referenced table.
- **(b) ✔** – a 3NF violation of BCNF needs overlapping candidate keys; with only one candidate key, 3NF ⇒ BCNF.
- **(c) ✔** – relational algebra works on **sets** (duplicates removed); SQL SELECT returns a **bag** unless DISTINCT is used.

## Q18
<div class="stem"><p>Consider the following schedule for transactions T1, T2 and T3: </p> <p><img src="tests/img/t4/q68-a0873d.png"/></p> <p>Which one of the schedules below is the correct serialization of the above? </p></div>

## Q18 - Options
(A) T1 → T3 → T2
(B) T2 → T1 → T3
(C) T2 → T3 → T1
(D) T3 → T1 → T2

## Q18 - Hint
**Answer:** A  
**Topic:** DBMS – Conflict Serializability

Schedule: R1(X), R2(Y), R3(Y), W2(Y), W1(X), W3(X), R2(X), W2(X).

Conflicting pairs → edges:

- R3(Y) before W2(Y) → **T3 → T2**
- W1(X) before W3(X) → **T1 → T3**
- W1(X) before R2(X) → T1 → T2
- W3(X) before R2(X) → T3 → T2

No cycle. Topological order: **T1 → T3 → T2**.

## Q19
<div class="stem"><p>Which of the following pairs have different expressive power?</p></div>

## Q19 - Options
(A) Single-tape-turing machine and multi-dimensional turing machine.
(B) Multi-tape turing machine and multi-dimensional turing machine.
(C) Deterministic push down automata and non-deterministic pushdown automata.
(D) Deterministic finite automata and Non-deterministic finite automata

## Q19 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Machine Equivalence

- Single-tape TM = multi-dimensional TM = multi-tape TM in power (only speed differs).
- DFA = NFA.
- **DPDA < NPDA**: DPDAs accept only deterministic CFLs (e.g. wwᴿ needs nondeterminism).

## Q20
<div class="stem"><p>Consider the following statements.</p> <p>I. TCP connections are full duplex and byte streams.</p> <p>II. UDP handles congestion but not flow control.</p> <p>III. The timeout value used in TCP is set to twice the propagation delay from the sender to the receiver.</p> <p>IV. UDP works well in unidirectional communication, suitable for broadcast information.</p> <p>Which of the above statements are true?</p></div>

## Q20 - Options
(A) I, II and III
(B) I and IV
(C) II and III
(D) All of the above

## Q20 - Hint
**Answer:** B  
**Topic:** Computer Networks – TCP & UDP

- **I ✔** – TCP is full-duplex and byte-stream oriented.
- **II ✘** – UDP provides **neither** congestion control nor flow control.
- **III ✘** – TCP's timeout is computed adaptively from RTT estimates.
- **IV ✔** – UDP (connectionless, no ACKs) suits one-way broadcast and multicast.

## Q21
<div class="stem"><p>Which of the following statement(s) is/are true for weak entity?</p> <p>(i) Weak entity is existence dependent on strong entity</p> <p>(ii) Weak entity does not have primary key of its own</p> <p>(iii) Attributes of weak entity are derived from attributes of strong entity</p></div>

## Q21 - Options
(A) (i) only
(B) (i) and (ii)
(C) (i) and (iii)
(D) (i), (ii) and (iii)

## Q21 - Hint
**Answer:** D  
**Topic:** DBMS – Weak Entities

- **(i) ✔** – a weak entity cannot exist without its owner (strong) entity.
- **(ii) ✔** – it has only a **partial key** (discriminator), not a primary key of its own.
- **(iii)** – its key is formed by **borrowing the owner's primary key** plus the partial key.

The key treats all three as true.

> **⚠ Note:** Read (iii) as "the key of a weak entity is derived from the strong entity". A weak entity's ordinary attributes are its own, not derived.

## Q22
<div class="stem"><p>Which one of the following statements is TRUE?</p></div>

## Q22 - Options
(A) The LALR(1) parser for a grammar G cannot have a reduce-reduce conflict if the LR(1) parser for G does not have reduce-reduce conflict.
(B) The symbol table is accessed only during the lexical analysis phase.
(C) Data flow analysis is necessary for run-time memory management.
(D) LR(1) parsing is sufficient for deterministic context-free languages.

## Q22 - Hint
**Answer:** D  
**Topic:** Compiler Design – Parsing

- (A) ✘ – merging LR(1) states into LALR(1) **can** introduce reduce–reduce conflicts.
- (B) ✘ – the symbol table is used by all phases.
- (C) ✘ – data-flow analysis is for optimisation.
- **(D) ✔** – every DCFL has an LR(1) grammar.

## Q23
<div class="stem"><p> Consider the following statements about the context free grammar</p> <p>G = {S → SS, S → ab, S → ba, S → Ε}</p> <p>I. G is ambiguous</p> <p>II. G produces all strings with equal number of a’s and b’s</p> <p>III. G can be accepted by a deterministic PDA.</p> <p>Which combination below expresses all the true statements about G?</p></div>

## Q23 - Options
(A) I only
(B) I and III only
(C) II and III only
(D) I, II and III

## Q23 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Context-Free Grammars

G: S → SS | ab | ba | ε.

- **I ✔ ambiguous** – "ab" has several parse trees: S → ab, or S → SS → (ab)(ε), etc.
- **II ✘** – it generates only concatenations of "ab"/"ba" blocks; e.g. **aabb** has equal counts but can't be generated.
- **III ✔** – the language (ab + ba)\* is **regular**, so a DPDA (even a DFA) accepts it.

## Q24
<div class="stem"><p>Let us assume a person climbing the stairs can take one stair or two stairs at a time. How many ways can this person climb a flight of eight stairs?</p></div>

## Q24 - Options
(A) 21
(B) 24
(C) 31
(D) 34

## Q24 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Recurrence (Fibonacci)

Let W(n) = number of ways to climb n stairs. The last move is 1 step or 2 steps:

W(n) = W(n−1) + W(n−2), W(1) = 1, W(2) = 2.

W: 1, 2, 3, 5, 8, 13, 21, **34** (n = 8).

## Q25
<div class="stem"><p>The test conducted to ensure that due to addition of modules, software do not unintended behaviour or extra errors are not added, is known as .................... .</p></div>

## Q25 - Options
(A) Smoke testing
(B) Regression testing
(C) Performance testing
(D) Stress testing

## Q25 - Hint
**Answer:** B  
**Topic:** Software Engineering – Testing

**Regression testing** re-runs existing tests after changes or new modules to make sure nothing that worked before is now broken.

## Q26
<div class="stem"><p>Consider the following finite state automaton. The language accepted by this automaton is given by the regular.<img src="tests/img/t4/q76-1ee31f.png"/></p></div>

## Q26 - Options
(A) ab*b*
(B) a*b*
(C) b*b
(D) b*ab*

## Q26 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Finite Automata

- q0 (start) loops on **b**; on **a** goes to q1 (final).
- q1 loops on **b**; it has no move on a.

Accepted strings = any b's, exactly one a, any b's → **b\*ab\***.

## Q27
<div class="stem"><p>Consider the following code segment:</p> <p>int arr[ ] = [0, 1, 2, 3, 4);</p> <p>int i=1, *ptr;</p> <p>ptr = arr + 2;</p> <p>arrange the following printf statements in the increasing order of their output.</p> <p>(A) printf ("%d", ptr[i]);</p> <p>(B) printf ("%d", ptr[i+1]);</p> <p>(C) printf ("%d", ptr[-i]);</p> <p>(D) printf ("%d", ptr[-i+1]);</p> <p>Choose the correct answer from the options given below :</p></div>

## Q27 - Options
(A) (C), (A), (B), (D) 
(B) (C), (D), (A), (B)
(C) (D), (A), (B), (C) 
(D) (A), (B), (D), (C)

## Q27 - Hint
**Answer:** B  
**Topic:** Programming in C – Pointers & Arrays

ptr = arr + 2 → ptr[k] = arr[2 + k], with i = 1:

- (A) ptr[1] = 3
- (B) ptr[2] = 4
- (C) ptr[−1] = 1
- (D) ptr[0] = 2

Increasing: **C, D, A, B**.

## Q28
<div class="stem"><p>Consider the following statements :</p> <p>A. High speed Ethernet works on optic fiber.</p> <p>B. A point to point protocol over Ethernet is a network protocol for encapsulating PPP frames inside Ethernet frames.</p> <p>C. High speed Ethernet does not work on optic fiber.</p> <p>D. A point to point protocol over Ethernet is a network protocol for encapsulating Ethernet frames inside PPP frames.</p> <p>Which of the following is correct ?</p></div>

## Q28 - Options
(A) A and B are true; C and D are false.
(B) A and B are false; C and D are true.
(C) A, B, C and D are true.
(D) A, B, C and D are false.

## Q28 - Hint
**Answer:** A  
**Topic:** Computer Networks – Ethernet & PPPoE

- **A ✔** – Gigabit and 10G Ethernet run over optical fibre (e.g. 1000BASE-SX/LX).
- **B ✔** – PPPoE **encapsulates PPP frames inside Ethernet frames** (used by DSL ISPs).
- C and D are the negations of A and B → false.

## Q29
<div class="stem"><p>.................... is a compiler capable of creating an executable code for a platform other than the one on which .................... is run.</p></div>

## Q29 - Options
(A) Cross compiler, decompiler
(B) Just-in time compiler, cross compiler
(C) Cross compiler, compiler
(D) Just-in time compiler, just-in time compiler

## Q29 - Hint
**Answer:** C  
**Topic:** Compiler Design – Compilers

A **cross compiler** produces executable code for a platform **other than** the one on which the **compiler** itself runs (e.g. compiling on a PC for an ARM microcontroller).

## Q30
<div class="stem"><p>In symmetric-key cryptography, if every person in a group of 10 people needs to communicate with every other person in another group of 10 people, how many minimum secret keys are needed ?</p></div>

## Q30 - Options
(A) 1
(B) 10
(C) 100
(D) 50

## Q30 - Hint
**Answer:** D  
**Topic:** Computer Networks – Symmetric Keys

Every person in group 1 talks to every person in group 2 → number of pairs = 10 × 10 = **100**, and each pair needs its own secret key.

> **⚠ Note:** The arithmetic gives **100** (option C). The key's 50 doesn't follow from the question as stated (even "everyone within one group of 10" would give C(10,2) = 45). Treat this as a key error.

## Q31
<div class="stem"><p>The seven elements A, B, C, D, E, F and G are pushed onto a stack in reverse order, i.e., starting from G. The stack is popped five times and each element is inserted into a queue. Two elements are deleted from the queue and pushed back onto the stack. Now, one element is popped from the stack. The popped item is ________.<br/> A<br/> B<br/> F<br/> G</p></div>

## Q31 - Options
(A) A
(B) B
(C) C
(D) D

## Q31 - Hint
**Answer:** B  
**Topic:** Data Structures – Stack & Queue

**Step 1 – Push G, F, E, D, C, B, A** → top is A.  
**Step 2 – Pop 5 into the queue:** A, B, C, D, E (front = A). Stack left: G, F (top F).  
**Step 3 – Dequeue 2 and push:** A pushed, then B pushed → top = **B**.  
**Step 4 – Pop:** **B**.

## Q32
<div class="stem"><p>In a database file structure, the search key field is 9 bytes long, the block size is 512 bytes, a record pointer is 7 bytes and a block pointer is 6 bytes. The largest possible order of a non-leaf node in a B+ tree implementing this file structure is-</p></div>

## Q32 - Options
(A) 23
(B) 24
(C) 34
(D) 44

## Q32 - Hint
**Answer:** C  
**Topic:** DBMS – B+ Tree Order

Non-leaf node of order n: n block pointers + (n − 1) keys ≤ block size.

6n + 9(n − 1) ≤ 512 ⇒ 15n ≤ 521 ⇒ n ≤ 34.7 ⇒ **n = 34**.

## Q33
<div class="stem"><p>Assume that each character code consists of 8 bits. The number of characters that can be transmitted per second through an asynchronous serial line at 2400 baud rate, and with two stop bits, is</p></div>

## Q33 - Options
(A) 109
(B) 216
(C) 218
(D) 219

## Q33 - Hint
**Answer:** C  
**Topic:** Computer Networks – Asynchronous Transmission

Each character frame = 1 start bit + 8 data bits + 2 stop bits = **11 bits**.

Characters per second = 2400 / 11 ≈ 218.2 → **218**.

## Q34
<div class="stem"><p>The content of the accumulator after the execution of the following 8085 assembly language program, is MVI A, 35H</p> <p>MOV B, A</p> <p>STC</p> <p>CMC</p> <p>RAR</p> <p>XRA B</p></div>

## Q34 - Options
(A) 00H
(B) 35H
(C) EFH
(D) 2FH

## Q34 - Hint
**Answer:** D  
**Topic:** Computer Organization – 8085 Programming

| Instruction | Effect |
|---|---|
| MVI A, 35H | A = 0011 0101 |
| MOV B, A | B = 35H |
| STC | CY = 1 |
| CMC | CY = 0 |
| RAR | rotate right **through carry**: bit 7 ← CY (0), CY ← bit 0 (1) → A = 0001 1010 = 1AH |
| XRA B | A = 1AH ⊕ 35H = 0001 1010 ⊕ 0011 0101 = **0010 1111 = 2FH** |

## Q35
<div class="stem"><p>What will be the order of the following fields in a frame relay "frame format’?</p> <p>A. Flag</p> <p>B. FCS</p> <p>C. address</p> <p>D. information</p> <p>Choose the correct answer from the options given below:</p></div>

## Q35 - Options
(A) A, C, D, B
(B) D, A, C, D
(C) C, B, A, D
(D) A, B, D, C

## Q35 - Hint
**Answer:** A  
**Topic:** Computer Networks – Frame Relay

Frame-relay frame layout: **Flag | Address | Information | FCS | Flag** → A, C, D, B.

## Q36
<div class="stem"><p>Consider the following statements about the timeout value used in TCP.</p> <p>i. The timeout value is set to the RTT (Round Trip Time) measured during TCP connection establishment for the entire duration of the connection.</p> <p>ii. Appropriate RTT estimation algorithm is used to set the timeout value of a TCP connection.</p> <p>iii. Timeout value is set to twice the propagation delay from the sender to the receiver. Which of the following choices hold?</p></div>

## Q36 - Options
(A) i) is false, but (ii) and (iii) are true
(B) i) and (iii) are false, but (ii) is true
(C) i) and (ii) are false, but (iii) is true
(D) (ii) and (iii) are false

## Q36 - Hint
**Answer:** B  
**Topic:** Computer Networks – TCP Timers

- (i) ✘ – the timeout isn't fixed at the RTT from connection setup.
- **(ii) ✔** – TCP uses an adaptive RTT estimation algorithm (smoothed RTT + variance).
- (iii) ✘ – it isn't simply twice the propagation delay.

## Q37
<div class="stem"><p>Consider a schema R(MNPQ) and functional dependencies M → N, P → Q. Then the decomposition of R into R1 (MN) and R2(PQ) is________.</p></div>

## Q37 - Options
(A) Dependency preserving but not lossless join
(B) Dependency preserving and lossless join
(C) Lossless join but not dependency preserving
(D) Neither dependency preserving nor lossless join.

## Q37 - Hint
**Answer:** A  
**Topic:** DBMS – Decomposition

- **Dependency preserving?** M → N lies in R1(MN), P → Q in R2(PQ) → **yes**.
- **Lossless?** R1 ∩ R2 = ∅ → the join is a Cartesian product with spurious tuples → **lossy**.

## Q38
<div class="stem"><p>Which of the following statement(s) is/are false ?</p> <p>(a)A connected multigraph has an Euler Circuit if and only if each of its vertices has even degree.</p> <p>(b)A connected multigraph has an Euler Path but not an Euler Circuit if and only if it has exactly two vertices of odd degree.</p> <p>(c)A complete graph (Kn) has a Hamilton Circuit whenever n ≥ 3.</p> <p>(d)A cycle over six vertices (C6) is not a bipartite graph but a complete graph over 3 vertices is bipartite.</p></div>

## Q38 - Options
(A) a) only
(B) b) and (c)
(C) c) only
(D) Only

## Q38 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Graph Theory

- **(a) ✔** – Euler circuit ⇔ connected and every vertex has even degree.
- **(b) ✔** – Euler path but no circuit ⇔ exactly two odd-degree vertices.
- **(c) ✔** – Kₙ is Hamiltonian for n ≥ 3.
- **(d) ✘** – it's the reverse: C₆ (even cycle) **is** bipartite; K₃ (odd cycle) is **not**.

Only (d) is false.

> **⚠ Note:** Option (D) is printed as just "Only" in the source; it means "(d) only".

## Q39
<div class="stem"><p>What are the four framework activities found in the Extreme Programming (XP) process model ?</p></div>

## Q39 - Options
(A) analysis, design, coding, testing
(B) planning, analysis, design, coding
(C) planning, analysis, coding, testing
(D) planning, design, coding, Testing

## Q39 - Hint
**Answer:** D  
**Topic:** Software Engineering – Extreme Programming

XP's four framework activities: **Planning** (user stories), **Design** (simple design, CRC cards, spikes), **Coding** (pair programming, refactoring), **Testing** (unit tests first, acceptance tests).

## Q40
<div class="stem"><p>Host A (on TCP/IPv4 Networks) send an IP Datagram D to host B (also on TCP/IPv4 network). Assume that no error occured during transmission of D, when D reaches B. Which of following header field may differ from that of original datagram D?</p> <p>(A) TTL</p> <p>(B) Checksum</p> <p>(C) Fragment offset</p> <p>(D) Source IP</p> <p>(E) Destination IP</p> <p>Choose the correct answer from the options given below:</p></div>

## Q40 - Options
(A) (A) and (B) Only
(B) (A), (B) and (C) Only
(C) (A), (B), (C) and (D) Only
(D) (A), (B), (C) and (E) Only

## Q40 - Hint
**Answer:** B  
**Topic:** Computer Networks – IPv4 Header

Fields that can change in transit:

- **TTL** – decremented at every router ✔
- **Header checksum** – recomputed at every hop because TTL changes ✔
- **Fragment offset** – changes if a router fragments the datagram ✔

Source and destination IP stay the same (assuming no NAT).

## Q41
<div class="stem"><p>The address of a class B host is to be split into subnets with a 6-bit subnet number. What is the maximum number of subnets and the maximum number of hosts in each subnet?</p></div>

## Q41 - Options
(A) 62 subnets and 262142 hosts.
(B) 64 subnets and 262142 hosts.
(C) 62 subnets and 1022 hosts.
(D) 64 subnets and 1024 hosts.

## Q41 - Hint
**Answer:** C  
**Topic:** Computer Networks – Subnetting

Class B has 16 host bits. With a 6-bit subnet field:

- Subnets = 2⁶ − 2 = **62** (traditional RFC 950: all-0 and all-1 subnets excluded)
- Host bits left = 16 − 6 = 10 → hosts = 2¹⁰ − 2 = **1022**

## Q42
<div class="stem"><p>Consider the following grammar along with translation rules</p> <p><img src="tests/img/t4/q92-351b80.png"/></p> <p>Here # and % are operators and id is a token that represents an integer and id. val represents the corresponding integer value. The set of non-terminals is {S, T, R, P} and a subscripted non-terminal indicates an instance of the non-terminal. Using this translation scheme, the computed value of S.val for root of the parse tree for the expression 20#10%5#8%2%2 is _____________.</p></div>

## Q42 - Options
(A) 60
(B) 55
(C) 75
(D) 80

## Q42 - Hint
**Answer:** D  
**Topic:** Compiler Design – Syntax-Directed Translation

From the rules: **#** = multiplication (S-level), **%** = division (T-level, deeper → higher precedence); both left-recursive → left associative.

20 # 10 % 5 # 8 % 2 % 2  
= 20 × (10 ÷ 5) × ((8 ÷ 2) ÷ 2)  
= 20 × 2 × 2 = **80**.

## Q43
<div class="stem"><p>Consider the grammar given below</p> <p>S → x B | y A</p> <p>A → x | x S | y A A</p> <p>B → y | y S | y B B</p> <p>Consider the following strings.</p> <p>(i) xxyyx</p> <p>(ii) xxyyxy</p> <p>(iii) xyxy</p> <p>(iv) yxxy</p> <p>(v) yxx</p> <p>(vi) xyx</p> <p>Which of the above strings are generated by the grammar ?</p></div>

## Q43 - Options
(A) i), (ii), and (iii)
(B) ii), (v), and (vi)
(C) ii), (iii), and (iv)
(D) (iii), and (iv)

## Q43 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Context-Free Grammars

This is the classic grammar for strings with **equal numbers of x and y** (A derives one extra x, B one extra y).

| String | x count | y count | Equal? |
|---|---|---|---|
| (i) xxyyx | 3 | 2 | ✘ |
| (ii) xxyyxy | 3 | 3 | ✔ |
| (iii) xyxy | 2 | 2 | ✔ |
| (iv) yxxy | 2 | 2 | ✔ |
| (v) yxx | 2 | 1 | ✘ |
| (vi) xyx | 2 | 1 | ✘ |

Generated: (ii), (iii), (iv).

## Q44
<div class="stem"><p>A text is made up of the characters A, B, C, D, E each occurring with the probability 0.08, 0.40, 0.25, 0.15 and 0.12 respectively. The optimal coding technique will have the average length of :</p></div>

## Q44 - Options
(A) 2.4
(B) 1.87
(C) 3.0
(D) 2.15

## Q44 - Hint
**Answer:** D  
**Topic:** Algorithms – Huffman Coding

Probabilities: A 0.08, E 0.12, D 0.15, C 0.25, B 0.40.

**Step 1 – Merge the two smallest each time:**

- 0.08 + 0.12 = 0.20
- 0.15 + 0.20 = 0.35
- 0.25 + 0.35 = 0.60
- 0.40 + 0.60 = 1.00

**Step 2 – Code lengths:** B = 1, C = 2, D = 3, A = 4, E = 4.

**Step 3 – Average** = 0.40×1 + 0.25×2 + 0.15×3 + 0.08×4 + 0.12×4  
= 0.40 + 0.50 + 0.45 + 0.32 + 0.48 = **2.15** bits.

## Q45
<div class="stem"><p><img src="tests/img/t4/q95-60ff52.png"/></p></div>

## Q45 - Options
(A) P and Q only
(B) P and R only
(C) P and S only
(D) P, Q, R and S

## Q45 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Valid Arguments

An argument is valid if the conclusion can't be false while all premises are true.

- **P ✔** – (¬p∨q) = p→q, (r→s), (p∨r) ⇒ q ∨ s (**constructive dilemma**); q ∨ s ≡ ¬s → q.
- **Q ✘** – premises force p = F, q = T; then p→r is true for any r, so r = T makes the conclusion ¬r false.
- **R ✘** – take p = T, r = F: (q∧r)→p true, ¬q∨p true, but the conclusion r is false.
- **S ✔** – p and p→r give r; then q ∨ ¬r with r = T forces q.

Valid: P and S.

## Q46
<div class="stem"><p>Consider a CSMA/CD network that transmits data at the rate of 100 Mbps over a 1 Kilometer cable with no repeater. If the minimum frame size required for this network is 1250 bytes, what is the signal speed (km/sec) in the cable.</p></div>

## Q46 - Options
(A) 8000
(B) 16000
(C) 12000
(D) 20000

## Q46 - Hint
**Answer:** D  
**Topic:** Computer Networks – CSMA/CD

For collision detection, transmission time ≥ round-trip propagation time.

**Step 1:** Frame time = 1250 × 8 bits / 10⁸ bps = 10,000 / 10⁸ = **100 μs**.  
**Step 2:** Round trip = 2 × 1 km / v = 100 μs ⇒ v = 2 km / 100 μs.  
**Step 3:** v = 2 / (100 × 10⁻⁶) = **20,000 km/s**.

## Q47
<div class="stem"><p>Which of the following is FALSE with respect to circuit-switched networks?</p></div>

## Q47 - Options
(A) Each of the physical links in the circuit-switched network within switched network is divided into n channels
(B) In a circuit-switched network, the resources need not be reserved during the setup phase
(C) A circuit switched network is made of a set of switches connected by physical links
(D) In a circuit-switched network, the resources remain dedicated for the entire duration of data transfer

## Q47 - Hint
**Answer:** B  
**Topic:** Computer Networks – Switching

In circuit switching, resources (bandwidth / channels) **must be reserved** during the setup phase and stay dedicated for the whole call. Statement (B) says the opposite, so it is false.

## Q48
<div class="stem"><p>The ratio of error found before s/w delivery and to the total errors (before and after) is called :</p></div>

## Q48 - Options
(A) Accuracy
(B) Specificity
(C) Defect Removal efficiency
(D) Through put

## Q48 - Hint
**Answer:** C  
**Topic:** Software Engineering – Quality Metrics

**Defect Removal Efficiency** DRE = E / (E + D), where E = errors found before delivery and D = defects found after delivery. The closer to 1, the better the QA process.

## Q49
<div class="stem"><p>The index node (inode) of a Unix-like file system has 12 direct, one single-indirect and one double-indirect pointers. The disk block size is 4 kB, and the disk block address is 32-bits long. The maximum possible file size is (rounded off to 1 decimal place) ______ GB.</p></div>

## Q49 - Options
(A) 7.0
(B) 9.0
(C) 2.0
(D) 4.0

## Q49 - Hint
**Answer:** D  
**Topic:** Operating Systems – File Systems (inode)

**Step 1:** Addresses per block = 4 KB / 4 B = **1024**.  
**Step 2 – Data blocks reachable:**

- Direct: 12
- Single indirect: 1024
- Double indirect: 1024² = 1,048,576

**Step 3:** Max size = (12 + 1024 + 1,048,576) × 4 KB ≈ 4 GB + 4 MB + 48 KB ≈ **4.0 GB**.

## Q50
<div class="stem"><p>Which of the following is/are shared by all the threads in a process?</p> <p>I. Program counter</p> <p>II. Stack</p> <p>III. Address space</p> <p>IV. Registers</p></div>

## Q50 - Options
(A) I and II only
(B) III only
(C) IV only
(D) III and IV only

## Q50 - Hint
**Answer:** B  
**Topic:** Operating Systems – Threads

Threads of one process **share** the address space (code, data, heap, open files). Each thread has its **own** PC, registers and stack.

## Q51
<div class="stem"><p>Identify the true statement from the given statements. Program relocation at run time:</p> <p>1. Requires transfer complete block to some memory locations</p> <p>2. Requires both base address and relative address</p> <p>3. Requires only absolute address</p></div>

## Q51 - Options
(A) 1)
(B) 1) and (2)
(C) 1), (2) and (3)
(D) 1) and (3)

## Q51 - Hint
**Answer:** B  
**Topic:** Operating Systems – Relocation

Run-time (dynamic) relocation moves the program's **whole block** to another memory area (1). It works because addresses inside the program are **relative**, and the hardware adds the new **base address** (base register) at run time (2). Absolute addresses alone (3) would break after moving.

## Q52
<div class="stem"><p>Consider a binary code that consists only four valid codewords as given below.</p> <p>00000, 01011, 10101, 11110</p> <p>Let minimum Hamming distance of code be p and maximum number of erroneous bits that can be corrected by the code be q. The value of p and q are:</p></div>

## Q52 - Options
(A) p = 3 and q = 1
(B) p = 3 and q = 2
(C) p = 4 and q = 1
(D) p = 4 and q = 2

## Q52 - Hint
**Answer:** A  
**Topic:** Computer Networks – Hamming Distance

Compare every pair (count differing bits):

| Pair | Distance |
|---|---|
| 00000 – 01011 | 3 |
| 00000 – 10101 | 3 |
| 00000 – 11110 | 4 |
| 01011 – 10101 | 4 |
| 01011 – 11110 | 3 |
| 10101 – 11110 | 3 |

d_min = **p = 3**. Correctable errors t = ⌊(d_min − 1)/2⌋ = ⌊2/2⌋ = **q = 1**.

## Q53
<div class="stem"><p><img src="tests/img/t4/q103-66cb65.png"/></p></div>

## Q53 - Options
(A) (a) iii (b) i (c) ii (d) iv
(B) (a) iii (b) i (c) iv (d) ii
(C) (a) iv (b) iii (c) ii (d) i
(D) (a) ii (b) iii (c) iv (d) i

## Q53 - Hint
**Answer:** B  
**Topic:** Operating Systems – OS Types

- Spooling → overlaps I/O with computation (iii)
- Multiprogramming → several jobs in memory to keep the CPU busy (i)
- Time sharing → many users share the CPU by rapid switching (iv)
- Distributed computing → transparent access to resources on geographically dispersed computers (ii)

## Q54
<div class="stem"><p>Consider the reference string 0 1 2 3 0 1 4 0 1 2 3 4 If FIFO page replacement algorithm is used, then the number of page faults with three page frames and four page frames are _______ and ______ respectively.</p></div>

## Q54 - Options
(A) 10, 9
(B) 9, 9
(C) 10, 10
(D) 9,10

## Q54 - Hint
**Answer:** D  
**Topic:** Operating Systems – Belady's Anomaly

Reference string: 0 1 2 3 0 1 4 0 1 2 3 4 (FIFO).

**3 frames:** F F F F F F F H H F F H → **9 faults**  
**4 frames:** F F F F H H F F F F F F → **10 faults**

More frames, more faults → **Belady's anomaly**.

## Q55
<div class="stem"><p>In a sliding window ARQ scheme, the transmitter's window size is N and the receiver's window size is M. The minimum number of distinct sequence numbers required to ensure correct operation of the ARQ scheme is </p></div>

## Q55 - Options
(A) min (M, N)
(B) max (M, N)
(C) M + N
(D) MN

## Q55 - Hint
**Answer:** C  
**Topic:** Computer Networks – Sliding Window

For correct operation, the sender's window and the receiver's window must never overlap in sequence numbers. So at least **N + M** distinct sequence numbers are needed.

Special cases: Go-Back-N (M = 1) → N + 1; Selective Repeat (M = N) → 2N.

## Q56
<div class="stem"><p>Choose the correct option describing the features of Artificial neural network</p> <p>A. It is essentially machine learning algorithm.</p> <p>B. It is useful when solving the problems for which the data set is very large.</p> <p>C. They are able to extract features without input from the programmer.</p> <p>D. These are systems modeled on the human brain and nervous system.</p> <p>Choose the correct answer from the options given below</p> <ul> </ul></div>

## Q56 - Options
(A) All the statements are correct.<br> <ul> </ul>
(B) Only B &amp; C are correct.<br> <ul> </ul>
(C) Only A &amp; D are correct.<br> <ul> </ul>
(D) All the statements are not correct.<br> <ul> </ul>

## Q56 - Hint
**Answer:** A  
**Topic:** Machine Learning – Neural Networks

- **A ✔** – ANNs are machine-learning algorithms.
- **B ✔** – they perform best with large datasets.
- **C ✔** – deep networks learn features automatically, without hand-crafted features.
- **D ✔** – they are inspired by the brain's neurons and synapses.

## Q57
<div class="stem"><p>How many edges are there in a forest with v vertices and k components?</p></div>

## Q57 - Options
(A) v + 1) − k
(B) v + 1)/2 − k
(C) v − k
(D) v + k

## Q57 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Trees & Forests

A forest is a collection of k trees. If tree i has vᵢ vertices, it has vᵢ − 1 edges.

Total edges = Σ(vᵢ − 1) = (Σvᵢ) − k = **v − k**.

## Q58
<div class="stem"><p>Which of the following are the principles tasks of the linker?</p> <p>I. Resolve external references among separately compiled program units.</p> <p>II. Translate assembly language to machine code.</p> <p>III. Relocate code and data relative to the beginning of the program.</p> <p>IV. Enforce access-control restrictions on system libraries.</p></div>

## Q58 - Options
(A) I and II
(B) I and III
(C) II and III
(D) I and IV

## Q58 - Hint
**Answer:** B  
**Topic:** System Software – Linker

The linker **resolves external references** between separately compiled modules (I) and **relocates** code and data (III). Translating assembly to machine code is the assembler's job; access control is the OS's.

## Q59
<div class="stem"><p><img src="tests/img/t4/q109-e26c61.png"/></p></div>

## Q59 - Options
(A) 9
(B) 5
(C) 8
(D) None of the above

## Q59 - Hint
**Answer:** C  
**Topic:** Computer Organization – Microprogramming

- **(a)** none or one of 3 micro-operations → 4 possibilities → **encoded** field of ⌈log₂4⌉ = **2 bits**.
- **(b)** none or **up to six** of another kind at the same time → several can be active together → one bit each (horizontal) = **6 bits**.

Minimum = 2 + 6 = **8 bits**.

## Q60
<div class="stem"><p>Consider the following statements :</p> <p>(a) Boolean expressions and logic networks correspond to labelled acyclic digraphs.</p> <p>(b) Optimal boolean expressions may not correspond to simplest networks.</p> <p>(c) Choosing essential blocks first in a Karnaugh map and then greedily choosing the largest remaining blocks to cover may not give an optimal expression.</p> <p>Which of these statement(s) is/are correct ?</p></div>

## Q60 - Options
(A) a) only
(B) b) only
(C) a) and (b)
(D) a), (b) and (c)

## Q60 - Hint
**Answer:** D  
**Topic:** Digital Logic – Logic Minimisation

- **(a) ✔** – an expression or network is a DAG whose nodes are labelled with gates or variables.
- **(b) ✔** – the minimal SOP may not give the simplest circuit (multi-level or factored forms can be cheaper).
- **(c) ✔** – picking essential PIs and then greedily the largest blocks can miss the minimum cover (e.g. cyclic K-maps).

## Q61
<div class="stem"><p>Match List - I with List - II.</p> <p>List – I                                    List - II</p> <p>(Testing Type)                        (Description)</p> <p>(A) Unit testing                       (I) Testing individual components of the software.</p> <p>(B) Integrating testing            (II) Testing the interaction between integrated components.</p> <p>(C) System testing                 (III) Testing to verify the system meets business needs.</p> <p>(D) Acceptance testing          (IV) Testing the complete system to ensure it meets requirements.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q61 - Options
(A) (A)-(I), (B)-(II), (C)-(III), (D)-(IV)
(B) (A)-(I), (B)-(II), (C)-(IV), (D)-(III)
(C) (A)-(I), (B)-(III), (C)-(II), (D)-(IV)
(D) (A)-(I), (B)-(IV), (C)-(II), (D)-(III)

## Q61 - Hint
**Answer:** B  
**Topic:** Software Engineering – Testing Levels

- Unit → individual components (I)
- Integration → interaction between integrated components (II)
- System → the complete system against requirements (IV)
- Acceptance → meets business/user needs (III)

## Q62
<div class="stem"><p>Match List-I with List-II:</p> <p>List-I (Software Process Models)   List-II (Software Systems)</p> <p>(A) Waterfall model                   (i) e-business software that starts with only the   basic functionalities and then moves on to more   advanced features.</p> <p>(B) Incremental development       (ii) An inventory control system for a supermarket   to be developed within three months.</p> <p>(C) Prototyping                            (iii) A virtual reality system for simulating vehicle   navigation in a highway.</p> <p>(D) RAD                                       (iv) Automate the manual system for student   record maintenance in a school.</p> <p>Choose the correct option from those given below:</p></div>

## Q62 - Options
(A) (A)-(ii), (B)-(iv), (C)-(i), (D)-(iii)
(B) (A)-(i), (B)-(iii), (C)-(iv), (D)-(ii)
(C) (A)-(iii), (B)-(ii), (C)-(iv), (D)-(i)
(D) (A)-(iv), (B)-(i), (C)-(iii), (D)-(ii)

## Q62 - Hint
**Answer:** D  
**Topic:** Software Engineering – Process Models

- Waterfall → stable, well-understood requirements → automating student records (iv)
- Incremental → basic features first, advanced later → e-business software (i)
- Prototyping → unclear, novel requirements → VR navigation simulator (iii)
- RAD → tight deadline (3 months) → supermarket inventory (ii)

## Q63
<div class="stem"><p>Let m=(313)<sub>4</sub> and n=(322)<sub>4</sub>. Find the base 4 expansion of m+n.</p></div>

## Q63 - Options
(A) (635)<sub>4</sub>
(B) (32312)<sub>4</sub>
(C) (21323)<sub>4</sub>
(D) (1301)<sub>4</sub>

## Q63 - Hint
**Answer:** D  
**Topic:** Digital Logic – Number Systems

**Step 1:** (313)₄ = 3·16 + 1·4 + 3 = 55; (322)₄ = 3·16 + 2·4 + 2 = 58.  
**Step 2:** Sum = 113.  
**Step 3:** 113 = 1·64 + 3·16 + 0·4 + 1 → **(1301)₄**.

(Direct base-4 addition gives the same: 3+2 = 5 = 11₄ → write 1, carry 1, and so on.)

## Q64
<div class="stem"><p>The simplified form of a Boolean equation (AB+ABC + AC) (AC + B`) is :</p></div>

## Q64 - Options
(A) AB`
(B) AB`C
(C) A`B
(D) ABC

## Q64 - Hint
**Answer:** A  
**Topic:** Digital Logic – Boolean Algebra

Simplify step by step:

**Step 1:** AB + ABC + AC = AB + AC = A(B + C) (ABC is absorbed by AB).  
**Step 2:** Multiply: A(B + C)(AC + B')  
= A[ABC + BB' + AC + B'C]  
= A[ABC + AC + B'C] (BB' = 0)  
= A[AC + B'C] (ABC absorbed by AC)  
= **AC** (since AB'C is absorbed by AC).

Check A=1, B=0, C=0: first factor = 0, so F = 0, but AB' = 1 → AB' is **not** equal to F.

> **⚠ Note:** The expression as printed simplifies to **AC**, which is not among the options. The key's AB' does not match. The question has probably lost a complement mark in the source.

## Q65
<div class="stem"><p><img src="tests/img/t4/q115-1c1f5b.png"/></p></div>

## Q65 - Options
(A) Both assertions are true
(B) Assertion (i) is true but assertion (ii) is not true
(C) Assertion (ii) is true but assertion (i) is not true
(D) Neither (i) nor (ii) is true

## Q65 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Equivalence Relations

- **(ii) ✔ R₁ ∩ R₂:** reflexive, symmetric and transitive properties are all preserved under intersection.
- **(i) ✘ R₁ ∪ R₂:** transitivity can fail. Example on {1,2,3}: R₁ relates 1~2, R₂ relates 2~3; the union has (1,2) and (2,3) but not (1,3).

## Q66
<div class="stem"><p>For Σ={a,b} the regular expression r = (aa)*(bb)*b denotes</p></div>

## Q66 - Options
(A) Set of strings with 2 a’s and 2 b’s
(B) Set of strings with 2 a’s 2 b’s followed by b
(C) Set of strings with 2 a’s followed by b’s which is a multiple of 3
(D) Set of strings with even number of a’s followed by odd number of b’s

## Q66 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Regular Expressions

r = (aa)\* (bb)\* b

- (aa)\* → an **even** number of a's (including 0)
- (bb)\* b → 2k + 1 b's → an **odd** number of b's

Language = even a's followed by odd b's.

## Q67
<div class="stem"><p>37. Match List I with List II</p> <p>LIST I                                                   List II</p> <p>A. RAID level 2                                    I. Bit interleaved parity</p> <p>B. RAID level 4                                    II. Block interleaved distributed parity</p> <p>C. RAID level 5                                    III. Error correcting parity</p> <p>D. RAID level 3                                    IV. Block interleaved parity</p> <p>Choose the correct answer from the options given below</p></div>

## Q67 - Options
(A) A-IV, B-III, C-I, D-II
(B) A-III, B-IV, C-II, D-I
(C) A-III, B-I, C-II, D-IV
(D) A-I, B-III, C-IV, D-II

## Q67 - Hint
**Answer:** B  
**Topic:** Operating Systems – RAID

- RAID 2 → **error-correcting (Hamming) code** (III)
- RAID 3 → **bit-interleaved parity** (I)
- RAID 4 → **block-interleaved parity** on one disk (IV)
- RAID 5 → **block-interleaved distributed parity** (II)

## Q68
<div class="stem"><p>Consider the following problems:</p> <p>(i) Whether a finite automaton halts on all inputs?</p> <p>(ii) Whether a given Context Free Language is Regular?</p> <p>(iii) Whether a Turing Machine computes the product of two numbers?</p> <p>Which one of the following is correct ?</p></div>

## Q68 - Options
(A) Only (ii) and (iii) are undecidable problems
(B) i), (ii) and (iii) are undecidable problems
(C) Only (i) and (ii) are undecidable problems
(D) Only (i) and (iii) are undecidable problems

## Q68 - Hint
**Answer:** A  
**Topic:** Theory of Computation – Decidability

- **(i) Decidable** – a finite automaton always halts (it reads the input once and stops).
- **(ii) Undecidable** – whether a CFL is regular.
- **(iii) Undecidable** – whether a TM computes a given function (multiplication) is a non-trivial property of its language/function → **Rice's theorem**.

## Q69
<div class="stem"><p>Aishwarya studies either computer science or mathematics everyday. If she studies computer science on a day, then the probability that she studies mathematics the next day is 0.6. If she studies mathematics on a day, then the probability that she studies computer science the next day is 0.4. Given that Aishwarya studies computer science on Monday, what is the probability that she studies computer science on Wednesday?</p></div>

## Q69 - Options
(A) 0.24
(B) 0.36
(C) 0.4
(D) 0.6

## Q69 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Probability (Markov Chain)

Transitions: CS → M = 0.6, CS → CS = 0.4; M → CS = 0.4, M → M = 0.6.

Monday = CS. Two steps to Wednesday:

- CS → CS → CS: 0.4 × 0.4 = 0.16
- CS → M → CS: 0.6 × 0.4 = 0.24

P(CS on Wednesday) = 0.16 + 0.24 = **0.4**.

## Q70
<div class="stem"><p>Consider the following C program.</p> <p>struct Ournode {</p> <p>char x, y, z ;</p> <p>} ;</p> <p>int main ( ) {</p> <p>struct Ournode p = {‘1’, ‘0’, ‘a’ + 2} ;</p> <p>struct Ournode *q = &amp;p;</p> <p>printf (“%c, %c”, *( (char*) q + 1) , *( (char*) q + 2) ) ;</p> <p>return 0 ;</p> <p>}</p> <p>The output of this program is: </p></div>

## Q70 - Options
(A) 0, c
(B) 0, a + 2
(C) ‘0’, ‘a + 2’
(D) ‘0’, ‘c’

## Q70 - Hint
**Answer:** A  
**Topic:** Programming in C – Structures & Pointers

p = {'1', '0', 'c'} (since 'a' + 2 = 99 = 'c'). Casting q to char\* lets us step through the bytes of the struct:

- \*((char\*)q + 1) = p.y = '0'
- \*((char\*)q + 2) = p.z = 'c'

printf with %c prints the characters without quotes → **0, c**.

## Q71
<div class="stem"><p>A slotted ALOHA network transmits 200 bits frames using a shared channel with 200 kbps bandwidth. If the system (all stations put together) produces 1000 frames per second, then the throughput of the system is _______.</p></div>

## Q71 - Options
(A) 0.268
(B) 0.468
(C) 0.368
(D) 0.568

## Q71 - Hint
**Answer:** C  
**Topic:** Computer Networks – Slotted ALOHA

**Step 1:** Frame time = 200 / 200k = 1 ms.  
**Step 2:** Load G = 1000 frames/s × 1 ms = **1** frame per slot.  
**Step 3:** Slotted ALOHA throughput S = G·e^(−G) = 1 × e^(−1) ≈ **0.368** (about 368 successful frames/s).

## Q72
<div class="stem"><p>Given below are two statements</p> <p>Statement I: Breadth-First Search is optimal when all the step costs are equal whereas uniform-cost search is optimal with any step-cost.</p> <p>Statement II: When all the step costs are same uniform-cost search expands more nodes at depth d than the Breadth-First Search.</p> <p>In light of the above statements, choose the correct answer from the options given below</p></div>

## Q72 - Options
(A) Both Statement I and Statement II are false
(B) Both Statement I and Statement II are true
(C) Statement I is false but Statement II is true
(D) Statement I is true but Statement II is false

## Q72 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Uninformed Search

- **I ✔** – BFS is optimal only with equal step costs; UCS (expand the lowest g(n)) is optimal for any positive step costs.
- **II ✔** – with equal costs UCS behaves like BFS, but it applies the goal test only when a node is **expanded**, not when it is generated, so it expands the whole goal depth level → more work.

## Q73
<div class="stem"><p>A system is having 3 user processes each requiring 2 units of resource R. The minimum number of units of R such that no deadlock will occur-</p></div>

## Q73 - Options
(A) 3
(B) 5
(C) 4
(D) 6

## Q73 - Hint
**Answer:** C  
**Topic:** Operating Systems – Deadlock

Worst case: each process holds (2 − 1) = 1 unit and waits for another.

Minimum to guarantee no deadlock = 3 × (2 − 1) + 1 = **4**.

## Q74
<div class="stem"><p>Match the following:</p> <p>(P) SMTP      (1) Application layer</p> <p>(Q) BGP        (2) Transport layer</p> <p>(R) TCP         (3) Data link layer</p> <p>(S) PPP         (4) Network layer</p> <p>                      (5) Physical layer</p></div>

## Q74 - Options
(A) P – 2 Q – 1 R – 3 S – 5
(B) P – 1 Q – 4 R – 2 S – 3
(C) P – 1 Q – 4 R – 2 S – 5
(D) P – 2 Q – 4 R – 1 S – 3

## Q74 - Hint
**Answer:** B  
**Topic:** Computer Networks – Protocol Layers

SMTP → application (1); BGP → network/routing (4); TCP → transport (2); PPP → data link (3).

## Q75
<div class="stem"><p>The function represented by the Karnaugh map given below is:</p> <p><img src="tests/img/t4/q125-bbad80.png"/></p></div>

## Q75 - Options
(A) A.B
(B) AB+BC+CA
(C) (B⊕C)’
(D) A.BC

## Q75 - Hint
**Answer:** C  
**Topic:** Digital Logic – K-Map

1s at BC = 00 and BC = 11 in both rows (A = 0 and A = 1) → A doesn't matter.

F = B'C' + BC = B ⊙ C = **(B ⊕ C)'**.

## Q76
<div class="stem"><p>Consider the following statements:</p> <p>(a)Depth - first search is used to traverse a rooted tree.</p> <p>(b)Pre - order, Post-order and Inorder are used to list the vertices of an ordered rooted tree. </p> <p>(c)Huffman’s algorithm is used to find an optimal binary tree with given weights.</p> <p>(d)Topological sorting provides a labelling such that the parents have larger labels than their children.</p> <p> Which of the above statements are true?</p></div>

## Q76 - Options
(A) a) and (b)
(B) c) and (d)
(C) a), (b) and (c)
(D) a), (b), (c) and (d)

## Q76 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Trees

- **(a) ✔** – DFS can traverse a rooted tree.
- **(b) ✔** – preorder, inorder and postorder list the vertices of an ordered rooted tree.
- **(c) ✔** – Huffman's algorithm builds an optimal binary tree for given weights.
- **(d)** – a topological sort gives a labelling consistent with the order (as per the key's framing).

## Q77
<div class="stem"><p>Match the following:</p> <p>(1) Waterfall model                                                (a) Specifications can be Developed incrementally</p> <p>(2) Evolutionary model                                           (b) Re-usability in development</p> <p>(3) Component-based software engineering          (c) Explicit recognition of risk</p> <p>(4) Spiral development                                           (d) Inflexible partitioning of the project into stages</p></div>

## Q77 - Options
(A) 1)-(a), (2)-(b), (3)-(c), (4)-(d)
(B) 1)-(d), (2)-(a), (3)-(b), (4)-(c)
(C) 1)-(d), (2)-(b), (3)-(a), (4)-(c)
(D) 1)-(c), (2)-(a), (3)-(b), (4)-(d)

## Q77 - Hint
**Answer:** B  
**Topic:** Software Engineering – Process Models

- Waterfall → **inflexible partitioning** into stages (d)
- Evolutionary → specifications developed **incrementally** (a)
- Component-based SE → **reusability** (b)
- Spiral → **explicit risk** analysis (c)

## Q78
<div class="stem"><p>Consider a software project with the following information domain characteristic for calculation of function point metric.</p> <p>Number of external inputs (I) = 30</p> <p>Number of external output (0) = 60</p> <p>Number of external inquiries (E) = 23</p> <p>Number of files (F) = 08</p> <p>Number of external interfaces (N) = 02</p> <p>It is given that the complexity weighting factors for I, 0, E, F and N are 4, 5, 4, 10 and 7,respectively. It is also given that, out of fourteen value adjustment factors that influence the development effort, four factors are not applicable, each of the other four factors have value 3, and each of the remaining factors have value 4. The computed value of function point metric is</p></div>

## Q78 - Options
(A) 612.06
(B) 212.05
(C) 305.09
(D) 806.9

## Q78 - Hint
**Answer:** A  
**Topic:** Software Engineering – Function Points

**Step 1 – Unadjusted FP:**

- I: 30 × 4 = 120
- O: 60 × 5 = 300
- E: 23 × 4 = 92
- F: 8 × 10 = 80
- N: 2 × 7 = 14

UFP = **606**.

**Step 2 – ΣFᵢ (14 factors):** 4 not applicable = 0; 4 factors × 3 = 12; remaining 6 × 4 = 24 → ΣFᵢ = **36**.

**Step 3 – VAF** = 0.65 + 0.01 × 36 = **1.01**.

**Step 4 – FP** = 606 × 1.01 = **612.06**.

## Q79
<div class="stem"><p>A CPU generates 32-bit virtual addresses. The page size is 4 KB. The processor has a translation look-aside buffer (TLB) which can hold a total of 128 page table entries and is 4-way set associative. The minimum size of the TLB tag is:</p></div>

## Q79 - Options
(A) 11 bits
(B) 13 bits
(C) 15 bits
(D) 20 bits

## Q79 - Hint
**Answer:** C  
**Topic:** Operating Systems – TLB

**Step 1:** Page size 4 KB → offset 12 bits → VPN = 32 − 12 = **20 bits**.  
**Step 2:** 128 entries, 4-way → 128 / 4 = 32 sets → **5 index bits**.  
**Step 3:** Tag = 20 − 5 = **15 bits**.

## Q80
<div class="stem"><p>The extent to which the s/w can continue to operate correctly despite the introduction of invalid inputs is called as</p></div>

## Q80 - Options
(A) Reliability
(B) Robustness
(C) Fault tolerance
(D) Portability

## Q80 - Hint
**Answer:** B  
**Topic:** Software Engineering – Quality Attributes

**Robustness**: the ability to keep operating correctly when given **invalid inputs** or stressful conditions. Reliability is failure-free operation under normal use.

## Q81
<div class="stem"><p>What is the result of the following postfix expression? ab*cd*+ where a=2,b=2,c=3,d=4.</p></div>

## Q81 - Options
(A) 16
(B) 12
(C) 14
(D) 10

## Q81 - Hint
**Answer:** A  
**Topic:** Data Structures – Postfix Evaluation

ab\*cd\*+ with a = 2, b = 2, c = 3, d = 4:

- a b \* → 2 × 2 = 4
- c d \* → 3 × 4 = 12
- \+ → 4 + 12 = **16**

## Q82
<div class="stem"><p>The number of arrangements of six identical balls in three identical bins is______.</p></div>

## Q82 - Options
(A) 3
(B) 21
(C) 12
(D) 7

## Q82 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Partitions

Identical balls into identical bins = partitions of 6 into at most 3 parts:  
6, 5+1, 4+2, 3+3, 4+1+1, 3+2+1, 2+2+2 → **7**.

## Q83
<div class="stem"><p>Which one of the following in-place sorting algorithms needs the minimum number of swaps?</p></div>

## Q83 - Options
(A) Insertion Sort
(B) Quick Sort
(C) Heap Sort
(D) Selection Sort

## Q83 - Hint
**Answer:** D  
**Topic:** Algorithms – Sorting

**Selection sort** does at most **n − 1 swaps** (one per pass, placing the minimum). Insertion sort can do O(n²) shifts; quick sort and heap sort do O(n log n) swaps.

## Q84
<div class="stem"><p>Which of the following sets represent five stages defined by Capability Maturity Model (CMM) in increasing order of maturity ?</p></div>

## Q84 - Options
(A) Initial, Defined, Repeatable, Managed, Optimized.
(B) Initial, Repeatable, Defined, Managed, Optimized.
(C) Initial, Defined, Managed, Repeatable, Optimized.
(D) Initial, Repeatable, Managed, Defined, Optimized

## Q84 - Hint
**Answer:** B  
**Topic:** Software Engineering – CMM

CMM levels in increasing maturity: **Initial → Repeatable → Defined → Managed → Optimizing**.

## Q85
<div class="stem"><p>Size and complexity are a part of</p> <ul> </ul></div>

## Q85 - Options
(A) People Metrics<br> <ul> </ul>
(B) Project Metrics<br> <ul> </ul>
(C) Process Metrics<br> <ul> </ul>
(D) Product Metrics<br> <ul> </ul>

## Q85 - Hint
**Answer:** D  
**Topic:** Software Engineering – Metrics

**Product metrics** describe the product itself: size (LOC, FP), complexity (cyclomatic), design quality, performance. Process metrics measure the development process; project metrics cover cost, schedule and effort.

## Q86
<div class="stem"><p>Consider the following two statements :</p> <p>(A) Business intelligence and Data warehousing is used for forecasting and Data mining.</p> <p>(B) Business intelligence and Data warehousing is used for analysis of large volumes of sales data.</p> <p>Which one of the following options is correct ?</p></div>

## Q86 - Options
(A) A) is true, (B) is false.
(B) Both (A) and (B) are true.
(C) A) is false, (B) is true.
(D) Both (A) and (B) are false.

## Q86 - Hint
**Answer:** B  
**Topic:** Data Warehousing – BI

- **(A) ✔** – BI and data warehouses support forecasting and data mining.
- **(B) ✔** – they are used to analyse large volumes of historical data such as sales.

## Q87
<div class="stem"><p>Software re-engineering is concerned with:</p></div>

## Q87 - Options
(A) Re-constructing the original source code from the existing machine (low - level) code program and modifying it to make it more user - friendly.
(B) Scrapping the source code of a software and re writing it entirely from scratch.
(C) Re-organising and modifying existing software systems to make them more maintainable.
(D) Translating source code of an existing software to a new machine (low - level) language.

## Q87 - Hint
**Answer:** C  
**Topic:** Software Engineering – Re-engineering

**Re-engineering** = examining and restructuring an existing system to make it **more maintainable** (restructure code, redocument, re-modularise) without changing its functionality.

(A) describes reverse engineering/decompilation; (B) is a rewrite from scratch.

## Q88
<div class="stem"><p>Which of the following statement(s) is/are TRUE with regard to software testing ?</p> <p>I.Regression testing technique ensures that the software product runs correctly after the changes during maintenance.</p> <p>II.Equivalence partitioning is a white-box testing technique that divides the input domain of a program into classes of data from which test cases can be derived.</p></div>

## Q88 - Options
(A) only I
(B) only II
(C) both I and II
(D) neither I nor II

## Q88 - Hint
**Answer:** A  
**Topic:** Software Engineering – Testing

- **I ✔** – regression testing re-checks that the software still works after maintenance changes.
- **II ✘** – equivalence partitioning is a **black-box** technique, not white-box.

## Q89
<div class="stem"><p>Which one of the following non-functional quality attributes is not highly affected by the architecture of the software?</p></div>

## Q89 - Options
(A) Performance
(B) Reliability
(C) Usability
(D) Portability

## Q89 - Hint
**Answer:** C  
**Topic:** Software Engineering – Architecture

**Usability** depends mainly on the user-interface design, so it is the attribute least affected by software architecture. Performance, reliability and portability depend heavily on it.

## Q90
<div class="stem"><p>Blind image deconvolution is ____________.</p></div>

## Q90 - Options
(A) Combination of blur identification and image restoration
(B) Combination of segmentation and classification
(C) Combination of blur and non-blur image
(D) None of the above

## Q90 - Hint
**Answer:** A  
**Topic:** Image Processing – Restoration

**Blind deconvolution** restores an image when the blur (point spread function) is **unknown**. It must both **identify the blur** and **restore the image**.

## Q91
<div class="stem"><p>Let R be the rectangular window against which the lines are to be clipped using 2D Sutherland-Cohen line clipping algorithm. The rectangular window has lower left-hand corner at (– 5, 1) and upper right-hand corner at (3, 7). Consider the following three lines for clipping with the given end point co-ordinates: Line AB : A (– 6, 2) and B (–1, 8) Line CD : C (– 1, 5) and D (4, 8) Line EF : E (–2, 3) and F (1, 2) Which of the following line(s) is/are candidate for clipping?</p></div>

## Q91 - Options
(A) AB
(B) CD
(C) EF
(D) AB and CD

## Q91 - Hint
**Answer:** D  
**Topic:** Computer Graphics – Line Clipping

Window: x ∈ [−5, 3], y ∈ [1, 7].

- **AB:** A(−6, 2) has x < −5 → outside (left); B(−1, 8) has y > 7 → outside (top). Codes differ and their AND is 0 → **needs clipping**.
- **CD:** C(−1, 5) inside; D(4, 8) outside (right and top) → **needs clipping**.
- **EF:** E(−2, 3) and F(1, 2) both inside → **trivially accepted**, no clipping.

Candidates: **AB and CD**.

## Q92
<div class="stem"><p>Consider the language L = {a<sup>n</sup>b<sup>m</sup> | n &gt;= 4, m &lt;= 3}</p> <p>Which of the following regular expression represents language L?</p></div>

## Q92 - Options
(A) aaaa (λ+b+bb + bbb)
(B) aaaaa*(b + bb + bbb)
(C) aaaaa*(λ +b+bb + bbb)
(D) aaaa*(b+bb + bbb)

## Q92 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Regular Expressions

L = aⁿbᵐ with n ≥ 4, m ≤ 3.

- At least 4 a's: aaaa a\* (written "aaaaa\*" = aaaa followed by a\*)
- 0 to 3 b's: (λ + b + bb + bbb)

RE = aaaaa\*(λ + b + bb + bbb).

(A) allows exactly 4 a's only; (B) and (D) require at least one b.

## Q93
<div class="stem"><p>Which of the following is not true in case of Oblique Projections?</p></div>

## Q93 - Options
(A) Parallel projection rays are not perpendicular to the viewing plane.
(B) Parallel lines in space appear parallel on the final projected image.
(C) Used exclusively for pictorial purposes rather than formal working drawings.
(D) Projectors are always perpendicular to the plane of projection.

## Q93 - Hint
**Answer:** D  
**Topic:** Computer Graphics – Projections

In **oblique** projection the projectors are parallel to each other but **not perpendicular** to the projection plane. Statement (D) says they are always perpendicular, which describes orthographic projection → **not true**. (A), (B), (C) are true.

## Q94
<div class="stem"><p>Consider the Breshenham’s line generation algorithm for a line with gradient greater than one, current point (xi, yi) and decision parameter, di. The next point to be plotted (xi+1, yi+1) and updated decision parameter, di+1, for di &lt; 0 are given as _______.</p> <p><img src="tests/img/t4/q144-b65338.png"/></p></div>

## Q94 - Options
(A) A.
(B) B.
(C) C.
(D) D.

## Q94 - Hint
**Answer:** A  
**Topic:** Computer Graphics – Bresenham's Algorithm

For a line with |slope| > 1, **y** is the driving axis: y increases by 1 at every step, and the decision is whether x also increases.

- dᵢ < 0 → keep x: **x(i+1) = xᵢ, y(i+1) = yᵢ + 1, d(i+1) = dᵢ + 2dx**
- dᵢ ≥ 0 → x(i+1) = xᵢ + 1, y(i+1) = yᵢ + 1, d(i+1) = dᵢ + 2(dx − dy)

(The rule with x + 1, y unchanged and d + 2dy is the |slope| < 1 case.)

> **⚠ Note:** By this derivation the correct option is **(B)** (x unchanged, y + 1, d + 2dx). The key's (A) gives the slope < 1 update.

## Q95
<div class="stem"><p>Consider an implementation of unsorted single linked list. Suppose it has its representation with a head and a tail pointer (i.e. pointers to the first and last nodes of the linked list). Given the representation, which of the following operation can not be implemented in O(1) time ?</p></div>

## Q95 - Options
(A) Insertion at the front of the linked list.
(B) Insertion at the end of the linked list.
(C) Deletion of the front node of the linked list.
(D) Deletion of the last node of the linked list.

## Q95 - Hint
**Answer:** D  
**Topic:** Data Structures – Linked Lists

With head and tail pointers in a **singly** linked list:

- Insert at front – O(1) ✔
- Insert at end – O(1) using tail ✔
- Delete front – O(1) ✔
- **Delete last** – you need the **second-last** node to update tail, which means walking from the head → **O(n)** ✘

## Q96
<div class="stem"><p>The order of steps of Address Translation in Linux Virtual Memory Scheme will be:</p> <p>A. register</p> <p>B. offset</p> <p>C. Page directory</p> <p>D. Page table</p> <p>E. Page middle directory</p> <p>Choose the correct answer from the options given below: </p></div>

## Q96 - Options
(A) B, A, D, E, C
(B) A, C, E, D, B
(C) D, C, A, B, E
(D) C, A, D, E, B

## Q96 - Hint
**Answer:** B  
**Topic:** Operating Systems – Linux Paging

Linux three-level paging walk:

1. Register (CR3) holds the page directory base (A)
2. **Page directory** (C)
3. **Page middle directory** (E)
4. **Page table** (D)
5. **Offset** within the page (B)

## Q97
<div class="stem"><p>In Artificial Intelligence (AI), an environment is uncertain if it is ________.</p></div>

## Q97 - Options
(A) Not fully observable and not deterministic
(B) Not fully observable or not deterministic
(C) Fully observable but not deterministic
(D) Not fully observable but deterministic

## Q97 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Environments

Russell & Norvig: an environment is **uncertain** if it is **not fully observable OR not deterministic**. Either one is enough.

## Q98
<div class="stem"><p>Consider the vocabulary with only four propositions A,B,C and D. How many models are there for the following sentence ? (⌐ A ∨​ ⌐B ∨​ ⌐C ∨​ ⌐ ​D)</p></div>

## Q98 - Options
(A) 8
(B) 7
(C) 15
(D) 16

## Q98 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Propositional Logic

With 4 propositions there are 2⁴ = 16 models. The sentence ¬A ∨ ¬B ∨ ¬C ∨ ¬D is false only when **all four are true** (1 model).

Models = 16 − 1 = **15**.

## Q99
<div class="stem"><p>Consider the statements below :</p> <p>"There is a country that borders both India and Nepal."</p> <p>Which of the following represents the above sentence correctly ?</p></div>

## Q99 - Options
(A) ∃c Border(Country(c), India ∧ Nepal)
(B) ∃c Country(c) ∧ Border(c, India) ∧ Border(c, Nepal)
(C) ∃c Country(c)] ⇒ [Border(c,India) ∧ Border(c, Nepal)]
(D) ∃c Country(c) ⇒ [ Border(c, India) ∧ Border(c, Nepal)]

## Q99 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – First-Order Logic

"There exists a country c such that c borders India **and** c borders Nepal":

∃c Country(c) ∧ Border(c, India) ∧ Border(c, Nepal).

Rule: ∃ goes with **∧**. Using ⇒ with ∃ (C, D) is the classic mistake: it is true whenever any non-country exists. (A) is ill-formed.

## Q100
<div class="stem"><p>A perceptron has input weights W1 = – 3.9 and W2 = 1.1 with threshold value T = 0.3. What output does it give for the input x1 = 1.3 and x2 = 2.2 ?</p></div>

## Q100 - Options
(A) -2.65
(B) -2.30
(C) 0
(D) 1

## Q100 - Hint
**Answer:** C  
**Topic:** Machine Learning – Perceptron

**Step 1 – Net input:** (−3.9)(1.3) + (1.1)(2.2) = −5.07 + 2.42 = **−2.65**.  
**Step 2 – Threshold:** −2.65 < T = 0.3 → the perceptron **does not fire**.

Output = **0**. (−2.65 is the net input, not the output.)
