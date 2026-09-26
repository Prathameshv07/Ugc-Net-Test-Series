## Q1
<p>Given the relations employee (name, salary, deptno) and department (deptno, deptname, address)</p>
<p>Which of the following queries cannot be expressed using the basic relational algebra operations (U, -, x, π, σ , p)?</p>

## Q1 - Options
(A) Department address of every employee
(B) Employees whose name is the same as their department name
(C) The sum of all employees’ salaries
(D) All employees of a given department

## Q1 - Hint
<p>When you see a request to compute mathematical aggregates (sum, average, count) using basic relational algebra operations, immediately think that basic operators cannot perform arithmetic operations across rows.</p>

**Answer:** C

**Topic:** Algebra Operations

The correct option is C: The sum of all employees' salaries.  
  
**Why it is correct:**  
  - The six basic relational algebra operators ($\cup, -, \times, \pi, \sigma, \rho$) work on a row-by-row or set-by-set basis to filter, project, or combine data. They lack the capability to perform aggregation functions (like SUM, AVG, COUNT), which require the extended relational algebra aggregate operator ($\mathcal{G}$ or $\gamma$).  
  
**Elimination of other options:**
  * A & B: Both can be expressed by combining a Cartesian product ($\times$) or Join with Selection ($\sigma$) and Projection ($\pi$).  
  * D: Can be expressed easily using a simple Selection ($\sigma$) on deptno.  
  
**Key Trap:** Forgetting the boundary between basic and extended relational algebra. If you see an operation requiring computation across multiple rows ($\text{X} \rightarrow \text{aggregation}$) $\rightarrow$ it cannot be expressed using basic operators.  

**Summary table of Algebric Operations:**  
  
| Operation | <center>Symbol</center> | Main Function |
|---|---|--------|
| Selection | <center>σ</center> | Select rows (tuples / records) → vertical |
| Projection | <center>π</center> | Select columns (attributes / fields) → horizontal |
| Cartesian Product | <center>×</center> | Combine all tuples (1 on 1 map, → ↓) |
| Union | <center>∪</center> | Merge relations (all values combine) |
| Set Difference | <center>−</center> | Subtract tuples (the blue part of two sets) <div align="center"><img width="65%" src="paper2-csa/topic-wise/dbms-01-assets/q1-difference-of-sets-venn-diagram.png"></div> |
| Rename | <center>ρ</center> | Rename relation / attributes |

---

## Q2
<p>Properties of ‘DELETE’ and ‘TRUNCATE’ commands indicate that?</p>

## Q2 - Options
(A) ANDAfter the execution of ‘TRUNCATE’ operation, COMMIT, and ROLLBACK statements can be performed to retrieve the lost data, while ‘DELETE’ does not allow it.
(B) After the execution of ‘DELETE’ and ‘TRUNCATE’ operation retrieval is easily possible for the lost data
(C) After the execution of ‘DELETE’ operation, COMMIT and ROLLBACK statements can be performed to retrieve the lost data., while TRUNCATE do not allow it
(D) After the execution of ‘DELETE’ and ‘TRUNCATE’ operation no retrieval is possible for the lost data

## Q2 - Hint
<p>When comparing <b>DELETE vs TRUNCATE</b>, immediately think <b>DML vs DDL</b>—<code>DELETE</code> is logged and can be rolled back, while <code>TRUNCATE</code> is a structural reset that implicitly commits and cannot be rolled back.</p>

**Answer:** C

**Topic:** SQL Commands

The correct option is C:  
After the execution of 'DELETE' operation, COMMIT and ROLLBACK statements can be performed to retrieve the lost data., while TRUNCATE do not allow it.
  
**Why it is correct:**  
  - DELETE is a Data Manipulation Language (DML) command. It removes rows one by one and logs each deletion, which allows the transaction to be reversed using a ROLLBACK statement. TRUNCATE is a Data Definition Language (DDL) command. It deallocates the data pages directly, bypasses row-level logging, and executes an implicit COMMIT, making a standard transactional recovery impossible.
  
**Elimination of other options:** 
  - Options A, B, and D directly contradict this foundational distinction by either claiming TRUNCATE can be rolled back or that DELETE cannot be rolled back.
  
**Key Trap**: Confusing the two commands because they both remove data. Remember the rule: DELETE = DML (Logged/Rollback possible) $\rightarrow$ TRUNCATE = DDL (Auto-committed/No Rollback).


**Summary:**  
**Delete** is a DML based command which is mainly used for **manipulation, Truncate** \& a **DDL** command is mainly used for definition of the database / table, So if we try to <mark>delete</mark> a <mark>table</mark> and suppose we do <mark>have</mark> a <mark>checkpoint saved</mark>, so then we can <mark>retrieve</mark> data <mark>in case of delete but not in case of truncate</mark> as the whole schema, table and checkpoints is also deleted with too.

---

## Q3
<p>Which SQL statement best retrieves rows where a matching record does NOT exist in a related table?</p>

## Q3 - Options
(A) INNER JOIN
(B) UNION
(C) EXISTS
(D) NOT EXISTS

## Q3 - Hint
<p>When a question asks to find records where a matching record <b>does NOT exist</b> in a related table, look directly for the <code>NOT EXISTS</code> or <code>NOT</code> IN predicate.</p>

**Answer:** D

**Topic:** SQL Subqueries and Conditional Filtering

The correct option is D: NOT EXISTS.

**Why it is correct:**  
  - The NOT EXISTS operator is an explicit SQL keyword designed to test for the absence of rows in a correlated subquery. It returns TRUE if the subquery returns no rows, making it the most direct and efficient way to retrieve rows that have no matching records in a related table.
  
**Elimination of other options:**
  * A (INNER JOIN): Only retrieves rows that do have matching records in both tables.
  * B (UNION): Combines the result sets of two or more queries into a single result set; it does not perform conditional exclusion testing.
  * C (EXISTS): The exact opposite function; it checks if a matching record does exist.  
  
**Key Trap:** Misreading the prompt and selecting EXISTS by ignoring the word NOT. Remember the mapping: No matching record exists $\rightarrow$ NOT EXISTS.

---

