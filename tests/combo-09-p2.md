<!-- Combo Test 9 · Paper 2 (CSA) · original question numbers kept in the source data -->

## Q1
<div class="stem"><p>We have three processes P0, P1 and P2 whose arrival time and burst time are given below. If the pre-emptive Shortest Job First (SJF) scheduling algorithm is carried out only at arrival or completion of processes then the average waiting time for the three processes is</p> <p><img src="tests/img/t9/q1-4db713.png"/></p></div>

## Q1 - Options
(A) 7.33 ms
(B) 6.3 ms
(C) 5.0 ms
(D) 4.33 ms

## Q1 - Hint
**Answer:** C  
**Topic:** Operating Systems – Preemptive SJF

P0(0, 9), P1(1, 4), P2(2, 9); decisions only at arrivals/completions.

| 0–1 | 1–5 | 5–13 | 13–22 |
|---|---|---|---|
| P0 (8 left) | P1 ✔ (4 < 8, preempts) | P0 ✔ (8 < 9) | P2 ✔ |

WT = CT − AT − BT: P0 = 13 − 0 − 9 = 4; P1 = 5 − 1 − 4 = 0; P2 = 22 − 2 − 9 = 11.

Average = 15 / 3 = **5.0 ms**.

## Q2
<div class="stem"><p>Deadlocks can be described by which graph ?</p></div>

## Q2 - Options
(A) Resource-allocation Graph
(B) Hamiltonian Graph
(C) Complete Graph
(D) Euler Graph

## Q2 - Hint
**Answer:** A  
**Topic:** Operating Systems – Deadlock

Deadlocks are modelled with a **resource-allocation graph**: process nodes, resource nodes, request edges and assignment edges.

## Q3
<div class="stem"><p>Which statement is the best characterization of cognitive modeling ?</p></div>

## Q3 - Options
(A) The formulation of algorithmic description of building blocks for intelligent systems
(B) The formal specification of abstract reasoning mechanisms for system that represent and manipulate knowledge
(C) The construction of systems that exhibit behaviors necessary for solving tasks requiring intelligence
(D) An attempt to describe the way the human mind functions

## Q3 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Approaches

**Cognitive modelling** ("thinking humanly") tries to describe **how the human mind works**, and then builds programs that mimic it.

## Q4
<div class="stem"><p>Collaborative document inspection technique used for?</p></div>

## Q4 - Options
(A) Requirement Validation Process
(B) Requirement Verification Process
(C) Integration Testing
(D) Blackbox Testing

## Q4 - Hint
**Answer:** A  
**Topic:** Software Engineering – Requirements

Collaborative **document inspection/review** of the requirements with stakeholders is a key technique of **requirements validation**: checking that they are complete, consistent and what users actually need.

## Q5
<div class="stem"><p>Given below are two statements:</p> <p>Statement (I): The friend function and the member functions of a friend class directly access the private and protected data.</p> <p>Statement (II): The friend function can access the private data through the member functions of the base class</p> <p>In the light of the above statements, choose the most appropriate answer from the options given below:</p></div>

## Q5 - Options
(A) Both Statement I and Statement II are correct
(B) Both Statement I and Statement II are incorrect
(C) Statement I is correct but Statement II is incorrect
(D) Statement I is incorrect but Statement II is correct

## Q5 - Hint
**Answer:** A  
**Topic:** Programming in C++ – Friend Functions

- **I ✔** – a friend function, and every member function of a friend class, can directly access the private and protected members of the class that grants friendship.
- **II ✔** – a friend function can also reach private data indirectly, by calling the class's member functions that access it.

## Q6
<div class="stem"><p>If √(123454321)x = (11111)y the values of X and Y are respectively</p></div>

## Q6 - Options
(A) 10, 2
(B) 7,10
(C) 10, 10
(D) Can't be determined

## Q6 - Hint
**Answer:** C  
**Topic:** Digital Logic – Number Systems

11111² = 123454321 in base 10, so with **x = y = 10** the equation holds.

(In a smaller base, 11111 squared would involve carries and not give that palindrome.)

## Q7
<div class="stem"><p>Which of the following statements is/are true?</p> <p>S1 : Two algebraic expressions can specify same function.</p> <p>S2 : Two functions of n binary variables are said to be equal if they have same value for all possible 2^n combinations of the n variables.</p></div>

## Q7 - Options
(A) S1 only
(B) S2 only
(C) Both S1 &amp; S2
(D) None of these

## Q7 - Hint
**Answer:** C  
**Topic:** Digital Logic – Boolean Functions

