## Q1

**Answer:** A

### 1. Topic
Memory Hierarchy: Cache Memory (Block Size and Miss Penalty)

### 2. Hint / Brain Trigger
When I see **cache block size** and its impact on **miss penalty**, I should immediately think: **Smaller block size takes less time to fetch from main memory, resulting in a lower miss penalty.**

### 3. Solution
- **Correct Option:** (A)
- **Why it is correct:** A cache miss occurs when the CPU requests data not currently present in the cache. The system must retrieve the required block from a lower memory level (e.g., main memory). A **smaller block size** contains fewer bytes, meaning it takes less time to transfer into the cache, thereby reducing the **miss penalty** (the extra time required to service a miss).
- **Why other options are wrong:**
  - (B) **Spatial locality** (the tendency to reference data near recently accessed memory locations) is better served by *larger* block sizes because more neighboring data is brought into the cache at once.
  - (C) **Cache tag** size depends primarily on the number of cache lines/sets, not directly on the block size in a simple manner that decreases with smaller blocks.
  - (D) **Cache hit time** is the time required to access the cache on a hit, which is typically determined by cache size and organization, not primarily minimized by a smaller block size.
- **Key Trap:** Confusing *miss penalty* (time to fetch missing data) with *miss rate* (frequency of misses) or *hit time*.

---

## Q2

**Answer:** D

### 1. Topic
Memory Hierarchy (Cache Memory organization, associativity, and address mapping) from **Unit 2: Computer System Architecture**.

### 2. Hint / Brain Trigger
When a question asks what internal cache parameter is **NOT affected** by changing cache associativity, **look for external or system-level buses** (like the main memory data bus) that have zero structural dependency on cache internal design.

### 3. Solution
- **Correct Option:** (D)
- **Why it is correct:** The processor-to-main-memory data bus handles data transfer between the CPU and main memory, which is completely independent of how cache memory organizes its blocks internally (associativity, sets, or ways).
- **Why others are wrong:** 
  - Doubling associativity (while keeping capacity and block size constant) halves the number of sets, altering the set index bits (affecting **decoder width**, Option B).
  - More blocks per set require a wider way-selection multiplexor (**Option C**) and more tag bits to uniquely identify memory blocks (**tag comparator width**, Option A).
- **Key Trap:** Candidates often waste time calculating tag and index bit variations for options A, B, and C, forgetting that system buses operate entirely independently of internal cache architecture.

---

## Q3

**Answer:** A

### 1. Topic
Memory Hierarchy (Cache Memory)

### 2. Hint / Brain Trigger
> **"When I see inclusion property between L1 and L2 cache, I should immediately think: L2 must be larger than or equal to L1 (Size $\ge$ Size)."**

### 3. Solution
- **Correct Option:** (A) IV only
- **Explanation:** 
  - **Inclusion property** states that all data present in the smaller, faster cache (L1) must also be a subset of the larger, slower cache (L2). 
  - For L2 to contain a superset or exact copy of all data residing in L1, **L2 must be at least as large as L1** (Statement IV is necessary).
  - **Statement I & II (Write-through):** Not required. Inclusion deals with presence of data blocks, not update policies; write-back or write-through can be used independently.
  - **Statement III (Associativity):** Not required. L2 associativity does not need to strictly exceed L1; they can have equal associativity.
- **Key Trap:** Confusing data inclusion constraints (which strictly dictate capacity hierarchy) with cache management policies like write-policies or associativity.

---

## Q4

**Answer:** A

### 1. Topic
Cache Memory (Unit 2: Computer System Architecture)

### 2. Hint / Brain Trigger
> **“When I see $k$-way set associative cache mapping for main memory block $j$, I should immediately think of set index $(j \bmod v)$ and line range $(j \bmod v) \times k$ to $(j \bmod v) \times k + (k-1)$.”**

### 3. Solution
- **Correct Option:** **(A)**
- **Explanation:** 
  - The cache is divided into $v$ sets, and each set contains $k$ lines. 
  - A main memory block $j$ is first mapped to a specific set using the modulo operator: **Set index = $j \bmod v$**.
  - Since each set contains $k$ contiguous lines, the set starts at line index $(j \bmod v) \times k$ and ends at $(j \bmod v) \times k + (k-1)$.