## Q4
<p>Given the following relation instance.</p>
<table>
<tr><th>X</th><th>Y</th><th>Z</th></tr>
<tr><td>1</td><td>4</td><td>2</td></tr>
<tr><td>1</td><td>5</td><td>3</td></tr>
<tr><td>1</td><td>6</td><td>3</td></tr>
<tr><td>3</td><td>2</td><td>2</td></tr>
</table>
<p>Which of the following functional dependencies are satisfied by the instance?</p>

## Q4 - Options
(A) YZ -> X and Y -> Z
(B) XY -> Z and Z -> Y
(C) YZ -> X and X -> Z
(D) XZ -> Y and Y -> X

## Q4 - Hint
<p>When verifying if a functional dependency <b>A → B holds in a table instance</b>, immediately think: <b>"If a value in column A repeats, it must map to the exact same value in column B; if all values in A are completely unique, the dependency holds automatically."</b></p>

**Answer:** A

**Topic:** Functional Dependencies and Normalization

The correct option is A: YZ -> X and Y -> Z.

Why it is correct:
  * For $Y \rightarrow Z$: The values in column $Y$ are $\{4, 5, 6, 2\}$. Since every value in $Y$ is completely unique, it cannot map to conflicting $Z$ values. Thus, $Y \rightarrow Z$ holds trivially.
  * For $YZ \rightarrow X$: The combined pairs of $(Y,Z)$ are $\{(4,2), (5,3), (6,3), (2,2)\}$. All pairs are completely unique, so $YZ \rightarrow X$ also holds trivially.
  
Elimination of other options:
  * B: $Z \rightarrow Y$ fails because $Z = 2$ maps to both $Y = 4$ and $Y = 2$.
  * C: $X \rightarrow Z$ fails because $X = 1$ maps to both $Z = 2$ and $Z = 3$.
  * D: $XZ \rightarrow Y$ fails because the pair $(X=1, Z=3)$ maps to both $Y = 5$ and $Y = 6$.
  
**Key Trap:** Spending too much time testing every combination. Find the column with all unique values first (here, $Y$); any dependency starting with a unique determinant holds automatically, instantly narrowing down your choices.

---

## Q5
<p>Given a block can hold either 3 records or 10 key pointers. A database contains n records, then how many blocks do we need to hold the data file and the dense index</p>

## Q5 - Options
(A) 13n/30
(B) n/3
(C) n/10
(D) n/30

## Q5 - Hint
<p>When calculating the total blocks for a data file AND a dense index, immediately think: "Total blocks = (Blocks for n records) + (Blocks for n index pointers)."</p>

**Answer:** A

**Topic:** File Organization and Indexing: Dense Index Blocks

The correct option is A: 13n/30.

**Why it is correct:**  
  1. Data file blocks: One block holds 3 records. For $n$ records, the number of data blocks needed is $\frac{n}{3}$.
  2. Dense index blocks: A dense index contains exactly one index entry (key pointer) for every record in the data file. Since one block holds 10 key pointers, we need $\frac{n}{10}$ index blocks.
  3. Total blocks: Summing both requirements gives:
   $\text{Total} = \frac{n}{3} + \frac{n}{10} = \frac{10n + 3n}{30} = \frac{13n}{30}$ 
  
**Elimination of other options:**
  * B ($n/3$): Only accounts for the data file blocks.
  * C ($n/10$): Only accounts for the dense index blocks.
  * D ($n/30$): Represents the product, not the sum, of the two fraction components.
  
**Key Trap:** Confusing dense index with sparse index. A sparse index has entries only for each data block ($\frac{\text{data blocks}}{10}$), whereas a dense index requires an entry for every single record ($\frac{n}{10}$).

---

## Q6
<p>Which of the following statements is FALSE about weak entity set?</p>

## Q6 - Options
(A) Weak entities can be deleted automatically when their strong entity is deleted.
(B) Weak entity set avoids the data duplication and consequent possible inconsistencies caused by duplicating the key of the strong entity.
(C) A weak entity set has no primary keys unless attributes of the strong entity set on which it depends are included.
(D) Tuples in a weak entity set are not partitioned according to their relationship with tuples in a strong entity set.

## Q6 - Hint
<p>When evaluating properties of a weak entity set, remember that because its existence depends entirely on a strong entity, tuples in a weak entity set are logically partitioned based on their relationship with the owner strong entity tuples.</p>

**Answer:** D

**Topic:** Data Modeling: Entity-Relationship Diagram (Weak Entity Sets)

The correct option is D: Tuples in a weak entity set are not partitioned according to their relationship with tuples in a strong entity set.

**Why it is correct (identifying the FALSE statement):**  
  - In standard database design, tuples inside a weak entity set are inherently partitioned (grouped) according to their identifying relationship with the tuples of the strong entity set. For example, in a Dependent weak entity set, dependents are grouped or isolated by the specific Employee (strong entity) they belong to. Therefore, stating that they are not partitioned is false.  
  
**Verification of true statements:**  
  * A: Correct; cascades can be configured so that deleting a strong entity automatic-deletes corresponding weak entities.
  * B \& C: Correct; weak entity concepts prevent duplication of the owner’s primary key at the abstract ER level, and a weak entity lacks its own primary key until it incorporates the strong entity's attributes.  
  
**Key Trap:** Misinterpreting structural dependency as complete randomness. A weak entity set is never an unorganized heap; it is always cleanly segmented/partitioned by the parent primary keys it depends on.

---

## Q7
<p>Consider a relation R(A, B, C), which of the following statements is not true according to inference rules for functional dependencies?</p>

## Q7 - Options
(A) If A → B and B → C, then A → C
(B) If AB → C, then A → B and B → C
(C) If A → B and A → C, then A → BC
(D) If A → B, then AC → BC

## Q7 - Hint
<p>When evaluating Armstrong's Axioms or inference rules, remember that <b>you cannot split attributes on the left-hand side (determinant) of a functional dependency.</b></p>

**Answer:** B

**Topic:** Armstrong's Axioms and Inference Rules

The correct option is B: If AB $\rightarrow$ C, then A $\rightarrow$ B and B $\rightarrow$ C.
  
