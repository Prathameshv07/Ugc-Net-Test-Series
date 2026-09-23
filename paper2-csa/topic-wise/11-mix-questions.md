## Q1
A computer supports virtual memory with a 48-bit logical address space, 32-bit physical addresses, and uses a disk as the backing store.

Which of the following statements is TRUE regarding the relative sizes of these addressable spaces?

## Q1 - Options
(A) The logical address space must always be smaller than both physical memory and disk space.
(B) The physical memory must be larger than the logical address space to avoid page faults.
(C) The logical address space is larger than physical memory but typically smaller than disk storage.
(D) The logical address space is larger than physical memory but may be either smaller or larger than disk storage depending on implementation.

## Q2
In a relational database, which of the following are ensured specifically by integrity constraints?

1.No tuple in a table has a NULL value for attributes that are required.

2.A foreign key value in one table must match an existing primary key value in another table.

3.Users without proper privileges cannot read or modify sensitive data.

4.A candidate key uniquely identifies each record in a relation.

Options:

## Q2 - Options
(A) 1 and 2 only
(B) 1, 2, and 4 only
(C) 2 and 3 only
(D) 1, 3, and 4 only

## Q3
A process Q is currently executing on the CPU. Which of the following events guarantees that process Q will stop executing and enter either the ready or blocked state?

1.Q performs a system call that results in waiting for keyboard input.

2.A TLB miss occurs and the required page-table entry is in memory.

3.A hardware timer interrupt fires after the time slice allocated to Q expires.

4.A page fault occurs because Q referenced a page that is not in physical memory.

Which option is correct?

## Q3 - Options
(A) 1 and 4
(B) 1 and 3
(C) 2, 3, and 4
(D) 1, 3, and 4

## Q4
Let L1 and L2 be languages over ∑ = {a, b} represented by the regular expressions (a∗ + b)∗ and (a + b)∗ respectively.

Which of the following is true with respect to the two languages?

## Q4 - Options
(A) L1 ⊂ L2
(B) L2 ⊂ L1
(C) L1 = L2
(D) L1 ∩ L2 = ∅

## Q5
Consider the following statements:

A.A database design is in BCNF if each member of the set of relation schemas that constitutes the design is in BCNF

B.A BCNF schema can have transitive dependency

C.It is always possible to obtain a 3NF design without sacrificing a lossless join.

D.There are multivalued dependencies in 4NF

## Q5 - Options
(A) A, B and C only
(B) B, C and D only
(C) A, B and D only
(D) A, C and D only

## Q6
A process contains multiple user-level threads T1 and T2 that share the same address space. When the CPU switches execution from T1 to T2, which of the following state components must be preserved separately for each thread, and which need not be switched because they are shared at the process level?

1.Instruction pointer (program counter)

2.Kernel page-table base register

3.User-level stack pointer

4.CPU general-purpose registers

5.Open file table pointer

Which combination represents the set of items that must be saved and restored during a switch between T1 and T2?

## Q6 - Options
(A) 1, 3, and 4
(B) 2 and 5 only
(C) 1, 2, 3, and 4
(D) 1, 2, 4, and 5

## Q7
Let F = {D->AC, A->DB, B->E, E->D) that hold on the attribute set (A, B, C, D, E), then the highest normal form that hold is

## Q7 - Options
(A) BCNF
(B) 3NF
(C) 2NF
(D) None of the above

## Q8
Match List I with List II:

List I

List II

(A) Type 0

(I) Finite automata

(B) Type 1

(II) Tuning machine

(C) Type 2

(III) Linear bound automata

(D) Type 3

(IV) Pushdown automata

Choose the correct answer from the options given below:

## Q8 - Options
(A) A-III, B-IV, C-II, D-I
(B) A-II, B-III, C-IV, D-I
(C) A-III, B-IV, C-I, D-II
(D) A-II, B-III, C-II, D-IV