- **Key Trap:** Associativity ($k$) determines the size of each set (how many lines are grouped together), but the set mapping itself depends only on the number of sets ($v$). Do not confuse block mapping with block offset formulas.

---

## Q5

**Answer:** B

### 1. Topic
Unit - 2 : Computer System Architecture (Digital Logic Circuits and Components - Boolean Functions and Logic Gates)

### 2. Hint / Brain Trigger
When I see a **combinational logic circuit diagram**, I should immediately **write the Boolean expression stage-by-stage from inputs to outputs** and apply **De Morgan's laws** to match the options.

### 3. Solution
- **Correct Option:** **B**
- **Explanation:** 
  - Trace the circuit from inputs to outputs by writing the boolean expressions for each gate.
  - The circuit consists of AND, OR, and NOT (inverter) gates combined to form a multi-output or complex combinational network. 
  - By systematically deriving the expressions at intermediate nodes and applying Boolean algebra rules (such as De Morgan's laws: $(X+Y)' = X'Y'$ and $(XY)' = X'+Y'$), the resulting simplified expression matches option **(B)**: $(E' + ABF')(C + D + F')$.
- **Key Trap:** Avoid expanding all terms blindly; instead, look at the parenthesized product terms in the options and match them with the OR/AND gate structures visible at the final output stages.

---

## Q6

**Answer:** D

### 1. Topic
Unit - 2: Computer System Architecture (Central Processing Unit / Instruction Set Architecture)

### 2. Hint / Brain Trigger
> **“When I see Instruction Set Architecture (ISA) features in a question, I should immediately look for programmer-visible abstract definitions rather than physical hardware implementation details.”**

### 3. Solution
- **Correct Option:** (D) The total number of registers
- **Explanation:** Instruction Set Architecture (ISA) defines the abstract interface between the software (programmer/compiler) and the hardware. It includes aspects visible to the programmer, such as the total number of registers, instruction formats, addressing modes, and operation types. 
- **Why others are wrong:** Cache memory size (A), clock frequency (B), and the number of cache levels (C) are purely hardware *implementation details* managed automatically by the system, not part of the programmer-visible ISA.
- **Key Trap:** Confusing hardware organization/implementation parameters (like cache size or clock speed) with conceptual architectural specifications.
- **Rule of Thumb:** If a component is directly manipulated or addressed by assembly instructions (like registers or instruction types), it belongs to ISA; if it only affects execution speed without changing software logic, it is microarchitecture/hardware implementation.

---

## Q7

**Answer:** D

### 1. Topic
Virtual Memory Management (Page Table Flag Bits) — *Unit 5: System Software and Operating System*

### 2. Hint / Brain Trigger
**When I see matching questions on virtual memory flag bits (Dirty, R/W, Reference, Valid), I should immediately map:**
- **Dirty** → **Write-back policy** (modified page tracking)
- **R/W** → **Page protection** (access permissions)
- **Reference** → **Page replacement policy** (recently accessed tracking)
- **Valid** → **Page initialization / presence** (loaded in main memory or not)

### 3. Solution
- **Correct Option:** (D) I-b, II-c, III-d, IV-a
- **Explanation of Mappings:**
  - **Dirty Bit (I-b):** Tracks if a page has been modified (written to); if replaced, it dictates the **write-back policy** to secondary storage.
  - **R/W (Read/Write) Bit (II-c):** Specifies access permissions, linking it directly to **page protection**.
  - **Reference Bit (III-d):** Monitors access history to decide which page to evict, serving the **page replacement policy**.
  - **Valid Bit (IV-a):** Indicates whether the page currently resides in Main Memory (MM); if absent (invalid), it triggers **page initialization** (loading from secondary memory).
- **Key Trap:** Confusing *Valid bit* (presence in memory) with *Reference bit* (recency of access).

---

## Q8

**Answer:** A

### 1. Topic
Map Simplifications (Karnaugh Maps) / Boolean Algebra (Unit 2: Digital Logic Circuits and Components)

### 2. Hint / Brain Trigger
> **“When I see a Karnaugh map with grouped 1s, I should immediately read the row/column binary coordinates for each group and write out the product terms.”**

