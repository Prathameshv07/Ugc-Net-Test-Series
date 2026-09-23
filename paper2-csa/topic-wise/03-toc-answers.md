## Q1

**Answer:** D

### 1. Topic
Regular Language Models: Regular Expressions and their Properties (Unit 8: Theory of Computation and Compilers)

### 2. Hint / Brain Trigger
When I see **regular expression algebraic identities** involving the **null set ($\phi$)** concatenated with a regular expression $R$ ($\phi R$), I should immediately think of **annihilation ($\phi R = \phi$)**, making $R$ incorrect.

### 3. Solution
- **Correct Option:** (D)
- **Why it is correct:** In regular expression algebra, $\phi$ represents the empty set (no strings). Concatenating any regular expression $R$ with an empty set results in an empty set ($\phi R = \phi$), not $R$. 
- **Why other options are wrong:** 
  - (A) $\phi + R = R$ is correct because the union of an empty set and language $R$ is $R$ (identity element for union).
  - (B) $R^* R^* = R^*$ is correct by the closure property of Kleene star (repeating zero or more times twice is equivalent to repeating zero or more times).
  - (C) $\land R = R$ (where $\land$ or $\epsilon$ is the empty string) is correct because concatenating the empty string with $R$ leaves $R$ unchanged.
- **Key Trap:** Confusing the **additive identity ($\phi$)** with the **multiplicative/concatenative identity ($\epsilon$ or $\land$)**. 
- **Rule to remember:** $\phi + R = R$ (Addition/Union identity), but $\phi R = \phi$ (Annihilation).

---

## Q2

**Answer:** A

### 1. Topic
**Unit - 8: Theory of Computation and Compilers** (Sub-topic: *Turing Machines (TM): Standard Turing Machine and its Variations*)

---

### 2. Hint / Brain Trigger
> **“When I see mechanical components of a Turing machine, I should immediately think of a finite control, an infinite input tape, and a read-write head.”**

---

### 3. Solution
- **Correct Option:** (A) Queue
- **Explanation:** A standard Turing machine consists of three basic components: an **infinite tape** (for data storage), a **read-write head** (to read, write, and move along the tape), and a **finite control** (which maintains the current state and transitions). 
- **Why others are wrong:** Options (B), (C), and (D) are all fundamental physical components of a Turing machine's definition. A **Queue** belongs to the definition of a queue-based automaton or standard data structures, not a Turing machine.
- **Key Trap:** Confusing the memory structures of different automata (e.g., Pushdown Automata use a *stack*, while Turing machines use a *tape*).

---

## Q3

**Answer:** A

### 1. Topic
**Deterministic Finite Automaton (DFA)** / Regular Language Models (Unit 8: Theory of Computation)

### 2. Hint / Brain Trigger
When I see a **Finite Automaton diagram**, I should immediately **test short test-strings like the empty string, or the exact suffix/prefix condition** against the final state to match the regular expression.

### 3. Solution
- **Correct Option:** (A) `{1, 0}* {01}`
- **Explanation:** The DFA accepts strings that culminate in the specific sequence "01". The term `{1, 0}*` (equivalent to $(0+1)^*$) represents any arbitrary combination of 0s and 1s (including the empty string) appearing before the required ending suffix `{01}`.
- **Trap / Confusion:** Option (C) tests for strings *starting and ending* with 1, whereas Option (D) describes strings of any number of 1s followed by 0s. Always trace the transition path from the start state to the final accepting state to verify the exact ending suffix condition.

---

## Q4

**Answer:** A

### 1. Topic
**Context-Free Language: Chomsky Normal Form (CNF)** (Unit 8: Theory of Computation and Compilers)

### 2. Hint / Brain Trigger
When I see **"Chomsky normal form grammar"** and **"string of $n$ terminals"**, I should immediately think of the production count formula **$2n - 1$**.

### 3. Solution
- **Correct Option:** (A) $2n - 1$
- **Explanation:** In **Chomsky Normal Form (CNF)**, every production rule is strictly in one of two forms: $A \rightarrow BC$ (two variables) or $A \rightarrow a$ (a single terminal). To derive a string of length $n$ terminals, a parse tree will have $n$ leaf nodes (terminals) and $n-1$ internal nodes (non-terminal expansions of the form $A \rightarrow BC$). 
- **Production Count:** 
  - Exactly **$n$** productions of the form $A \rightarrow a$ are required to generate the $n$ terminals.
  - Exactly **$n - 1$** productions of the form $A \rightarrow BC$ are required to combine the variables.
  - Total productions = $n + (n - 1) =$ **$2n - 1$**.
