## Q1
Given items as {value,weight} pairs {% raw %}{{40,20},{30,10},{20,5}}{% endraw %}. The capacity of knapsack=20. Find the maximum value output assuming items to be divisible.

## Q1 - Options
(A) 60
(B) 80
(C) 100
(D) 40

## Q2
A hash table with 10 buckets with one slot per bucket is depicted here. The symbols, S1 to S7 are initially entered using a hashing function with linear probing. The maximum number of comparisons needed in searching an item that is not present is

<!-- <img width="75%" src="paper2-csa/topic-wise/08-dda-assets/q2-c5ce92.png" /> -->

| Index | Value |
|---|---|
| 0 | S7 |
| 1 | S1 |
| 2 | |
| 3 | S4 |
| 4 | S2 |
| 5 | |
| 6 | S5 |
| 7 | |
| 8 | S6 |
| 9 | S3 |

## Q2 - Options
(A) 4
(B) 5
(C) 6
(D) 3

## Q3
Which of the following statement about 0/1 knapsack and fractional knapsack problem is correct?

## Q3 - Options
(A) In 0/1 knapsack problem items are divisible and in fractional knapsack items are indivisible
(B) Both are the same
(C) 0/1 knapsack is solved using a greedy algorithm and fractional knapsack is solved using dynamic programming
(D) In 0/1 knapsack problem items are indivisible and in fractional knapsack items are divisible

## Q4
If one uses straight two-way merge sort algorithm to sort the following elements in ascending order: 20, 47, 15, 8, 9, 4, 40, 30, 12, 17 then the order of these elements after second pass of the algorithm is:

## Q4 - Options
(A) 8, 9, 15, 20, 47, 4, 12, 17, 30, 40
(B) 8, 15, 20, 47, 4, 9, 30, 40, 12, 17
(C) 15, 20, 47, 4, 8, 9, 12, 30, 40, 17
(D) 4, 8, 9, 15, 20, 47, 12, 17, 30, 40

## Q5
Consider the following statements:

I. The smallest element in a max-heap is always at a leaf node

II. The second largest element in a max-heap is always a child of the root node

III. A max-heap can be constructed from a binary search tree in Θ(n) time

IV. A binary search tree can be constructed from a max-heap in Θ(n) time

Which of the above statements are TRUE?

## Q5 - Options
(A) I, II and III
(B) II, III and IV
(C) I, III and IV
(D) I, II and IV

## Q6
GIven below are some algorthims, and some algothim design paradigms

(1) Dijkstra's Shortest Path (i) Divide and Conquer

(2) Floyd-Warshall algorithm to compute all pairs shortest path (ii) Dynamic Programming

(3) Binary search on a sorted amay                     (iii) Greedy design

(4) Backtracking search on a graph (iv) Depth-first search

(v) Breadth-first search

## Q6 - Options
(A) 1-i, 2-iii, 3-i, 4-v.
(B) 1-iii, 2-iii, 3-i, 4-v.
(C) 1-iii, 2-ii, 3-i, 4-iv.
(D) 1-iii, 2-ii, 3-i, 4-v.

## Q7
The asymptotic upper bound solution of the recurrence relation given by

[MATH: T(n)=2T(n2)+nlg⁡n is :  — ⚠ verify/convert to $...$ manually]

## Q7 - Options
(A) O(n2)
(B) O(n (lg n))
(C) O(nlg( lg n))
(D) O(lg( lg n))

## Q8
The order of a leaf node in a B+ tree is the maximum number of children it can have. Suppose that block size is 1 kilobytes, the child pointer takes 7 bytes long and search field value takes 14 bytes long. The order of the leaf node is ________.

## Q8 - Options
(A) 16
(B) 63
(C) 64
(D) 68

## Q9
Fractional knapsack problem is solved most efficiently by which of the following algorithm?

## Q9 - Options
(A) Backtracking
(B) Greedy algorithm
(C) Dynamic programming
(D) Divide and conquer

## Q10
Let G be a connected planar graph with 10 vertices. If the number of edges on each face is three, then the number of edges in G is _______________.

## Q10 - Options
(A) 24
(B) 25
(C) 26
(D) 27

## Q11
A hash function h defined h(key)=key mod 7, with linear probing, is used to insert the keys 44, 45, 79, 55, 91, 18, 63 into a table indexed from 0 to 6. What will be the location of key 18 ?

## Q11 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q12
Suppose you have coins of denominations 1,3 and 4. You use a greedy algorithm, in which you choose the largest denomination coin which is not greater than the remaining sum. For which of the following sums, will the algorithm produce an optimal answer?