### 3. Solution
- **Correct Option:** (A)
- **Explanation:** 
  - Analyze the 1s mapped in the K-map to form minimal product terms (groups of adjacent 1s in powers of 2). 
  - Grouping the minterms yields the simplified expression. By substituting or testing the values from the K-map cells, option (A) expands to match the exact set of minterms where the function outputs $1$.
- **Key Trap:** Confusing row and column variable designations or misreading the Gray code ordering ($00, 01, 11, 10$) of the K-map axes.

---

## Q9

**Answer:** C

### 1. Topic
Number Systems and Conversion (Unit - 2: Computer System Architecture)

### 2. Hint / Brain Trigger
**When I see** a base conversion from octal to decimal and hexadecimal, **I should immediately think of** converting octal to decimal via positional weights, and then converting the decimal value or intermediate binary groups into hexadecimal using 4-bit grouping.

### 3. Solution
- **Correct Option:** (C)
- **Why it is correct:** 
  - To convert the octal number $(326.4)_8$ to decimal, multiply each digit by $8$ raised to its corresponding position weight: 
    $(326.4)_8 = (3 \times 8^2) + (2 \times 8^1) + (6 \times 8^0) + (4 \times 8^{-1}) = 192 + 16 + 6 + 0.5 = (214.5)_{10}$.
  - To find the hexadecimal representation, convert the decimal value $(214.5)_{10}$ or the intermediate binary equivalent $(011010110.100)_2$ by grouping binary digits into sets of 4 from the binary point:
    - Integer part: $011010110_2 \rightarrow 0000\ 1101\ 0110_2 \rightarrow (\text{D}6)_{16}$
    - Fractional part: $.100_2 \rightarrow .1000_2 \rightarrow (.8)_{16}$
    - Combined: $(\text{D}6.8)_{16}$.
- **Key Trap / Confusion:** Watch out for fractional parts during base conversions; multiplying by negative powers of the base ($8^{-1}$) and padding zeros for 4-bit binary grouping on the right side of the decimal point are common error-prone steps.

---

## Q10

**Answer:** B

### 1. Topic
Central Processing Unit: Addressing Modes (Unit - 2: Computer System Architecture)

### 2. Hint / Brain Trigger
When I see **operands stored in memory** and **address given in a register**, I should immediately think of **Register indirect addressing mode**.

### 3. Solution
- **Correct Option:** (B) Register indirect
- **Why it is correct:** In **register indirect addressing mode**, the instruction specifies a register that holds the memory address of the actual operand, rather than holding the operand or its address directly.
- **Eliminating wrong options:** 
  - **Register direct** stores the operand directly inside the specified register.
  - **Displacement** and **Base indexed** combine a register value with an offset (displacement) to calculate the effective address, rather than directly using a register as a pointer.
- **Key Trap:** Confusing *Register direct* (operand is *in* the register) with *Register indirect* (register holds the *memory address* of the operand).

---

## Q11

**Answer:** D

### 1. Topic
Compiler Design — Run Time System / Symbol Table Data Structures (Unit 8)

### 2. Hint / Brain Trigger
When I see **compiler table data structures** (like Forward Reference Table or Segment Register Table), I should immediately match **Forward Reference Table** with **linked lists** and **Segment Register Table** with **arrays**.

### 3. Solution
- **Correct Option:** (D) — `(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)`
- **Explanation:** 
  - **Forward Reference Table (a)** uses a **linked list (iv)** data structure to dynamically manage unresolved references during compilation.
  - **Mnemonic Table (b)** contains **machine OP codes (iii)**.
  - **Segment Register Table (c)** uses an **array (ii)** data structure for fixed-size sequential lookups.
  - **EQU (d)** is an **assembler directive (i)** used to define symbols and constants.
- **Key Trap:** Confusing the underlying data structures of dynamic tables (linked lists) versus static/fixed tables (arrays).

---

## Q12

**Answer:** D

### 1. Topic
Microprogrammed Control (Design of Control Unit) — Unit 2: Computer System Architecture

### 2. Hint / Brain Trigger
> **“When I see fault diagnosis in a microprogram control unit, I should immediately think of flags, registers, and counters.”**