- **Trap / Shortcut:** Do not confuse this with parse tree nodes or derivation steps. Always remember: CNF terminal productions = $n$, variable productions = $n-1$, yielding **$2n - 1$** total.

---

## Q5

**Answer:** D

### 1. Topic
Regular Language Models (Properties of Regular Languages)

### 2. Hint / Brain Trigger
When I see **language complement $L'$ over alphabet $\{a, b\}$**, I should immediately think of **subtracting the strings of $L$ from the universal set $\Sigma^*$ and combining the remaining missing lengths and strings**.

### 3. Solution
- **Correct Option:** **(D)**
- **Explanation:** 
  - The language $L = \{aa, bb\}$ contains only strings of length 2.
  - The complement of $L$ ($L'$) consists of all strings in the universal set $\Sigma^* = \{a, b\}^*$ *except* $aa$ and $bb$.
  - These excluded strings of length 2 are missed from the set of all possible lengths. Therefore, $L'$ must contain all strings of length 0 ($\lambda$), length 1 ($a, b$), and length 2 except $aa, bb$ (which gives $ab, ba$), combined with all strings of length $\ge 3$ (since none of length $\ge 3$ are in $L$).
  - **Key Trap:** Option (D) correctly uses $|w| \ge 3$ because strings of length 3 and above are entirely absent from $L$, so they all belong to its complement. Option (A) and (B) mistakenly use $|w| > 3$, missing strings of length exactly 3.

---

## Q6

**Answer:** C

### 1. Topic
Properties of Regular Language (Closure Properties) — Unit 8: Theory of Computation

### 2. Hint / Brain Trigger
> **“When I see closure properties involving union, intersection, and complementation, I should immediately think of De Morgan's laws: $L_1 \cap L_2 = \overline{\overline{L_1} \cup \overline{L_2}}$.”**

### 3. Solution
- **Correct Option:** **C** ((A) is true, (B) is false)
- **Explanation:** 
  - **Statement (A) is True:** By De Morgan’s laws, intersection can be expressed using union and complementation ($L_1 \cap L_2 = \overline{\overline{L_1} \cup \overline{L_2}}$). Therefore, if a class of languages is closed under both union and complementation, it is guaranteed to be closed under intersection.
  - **Statement (B) is False:** Closure under union and intersection does *not* imply closure under complementation. For example, Context-Free Languages (CFLs) are closed under union and intersection (with regular sets), but they are *not* closed under complementation.
- **Key Trap:** Assuming that any symmetric combination of set operations yields closure under the third. Always use De Morgan's dual relationship ($A \cap B = \overline{\overline{A} \cup \overline{B}}$) to test intersections from unions/complements.

---

## Q7

**Answer:** C

### 1. Topic
**Context Free Grammar (CFG)** (Unit - 8: Theory of Computation and Compilers)

### 2. Hint / Brain Trigger
> **“When I see $n_0(w) > n_1(w)$, I should immediately look for a production rule that generates more `0`s than `1`s, such as matching `0`, `0S`, and asymmetric combinations like `1SS`, `S1S`, or `SS1`.”**

### 3. Solution
- **Correct Option:** **(C)** $S \rightarrow 0 \mid 0S \mid 1SS \mid S1S \mid SS1$
- **Why it is correct:** The grammar must generate strings where the count of `0`s strictly exceeds the count of `1`s ($n_0(w) > n_1(w)$). Option (C) includes base cases like `0` and recursive rules (`0S`) that add a `0` without adding a `1`, as well as rules containing a single `0` and multiple `1`s (`1SS`, `S1S`, `SS1`) which maintain or increase the surplus of `0`s relative to `1`s during derivation.
- **Why other options are wrong:**
  - (A) Fails to generate certain valid strings like `10001` because it lacks symmetric placement for generating extra `0`s around `1`s.
  - (B) Generates a single `1` (via $S \rightarrow 1$), which violates the condition $n_0(w) > n_1(w)$.
  - (D) Generates both single `0` and single `1` without enough growth mechanisms to guarantee $n_0(w) > n_1(w)$ for all combinations.
- **Key Trap:** Confusing grammars for equal counts ($n_0 = n_1$) with strict inequality counts ($n_0 > n_1$), or accidentally allowing strings containing only `1`s via terminal generation rules like $S \rightarrow 1$.

---

## Q8

**Answer:** B

### 1. Topic
Regular Language Models: Regular Expressions, DFA, and NFA (Unit 8: Theory of Computation and Compilers).

### 2. Hint / Brain Trigger
When I see **"every language defined by a regular expression can be represented using a DFA"**, I should immediately think of **Kleene's Theorem and epsilon-moves ($\epsilon$-moves)**, recognizing that REs map directly to **NFAs with $\epsilon$-moves**, not directly to DFAs without intermediate conversion.

### 3. Solution
- **Correct Option:** B is the "not true" statement (the correct answer to the question).
- **Explanation:** While regular expressions, DFAs, NFAs, and $\epsilon$-NFAs all define the exact same class of languages (regular languages), a regular expression cannot be *directly* represented as a standard DFA without subset construction/conversion. Specifically, constructing an automaton from a regular expression inherently requires **$\epsilon$-moves** (Thompson's construction) to handle operators like union, concatenation, and Kleene closure.
- **Why others are correct (and thus eliminated):** 
  - (A), (C), and (D) correctly state that regular expressions and various automata (including $\epsilon$-NFAs) are equivalent representations for regular languages.
- **Key Trap:** Confusing *language equivalence* (all define regular languages) with *direct representation capability* (REs naturally translate to $\epsilon$-NFAs, requiring conversion algorithms to become DFAs).

---

## Q9

**Answer:** A

### 1. Topic
Regular Expressions (Unit 8: Theory of Computation)

### 2. Hint / Brain Trigger
> **“When I see subset relationships between regular expressions like $s = aa^*b$ and $t = a^*b$, I should immediately expand the Kleene star and compare generated string prefixes.”**

### 3. Solution
- **Correct Option:** (A) Only (i) is correct.
- **Explanation:** 
  - $s = aa^*b$ generates strings starting with at least one $a$ followed by $b$. 
  - $t = a^*b = (\epsilon + a)a^*b$ generates strings starting with zero or more $a$'s followed by $b$. Since every string in $L(s)$ is also generated by $L(t)$, we have $L(s) \subseteq L(t)$.
  - $r = a(a+b)^*$ generates any string starting with $a$. Since $L(s)$ generates strings starting with $a$ ending in $b$, every string in $L(s)$ is also in $L(r)$, making $L(s) \subseteq L(r)$. Thus, statement (i) is correct.
  - Statement (ii) is false because $L(r)$ contains strings that do not end in $b$ (e.g., $aa$), which are not present in $L(s)$, meaning $L(r) \not\subseteq L(s)$.
- **Key Trap:** Assuming unconstrained regular expressions like $r = a(a+b)^*$ are subsets of restricted ones like $t = a^*b$. Always test prefix constraints and specific ending conditions.

---

## Q10

**Answer:** C

### 1. Topic
Complexity Theory: P and NP Class Problems (Unit 7: Data Structures and Algorithms / Unit 8: Theory of Computation)

### 2. Hint / Brain Trigger
When I see **NP problems**, I should immediately think of **"Non-deterministic Polynomial-time verification"**.

### 3. Solution
- **Correct Option:** **(C)**
- **Explanation:** By definition, **NP** stands for **Non-deterministic Polynomial** time. It is the class of decision problems for which a given candidate solution (certificate) can be **verified** in polynomial time by a **non-deterministic** Turing machine (or guessed and verified in polynomial time by a deterministic machine).
- **Why others are wrong:** 
  - (A) Branch and bound is an algorithmic design technique used for optimization problems, not a definition of NP.
  - (B) NP problems have non-deterministic polynomial-time solutions, not deterministic exponential-time solutions (that relates to NEXPTIME, or brute-force deterministic approaches).
  - (D) It is an open question whether NP problems can be solved in polynomial time ($P \stackrel{?}{=} NP$).
- **Key Trap:** Confusing the *definition* of NP (solved in polynomial time by a non-deterministic machine / verified in polynomial time) with the assumption that they can be efficiently solved ($P = NP$).
- **Non-trivial Technical Term:** **Non-deterministic Turing Machine (NDTM)** is a theoretical model of computation that can "guess" the correct path among multiple choices simultaneously.

---

## Q11

**Answer:** B

### 1. Topic
Regular Language Models (Unit 8: Theory of Computation and Compilers)

### 2. Hint / Brain Trigger
When I see **"language generated from simple primitive language / regular language"** in a question, I should immediately think of **"Finite Automata requiring no auxiliary memory."**

### 3. Solution
- **Correct Option:** **(B)**
- **Explanation:** A language is **regular** if and only if it can be accepted by a finite automaton (a device with a finite number of states). Because it relies solely on a fixed set of states, it requires **no auxiliary memory** (such as a stack or tape). 
- **Why others are wrong:** Option (A) is incorrect because finite automata use *finite* states, not infinite states. Option (C) becomes invalid since (A) is incorrect.
- **Key Trap:** Confusing regular languages with more powerful models like Pushdown Automata (which require stack memory) or Turing Machines (which require infinite memory/tape). 
- **Rule:** Simple primitive languages map to regular languages $\rightarrow$ recognized by Finite Automata $\rightarrow$ **zero auxiliary memory**.

---

## Q12

**Answer:** B

### 1. Topic
Context Free Language: Context Free Grammar (CFG) and Palindrome Generation

### 2. Hint / Brain Trigger
**When I see** symmetric grammar productions like $S \rightarrow aSa \mid bSb$, **I should immediately think of** generating even and odd palindromes.

### 3. Solution
- **Correct Option:** (B) `baba`
- **Explanation:** The given grammar productions ($S \rightarrow aSa \mid bSb \mid a \mid b \mid \epsilon$) append the same terminal to both sides of a string, which inherently generates **palindromes** (strings that read the same forwards and backwards). 
- Testing the options:
  - (A) `aaaa` is a palindrome ($\text{a} \rightarrow \text{a} \rightarrow \text{a} \rightarrow \text{a}$).
  - (C) `abba` is a palindrome ($\text{a} \rightarrow \text{b} \rightarrow \text{b} \rightarrow \text{a}$).
  - (D) `Babaaabab` contains characters or patterns outside the valid string format, but focusing on standard tests, option (B) fails outright because **`baba` is not a palindrome** (reversed, it becomes `abab`).
- **Key Trap:** Confusing standard string matching with structural symmetry rules defined by recursive productions.

---

## Q13

**Answer:** A

### 1. Topic
Unit - 8: Theory of Computation and Compilers — Unsolvable Problems and Computational Complexity (Decidability of Context-Free Languages and Finite State Machines)

### 2. Hint / Brain Trigger
When I see **"finite state machine accept string"** or **"context free grammar generate infinite strings"**, I should immediately think **both are decidable because FSM always halts and CFL finiteness can be tested using the pumping length ($n$ to $2n-1$).**

### 3. Solution
- **Correct Option:** (A) Both (P1) and (P2) are decidable.
- **Explanation:** 
  - **(P1)** A Finite State Machine (FSM) always halts on any input string in either a final or non-final state, making the acceptance problem **decidable**.
  - **(P2)** To check if a Context-Free Grammar (CFG) generates an infinite number of strings, we test whether it generates *any* string of length between $n$ and $2n-1$ (where $n$ is the pumping lemma constant). If such a string exists, the language is infinite; otherwise, it is finite. Thus, this property is also **decidable**.
- **Key Trap / Confusion:** Students often confuse "finiteness of a CFL" with questions like "emptiness/universality of a CFL" or assume all CFG questions are undecidable. Remember: Finiteness of a CFL is decidable, but checking equivalence or ambiguity for arbitrary CFLs is undecidable.

---

## Q14

**Answer:** D

### 1. Topic
**Chomsky Hierarchy of Languages** (Unit 8: Theory of Computation and Compilers)

### 2. Hint / Brain Trigger
**When I see production rules with at most one non-terminal on the right-hand side (like $A \rightarrow Ba$ or $A \rightarrow aB$), I should immediately think of Type-3 (Regular Grammar).**

### 3. Solution
- **Correct Option:** (D) Type 3
- **Explanation:** The given grammar consists of productions like $S \rightarrow A$, $A \rightarrow Ba$, and $B \rightarrow abc$. In each production, the right-hand side has at most a single non-terminal placed exclusively at one end (left-linear in this case: $Ba$), which strictly satisfies the criteria for a **Type-3 (Regular) Grammar**.
- **Trap / Confusion:** Students often mistake multi-step derivations or recursive chains for Context-Free Grammars (Type 2); however, checking the individual production rules reveals that the non-terminal is always accompanied by a single terminal string on one side only. 
- **Rule:** 
  - Type 3: $A \rightarrow aB$ or $A \rightarrow Ba$ (Regular)
  - Type 2: $A \rightarrow \gamma$ where $\gamma$ is any string of terminals/non-terminals (Context-Free)

---

## Q15

**Answer:** C

### 1. Topic
Regular Language Models: Regular Expressions, Properties of Regular Language ($L^*$ / Kleene Closure).

### 2. Hint / Brain Trigger
> **“When I see strings formed by Kleene closure $L^*$, I should immediately check if every option string can be fully segmented into a concatenation of base words from $L$ without any leftover characters.”**

### 3. Solution
- **Correct Option:** (C)
- **Explanation:** $L^*$ represents the Kleene closure of language $L = \{ab, aa, baa\}$, meaning it contains any string formed by concatenating zero or more words from $L$. 
  - Option (A) `abaabaaabaa` breaks into: `ab` | `aa` | `baa` | `ab` | `aa` (Valid)
  - Option (B) `aaaabaaaa` breaks into: `aa` | `aa` | `baa` | `aa` (Valid)
  - Option (D) `baaaabaa` breaks into: `baa` | `aa` | `baa` (Valid)
  - Option (C) `baaaaabaaaab` fails because it has a trailing `b` at the very end (`baa` | `aa` | `ab` | `aa` | `aa` | `b`), but the base words in $L$ can only end with $b$ when preceded by specific letters (as in `ab` or `baa`), and an isolated trailing `b` does not match any valid component in $L$.
- **Key Trap:** Strings of identical length can look equally valid; always parse from left to right and verify that the final leftover characters form a complete word from $L$.

---

## Q16

**Answer:** B

### 1. Topic
Recursive and Recursively-Enumerable Languages (Unit 8: Theory of Computation and Compilers)

### 2. Hint / Brain Trigger
When I see **"languages that are not recursively enumerable"** in a set theory or cardinality context, I should immediately think of **Cantor's Diagonalization Theorem / Uncountable sets**.

### 3. Solution
- **Correct Option:** (B)
- **Why it is correct:** The set of all possible languages over a finite alphabet is **uncountable** (equivalent to the power set of strings, $\Sigma^*$). However, the set of all Turing machines (and thus all recursively enumerable languages, since each is accepted by some TM) is **countable**. Therefore, by set difference (Uncountable minus Countable), the set of languages that are *not* recursively enumerable must be **uncountable**, making statement (B) **false**.
- **Why other options are correct statements (thus eliminated):**
  - **(A)** Every context-sensitive language is recursive (Type 1 languages are a proper subset of Type 0 recursive languages).
  - **(C)** Recursively enumerable languages are closed under union, intersection, concatenation, and Kleene star.
  - **(D)** Both recursive and recursively enumerable languages are closed under reversal.
- **Key Trap:** Confusing the cardinality of languages (uncountable power set) with the cardinality of Turing machines (countable set).

---

## Q17

**Answer:** A

### 1. Topic
Properties of Regular Language (Unit 8: Regular Language Models)

### 2. Hint / Brain Trigger
When I see **empty language ($\phi$) concatenated with any language**, I should immediately think of **$\phi$**, and when I see **$\phi^*$**, I should think of **$\{\epsilon\}$**.

### 3. Solution
- **Correct Option:** (A)
- **Explanation:** 
  - The expression is $L_1 L_2^* \cup L_1^*$, where $L_1 = \phi$ and $L_2 = \{a\}$.
  - **Concatenation Rule:** $\phi$ acts like $0$ in multiplication. Concatenating an empty language ($\phi$) with any language ($L_2^^*$) results in an empty language: $L_1 L_2^* = \phi \cdot \{a\}^* = \phi$.
  - **Kleene Star Rule:** The closure of an empty set ($\phi^*$) is always the set containing the empty string: $\phi^* = \{\epsilon\}$. Therefore, $L_1^* = \phi^* = \{\epsilon\}$.
  - **Union Rule:** $\phi \cup \{\epsilon\} = \{\epsilon\}$.
- **Key Trap:** Confusing $\phi^*$ (which equals $\{\epsilon\}$) with $\phi$ itself, or forgetting that concatenating with $\phi$ yields $\phi$ instead of $\epsilon$.

---

## Q18

**Answer:** C

### 1. Topic
Context Free Language: Ambiguity (Unit 8)

### 2. Hint / Brain Trigger
When I see **Context Free Grammars** and the question asks **which is ambiguous**, I should immediately test for a string that can yield **two or more distinct parse trees** (or leftmost derivations).

### 3. Solution
- **Correct Option:** (C) Both $G_1$ and $G_2$ are ambiguous.
- **Explanation:** 
  - A grammar is **ambiguous** if it produces more than one parse tree (or leftmost derivation) for the same string.
  - **Grammar $G_1$ ($S \to SbS \mid a$):** We can generate the string "ababa" using multiple distinct parse trees due to alternative association orders of the recursive rules. Thus, $G_1$ is ambiguous.
  - **Grammar $G_2$ ($S \to aB \mid ab$, etc.):** We can also generate more than one parse tree for the string "ab" (e.g., via different production paths). Thus, $G_2$ is also ambiguous.
- **Key Trap:** Assuming a grammar is unambiguous just because it looks straightforward or is split into multiple non-terminals. Always attempt to construct alternative derivations for short terminal strings.

---

## Q19

**Answer:** B

### 1. Topic
Regular Language Models: Regular Expressions (Unit 8)

### 2. Hint / Brain Trigger
When I see nested star operators on regular expressions like $(a+b^*)^*$, I should immediately expand and apply standard identities like $(X^*)^* = X^*$ to simplify both expressions.

### 3. Solution
- **Correct Option:** (B) $S = T$
- **Explanation:** 
  - Given $S = (a + b^*)^*$ and $T = (a + b)^*$.
  - Using the regular expression identity $(X^*)^* = X^*$, we can expand $S$: 
    $S = (a + b^*)^* = (a^* b^*)^* = (a^* b^*)^*$.
  - Similarly, for $T$: 
    $T = (a + b)^* = (a^* b^*)^*$.
  - Since both $S$ and $T$ simplify to the exact same regular expression $(a^* b^*)^*$, they represent the same language, making $S = T$.
- **Key Trap:** The presence of the inner star on $b^*$ in $S$ might look restrictive, but the outer star allows arbitrary combinations of $a$'s and $b$'s just like $T$, making them equivalent.

---

## Q20

**Answer:** B

### 1. Topic
Properties of Context-Free Languages (Closure Properties)

### 2. Hint / Brain Trigger
**When I see closure property questions involving Context-Free Languages (CFL) and Regular languages (R), I should immediately recall that CFLs are closed under Union, Concatenation, Kleene Closure, and Regular Difference, but NOT under Intersection or Complementation.**

### 3. Solution
- **Correct Option:** (B) I and III only.
- **Why it is correct:** 
  - **Statement I ($L_1 \cup L_2$):** CFLs are closed under **Union**, making the result context-free.
  - **Statement III ($L_1 - R$):** The **difference** between a Context-Free Language ($L_1$) and a Regular language ($R$) is always a CFL because $L_1 - R = L_1 \cap R'$, and the complement of a regular language ($R'$) is regular, and CFL intersected with regular is a CFL.
- **Why others are wrong (Traps):**
  - **Statement II ($L_1'$):** CFLs are **not closed under complementation**. The complement of a CFL can result in a language that is at least a recursive language.
  - **Statement IV ($L_1 \cap L_2$):** CFLs are **not closed under intersection**. Intersecting two CFLs can yield a Context-Sensitive Language (e.g., $a^n b^n c^n$). 
- **Key Shortcut / Rule:** Always remember the "Regular filter" trick: **CFL $\cap$ Regular = CFL** and **CFL $-$ Regular = CFL**.

---

## Q21

**Answer:** A

### 1. Topic
Syntax Analysis: Precedence (Unit - 8: Theory of Computation and Compilers)

### 2. Hint / Brain Trigger
When I see a **grammar defining operators and want to find their precedence**, I should immediately **draw a parse tree for an input string** to check which operator is evaluated deeper (lower in the tree).

### 3. Solution
- **Correct Option:** A (`-` has higher precedence than `*`).
- **Explanation:** In the given grammar, parsing an input string like `3 * 4 - 5` results in the `-` operation appearing lower in the parse tree (closer to the leaves) than the `*` operation. Because operations deeper in a parse tree are evaluated first, the `-` operator takes precedence over `*`.
- **Key Trap:** Assuming standard mathematical precedence where multiplication (`*`) always outranks subtraction (`-`). Grammars can define custom or inverted precedence rules based on production nesting.

---

## Q22

**Answer:** C

### 1. Topic
Turing Machines (TM)

### 2. Hint / Brain Trigger
> **“When I see Turing Machine transitions moving strictly right, I should immediately trace state-by-state string prefix and loop formation to derive the regular expression.”**

### 3. Solution
- **Correct Option:** (C) $\text{aba}^*b$
- **Explanation:** 
  - Trace the given transitions step-by-step from the initial state $q_0$:
    1. $\delta(q_0, a) = (q_1, a, R)$ means the string **must start with 'a'** and move to $q_1$.
    2. $\delta(q_1, b) = (q_2, b, R)$ means the next symbol must be 'b', moving to $q_2$.
    3. $\delta(q_2, a) = (q_2, a, R)$ creates a **self-loop on $q_2$ for symbol 'a'**, allowing zero or more 'a's ($a^*$).
    4. $\delta(q_2, b) = (q_3, b, R)$ moves to the final state $q_3$ upon reading 'b', meaning the string **must end with 'b'**.
  - Combining these parts gives the accepted language: $\text{aba}^*b$.
- **Key Trap:** Confusing the Kleene star placement ($a^*$) or missing that the final transition to the accepting state $q_3$ consumes a trailing 'b'.

**Summary Diagram:**

<svg width="75%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 200" role="img" aria-label="Automaton q0 to q3: a, b, loop a on q2, b" font-family="'Segoe UI','Helvetica Neue',Arial,sans-serif">
<title>Automaton q0 to q3: a, b, loop a on q2, b</title>
<defs><marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1e2a44"></path></marker></defs>
<rect width="760" height="200" fill="#fff"></rect>
<path d="M30 120H72" fill="none" stroke="#1e2a44" stroke-width="2" marker-end="url(#ah2)"></path><path d="M128 120H272" fill="none" stroke="#1e2a44" stroke-width="2" marker-end="url(#ah2)"></path><text x="200" y="108" text-anchor="middle" font-size="17" font-weight="600" fill="#1e2a44">a</text><path d="M328 120H472" fill="none" stroke="#1e2a44" stroke-width="2" marker-end="url(#ah2)"></path><text x="400" y="108" text-anchor="middle" font-size="17" font-weight="600" fill="#1e2a44">b</text><path d="M528 120H672" fill="none" stroke="#1e2a44" stroke-width="2" marker-end="url(#ah2)"></path><text x="600" y="108" text-anchor="middle" font-size="17" font-weight="600" fill="#1e2a44">b</text><path d="M486 94C470 30 530 30 514 94" fill="none" stroke="#1e2a44" stroke-width="2" marker-end="url(#ah2)"></path><text x="500" y="40" text-anchor="middle" font-size="17" font-weight="600" fill="#1e2a44">a</text><circle cx="100" cy="120" r="28" fill="#eaf0ff" stroke="#1e2a44" stroke-width="2"></circle><text x="100" y="126" text-anchor="middle" font-size="18" font-weight="600" fill="#1e2a44">q0</text><circle cx="300" cy="120" r="28" fill="#eaf0ff" stroke="#1e2a44" stroke-width="2"></circle><text x="300" y="126" text-anchor="middle" font-size="18" font-weight="600" fill="#1e2a44">q1</text><circle cx="500" cy="120" r="28" fill="#eaf0ff" stroke="#1e2a44" stroke-width="2"></circle><text x="500" y="126" text-anchor="middle" font-size="18" font-weight="600" fill="#1e2a44">q2</text><circle cx="700" cy="120" r="28" fill="#eaf0ff" stroke="#1e2a44" stroke-width="2"></circle><text x="700" y="126" text-anchor="middle" font-size="18" font-weight="600" fill="#1e2a44">q3</text>
</svg>

---

## Q23

**Answer:** D

### 1. Topic
Syntax Analysis: Context Free Language Ambiguity, Operator Precedence, and Associativity (Unit 8: Theory of Computation and Compilers).

### 2. Hint / Brain Trigger
When I see a **grammar with multiple operators**, I should check parse tree uniqueness for ambiguity, parse tree depth for precedence, and recursion side for associativity.

### 3. Solution
- **Correct Option:** (D)
- **Why it is correct:** 
  - **Option (A)** is true: The grammar is unambiguous because every valid expression has a unique parse tree.
  - **Option (B)** is true: Lower priority operators (`+`) appear at deeper levels of the parse tree (`T` derived from `U + T`), ensuring they are evaluated *after* higher priority operators (`*`).
  - **Option (C)** is true: Right-recursive rules (e.g., $T \rightarrow U + T$) force right-to-left evaluation. 
  - Since statements (A), (B), and (C) are correct, the wrong statement among the choices is "None of these," making **(D)** the correct answer choice.
- **Key Trap:** Assuming a grammar is ambiguous just because it has multiple productions, or confusing right-recursion with right-to-left evaluation order.
- **Rule:** Right recursion in grammar rules enforces **right-to-left** associativity/evaluation.

---

## Q24

**Answer:** B

### 1. Topic
**Code Optimization** (Unit 8: Theory of Computation and Compilers - Code Generation and Code Optimization)

### 2. Hint / Brain Trigger
When I see **operator strength reduction**, I should immediately look for a **multiplication/division** operation replaced by a faster **bitwise shift** operation.

### 3. Solution
- **Correct Option:** (B)
- **Explanation:** Option (B) replaces multiplication by a constant power of two (`P * 32`) with a left-shift operator (`P << 5`), since $32 = 2^5$. Bitwise shift operations are much less expensive and faster for hardware to execute than multiplication.
- **Why others are wrong:** 
  - (A) demonstrates constant folding (`3 + 4` to `7`) or algebraic identity.
  - (C) demonstrates algebraic identity/simplification (`P * 0 = 0`).
  - (D) replaces bitwise operations with multiplication, which increases or maintains operator strength rather than reducing it.
- **Key Trap:** Confusing **strength reduction** (replacing expensive ops like multiplication/division with cheaper ones like addition/shifts) with general **algebraic simplification** or **constant folding**.

---

## Q25

**Answer:** D

### 1. Topic
Context Free Language: Pushdown Automaton (PDA), Non-Deterministic Pushdown Automaton (NPDA), Context Free Grammar, Ambiguity, Equivalence of PDA's and Context Free Grammars.

### 2. Hint / Brain Trigger
> **“When I see **non-deterministic PDA vs deterministic PDA** in a question, I should immediately think of **unequal power (DPDA < NPDA)**.”**

### 3. Solution
- **Correct Option:** (D)
- **Why it is correct:** Option (D) is **FALSE** because the computational power of a Deterministic Pushdown Automaton (DPDA) is strictly less than that of a Non-Deterministic Pushdown Automaton (NPDA). DPDAs cannot handle ambiguous context-free grammars or languages, whereas NPDAs can handle any context-free grammar. Hence, every non-deterministic PDA **cannot** be converted to an equivalent deterministic PDA.
- **Why others are correct (elimination):**
  - **(A)** Every regular language has a unique minimal DFA (Myhill-Nerode theorem).
  - **(B)** Every NFA can be converted to an equivalent PDA (Finite automata are a subset of PDAs that ignore the stack).
  - **(C)** The complement of every Context-Free Language is **not** necessarily context-free, but it is always **recursive** (decidable by a Turing Machine).
- **Key Trap:** Confusing PDA behavior with Finite Automata (where DFA and NFA have equal computational power). In pushdown automata, **NFA $\neq$ DFA**.

---

