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

## Q2
<p>Properties of ‘DELETE’ and ‘TRUNCATE’ commands indicate that?</p>

## Q2 - Options
(A) ANDAfter the execution of ‘TRUNCATE’ operation, COMMIT, and ROLLBACK statements can be performed to retrieve the lost data, while ‘DELETE’ does not allow it.
(B) After the execution of ‘DELETE’ and ‘TRUNCATE’ operation retrieval is easily possible for the lost data
(C) After the execution of ‘DELETE’ operation, COMMIT and ROLLBACK statements can be performed to retrieve the lost data., while TRUNCATE do not allow it
(D) After the execution of ‘DELETE’ and ‘TRUNCATE’ operation no retrieval is possible for the lost data

## Q2 - Hint
<p>When comparing <b>DELETE vs TRUNCATE</b>, immediately think <b>DML vs DDL</b>—<code>DELETE</code> is logged and can be rolled back, while <code>TRUNCATE</code> is a structural reset that implicitly commits and cannot be rolled back.</p>

## Q3
<p>Which SQL statement best retrieves rows where a matching record does NOT exist in a related table?</p>

## Q3 - Options
(A) INNER JOIN
(B) UNION
(C) EXISTS
(D) NOT EXISTS

## Q3 - Hint
<p>When a question asks to find records where a matching record <b>does NOT exist</b> in a related table, look directly for the <code>NOT EXISTS</code> or <code>NOT</code> IN predicate.</p>

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

## Q5
<p>Given a block can hold either 3 records or 10 key pointers. A database contains n records, then how many blocks do we need to hold the data file and the dense index</p>

## Q5 - Options
(A) 13n/30
(B) n/3
(C) n/10
(D) n/30

## Q5 - Hint
<p>When calculating the total blocks for a data file AND a dense index, immediately think: "Total blocks = (Blocks for n records) + (Blocks for n index pointers)."</p>

## Q6
<p>Which of the following statements is FALSE about weak entity set?</p>

## Q6 - Options
(A) Weak entities can be deleted automatically when their strong entity is deleted.
(B) Weak entity set avoids the data duplication and consequent possible inconsistencies caused by duplicating the key of the strong entity.
(C) A weak entity set has no primary keys unless attributes of the strong entity set on which it depends are included.
(D) Tuples in a weak entity set are not partitioned according to their relationship with tuples in a strong entity set.

## Q6 - Hint
<p>When evaluating properties of a weak entity set, remember that because its existence depends entirely on a strong entity, tuples in a weak entity set are logically partitioned based on their relationship with the owner strong entity tuples.</p>

## Q7
<p>Consider a relation R(A, B, C), which of the following statements is not true according to inference rules for functional dependencies?</p>

## Q7 - Options
(A) If A → B and B → C, then A → C
(B) If AB → C, then A → B and B → C
(C) If A → B and A → C, then A → BC
(D) If A → B, then AC → BC

## Q7 - Hint
<p>When evaluating Armstrong's Axioms or inference rules, remember that <b>you cannot split attributes on the left-hand side (determinant) of a functional dependency.</b></p>

## Q8
<p>Which of the following is characteristic of an MIS?</p>

## Q8 - Options
(A) Provides guidance in identifying problems, finding and evaluating alternative solutions, and selecting or comparing alternatives.
(B) Draws on diverse yet predictable data resources to aggregate and summarize data.
(C) High volume, data capture focus.
(D) Has as its goal the efficiency of data movement and processing and interfacing different TPS.

## Q8 - Hint
<p>When distinguishing between information systems, remember that <b>MIS takes structured data from a Transaction Processing System (TPS) to aggregate and generate structured, predictable summaries and reports for managers.</b></p>

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

## Q10
<p>For a database relation R(A, B, C, D) where the domains of A, B, C and D include only atomic values, only the following functional dependencies and those that can be inferred from them are : A → C B → D The relation R is in _______.</p>

## Q10 - Options
(A) First normal form but not in second normal form.
(B) Both in first normal form as well as in second normal form.
(C) Second normal form but not in third normal form.
(D) Both in second normal form as well as in third normal form.

## Q10 - Hint
<p>When a composite candidate key exists and you see a dependency where a <b>proper subset of that key determines a non-prime attribute</b>, immediately identify it as a <b>partial dependency</b>, which violates <b>2NF</b>.</p>

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

## Q12
<p>Consider a relational table R that is in 3NF, but not in BCNF. Which one of the following statements is TRUE?</p>

