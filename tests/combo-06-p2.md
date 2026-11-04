<!-- Combo Test 6 · Paper 2 (CSA) · original question numbers kept in the source data -->

## Q1
<div class="stem"><p>Which of the following statement is correct with respect to multiprocessor system?</p></div>

## Q1 - Options
(A) In a loosely coupled multiprocessor, all the processors share a common memory module
(B) In a tightly coupled multiprocessor, memory is distributed across all the processors
(C) In loosely coupled multiprocessor system, data rate is low rather than tightly coupled multiprocessor system
(D) In a tightly coupled multiprocessor, processors communicate between each other through message passing

## Q1 - Hint
**Answer:** C  
**Topic:** Computer Organization – Multiprocessors

- **Loosely coupled:** each processor has its **own (distributed) memory** and communicates by **message passing** → lower data rate.
- **Tightly coupled:** processors **share a common memory** → high data rate.

(A), (B) and (D) swap these properties; (C) is correct.

## Q2
<div class="stem"><p>A direct mapped cache memory of size 1MB with block size 2KB has 9 bits in the tag. The size of main memory is</p></div>

## Q2 - Options
(A) 512 MB
(B) 128 MB
(C) 64 MB
(D) 32 MB

## Q2 - Hint
**Answer:** A  
**Topic:** Computer Organization – Cache Mapping

- Offset = log₂(2 KB) = **11 bits**
- Lines = 1 MB / 2 KB = 2⁹ → **9 bits**
- Tag = **9 bits**

Address = 9 + 9 + 11 = 29 bits → main memory = 2²⁹ B = **512 MB**.

## Q3
<div class="stem"><p>A digital computer has a common bus system for 8 registers 16 bits each. How many multiplexers are required to implement common bus? What size of multiplexers is required?</p></div>

## Q3 - Options
(A) 16, 16x1
(B) 16, 8x1
(C) 8, 16x1
(D) 8, 8x1

## Q3 - Hint
**Answer:** B  
**Topic:** Computer Organization – Common Bus

A common bus for **n registers of k bits** needs **k multiplexers**, each **n × 1** (one MUX per bit position, picking that bit from one of the n registers).

8 registers × 16 bits → **16 multiplexers of size 8 × 1**.

## Q4
<div class="stem"><p>The output of the below C program segment is</p> <p>for(i = 1; i &lt; 5; i++)</p> <p>{</p> <p>    if(i &lt; 4)</p> <p>    continue;</p> <p>    printf(“%d”, i);</p> <p>}</p></div>

## Q4 - Options
(A) 1 2 3 4 5
(B) 1 2 3
(C) 4
(D) 4 5

## Q4 - Hint
**Answer:** C  
**Topic:** Programming in C – Loops

i = 1, 2, 3 → `i < 4` is true → `continue` skips the printf.  
i = 4 → condition false → prints **4**. The loop stops at i = 5 (i < 5 fails).

## Q5
<div class="stem"><p>Match List I with List II</p> <p>List I                                            List II</p> <p>(A) Handshaking                       (I) I/O interface informs the CPU that device is ready for transfer</p> <p>(B) Programmed I/O                  (II) requires two control signals working in opposite directions</p> <p>(C) Interrupt-initiated I/O            (III) has local memory &amp; control large set of IO devices.</p> <p>(D) I/O processor                     (IV) require CPU to check the I/O flag &amp; perform transfer</p> <p>Choose the correct answer from the options given below.</p></div>

## Q5 - Options
(A) A-I, B-II, C-III, D-IV
(B) A-II, B-IV, C-III, D-I
(C) A-II, B-IV, C-I, D-III
(D) A-IV, B-III, C-II, D-I

## Q5 - Hint
**Answer:** C  
**Topic:** Computer Organization – I/O Techniques

- Handshaking → two control signals in opposite directions (II)
- Programmed I/O → CPU keeps checking the I/O flag (IV)
- Interrupt-initiated I/O → interface **informs** the CPU when ready (I)
- I/O processor → has local memory, controls many devices (III)

## Q6
<div class="stem"><p>Consider the following statements:</p> <p>I. In D flip flop the Q output is either SET or RESET as soon as the D input goes HIGH or LOW.</p> <p>II. Flip-flop said to be transparent when the Q output follows the input.</p> <p>III. If an active-HIGH S-R latch has a 0 on the S input and a 1 on the R input and then the R input goes to 0, the latch will be SET.</p> <p>Which of the above statements are true?</p></div>

## Q6 - Options
(A) I, II
(B) II, III
(C) I, III
(D) All of the above

## Q6 - Hint
**Answer:** A  
**Topic:** Digital Logic – Latches & Flip-flops

- **I** – (key: true) the output follows D, setting or resetting according to D (strictly, an edge-triggered D flip-flop changes only on the clock edge).
- **II ✔** – "transparent" means Q follows the input while enabled (gated D latch).
- **III ✘** – S = 0, R = 1 resets the latch; when R then goes to 0 (S = R = 0), the latch **holds** its state, so it stays **reset**, not set.

## Q7
<div class="stem"><p>Which of the folowing CFG(s) is/are in chomsky Normal form (All capital letters are variables &amp; lower case are terminals)</p> <p><img src="tests/img/t6/q7-4b79e3.png"/></p> <p>Choose the correct answer from the options given below:</p></div>

## Q7 - Options
(A) A &amp; B only
(B) B only
(C) C only
(D) B &amp; D only

## Q7 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Chomsky Normal Form

CNF rules have the form A → BC (two variables) or A → a (one terminal).

- **A ✘** – S → ABC has three variables.
- **B ✔** – X → RT | TR, T → t, R → XT | r all fit.
- **C ✘** – P → qP mixes a terminal with a variable.
- **D ✘** – N → nm has two terminals.

## Q8
<div class="stem"><p>Consider the following statements about the context free grammar</p> <p>G = {S → SS, S → ab, S → ba, S → ϵ}</p> <p>I. G is ambiguous</p> <p>II. G produces all strings with equal number of a’s and b’s</p> <p>III. G can be accepted by a deterministic PDA.</p> <p>Which combination below expresses all the true statements about G?</p></div>

## Q8 - Options
(A) I only
(B) I and III only
(C) II and III only
(D) I, II and III

## Q8 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Context-Free Grammars

G: S → SS | ab | ba | ε.

- **I ✔** – ambiguous: "abab" can split as (ab)(ab) in more than one tree, and ε-insertions add more.
- **II ✘** – "aabb" has equal a's and b's but can't be generated.
- **III ✔** – L = (ab + ba)\* is regular → a DPDA accepts it.

## Q9
<div class="stem"><p>Which of the following is correct for the destination address 4A:30:10:21:10:1A</p></div>

## Q9 - Options
(A) unicast address
(B) multicast address
(C) broadcast address
(D) unicast and broadcast address

## Q9 - Hint
**Answer:** A  
**Topic:** Computer Networks – MAC Addresses

LSB of the first byte decides the type: 4A = 0100 101**0** → LSB = 0 → **unicast**. (LSB 1 → multicast; all FF → broadcast.)

## Q10
<div class="stem"><p>In concurrency control, phantom problem may occur, when-</p></div>

## Q10 - Options
(A) records are inserted
(B) records are deleted
(C) records are modified
(D) records are indexed

## Q10 - Hint
**Answer:** A  
**Topic:** DBMS – Concurrency (Phantoms)