**Why it is correct (identifying the NOT true statement):**  
  - The decomposition rule only allows splitting attributes on the right-hand side (e.g., if $A \rightarrow BC$, then $A \rightarrow B$ and $A \rightarrow C$). Combining attributes on the left side ($AB$) means that $A$ and $B$ together uniquely determine $C$. It provides absolutely no information that $A$ alone can determine $B$, or that $B$ alone can determine $C$.
  
**Verification of true statements:**  
  * A (Transitivity): If $A \rightarrow B$ and $B \rightarrow C$, then $A \rightarrow C$ is a primary valid axiom.
  * C (Union Rule): If $A \rightarrow B$ and $A \rightarrow C$, they can be combined into $A \rightarrow BC$.
  * D (Augmentation Rule): If $A \rightarrow B$, you can augment both sides with $C$ to get $AC \rightarrow BC$.
  
**Key Trap:** Confusing the behavior of left-hand side attributes with right-hand side attributes. Remember the absolute shortcut: Split on the right is allowed $\rightarrow$ Split on the left is a trap.

---

## Q8
<p>Which of the following is characteristic of an MIS?</p>

## Q8 - Options
(A) Provides guidance in identifying problems, finding and evaluating alternative solutions, and selecting or comparing alternatives.
(B) Draws on diverse yet predictable data resources to aggregate and summarize data.
(C) High volume, data capture focus.
(D) Has as its goal the efficiency of data movement and processing and interfacing different TPS.

## Q8 - Hint
<p>When distinguishing between information systems, remember that <b>MIS takes structured data from a Transaction Processing System (TPS) to aggregate and generate structured, predictable summaries and reports for managers.</b></p>

**Answer:** B

**Topic:** Out of Syllabus

The correct option is B: Draws on diverse yet predictable data resources to aggregate and summarize data.
  
**Why it is correct:**  
  - An MIS (Management Information System) mainly focuses on operational and tactical monitoring. It takes internal data generated by standard daily routines (like sales data or inventory counts) and converts it into standard, predictable summaries or structured reports (e.g., monthly sales summaries).
  
**Elimination of other options:**
  * A: This describes a DSS (Decision Support System), which helps with unstructured problem-solving and evaluating unpredictable alternatives.
  * C & D: These describe a TPS (Transaction Processing System), which is focused on high-volume data capture, daily transaction movements, and routine clerical processing.
  
**Key Trap:** Confusing MIS with DSS. Remember: MIS = Routine, structured summaries and predictable reports $\rightarrow$ DSS = Semi-structured/Unstructured decisions and interactive analysis.

---

## Q9
<p>Which of the following statement(s) is/are FALSE in the context of Relational DBMS?</p>
<ol type="I">
<li>Views in a database system are important because they help with access control by allowing users to see only a particular subset of the data in the database.</li>
<li>E-R diagrams are useful to logically model concepts.</li>
<li>An update anomaly is when it is not possible to store information unless some other, unrelated information is stored as well.</li>
<li>SQL is a procedural language.</li>
</ol>

## Q9 - Options
(A) I and IV only
(B) III and IV only
(C) I, II and III only
(D) II, III and IV only

## Q9 - Hint
<p>When scanning multiple database concepts to find <b>FALSE</b> statements, remember that <b>SQL is declarative (non-procedural)</b>, and an anomaly concerning the inability to <b>insert/store</b> information is an <b>insertion anomaly</b>, not an update anomaly.</p>

**Answer:** D

**Topic:** SQL (Views and Language Characteristics) and Database Anomalies

The correct option is B: III and IV only.

**Why it is correct (identifying the FALSE statements):**  
  * Statement III is FALSE: The inability to store/insert new data because unrelated facts are required describes an insertion anomaly. An update anomaly occurs when inconsistent data modifications happen due to data redundancy.
  * Statement IV is FALSE: Standard SQL is a declarative (non-procedural) language. You specify what data you want, not the step-by-step algorithms or control structures of how to retrieve it.
  
**Verification of TRUE statements:**  
  * Statement I (TRUE): Views restrict data exposure, providing a robust security level for access control.
  * Statement II (TRUE): Entity-Relationship (E-R) diagrams are the fundamental industry standard for high-level conceptual and logical modeling.
  
**Key Trap:** Misreading procedural vs. declarative. Remember: SQL = Declarative (Non-Procedural). PL/SQL or T-SQL adds procedural extensions, but core SQL is purely non-procedural.

---

## Q10
<p>For a database relation R(A, B, C, D) where the domains of A, B, C and D include only atomic values, only the following functional dependencies and those that can be inferred from them are : A → C B → D The relation R is in _______.</p>

## Q10 - Options
(A) First normal form but not in second normal form.
(B) Both in first normal form as well as in second normal form.
(C) Second normal form but not in third normal form.
(D) Both in second normal form as well as in third normal form.

## Q10 - Hint
<p>When a composite candidate key exists and you see a dependency where a <b>proper subset of that key determines a non-prime attribute</b>, immediately identify it as a <b>partial dependency</b>, which violates <b>2NF</b>.</p>

**Answer:** A

**Topic:** Functional Dependencies and Normalization (1NF vs 2NF)

The correct option is A: First normal form but not in second normal form.

**Why it is correct:**    
  1. Candidate Key Finding: The given dependencies are $A \rightarrow C$ and $B \rightarrow D$. Finding the attribute closure of $AB$ yields $(AB)^+ = \{A, B, C, D\}$. Thus, $AB$ is the sole composite Candidate Key.
  2. Prime vs Non-Prime Attributes: Prime attributes (part of the key) are $\{A, B\}$. Non-prime attributes are $\{C, D\}$.
  3. Normal Form Check:
    * 1NF: The relation contains only atomic values, so it is strictly in 1NF.
    * 2NF: Requires that no non-prime attribute depends on a proper subset of a candidate key. Both $A \rightarrow C$ (where $A \subset AB$) and $B \rightarrow D$ (where $B \subset AB$) are partial dependencies. This violates 2NF.

**Elimination of other options:** Options B, C, and D are incorrect because they claim the relation satisfies 2NF.
  
