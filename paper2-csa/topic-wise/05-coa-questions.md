## Q1
In designing a computer’s cache system, the cache block (or cache line) size is an important parameter. Which one of the following statements is correct in this context?

## Q1 - Options
(A) Smaller block size incurs lower cache miss penalty
(B) Smaller block size implies better spatial locality
(C) Smaller block size implies smaller cache tag
(D) Smaller block size implies lower cache hit time

## Q2
If the associativity of a processor cache is doubled while keeping the capacity and block size unchanged, which one of the following is guaranteed to be NOT affected?

## Q2 - Options
(A) Width of tag comparator
(B) Width of set index decoder
(C) Width of way selection multiplexor
(D) Width of processor to main memory data bus

## Q3
For inclusion to hold between two cache levels L1 and L2 in a multi-level cache hierarchy, which of the following are necessary?

I. L1 must be a write-through cache

II. L2 must be a write-through cache

III. The associativity of L2 must be greater than that of L1

IV. The L2 cache must be at least as large as the L1 cache

## Q3 - Options
(A) IV only
(B) I and IV only
(C) I, III and IV only
(D) I, II, III and IV

## Q4
In a k-way set associative cache, the cache is divided into v sets, each of which consists of k lines. The lines of a set are placed in sequence one after another. The lines in set s are sequenced before the lines in set (s+1). The main memory blocks are numbered 0 onwards. The main memory block numbered j must be mapped to any one of the cache lines from

## Q4 - Options
(A) (j mod v) * k to (j mod v) * k + (k-1)
(B) (j mod v) to (j mod v) + (k-1)
(C) (j mod k) to (j mod k) + (v-1)
(D) (j mod k) * v to (j mod k) * v + (v-1)

## Q5
Consider the following circuit. The function by the network above is

<svg width="75%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 400" role="img" aria-label="Logic circuit with NAND, three AND gates, NOR, and NOR output" font-family="'Segoe UI','Helvetica Neue',Arial,sans-serif">
<title>Logic circuit with NAND, three AND gates, NOR, and NOR output</title>
<defs><marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1e2a44"></path></marker></defs>
<rect width="860" height="400" fill="#fff"></rect>
<polyline points="60,32 152,32" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="60,72 152,72" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="254,52 318,52 318,58 402,58" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="350,98 402,98" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="350,98 350,295 402,295" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><path d="M285 177H402" stroke="#1e2a44" stroke-width="2" fill="none"></path><path d="M285 217H342a8 8 0 0 1 16 0H402" stroke="#1e2a44" stroke-width="2" fill="none"></path><circle cx="350" cy="177" r="4.5" fill="#1e2a44"></circle><polyline points="60,322 140,322" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="60,362 140,362" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="230,342 388,335 402,335" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="482,78 562,78 562,177 660,177" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="482,197 660,196" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="482,315 562,315 562,217 660,217" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><polyline points="744,196 826,196" fill="none" stroke="#1e2a44" stroke-width="2" stroke-linejoin="round"></polyline><path d="M152 12H192A40 40 0 0 1 192 92H152Z" fill="#fff" stroke="#1e2a44" stroke-width="2"></path><circle cx="242" cy="52" r="12" fill="#fff" stroke="#1e2a44" stroke-width="2"></circle><path d="M402 38H442A40 40 0 0 1 442 118H402Z" fill="#fff" stroke="#1e2a44" stroke-width="2"></path><path d="M402 157H442A40 40 0 0 1 442 237H402Z" fill="#fff" stroke="#1e2a44" stroke-width="2"></path><path d="M402 275H442A40 40 0 0 1 442 355H402Z" fill="#fff" stroke="#1e2a44" stroke-width="2"></path><path d="M120 302H148C175 302 198 320 206 342C198 364 175 382 148 382H120C138 352 138 332 120 302Z" fill="#fff" stroke="#1e2a44" stroke-width="2"></path><circle cx="218" cy="342" r="12" fill="#fff" stroke="#1e2a44" stroke-width="2"></circle><path d="M636 156H664C691 156 714 174 722 196C714 218 691 236 664 236H636C654 206 654 186 636 156Z" fill="#fff" stroke="#1e2a44" stroke-width="2"></path><circle cx="732" cy="196" r="12" fill="#fff" stroke="#1e2a44" stroke-width="2"></circle><text x="38" y="38" text-anchor="middle" font-size="20" font-weight="700" fill="#1f7a3d">A</text><text x="38" y="78" text-anchor="middle" font-size="20" font-weight="700" fill="#1f7a3d">B</text><text x="38" y="328" text-anchor="middle" font-size="20" font-weight="700" fill="#1f7a3d">C</text><text x="38" y="368" text-anchor="middle" font-size="20" font-weight="700" fill="#1f7a3d">D</text><text x="262" y="183" text-anchor="middle" font-size="20" font-weight="700" fill="#1f7a3d">E</text><text x="262" y="223" text-anchor="middle" font-size="20" font-weight="700" fill="#1f7a3d">F</text>
</svg>