### 3. Solution
- **Correct Option:** (D)
- **Explanation:** In a microprogrammed control unit, diagnostic testing and fault isolation require monitoring the internal state of the control path. This state is fully captured by maintaining and inspecting the contents of **flags** (condition status), **registers** (data and control storage), and **counters** (sequencing and loop tracking). 
- **Eliminating Traps:** Options (A), (B), and (C) are incomplete because they omit one of the three critical hardware components required for comprehensive diagnostic tracking.

---

## Q13

**Answer:** B

### 1. Topic
Memory Unit (Unit 2: Computer System Architecture)

### 2. Hint / Brain Trigger
When I see **chip design / RAM sizing**, I should immediately think: **Total Capacity / Single Chip Capacity = Number of Chips Required.**

### 3. Solution
- **Correct Option:** (B) 1024
- **Why it is correct:** 
  - Total required RAM capacity = $32\text{ K} \times 32\text{ bits} = (32 \times 1024) \times 32\text{ bits}$.
  - Given RAM chip capacity = $128 \times 8\text{ bits}$.
  - Number of chips = $\frac{\text{Total Capacity}}{\text{Chip Capacity}} = \frac{32 \times 1024 \times 32}{128 \times 8} = 1024$.
- **Key Trap:** Ensure both the storage locations (rows) and word size (columns/bits) are accounted for. Often, students divide only the total bytes and forget to scale the bit-width multiplier properly. 
- **Shortcut:** Separate the calculations for depth (address lines/rows) and width (data lines/bits): 
  - Depth ratio = $\frac{32\text{K}}{128} = \frac{32 \times 1024}{128} = 256$
  - Width ratio = $\frac{32}{8} = 4$
  - Total Chips = $\text{Depth ratio} \times \text{Width ratio} = 256 \times 4 = 1024$.

---

## Q14

**Answer:** B

### 1. Topic
Programming the Basic Computer: Machine Language, Assembly Language / Program Loops (Unit 2)

### 2. Hint / Brain Trigger
> **“When I see assembly loop and decrement instructions (`dec ax`, `loop`), I should immediately think of adding the initial `ax` value with the 2's complement of the loop count `cx`.”**

### 3. Solution
- **Correct Option:** (B) `ax=FFF6 h` and `cx=0 h`
- **Explanation:** 
  - The `cx` register acts as the loop counter, initialized to `0Ah` (which is $10$ in decimal). 
  - The loop decrements `ax` ($0000\text{h}$) $10$ times because the `loop` instruction repeats until `cx` becomes $0$.
  - Executing `dec ax` $10$ times is mathematically equivalent to adding $-10$ ($10$ in hex as $0A\text{h}$) to `ax`.
  - Taking the 2's complement of $0A\text{h}$ gives $FFF6\text{h}$ ($0000\text{h} + FFF6\text{h} = FFF6\text{h}$), and `cx` exhausts to $0\text{h}$.
- **Key Trap:** Forgetting that loop counters decrement `cx` to $0$ and subtracting the hex value using 2's complement rather than direct decimal subtraction.

---

## Q15

**Answer:** A

### 1. Topic
Cache Memory (Unit 2: Memory Hierarchy)

### 2. Hint / Brain Trigger
When I see **write operation** and **required block is not present**, I should immediately think of a **write miss**.

### 3. Solution
- **Correct Option:** (A)
- **Explanation:** In cache memory operations, when the CPU attempts a write operation and the target memory block is **not found** in the cache, it is termed a **write miss**. Conversely, finding the block in the cache is a *write hit*. 
- **Eliminating Wrong Options:** 
  - *Write hit* occurs when the block is present. 
  - *Write latency* and *write delay* are general timing metrics, not specific operational outcomes of a cache lookup failure.
- **Key Trap:** Confusing read/write terminology or guessing generic timing terms like "latency" instead of the fundamental cache state outcome ("miss").

---

## Q16

**Answer:** D

### 1. Topic
**Unit 2: Computer System Architecture – Digital Logic Circuits and Components (Flip-Flops)**

### 2. Hint / Brain Trigger
> **“When I see RS flip-flop output remaining the same at ($t+1$) as $t$, I should immediately think of the memory/no-change state where $S=R=0$.”**