## Q9
Processes P1, P2, P3, P4 arrive in that order at times 0, 1, 2, and 8 milliseconds respectively, and have execution times of 10, 13, 6, and 9 milliseconds respectively. Shortest Remaining Time First (SRTF) algorithm is used as the CPU scheduling policy. Ignore context switching times.

Which ONE of the following correctly gives the average turnaround time of the four processes in milliseconds?

## Q9 - Options
(A) 22
(B) 15
(C) 37
(D) 19

## Q10
Consider the following statements about transaction management:

1.A dirty read occurs when a transaction reads data written by another uncommitted transaction.

2.The wait–die scheme allows only older transactions to wait and forces younger transactions to roll back.

3.In strict 2PL, exclusive locks are released only after the transaction commits or aborts.

4.The wound–wait scheme always rolls back the younger transaction, regardless of the age relationship.

Which of the above statements are correct?

Options:

## Q10 - Options
(A) 1, 2, and 3 only
(B) 1 and 4 only
(C) 2, 3, and 4 only
(D) All of the above

## Q11
A demand-paging system uses 3 page frames (initially empty) and the LRU (Least Recently Used) page replacement policy.

Given the following page reference string:

4, 1, 2, 1, 4, 3, 2, 5, 1, 2, 4, 3

What is the page fault rate?

## Q11 - Options
(A) 0.50
(B) 0.58
(C) 0.67
(D) 0.75

## Q12
Consider the following ER diagram :

<img height="138" src="paper2-csa/topic-wise/11-mix-assets/q12-6047bf.png" width="412"/>

In the above diagram double arrow represents multivalued attributes and bidirectional arrow represents primary key of the relation.

Which of the following statements is correct?

## Q12 - Options
(A) An Employee can work on any number of projects and each project can have at most one employee.
(B) Each Employee has to work on one project and each project has at most one employee
(C) An Employee can work on one project and each project can have any number of Employee
(D) An Employee can work on any number of projects and a project can have any number of employees.

## Q13
Which one of the following statements is FALSE?

## Q13 - Options
(A) The TLB performs an associative search in parallel on all its valid entries using page number of incoming virtual address.
(B) If the virtual address of a word given by CPU has a TLB hit, but the subsequent search for the word results in a cache miss, then the word will always be present in the main memory.
(C) The memory access time using a given inverted page table is always same for all incoming virtual addresses.
(D) In a system that uses hashed page tables, if two distinct virtual addresses V1 and V2 map to the same value while hashing, then the memory access time of these addresses will not be the same.

## Q14
Consider two entity sets A and B, each having simple, single-valued attributes and their own primary keys. There are two relationships between them:

X: a one-to-one relationship with no attributes

Y: a many-to-many relationship with no attributes

Assume total participation of A in relationship X, and partial participation of B in X.

Relationship Y has no participation constraints.

How many minimum tables are required when converting this ER design to the relational model?

Options:

## Q14 - Options
(A) 1
(B) 2
(C) 3
(D) 4

## Q15
Consider the following language:

L = { w ∈ {a,b,c}* : na(w) + nb(w) = nc(w)}

L is

## Q15 - Options
(A) Context free but not linear
(B) Not context free
(C) Context free and linear
(D) Linear

## Q16
Consider the following heap (figure) in which blank regions are not in use and hatched region are in use.

<img height="139" src="paper2-csa/topic-wise/11-mix-assets/q16-b63f5c.png" width="417"/>

The sequence of requests for blocks of sizes 300, 25, 125, 50 can be satisfied if we use

## Q16 - Options
(A) either first fit or best fit policy (any one)
(B) first fit but not best fit policy
(C) best fit but not first fit policy
(D) None of the above

## Q17
A database system uses row-level strict two-phase locking (strict 2PL).

Locks are applied only on individual rows, not on pages or ranges.

A transaction T1 wants to insert a new row into table R.

No other transaction holds any lock on that new row (because it does not exist yet).

Which lock must T1 acquire, and will that lock request conflict with any existing locks?

Options:

## Q17 - Options
(A) T1 must acquire a shared lock; it will conflict with existing shared locks.
(B) T1 must acquire an exclusive lock; it will be granted immediately because no row exists yet.
(C) T1 must acquire an exclusive lock; it will conflict with any shared locks on other rows.
(D) T1 does not acquire any lock to perform an insert.

## Q18
In a virtual memory system that uses paging, consider the following statements:

1.Increasing the page size generally reduces the size of the page table.

2.Paging completely eliminates both internal and external fragmentation.

3.Multi-level paging reduces memory overhead by allocating only the required portions of the page table.

4.Page size selection affects the TLB hit rate.

Which of the following options is correct?

## Q18 - Options
(A) 1 and 3 only
(B) 1, 3, and 4 only
(C) 2 and 4 only
(D) All of the above

## Q19
Consider the following languages:

L1 = {ww | w ∈ {a, b}* }

L2 = {anbncm| m, n≥ 0}

L3 = {ambncn| m, n≥ 0}

Which of the following statements is/are FALSE?

I. L1 is not context-free but L2 and L3 are deterministic context-free.

II. Neither L1 nor L2 is context-free.

III. L2, L3, and L2 ∩ L3 all are context-free.

IV. Neither L1 nor its complement is context-free.

## Q19 - Options
(A) I, II & III
(B) II, III & IV
(C) I & III
(D) All of the above

## Q20
Which of the following statements correctly identifies what can constitute a single transaction in a relational database system that follows the ACID properties?

1.A set of DML operations that together form a logical unit of work within one database session.

2.A DDL command that implicitly commits before and after execution, treated as its own standalone transaction by the DBMS.

3.A set of DML and DDL statements executed across multiple sessions, as long as they target the same database.

4.A COMMIT or ROLLBACK statement, because they mark the boundaries of a transaction.

Options:

## Q20 - Options
(A) 1 and 2 only
(B) 1 and 4 only
(C) 2 and 3 only
(D) 1, 2, and 4 only

## Q21
In a CPU scheduling system, a high-priority process P keeps arriving frequently. A lower-priority process Q is ready to run but never gets CPU time because P continuously preempts it. Over time, Q makes no progress, even though no resources are held by Q or any other process.

What is this situation an example of?

## Q21 - Options
(A) Deadlock
(B) Starvation
(C) Priority inversion
(D) Aging

## Q22
The relation scheme Student Performance (name, courseNo, rollNo, grade) has the following functional dependencies:

name, courseNo, → grade

rollNo, courseNo → grade

name → rollNo

rollNo → name

The highest normal form of this relation scheme is

## Q22 - Options
(A) 2NF
(B) 3NF
(C) BCNF
(D) 4NF

## Q23
Let M be the 5-state NFA with ∈-transitions shown in the diagram below.

Which one of the following regular expressions represents the language accepted by M?

<img height="171" src="paper2-csa/topic-wise/11-mix-assets/q23-9e2c3f.png" width="226"/>

## Q23 - Options
(A) (00)* + 1(11)*
(B) 0* + (1 + 0(00)*)(11)*
(C) (00)* + (1 + (00)*)(11)*
(D) 0+ + 1(11)* + 0(11)*

## Q24
If a processor has 32-bit virtual address, 28-bit physical address, 2 kB page size. How many bits are required for the virtual, physical page number?

## Q24 - Options
(A) 17, 21
(B) 21, 17
(C) 16, 10
(D) None of the above

## Q25
For the schedule given below, which of the following is correct:

<img width="75%" src="paper2-csa/topic-wise/11-mix-assets/q25-426267.png"/>

## Q25 - Options
(A) This schedule is serializable and can occur in a scheme using 2PL protocol
(B) This schedule is serializable but cannot occur in a scheme using 2PL protocol
(C) This schedule is not serializable but can occur in a scheme using 2PL protocol
(D) This schedule is not serializable and cannot occur in a scheme using 2PL protocol
