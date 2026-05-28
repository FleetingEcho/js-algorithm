# 位运算

> 核心一句话：**位运算常考技巧：判断奇偶（x&1）、消除最低位1（x&(x-1)）、取最低位1（x&-x）、异或性质（x^x=0, x^0=x）。**

---

## 🗺️ 位运算题型决策图

```mermaid
flowchart TD
    START["位运算题"] --> ASK{"看到什么特征?"}
    ASK -->|一个数出现一次，其余两次| XOR["全体异或<br/>a xor a = 0"]
    ASK -->|一个数出现一次，其余三次| MOD3["逐位计数 mod 3"]
    ASK -->|两个数出现一次| SPLIT["先异或得到 diff<br/>用 lowbit 分组"]
    ASK -->|判断 2 的幂| POWER["n > 0 且 n & (n-1) == 0"]
    ASK -->|统计 1 的个数| COUNT["循环 n &= n-1"]
    ASK -->|枚举子集| MASK["mask 从 0 到 2^n-1"]
    ASK -->|树状数组 lowbit| LOWBIT["x & -x"]
```

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                                   | 题目                 | 难度 | 核心考点          | 推荐指数 |
| --- | ------------------------------------------------------ | -------------------- | :--: | ----------------- | :------: |
| 1   | [136](https://leetcode.cn/problems/single-number/)     | 只出现一次的数字     |  🟢  | a⊕a=0             |    ⭐    |
| 2   | [137](https://leetcode.cn/problems/single-number-ii/)  | 只出现一次的数字 II  |  🟡  | 位计数 mod 3      |   ⭐⭐   |
| 3   | [260](https://leetcode.cn/problems/single-number-iii/) | 只出现一次的数字 III |  🟡  | 分组异或          |   ⭐⭐   |
| 4   | [191](https://leetcode.cn/problems/number-of-1-bits/)  | 位1的个数            |  🟢  | n&(n-1)           |    ⭐    |
| 5   | [231](https://leetcode.cn/problems/power-of-two/)      | 2 的幂               |  🟢  | n>0 && n&(n-1)==0 |    ⭐    |
| 6   | [78](https://leetcode.cn/problems/subsets/)            | 子集                 |  🟡  | 位掩码枚举        |   ⭐⭐   |
| 7   | [204](https://leetcode.cn/problems/count-primes/)      | 计数质数             |  🟢  | 埃氏筛            |   ⭐⭐   |
| 8   | [50](https://leetcode.cn/problems/powx-n/)             | Pow(x, n)            |  🟡  | 快速幂            |   ⭐⭐   |
| 9   | [372](https://leetcode.cn/problems/super-pow/)         | 超级次方             |  🟡  | 取模快速幂        |   ⭐⭐   |

---

## 📐 常用技巧

```typescript
// bit-manipulation-tricks.ts

// ① 判断奇偶
function isOdd(x: number): boolean {
  return (x & 1) === 1;
}

// ② 消除最低位的 1
function removeLowestBit(x: number): number {
  return x & (x - 1);
}

// ③ 取最低位的 1
function lowestBit(x: number): number {
  return x & -x;
}

// ④ 判断 2 的幂
function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}

// ⑤ 统计 1 的个数
function countBits(n: number): number {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
}

// ⑥ 异或找只出现一次的数
function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b, 0);
}

// ⑦ 用位掩码枚举子集
function subsetsBitmask(nums: number[]): number[][] {
  const result: number[][] = [];
  for (let mask = 0; mask < 1 << nums.length; mask++) {
    const subset: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if (mask & (1 << i)) subset.push(nums[i]);
    }
    result.push(subset);
  }
  return result;
}
```

```python
def is_odd(x: int) -> bool:
    return (x & 1) == 1


def remove_lowest_bit(x: int) -> int:
    return x & (x - 1)


def lowest_bit(x: int) -> int:
    return x & -x


def is_power_of_two(n: int) -> bool:
    return n > 0 and (n & (n - 1)) == 0


def count_bits(n: int) -> int:
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count


def single_number(nums: list[int]) -> int:
    ans = 0
    for num in nums:
        ans ^= num
    return ans


def subsets_bitmask(nums: list[int]) -> list[list[int]]:
    result = []
    for mask in range(1 << len(nums)):
        subset = []
        for i, num in enumerate(nums):
            if mask & (1 << i):
                subset.append(num)
        result.append(subset)
    return result
```

---

## 🔢 数学与数论

> 高频面试和 DP 问题常要求大数取模（`mod = 10^9 + 7`）、分解因数、判断素数。以下模板是这类题的基础工具。

### GCD / LCM（辗转相除法）

```typescript
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a / gcd(a, b)) * b;
}
```

```python
from math import gcd

def lcm(a: int, b: int) -> int:
    return a // gcd(a, b) * b  # Python 3.9+ 有内置 math.lcm
```

### 快速幂（Binary Exponentiation）

```typescript
function fastPow(base: number, exp: number, mod: number): number {
  let result = 1;
  base %= mod;
  while (exp > 0) {
    if (exp & 1) result = result * base % mod;
    base = base * base % mod;
    exp >>= 1;
  }
  return result;
}
```

```python
def fast_pow(base: int, exp: int, mod: int) -> int:
    # Python 内置 pow(base, exp, mod) 即三参数快速幂，推荐直接用
    return pow(base, exp, mod)
```

### 埃氏筛（Sieve of Eratosthenes）

```typescript
function sieve(n: number): boolean[] {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) isPrime[j] = false;
    }
  }
  return isPrime;
}
```

```python
def sieve(n: int) -> list[bool]:
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    i = 2
    while i * i <= n:
        if is_prime[i]:
            for j in range(i * i, n + 1, i):
                is_prime[j] = False
        i += 1
    return is_prime
```

### 取模技巧（MOD = 10^9 + 7）

```
加法：(a + b) % MOD
乘法：(a * b) % MOD
减法：((a - b) % MOD + MOD) % MOD   ← 防止结果为负
快速幂：fastPow(base, exp, MOD)      / Python: pow(base, exp, MOD)
```

---

## 🎯 易错点

```
[ ] JavaScript/TypeScript 位运算会转成 32-bit signed int，大数要小心。
[ ] 判断 2 的幂必须先检查 n > 0。
[ ] x & -x 取最低位 1，常用于树状数组。
[ ] 子集枚举复杂度是 O(n * 2^n)，n 通常不能太大。
[ ] 快速幂中 base 必须先对 mod 取余，避免后续大数溢出。
[ ] 埃氏筛内层从 i*i 开始，不是 2*i（更小的倍数已被标记过）。
[ ] TS/JS 大数乘法可能超过 Number.MAX_SAFE_INTEGER，需用 BigInt 或分步取模。
[ ] Python 的 pow(b, e, m) 三参数形式直接支持快速幂，效率高于手写循环。
```

---

> **关联阅读：** `34-algorithm-pattern-recognition.md` → `40-bitmask-dp.md`（状态压缩 DP）