**Key Trap:** Assuming a relation is automatically in 2NF if it does not have a single-attribute key. Always extract the candidate key, check if it's composite, and watch out for partial subsets on the left side: Proper subset of Candidate Key $\rightarrow$ Non-Prime Attribute = Violation of 2NF.

---

## Q11
<p>The relation schemas R1 and R2 form a Lossless join decomposition of R if and only if:</p>
<ol type="a">
<li>R1 ∩ R2 ↠ (R1 - R2)</li>
<li>R1 → R2</li>
<li>R1 ∩ R2 ↠ (R2 - R1)</li>
<li>(R2 → R1) ∩ R2</li>
</ol>

## Q11 - Options
(A) a and b happens
(B) a and d happens
(C) a and c happens
(D) b and c happens

## Q11 - Hint
<p>
            When checking if a decomposition of <em>R</em> into <em>R</em><sub>1</sub> and <em>R</em><sub>2</sub> is lossless, immediately think: 
            "The common attributes must form a super key for at least one of the two sub-relations 
            (<strong><em>R</em><sub>1</sub> ∩ <em>R</em><sub>2</sub> → <em>R</em><sub>1</sub></strong> 
            OR 
            <strong><em>R</em><sub>1</sub> ∩ <em>R</em><sub>2</sub> → <em>R</em><sub>2</sub></strong>)."
          </p>

**Answer:** C

**Topic:** Lossless Join Decomposition

The correct option is C: (a) and (c) happens.

**Why it is correct:**  
For a decomposition to be lossless, the intersection of the two schemas must functionally determine all attributes of at least one schema:
  
  1. Condition 1: $R_1 \cap R_2 \rightarrow R_1$. Using the properties of functional dependencies, since $R_1 = (R_1 \cap R_2) \cup (R_1 - R_2)$, this condition can be simplified by removing the trivial overlap from the right-hand side, yielding statement (a): $R_1 \cap R_2 \rightarrow (R_1 - R_2)$.
  2. Condition 2: $R_1 \cap R_2 \rightarrow R_2$. Similarly, since $R_2 = (R_1 \cap R_2) \cup (R_2 - R_1)$, this simplifies to statement (c): $R_1 \cap R_2 \rightarrow (R_2 - R_1)$. [1] 
  
Therefore, the decomposition is lossless if and only if either statement (a) or statement (c) holds. In the context of this UGC NET multiple-choice question, option C designates that statements (a) and (c) are the valid algebraic formulations representing this condition.
  
**Key Trap:** Getting confused by the set-difference notation $(R_1 - R_2)$. Always remember that adding the common intersection attributes back to the right-hand side gives you the standard rule: Common attributes $\rightarrow$ Whole Table 1 OR Common attributes $\rightarrow$ Whole Table 2.

---

## Q12
<p>Consider a relational table R that is in 3NF, but not in BCNF. Which one of the following statements is TRUE?</p>

## Q12 - Options
(A) A cell in R holds a set instead of an atomic value.
(B) R has a nontrivial functional dependency X → A, where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key.
(C) R has a nontrivial functional dependency X → A, where X is not a superkey and A is a non-prime attribute and X is a proper subset of some key.
(D) R has a nontrivial functional dependency X → A, where X is not a superkey and A is a prime attribute.

## Q12 - Hint
<p>When a relation satisfies 3NF but fails BCNF, immediately think: "There must be a non-trivial dependency X → A where the left side X is NOT a superkey, but the right side A IS a prime attribute."</p>

**Answer:** D

**Topic:** Normalization: 3NF vs BCNF Conditions

The correct option is D: R has a nontrivial functional dependency X-->A, where X is not a superkey and A is a prime attribute.

**Why it is correct:**  
  * BCNF Rule: Every non-trivial functional dependency $X \rightarrow A$ must have a superkey on the left-hand side ($X$).
  * 3NF Rule: Allows an exception; for every non-trivial dependency $X \rightarrow A$, either $X$ must be a superkey OR $A$ must be a prime attribute (part of a candidate key).
  * If a relation is in 3NF but not BCNF, it means there is a dependency that violates BCNF (so $X$ is not a superkey) but is protected by the 3NF clause (so $A$ must be a prime attribute).
  
**Elimination of other options:**
  * A: Violates 1NF (atomic values rule).
  * B & C: If $A$ is a non-prime attribute and $X$ is not a superkey, the dependency violates 3NF completely.
  
**Key Trap:** Getting confused by long option text. Remember the ultimate normal form filter rule: 3NF allows a non-superkey on the left ONLY IF the right side is a prime attribute.

---

## Q13
<p>The relation book (title, price) contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list?</p>
<p><strong>SELECT</strong> title</p>
<p><strong>FROM</strong> book <strong>AS</strong> B</p>
<p><strong>WHERE</strong> (<strong>SELECT</strong> count(*)</p>
<p>    <strong>FROM</strong> book <strong>AS</strong> T</p>
<p>&lt;    strong&gt;WHERE T.price &gt; B.price) &lt; 5;</p>

## Q13 - Options
(A) Titles of the four most expensive books
(B) Title of the fifth most inexpensive book
(C) Title of the fifth most expensive bookTitles of the five most expensive books
(D) Titles of the five most expensive books

## Q13 - Hint
<p>When a correlated subquery counts how many rows have a value strictly greater than the outer row (T.price &gt; B.price) and checks if that count is &lt; K, immediately think: "This finds the top K highest values."</p>

**Answer:** D

**Topic:** SQL Correlated Subqueries and Rank Selection

The correct option is D: Titles of the five most expensive books.

**Why it is correct:**  
The query uses a correlated subquery that calculates the number of books ($T$) that are more expensive than the current book ($B$).
  * For the most expensive book, 0 books have a higher price. Since $0 < 5$, its title is selected.
  * For the 2nd most expensive book, 1 book has a higher price. Since $1 < 5$, its title is selected.
  * Following this logic, books with exactly 0, 1, 2, 3, or 4 books priced higher than them will satisfy the condition < 5. This yields exactly the 5 most expensive books.
  