## Q12 - Options
(A) A cell in R holds a set instead of an atomic value.
(B) R has a nontrivial functional dependency X → A, where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key.
(C) R has a nontrivial functional dependency X → A, where X is not a superkey and A is a non-prime attribute and X is a proper subset of some key.
(D) R has a nontrivial functional dependency X → A, where X is not a superkey and A is a prime attribute.

## Q12 - Hint
<p>When a relation satisfies 3NF but fails BCNF, immediately think: "There must be a non-trivial dependency X → A where the left side X is NOT a superkey, but the right side A IS a prime attribute."</p>

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

## Q15
<p>A relation in which every non-key attribute is fully functionally dependent on the primary key and which has no transitive dependencies is said to be in:</p>

## Q15 - Options
(A) BCNF
(B) 2NF
(C) 3NF
(D) 4NF

## Q15 - Hint
<p>When a definition explicitly mentions no partial dependencies (fully functionally dependent on the primary key) AND no transitive dependencies for non-key attributes, it is the textbook definition of 3NF.</p>

## Q16
<p>Let x, y, z, a, b, c be the attributes of an entity set E. If {x}, {x,y}, {a,b}, {a,b,c}, {x,y,z} are superkeys then which of the following are the candidate keys?</p>

## Q16 - Options
(A) {x,y} and {a,b}
(B) {x} and {a,b}
(C) {x,y,z} and {a,b,c}
(D) {z} and {c}

## Q16 - Hint
<p>When asked to find candidate keys from a list of given superkeys, immediately think: "Candidate keys are minimal superkeys." Look for the sets that do not contain any other smaller superkey as a proper subset.</p>

## Q17
<p>Let R (ABCDEFGH) be a relation schema and F be the set of dependencies F = {A → B, ABCD → E, EF → G, EF → H and ACDF →EG}. The minimal cover of a set of functional dependencies is</p>

## Q17 - Options
(A) A → B, ACD → E, EF → G, and EF → H
(B) A → B, ACD → E, EF → G, EF → H and ACDF → G
(C) A → B, ACD → E, EF → G, EF → H and ACDF → E
(D) A → B, ABCD → E, EF → H and EF → G

## Q17 - Hint
<p>When finding a minimal cover, perform three essential steps: decompose right-hand sides into single attributes, remove extraneous attributes from the left-hand sides using attribute closures, and eliminate redundant dependencies that can be transitively derived.</p>

## Q18
<p>Trigger is</p>

## Q18 - Options
(A) Statement that enables to start any DBMS
(B) Statement that is executed by the user when debugging an application program
(C) The condition that the system tests for the validity of the database user
(D) Statement that is executed automatically by the system as a side effect of a modification of the database

## Q18 - Hint
<p>When you see the word Trigger, immediately think: "Event-Driven / Automatic Execution." A trigger is never manually run by a user; it fires automatically in response to database modifications (INSERT, UPDATE, DELETE).</p>

## Q19
<p>Set of key attributes that identify weak entities related to some owner entity is classified as:</p>

## Q19 - Options
(A) Structural key
(B) String key
(C) Partial key
(D) Foreign key

## Q19 - Hint
<p>When you see a question about the specific attributes used to uniquely distinguish weak entities under the same owner strong entity, immediately think of a partial key (also called a discriminator).</p>

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

## Q22
<p>After groups have been established, SQL applies predicates in the ___________ clause, allowing aggregate functions to be used.</p>

## Q22 - Options
(A) Where
(B) Having
(C) Group by
(D) With

## Q22 - Hint
<p>When a predicate or condition needs to be applied after groups have been established or involves aggregate functions (like SUM, COUNT, AVG), immediately think of the HAVING clause.</p>

## Q23
<p>The top level of the hierarchy consists of ______ each of which can contain _____.</p>

## Q23 - Options
(A) Schemas, Catalogs
(B) Schemas, Environment
(C) Environment, Schemas
(D) Catalogs, Schemas

## Q23 - Hint
<p>When dealing with the hierarchical naming structure of contemporary relational database objects (like tables and views), think of a standard operating system's multi-level file path directory. The containment direction flows from Catalogs → Schemas → Objects.</p>

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

## Q25
<p>Select the 'False' statement from the following statements about Normal Forms</p>

## Q25 - Options
(A) Lossless preserving decomposition into 3NF is always possible
(B) Lossless preserving decomposition into BCNF is always possible
(C) Any Relation with two attributes is in BCNF
(D) BCNF is stronger than 3NF

## Q25 - Hint
<p>Think about dependency preservation. While you can always break a table down into smaller parts without losing data (lossless), can you always keep all of your original functional dependency rules intact when going to the strictest forms like BCNF? (Here, functional dependency means one column value is dependent on other column)</p>