## Q12 - Options
(A) 100
(B) 10
(C) 6
(D) 14

## Q13
Floyd-Warshall algorithm utilizes __________ to solve the all-pairs shortest paths problem on a directed graph in __________ time.

## Q13 - Options
(A) Greedy algorithm, θ (V^3)
(B) Greedy algorithm, θ (V^2 lgn)
(C) Dynamic programming, θ (V^3)
(D) Dynamic programming, θ (V^2 lgn)

## Q14
How many distinct binary search trees can be created out of 4 distinct keys?

## Q14 - Options
(A) 5
(B) 14
(C) 24
(D) 35

## Q15
Consider the recurrence relation:

<!-- <img src="08-dda-assets/q15-ac9dd7.png"/> -->

$\begin{aligned} T(n) &= 8T\left(\frac{n}{2}\right) + Cn, \quad \text{if } n > 1 \\ &= b, \quad \text{if } n = 1 \end{aligned}$

Where b and c are constants. The order of the algorithm corresponding to above recurrence relation is:

## Q15 - Options
(A) n
(B) n^2
(C) n log n
(D) n^3

## Q16
Which of the following is false in the case of a spanning tree of a graph G?

## Q16 - Options
(A) It is tree that spans G
(B) It is a subgraph of the G
(C) It includes every vertex of the G
(D) It can be either cyclic or acyclic

## Q17
A priority queue is implemented as a max-heap. Initially, it has five elements. The level-order traversal of the heap is as follows: 20, 18, 15, 13, 12 Two new elements ‘10’ and ‘17’ are inserted in the heap in that order. The level-order traversal of the heap after the insertion of the element is:

## Q17 - Options
(A) 20, 18, 17, 15, 13, 12, 10
(B) 20, 18, 17, 12, 13, 10, 15
(C) 20, 18, 17, 10, 12, 13, 15
(D) 20, 18, 17, 13, 12, 10, 15

## Q18
Which one of the following is the tightest upper bound that represents the time complexity of inserting an object into a binary search tree of n nodes?

## Q18 - Options
(A) O(1)
(B) O(log n)
(C) O(n)
(D) O(n log n)

## Q19
In a compact one dimensional array representation for lower triangular matrix (all elements above diagonal are zero) of size n x n, non zero elements of each row are stored one after another, starting from first row, the index of (i, j)th element in this new representation is

## Q19 - Options
(A) i+j
(B) (j-1)+i(i-1)/2
(C) i+j-1
(D) i+j(j-1)/2

## Q20
The following numbers are inserted into an empty binary search tree in the given order: 10, 1, 3, 5, 15, 12, 16 What is the height of the binary search tree ?

## Q20 - Options
(A) 3
(B) 4
(C) 5
(D) 6

## Q21
The postfix expression for the infix expression A+B (C+D)/F+D* E is

## Q21 - Options
(A) AB+ CD + *F/D+E*
(B) ABCD + *F/DE* ++
(C) CA*B +CD/F*DE++
(D) DA+ *BCD/F*DE++

## Q22
Which of the following sorting algorithms is the fastest for sorting small arrays?

## Q22 - Options
(A) Quick sort
(B) Shell sort
(C) Insertion sort
(D) Heap sort

## Q23
Which of the following sorting algorithm uses the method of insertion?

## Q23 - Options
(A) selection sort
(B) quick sort
(C) bubble sort
(D) cycle sort

## Q24
Postorder traversal of a given binary search tree T produces following sequence of keys: 3, 5, 7, 9, 4, 17, 16, 20, 18, 15, 14 Which one of the following sequences of keys can be the result of an in-order traversal of the tree T?

## Q24 - Options
(A) 3, 4, 5, 7, 9, 14, 20, 18, 17, 16, 15
(B) 20, 18, 17, 16, 15, 14, 3, 4, 5, 7, 9
(C) 20, 18, 17, 16, 15, 14, 9, 7, 5, 4, 3
(D) 3, 4, 5, 7, 9, 14, 15, 16, 17, 18, 20

## Q25
Consider the following nested representation of binary trees: (X Y Z) indicates Y and Z are the left and right sub stress, respectively, of node X. Note that Y and Z may be NULL, or further nested. Which of the following represents a valid binary tree?

## Q25 - Options
(A) (1 2 (4 5 6 7))
(B) (1 (2 3 4) 5 6) 7)
(C) (1 (2 3 4)(5 6 7))
(D) (1 (2 3 NULL) (4 5))