**Elimination of other options:**
  * A: Incorrect because a count less than 5 includes 5 distinct values (0, 1, 2, 3, 4), not 4.
  * B & C: Incorrect because the query selects a collection of rows that meet the criteria, rather than pinpointing a single specific rank (like the 5th individual book).
  
**Key Trap:** Miscounting the boundary condition of the strict inequality (< 5). Since counting starts from 0 (for the maximum value element), the values allowed are $0, 1, 2, 3, 4$, which totals 5 rows.

---

## Q14
<p>Let R (A, B, C, D) be a relational schema with the following functional dependencies:</p>
<p>A → B, B → C,</p>
<p>C → D and D → B</p>
<p>The decomposition of R into  (A, B), (B, C), (B, D)</p>

## Q14 - Options
(A) gives a lossless join, and is dependency preserving
(B) gives a lossless join, but is not dependency preserving
(C) does not give a lossless join, but is dependency preserving
(D) does not give a lossless join and is not dependency preserving

## Q14 - Hint
<p>When testing a decomposition for lossless join, check if you can merge sub-relations step-by-step using a common attribute that forms a key. For dependency preservation, look closely to see if any original functional dependency has its left and right attributes completely separated across different sub-schemas.</p>

**Answer:** B

**Topic:** Relational Database Design: Lossless Join and Dependency Preservation

The correct option is B: gives a lossless join, but is not dependency preserving.

**Why it is correct:**  
  1. Lossless Join Check:
    * Merge $R_1(A, B)$ and $R_2(B, C)$. Their intersection is $\{B\}$. Since $B \rightarrow C$ is a given dependency, $B$ is a key for $R_2$. This step is lossless, forming a combined schema $R_{12}(A, B, C)$.
    * Now merge $R_{12}(A, B, C)$ with $R_3(B, D)$. Their intersection is $\{B\}$. From the dependencies $B \rightarrow C$ and $C \rightarrow D$, we find the closure $B^+ = \{B, C, D\}$, meaning $B \rightarrow D$ holds. Since $B$ determines $D$, it acts as a key for $R_3$. This step is also lossless. Thus, the entire decomposition is lossless.
  2. Dependency Preservation Check:
    * Look at the original functional dependency $C \rightarrow D$.
    * The decomposed schemas are $(A, B)$, $(B, C)$, and $(B, D)$. Notice that $C$ and $D$ do not appear together in any single sub-schema.
    * If we compute the closure of $C$ using only the dependencies local to the sub-schemas ($A \rightarrow B$, $B \rightarrow C$, and $D \rightarrow B$), $C^+$ is simply $\{C\}$. We can no longer derive $D$ from $C$, which means $C \rightarrow D$ is lost. Thus, it is not dependency preserving.
  
**Key Trap:** Assuming a dependency is preserved just because its attributes exist somewhere in the collection of schemas. The attributes must appear together in at least one schema, or the dependency must be derivable from the combination of local dependencies.

---

## Q15
<p>A relation in which every non-key attribute is fully functionally dependent on the primary key and which has no transitive dependencies is said to be in:</p>

## Q15 - Options
(A) BCNF
(B) 2NF
(C) 3NF
(D) 4NF

## Q15 - Hint
<p>When a definition explicitly mentions no partial dependencies (fully functionally dependent on the primary key) AND no transitive dependencies for non-key attributes, it is the textbook definition of 3NF.</p>

**Answer:** C

**Topic:** Database Normalization Definitions (3NF)

The correct option is C: 3NF.

**Why it is correct:**  
  * 2NF Condition: Requires that every non-key (non-prime) attribute is fully functionally dependent on the primary key (i.e., no partial dependencies).
  * 3NF Condition: Builds on 2NF by adding the requirement that no non-key attribute is transitively dependent on the primary key.
  * Since the prompt satisfies both of these conditions simultaneously, the relation is strictly in Third Normal Form (3NF).
  
**Elimination of other options:**
  * A (BCNF): A stricter form that eliminates dependencies where a prime attribute depends on a non-key attribute.
  * B (2NF): Only guarantees full functional dependency but allows transitive dependencies.
  * D (4NF): Deals with multi-valued dependencies, which go beyond standard functional dependencies.
  
**Key Trap:** Jumping to higher normal forms like BCNF without matching the text precisely. Remember the classic hierarchy: No Partial Dependencies = 2NF $\rightarrow$ No Transitive Dependencies = 3NF.

---

## Q16
<p>Let x, y, z, a, b, c be the attributes of an entity set E. If {x}, {x,y}, {a,b}, {a,b,c}, {x,y,z} are superkeys then which of the following are the candidate keys?</p>

## Q16 - Options
(A) {x,y} and {a,b}
(B) {x} and {a,b}
(C) {x,y,z} and {a,b,c}
(D) {z} and {c}

## Q16 - Hint
<p>When asked to find candidate keys from a list of given superkeys, immediately think: "Candidate keys are minimal superkeys." Look for the sets that do not contain any other smaller superkey as a proper subset.</p>

**Answer:** B

**Topic:** Relational Database Design: Candidate Keys and Superkeys

The correct option is B: {x} and {a,b}.

**Why it is correct:**   
A candidate key is defined as a minimal superkey (meaning no proper subset of it can also be a superkey). Let's evaluate the given superkeys:
  
  * $\{x\}$: No proper subset of this set exists, so it is minimal. $\rightarrow$ Candidate Key.
  * $\{x,y\}$: Contains $\{x\}$ as a proper subset, which is already a superkey. Therefore, it is not minimal.
  * $\{x,y,z\}$: Contains $\{x\}$ as a proper subset, so it is not minimal.
  * $\{a,b\}$: Neither $\{a\}$ nor $\{b\}$ is listed as a superkey, so it is minimal. $\rightarrow$ Candidate Key.
  * $\{a,b,c\}$: Contains $\{a,b\}$ as a proper subset, so it is not minimal.
  
Filtering for minimality leaves exactly $\{x\}$ and $\{a,b\}$.
  
**Elimination of other options:** Options A, C, and D contain sets that either contain redundant attributes or are not minimal superkeys based on the problem statement.
  
**Key Trap:** Getting overwhelmed by the number of sets. Simply line them up by size and cross out any larger set that fully contains a smaller one: Contains a smaller superkey $\rightarrow$ Discard from candidate keys.