A **phantom** appears when transaction T1 reads rows matching a condition, and another transaction **inserts** a new matching row; T1's re-read then shows a "phantom" row. Row-level locks can't prevent it (the row didn't exist), so predicate or index-range locks are needed.

## Q11
<div class="stem">1.Which of the following statements is/are FALSE with respect to software testing ? <p>  S1 : White-box tests are based on specifications; better at telling whether program meets   specification, better at finding errors of omission.</p> <p>  S2 : Black-box tests are based on code; better for finding crashes, out of bounds errors, file not   closed errors.</p> <p>  S3 : Alpha testing is conducted at the developer’s site by a team of highly skilled testers for   software that is developed as a product to be used by many customers.</p></div>

## Q11 - Options
(A) Only S1 and S2 are FALSE.
(B) Only S1 and S3 are FALSE.
(C) Only S2 and S3 are FALSE.
(D) All of S1, S2, and S3 are FALSE.

## Q11 - Hint
**Answer:** A  
**Topic:** Software Engineering – Testing

- **S1 ✘** – white-box tests are based on the **code**, not specifications.
- **S2 ✘** – black-box tests are based on **specifications**, not code (the statements swap the two).
- **S3 ✔** – alpha testing is done at the developer's site for products meant for many customers.

## Q12
<div class="stem"><p>Given the following grammars:</p> <p>G1: S → AB|aaB A → aA | ∈ B → bB | ∈</p> <p>G2: S → A|B A → aAb | ab B → abB | ∈</p> <p>Which of the following is correct?</p></div>

## Q12 - Options
(A) G 1 is ambiguous and G 2 is unambiguous grammars
(B) G 1 is unambiguous and G 2 is ambiguous grammars
(C) both G 1 and G 2 are ambiguous grammars
(D) both G 1 and G 2 are unambiguous grammars

## Q12 - Hint
**Answer:** C  
**Topic:** Theory of Computation – Ambiguity

- **G1:** "aab" has two derivations: S → AB (A ⇒ aa, B ⇒ b) and S → aaB (B ⇒ b) → **ambiguous**.
- **G2:** "ab" has two derivations: S → A → ab and S → B → abB → ab → **ambiguous**.

## Q13
<div class="stem"><p>Consider a 5-segment pipeline with a clock cycle time 20 ns in each sub operation. Find out the approximate speed-up ratio between pipelined and non-pipelined system to execute 100 instructions. (If an average, every five cycles, a bubble due to data hazard has to be introduced in the pipeline.).</p></div>

## Q13 - Options
(A) 5
(B) 4.03
(C) 4.81
(D) 4.17

## Q13 - Hint
**Answer:** B  
**Topic:** Computer Organization – Pipelining with Stalls

**Non-pipelined:** 100 instructions × 5 stages × 20 ns = **10,000 ns**.

**Pipelined:**

- Ideal cycles = k + n − 1 = 5 + 99 = 104
- Bubbles: one every 5 cycles ≈ 100/5 = 20
- Total ≈ 124 cycles × 20 ns = **2,480 ns**

Speed-up = 10,000 / 2,480 ≈ **4.03**.

## Q14
<div class="stem"><p>Match the LIST-I with LIST-II</p> <table> <tbody> <tr> <td> <p>LIST-I</p> </td> <td> <p>LIST-II</p> </td> </tr> <tr> <td> <p>A. Project Join Normal Form</p> </td> <td> <p>I. Concurrency</p> </td> </tr> <tr> <td> <p>B. The lost update problem</p> </td> <td> <p>II. Fifth Normal Form</p> </td> </tr> <tr> <td> <p>C. Discretionary Access Control</p> </td> <td> <p>III. SQL</p> </td> </tr> <tr> <td> <p>D. Data manipulation Language</p> </td> <td> <p>IV. Security</p> </td> </tr> </tbody> </table> <p>Choose the correct answer from the options given below:</p></div>

## Q14 - Options
(A) A-II, B-I, C-IV, D-III
(B) A-I, B-II, C-IV, D-III
(C) A-I, B-II, C-III, D-IV
(D) A-IV, B-II, C-III, D-I

## Q14 - Hint
**Answer:** A  
**Topic:** DBMS – Concepts

- Project-join normal form = **5NF** (II)
- Lost update problem → **concurrency** (I)
- Discretionary access control → **security** (IV)
- DML → part of **SQL** (III)

## Q15
<div class="stem"><p>Consider the following Relationship Entity Diagram(ERD)  Which of the following possible relations will not hold if the above ERD is mapped into a relation model?</p> <p><b><img src="tests/img/t6/q15-54911f.png"/></b></p></div>

## Q15 - Options
(A) Person (NID, Name)
(B) Qualification (NID, ExamID, QualifiedDate)
(C) Exam (ExamID, NID, ExamName)
(D) Exam (ExamID, ExamName)

## Q15 - Hint
**Answer:** C  
**Topic:** DBMS – ER to Relational Mapping

Person –(M:N)– Exam through Qualification.

The mapping gives three tables:

- Person(NID, Name)
- Exam(ExamID, ExamName)
- Qualification(NID, ExamID, QualifiedDate) – the M:N relationship gets its own table with both keys

**Exam(ExamID, NID, ExamName) won't hold**: putting NID inside Exam only works for 1:N, and with M:N an exam would need many NIDs.

## Q16
<div class="stem"><p>To obtain a string of n Terminals from a given Chomsky normal form grammar, the number of productions to be used is:</p></div>

## Q16 - Options
(A) 2n - 1
(B) 2n
(C) n + 1
(D) N<sup>2</sup>

## Q16 - Hint
**Answer:** A  
**Topic:** Theory of Computation – CNF Derivations

In CNF:

- Each A → BC step **adds one variable** → to get from 1 variable (S) to n variables needs **n − 1** such steps.
- Each A → a step turns one variable into a terminal → **n** steps.

Total = (n − 1) + n = **2n − 1** productions.

## Q17
<div class="stem"><p>Let ⊕ denotes XOR operation. Let 0 and 1 denotes the binary constants and F is the Boolean expression over two variables P and Q</p> <p>F(P, Q) = ((1 ⊕ P) ⊕ (P ⊕ Q) ⊕ (P ⊕ Q) ⊕ (Q ⊕ 0))</p> <p>Which of the following is equivalent expression to F?</p></div>

## Q17 - Options
(A) P  ⊕ Q
(B) P + Q
(C) (P + Q)’
(D) (P  ⊕ Q)’

## Q17 - Hint
**Answer:** D  
**Topic:** Digital Logic – XOR Algebra

(P ⊕ Q) ⊕ (P ⊕ Q) = 0, so F = (1 ⊕ P) ⊕ (Q ⊕ 0) = P' ⊕ Q = 1 ⊕ P ⊕ Q = **(P ⊕ Q)'**.

## Q18
<div class="stem"><p>What is the correct sequence of steps used by knowledge base designing?</p> <p>A. Ask questions about the intended interpretation.</p> <p>B. Chose task domain or world to represent.</p> <p>C. Select atoms to represent propositions of Interest.</p> <p>D. Tells the system propositions that are true in the intended interpretation/axiomatizing the domain.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q18 - Options
(A) A, B, C, D
(B) B, C, D, A
(C) C, D, A, B
(D) D. A, B, C

## Q18 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Knowledge Engineering

Knowledge-base design steps:

1. Choose the task domain or world to represent (B)
2. Select atoms (symbols) for the propositions of interest (C)
3. Tell the system the true propositions, i.e. axiomatise the domain (D)
4. Ask questions about the intended interpretation (A)

## Q19
<div class="stem"><p>Consider the following well-formed formulae:  Which of the above are equivalent?</p> <p>I. ¬∀x(P(x))<br/> II. ¬∃x(P(x)) <br/> III. ¬∃x(¬P(x)) <br/> IV. ∃x(¬P(x)) </p></div>

## Q19 - Options
(A) I and III
(B) I and IV
(C) II and III
(D) II and IV

## Q19 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Quantifiers

Negating a quantifier flips it and moves the negation inside:

- I. ¬∀x P(x) ≡ **∃x ¬P(x)** = IV ✔
- II. ¬∃x P(x) ≡ ∀x ¬P(x)
- III. ¬∃x ¬P(x) ≡ ∀x P(x)

I and IV are equivalent.

## Q20
<div class="stem"><p>In E-R model, Y is the dominant entity and X is subordinate entity</p></div>

## Q20 - Options
(A) If X is deleted, then Y is also deleted
(B) If Y is deleted, then X is also deleted
(C) If Y is deleted, then X is not deleted
(D) None of the above

## Q20 - Hint
**Answer:** B  
**Topic:** DBMS – ER Model

A **subordinate (weak)** entity X depends on the **dominant (owner)** entity Y for its existence. If Y is deleted, X must also be deleted. Deleting X doesn't affect Y.

## Q21
<div class="stem"><p>The mathematical notation to describe logical entailment of a scentence "a entails another sentence ẞ" is</p></div>

## Q21 - Options
(A) α ⊨ β  
(B) α⊆β  
(C) β⊨α  
(D) β⊆α  

## Q21 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Logic

"α entails β" is written **α ⊨ β**: in every model where α is true, β is also true. (⊢ means derivable by proof.)

## Q22
<div class="stem"><p>Let L = {w = (0+1)* | w has even number of 1's}, i.e. L is the set of all bit strings with even number of 1's. Which one of the regular expression below represents L ?</p></div>

## Q22 - Options
(A) (0*10*1)*
(B) 0*(10*10*)*
(C) 0*(10*1*)*0*
(D) 0*1(10*1)10*

## Q22 - Hint
**Answer:** B  
**Topic:** Theory of Computation – Regular Expressions

L = strings with an **even number of 1s**.

**0\*(10\*10\*)\*:** any leading 0s, then blocks that each contain **exactly two 1s** (with 0s anywhere between and after) ✔

- (A) (0\*10\*1)\* can't end with 0 (e.g. "110" is in L but rejected) ✘
- (C) 0\*(10\*1\*)\*0\* accepts "1" (one 1) ✘
- (D) requires specific 1s ✘

## Q23
<div class="stem"><p>Which of the following are external qualities of a software product?</p></div>

## Q23 - Options
(A) Maintainability, reusability, portability, efficiency, correctness.
(B) Correctness, reliability, robustness, efficiency, usability.
(C) Portability, interoperability, maintainability, reusability.
(D) Robustness, efficiency, reliability, maintainability, reusability

## Q23 - Hint
**Answer:** B  
**Topic:** Software Engineering – Quality

**External** (user-visible) qualities: **correctness, reliability, robustness, efficiency, usability**. Maintainability, reusability, portability and interoperability are internal (developer-facing).

## Q24
<div class="stem"><p>An Assertion is a predicate expressing a condition we wish database to always satisfy. The correct syntax for Assertion is :</p></div>

## Q24 - Options
(A) CREATE ASSERTION ‘ASSERTION Name’ CHECK ‘Predicate’
(B) CREATE ASSERTION ‘ASSERTION Name’
(C) CREATE ASSERTION, CHECK Predicate
(D) SELECT ASSERTION

## Q24 - Hint
**Answer:** A  
**Topic:** DBMS – SQL Assertions

Syntax: **CREATE ASSERTION** name **CHECK** (predicate);  
e.g. `CREATE ASSERTION salary_ok CHECK (NOT EXISTS (SELECT * FROM emp WHERE salary < 0));`

## Q25
<div class="stem"><p>Identify the correct statements from the following regarding spiral model.</p> <p>A. Spiral model is an incremental process model.</p> <p>B. Spiral model is a risk - driven process mode.</p> <p>C. Spiral model is an acyclic balancing approach.</p> <p>D. Spiral model involves a set of anchor point milestone.</p> <p>Choose the correct answer from the options given below:</p> <ul> </ul></div>

## Q25 - Options
(A) A &amp; B Only<br> <ul> </ul>
(B) B &amp; C Only<br> <ul> </ul>
(C) A &amp; D Only<br> <ul> </ul>
(D) B &amp; D Only<br> <ul> </ul>

## Q25 - Hint
**Answer:** D  
**Topic:** Software Engineering – Spiral Model

- **B ✔** – the spiral model is **risk-driven** (each loop does risk analysis).
- **D ✔** – it uses **anchor-point milestones** (LCO, LCA, IOC) to keep stakeholders committed.
- C ✘ – it is a **cyclic** approach, not acyclic.
- A – it is usually classified as an **evolutionary** model (it delivers increments, but the key doesn't count this).

## Q26
<div class="stem"><p>Which of the following statements is/are True regarding some advantages that an object-oriented DBMS (OODBMS) offers over a relational database ?</p> <p>I. An OODBMS avoids the “impedance mismatch” problem.</p> <p>II. An OODBMS avoids the “phantom” problem.</p> <p>III. An OODBMS provides higher performance concurrency control than most relational databases.</p> <p>IV. An OODBMS provides faster access to individual data objects once they have been read from disk.</p></div>

## Q26 - Options
(A) II and III only
(B) I and IV only
(C) I, II, and III only
(D) I, III and IV only

## Q26 - Hint
**Answer:** B  
**Topic:** DBMS – OODBMS

- **I ✔** – OODBMS stores objects directly, so no **impedance mismatch** between the program's objects and the DB's tables.
- **II ✘** – phantoms are a concurrency issue that can occur in any DBMS.
- **III ✘** – no general concurrency-performance advantage.
- **IV ✔** – once loaded, objects are reached by following pointers (swizzling), which is faster than joins.

## Q27
<div class="stem"><p>Consider the following tables (relations):</p> <p><img src="tests/img/t6/q27-e0b140.png"/></p> <p>Primary keys in the tables are shown using underline. Now, consider the following query:</p> <p>SELECT S.Name, Sum (P.Marks)</p> <p>FROM Students S, Performance P</p> <p>WHERE S.Roll-No = P.Roll-No</p> <p>GROUP BY S.Name</p> <p>The number of rows returned by the above query is</p></div>

## Q27 - Options
(A) 0 
(B) 1
(C) 2 
(D) 3

## Q27 - Hint
**Answer:** C  
**Topic:** DBMS – SQL (GROUP BY)

After the join, 3 students appear, but two of them are named **Ramesh**. GROUP BY **Name** puts both Ramesh students in one group → groups Ramesh and Mukesh → **2 rows**.

## Q28
<div class="stem"><p>Let the representation of a number in base 3 be 210. What is the hexadecimal representation of the number?</p></div>

## Q28 - Options
(A) 15
(B) 21
(C) D2
(D) 528

## Q28 - Hint
**Answer:** A  
**Topic:** Digital Logic – Number Systems

(210)₃ = 2 × 9 + 1 × 3 + 0 = **21** → 21 = 1 × 16 + 5 → **(15)₁₆**.

## Q29
<div class="stem"><p>Given that</p> <p>B(a) means “a is a bear”</p> <p>F(a) means “a is a fish” and</p> <p>E(a, b) means “a eats b”</p> <p>Then what is the best meaning of  ∀x[F(x) ⇒ ∀y(E(y, x) ⇒ B(y))]</p></div>

## Q29 - Options
(A) Every fish is eaten by some bear
(B) Bears eat only fish
(C) Every bear eats fish
(D) Only bears eat fish

## Q29 - Hint
**Answer:** D  
**Topic:** Discrete Mathematics – Predicate Logic

∀x [ F(x) ⇒ ∀y ( E(y, x) ⇒ B(y) ) ]

Read it: "for every fish x, **anyone** y who eats x must be a bear" → **only bears eat fish**.

- (A) would need ∃y (some bear eats every fish).
- (B) "bears eat only fish" would restrict what bears eat.

## Q30
<div class="stem"><p>Let R (A, B, C, D) be a relational schema with the following functional dependencies:</p> <p>A → B, B → C,</p> <p>C → D and D → B.</p> <p>The decomposition of R into  (A, B), (B, C), (B, D)</p></div>

## Q30 - Options
(A) gives a lossless join, and is dependency preserving
(B) gives a lossless join, but is not dependency preserving
(C) does not give a lossless join, but is dependency preserving
(D) does not give a lossless join and is not dependency preserving

## Q30 - Hint
**Answer:** A  
**Topic:** DBMS – Decomposition

FDs: A → B, B → C, C → D, D → B. Decompose into (AB), (BC), (BD).

**Lossless?** Join (BC) and (BD) on B: B⁺ = BCD, so B is a key of both → lossless. Then join with (AB) on B: B is a key of the BCD part → lossless ✔

**Dependency preserving?**

- A → B is in (AB); B → C is in (BC); D → B is in (BD).
- C → D: in (BC), C → B holds (C → D → B); in (BD), B → D holds (B → C → D). So C → B → D can be derived from the projections ✔

Lossless and dependency preserving.

## Q31
<div class="stem"><p>Consider a 5-stage pipelined processor with Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Register Writeback (WB) stages. Which of the following statements about forwarding is FALSE?</p></div>

## Q31 - Options
(A) In a pipelined execution, forwarding means the result from a source stage of an earlier instruction is passed on to the destination stage of a later instruction
(B) In forwarding, data from the output of the MEM stage can be passed on to the input of the EX stage of the next instruction
(C) Forwarding cannot prevent all pipeline stalls
(D) Forwarding does not require any extra hardware to retrieve the data from the pipeline stages

## Q31 - Hint
**Answer:** D  
**Topic:** Computer Organization – Pipelining

- (A) ✔ – forwarding passes a result from a later stage of an earlier instruction to an earlier stage of a later one.
- (B) ✔ – MEM output → EX input is a standard forwarding path.
- (C) ✔ – a load-use hazard still needs a stall.
- **(D) ✘** – forwarding **needs extra hardware**: bypass paths, multiplexers and hazard-detection logic.

## Q32
<div class="stem"><p>Consider the following statements about the routing protocols, Routing Information Protocol (RIP) and Open Shortest Path First (OSPF) in an IPv4 network.</p> <p>I: RIP uses distance vector routing</p> <p>II: RIP packets are sent using UDP</p> <p>III: OSPF packets are sent using TCP</p> <p>IV: OSPF operation is based on link-state routing</p> <p>Which of the statements above are CORRECT?</p></div>

## Q32 - Options
(A) I and IV only
(B) I, II and III only
(C) I, II and IV only
(D) II, III and IV only

## Q32 - Hint
**Answer:** C  
**Topic:** Computer Networks – Routing Protocols

- **I ✔** – RIP is distance-vector.
- **II ✔** – RIP runs over **UDP** (port 520).
- **III ✘** – OSPF runs **directly over IP** (protocol 89), not TCP.
- **IV ✔** – OSPF is link-state.

## Q33
<div class="stem"><p>Find the normalization transformation that maps a window whose lower left corner is at (1, 1) and upper right corner is at (3, 5) onto a viewport that is the entire normalized device screen.</p></div>

## Q33 - Options
(A) (12 | 0 | −12 | 0 | 14 | −14 | 0 | 0 | 1 | )
(B) (12 | 0 | 12 | 0 | −14 | 14 | 1 | 1 | 1 | )
(C) (12 | 0 | −12 | 0 | 14 | 14 | 1 | 0 | 0 | )
(D) (12 | 0 | 12 | 0 | 14 | −14 | 1 | 0 | 0 | )

## Q33 - Hint
**Answer:** A  
**Topic:** Computer Graphics – Window-to-Viewport

Map the window [1, 3] × [1, 5] to [0, 1] × [0, 1].

- **x:** sx = (1 − 0)/(3 − 1) = **1/2**; x' = (x − 1)/2 → tx = **−1/2**
- **y:** sy = 1/(5 − 1) = **1/4**; y' = (y − 1)/4 → ty = **−1/4**

N = [[1/2, 0, −1/2], [0, 1/4, −1/4], [0, 0, 1]].

> **⚠ Note:** The source lost the fraction bars, so "12" means 1/2 and "14" means 1/4 in the options. Option (A) is the matrix above.

## Q34
<div class="stem"><p>Let WB and WT be two set associative cache organizations that use LRU algorithm for cache block replacement. WB is a write back cache and WT is a write through cache. Which of the following statements is TRUE?</p></div>

## Q34 - Options
(A) Each cache block in WB and WT has a dirty bit.
(B) Every write hit in WB leads to a data transfer from cache to main memory.
(C) Eviction of a block from WT will not lead to data transfer from cache to main memory.
(D) A read miss in WB will never lead to eviction of a dirty block from WB.

## Q34 - Hint
**Answer:** C  
**Topic:** Computer Organization – Cache Write Policies

- (A) ✘ – only **write-back** caches need a dirty bit.
- (B) ✘ – a write-back write hit updates only the cache.
- **(C) ✔** – write-through memory is always up to date, so evicting a block needs **no write-back**.
- (D) ✘ – a read miss in WB **can** evict a dirty block, which must then be written back.

## Q35
<div class="stem"><p>Which one of the following graphs is NOT planar?  </p> <p><b><img src="tests/img/t6/q35-b5c128.png"/></b></p></div>

## Q35 - Options
(A) G1
(B) G2
(C) G3
(D) G4

## Q35 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Planar Graphs

**G1** is K₃,₃ drawn as a hexagon with long chords: 6 vertices split into two groups of 3, each vertex joined to all 3 in the other group. **K₃,₃ is non-planar** (Kuratowski).

G2, G3 and G4 can all be redrawn without crossings.

## Q36
<div class="stem"><p>More than one word is put in one cache block to</p></div>

## Q36 - Options
(A) exploit the temporal locality of reference in a program
(B) exploit the spatial locality of reference in a program
(C) reduce the miss penalty
(D) none of the above

## Q36 - Hint
**Answer:** B  
**Topic:** Computer Organization – Cache Design

Putting several words in one block means fetching **neighbouring** addresses together → exploits **spatial locality** (nearby data is likely to be used soon). Temporal locality (the same data reused) is exploited by keeping blocks in the cache.

## Q37
<div class="stem"><p>Consider the following English sentence:</p> <p>“Agra and Gwalior are both in India”.</p> <p>A student has written a logical sentence for the above English sentence in First-Order Logic using predicate In(x, y), which means x is in y, as follows:</p> <p>In(Agra, India) V In(Gwalior, India)</p> <p>Which one of the following is correct with respect to the above logical sentence?</p></div>

## Q37 - Options
(A) It is syntactically valid but does not express the meaning of the English sentence.
(B) It is syntactically valid and expresses the meaning of the English sentence also.
(C) It is syntactically invalid but expresses the meaning of the English sentence.
(D) It is syntactically invalid and does not express the meaning of the English sentence.

## Q37 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – First-Order Logic

"Both in India" needs **∧**. The ∨ version is well-formed (**syntactically valid**) but only says at least one is in India → **does not express** the meaning.

## Q38
<div class="stem"><p>An aid to determine the deadlock occurrence is-</p></div>

## Q38 - Options
(A) resource allocation graph
(B) starvation graph
(C) inversion graph
(D) none of the above

## Q38 - Hint
**Answer:** A  
**Topic:** Operating Systems – Deadlock

The **resource allocation graph** (processes, resources, request and assignment edges) is the tool for detecting deadlock. A cycle with single-instance resources means deadlock.

## Q39
<div class="stem"><p>A company needs to develop digital signal processing software for one of its newest inventions. The software is expected to have 20000 lines of code. The company needs to determine the effort in person-months needed to develop this software using the basic COCOMO model. The multiplicative factor for this model is given as 2.2 for the software development on embedded systems, while the exponentiation factor is given as 1.50. What is the estimated effort in person-months?</p></div>

## Q39 - Options
(A) 196.77
(B) 206.56
(C) 199.56
(D) 210.68

## Q39 - Hint
**Answer:** A  
**Topic:** Software Engineering – COCOMO

Effort = a × (KLOC)ᵇ = 2.2 × (20)^1.5.

**Step 1:** 20^1.5 = 20 × √20 = 20 × 4.472 = 89.44.  
**Step 2:** 2.2 × 89.44 ≈ **196.77 person-months**.

## Q40
<div class="stem"><p>If there are n devices (nodes) in a network, what is the number of cable links required for a fully connected mesh and a star topology respectively</p></div>

## Q40 - Options
(A) (n −1) / 2, n-1
(B) n, n −1
(C) n −1, n
(D) n −1, n(n −1) / 2

## Q40 - Hint
**Answer:** A  
**Topic:** Computer Networks – Topologies

- **Full mesh:** every pair is linked → **n(n − 1)/2** links.
- **Star:** every device links to the central hub → **n** links (n − 1 if the hub is counted as one of the n devices).

> **⚠ Note:** The option text lost the leading "n": option (A) should read "n(n−1)/2, n−1". That is the key's answer, which counts the hub as one of the n nodes.

## Q41
<div class="stem"><p>Which one of the following statements is FALSE?</p></div>

## Q41 - Options
(A) The TLB performs an associative search in parallel on all its valid entries using page number of incoming virtual address.
(B) If the virtual address of a word given by CPU has a TLB hit, but the subsequent search for the word results in a cache miss, then the word will always be present in the main memory.
(C) The memory access time using a given inverted page table is always same for all incoming virtual addresses.
(D) In a system that uses hashed page tables, if two distinct virtual addresses V1 and V2 map to the same value while hashing, then the memory access time of these addresses will not be the same.

## Q41 - Hint
**Answer:** C  
**Topic:** Operating Systems – Memory Management

- (A) ✔ – the TLB compares the page number with all entries in parallel.
- (B) ✔ – a TLB hit means the page is in memory (frame known), so after a cache miss the word is surely in main memory.
- **(C) ✘** – an inverted page table must be **searched** (or hashed with chains), so the access time **varies** between addresses.
- (D) ✔ – two addresses that hash to the same bucket go through the chain, so their access times differ.

## Q42
<div class="stem"><p>Which among the following statement(s) is(are) FALSE?</p> A. Greedy best-first search is not optimal but is often efficient. B. A* is complete and optimal provided h(n) is admissible or consistent. C. Recursive best-first search is efficient in terms of time complexity but poor in terms of space complexity. D.   h(n) = 0 is an admissible heuristic for the 8-puzzle.</div>

## Q42 - Options
(A) A and D only
(B) A only
(C) C and D only
(D) C only

## Q42 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Informed Search

- A ✔ – greedy best-first is not optimal but is often fast.
- B ✔ – A\* is complete and optimal with an admissible (tree search) or consistent (graph search) heuristic.
- **C ✘** – RBFS is **space-efficient** (linear space) but can be **time-inefficient** because it regenerates nodes. The statement reverses this.
- D ✔ – h = 0 never overestimates, so it is admissible (A\* then becomes uniform-cost search).

## Q43
<div class="stem"><p>Which of the following statement(s) is/are true with respect to software architecture ?</p> <p>S1 : Coupling is a measure of how well the things grouped together in a module belong together logically. S2 : Cohesion is a measure of the degree of interaction between software modules.</p> <p>S3 : If coupling is low and cohesion is high then it is easier to change one module without affecting others.</p></div>

## Q43 - Options
(A) Only S1 and S2
(B) Only S3
(C) All of S1, S2 and S3
(D) Only S1

## Q43 - Hint
**Answer:** B  
**Topic:** Software Engineering – Coupling & Cohesion

- **S1 ✘** – that's the definition of **cohesion**.
- **S2 ✘** – that's the definition of **coupling**.
- **S3 ✔** – low coupling and high cohesion make modules independent and easy to change.

## Q44
<div class="stem"><p>Assertion A: A Raster scan device is a CRT graphic device and can use a television monitor for display</p> <p>Reason R: In Raster scan display the picture is composed of a series of dots. These dots are traced out as a series of horizontal lines. Television works in a similar fashion</p> <p>In the light of the above statements, choose the correct answer from the options given below.</p></div>

## Q44 - Options
(A) Both A and R are true and R is the correct explanation of A
(B) Both A and R are true but R is not the correct explanation of A
(C) A is true but R is false
(D) A is false but R is true

## Q44 - Hint
**Answer:** A  
**Topic:** Computer Graphics – Raster Scan

- **A ✔** – a raster-scan display is a CRT device and can use a TV monitor.
- **R ✔** – the image is built from dots traced in horizontal scan lines, exactly like television.

R explains A.

## Q45
<div class="stem"><p>Identify the correct order of the following five levels of Capability Maturity Model (from lower to higher) to measure the maturity of an organization's software process.</p> <p>A. Defined</p> <p>B. Optimizing</p> <p>C. Initial</p> <p>D. Managed</p> <p>E. Repeatable</p> <p>Choose the correct answer from the options given below</p></div>

## Q45 - Options
(A) C, A, E, D, B
(B) C, B, D, E, A
(C) C, E, A, B, D
(D) C, E, A, D, B

## Q45 - Hint
**Answer:** D  
**Topic:** Software Engineering – CMM

CMM levels: **Initial (C) → Repeatable (E) → Defined (A) → Managed (D) → Optimizing (B)**.

## Q46
<div class="stem"><p>The hamming distance between the octets of 0xAA and 0x55 is</p></div>

## Q46 - Options
(A) 7
(B) 5
(C) 8
(D) 6

## Q46 - Hint
**Answer:** C  
**Topic:** Computer Networks – Hamming Distance

- 0xAA = 1010 1010
- 0x55 = 0101 0101
- XOR = 1111 1111 → **all 8 bits differ** → distance = **8**.

## Q47
<div class="stem"><p>Consider the table R with attributes A, B and C. The functional dependencies that hold on R are : A → B, C → AB. Which of the following statements is/are True?</p> <p>I. The decomposition of R into R1(C, A) and R2(A, B) is lossless.</p> <p>II. The decomposition of R into R1(A, B) and R2(B, C) is lossy.</p></div>

## Q47 - Options
(A) Only I
(B) Only II
(C) Both I and II
(D) Neither I nor II

## Q47 - Hint
**Answer:** A  
**Topic:** DBMS – Lossless Decomposition

FDs: A → B, C → AB.

- **I.** R1(C, A), R2(A, B): common attribute **A**; A → B, so A is a key of R2 → **lossless** ✔
- **II.** R1(A, B), R2(B, C): common attribute **B**; B determines nothing, so it is not a key of either → **lossy** ✔ (the statement "is lossy" is true)

> **⚠ Note:** Both statements are true, so the answer should be **(C) Both I and II**. The key's (A) seems to treat II as false.

## Q48
<div class="stem"><p>Suppose that in an IP-over-Ethernet network, a machine X wishes to find the MAC address of another machine Y in its subnet. Which one of the following techniques can be used for this?</p></div>

## Q48 - Options
(A) X sends an ARP request packet to the local gateway's IP address which then finds the MAC address of Y and sends to X
(B) X sends an ARP request packet with broadcast IP address in its local subnet
(C) X sends an ARP request packet to the local gateway's MAC address which then finds the MAC address of Y and sends to X
(D) X sends an ARP request packet with broadcast MAC address in its local su

## Q48 - Hint
**Answer:** D  
**Topic:** Computer Networks – ARP

X knows Y's IP address. X **broadcasts** an ARP request (destination MAC **FF:FF:FF:FF:FF:FF**) on the local subnet asking "who has IP Y?". Y replies **unicast** with its MAC. The gateway isn't involved for hosts in the same subnet.

## Q49
<div class="stem"><p>Consider a relational table R that is in 3NF, but not in BCNF. Which one of the following statements is TRUE?</p></div>

## Q49 - Options
(A) A cell in R holds a set instead of an atomic value.
(B) R has a nontrivial functional dependency X--&gt;A, where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key.
(C) R has a nontrivial functional dependency X--&gt;A, where X is not a superkey and A is a non-prime attribute and X is a proper subset of some key.
(D) R has a nontrivial functional dependency X--&gt;A, where X is not a superkey and A is a prime attribute.

## Q49 - Hint
**Answer:** D  
**Topic:** DBMS – 3NF vs BCNF

**3NF** allows X → A when either X is a superkey **or A is a prime attribute**. **BCNF** allows only "X is a superkey".

So a relation in 3NF but not BCNF must have a dependency X → A where X is **not a superkey** and A is **prime** (part of some candidate key).

(B) and (C) describe 3NF and 2NF violations respectively.

## Q50
<div class="stem"><p>The correct matching for the following pairs is</p> <p>(A) DMA I/O                          (1) High speed RAM</p> <p>(B) Cache                             (2) Disk</p> <p>(C) Interrupt I/O                     (3) Printer</p> <p>(D) Condition Code Register   (4) ALU</p></div>

## Q50 - Options
(A) A – 4 B – 3 C – 1 D – 2
(B) A – 2 B – 1 C – 3 D – 4
(C) A – 4 B – 3 C – 2 D – 1
(D) A – 2 B – 3 C – 4 D – 1

## Q50 - Hint
**Answer:** B  
**Topic:** Computer Organization – I/O & Registers

DMA → disk (2); cache → high-speed RAM (1); interrupt I/O → printer (3); condition-code register → ALU (4).

## Q51
<div class="stem"><p>Consider the graph given below as :</p> <p><img src="tests/img/t6/q51-500cfe.png"/></p> <p>Which one of the following graph is isomorphic to the above graph?</p></div>

## Q51 - Options
(A) <b><em>[Figure from original not available]</em></b>
(B) <b><em>[Figure from original not available]</em></b>
(C) <b><em>[Figure from original not available]</em></b>
(D) <b><em>[Figure from original not available]</em></b>

## Q51 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Graph Isomorphism

To compare graphs, first check the **invariants**: number of vertices, number of edges, degree sequence, cycle lengths.

The given graph is **3-regular** (every vertex has degree 3). The key says (C) is the only option with every vertex of degree 3; each other option has at least one vertex whose degree differs, so it can't be isomorphic.

> **⚠ Note:** The option figures are missing from the source export. The key is (C): pick the option whose degree sequence (all 3s) and structure match the given graph.

## Q52
<div class="stem"><p>Which one of the following is the tightest upper bound that represents the time complexity of inserting an object into a binary search tree of n nodes?</p></div>

## Q52 - Options
(A) O(1)
(B) O(log n)
(C) O(n)
(D) O(n log n)

## Q52 - Hint
**Answer:** C  
**Topic:** Data Structures – BST

Inserting first searches down to a leaf. In a **skewed** BST (e.g. after inserting sorted keys) the height is n − 1, so the tightest worst-case bound is **O(n)**. (O(log n) holds only for balanced trees.)

## Q53
<div class="stem"><p>This examination paper has 100 multiple choice questions of one mark each, with each question having four choices only one of which is correct. Each incorrect answer fetches -0.25 mark. Suppose you choose all your answers randomly with uniform probability. Then the expected mark you obtain is</p></div>

## Q53 - Options
(A) 6.25
(B) 3.95
(C) 37.5
(D) 17.5

## Q53 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Expectation

Expected mark per question = P(correct) × 1 + P(wrong) × (−0.25)  
= 1/4 − (3/4)(1/4) = 0.25 − 0.1875 = **0.0625**.

For 100 questions: 100 × 0.0625 = **6.25**.

## Q54
<div class="stem"><p>In XML we can specify the frequency of an element by using the symbols:</p></div>

## Q54 - Options
(A) + * !
(B) # * !
(C) +* ?
(D) * ?

## Q54 - Hint
**Answer:** C  
**Topic:** Web Technologies – XML DTD

DTD occurrence indicators:

- **+** → one or more
- **\*** → zero or more
- **?** → zero or one

## Q55
<div class="stem"><p>Consider the following expression grammar G.</p> <p>E -&gt; E - T | T</p> <p>T -&gt; T + F | F</p> <p>F -&gt; (E) | id</p> <p>Which of the following grammars are not left recursive, but equivalent to G.</p></div>

## Q55 - Options
(A) E -&gt; E - T | T<br> T -&gt; T + F | F<br> F -&gt; (E) | id
(B) E -&gt; TE'<br> E' -&gt; -TE' | ε<br> T -&gt; T + F | F<br> F -&gt; (E) | id
(C) E -&gt; TX<br> X -&gt; -TX | ε<br> T -&gt; FY<br> Y -&gt; +FY | ε<br> F -&gt; (E) | id
(D) E -&gt; TX | (TX)<br> X -&gt; -TX | +TX | ε<br> T -&gt; id

## Q55 - Hint
**Answer:** C  
**Topic:** Compiler Design – Left Recursion

Remove left recursion with A → Aα | β ⇒ A → βA', A' → αA' | ε:

- E → E − T | T ⇒ **E → TX, X → −TX | ε**
- T → T + F | F ⇒ **T → FY, Y → +FY | ε**
- F → (E) | id stays as it is.

(A) is the original grammar; (B) still has T → T + F (left recursive); (D) changes the language.

## Q56
<div class="stem"><p>Given below are two statements</p> <p>Statement I: Breadth-First Search is optimal when all the step costs are equal whereas uniform-cost search is optimal with any step-cost.</p> <p>Statement II: When all the step costs are same uniform-cost search expends more nodes at depth d than the Breadth-First Search.</p> <p>In light of the above statements, choose the correct answer from the options given below</p></div>

## Q56 - Options
(A) Both Statement I and Statement II are false
(B) Both Statement I and Statement II are true
(C) Statement I is false but Statement II is true
(D) Statement I is true but Statement II is false

## Q56 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Uninformed Search

- **I ✔** – BFS is optimal only for equal step costs; UCS is optimal for any positive costs.
- **II ✔** – with equal costs UCS tests the goal only on expansion, so it expands the whole depth-d level → more nodes than BFS.

## Q57
<div class="stem"><p>Given an expression (A+B×D)/(E-F)+G</p> <p>A. The prefix notation is +/+A×DB-EFG</p> <p>B. The prefix expression is the reverse of the postfix expression</p> <p>C. The order of operands in infix expression and postfix expression are the same.</p> <p>D. The order of operands in infix expression, prefix expression and postfix expression are the same.</p> <p>Choose the most appropriate answer from the options given below:</p></div>

## Q57 - Options
(A) A, C and D Only
(B) C and D Only
(C) A and B Only
(D) A and D Only

## Q57 - Hint
**Answer:** B  
**Topic:** Data Structures – Expression Notation

Prefix of (A + B×D)/(E − F) + G:

- A + B×D → +A×BD
- E − F → −EF
- Divide → /+A×BD−EF
- Add G → **+/+A×BD−EFG**

- **A ✘** – it writes ×DB (operands swapped).
- **B ✘** – prefix is not simply the reverse of postfix (operand order would be reversed too).
- **C ✔ / D ✔** – conversions only move **operators**; operands keep their left-to-right order in infix, prefix and postfix.

## Q58
<div class="stem"><p>If the associativity of a processor cache is doubled while keeping the capacity and block size unchanged, which one of the following is guaranteed to be NOT affected?</p></div>

## Q58 - Options
(A) Width of tag comparator
(B) Width of set index decoder
(C) Width of way selection multiplexor
(D) Width of processor to main memory data bus

## Q58 - Hint
**Answer:** D  
**Topic:** Computer Organization – Cache Associativity

Doubling associativity (same capacity and block size) **halves the number of sets**:

- set-index bits drop by 1 → index decoder changes
- tag grows by 1 bit → tag comparator changes
- ways double → way-select multiplexer changes

The **processor–memory data bus** width depends on the block/transfer size, which is unchanged → **not affected**.

## Q59
<div class="stem"><p>Consider a complete binary tree with 7 nodes. Let A denote the set of first 3 elements obtained by performing Breadth-First Search (BFS) starting from the root. Let B denote the set of first 3 elements obtained by performing Depth-First Search (DFS) starting from the root.</p> <p>The value of |A-B| is _____________</p> <ol> </ol></div>

## Q59 - Options
(A) 1<br> <ol> </ol>
(B) 2<br> <ol> </ol>
(C) 3<br> <ol> </ol>
(D) 4<br> <ol> </ol>

## Q59 - Hint
**Answer:** A  
**Topic:** Data Structures – Tree Traversals

Complete binary tree, nodes numbered level by level 1–7 (1's children 2, 3; 2's children 4, 5).

- **BFS** first 3: {1, 2, 3} = A
- **DFS** first 3: 1 → 2 → 4 → {1, 2, 4} = B

A − B = {3} → |A − B| = **1**.

## Q60
<div class="stem"><p>If the sequence of operations - push (1), push (2), pop, push (1), push (2), pop, pop, pop, push (2), pop are performed on a stack, the sequence of popped out values</p></div>

## Q60 - Options
(A) 2,2,1,1,2
(B) 2,2,1,2,2
(C) 2,1,2,2,1
(D) 2,1,2,2,2

## Q60 - Hint
**Answer:** A  
**Topic:** Data Structures – Stack

| Op | Stack | Popped |
|---|---|---|
| push 1, push 2 | 1 2 | |
| pop | 1 | **2** |
| push 1, push 2 | 1 1 2 | |
| pop | 1 1 | **2** |
| pop | 1 | **1** |
| pop | – | **1** |
| push 2, pop | – | **2** |

Sequence: 2, 2, 1, 1, 2.

## Q61
<div class="stem"><p>A TCP server application is programmed to listen on port number P on host S. A TCP client is connected to the TCP server over the network. Consider that while the TCP connection was active, the server machine S crashed and rebooted. Assume that the client does not use the TCP keepalive timer. Which of the following behaviors is/are possible?</p> <ol> <li>If the client was waiting to receive a packet, it may wait indefinitely</li> <li>The TCP server application on S can listen on P after reboot</li> <li>If the client sends a packet after the server reboot, it will receive a RST segment</li> <li>If the client sends a packet after the server reboot, it will receive a FIN segment</li> </ol></div>

## Q61 - Options
(A) A, B and C
(B) B, C and D
(C) A, B and D
(D) A, B, C and D

## Q61 - Hint
**Answer:** A  
**Topic:** Computer Networks – TCP Behaviour

- **A ✔** – without keep-alive, a client waiting to receive may wait forever (nothing tells it the server died).
- **B ✔** – after reboot the server application can listen on port P again.
- **C ✔** – the rebooted server has no record of the old connection, so a segment on it gets an **RST**.
- **D ✘** – FIN is sent only during an orderly close by a live connection, not after a crash.

## Q62
<div class="stem"><p>The asymptotic upper bound solution of the recurrence relation given by</p> <p>T(n)=2T(n2)+nlg⁡n is : </p></div>

## Q62 - Options
(A) O(n<sup>2</sup>)
(B) O(n (lg n))
(C) O(n lg( lg n))
(D) O(lg( lg n))

## Q62 - Hint
**Answer:** C  
**Topic:** Algorithms – Recurrences

If the recurrence is T(n) = 2T(n/2) + **n / lg n** (as in Q87):

- a = 2, b = 2, k = 1, p = −1 → a = bᵏ and p = −1
- Extended Master theorem → **Θ(n log log n)**

If it really were n·lg n (p = +1), the answer would be Θ(n log² n), which is not an option.

> **⚠ Note:** The source shows "n lg n" with the division sign lost. The intended term is **n / lg n**, which gives the key's answer.

## Q63
<div class="stem"><p>A hash function h defined h(key)=key mod 7, with linear probing, is used to insert the keys 44, 45, 79, 55, 91, 18, 63 into a table indexed from 0 to 6. What will be the location of key 18 ?</p></div>

## Q63 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q63 - Hint
**Answer:** C  
**Topic:** Data Structures – Hashing (Linear Probing)

h(k) = k mod 7:

- 44 → 2
- 45 → 3
- 79 → 2 (taken) → 3 (taken) → **4**
- 55 → 6
- 91 → 0
- **18 → 4 (taken) → 5**
- 63 → 0 (taken) → 1

Key 18 is at location **5**.

## Q64
<div class="stem"><p>Consider the following statements:</p> <p>  I. The smallest element in a max-heap is always at a leaf node</p> <p> II. The second largest element in a max-heap is always a child of the root node</p> <p>III. A max-heap can be constructed from a binary search tree in Θ(n) time</p> <p> IV. A binary search tree can be constructed from a max-heap in Θ(n) time</p> <p>Which of the above statements are TRUE?</p></div>

## Q64 - Options
(A) I, II and III
(B) II, III and IV
(C) I, III and IV
(D) I, II and IV

## Q64 - Hint
**Answer:** A  
**Topic:** Data Structures – Heaps

- I ✔ – the minimum of a max-heap is always at a leaf.
- II ✔ – the 2nd largest must be a child of the root.
- III ✔ – build-heap from any n elements takes Θ(n).
- IV ✘ – building a BST from a heap implies sorting → Ω(n log n).

## Q65
<div class="stem"><p>GIven below are some algorthims, and some algothim design paradigms</p> <p>(1) Dijkstra's Shortest Path                                                     (i) Divide and Conquer</p> <p>(2) Floyd-Warshall algorithm to compute all pairs shortest path  (ii) Dynamic Programming</p> <p>(3) Binary search on a sorted amay                                          (iii) Greedy design</p> <p>(4) Backtracking search on a graph                                           (iv) Depth-first search</p> <p>                                                                                              (v) Breadth-first search</p></div>

## Q65 - Options
(A) 1-i, 2-iii, 3-i, 4-v.
(B) 1-iii, 2-iii, 3-i, 4-v.
(C) 1-iii, 2-ii, 3-i, 4-iv.
(D) 1-iii, 2-ii, 3-i, 4-v.

## Q65 - Hint
**Answer:** C  
**Topic:** Algorithms – Design Paradigms

Dijkstra → greedy (iii); Floyd–Warshall → dynamic programming (ii); binary search → divide and conquer (i); backtracking on a graph → DFS (iv).

## Q66
<div class="stem"><p>A five-stage pipeline has stage delays of 150,120,150,160 and 140 nanoseconds. The registers that are used between the pipeline stages have a delay of 5 nanoseconds each. The total time to execute 100 independent instructions on this pipeline, assuming there are no pipeline stalls, is _______ nanoseconds.</p></div>

## Q66 - Options
(A) 17160
(B) 16640
(C) 17640
(D) 15000

## Q66 - Hint
**Answer:** A  
**Topic:** Computer Organization – Pipelining

**Step 1 – Cycle time** = slowest stage + register delay = 160 + 5 = **165 ns**.  
**Step 2 – Cycles** for n = 100 instructions in k = 5 stages = k + n − 1 = **104**.  
**Step 3 – Total** = 104 × 165 = **17,160 ns**.

## Q67
<div class="stem"><p>Match the 5 CMM Maturity levels/CMMI staged representations in List- I with their characterizations in List-II:</p> <p>List – I                       List - II</p> <p>(a) Initial                   (i) Processes are improved quantitatively and continually.</p> <p>(b) Repeatable         (ii) The plan for a project comes from a template for plans.</p> <p>(c) Defined               (iii) The plan uses processes that can be measured   quantitatively.</p> <p>(d) Managed            (iv) There may not exist a plan or it may be abandoned.</p> <p>(e) Optimizing           (v) There’s a plan and people stick to it.</p> <p>Code:</p> <p>(a)  (b)   (c)  (d)  (e)</p></div>

## Q67 - Options
(A) (iv)  (v)   (i)   (iii)  (ii)
(B) (i)    (ii)   (iv)  (v)  (iii)
(C) (v)   (iv)  (ii)   (iii)  (i)
(D) (iv)  (v)   (ii)   (iii)  (i)

## Q67 - Hint
**Answer:** D  
**Topic:** Software Engineering – CMM

- Initial → there may be no plan, or it's abandoned (iv)
- Repeatable → there's a plan and people stick to it (v)
- Defined → plans come from a template (ii)
- Managed → processes measured quantitatively (iii)
- Optimizing → continuous quantitative improvement (i)

## Q68
<div class="stem"><p>Consider the directed graph given below.  Which one of the following is TRUE?</p> <p><b><img src="tests/img/t6/q68-d6bd1d.png"/></b></p></div>

## Q68 - Options
(A) The graph does not have any topological ordering.
(B) Both PQRS and SRQP are topological.
(C) Both PSRQ and SPRQ are topological orderings.
(D) PSRQ is the only topological ordering.

## Q68 - Hint
**Answer:** C  
**Topic:** Algorithms – Topological Sort

Edges: P → Q, P → R, R → Q, S → R, S → Q.

- In-degree 0: **P and S** → either can come first.
- R needs P and S done; Q needs P, R and S done → R comes before Q.

Valid orders: **P S R Q** and **S P R Q**.

## Q69
<div class="stem"><p>In a binary tree with n nodes, every node has an odd number of descendants. Every node is considered to be its own descendant. What is the number of nodes in the tree that have exactly one child?</p></div>

## Q69 - Options
(A) 0
(B) 1
(C) (n-1)/2
(D) n-1

## Q69 - Hint
**Answer:** A  
**Topic:** Data Structures – Binary Trees

Let d(v) = descendants of v (including v), which must be odd.

- A leaf: d = 1 ✔ (odd).
- A node with **one** child c: d = 1 + d(c) = 1 + odd = **even** ✘ — impossible.
- A node with two children: 1 + odd + odd = odd ✔

So **no** node can have exactly one child → answer **0**.

## Q70
<div class="stem"><p>A sender S sends a message m to receiver R, which is digitally signed by S with its private key. In this scenario, one or more of the following security violations can take place.</p> <p>(I) S can launch a birthday attack to replace m with a fraudulent message.</p> <p>(II) A third party attacker can launch a birthday attack to replace m with a fraudulent message.</p> <p>(III) R can launch a birthday attack to replace m with a fraudulent message.</p> <p>Which of the following are possible security violations?</p></div>

## Q70 - Options
(A) (I) and (II) only
(B) (I) only
(C) (II) only
(D) (II) and (III) only

## Q70 - Hint
**Answer:** B  
**Topic:** Computer Networks – Digital Signatures

In a birthday attack, someone finds **two messages with the same hash** and later swaps one for the other.

- **I ✔** – the signer S can prepare such a pair, sign the harmless one, and later claim it signed the other.
- **II ✘** – a third party can't make a valid signature on its replacement without S's private key.
- **III ✘** – the receiver also lacks S's private key.

## Q71
<div class="stem"><p>Consider the following circuit. The function by the network above is</p> <p><b><img src="tests/img/t6/q71-5ea7bb.png"/></b></p></div>

## Q71 - Options
(A) (AB)'E + EF + (CD)'F
(B) (E' + ABF')(C + D + F')
(C) ((AB)' + E)(E' + F')(C + D + F')
(D) (A + B)E' + (EF)' + CDF’

## Q71 - Hint
**Answer:** B  
**Topic:** Digital Logic – Gate Networks

**Step 1 – Inputs:** NAND(A,B) = (AB)'; NOR(C,D) = (C+D)'.  
**Step 2 – AND gates:** (AB)'E, EF, F(C+D)'.  
**Step 3 – Final NOR:** f = [ (AB)'E + EF + (C+D)'F ]'

**Step 4 – De Morgan:**  
f = ((AB)'E)' · (EF)' · ((C+D)'F)'  
= (AB + E') (E' + F') (C + D + F')

**Step 5 – Simplify** the first two factors: (E' + AB)(E' + F') = E' + ABF'.

f = **(E' + ABF')(C + D + F')**.

## Q72
<div class="stem"><p>Match the following:<br/> List - I                                        List - II<br/> (a) Flood Gun          (i) An electron gun designed to flood the entire screen with electrons.<br/> (b)Collector            (ii) Partly energised by flooding gun, stores the charge  generated by the writing gun. <br/> (c)Ground               (iii) Used to discharge the collector.<br/> (d)Phosphorus         (iv) Used in memory - tube display and similar to those grains used in standard CRT.<br/> (e)Writing Gun          (v) Used in memory - tube display and basically the System same as the electron gun used in a conventional CRT.</p></div>

## Q72 - Options
(A) a-i, b-ii, c-iii, d-iv, e-v
(B) a-ii, b-iii, c-i, d-iv, e-v
(C) a-iii, b-i, c-ii, d-v, e-iv
(D) a-iv, b-v, c-i, d-ii, e-iii

## Q72 - Hint
**Answer:** A  
**Topic:** Computer Graphics – Storage Tube (DVST)

- Flood gun → floods the whole screen with electrons (i)
- Collector → partly energised by the flood gun, stores the charge from the writing gun (ii)
- Ground → discharges the collector (iii)
- Phosphor → like standard CRT grains (iv)
- Writing gun → same as a CRT electron gun (v)

## Q73
<div class="stem"><p>In heuristic search algorithms in Artificial Intelligence (AI), if a collection of admissible heuristics h 1 .......hm is available for a problem and none of them dominates any of the others, which should we choose?</p></div>

## Q73 - Options
(A) h(n)=max{h1 (n),....,h m (n)}
(B) h(n)=min{h1(n),....,hm (n)}
(C) h(n)=avg{h1 (n),....,hm (n)}
(D) h(n)=sum{h 1 (n),....,hm (n)}

## Q73 - Hint
**Answer:** A  
**Topic:** Artificial Intelligence – Heuristics

If h₁ … hₘ are all admissible and none dominates, use **h(n) = max{h₁(n), …, hₘ(n)}**: it is still admissible (each never overestimates, so the max doesn't either) and it **dominates** every individual hᵢ, so fewer nodes are expanded.

(The sum may overestimate.)

## Q74
<div class="stem"><p>( G, *) is an abelian group. Then</p></div>

## Q74 - Options
(A) x = x<sup>-1</sup>, for any x belonging to G
(B) x = x<sup>2</sup>, for any x belonging to G
(C) (x * y)<sup>2</sup> = x<sup>2</sup> * y<sup>2</sup>, for any x, y belonging to G
(D) G is of finite order

## Q74 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Group Theory

In an **abelian** group, (x\*y)² = x\*y\*x\*y = x\*x\*y\*y = x² \* y² (because x\*y = y\*x) ✔

- (A) x = x⁻¹ for all x would make the group abelian, but the converse fails.
- (B) x = x² holds only for the identity.
- (D) abelian groups can be infinite (e.g. (ℤ, +)).

## Q75
<div class="stem"><p>The complement of the Boolean expression AB ( B'C + AC ) is</p></div>

## Q75 - Options
(A) ( A' + B' ) + ( B + C' )( A' + C' )
(B) ( A' + B' ) + ( BC' + A'C' )
(C) ( A' + B' )( B + C') + ( A + C' )
(D) ( A + B )( B' + C )( A + C )

## Q75 - Hint
**Answer:** A  
**Topic:** Digital Logic – Complement

[AB(B'C + AC)]' = (AB)' + (B'C + AC)'  
= (A' + B') + (B'C)'(AC)'  
= **(A' + B') + (B + C')(A' + C')**

## Q76
<div class="stem"><p>The content of the accumulator after the execution of the following 8085 assembly language program, is:</p> <p>MVI A, 42H</p> <p>MVI B, 05H</p> <p>UGC: ADD B</p> <p>DCR B</p> <p>JNZ UGC</p> <p>ADI 25H</p> <p>HLT</p></div>

## Q76 - Options
(A) 82H
(B) 78H
(C) 76H
(D) 47H

## Q76 - Hint
**Answer:** C  
**Topic:** Computer Organization – 8085 Programming

**Step 1:** A = 42H = 66, B = 5.  
**Step 2:** The loop adds B to A while decrementing B: 66 + 5 + 4 + 3 + 2 + 1 = 81 = **51H**.  
**Step 3:** ADI 25H → 51H + 25H = **76H**.

## Q77
<div class="stem"><p>In the context of 3D Computer graphics, which of the following statements is/are correct?</p> <p>A.Under perspective projection, each set of parallel lines in the object do not stay parallel in the image (except those that are parallel to the viewplane to start with).</p> <p>B.Applying a perspective transformation in the graphics pipeline to a vertex involves dividing by its 'z' coordinate.</p> <p>C.Perspective transformation is a linear transformation.</p> <p>Choose the correct answer from the options given below:</p></div>

## Q77 - Options
(A) (A) and (B) only
(B) (A) and (C) only
(C) (B) and (C) only
(D) (A), (B) and (C)

## Q77 - Hint
**Answer:** A  
**Topic:** Computer Graphics – Perspective Projection

- **A ✔** – parallel lines converge to vanishing points (except those parallel to the view plane).
- **B ✔** – the perspective step divides by z.
- **C ✘** – dividing by z is **non-linear**.

## Q78
<div class="stem"><p>Consider the following statements</p> <ol> <li>Configuration for CPU in decreasing order of operating speeds is - Hard wired control, vertical microprogramming, horizontal microprogramming.</li> <li>Micro program is set of micro instructions that defines the individual operations in response to a machine-language instruction.</li> <li>A microprogrammed control unit facilitates easy implementation of new instruction.</li> </ol> <p>Which of the above statements are true?</p></div>

## Q78 - Options
(A) I and II
(B) I and III
(C) II and III
(D) All of the above

## Q78 - Hint
**Answer:** C  
**Topic:** Computer Organization – Control Unit

- **I ✘** – correct order of speed: hardwired > **horizontal** > vertical (horizontal microcode needs no decoding of control fields).
- **II ✔** – a microprogram is the sequence of micro-instructions that implements a machine instruction.
- **III ✔** – new instructions just need new microcode.

## Q79
<div class="stem"><p>Consider a computer with a 4-ways set-associative mapped cache of the following characteristics: a total of 1 MB of main memory, a word size of 1 byte, a block size of 128 words and a cache size of 8 KB. The number of bits in the TAG, SET and WORD fields, respectively are:</p></div>

## Q79 - Options
(A) 7, 6, 7
(B) 8, 5, 7
(C) 8, 6, 6
(D) 9, 4, 7

## Q79 - Hint
**Answer:** D  
**Topic:** Computer Organization – Cache Mapping

**Step 1:** Memory 1 MB, byte-addressable → **20-bit** address.  
**Step 2:** Word field = log₂128 = **7 bits**.  
**Step 3:** Lines = 8 KB / 128 B = 64; sets = 64 / 4 = 16 → **SET = 4 bits**.  
**Step 4:** TAG = 20 − 4 − 7 = **9 bits**.

## Q80
<div class="stem"><p>A priority queue is implemented as a max-heap. Initially, it has five elements. The level-order traversal of the heap is as follows: 20, 18, 15, 13, 12 Two new elements ‘10’ and ‘17’ are inserted in the heap in that order. The level-order traversal of the heap after the insertion of the element is:</p></div>

## Q80 - Options
(A) 20, 18, 17, 15, 13, 12, 10
(B) 20, 18, 17, 12, 13, 10, 15
(C) 20, 18, 17, 10, 12, 13, 15
(D) 20, 18, 17, 13, 12, 10, 15

## Q80 - Hint
**Answer:** D  
**Topic:** Data Structures – Heap Insertion

Heap: 20, 18, 15, 13, 12.

- **Insert 10** at index 6, parent (index 3) = 15; 10 < 15 → stays → 20, 18, 15, 13, 12, 10
- **Insert 17** at index 7, parent (index 3) = 15; 17 > 15 → swap → index 3, parent 20 → stop

Result: **20, 18, 17, 13, 12, 10, 15**.

## Q81
<div class="stem"><p>List - I                                     List - II<br/> (a) Steepest - accent Hill     (i) Keeps track of all partial paths which can be Climbing candidate for further exploration<br/> (b)Branch - and - bound       (ii) Discover problem state(s) that satisfy a set of constraints<br/> (c)Constraint satisfaction    (iii) Detects difference between current state and goal state  <br/> (d)Means - end -analysis     (iv) Considers all moves from current state and selects best move</p></div>

## Q81 - Options
(A) a-i b-iv c-iii d-ii
(B) a-iv b-i c-ii d-iii
(C) a-i b-iv c-ii d-iii
(D) a-iv b-ii c-i d-iii

## Q81 - Hint
**Answer:** B  
**Topic:** Artificial Intelligence – Search Techniques

- Steepest-ascent hill climbing → considers all moves and picks the best (iv)
- Branch and bound → keeps all partial paths as candidates (i)
- Constraint satisfaction → finds states satisfying constraints (ii)
- Means–ends analysis → reduces the difference between current and goal state (iii)

## Q82
<div class="stem"><p>Compute the value of adding the following two fuzzy integers : A = {(0.3, 1), (0.6, 2), (1, 3), (0.7, 4), (0.2, 5)} B = {(0.5, 11), (1, 12), (0.5, 13)} Where fuzzy addition is defined as μA+B (z) = max x + y = z(min (μA(x), μB(x))) Then, f (A + B) is equal to</p></div>

## Q82 - Options
(A) {(0.5, 12), (0.6, 13), (1, 14), (0.7, 15), (0.7, 16), (1, 17), (1, 18)}
(B) {(0.5, 12), (0.6, 13), (1, 14), (1, 15), (1, 16), (1, 17), (1, 18)}
(C) {(0.3, 12), (0.5, 13), (0.5, 14), (1, 15), (0.7, 16), (0.5, 17), (0.2, 18)}
(D) {(0.3, 12), (0.5, 13), (0.6, 14), (1, 15), (0.7, 16), (0.5, 17), (0.2, 18)}

## Q82 - Hint
**Answer:** D  
**Topic:** Soft Computing – Fuzzy Arithmetic

μ(z) = max over x + y = z of min(μA(x), μB(y)).

| z | Pairs (x + y) and their mins | μ |
|---|---|---|
| 12 | 1+11: min(.3, .5) = .3 | **0.3** |
| 13 | 1+12: .3; 2+11: .5 | **0.5** |
| 14 | 1+13: .3; 2+12: .6; 3+11: .5 | **0.6** |
| 15 | 2+13: .5; 3+12: 1; 4+11: .5 | **1** |
| 16 | 3+13: .5; 4+12: .7; 5+11: .2 | **0.7** |
| 17 | 4+13: .5; 5+12: .2 | **0.5** |
| 18 | 5+13: .2 | **0.2** |

## Q83
<div class="stem"><p>Determine the maximum length of the cable (in km) for transmitting data at a rate of 500 Mbps in an Ethernet LAN with frames of size 10,000 bits. Assume the signal speed in the cable to be 2,00,000 km/s.</p></div>

## Q83 - Options
(A) 1
(B) 2
(C) 2.5
(D) 5

## Q83 - Hint
**Answer:** B  
**Topic:** Computer Networks – CSMA/CD

Need transmission time ≥ round-trip propagation time.

**Step 1:** Tt = 10,000 / (500 × 10⁶) = **20 μs**.  
**Step 2:** 2L / v ≤ 20 μs ⇒ L ≤ 20 × 10⁻⁶ × 200,000 / 2 = **2 km**.

## Q84
<div class="stem"><p>Disk requests come to a disk driver for cylinders in the order 10, 22, 20, 2, 40, 6, and 38 at a time when the disk drive is reading from cylinder 20. The seek time is 6 ms/cylinder. The total seek time, if the disk arm scheduling algorithms is first-come-first-served is</p></div>

## Q84 - Options
(A) 360 ms
(B) 850 ms
(C) 900 ms
(D) None of the above

## Q84 - Hint
**Answer:** D  
**Topic:** Operating Systems – Disk Scheduling (FCFS)

Head at 20; FCFS order: 10, 22, 20, 2, 40, 6, 38.

Moves: 10 + 12 + 2 + 18 + 38 + 34 + 32 = **146 cylinders**.  
Seek time = 146 × 6 = **876 ms** → not among 360, 850, 900 → **none of the above**.

## Q85
<div class="stem"><p>Match the software maintenance activities in List – I to its meaning in List – II</p> <p>List – I</p> <p>I. Corrective</p> <p>II. Adaptive</p> <p>III. Perfective</p> <p>IV. Preventive</p> <p>List - II</p> <p>(a) Concerned with performing activities to reduce the software complexity thereby improving program understandability and increasing software maintainability.</p> <p>(b) Concerned with fixing errors that are observed when the software is in use.</p> <p>(c) Concerned with the change in the software that takes place to make the software adaptable to new environment (both hardware and software).</p> <p>(d) Concerned with the change in the software that takes place to make the software adaptable to changing user requirements.</p></div>

## Q85 - Options
(A) I-b II-d III-c IV-a
(B) I-b II-c III-d IV-a
(C) I-c II-b III-d IV-a
(D) I-a II-d III-b IV-c

## Q85 - Hint
**Answer:** B  
**Topic:** Software Engineering – Maintenance

- Corrective → fix errors found in use (b)
- Adaptive → new hardware/software environment (c)
- Perfective → changing user requirements (d)
- Preventive → reduce complexity, improve maintainability (a)

## Q86
<div class="stem"><p>Given a block can hold either 3 records or 10 key pointers. A database contains n records, then how many blocks do we need to hold the data file and the dense index</p></div>

## Q86 - Options
(A) 13n/30
(B) n/3
(C) n/10
(D) n/30

## Q86 - Hint
**Answer:** A  
**Topic:** DBMS – Indexing

- Data file: n records / 3 per block = **n/3** blocks
- Dense index: one entry per record → n / 10 = **n/10** blocks

Total = n/3 + n/10 = (10n + 3n)/30 = **13n/30**.

## Q87
<div class="stem"><p>The asymptotic upper bound solution of the recurrence relation given by</p> <p>T(n) = 2T(n/2) + n/logn is :</p></div>

## Q87 - Options
(A) O(n<sup>2</sup>)
(B) O(n log n)
(C) O(n log log n)
(D) O(log log n)

## Q87 - Hint
**Answer:** C  
**Topic:** Algorithms – Recurrences (Extended Master Theorem)

T(n) = 2T(n/2) + n / log n

**Step 1 – Identify:** a = 2, b = 2, f(n) = n / log n.  
**Step 2 – Compute n^(log_b a)** = n^(log₂2) = **n**.  
**Step 3 – Why the basic Master theorem fails:** n / log n is smaller than n, but only by a log factor, not by a polynomial factor n^ε. So it is neither Case 1 nor Case 2 of the basic theorem.  
**Step 4 – Extended Master theorem:** write f(n) = Θ(nᵏ logᵖ n) → k = 1, p = −1.

- Since a = bᵏ (2 = 2¹), we are in its **Case 2**, which has three sub-cases:
  - p > −1 → Θ(nᵏ log^(p+1) n)
  - **p = −1 → Θ(nᵏ log log n)** ✔
  - p < −1 → Θ(nᵏ)

**Answer: T(n) = Θ(n log log n).**

Intuition: the recursion has log n levels; level i contributes n / log(n/2ⁱ), and summing 1/(log n − i) over the levels gives a harmonic series ≈ log log n.

## Q88
<div class="stem"><p>Which of the following strategy is employed for overcoming the priority inversion problem?</p></div>

## Q88 - Options
(A) Temporarily raise the priority of lower priority level process
(B) Have a fixed priority level scheme
(C) Implement kernel pre-emption scheme
(D) Allow lower priority process to complete its job

## Q88 - Hint
**Answer:** A  
**Topic:** Operating Systems – Priority Inversion

**Priority inversion**: a high-priority task waits for a resource held by a low-priority task, which itself is preempted by medium-priority tasks. The fix is **priority inheritance**: temporarily raise the low-priority holder's priority so it finishes and releases the resource quickly.

## Q89
<div class="stem"><p>An Operating System (OS) crashes on the average once in 30 days, that is, the Mean Time Between Failures (MTBF) = 30 days. When this happens, it takes 10 minutes to recover the OS, that is, the Mean Time To Repair (MTTR) = 10 minutes. The availability of the OS with these reliability figures is approximately :</p></div>

## Q89 - Options
(A) 96.97%
(B) 97.97%
(C) 99.009%
(D) 99.97%

## Q89 - Hint
**Answer:** D  
**Topic:** Software Engineering – Availability

Availability = MTBF / (MTBF + MTTR).

**Step 1:** 30 days = 30 × 24 × 60 = **43,200 min**.  
**Step 2:** A = 43,200 / (43,200 + 10) = 43,200 / 43,210 ≈ **99.977%**.

## Q90
<div class="stem"><p>Which of the following scheduling algorithms could result in starvation?</p> <p>i) First-come, first-served</p> <p>ii) Shortest job first</p> <p>iii) Round robin</p> <p>iv) Priority</p></div>

## Q90 - Options
(A) ii and iv
(B) i and iii
(C) iv only
(D) None of the above

## Q90 - Hint
**Answer:** A  
**Topic:** Operating Systems – Starvation

- **SJF** – long jobs can wait forever if short jobs keep arriving ✔
- **Priority** – low-priority processes can wait forever ✔
- FCFS and RR – every process eventually runs (no starvation).

## Q91
<div class="stem"><p>The following C program is executed on a Unix/Linux system:</p> <p>            #include </p> <p>            int main ()</p> <p>            {</p> <p>                  int i ;</p> <p>                  for (i=0; i&lt;10; i++)</p> <p>                         if (i%2 == 0) fork ( ) ;</p> <p>                  return 0 ;</p> <p>            }</p> <p>The total number of child processes created is _____. </p></div>

## Q91 - Options
(A) 26
(B) 33
(C) 31
(D) 28

## Q91 - Hint
**Answer:** C  
**Topic:** Operating Systems – fork()

fork() runs when i % 2 == 0 → i = 0, 2, 4, 6, 8 → **5 calls**, each executed by every process alive at that point.

Total processes = 2⁵ = 32 → child processes = 32 − 1 = **31**.

## Q92
<div class="stem"><p>The Cyclomatic Complexity metric V(G) of the following control flow graph.</p> <p><b><img src="tests/img/t6/q92-9b267b.png"/></b></p></div>

## Q92 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q92 - Hint
**Answer:** B  
**Topic:** Software Engineering – Cyclomatic Complexity

Edges: a→b, a→c, c→b, b→d, c→e, e→d, d→b → **E = 7**; nodes **N = 5**.

V(G) = E − N + 2 = 7 − 5 + 2 = **4**.

(Check: count the bounded regions + 1 → 3 + 1 = 4.)

## Q93
<div class="stem"><p>Match the following flag bits used in the context of virtual memory management on the left side with the different purposes on the right side of the table below.  </p> <p>Name of the bit                            Purpose    <br/> I.    Dirty                  a.    Page initialization<br/> II.    R/W                  b.    Write-back policy<br/> III.    Reference         c.    Page protection<br/> IV.    Valid                d.    Page replacement policy</p></div>

## Q93 - Options
(A) I-d, II-a, III-b, IV-c
(B) I-b, II-c, III-a, IV-d
(C) I-c, II-d, III-a, IV-b
(D) I-b, II-c, III-d, IV-a

## Q93 - Hint
**Answer:** D  
**Topic:** Operating Systems – Page Table Bits

- **Dirty** → page was modified → must be written back (write-back policy) (b)
- **R/W** → access rights → page protection (c)
- **Reference** → recently used → page replacement (LRU approximation) (d)
- **Valid** → page is in memory/initialised (a)

## Q94
<div class="stem"><p>Consider three processes (process id 0, 1, 2 respectively) with compute time bursts 2, 4 and 8 time units. All processes arrive at time zero. Consider the longest remaining time first (LRTF) scheduling algorithm. In LRTF ties are broken by giving priority to the process with the lowest process id. The average turnaround time is: </p></div>

## Q94 - Options
(A) 13 units
(B) 14 units
(C) 15 units
(D) 16 units

## Q94 - Hint
**Answer:** A  
**Topic:** Operating Systems – LRTF Scheduling

Bursts: P0 = 2, P1 = 4, P2 = 8, all at t = 0. LRTF always runs the process with the most remaining time (ties → lower id).

- P2 runs alone until its remaining time drops to 4 (t = 4).
- Then P1 and P2 alternate until both reach 2 (t = 8).
- Then P0, P1 and P2 (all at 2) alternate, each dropping by 1 per unit.

Finish times: **P0 = 12, P1 = 13, P2 = 14** (total work = 14).

Average TAT = (12 + 13 + 14)/3 = **13**.

## Q95
<div class="stem"><p>Let G be a connected planar graph with 10 vertices. If the number of edges on each face is three, then the number of edges in G is _______________.</p></div>

## Q95 - Options
(A) 24
(B) 25
(C) 26
(D) 27

## Q95 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Planar Graphs

Every face has 3 edges and every edge borders 2 faces → 3F = 2E → F = 2E/3.

Euler: V − E + F = 2 → 10 − E + 2E/3 = 2 → E/3 = 8 → **E = 24**.

(Equivalently, a maximal planar graph has E = 3V − 6 = 24.)

## Q96
<div class="stem"><p>Consider the following logical inferences.</p> <p>I1: If it rains then the cricket match will not be played.</p> <p>The cricket match was played.</p> <p>Inference: There was no rain.</p> <p>I2: If it rains then the cricket match will not be played.</p> <p>It did not rain.</p> <p>Inference: The cricket match was played.</p> <p>Which of the following is TRUE?</p></div>

## Q96 - Options
(A) Both I1 and I2 are correct inferences
(B) I1 is correct but I2 is not a correct inference
(C) I1 is not correct but I2 is a correct inference
(D) Both I1 and I2 are not correct inferences

## Q96 - Hint
**Answer:** B  
**Topic:** Discrete Mathematics – Rules of Inference

- **I1:** R → ¬M; M; ∴ ¬R → **modus tollens** ✔ valid.
- **I2:** R → ¬M; ¬R; ∴ M → **denying the antecedent** ✘ invalid (the match might be cancelled for other reasons).

## Q97
<div class="stem"><p>Consider the following statements:</p> <p>S1: A heuristic is admissible if it never overestimates the cost to reach the goal.</p> <p>S2: A heuristic is monotonous if it follows triangle inequality property.</p> <p>Which of the following is true referencing the above statements?</p> <p>Choose the correct answer from the code given below:</p> <p>Code:</p></div>

## Q97 - Options
(A) Neither of the statements S1 and S2 are true
(B) Statement S1 is false but statement S2 is true
(C) Statement S1 is true but statement S2 is false
(D) Both the statements S1 and S2 are true

## Q97 - Hint
**Answer:** D  
**Topic:** Artificial Intelligence – Heuristics

- **S1 ✔** – admissible: never overestimates.
- **S2 ✔** – monotone (consistent): h(n) ≤ c(n, n') + h(n'), i.e. the triangle inequality.

## Q98
<div class="stem"><p>The minimum number of colours required to colour the following graph, such that no two adjacent vertices are assigned the same colour, is</p> <p><img src="tests/img/t6/q98-b35f7a.png"/></p></div>

## Q98 - Options
(A) 2
(B) 3
(C) 4
(D) 5

## Q98 - Hint
**Answer:** C  
**Topic:** Discrete Mathematics – Graph Colouring

Try 3 colours. The inner square is a 4-cycle, so colour it 1, 2, 1, 2 (TL, TR, BR, BL).

- Top touches TL (1) and TR (2) → colour 3.
- Bottom touches BR (1) and BL (2) → colour 3.
- Left vertex touches top (3), bottom (3), TL (1) and BL (2) → all of 1, 2, 3 are used → needs a **4th** colour.

Other 3-colourings of the square fail the same way, while 4 colours clearly suffice → χ = **4**.

## Q99
<div class="stem"><p>The octal number 326.4 is equivalent to</p></div>

## Q99 - Options
(A) (214.2)<sub>10</sub> and (D6.8)<sub>)16</sub>
(B) (212.5)<sub>10</sub> and (D6.8)<sub>)16</sub>
(C) (214.5)<sub>10</sub> and (D6.8)<sub>)16</sub>
(D) (214.5)<sub>10</sub> and (D6.4)<sub>)16</sub>

## Q99 - Hint
**Answer:** C  
**Topic:** Digital Logic – Number Systems

**Octal → decimal:** 3·64 + 2·8 + 6 + 4/8 = 192 + 16 + 6 + 0.5 = **214.5**.

**Octal → hex** via binary: 326.4₈ = 011 010 110 . 100 → regroup in 4s: 1101 0110 . 1000 → **D6.8₁₆**.

## Q100
<div class="stem"><p>Match the following:</p> <p>List – I                                List - II<br/> (a)  (p→q)⇔(¬q→¬p)              (i) Contrapositive<br/> (b)  [(p∧q)→r]⇔[p→(q→r)]     (ii) Exportation law<br/> (c)  (p→q)⇔[(p∧¬q)→o]         (iii) Reductio ad absurdum<br/> (d)  (p↔q)⇔[(p→q)∧(q→p)]    (iv) Equivalence<br/> Codes :</p></div>

## Q100 - Options
(A) a-(i) b-(ii) c-(iii) d-(iv)
(B) a-(ii) b-(iii) c-(i) d-(iv)
(C) a-(iii) b-(ii) c-(iv) d-(i)
(D) a-(iv) b-(ii) c-(iii) d-(i)

## Q100 - Hint
**Answer:** A  
**Topic:** Discrete Mathematics – Logical Laws

- (p→q) ⇔ (¬q→¬p) → **contrapositive** (i)
- [(p∧q)→r] ⇔ [p→(q→r)] → **exportation** (ii)
- (p→q) ⇔ [(p∧¬q)→0] → **reductio ad absurdum** (iii)
- (p↔q) ⇔ [(p→q)∧(q→p)] → **equivalence** (iv)