### 3. Solution
- **Correct Option:** (D) $S=R=0$
- **Explanation:** In an RS flip-flop, the characteristic equation is given by:
  $Q(t+1) = S + R'Q(t)$
  When both inputs are low ($S=0$ and $R=0$), the equation evaluates to $Q(t+1) = 0 + 1 \cdot Q(t) = Q(t)$. Thus, the output retains its previous state (no-change/memory state).
- **Why others are wrong:** 
  - (A) $S=R=1$ leads to an **invalid/forbidden** state.
  - (B) $S=0, R=1$ resets the output to **0**.
  - (C) $S=1, R=0$ sets the output to **1**.
- **Key Trap:** Confusing the *hold/no-change* condition ($S=0, R=0$) with the *invalid* condition ($S=1, R=1$).

---

## Q17

**Answer:** D

### 1. Topic
Cache Memory Organization (Mapping Techniques - Set Associative Mapping, Tag/Set/Word Bit Calculations)

### 2. Hint / Brain Trigger
> **“When I see cache size, block size, and set-associativity, I should immediately find Total Blocks = Cache Size / Block Size, then Sets = Blocks / Ways, and finally calculate $\log_2$ for Word, Set, and Tag bits.”**

### 3. Solution
- **Correct Option:** (D) 9, 4, 7
- **Explanation:** 
  - **Word bits:** Each block contains 128 words, so $\log_2(128) = 7$ bits are needed for the WORD field.
  - **Set bits:** Total cache blocks = $\frac{\text{Cache Size}}{\text{Block Size}} = \frac{8\text{ KB}}{128 \times 1\text{ byte}} = \frac{8192\text{ bytes}}{128\text{ bytes}} = 64$ blocks. For a **4-way set-associative** cache, the number of sets = $\frac{64}{4} = 16$ sets. Thus, $\log_2(16) = 4$ bits are needed for the SET field.
  - **Tag bits:** Main memory size is 1 MB ($2^{20}$ bytes). Total address bits = 20. Since Address = Tag + Set + Word, **Tag bits** = Total Address Bits - Set bits - Word bits = $20 - 4 - 7 = 9$ bits. Alternatively, main memory is divided into $1\text{ MB} / 16 = 2^{16}$ bytes per set region, requiring $\log_2(2^9) = 9$ bits for the TAG.
- **Key Trap:** Forgetting to divide the total blocks by the set-associativity factor (4-ways) when calculating the number of sets, or confusing main memory size with cache size when computing tag bits.

---

## Q18

**Answer:** B

### 1. Topic
Pipeline and Vector Processing (Unit - 2: Computer System Architecture)

### 2. Hint / Brain Trigger
**When I see** *pipeline segments, clock cycle time, number of instructions, and data hazard bubbles*, **I should immediately use the speed-up formula:** $\text{Speedup} = \frac{\text{Non-pipeline Time}}{\text{Pipeline Time}}$, where pipeline time includes segment stages, instruction count, and added stall cycles.

### 3. Solution
- **Correct Option:** (B) 4.03
- **Explanation:** 
  - **Non-pipeline time:** Executes each instruction sequentially through all segments: $\text{Segments} \times \text{Instructions} \times \text{Clock Cycle} = 5 \times 100 \times 20\text{ ns} = 10,000\text{ ns}$.
  - **Pipeline time:** Total clock cycles required = $(\text{Instructions} + \text{Segments} - 1) + \text{Stall Bubbles}$. With 1 bubble every 5 cycles for 100 instructions, roughly $100/5 = 20$ bubbles are added. 
  - Total cycles = $(100 + 5 - 1) + 20 = 124$ cycles. 
  - Pipeline time = $124 \times 20\text{ ns} = 2,480\text{ ns}$.
  - **Speed-up ratio** = $\frac{10,000}{2,480} \approx 4.03$.
- **Key Trap:** Forgetting to account for the pipeline stall bubbles or miscalculating the flush/fill overhead $(k - 1)$ where $k$ is the number of segments.

---

## Q19

**Answer:** B

### 1. Topic
Cache Memory (Unit - 2: Computer System Architecture)