## Q5 - Options
(A) (AB)'E + EF + (CD)'F
(B) (E' + ABF')(C + D + F')
(C) ((AB)' + E)(E' + F')(C + D + F')
(D) (A + B)E' + (EF)' + CDF’

## Q6
Which of the following is/are part of an Instruction Set Architecture of a processor?

## Q6 - Options
(A) The size of the cache memory
(B) The clock frequency of the processor
(C) The number of cache memory levels
(D) The total number of registers

## Q7
Match the following flag bits used in the context of virtual memory management on the left side with the different purposes on the right side of the table below.

Name of the bit   PurposeI. Dirty  a. Page initializationII. R/W  b. Write-back policyIII. Reference  c. Page protectionIV. Valid  d. Page replacement policy

## Q7 - Options
(A) I-d, II-a, III-b, IV-c
(B) I-b, II-c, III-a, IV-d
(C) I-c, II-d, III-a, IV-b
(D) I-b, II-c, III-d, IV-a

## Q8
The Boolean function with the Karnaugh map is:

<table class="kmap">
  <tr>
    <th>CD \ AB</th>
    <th>00</th>
    <th>01</th>
    <th>11</th>
    <th>10</th>
  </tr>
  <tr>
    <th>00</th>
    <td>0</td>
    <td class="one">1</td>
    <td class="one">1</td>
    <td>0</td>
  </tr>
  <tr>
    <th>01</th>
    <td>0</td>
    <td class="one">1</td>
    <td class="one">1</td>
    <td class="one">1</td>
  </tr>
  <tr>
    <th>11</th>
    <td class="one">1</td>
    <td class="one">1</td>
    <td class="one">1</td>
    <td class="one">1</td>
  </tr>
  <tr>
    <th>10</th>
    <td>0</td>
    <td class="one">1</td>
    <td class="one">1</td>
    <td>0</td>
  </tr>
</table>

## Q8 - Options
(A) (A+C).D+B
(B) (A+B).C+D
(C) (A+D).C+B
(D) (A+C).B+D

## Q9
The octal number 326.4 is equivalent to

## Q9 - Options
(A) (214.2)10and (D6.8))16
(B) (212.5)10and (D6.8))16
(C) (214.5)10and (D6.8))16
(D) (214.5)10and (D6.4))16

## Q10
In ______ addressing mode, the operands are stored in the memory. The address of the corresponding memory location is given in a register which is specified in the instruction.

## Q10 - Options
(A) Register direct
(B) Register indirect
(C) Base indexed
(D) Displacement

## Q11
Match the following port numbers with their uses:

(a) Forwar Reference Table   (i) Assembler directive(b) Mnemonic Table          (ii) Uses array data structure(c) Segment Register Table   (iii) Contains machine OP code(d) EQU                   (iv) Uses linked list data structure

Codes : a b c d

## Q11 - Options
(A) (ii) (iii) (iv) (i)
(B) (iii) (iv) (ii) (i)
(C) (iv) (i) (iii) (ii)
(D) (iv) (iii) (ii) (i)

## Q12
The fault can be easily diagnosed in the microprogram control unit using diagnostic tools by maintaining the contents of

## Q12 - Options
(A) flags and counters
(B) registers and counters
(C) flags and registers
(D) flags, registers and counters

## Q13
How many 128 × 8 bit RAMs are required to design 32 K × 32 bit RAM?