---

## Q17
<p>Let R (ABCDEFGH) be a relation schema and F be the set of dependencies F = {A → B, ABCD → E, EF → G, EF → H and ACDF →EG}. The minimal cover of a set of functional dependencies is</p>

## Q17 - Options
(A) A → B, ACD → E, EF → G, and EF → H
(B) A → B, ACD → E, EF → G, EF → H and ACDF → G
(C) A → B, ACD → E, EF → G, EF → H and ACDF → E
(D) A → B, ABCD → E, EF → H and EF → G

## Q17 - Hint
<p>When finding a minimal cover, perform three essential steps: decompose right-hand sides into single attributes, remove extraneous attributes from the left-hand sides using attribute closures, and eliminate redundant dependencies that can be transitively derived.</p>

**Answer:** A

**Topic:** Minimal Cover (Canonical Cover) of Functional Dependencies

The correct option is A: A $\rightarrow$ B, ACD $\rightarrow$ E, EF $\rightarrow$ G, and EF $\rightarrow$ H.

**Why it is correct:**  >
<p>Let's simplify the original set step-by-step:</p>
<ol>
    <!-- Step 1 -->
    <li>
        <strong>Deconstruct RHS:</strong> Split multi-attribute right sides into separate single attributes:
        <ul>
            <li>ACDF &rarr; E and ACDF &rarr; G (split from ACDF &rarr; EG).</li>
        </ul>
    </li>
    <!-- Step 2 -->
    <li>
        <strong>Remove Extraneous LHS Attributes:</strong> Check if any attribute on a left-hand side can be deleted:
        <ul>
            <li>For ABCD &rarr; E: Since A &rarr; B, the attribute B is already implied by A. Thus, B is extraneous. Replacing it simplifies the dependency to ACD &rarr; E.</li>
        </ul>
    </li>
    <!-- Step 3 -->
    <li>
        <strong>Check for Redundant Dependencies:</strong> Determine if any dependency is entirely covered by the others:
        <ul>
            <li style="margin-bottom: 8px;">Let's test ACDF &rarr; E: If we remove it, can we still derive E from ACDF? We know ACD &rarr; E, so the closure (ACDF)<sup>+</sup> under the remaining rules clearly includes E. Thus, ACDF &rarr; E is redundant and removed.</li>
            <li>
                Let's test ACDF &rarr; G: If we remove it, can we still derive G from ACDF? Compute the closure of ACDF:
                <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                    <li>(ACDF)<sup>+</sup> = {A, C, D, F}</li>
                    <li>Use A &rarr; B &rarr; {A, B, C, D, F}</li>
                    <li>Use ACD &rarr; E &rarr; {A, B, C, D, E, F}</li>
                    <li>Use EF &rarr; G &rarr; {A, B, C, D, E, F, G}</li>
                </ul>
                <p style="margin-top: 8px; margin-bottom: 0;">Since G is successfully reached without it, ACDF &rarr; G is also redundant and removed.</p>
            </li>
        </ul>
        <p style="margin-top: 10px; font-weight: bold;">After removing all redundancies, we are left with the minimal set: A &rarr; B, ACD &rarr; E, EF &rarr; G, and EF &rarr; H.</p>
    </li>
</ol>

  
**Elimination of other options:** Options B, C, and D are incorrect because they fail to remove redundant dependencies (like $ACDF \rightarrow G$ or $ACDF \rightarrow E$) or fail to reduce extraneous left-hand attributes (keeping $ABCD$).
  
**Key Trap:** Not checking for extraneous left-hand side elements first. Finding that $A \rightarrow B$ instantly converts $ABCD \rightarrow E$ into a cleaner $ACD \rightarrow E$ is the key to unlocking this problem rapidly.

---

## Q18
<p>Trigger is</p>

## Q18 - Options
(A) Statement that enables to start any DBMS
(B) Statement that is executed by the user when debugging an application program
(C) The condition that the system tests for the validity of the database user
(D) Statement that is executed automatically by the system as a side effect of a modification of the database

## Q18 - Hint
<p>When you see the word Trigger, immediately think: "Event-Driven / Automatic Execution." A trigger is never manually run by a user; it fires automatically in response to database modifications (INSERT, UPDATE, DELETE).</p>

**Answer:** D

**Topic:** Database Triggers

The correct option is D:  
Statement that is executed automatically by the system as a side effect of a modification of the database.

**Why it is correct:**   
  - By definition, a database trigger is a stored procedure that the database management system automatically executes when a specified event occurs—most commonly, data modification operations. It acts as an automated side effect to maintain integrity, log actions, or enforce business rules.
  
**Elimination of other options:**
  * A: Database startup sequences are system initialization operations, not triggers.
  * B: Code executed manually during debugging is an interactive script or command line utility, not a trigger.
  * C: User validation checks relate to authentication and access privileges (e.g., login mechanisms), not structural triggers.
  
**Key Trap:** Confusing automatic background processes with manual commands. Remember the simple rule: Trigger = Automatic side effect of data modification.

---

## Q19
<p>Set of key attributes that identify weak entities related to some owner entity is classified as:</p>

## Q19 - Options
(A) Structural key
(B) String key
(C) Partial key
(D) Foreign key

## Q19 - Hint
<p>When you see a question about the specific attributes used to uniquely distinguish weak entities under the same owner strong entity, immediately think of a partial key (also called a discriminator).</p>

**Answer:** C

**Topic:** Data Modeling: E-R Diagram Keys (Weak Entity Sets)

The correct option is C: Partial key.
  
**Why it is correct:**   
  - A weak entity set does not possess sufficient attributes to form a primary key on its own. It relies on an owner (strong) entity set. The set of attributes within the weak entity that uniquely identifies a specific record among all records sharing the same parent owner entity tuple is formally called the partial key or discriminator.
  
**Elimination of other options:**
  * A & B: "Structural key" and "String key" are generic or completely fabricated terms in standard relational data modeling theory.
  * D (Foreign key): This is a relational model implementation constraint used to reference a primary key in another table, rather than the intrinsic identification attribute set defined at the conceptual E-R model level.
  