### 2. Hint / Brain Trigger
When I see **"more than one word in a cache block"**, I should immediately think of **spatial locality** because fetching neighboring memory locations reduces future misses due to clustering of data/instructions.

### 3. Solution
- **Correct Option:** (B)
- **Why it is correct:** Spatial locality of reference states that if a particular memory location is referenced, nearby locations are likely to be accessed soon in the near future (e.g., sequential instruction execution or array traversal). Putting multiple words in a single cache block (or cache line) brings these adjacent words into the cache simultaneously during a single memory access, making memory usage more efficient.
- **Why others are wrong:** 
  - (A) *Temporal locality* refers to reusing the *same* specific data item or instruction multiple times within a short time window.
  - (C) While larger block sizes can sometimes affect miss penalties, grouping multiple words primarily exploits *spatial locality*.
- **Key Trap:** Confusing temporal locality (reuse of the *same data over time*) with spatial locality (accessing *nearby data in space*).

---

## Q20

**Answer:** B

### 1. Topic
Input-Output Organization (Input-Output Interface, Modes of Transfer - Memory-mapped I/O vs. Isolated I/O)

### 2. Hint / Brain Trigger
When I see **"memory-mapped I/O"** in a question, I should immediately think of **"sharing the same address space with RAM, accessed using standard memory instructions."**

### 3. Solution
- **Correct Option:** **B**
- **Explanation:** In **memory-mapped I/O**, the system allocates a portion of the total memory address space for I/O devices. The CPU treats the registers of I/O devices just like regular memory locations, using the same read/write memory instructions (e.g., `MOV` or `LDA`).
- **Why others are wrong:** 
  - **(A)** describes *isolated (or I/O-mapped) I/O*, which uses special instructions (like `IN` and `OUT`) and a separate I/O address space.
  - **(C)** describes DMA (Direct Memory Access) operations rather than the basic characterization of memory-mapped I/O.
  - **(D)** is incorrect because memory-mapped I/O does not depend on memory management hardware being active.
- **Key Trap:** Confusing memory-mapped I/O with isolated I/O instructions (`IN`/`OUT`). Remember: *memory-mapped* means **memory-like access over the bus**.

---

## Q21

**Answer:** C

### 1. Topic
Programming the Basic Computer: Machine Language, Assembly Language (8085 Assembly Language Programming / Loop Execution).

### 2. Hint / Brain Trigger
When I see an **8085 assembly loop with `DCR` and `JNZ`**, I should immediately trace the counter down to zero while accumulating values.

### 3. Solution
- **Correct Option:** (C) 76H
- **Explanation:** 
  - Initially, Accumulator $A = 42_H = (4 \times 16) + 2 = 66$ (in decimal), and counter $B = 05$ (in decimal).
  - The loop (`UGC`) repeatedly executes `ADD B` and decrements $B$ (`DCR B`) until $B$ becomes zero (`JNZ`).
  - This adds the sequence of numbers from $B$ down to $1$ to the initial accumulator value:
    $\text{Total} = 66 + (5 + 4 + 3 + 2 + 1) = 66 + 15 = 81$
  - After the loop terminates, the instruction `ADI 25H` adds immediate hex value $25_H = (2 \times 16) + 5 = 37$ (in decimal) to the accumulator:
    $81 + 37 = 118 \text{ (in decimal)}$
  - Converting $118$ back to hexadecimal gives $76_H$ (Binary: $01110110_B$).
- **Key Trap:** Forgetting to convert hexadecimal values to decimal before performing arithmetic operations, or misinterpreting the loop bounds.

---

## Q22

**Answer:** B

### 1. Topic
**Input-Output Organization:** Modes of Transfer (DMA, Interrupt I/O), Cache Memory, and CPU Registers (Unit - 2: Computer System Architecture).

### 2. Hint / Brain Trigger
**When I see** I/O transfer mechanisms, memory types, and CPU components mapped together, **I should immediately match** high-speed data blocks to **DMA**, slow character devices to **Interrupts/Printers**, fast storage to **Cache**, and the **ALU** to processor registers.