## Q13 - Options
(A) 512
(B) 1024
(C) 128
(D) 32

## Q14
Consider the following program fragment in assembly language :

mov ax, 0hmov cx, 0A h

doloop :dec axloop doloop

What is the value of ax and cx registers after the completion of the doloop ?

## Q14 - Options
(A) ax=FFF5 h and cx=0 h
(B) ax=FFF6 h and cx=0 h
(C) ax=FFF7 h and cx=0A h
(D) ax=FFF5 h and cx=0A h

## Q15
During a write operation if the required block is not present in the cache then ______ occurs.

## Q15 - Options
(A) Write miss
(B) Write latency
(C) Write hit
(D) Write delay

## Q16
In RS flip-flop, the output of the flip-flop at time (t+1) is same as the output at time t, after the occurrence of a clock pulse if:

## Q16 - Options
(A) S=R=1
(B) S=0, R=1
(C) S=1, R=0
(D) S=R=0

## Q17
Consider a computer with a 4-ways set-associative mapped cache of the following characteristics: a total of 1 MB of main memory, a word size of 1 byte, a block size of 128 words and a cache size of 8 KB. The number of bits in the TAG, SET and WORD fields, respectively are:

## Q17 - Options
(A) 7, 6, 7
(B) 8, 5, 7
(C) 8, 6, 6
(D) 9, 4, 7

## Q18
Consider a 5-segment pipeline with a clock cycle time 20 ns in each sub operation. Find out the approximate speed-up ratio between pipelined and non-pipelined system to execute 100 instructions. (If an average, every five cycles, a bubble due to data hazard has to be introduced in the pipeline.).

## Q18 - Options
(A) 5
(B) 4.03
(C) 4.81
(D) 4.17

## Q19
More than one word is put in one cache block to

## Q19 - Options
(A) exploit the temporal locality of reference in a program
(B) exploit the spatial locality of reference in a program
(C) reduce the miss penalty
(D) none of the above

## Q20
Of the following, which best characterizes computers that use memory-mapped I/O?

## Q20 - Options
(A) The computer provides special instructions for manipulating I/O ports
(B) I/O ports are placed at addresses on the bus and are accessed just like other memory locations
(C) To perform I/O operations, it is sufficient to place the data in an address register and call channel to perform the operation
(D) I/O can be performed only when memory management hardware is turned on

## Q21
The content of the accumulator after the execution of the following 8085 assembly language program, is:

MVI A, 42H

MVI B, 05H

UGC: ADD B

DCR B

JNZ UGC

ADI 25H

HLT

## Q21 - Options
(A) 82H
(B) 78H
(C) 76H
(D) 47H

## Q22
The correct matching for the following pairs is

(A) DMA I/O (1) High speed RAM

(B) Cache (2) Disk

(C) Interrupt I/O (3) Printer

(D) Condition Code Register (4) ALU

## Q22 - Options
(A) A – 4 B – 3 C – 1 D – 2
(B) A – 2 B – 1 C – 3 D – 4
(C) A – 4 B – 3 C – 2 D – 1
(D) A – 2 B – 3 C – 4 D – 1

## Q23
Consider an instruction of the type LW R1, 20(R2) which during execution reads a 32 bit word from memory and stores it in a 32 bit register R1. The effective address of the memory location is obtained by adding a constant 20 and contents of R2. Which of the following best reflects the addressing mode implemented by this instruction for operand in memory?

## Q23 - Options
(A) Immediate addressing
(B) Register addressing
(C) Register Indirect addressing
(D) Indexed addressing

## Q24
A Computer uses a memory unit with 256K word of 32 bits each. A binary instruction code is stored in one word of memory. The instruction has four parts: an indirect bit, an operation code and a register code part to specify one of 64 registers and an address part. How many bits are there in operation code, the register code part and the address part ?

## Q24 - Options
(A) 7, 7, 18
(B) 18, 7, 7
(C) 7, 6, 18
(D) 6, 7, 18

## Q25
Which of the following pair is CORRECT?

I. Associative law : (x*y)*z = x*(y*z)

II. Distributive law : x*(y+z) = (x*y)+(x*z)

## Q25 - Options
(A) Only II
(B) Both I and II
(C) Only I
(D) Neither I nor II