**Key Trap:** Confusing conceptual E-R terminology with implementation terminology. At the high-level diagram design level, the key of a weak entity is always labeled a partial key, not a foreign key.

---

## Q20
<p>Consider the following log sequence of two transactions on a bank account, with initial balance 12000, that transfer 2000 to a mortgage payment and then apply a 5% interest.</p>
<ol>
<li>T1 start</li>
<li>T1 B old=12000 new=10000</li>
<li>T1 M old=0 new=2000</li>
<li>T1 commit</li>
<li>T2 start</li>
<li>T2 B old=10000 new=10500</li>
<li>T2 commit</li>
</ol>
<p>Suppose the database system crashes just before log record 7 is written. When the system is restarted, which one statement is true of the recovery procedure?</p>

## Q20 - Options
(A) We must redo log record 6 to set B to 10500
(B) We must undo log record 6 to set B to 10000 and then redo log records 2 and 3
(C) We need not redo log records 2 and 3 because transaction T1 has committed
(D) We can apply redo and undo operations in arbitrary order because they are idempotent

## Q20 - Hint
<p>When a system crash happens during log processing, look for the presence of standard commit flags: Transactions with a COMMIT record in the log must be completely REDONE, while transactions that lack a COMMIT record must be entirely UNDONE</p>

**Answer:** C

**Topic:** Database Recovery Techniques: Log-Based Recovery (Immediate/Deferred Update)

The correct option is B:  
We must undo log record 6 to set B to 10000 and then redo log records 2 and 3.

**Why it is correct:**  
  1. Analyze Transaction T1: The log sequence shows T1 start followed by T1 commit at record 4. Since T1 successfully completed and committed before the crash, the recovery manager must redo all its actions to ensure durability. This requires re-executing log records 2 and 3.
  2. Analyze Transaction T2: The system crashes just before log record 7 (T2 commit) is safely written. Because there is no active commit entry for T2 in the log, T2 is categorized as an uncommitted transaction. The system must undo its modifications to maintain atomicity, which means rolling back log record 6 and resetting the value of B back to its initial old state of 10000.

**Key Trap:** Thinking that since T1 committed, its updates are already permanent and don't need a redo pass. In standard log-based recovery setups without checkpoints, all committed transactions must be re-run from the log in chronological order, while incomplete ones are rolled back in reverse order.

---

## Q21
<p>Which of the following concurrency control protocols ensure both conflict serializability and freedom from deadlock?</p>
<ol start="I">
<li>2-phase locking</li>
<li>Time-stamp ordering</li>
</ol>

## Q21 - Options
(A) I only
(B) II only
(C) Both I and II
(D) Neither I nor II

## Q21 - Hint
<p>When evaluating concurrency protocols for deadlock freedom, remember that Lock-based protocols (like Basic 2PL) are prone to deadlocks, whereas Timestamp-based protocols resolve conflicts by aborting transactions, completely preventing wait-cycles.</p>

**Answer:** B

**Topic:** Concurrency Control: Conflict Serializability and Deadlock Prevention

The correct option is B: II only.

**Why it is correct:**  
  * II. Time-stamp ordering (TO): This protocol ensures conflict serializability by ordering conflicting operations based on monotonically increasing timestamps. Because transactions never wait for each other in a blocking manner—instead, any out-of-order operation causes the transaction to be immediately aborted and restarted—it is completely free from deadlocks.
  
**Elimination of other options:**
  * I. 2-phase locking (2PL): While Basic 2PL guarantees conflict serializability, it allows transactions to hold locks while waiting for other locks. This mutual waiting can easily create resource cycles, meaning Basic 2PL does not guarantee freedom from deadlock.
  
**Key Trap:** Selecting "Both I and II" because both protocols are highly popular. Remember: 2PL requires locks $\rightarrow$ Locks create wait cycles $\rightarrow$ Deadlocks possible. Therefore, 2PL alone cannot satisfy the deadlock-free requirement.

---

## Q22
<p>After groups have been established, SQL applies predicates in the ___________ clause, allowing aggregate functions to be used.</p>

## Q22 - Options
(A) Where
(B) Having
(C) Group by
(D) With

## Q22 - Hint
<p>When a predicate or condition needs to be applied after groups have been established or involves aggregate functions (like SUM, COUNT, AVG), immediately think of the HAVING clause.</p>

**Answer:** B

**Topic:** SQL Clauses: Filtering Grouped Data

The correct option is B: Having.
  
**Why it is correct:**   
  - In SQL query execution order, the GROUP BY clause runs first to organize the rows into sets. Once these groups are formed, the HAVING clause is used to filter entire groups based on a given condition, directly allowing the use of aggregate operations (e.g., HAVING COUNT(*) > 5).
  
**Elimination of other options:**
  * A (Where): Filters individual rows before any grouping happens, and strictly prohibits the use of standard aggregate functions.
  * C (Group by): This clause forms the groups themselves; it does not evaluate post-grouping filtering predicates.
  * D (With): Used to define common table expressions (CTEs), not for filtering aggregates.
  
**Key Trap:** Confusing WHERE and HAVING. Remember the definitive order: WHERE filters rows (Pre-Group) $\rightarrow$ HAVING filters groups (Post-Group, allows aggregates).

---

## Q23
<p>The top level of the hierarchy consists of ______ each of which can contain _____.</p>

## Q23 - Options
(A) Schemas, Catalogs
(B) Schemas, Environment
(C) Environment, Schemas
(D) Catalogs, Schemas

## Q23 - Hint
<p>When dealing with the hierarchical naming structure of contemporary relational database objects (like tables and views), think of a standard operating system's multi-level file path directory. The containment direction flows from Catalogs → Schemas → Objects.</p>

**Answer:** D

**Topic:** Database Environment Architecture: Catalog and Schema Hierarchy

The correct option is D: Catalogs, Schemas.
  
**Why it is correct:**  
  - According to the standard SQL architecture definition, contemporary database systems provide a three-level hierarchy for organizing and uniquely naming relations. The top level consists of catalogs (often referred simply as a "database" in some commercial implementations), and each individual catalog can contain multiple schemas. Each schema then acts as a logical namespace that holds standard SQL objects like tables, indexes, and views.
  