### 3. Solution
- **Correct Option:** **B (A–2, B–1, C–3, D–4)**
- **Explanation:**
  - **A. DMA I/O (2 - Disk):** Direct Memory Access (DMA) handles high-speed bulk data transfers directly between I/O devices (like magnetic **disks**) and main memory without CPU intervention.
  - **B. Cache (1 - High speed RAM):** Cache is an extremely **high-speed RAM** placed close to the CPU to reduce average memory access time.
  - **C. Interrupt I/O (3 - Printer):** Character-driven or slower devices like a **printer** typically use interrupt-driven I/O to signal the CPU when ready.
  - **D. Condition Code Register (4 - ALU):** Status flags or condition code registers hold condition bits resulting from **ALU** operations (e.g., zero, carry, overflow).
- **Key Trap:** Confusing DMA with slow character devices or mixing up peripheral interfaces with internal CPU components.

---

## Q23

**Answer:** D

### 1. Topic
Addressing Modes (Unit - 2: Computer System Architecture)

### 2. Hint / Brain Trigger
When I see **a register plus a constant offset** inside parentheses like `20(R2)`, I should immediately think of **Indexed (or Base-Register) addressing**.

### 3. Solution
- **Correct Option:** (D) Indexed addressing
- **Explanation:** In the instruction `LW R1, 20(R2)`, the effective memory address is calculated by adding a constant offset (`20`) to the contents of a base/index register (`R2`). This matches **Indexed Addressing** (or Base-Register Addressing), where one value acts as the base address and the other acts as the index/offset.
- **Why others are wrong:** 
  - *Immediate addressing* (A) embeds the operand value directly in the instruction.
  - *Register addressing* (B) fetches data directly from a register without referencing memory.
  - *Register Indirect addressing* (C) uses a register to hold the memory address directly without adding a constant offset.
- **Key Trap:** Confusing it with *Register Indirect* because of the parentheses `(R2)`, missing the crucial constant offset `20` that precedes it.

---

## Q24

**Answer:** C

### 1. Topic
Unit - 2: Computer System Architecture (Instruction Formats / Memory-Reference Instructions)

### 2. Hint / Brain Trigger
When I see **memory size (X words/bytes)** and **number of registers**, I should immediately calculate field bit-widths using powers of 2 and subtract from the total instruction word length to find the remaining opcode bits.

### 3. Solution
- **Correct Option:** (C) 7, 6, 18
- **Explanation:** 
  - **Total Instruction Length:** Given as 1 word = 32 bits.
  - **Indirect Bit:** Requires 1 bit (for direct/indirect addressing).
  - **Address Part:** Memory size is $256\text{K words} = 2^8 \times 2^{10} = 2^{18}$ words, which requires **18 bits** to specify an address.
  - **Register Code Part:** To specify one of 64 registers ($64 = 2^6$), it requires **6 bits**.
  - **Opcode (Operation Code):** Total bits (32) minus the sum of other parts ($1 + 18 + 6 = 25$) gives $32 - 25 =$ **7 bits**.
- **Key Trap / Confusion:** Forgetting to convert 'K' (kilo = $2^{10} = 1024$) into the proper power of 2 when calculating address bits, or miscalculating total bit allocation.
- **Shortcut / Rule:** $\text{Total Word Size} = \text{Opcode bits} + \text{Indirect bit} + \text{Register bits} + \text{Address bits}$.

---

## Q25

**Answer:** B

### 1. Topic
Boolean Algebra (Unit 1: Discrete Structures and Optimization)

### 2. Hint / Brain Trigger
> **When I see standard algebraic laws like grouping `(x*y)*z = x*(y*z)` or expansion `x*(y+z)`, I should immediately recognize them as valid Associative and Distributive laws.**

### 3. Solution
- **Correct Option:** **(B) Both I and II**
- **Explanation:** 
  - **Statement I** correctly represents the **Associative Law**, which states that the grouping of operands does not affect the result in operations like addition/OR or multiplication/AND (`(x * y) * z = x * (y * z)`).
  - **Statement II** correctly represents the **Distributive Law**, which states that an operation distributes over another (`x * (y + z) = (x * y) + (x * z)`).
- **Key Trap / Confusion:** Students often confuse Associative law (grouping of same operators) with Commutative law (reordering of operands, e.g., `x * y = y * x`), or mix up the precedence in Distributive laws. Both statements given here are universally standard definitions.

---