- **S1 ✔** – different expressions can give the same function (e.g. AB + AB' = A).
- **S2 ✔** – two functions of n variables are equal if they agree on all 2ⁿ input combinations.

## Q8
<div class="stem"><p>Which of the following command can be used to modify data in an SQL Table?</p> <p>A. INSERT</p> <p>B. DELETE</p> <p>C. UPDATE</p> <p>D. SELECT</p> <p>Choose the correct answer from the options given below:</p></div>

## Q8 - Options
(A) A, B, D only
(B) A, C, D only
(C) B, C, D only
(D) A, B, C only

## Q8 - Hint
**Answer:** D  
**Topic:** DBMS – SQL DML

Commands that **change** table data: **INSERT** (add), **DELETE** (remove), **UPDATE** (change). SELECT only reads.

## Q9
<div class="stem"><p>Consider the following lattice:</p> <p><img src="tests/img/t9/q9-2887aa.png"/><br/> The complement of “a” is </p></div>

## Q9 - Options
(A) d,e
(B) d,b,e
(C) d,b,c,e
(D) b,c

## Q9 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Lattices

The complement of a is any x with **a ∨ x = I** (top) and **a ∧ x = O** (bottom).

In the diagram, a sits on its own chain I–a–O, so a joins with every other element at I and meets every other element at O. So **d, b, c and e** are all complements of a. (This lattice isn't distributive, which is why the complement isn't unique.)

## Q10
<div class="stem"><p>Which of the following is not Hill climbing Search Technique issue?</p></div>

## Q10 - Options
(A) Local maxima
(B) Plateau
(C) Shoulder
(D) Ridge

## Q10 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Hill Climbing

The classic hill-climbing problems are **local maxima, ridges and plateaux**. The key treats the **shoulder** as a special kind of plateau (one from which progress is possible), not as a separate issue.

## Q11
<div class="stem"><p>Which of the following formulas could be a representation of the sentence</p> <p>'If Sally came for the dance class then she has finished her homework or she has a holiday today',</p> <p>where; P stands for 'Sally comes for the dance class'</p> <p>Q stands for 'Sally has finished her homework'</p> <p>R stands for 'Sally has a holiday today’</p></div>

## Q11 - Options
(A) ~P→ Q
(B) P→ (Q v R)
(C) ~(P--&gt;Q) v R
(D) (P v Q)--&gt; ~R

## Q11 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Propositional Logic

"If P then (Q or R)" → **P → (Q ∨ R)**.

## Q12
<div class="stem"><p>Which of the following are key features of Mobile Adhoc Networks (MANETs)</p> <p>A. Self - Organizing and decentralized.</p> <p>B. High Mobility of nodes.</p> <p>C. Requires fixed Infrastructure for operation.</p> <p>D. Network Topology is dynamic and constantly changing.</p> <p>E. It requires a central controller to manage network traffic.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q12 - Options
(A) A, B &amp; E only
(B) B, C, D &amp; E only
(C) A, B &amp; D only
(D) A, B &amp; C only

## Q12 - Hint
**Answer:** C  
**Topic:** Computer Networks – MANET

MANETs are **self-organising and decentralised (A)**, have **highly mobile nodes (B)** and a **dynamic topology (D)**. They need **no** fixed infrastructure (C ✘) and **no** central controller (E ✘).

## Q13
<div class="stem"><p>Which of the following is/are undecidable?</p> <p>I. An arbitrary Turing machine halts after 100 steps.</p> <p>II. A Turing machine prints a specific letter.</p> <p>III.A Turing machine computes the products of two numbers.</p></div>

## Q13 - Options
(A) I and II
(B) II and III
(C) I and III
(D) All I,II and III

## Q13 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Decidability

- **I – decidable**: simulate the TM for 100 steps.
- **II – undecidable**: "ever prints a given symbol" reduces from the halting problem.
- **III – undecidable**: Rice's theorem (a non-trivial semantic property).

## Q14
<div class="stem"><p>The Rational Agent Approach?</p></div>

## Q14 - Options
(A) acts rationally mean acting so as to achieve one's goals, given one's beliefs
(B) The ability to achieve human-level performance.
(C) Both A and B
(D) None of the above

## Q14 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Rational Agents

Acting rationally = acting to achieve one's goals given one's beliefs.

## Q15
<div class="stem"><p>Consider the following two commands C1 and C2 on the relation R from an SQL database:</p> <p>C1: drop table R;</p> <p>C2: delete from R;</p> <p>Which of the following statements is TRUE?</p> <p>I. Both C1 and C2 delete the schema for R.</p> <p>II. C2 retains relation R, but deletes all tuples in R.</p> <p>III. C1 deletes not only all tuples of R, but also the schema for R.</p></div>

## Q15 - Options
(A) I only
(B) I and II only
(C) II and III only
(D) I, II and III

## Q15 - Hint
**Answer:** C  
**Topic:** DBMS – DROP vs DELETE

DELETE keeps the table but removes its rows (II ✔); DROP removes the rows and the schema (III ✔); so I is false.

## Q16
<div class="stem"><p>Choose the correct statements from the following</p> <p>A. In connection oriented service, the destination address is to be specified only during the setup.</p> <p>B. Packet sequencing is not guaranteed in connection oriented service</p> <p>C. Flooding is method in which every incoming packet is sent out on every outgoing line except the one by which it arrived.</p> <p>D. Presentation layer performs detection and recovery from errors in the transmitted data.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q16 - Options
(A) A, B &amp; C only
(B) B, C &amp; D only
(C) A &amp; C only
(D) A, C &amp; D only

## Q16 - Hint
**Answer:** C  
**Topic:** Computer Networks – Concepts

- **A ✔** – in a connection-oriented service the destination address is given only at setup (afterwards, the virtual-circuit id is used).
- **B ✘** – connection-oriented service **does** guarantee packet order.
- **C ✔** – flooding sends a packet on every line except the one it arrived on.
- **D ✘** – error detection and recovery are data-link and transport functions, not the presentation layer's.

## Q17
<div class="stem"><p>Which AI system finds and identifies patterns; for instance; in the words you use ?</p></div>

## Q17 - Options
(A) Expert system
(B) Intelligent system
(C) Neural network
(D) Fuzzy logic

## Q17 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Neural Networks

**Neural networks** learn to find and recognise patterns (e.g. in the words you use: speech, text, autocomplete).

## Q18
<div class="stem"><p>Which of the following definitions generates the same language as L, where L = {ww^R | w∈ {a, b}*} ?</p></div>

## Q18 - Options
(A) S → aSb | bSa |∈
(B) S → aSa |bSb|∈
(C) S → aSb |bSa | aSa | bSb | ∈
(D) S → aSb | bSa | aSa | bSb

## Q18 - Hint
**Answer:** A  
**Topic:** Theory of Computation – Palindromes

L = { wwᴿ } = **even-length palindromes**. Each step must add the **same** symbol at both ends:

**S → aSa | bSb | ε** (option B).

Option (A) S → aSb | bSa | ε adds **different** symbols at the ends (e.g. it generates "ab", which is not a palindrome).

> **⚠ Note:** The correct grammar is **(B)**. The key's (A) generates strings like "ab" that are not of the form wwᴿ.

## Q19
<div class="stem"><p>Given below are two statements:</p> <p>Statement I: The problem "Is L1 Λ L2 =  φ?" is undecidable for context sensitive languages L1 and L2.</p> <p>Statement II: The problem "Is WεL?" is decidable for context sensitive language L, (where W is a string).</p> <p>In the light of the above statements, choose the correct answer from the options given below</p></div>

## Q19 - Options
(A) Both Statement I and Statement II are true
(B) Both Statement I and Statement II are false
(C) Statement I is correct but Statement II is false
(D) Statement I is incorrect but Statement II is true

## Q19 - Hint
**Answer:** A  
**Topic:** Theory of Computation – Decidability

- **I ✔** – emptiness of an intersection is undecidable for CSLs (even emptiness of a single CSL is undecidable).
- **II ✔** – membership is decidable for CSLs: a linear-bounded automaton always halts.

## Q20
<div class="stem"><p>Match the LIST-I with LIST-II</p> <table> <tbody> <tr> <td> <p>LIST-I</p> </td> <td> <p>LIST-II</p> </td> </tr> <tr> <td> <p>A. Hadoop Distribution File System</p> </td> <td> <p>I. Trust</p> </td> </tr> <tr> <td> <p>B. Veracity</p> </td> <td> <p>II. Facebook</p> </td> </tr> <tr> <td> <p>C. Apache Pig</p> </td> <td> <p>III. Name-Node</p> </td> </tr> <tr> <td> <p>D. Apache Hive</p> </td> <td> <p>IV. Yahoo</p> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q20 - Options
(A) A-IV, B-III, C-I, D-II
(B) A-III, B-I, C-II, D-IV
(C) A-III, B-I, C-IV, D-II
(D) A-II, B-III, C-I, D-IV

## Q20 - Hint
**Answer:** C  
**Topic:** Big Data – Hadoop Ecosystem

HDFS → **NameNode** (III); veracity → **trust** in data quality (I); Apache Pig → developed at **Yahoo** (IV); Apache Hive → developed at **Facebook** (II).

## Q21
<div class="stem"><p>Consider the following languages:</p> <p>L1 = {aZ̀<sup>Z</sup>|Z̀ is an integer}</p> <p>L2 = {a<sup>ZZ̀</sup>|Z̀ ≥ 0}</p> <p>L3 = {ωω|ω ∈ {a,b}∗}</p> <p>Which of the languages is (are) regular?</p> <p>Choose the correct answer from the options given below:</p></div>

## Q21 - Options
(A) L1 and L2 only
(B) L1 and L3 only
(C) L1 only
(D) L2 only

## Q21 - Hint
**Answer:** D  
**Topic:** Theory of Computation – Regular Languages

- **L2** (a repeated in a simple linear pattern, e.g. a²ⁿ) → a DFA can count modulo k → **regular**.
- **L1** (exponent with a non-linear pattern) → **not regular**.
- **L3 = { ww }** → needs to compare two halves → not regular (not even CFL).

> **⚠ Note:** The exponents in L1 and L2 are garbled in the source. The key (L2 only) fits the intended reading: L2 has a linear/periodic exponent and L1 does not.

## Q22
<div class="stem"><p>Which of the following statements is true?</p></div>

## Q22 - Options
(A) The union of two context free languages is context free.
(B) The intersection of two context free languages is context free.
(C) The complement of a context free language is context free.
(D) If a language is context free, it can always be accepted by a deterministic pushdown automaton.

## Q22 - Hint
**Answer:** A  
**Topic:** Theory of Computation – CFL Closure

CFLs are closed under **union** ✔, but not under intersection or complement; and not every CFL has a DPDA.

## Q23
<div class="stem"><p>Consider L = L1 ∩ L2</p> <p>Where L1 = {0m1m20n1n|m, n ≥ 0}</p> <p>L2 = {0m1n2k|m,n, k ≥ 0}</p> <p>Then, the language L is</p></div>

## Q23 - Options
(A) Recursively enumerable but not context free
(B) Regular
(C) Context free but not regular
(D) Not recursive

## Q23 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Language Classes

L1 = 0ᵐ1ᵐ 2 0ⁿ1ⁿ. L2 = 0ᵐ1ⁿ2ᵏ (after the 2, only 2s may follow).

So in L1 ∩ L2, the part after the 2 must be empty → n = 0 → **L = { 0ᵐ1ᵐ2 | m ≥ 0 }**. This is a CFL (it needs counting) but **not regular**.

## Q24
<div class="stem"><p>Match List I with List II:</p> <p>L<sub>R</sub>: Regular language, L<sub>CF</sub>: Context free language</p> <p>L<sub>REC</sub>: Recursive language,</p> <p>L<sub>RE</sub>: Recursively enumerable language.</p> <p><img src="tests/img/t9/q24-c4eac5.png"/></p></div>

## Q24 - Options
(A) A-II, B-III, C-I
(B) A-III, B-I, C-II
(C) A-I, B-II, C-III
(D) A-II, B-I, C-III

## Q24 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Closure Properties

- (A) complement of recursive ∪ RE → recursive is closed under complement, and recursive ∪ RE is RE → **RE** (I)
- (B) complement of CFL ∪ recursive → a CFL's complement is recursive, so the union is **recursive** (II)
- (C) Lᴿ\* ∩ CFL → regular ∩ CFL is a **CFL** (III)

## Q25
<div class="stem"><p>Consider the following statements</p> <p>S1: LRU page replacement algorithm suffers from the belady's anomaly</p> <p>S2: Shortest remaining time first scheduling may cause starvations</p> <p>S3: Stack is shared by all threads in a process</p></div>

## Q25 - Options
(A) S1, S2 and S3 are true
(B) S1, S3 false and S2 is true
(C) S1, S2 are false and S3 is true
(D) S1, S2 and S3 are false

## Q25 - Hint
**Answer:** B  
**Topic:** Operating Systems – Concepts

S1 ✘ (LRU is a stack algorithm, no Belady's anomaly); S2 ✔ (SRTF can starve); S3 ✘ (each thread has its own stack).

## Q26
<div class="stem"><p>The Set of string generated by (0+ε)(1+ε)</p></div>

## Q26 - Options
(A) {0,1,01,ε}
(B) {0,1,ε,10}
(C) {0,1,01,11,00,10,ε}
(D) {0,1,111,0000}

## Q26 - Hint
**Answer:** A  
**Topic:** Theory of Computation – Regular Expressions

(0 + ε)(1 + ε) = 01, 0, 1, ε → **{ε, 0, 1, 01}**.

## Q27
<div class="stem"><p>#include </p> <p>#include </p> <p>void len(char *s1, char *s2)</p> <p>{</p> <p>  unsigned int i = 0;</p> <p>  int l = ((strlen (s1) - strlen (s2)) &gt; i) ? strlen (s1) : strlen (s2);</p> <p>  printf("%d\n", l);</p> <p>}</p> <p>void main()</p> <p>{</p> <p>  char *m1 = "Myjrfadda";</p> <p>  char *m2 = "BestLuck";</p> <p>  len(m1, m2);</p> <p>}</p> <p>What will be the output of above code?</p></div>

## Q27 - Options
(A) 9
(B) 8
(C) 1
(D) 0

## Q27 - Hint
**Answer:** A  
**Topic:** Programming in C – Unsigned Arithmetic

strlen returns **size_t (unsigned)**. Here 9 − 8 = 1 > 0 → true → l = strlen(s1) = **9**.

(Note the trap: if s1 were shorter, the unsigned difference would wrap to a huge number and still be > 0.)

## Q28
<div class="stem"><p>Match the LIST-I with LIST-II</p> <p><img src="tests/img/t9/q28-bb0a03.png"/></p> <p>Choose the correct answer from the options given below:</p></div>

## Q28 - Options
(A) A-IV, B-I, C-III, D-II
(B) A-IV, B-III, C-I, D-II
(C) A-IV, B-II, C-III, D-I
(D) A-I, B-IV, C-II, D-III

## Q28 - Hint
**Answer:** B  
**Topic:** Computer Organization – Concepts

- (100110011)₂ → group in 4s from the right: 1 0011 0011 → **(133)₁₆** (IV)
- Complements → represent **negative numbers** (III)
- Parity bits → **error detection** (I)
- Variable-length instructions → **CISC** (II)

## Q29
<div class="stem"><p>Which of the following is not a stateful application layer protocol?</p></div>

## Q29 - Options
(A) HTTP
(B) BGP
(C) POP3
(D) All of the above

## Q29 - Hint
**Answer:** A  
**Topic:** Computer Networks – Stateless Protocols

**HTTP** is stateless: each request is independent (state comes from cookies or sessions). BGP and POP3 keep session state.

## Q30
<div class="stem"><p>The language accepted by a Pushdown Automaton in which the stack is limited to 100 items is best described as</p></div>

## Q30 - Options
(A) Context free but not regular
(B) Regular
(C) Deterministic Context Free Language but not regular
(D) None of the above

## Q30 - Hint
**Answer:** B  
**Topic:** Theory of Computation – PDA with Bounded Stack

A stack limited to 100 items has only finitely many possible contents, so they can be folded into the finite control → the machine is a finite automaton → **regular**.

## Q31
<div class="stem"><p>Match the LIST-I with LIST-II</p> <table> <tbody> <tr> <td> <p>LIST-I</p> <p>Boolean Algebra Law</p> </td> <td> <p>LIST-II</p> <p>Axioms</p> </td> </tr> <tr> <td> <p>A. Absorption Law</p> </td> <td> <p>I. a+1=1</p> </td> </tr> <tr> <td> <p>B. Bounded Law</p> </td> <td> <p>II. a+0=a</p> </td> </tr> <tr> <td> <p>C. Identity Law</p> </td> <td> <p>III. a*(b+c)=(a*b)+(a*c)</p> </td> </tr> <tr> <td> <p>D. Distributive Law</p> </td> <td> <p>IV. a+(a*b)=a</p> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q31 - Options
(A) A-IV, B-I, C-II, D-III
(B) A-IV, B-III, C-I, D-II
(C) A-III, B-IV, C-II, D-I
(D) A-II, B-III, C-IV, D-I

## Q31 - Hint
**Answer:** A  
**Topic:** Digital Logic – Boolean Laws

Absorption a + ab = a (IV); bounded a + 1 = 1 (I); identity a + 0 = a (II); distributive a(b + c) = ab + ac (III).

## Q32
<div class="stem"><p>Which of the following statements is FALSE?</p></div>

## Q32 - Options
(A) A continuous planning agent creates new goals as it goes and reacts in real-time.
(B) Partial Order Planning is a sound and complete algorithm for planning using STRIPS representation.
(C) An Environment is Non-deterministic because the agent predicts the outcome of its actions.
(D) None of the above

## Q32 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Planning

(A) ✔ continuous planning reacts in real time. (B) ✔ POP is sound and complete for STRIPS. **(C) ✘** – an environment is non-deterministic because the agent **cannot** predict the outcomes of its actions.

## Q33
<div class="stem"><p>Consider the following statements:</p> <p>S1: The performance of a pipelined processor suffers if consecutive instructions are dependent on each other.</p> <p>S2: Time T1 taken for a single instruction on a pipelined CPU with time T2 taken on a non-pipelined but identical CPU, we can say that T1 ≥ T2.</p> <p>Which of the above is correct?</p></div>

## Q33 - Options
(A) Only S1
(B) Only S2
(C) Both S1 and S2
(D) None of the above

## Q33 - Hint
**Answer:** C  
**Topic:** Computer Organization – Pipelining

- **S1 ✔** – dependencies cause hazards and stalls.
- **S2 ✔** – a single instruction's **latency** on a pipeline is ≥ the non-pipelined time, because of latch overhead and stage imbalance. Pipelining improves **throughput**, not the latency of one instruction.

## Q34
<div class="stem"><p>Consider the statement below.</p> <p>A person who is radical (R) is electable (E) if he/she is conservative (C), but otherwise is not electable. Few probable logical assertions of the above sentence are given below:</p> <p><img src="tests/img/t9/q34-884985.png"/></p> <p>Which of the above logical assertions are true? Choose the correct answer from the options given below:</p></div>

## Q34 - Options
(A) (B) Only
(B) (C) only
(C) (A) and (C) only
(D) (B) and (D) only

## Q34 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Logic Translation

"A radical is electable iff conservative" → **R → (E ↔ C)** (B).

Expand (B): R → ((E → C) ∧ (C → E)) ≡ (¬R ∨ ¬E ∨ C) ∧ (¬R ∨ ¬C ∨ E) = **(D)**.

(A) also constrains non-radicals; (C) R → ((C → E) ∨ ¬E) is a tautology.

## Q35
<div class="stem"><p>Match list I with List II</p> <p>List I                                     List II</p> <p>A. Text Planning                   I.  Natural Language understanding</p> <p>B. Sentence Planning          II.  Natural language generation</p> <p>C. Sentence Generation</p> <p>D. Map the input to useful representation</p> <p>Choose the correct answer from the options given below.</p></div>

## Q35 - Options
(A) A-I, B-II, C-I, D-II
(B) A-II, B-II, C-I, D-II
(C) A-I, B-II, C-II, D-I
(D) A-II, B-II, C-II, D-I

## Q35 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – NLP

Text planning, sentence planning and sentence generation are **NLG** stages (II); mapping the input to useful representations is **NLU** (I).

## Q36
<div class="stem"><p>The probability that A hits a target is 14 and the probability that B hits the target is  14 . Both shoot 5 at the target, what is the probability that at least one of them hits the target, i.e., that A or B (or both) hit the target?</p></div>

## Q36 - Options
(A) 35
(B) 119
(C) 220
(D) 1120

## Q36 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Probability

Assume P(A hits) = 1/4 and P(B hits) = 2/5 (the fractions lost their bars in the source).

P(at least one) = 1 − P(both miss) = 1 − (3/4)(3/5) = 1 − 9/20 = **11/20**.

> **⚠ Note:** The source shows "14" for both probabilities and "1120" for 11/20. The key's answer works when B's probability is 2/5.

## Q37
<div class="stem"><p>Let G be a directed graph whose vertex set is the set of numbers from 1 to 100. There is an edge from a vertex i to a vertex j if and only if either j=i+1 or j = 31. The minimum number of edges in a path in G from vertex 1 to vertex 100 is ____</p></div>

## Q37 - Options
(A) 23
(B) 99
(C) 4
(D) 7

## Q37 - Hint
**Answer:** D  
**Topic:** Algorithms – Shortest Path

Edges: i → i + 1 and i → 3i. Work **backwards** from 100 (divide by 3 when possible, otherwise subtract 1):

100 ← 99 ← 33 ← 11 ← 10 ← 9 ← 3 ← 1

Forward: 1 → 3 → 9 → 10 → 11 → 33 → 99 → 100 = **7 edges**.

## Q38
<div class="stem"><p>Consider the following argument with premise for all x (P(x) V Q(x)) and conclusion (for all x P(x))∧(for all x Q(x))</p> <p><img src="tests/img/t9/q38-6cdf99.png"/></p></div>

## Q38 - Options
(A) This is a valid argument
(B) Steps (C) and (E) are not correct inferences
(C) Steps (D) and (F) are not correct inferences
(D) Step (G) is not a correct inference

## Q38 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Rules of Inference

Steps (C) and (E) "simplify" P(c) ∨ Q(c) to P(c) and to Q(c). **Simplification works only on a conjunction (∧)**, not a disjunction. Both steps are invalid, so the argument fails.

## Q39
<div class="stem"><p>Consider the following properties:</p> <p>A Reflexive</p> <p>B Antisymmetric</p> <p>C Symmetric</p> <p>Let A={a, b, c, d, e, f, g} and R={(a, a), (b, b), (c, d), (c, g), (d, g), (e, e) (f, f), (g,g)} be a relation on A. Which of the following property (properties) is (are) satisfied by the relation R</p></div>

## Q39 - Options
(A) Only A
(B) Only C
(C) Both A and B
(D) B and not A

## Q39 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Relations

- **Reflexive?** ✘ – (c,c) and (d,d) are missing.
- **Symmetric?** ✘ – (c,d) is present without (d,c).
- **Antisymmetric?** ✔ – no pair (x,y) with x ≠ y appears in both directions.

→ B and not A.

## Q40
<div class="stem"><p>In Software Engineering Jackson's Principle based on</p> <p>A. Designation</p> <p>B. Definitions</p> <p>C. Refutable Assertions</p> <p>D. Formal Review</p> <p>E. Requirement Elicitation</p> <p>Choose the correct answer from the options given below:</p></div>

## Q40 - Options
(A) A, B &amp; C Only
(B) B, C &amp; D Only
(C) C, D &amp; E Only
(D) B, D &amp; C Only

## Q40 - Hint
**Answer:** A  
**Topic:** Software Engineering – Requirements (Jackson)

Michael Jackson's requirements principles are built on **designations** (naming phenomena), **definitions** and **refutable assertions** (statements that can be tested against the world).

## Q41
<div class="stem"><p>Consider the following statements:</p> <p>(A) Any tree is 2-colorable</p> <p>(B) A graph G has no cycles of even length if it is bipartite.</p> <p>(C) A graph G is 2-colorable if is bipartite</p> <p>(D) A graph G can be colored with d+1 colors if d is the maximum degree of any vertex in the graph G.</p> <p>(E) A graph G can be colored with O(log) colors if it has O(v) edges.</p> <p>Choose the correct answer from the options given below</p></div>

## Q41 - Options
(A) (C) and (E) are incorrect
(B) (B) and (C) are incorrect
(C) (B) and (E) are incorrect
(D) (A) and (D) are incorrect

## Q41 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Graph Colouring

- (A) ✔ trees are bipartite → 2-colourable.
- **(B) ✘** – bipartite ⇔ **no odd cycles**; it can have even cycles.
- (C) ✔ bipartite ⇒ 2-colourable.
- (D) ✔ greedy colouring uses at most Δ + 1 colours.
- **(E) ✘** – O(v) edges doesn't guarantee O(log v) colours (e.g. a clique on √v vertices needs √v colours).

## Q42
<div class="stem"><p>Consider the following recursive Java function f that takes two long arguments and returns a float value:</p> <p>public static float f (long m, long n) {</p> <p>float result = (float)m / (float)n;</p> <p>if(m &lt; 0 | n &lt; 0) return 0.0f;</p> <p>else result - = f(m * 2,n * 3);</p> <p>return result ;</p> <p>}</p> <p>Which of the following real values best approximates the value of f (1, 3) ?</p></div>

## Q42 - Options
(A) 0.2
(B) 0.4
(C) 0.6
(D) 0.8

## Q42 - Hint
**Answer:** A  
**Topic:** Programming – Recursion

f(m, n) = m/n − f(2m, 3n), so  
f(1,3) = 1/3 − 2/9 + 4/27 − 8/81 + …

This is a geometric series with first term 1/3 and ratio −2/3:  
Sum = (1/3) / (1 + 2/3) = (1/3)/(5/3) = **1/5 = 0.2**.

(The recursion stops when m or n overflows and becomes negative.)

## Q43
<div class="stem"><p>What is the output of following C program?</p> <p>#include &lt;stdio.h&gt;</p> <p>main()</p> <p>{</p> <p>int i, j, x = 0;</p> <p>for ( i = 0 ; i &lt; 5; ++i )</p> <p>for (j = 0; j &lt; I; ++ j )</p> <p>{</p> <p>x + = (i + j - 1);</p> <p>break;</p> <p>}</p> <p>printf("%d",x);</p> <p>}</p></div>

## Q43 - Options
(A) 6
(B) 5
(C) 4
(D) 3

## Q43 - Hint
**Answer:** A  
**Topic:** Programming in C – Loops

The inner loop runs at most once per i (`break`), and only when i > 0 (j < i):

- i = 1: x += 1 + 0 − 1 = 0
- i = 2: x += 1
- i = 3: x += 2
- i = 4: x += 3

x = 0 + 1 + 2 + 3 = **6**. (The "I" in the source is the variable i.)

## Q44
<div class="stem"><p>Which of the following algorithms are based on the Breadth First Search (BFS)?</p> <p>A. Prim's algorithms</p> <p>B. Kruskal algorithms</p> <p>C. Dijkstra algorithms</p> <p>D. Greedy algorithms</p> <p>E. Dynamic Programming</p> <p>Choose the correct answer from the options given below:</p></div>

## Q44 - Options
(A) A &amp; B only
(B) A, C &amp; D only
(C) D &amp; E only
(D) A &amp; C only

## Q44 - Hint
**Answer:** D  
**Topic:** Algorithms – BFS-like Algorithms

**Prim's** and **Dijkstra's** algorithms grow a tree outward from a source using a priority queue, a "weighted BFS". Kruskal works on sorted edges; "greedy" and "DP" are paradigms, not BFS-based algorithms.

## Q45
<div class="stem"><p>Given below are two statements:</p> <p>Statement I: "Grandparent is a parent of one's parent".</p> <p>Statement II: First Order Predicate Logic (FOPL) representation of above statement is ⩝ g, c grandparent (g, c) ⇔ ∃p parent (g, p) ˄ parent (p, c)</p> <p>In the light of the above statements, choose the most appropriate answer from the options given below</p></div>

## Q45 - Options
(A) Both Statement I and Statement II are correct
(B) Both Statement I and Statement II are incorrect
(C) Statement I is correct but Statement II is incorrect
(D) Statement I is incorrect but Statement II is correct

## Q45 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – FOL

- I ✔ – the definition of grandparent.
- II ✔ – ∀g, c: Grandparent(g, c) ⇔ ∃p (Parent(g, p) ∧ Parent(p, c)).

## Q46
<div class="stem"><p>Consider the following statement about linked list implementation of the queue?</p> <p>(S1) In push operation, if new nodes are inserted at the beginning of the linked list, then in pop operation, nodes must be removed from end.</p> <p>(S2) In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning.</p> <p>Which of the following is TRUE.</p></div>

## Q46 - Options
(A) Only S1
(B) Only S2
(C) Both S1 and S2
(D) None of the above

## Q46 - Hint
**Answer:** C  
**Topic:** Data Structures – Queue via Linked List

A queue needs insertion at one end and removal at the **other**. Either arrangement works:

- push at the head, pop at the tail (S1), or
- push at the tail, pop at the head (S2).

(With a singly linked list, popping at the tail is O(n), but it is still correct.)

## Q47
<div class="stem"><p>Consider the following grammar</p> <p>X→ X#Y∣Y</p> <p>Y→ Z@Y∣Z</p> <p>Z→ id</p> <p>Which of the following is true?</p></div>

## Q47 - Options
(A) ‘#’ is left associative while ‘@’ is right associative
(B) Both ‘#’ and ‘@’ are left associative
(C) ‘#’ is right associative while ‘@’ is left associative
(D) None of the above

## Q47 - Hint
**Answer:** A  
**Topic:** Compiler Design – Associativity

- X → X # Y is **left recursive** → # is **left associative**.
- Y → Z @ Y is **right recursive** → @ is **right associative**.

## Q48
<div class="stem"><p>Consider the following statements :</p> <p>S1: The effectiveness of alpha-beta pruning is highly dependent on the order of successors.</p> <p>S2: The number of game states with minimax search is exponential in the number of moves.</p> <p>S3: alpha-beta pruning result differs from minimax search.</p> <p>Which of the above is correct?</p></div>

## Q48 - Options
(A) S1 and S3
(B) S2 and S3
(C) S1 and S2
(D) All S1, S2, and S3

## Q48 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Game Search

S1 ✔ (move ordering matters); S2 ✔ (minimax explores bᵐ states); S3 ✘ (alpha–beta returns the **same** result as minimax).

## Q49
<div class="stem"><p>A hash table contains 10 buckets and uses linear probing to resolve collisions. The key values are integers and the hash function used is key % 10. If the values 63,65,42,53,152 are inserted in the table, the number of collisions are?</p></div>

## Q49 - Options
(A) 3
(B) 5
(C) 4
(D) 6

## Q49 - Hint
**Answer:** B  
**Topic:** Data Structures – Hashing (Linear Probing)

Count every occupied slot hit while probing:

- 63 → 3, 65 → 5, 42 → 2 (no collisions)
- 53 → 3 ✘ → **4** ✔ → **1 collision**
- 152 → 2 ✘, 3 ✘, 4 ✘, 5 ✘ → **6** ✔ → **4 collisions**

Total = **5**.

## Q50
<div class="stem"><p>Arrange the following steps of the DHCP (Dynamic Host Control Protocol) process in the correct sequence.</p> <p>A. DHCP ACK</p> <p>B. DHCP DISCOVER</p> <p>C. DHCP OFFER</p> <p>D. DHCP REQUEST</p> <p>E. Client receives IP configuration</p> <p>Choose the correct answer from the options given below:</p></div>

## Q50 - Options
(A) A, B, C, D, E
(B) B, C, D, A, E
(C) C, B, A, E, D
(D) D, A, E, C, В

## Q50 - Hint
**Answer:** B  
**Topic:** Computer Networks – DHCP

**DORA**: Discover → Offer → Request → Ack, then the client configures its IP → B, C, D, A, E.

## Q51
<div class="stem"><p>Consider ∑={w,x} and T={a,b,c}. Define homomorphism h by:</p> <p>h(x)=ab</p> <p>h(w)=cab</p> <p>If L is the regular language denoted by r=(w*+x)w, then the regular language h(L) is given by</p></div>

## Q51 - Options
(A) ((cab)*+ab)(cab)
(B) (cab+(ab)*)(cab)
(C) (cab+ab)(cab)*
(D) (cab+(ab)*)(cabcab)

## Q51 - Hint
**Answer:** A  
**Topic:** Theory of Computation – Homomorphism

A homomorphism replaces each symbol by its string: w → cab, x → ab. Apply it to r = (w\* + x) w:

h(L) = ((cab)\* + ab)(cab).

## Q52
<div class="stem"><p>Which of the following is the major functionality of the Transport layer with respect to the network layer?</p></div>

## Q52 - Options
(A) Recovery from packet losses
(B) Detection of duplicate packets
(C) Packet delivery in the correct order
(D) End to end connectivity

## Q52 - Hint
**Answer:** D  
**Topic:** Computer Networks – Transport Layer

The network layer delivers **host to host**; the transport layer adds **end-to-end (process-to-process) connectivity** using ports. Loss recovery, duplicate detection and ordering are TCP features built on top of that.

## Q53
<div class="stem"><p>Correct the order of instruction cycle:</p> <p>A. Read the effective address</p> <p>B. Fetch the information</p> <p>C. Execute the instruction</p> <p>D. Decode the instruction</p> <p>Choose the correct answer from the options given below:</p></div>

## Q53 - Options
(A) A, B, C, D
(B) B, D, A, С
(C) B, A, D, C
(D) A, B, D, C

## Q53 - Hint
**Answer:** B  
**Topic:** Computer Organization – Instruction Cycle

Fetch (B) → Decode (D) → Read the effective address (A) → Execute (C).

## Q54
<div class="stem"><p>Consider the following statements:</p> <p>S1: A perceptron is a single neuron that classifies a set of inputs into one of two categories.</p> <p>S2:Forward Propagation refers to the movement of the input through the output layers to the hidden layers.</p> <p>Which of the above is Correct.</p></div>

## Q54 - Options
(A) Only S1
(B) Only S2
(C) Both S1 and S2
(D) None of the above

## Q54 - Hint
**Answer:** A  
**Topic:** Machine Learning – Perceptron

- **S1 ✔** – a perceptron is a single neuron and a binary linear classifier.
- **S2 ✘** – forward propagation goes **input → hidden → output**, not output → hidden.

## Q55
<div class="stem"><p>Which of the following statement(s) is/are TRUE with regard to software testing?</p> <p>I. Regression testing technique ensures that the software product runs correctly after the changes during maintenance.</p> <p>II. Equivalence partitioning is a white-box testing technique that divides the input domain of a program into classes of data from which test cases can be derived.</p></div>

## Q55 - Options
(A) only I
(B) only II
(C) both I and II
(D) neither I nor II

## Q55 - Hint
**Answer:** A  
**Topic:** Software Engineering – Testing

I ✔ (regression testing); II ✘ (equivalence partitioning is **black-box**).

## Q56
<div class="stem"><p>Which are often needed to evaluate the cache performance?</p></div>

## Q56 - Options
(A) Hit Ratio
(B) Latency
(C) Cache Traces
(D) Transfer Rate

## Q56 - Hint
**Answer:** A  
**Topic:** Computer Organization – Cache Performance

Cache performance is mainly measured by the **hit ratio** (with hit time and miss penalty giving average access time).

## Q57
<div class="stem"><p>Let A be the base class in C++ and B be the derived class from A with protected inheritance Which of the following statement is false for class B</p></div>

## Q57 - Options
(A) Member function of class B can access protected data of class A
(B) Member function of Class B can access public data of class A
(C) Member function of class B cannot access private data of class A
(D) Object of derived class B can access public base class data

## Q57 - Hint
**Answer:** D  
**Topic:** Programming in C++ – Protected Inheritance

With **protected** inheritance, A's public and protected members become **protected** in B:

- B's member functions can use them ✔ (A, B are true)
- A's private members stay inaccessible ✔ (C is true)
- **(D) ✘** – a B **object** (code outside the class) can't access them, because they are now protected.

## Q58
<div class="stem"><p>Java Virtual Machine (JVM) is used to execute architectural neutral byte code. Which of the following is needed by the JVM for execution of Java Code</p></div>

## Q58 - Options
(A) Class loader only
(B) Class loader and Java Interpreter
(C) Class loader, Java Interpreter and API
(D) Java Interpreter only

## Q58 - Hint
**Answer:** B  
**Topic:** Programming – Java JVM

To run bytecode the JVM needs the **class loader** (loads .class files) and the **execution engine/interpreter** (with JIT). The key's answer: class loader + interpreter.

## Q59
<div class="stem"><p>Which of the following statements are true regarding C++?</p> <p>(a) Overloading gives the capability to an existing operator to operate on other data types.</p> <p>(b) Inheritance in object oriented programming provides support to reusability.</p> <p>(c) When object of a derived class is defined, first the constructor of derived class is executed then constructor of a base class is executed.</p> <p>(d) Overloading is a type of polymorphism.</p> <p>Choose the correct option from those given below:</p></div>

## Q59 - Options
(A) (a) and (b) only
(B) (a), (b) and (c) only
(C) (b) and (d) only
(D) (b), (c) and (d) only

## Q59 - Hint
**Answer:** C  
**Topic:** Programming in C++ – OOP

(b) ✔ and (d) ✔. (a) describes **operator** overloading; (c) is reversed (the base constructor runs first).

## Q60
<div class="stem"><p>Match the LIST-I with LIST-II</p> <table> <tbody> <tr> <td> <p>LIST-I</p> </td> <td> <p>LIST-II</p> </td> </tr> <tr> <td> <p>A. Decision Tree</p> </td> <td> <p>I. Delta Learning Rule</p> </td> </tr> <tr> <td> <p>B. Supervised Learning</p> </td> <td> <p>II. Self Organizing Map</p> </td> </tr> <tr> <td> <p>C. Artificial Neural Network</p> </td> <td> <p>III. C4.5 Algorithm</p> </td> </tr> <tr> <td> <p>D. Instance base Learning</p> </td> <td> <p>IV. Non-linear Regression Algorithm</p> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q60 - Options
(A) A-I, B-II, C-III, D-IV
(B) A-II, B-III, C-IV, D-I
(C) A-III, B-IV, C-I, D-II
(D) A-IV, B-I, C-II, D-III

## Q60 - Hint
**Answer:** C  
**Topic:** Machine Learning – Concepts

Decision tree → **C4.5** (III); supervised learning → e.g. **non-linear regression** (IV); ANN → **delta learning rule** (I); and the key pairs instance-based learning with **SOM** (II).

## Q61
<div class="stem"><p>Match the following:</p> <table> <tbody> <tr> <td> <p>Group 1- Type of Agent's Environment</p> </td> <td> <p>Group II-Definition</p> </td> </tr> <tr> <td> <p>(P) Fully observable</p> </td> <td> <p>1.A limited number of distinct, clearly defined percepts and actions.</p> </td> </tr> <tr> <td> <p>(Q)Deterministic</p> </td> <td> <p>2.if the environment itself does not change with the passage of time but the agent's performance score does</p> </td> </tr> <tr> <td> <p>(R)semi dynamic</p> </td> <td> <p>3.The next state of the environment is completely determined by the current state and the action executed by the agent</p> </td> </tr> <tr> <td> <p>(S)Discrete</p> </td> <td> <p>4.An agent's sensors give it access to the complete state of the environment at each point in time</p> </td> </tr> </tbody> </table></div>

## Q61 - Options
(A) P-4, Q-3, R-2, S-1
(B) P-4, Q-3, R-1, S-2
(C) P-2, Q-3, R-4, S-1
(D) P-2, Q-3, R-1, S-4

## Q61 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Environments

Fully observable → sensors see the complete state (4); deterministic → next state fixed by the action (3); semi-dynamic → only the score changes with time (2); discrete → finite distinct percepts and actions (1).

## Q62
<div class="stem"><p>A lexical analyzer uses the following patterns to recognize three tokens T1, T2, and T3 over the alphabet {a,b,c}.</p> <p>T1: a?(b∣c)*a</p> <p>T2: b?(a∣c)*b</p> <p>T3: c?(b∣a)*c</p> <p>Note that ‘x?’ means 0 or 1 occurrence of the symbol x. Note also that the analyzer outputs the token that matches the longest possible prefix.</p> <p>If the string bbaacabc is processes by the analyzer, which one of the following is the sequence of tokens it outputs?</p></div>

## Q62 - Options
(A) T1T2T3
(B) T1T1T3
(C) T2T1T3
(D) T3T3

## Q62 - Hint
**Answer:** D  
**Topic:** Compiler Design – Lexical Analysis

T1 = a?(b|c)\*a, T2 = b?(a|c)\*b, T3 = c?(a|b)\*c. The analyser takes the **longest matching prefix**.

**Token 1** on "bbaacabc":

- T1: "bba" → length 3
- T2: "bb" → length 2
- T3: skip c?, (a|b)\* = bbaa, then c → "**bbaac**" → length **5** ✔ longest

**Token 2** on the remaining "abc":

- T1: "a" → length 1
- T3: (a|b)\* = ab, then c → "**abc**" → length **3** ✔

Output: **T3 T3**.

## Q63
<div class="stem"><p>Sequence the following stages of the sliding window protocol for flow control.</p> <p>A. Sender move the window to the next set of frames.</p> <p>B. Sender sends a window of frames.</p> <p>C. Receiver acknowledge the received frames.</p> <p>D. If acknowledgment is not received, Sender retransmits the frame.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q63 - Options
(A) B, A, C, D
(B) B, C, D, A
(C) B, D, C, A
(D) B, C, A, D

## Q63 - Hint
**Answer:** D  
**Topic:** Computer Networks – Sliding Window

Send a window of frames (B) → receiver ACKs (C) → sender slides the window forward (A) → if an ACK doesn't arrive, retransmit (D).

## Q64
<div class="stem"><p>Consider the following terminology and match List 1 and List 2 and choose the correct answer from the code given below</p> <p>b= branch factor</p> <p>d= depth of shallowest solution</p> <p>M= Maximum depth of the search tree</p> <p>I= depth limit</p> <p><img src="tests/img/t9/q64-dc1a71.png"/></p></div>

## Q64 - Options
(A) (a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)
(B) (a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)
(C) (a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)
(D) (a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)

## Q64 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Search Complexity

**Space** complexity:

- BFS → O(bᵈ) (ii)
- DFS → O(bm) (iii)
- Depth-limited search → O(bl) (iv)
- Iterative deepening → O(bd) (i)

## Q65
<div class="stem"><p>Arrange the following encoding strategies used in Genetic Algorithms (GAs) in the correct sequence starting from the initial step and ending with the final representation of solutions:</p> <p>(A) Binary Encoding</p> <p>(B) Real valued Encoding</p> <p>(C) Permutation Encoding</p> <p>(D) Gray coding</p> <p>Choose the correct answer from the options given below:</p></div>

## Q65 - Options
(A) (D), (B), (A), (C)
(B) (B), (D), (A), (C)
(C) (C), (D), (A), (B)
(D) (B), (C), (A), (D)

## Q65 - Hint
**Answer:** C  
**Topic:** Soft Computing – GA Encoding

As per the key: Permutation encoding (C) → Gray coding (D) → Binary encoding (A) → Real-valued encoding (B).

What each one is:

- **Binary** – bit strings
- **Gray** – a binary code where neighbouring values differ in one bit
- **Real-valued** – floating-point genes
- **Permutation** – orderings (e.g. TSP)

## Q66
<div class="stem"><p>Consider the relation R(P,Q,S,T,X,Y,Z,W) with the following functional dependencies. </p> <p>PQàX; PàYX; QàY; YàZW</p> <p>Consider the decomposition of the relation R into the constituent relations according to the following two decomposition schemes. </p> <p>D1:        R=[(P, Q, S, T); (P, T, X); (Q, Y); (Y, Z, W)]</p> <p>D2:        R=[(P, Q, S); (T, X); (Q, Y), (Y, Z, W)]</p> <p>Which one of the following options is correct?</p></div>

## Q66 - Options
(A) D1 is a lossless decomposition, but D2 is a lossy decomposition
(B) D1 is a lossy decomposition, but D2 is a lossless decomposition
(C) Both D1 and D2 are lossless decompositions
(D) Both D1 and D2 are lossy decompositions

## Q66 - Hint
**Answer:** A  
**Topic:** DBMS – Lossless Decomposition

**D1:** (P,Q,S,T), (P,T,X), (Q,Y), (Y,Z,W).

- (PQST) ⋈ (PTX) on PT: P → X makes PT a key of (PTX) ✔
- ⋈ (QY) on Q: Q → Y ✔
- ⋈ (YZW) on Y: Y → ZW ✔

→ all of R recovered → **lossless**.

**D2:** (P,Q,S), (T,X), (Q,Y), (Y,Z,W) – (T, X) shares **no attribute** with the rest → a Cartesian product → **lossy**.

## Q67
<div class="stem"><p>Consider the following statements?</p> <p>S1: Dijkstra's Shortest path algorithm uses greedy design.</p> <p>S2: Floyd Warshall Algorithm to compute all shortest paths uses Dynamic Programming.</p> <p>S3: Backtracking traversal to a graph uses Depth First Search.</p> <p>Which of the following is correct?</p></div>

## Q67 - Options
(A) S1 and S2
(B) S1 and S2
(C) S2 and S3
(D) All S1, S2 and S3

## Q67 - Hint
**Answer:** D  
**Topic:** Algorithms – Design Paradigms

Dijkstra → greedy ✔; Floyd–Warshall → DP ✔; backtracking → DFS ✔.

## Q68
<div class="stem"><p>Consider the following control flow graph:</p> <p><img src="tests/img/t9/q68-45e8a9.png"/><br/> What will be the Cyclomatic  Complexity  and number of regions?</p></div>

## Q68 - Options
(A) 2,4
(B) 4,2
(C) 2,2
(D) 4,4

## Q68 - Hint
**Answer:** C  
**Topic:** Software Engineering – Cyclomatic Complexity

One decision node (B > C) → V(G) = 1 + 1 = **2**, and the number of regions is also **2**.

## Q69
<div class="stem"><p>If the environment is unchanged while an agent is deliberating , environment is known as________________ ?</p></div>

## Q69 - Options
(A) Dynamic
(B) Semidynamic
(C) Static
(D) Discrete

## Q69 - Hint
**Answer:** C  
**Topic:** Artificial Intelligence – Environments

If the environment doesn't change while the agent deliberates, it is **static**.

## Q70
<div class="stem"><p>Match the LIST-I with LIST-II</p> <table> <tbody> <tr> <td> <p>LIST-I</p> </td> <td> <p>LIST-II</p> </td> </tr> <tr> <td> <p>A. Breadth First Search</p> </td> <td> <p>I. LISP</p> </td> </tr> <tr> <td> <p>B. Depth First Search</p> </td> <td> <p>II. Syntax tree</p> </td> </tr> <tr> <td> <p>C. Prefix</p> </td> <td> <p>III. Stack</p> </td> </tr> <tr> <td> <p>D. Infix</p> </td> <td> <p>IV. Queue</p> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q70 - Options
(A) A-III, B-IV, C-I, D-II
(B) A-III, B-IV, C-II, D-I
(C) A-IV, B-II, C-III, D-I
(D) A-IV, B-III, C-I, D-II

## Q70 - Hint
**Answer:** D  
**Topic:** Data Structures – Concepts

BFS → **queue**; DFS → **stack**; prefix (Polish) notation → **LISP** expressions; infix → **syntax tree** (in-order traversal).

## Q71
<div class="stem"><p>Consider the two sorted  lists L1 nad L2  of m students and n students repectively.   For merging lists into a new list of size m+n, we require comparisons of</p></div>

## Q71 - Options
(A) O(m)
(B) O(n)
(C) O(m+n)
(D) O(logm+logn)

## Q71 - Hint
**Answer:** C  
**Topic:** Algorithms – Merging

Merging two sorted lists of sizes m and n takes at most **m + n − 1** comparisons → **O(m + n)**.

## Q72
<div class="stem"><p>Match the following :</p> <p><img src="tests/img/t9/q72-729c4e.png"/></p></div>

## Q72 - Options
(A) P-3, Q-4, R-2,S-1
(B) P-3, Q-4, R-1, S-2
(C) P-2, Q-1, R-4, S-3
(D) P-4, Q-3, R-1 ,S-2

## Q72 - Hint
**Answer:** B  
**Topic:** Software Engineering – Modularity (Meyer)

- Decomposability → top-down decomposition, level by level (3)
- Composability → modules freely combined into new systems (4)
- Continuity → a small spec change affects few modules (1)
- Protection → an abnormal condition affects few modules (2)

## Q73
<div class="stem"><p>A neuron with 3 inputs has the weight vector [0.4 0.1 0.4]T and a bias θ = 0. If the input vector is X = [0.1 0.4 0.1]   then the total input to the neuron is:</p></div>

## Q73 - Options
(A) 0.12
(B) 1.00
(C) 0.20
(D) 0.16

## Q73 - Hint
**Answer:** A  
**Topic:** Machine Learning – Neuron Input

Net input = 0.4×0.1 + 0.1×0.4 + 0.4×0.1 = 0.04 + 0.04 + 0.04 = **0.12** (bias 0).

## Q74
<div class="stem"><p>Match the LIST-I with LIST-II</p> <table> <tbody> <tr> <td> <p>LIST-I</p> <p>(Software Risk)</p> </td> <td> <p>LIST-II</p> <p>(Uses)</p> </td> </tr> <tr> <td> <p>A. Predictable Risk</p> </td> <td> <p>I. Strategic Risk</p> </td> </tr> <tr> <td> <p>B. Business Risk</p> </td> <td> <p>II. Staffing and Organization</p> </td> </tr> <tr> <td> <p>C. Project Risk</p> </td> <td> <p>III. Implementation</p> </td> </tr> <tr> <td> <p>D. Past Project</p> </td> <td> <p>IV. Past Project Experience</p> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q74 - Options
(A) A-IV, B-III, C-I, D-II
(B) A-III, B-II, C-I, D-IV
(C) A-I, B-IV, C-III, D-II
(D) A-IV, B-I, C-II, D-III

## Q74 - Hint
**Answer:** D  
**Topic:** Software Engineering – Risk

As per the key: predictable risks → extrapolated from **past project experience** (IV); business risk → **strategic** (I); project risk → **staffing and organisation** (II); and "past project" → **implementation** (III).

## Q75
<div class="stem"><p>If every requirement can be checked by a cost effective process, then SRS is called</p></div>

## Q75 - Options
(A) Verifiable
(B) Traceable
(C) Modifiable
(D) Complete

## Q75 - Hint
**Answer:** A  
**Topic:** Software Engineering – SRS

**Verifiable**: every requirement can be checked by a cost-effective process.

## Q76
<div class="stem"><p>The message 11001001  is to be transmitted using the CRC with dividend 1001 to protect it from errors. The message that should be transmitted is:</p></div>

## Q76 - Options
(A) M′=11001001011
(B) M′=11001001111
(C) M′=11101001011
(D) M′=11011001011

## Q76 - Hint
**Answer:** A  
**Topic:** Computer Networks – CRC

**Step 1:** Divisor 1001 has degree 3 → append **3 zeros**: 11001001 000.  
**Step 2:** Divide (mod-2) by 1001 → remainder **011**.  
**Step 3:** Transmit the message plus the remainder: **11001001 011**.

## Q77
<div class="stem"><p>Which of the following combination is correct ?</p> <p>I.XP – Planning - tests are derived from user stories.</p> <p>II.XP – Design - suggests the creation of “spike solutions”.</p> <p>III.XP – Coding - Encourages “pair programming”.</p> <p>IV.XP – Testing - begins with the creation of a set of stories.</p></div>

## Q77 - Options
(A) I and II
(B) II and III
(C) III and IV
(D) All I ,II ,III and IV

## Q77 - Hint
**Answer:** B  
**Topic:** Software Engineering – Extreme Programming

- I ✘ – XP **planning** begins with creating user stories (I and IV swap planning and testing).
- **II ✔** – XP design uses **spike solutions** (quick prototypes for risky parts).
- **III ✔** – XP coding encourages **pair programming**.
- IV ✘ – XP testing is built on unit tests written before coding (acceptance tests come from stories).

## Q78
<div class="stem"><p>Consider following conditional statements if (m==20-10 || n &gt; 10). The order of execution of the following operations is</p> <p>A.==</p> <p>B. –</p> <p>C. ||</p> <p>D. &gt;</p> <p>Choose the correct answer from the options given below:</p></div>

## Q78 - Options
(A) D, B, A, C
(B) B. D, C, A
(C) B, D, A, C
(D) A, B, D, C

## Q78 - Hint
**Answer:** C  
**Topic:** Programming in C – Operator Precedence

In `m == 20 - 10 || n > 10`:

1. `-` (additive) → 20 − 10 (B)
2. `>` (relational) → n > 10 (D)
3. `==` (equality) → m == 10 (A)
4. `||` (logical OR) (C)

(Relational operators bind tighter than equality.)

## Q79
<div class="stem"><p>Consider the following two sentences :</p> <p>(a) The planning graph data structure can be used to give a better heuristic for a planning problem.</p> <p>(b) Dropping negative effects from every action schema in a planning problem results in a relaxed problem.</p> <p>Which of the following is correct with respect to the above sentences ?</p></div>

## Q79 - Options
(A) Both sentence (a) and sentence (b) are false.
(B) Both sentence (a) and sentence (b) are true.
(C) Sentence (a) is true but sentence (b) is false.
(D) Sentence (a) is false but sentence (b) is true.

## Q79 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Planning

Both true: planning graphs give good heuristics, and dropping negative effects gives a relaxed problem.

## Q80
<div class="stem"><p>Consider the following:</p> <p><img src="tests/img/t9/q80-93b177.png"/></p> <p>Which of the following is correct matching?</p></div>

## Q80 - Options
(A) (A)-(III), (B)-(II), (C)-(IV), (D)-(I)
(B) (A)-(II), (B)-(III), (C)-(IV), (D)-(I)
(C) (A)-(III), (B)-(II), (C)-(I), (D)-(IV)
(D) (A)-(II), (B)-(III), (C)-(I), (D)-(IV)

## Q80 - Hint
**Answer:** A  
**Topic:** Operating Systems – Concepts

Stack algorithm → **page replacement** (III); elevator algorithm (SCAN) → **disk scheduling** (II); priority → **CPU scheduling** (IV); Havender's algorithm → **deadlock** prevention (I).

## Q81
<div class="stem"><p>ALPHA Company wants to hire 25 programmers to handle system programming job and 40 programmers for application programming of these hired, ten will be expected to perform jobs of both types. How many programmers must be hired ?</p></div>

## Q81 - Options
(A) 30
(B) 40
(C) 45
(D) 55

## Q81 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Inclusion–Exclusion

|S ∪ A| = 25 + 40 − 10 = **55**.

## Q82
<div class="stem"><p>The major adverse side effects of scan conversion are ;-</p> <p>A. Staircase appearance</p> <p>B. Unequal brightness of slanted lines</p> <p>C. Picket fence problem</p> <p>D. Rasterization</p> <p>E. Pre-filtering and Post-filtering</p> <p>Choose the correct answer from the options given below:</p></div>

## Q82 - Options
(A) A &amp; B only
(B) A, B &amp; C only
(C) B, C &amp; D only
(D) C, D &amp; E only

## Q82 - Hint
**Answer:** B  
**Topic:** Computer Graphics – Aliasing

Side effects of scan conversion (aliasing): **staircase (jaggies)**, **unequal brightness** of slanted lines, and the **picket-fence** problem. Pre- and post-filtering are **remedies** (anti-aliasing), not side effects.

## Q83
<div class="stem"><p>Correctly match the following pairs and determine the answer from the code given below :</p> <p>a. Activation record   1. Linkage loader</p> <p>b. Location counter   2. Garbage collection</p> <p>c. Reference counts   3. Subroutine call</p> <p>d. Address relocation   4. Assembler</p></div>

## Q83 - Options
(A) a-3, b-4, c-2, d-1
(B) a-4, b-3, c-1, d-2
(C) a-4, b-3, c-2, d-1
(D) a-3, b-4, c-1, d-2

## Q83 - Hint
**Answer:** A  
**Topic:** System Software – Concepts

Activation record → **subroutine call** (3); location counter → **assembler** (4); reference counts → **garbage collection** (2); address relocation → **linkage loader** (1).

## Q84
<div class="stem"><p>Given below are two statements:</p> <p>Statement I: Hardwired control unit can be optimized to produce fast mode of operation.</p> <p>Statement II: Indirect addressing mode needs two memory reference to fetch the operand.</p> <p>In the light of the above statements, choose the correct answer from the options given below</p></div>

## Q84 - Options
(A) Both Statement I and Statement II are true
(B) Both Statement I and Statement II are false
(C) Statement I is correct but Statement II is false
(D) Statement I is incorrect but Statement II is true.

## Q84 - Hint
**Answer:** A  
**Topic:** Computer Organization – Control & Addressing

- I ✔ – hardwired control can be optimised for fast operation.
- II ✔ – indirect addressing needs **two** memory references: one to get the operand's address, one to get the operand.

## Q85
<div class="stem"><p>Consider a hash table of size 11 that uses open addressing with linear probing. Let h(k) = k mod 11 be the hash function used. A sequence of records with keys</p> <p>43 36 92 87 11 4 71 13 14</p> <p>is inserted into an initially empty hash table, the bins of which are indexed from zero to ten. What is the index of the bin into which the last record is inserted?</p></div>

## Q85 - Options
(A) 2
(B) 4
(C) 6
(D) 7

## Q85 - Hint
**Answer:** D  
**Topic:** Data Structures – Hashing

h(k) = k mod 11:

- 43 → 10; 36 → 3; 92 → 4
- 87 → 10 ✘ → **0**
- 11 → 0 ✘ → **1**
- 4 → 4 ✘ → **5**
- 71 → 5 ✘ → **6**
- 13 → 2
- **14 → 3 ✘, 4 ✘, 5 ✘, 6 ✘ → 7**

The last record goes into bin **7**.

## Q86
<div class="stem"><p>A Binary Search Tree (BST) stores values in the range 37 to 573. Consider the following sequence of keys.</p> <p>I.  81, 537, 102, 439, 285, 376, 305</p> <p>II. 52, 97, 121, 195, 242, 381, 472</p> <p>III. 142, 248, 520, 386, 345, 270, 307</p> <p>IV. 550, 149, 507, 395, 463, 402, 270</p> <p>Suppose the BST has been unsuccessfully searched for key 273. Which all of the above sequences list nodes in the order in which we could have encountered them in the search?</p></div>

## Q86 - Options
(A) II and III only
(B) I and III only
(C) III and IV only
(D) III only

## Q86 - Hint
**Answer:** D  
**Topic:** Data Structures – BST Search Path

Searching for 273: at each node go **left if 273 < node** and **right if 273 > node**, and keep a valid range (low, high).

- **I:** 81 R, 537 L, 102 R, 439 L, 285 → must go **L** (273 < 285), but the next node is **376 > 285** ✘
- **II:** … 381 → must go **L**, but the next node is **472 > 381** ✘
- **III:** 142 R → (142, ∞); 248 R → (248, ∞); 520 L → (248, 520); 386 L → (248, 386); 345 L → (248, 345); 270 R → (270, 345); 307 is in range ✔
- **IV:** 550 L, 149 R, 507 L, 395 L → (149, 395), but the next node is **463 > 395** ✘

Only **III**.

## Q87
<div class="stem"><p>Suppose that a group contains 7 members. Each member of the group wants to communicate secretly with the others using symmetric key cryptographic system. The communication between any two persons should not be decodable by the others in the group. The number of keys required in the system as a whole to satisfy the confidentiality requirement is</p></div>

## Q87 - Options
(A) 21
(B) 14
(C) 42
(D) 49

## Q87 - Hint
**Answer:** A  
**Topic:** Computer Networks – Symmetric Keys

One key per pair: C(7, 2) = **21**.

## Q88
<div class="stem"><p>Assume a two-level inclusive cache hierarchy, L1 and L2, where L2 is the larger of the two. Consider the following statements.</p> <p>S1: Read misses in a write through L1 cache do not result in writebacks of dirty lines to the L2</p> <p>S2: Write allocate policy must be used in conjunction with write through caches and no-write allocate policy is used with writeback caches.</p> <p>Which of the following statements is correct?</p></div>

## Q88 - Options
(A) S1 is true and S2 is false
(B) S1 is false and S2 is true
(C) S1 is true and S2 is true
(D) S1 is false and S2 is false

## Q88 - Hint
**Answer:** A  
**Topic:** Computer Organization – Cache Write Policies

- **S1 ✔** – with write-through L1, L1 never holds dirty lines, so a read miss never forces a write-back to L2.
- **S2 ✘** – the usual pairing is the **reverse**: write-allocate with **write-back**, and no-write-allocate with **write-through**. Neither pairing is mandatory.

## Q89
<div class="stem"><p>Consider the following two lists:</p> <table> <tbody> <tr> <td> <p>List I</p> </td> <td> <p>List II</p> </td> </tr> <tr> <td> <p>(A) Stack overflow</p> </td> <td> <p>(I) Software interrupt</p> </td> </tr> <tr> <td> <p>(B) Timer</p> </td> <td> <p>(II) Internal interrupt</p> </td> </tr> <tr> <td> <p>(C) Invalid opcode</p> </td> <td> <p>(III) External interrupt</p> </td> </tr> <tr> <td> <p>(D) Superior call</p> </td> <td> <p>(IV) Machine check interrupt</p> </td> </tr> </tbody> </table> <p>Which of the following is correct match?</p></div>

## Q89 - Options
(A) (A)-(I)  (B)-(II)  (C)-(III)  (D)-(IV)
(B) (A)-(II)  (B)-(III)  (C)-(I)  (D)-(IV)
(C) (A)-(I)  (B)-(II)  (C)-(IV)  (D)-(III)
(D) (A)-(II)  (B)-(III)   (C)-(IV)  (D)-(I)

## Q89 - Hint
**Answer:** D  
**Topic:** Computer Organization – Interrupts

- Stack overflow → **internal** interrupt (II)
- Timer → **external** interrupt (III)
- Invalid opcode → **machine-check** interrupt (IV) (as per the key)
- Supervisor call → **software** interrupt (I)

## Q90
<div class="stem"><p>Consider the following statements:</p> <p>(a) Fiber optic cable is much lighter than copper cable.</p> <p>(b) Fiber optic cable is not affected by power surges or electromagnetic interference.</p> <p>(c) Optical transmission is inherently bidirectional.</p> <p>Which of the statements is (are) correct?</p></div>

## Q90 - Options
(A) Only (a) and (b)
(B) Only (a) and (c)
(C) Only (b) and (c)
(D) (a), (b) and (c)

## Q90 - Hint
**Answer:** A  
**Topic:** Computer Networks – Optical Fibre

- (a) ✔ fibre is much lighter than copper.
- (b) ✔ fibre is immune to EMI and power surges.
- (c) ✘ optical transmission is inherently **unidirectional**; two-way links need two fibres (or WDM).

## Q91
<div class="stem"><p>A non-pipeline system takes 50ns to process a task. The same task can be processed in six-segment pipeline with a clock cycle of 10ns. Determine approximately the speedup ratio of the pipeline for 500 tasks.</p></div>

## Q91 - Options
(A) 6
(B) 4.95
(C) 5.7
(D) 5.5

## Q91 - Hint
**Answer:** B  
**Topic:** Computer Organization – Pipelining

- Non-pipelined: 500 × 50 = 25,000 ns
- Pipelined: (6 + 500 − 1) × 10 = 5,050 ns

Speed-up = 25,000 / 5,050 ≈ **4.95**.

## Q92
<div class="stem"><p>Consider a TCP connection with Congestion Window = 4 KB.</p> <p>The window size advertised by the receiver is Advertise Window = 6 KB.</p> <p>What should be the current window size at the sender is:</p></div>

## Q92 - Options
(A) 2KB
(B) 4KB
(C) 6KB
(D) 8KB

## Q92 - Hint
**Answer:** B  
**Topic:** Computer Networks – TCP Window

Sender window = min(congestion window, advertised window) = min(4, 6) = **4 KB**.

## Q93
<div class="stem"><p>Consider the following relational database:</p> <p>employees (eno, ename, address, basic-salary)</p> <p>projects (pno, pname, nos-of-staffs-allotted)</p> <p>working (pno, eno, pjob)</p> <p>What will be the output of the following query ?</p> <p>SELECT pname FROM projects WHERE pno IN (SELECT pno  FROM projects MINUS SELECT DISTINCT pno FROM working);</p></div>

## Q93 - Options
(A) Project name for which all employees are working.
(B) Project name for which some employee is working.
(C) Project name for which no employee is working.
(D) None of the above

## Q93 - Hint
**Answer:** C  
**Topic:** DBMS – SQL (MINUS)

(all project numbers) MINUS (project numbers that appear in working) = projects with **no** employee working on them → their names.

## Q94
<div class="stem"><p>Consider the following statements:</p> <p>S1: External entities should be identified clearly at all levels of DFDs.</p> <p>S2: The software requirement specification document consistent of all necessary requirements required for project development.</p> <p>Which of the above is not correct?</p></div>

## Q94 - Options
(A) Only S1
(B) Only S2
(C) Both S1 and S2
(D) None of the above

## Q94 - Hint
**Answer:** A  
**Topic:** Software Engineering – DFD & SRS

- **S1 ✘** – external entities are shown in the **context (level-0)** diagram; lower-level DFDs needn't repeat all of them.
- S2 ✔ – the SRS contains all the requirements.

S1 is the incorrect statement.

## Q95
<div class="stem"><p>Consider the following set of processes and the length of CPU burst time given in milliseconds:</p> <p><img src="tests/img/t9/q95-c0a846.png"/></p> <p>Assume that processes being scheduled with Round-Robin Scheduling Algorithm with time quantum 4 ms. The the waiting time for P4 is .............. ms.</p></div>

## Q95 - Options
(A) 0
(B) 4
(C) 12
(D) 6

## Q95 - Hint
**Answer:** C  
**Topic:** Operating Systems – Round Robin

Bursts: P1 = 5, P2 = 7, P3 = 6, P4 = 4; all arrive at 0; quantum = 4.

| 0–4 | 4–8 | 8–12 | 12–16 |
|---|---|---|---|
| P1 (1 left) | P2 (3 left) | P3 (2 left) | **P4 done** |

P4 has burst 4, so it finishes within its first quantum, which starts at 12.  
WT(P4) = start − arrival = 12 − 0 = **12 ms**.

## Q96
<div class="stem"><p>Which of the following is FALSE ?</p></div>

## Q96 - Options
(A) Architectural patterns describe broad-based design problems that are solved using a structural approach
(B) Data patterns describe recurring data-oriented problems and the data modeling solutions that can be used to solve them.
(C) Component patterns address a problem set that is encountered when building WebApps.
(D) Interface design patterns describe common user interface problems and their solution with a system of forces that includes the specific characteristics of end-users.

## Q96 - Hint
**Answer:** C  
**Topic:** Software Engineering – Design Patterns

(C) is false: **WebApp patterns** address WebApp problems. **Component patterns** deal with subsystems and components (design patterns in general).

## Q97
<div class="stem"><p>How many 128 × 8 RAM chips are needed to provide a memory capacity of 2048 bytes ? And how many address lines is used to access 2048 bytes of memory ?</p></div>

## Q97 - Options
(A) 11, 11
(B) 11, 16
(C) 16, 16
(D) 16, 11

## Q97 - Hint
**Answer:** D  
**Topic:** Computer Organization – Memory

Chips = 2048 / 128 = **16**; address lines = log₂2048 = **11**.

## Q98
<div class="stem"><p>Choose the correct option from below if a class is defined with no name in C++.</p></div>

## Q98 - Options
(A) Syntax error
(B) Execution error
(C) Not allowed
(D) Cannot have a constructor or destructor

## Q98 - Hint
**Answer:** D  
**Topic:** Programming in C++ – Anonymous Classes

A class with no name **can't declare a constructor or destructor**, because both must use the class name. Objects can still be declared directly after its definition.

## Q99
<div class="stem"><p>What is the function of a firewall ?</p> <p>I. To automatically handles the configuration of a wireless access point.</p> <p>II. To allow wireless devices to connect to a wired network.</p> <p>III. To monitor and control the incoming and outgoing network traffic.</p> <p>IV. To connect networks and intelligently choose the best paths between networks.</p></div>

## Q99 - Options
(A) Only I
(B) Only III
(C) I,II and IV
(D) I,III and IV

## Q99 - Hint
**Answer:** B  
**Topic:** Computer Networks – Firewall

A firewall **monitors and controls incoming and outgoing traffic** according to rules (III). The others describe a WLAN controller, an access point and a router.

## Q100
<div class="stem"><p>Consider a binary tree whose preorder traversal is KLNMPRQST and inorder traversal is NLKPRMSQT. What will be the postorder traversal ?</p></div>

## Q100 - Options
(A) KLNMPRQST
(B) NLKPRMSQT
(C) NLRPSTQMK
(D) NLRPSTQKM

## Q100 - Hint
**Answer:** C  
**Topic:** Data Structures – Tree Reconstruction

Pre: K L N M P R Q S T; In: N L K P R M S Q T.

**Step 1:** Root = K. Inorder left of K: {N, L}; right: {P, R, M, S, Q, T}.  
**Step 2 – Left:** preorder L, N → L is the root, N its left child.  
**Step 3 – Right:** preorder M P R Q S T → root M; inorder left {P, R}, right {S, Q, T}.

- {P, R}: preorder P, R → P is the root, R its right child.
- {S, Q, T}: preorder Q, S, T → Q is the root, S left, T right.

**Postorder:** N L | R P | S T Q | M | K = **NLRPSTQMK**.