**Elimination of other options:**
  * A & B: These options reverse the ordering or include "Environment" incorrectly. The schema is contained within a catalog, not vice versa.
  * C: A SQL environment represents the overall system instance context within which a user session is active; it does not represent the direct top-level containment folder for schemas.
  
**Key Trap:** Reversing the containment sequence. Remember the rule: Catalog = Major Database Folder $\rightarrow$ Schema = Sub-folder Namespace. Therefore, the structure requires "Catalogs" followed by "Schemas."

---

## Q24
<p>Consider following schedules involving two transactions:</p>
<p>S1 : r1(X); r1(Y); r2(X); r2(Y); w2(Y); w1(X)</p>
<p>S2 : r1(X); r2(X); r2(Y); w2(Y); r1(Y); w1(X)</p>
<p>Which of the following statement is true?</p>

## Q24 - Options
(A) Both S1 and S2 are conflict serializable
(B) S1 is conflict serializable and S2 is not conflict serializable
(C) S1 is not conflict serializable and S2 is conflict serializable
(D) Both S1 and S2 are not conflict serializable

## Q24 - Hint
<p>To test for conflict serializability, construct a precedence graph by drawing a directed edge from T<sub>i</sub> → T<sub>j</sub> if an operation of T<sub>i</sub> conflicts with an operation of T<sub>j</sub> and occurs before it. If the graph contains a cycle, the schedule is not conflict serializable.</p>

**Answer:** C

**Topic:** Transaction Concurrency: Conflict Serializability and Precedence Graphs

The correct option is C: S1 is not conflict serializable and S2 is conflict serializable.

**Why it is correct:**  
Analysis of <p style="word-break: break-word; font-family: sans-serif;"><strong>S<sub>1</sub>:</strong> S<sub>1</sub> = r<sub>1</sub>(X); r<sub>1</sub>(Y); r<sub>2</sub>(X); r<sub>2</sub>(Y); w<sub>2</sub>(Y); w<sub>1</sub>(X)</p>

  * Conflict on $Y$: $r_1(Y)$ happens before $w_2(Y) \rightarrow$ creates a dependency edge $T_1 \rightarrow T_2$.
  * Conflict on $X$: $r_2(X)$ happens before $w_1(X) \rightarrow$ creates a dependency edge $T_2 \rightarrow T_1$.
  * Since a bidirectional dependency exists ($T_1 \rightarrow T_2$ and $T_2 \rightarrow T_1$), a cycle is formed. Thus, $S_1$ is not conflict serializable.
  
Analysis of <p style="word-break: break-word; font-family: sans-serif;"><strong>S<sub>2</sub>:</strong> S<sub>2</sub> = r<sub>1</sub>(X); r<sub>2</sub>(X); r<sub>2</sub>(Y); w<sub>2</sub>(Y); r<sub>1</sub>(Y); w<sub>1</sub>(X) </p>

  * Conflict on $X$: $r_2(X)$ happens before $w_1(X) \rightarrow$ creates a dependency edge $T_2 \rightarrow T_1$.
  * Conflict on $Y$: $w_2(Y)$ happens before $r_1(Y) \rightarrow$ creates a dependency edge $T_2 \rightarrow T_1$.
  * There are no conflicting pairs where an operation of $T_1$ precedes $T_2$. Since the graph contains only a single directed path ($T_2 \rightarrow T_1$) with no cycles, $S_2$ is conflict serializable.
  
**Key Trap:** Glancing at the text too quickly and assuming they are identical because they share the same operations. Always check the relative positions of reading and writing the same variable across different transactions: Cycle in graph = Not Conflict Serializable.

**Summary Diagram and explaination:**

<div style="text-align: center;">
  <img width="65%" src="paper2-csa/topic-wise/dbms-01-assets/q24-transactions-schedule-diagram.jpeg">
</div>

* For Schedule $S_1$: We can clearly see a cycle in the diagram  ($T_1 \rightarrow T_2$ due to $r_1(Y) \rightarrow w_2(Y)$, and $T_2 \rightarrow T_1$ due to $r_2(X) \rightarrow w_1(X)$). This visual loop is the textbook proof that a schedule cannot be conflict serialized.
* For Schedule $S_2$: There no cycle exists in the diagram. Both conflicting pairs ($r_2(X) \rightarrow w_1(X)$ and $w_2(Y) \rightarrow r_1(Y)$) form one-way dependencies that flow uniformly from $T_2 \rightarrow T_1$.

---

## Q25
<p>Select the 'False' statement from the following statements about Normal Forms</p>

## Q25 - Options
(A) Lossless preserving decomposition into 3NF is always possible
(B) Lossless preserving decomposition into BCNF is always possible
(C) Any Relation with two attributes is in BCNF
(D) BCNF is stronger than 3NF

## Q25 - Hint
<p>Think about dependency preservation. While you can always break a table down into smaller parts without losing data (lossless), can you always keep all of your original functional dependency rules intact when going to the strictest forms like BCNF? (Here, functional dependency means one column value is dependent on other column)</p>

**Answer:** C

**Topic:** Normalization

The correct option (the False statement) is B.  
  
**Why B is false (The Core Concept):**  
  - Decomposition into BCNF (Boyce-Codd Normal Form) is guaranteed to be lossless (no data is lost when joining tables back together), but it is not always dependency-preserving (some functional dependencies might be lost across the separated tables). If a question states that achieving both simultaneously in BCNF is "always possible," it is false.  
  
**Why the other options are true:**  
  * A is True: It is a proven property that any relational schema can be decomposed into 3NF while being both lossless and dependency-preserving at the same time.  
  * C is True: A relation with exactly two attributes (e.g., $R(A, B)$) has only trivial functional dependencies ($A \rightarrow B$ or $B \rightarrow A$). Since the left-hand side of any non-trivial dependency will always be a superkey, it automatically satisfies the strict condition for BCNF.  
  * D is True: BCNF removes anomalies that 3NF allows (specifically when a non-prime attribute determines part of a candidate key). Therefore, BCNF is a stricter/stronger normal form than 3NF.

---
