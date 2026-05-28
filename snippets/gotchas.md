# 算法中才会踩的语法坑

> 这些不是文档上没写的，而是平时用不到、刷题时才会中招的细节。
> 每条都是真实 bug 来源，不是理论警告。

---

## 目录

- [Python](#python)
- [TypeScript / JavaScript](#typescript--javascript)
- [Rust](#rust)

---

# Python

---

### 1. 矩阵初始化：`[[0]*n]*m` 是共享引用

```python
# 错误！m 行指向同一个列表
matrix = [[0] * 3] * 3
matrix[0][0] = 1
print(matrix)  # [[1, 0, 0], [1, 0, 0], [1, 0, 0]]  ← 所有行都变了

# 正确
matrix = [[0] * 3 for _ in range(3)]
matrix[0][0] = 1
print(matrix)  # [[1, 0, 0], [0, 0, 0], [0, 0, 0]]  ✓
```

---

### 2. 整除方向与 C/Java 不同：Python `//` 是向下取整

```python
-7 // 2   # == -4（向下，Python）
# C / Java / JS：-7 / 2 == -3（向零截断）

# 算法中常见坑：mid 计算
mid = (l + r) // 2    # Python 中等价于 floor((l+r)/2)，大多数情况没问题
# 但当 l 为负时要小心：(-3 + 1) // 2 == -1，不是 -2

# 向上整除（Python 惯用法）
(a + b - 1) // b      # 等价于 ceil(a/b)，但 a,b 必须为正
import math
math.ceil(a / b)      # 更安全，但返回 float
```

---

### 3. 取模符号：Python 余数符号跟除数走

```python
-7 % 2   # == 1（正！Python 中余数和除数同号）
7 % -2   # == -1

# C / Java / JS：-7 % 2 == -1（余数和被除数同号）

# 算法中的影响：哈希取模要保证非负
h = key % n           # Python 中 n > 0 时结果总是非负 ✓
# TypeScript/Java 中需要：((key % n) + n) % n
```

---

### 4. 回溯中忘记拷贝 path

```python
result = []
path = []

def bt(start):
    result.append(path)      # ❌ 追加的是引用，path 后续修改会影响 result
    result.append(path[:])   # ✓ 浅拷贝
    result.append(list(path))# ✓ 同上

# 深层嵌套时需要深拷贝
import copy
result.append(copy.deepcopy(path))
```

---

### 5. `sort()` 返回 None

```python
arr = [3, 1, 2]
arr = arr.sort()       # ❌ arr 现在是 None！
arr.sort()             # ✓ 原地排序，返回值无意义
arr = sorted(arr)      # ✓ 返回新列表
```

---

### 6. 默认参数是可变对象时在调用之间共享

```python
def add_to(val, arr=[]):     # ❌ arr 在所有调用间共享
    arr.append(val)
    return arr

add_to(1)  # [1]
add_to(2)  # [1, 2]  ← 不是 [2]！

def add_to(val, arr=None):   # ✓
    if arr is None:
        arr = []
    arr.append(val)
    return arr
```

---

### 7. `@cache` / `@lru_cache` 不能缓存列表参数（不可哈希）

```python
from functools import cache

@cache
def dp(arr: list, i: int):  # ❌ list 不可哈希，运行时报 TypeError
    ...

# 解法一：转成 tuple
@cache
def dp(arr: tuple, i: int): ...
dp(tuple(nums), 0)

# 解法二：用 memo dict 手动缓存
memo = {}
def dp(mask, i):
    if (mask, i) in memo: return memo[(mask, i)]
    ...
    memo[(mask, i)] = result
    return result
```

---

### 8. `and` / `or` 返回操作数，不是 bool

```python
0 or []       # 返回 []，不是 False
1 and "hello" # 返回 "hello"，不是 True

# 算法中常见误用
default = val or 0      # ❌ val 为 0 时也会返回 0（看似正确，但 val=[] 也返回 0）
default = val if val is not None else 0  # ✓ 明确判 None
default = val ?? 0      # TypeScript 的写法，Python 没有 ??
```

---

### 9. `is` 比较对象身份，`==` 比较值（小整数缓存坑）

```python
a = 256; b = 256
a is b   # True（CPython 缓存 -5 到 256 的整数对象）

a = 257; b = 257
a is b   # False（可能！取决于实现）

# 算法中绝对不要用 is 比较数值
if node.val is None: ...  # ✓（比较 None 可以用 is）
if x is 0: ...            # ❌ 应该用 ==
```

---

### 10. `max([]) ` 和 `min([])` 会抛 ValueError

```python
max([])   # ValueError: max() arg is an empty sequence

max([], default=-1)      # ✓ 空序列时返回 -1
max(a, b, default=...)   # ❌ default 只对单参数序列有效

# 算法中保护写法
ans = max(ans, candidate) if candidates else ans
```

---

### 11. `zip` 在最短序列处截断

```python
a = [1, 2, 3]
b = [4, 5]
list(zip(a, b))   # [(1, 4), (2, 5)]  ← 3 被丢弃！

# 需要等长时
from itertools import zip_longest
list(zip_longest(a, b, fillvalue=0))  # [(1,4),(2,5),(3,0)]
```

---

### 12. `deque` 的随机访问是 O(n)

```python
from collections import deque
q = deque(range(1000))
q[500]   # O(n)，不是 O(1)

# deque 只在头尾操作是 O(1)
# 需要随机访问用 list，需要两端 O(1) 操作用 deque
```

---

### 13. 浮点精度：不要直接比较浮点数

```python
0.1 + 0.2 == 0.3   # False！
0.1 + 0.2          # 0.30000000000000004

# 近似比较
abs(0.1 + 0.2 - 0.3) < 1e-9   # ✓

# 整数运算时避免转 float
# 坏：int(n ** 0.5) 可能因浮点误差少 1
# 好：import math; math.isqrt(n)
```

---

### 14. `float('inf')` 参与运算的陷阱

```python
float('inf') - float('inf')   # nan，不是 0！
float('inf') + float('-inf')  # nan
int(float('inf'))             # OverflowError

# 算法中用 float('inf') 做距离初始化时，加法前要检查
if dist[u] != float('inf'):
    dist[v] = min(dist[v], dist[u] + w)
```

---

### 15. `Counter` 相减不产生负值

```python
from collections import Counter
a = Counter({'x': 1})
b = Counter({'x': 3})
a - b   # Counter()  ← 结果为空，不是 Counter({'x': -2})
a.subtract(b)   # subtract 方法会保留负值
dict(a)         # {'x': -2}
```

---

### 16. `range(n, 0, -1)` 不包含 0

```python
list(range(3, 0, -1))   # [3, 2, 1]，不含 0
list(range(3, -1, -1))  # [3, 2, 1, 0]

# 反向遍历含 0
for i in range(n - 1, -1, -1): ...   # ← 常见写法
```

---

### 17. 切片赋值会改变长度

```python
arr = [1, 2, 3, 4, 5]
arr[1:3] = [10]        # [1, 10, 4, 5]  ← 两个元素被一个替换
arr[1:3] = [10, 20, 30]  # [1, 10, 20, 30, 4, 5]  ← 插入了更多元素

# 算法中慎用切片赋值，通常直接对 arr[i] 赋值更安全
```

---

### 18. 递归默认深度仅 1000，网格 DFS 必须调大

```python
import sys
sys.setrecursionlimit(10 ** 6)   # 放在文件顶部

# 更稳妥：改写为迭代 DFS（用显式 stack）
```

---

# TypeScript / JavaScript

---

### 1. `sort()` 不传比较函数：按字符串排序

```typescript
[10, 9, 2, 1].sort()         // [1, 10, 2, 9]  ← 字典序！
[10, 9, 2, 1].sort((a, b) => a - b)  // [1, 2, 9, 10]  ✓

// 字符串数字混合时也会出错
["10", "9", "2"].sort()      // ["10", "2", "9"]  ← 字典序
```

---

### 2. `new Array(n)` 和 `Array.from({length: n})` 的区别

```typescript
const a = new Array(3);
a.map(x => x + 1);   // [empty × 3]  ← map 跳过空槽！结果仍是空数组

const b = new Array(3).fill(0);
b.map(x => x + 1);   // [1, 1, 1]  ✓

const c = Array.from({ length: 3 }, (_, i) => i);  // [0, 1, 2]  ✓
```

---

### 3. `||` 和 `??` 的区别（0 和 '' 被 || 当 false 处理）

```typescript
const count = map.get(key) || 0;   // ❌ 当 value 为 0 时返回 0（看似正确）
                                    //    当 value 为 false/'' 时也返回 0（错！）
const count = map.get(key) ?? 0;   // ✓ 只有 null/undefined 时才用默认值

// 频率统计必须用 ??
map.set(key, (map.get(key) ?? 0) + 1);   // ✓
map.set(key, (map.get(key) || 0) + 1);   // ✓ 但语义不严格
```

---

### 4. `shift()` 是 O(n)，大数组 BFS 用它会 TLE

```typescript
const queue: number[] = [start];
const val = queue.shift();     // ❌ O(n)，每次移位整个数组

// 正确做法：用指针模拟队列
const queue: number[] = [start];
let head = 0;
const val = queue[head++];     // ✓ O(1)
```

---

### 5. 位运算截断为 32-bit signed int

```typescript
2 ** 31         // 2147483648（number，正常）
2 ** 31 | 0     // -2147483648（截断为 i32，变负！）
2 ** 32 - 1     // 4294967295（number，正常）
(2 ** 32 - 1) | 0  // -1（溢出）

// 影响：用位运算的快速幂、popcount 在大数时会出错
// 解法：大数用 BigInt，或避免中间结果超过 2^30
```

---

### 6. `NaN` 的比较行为

```typescript
NaN === NaN      // false！
NaN !== NaN      // true
typeof NaN       // "number"

Number.isNaN(NaN)   // true  ✓（推荐）
isNaN("abc")        // true  ← 全局 isNaN 会先转 Number，有误判

// 算法中：用 === 找 NaN 的值永远找不到
arr.includes(NaN)   // true（includes 用 SameValueZero，能找到 NaN）
arr.indexOf(NaN)    // -1  ← indexOf 用 ===，找不到 NaN！
```

---

### 7. `for...in` 遍历数组不推荐

```typescript
const arr = [10, 20, 30];
for (const i in arr) {
  console.log(i, typeof i);  // "0" string, "1" string, "2" string
}                              // ← 下标是字符串！计算会出错

for (const v of arr) { }      // ✓ 遍历值
for (let i = 0; i < arr.length; i++) { }  // ✓ 遍历下标（number）
arr.forEach((v, i) => { });   // ✓ 但不能 break
```

---

### 8. 对象用作哈希 Map 的坑

```typescript
const map: { [key: number]: number } = {};
map[1] = 10;
Object.keys(map);   // ["1"]  ← 键自动转为字符串！

// 整数键没问题（隐式转换后相等），但对象作键就完全错误：
const obj = {};
map[obj] = 1;        // map["[object Object]"] = 1  ← 所有对象共享同一个键！

// 正确做法：用 Map
const m = new Map<number, number>();
m.set(1, 10);
m.get(1);   // 10，键是 number 类型
```

---

### 9. 整数边界：`Number.MAX_SAFE_INTEGER`

```typescript
Number.MAX_SAFE_INTEGER   // 2^53 - 1 = 9007199254740991

// 超过这个值的整数运算不精确
9007199254740992 + 1      // 9007199254740992（加 1 没有效果！）

// 算法中大数运算（如 nCr）需要用 BigInt
BigInt(9007199254740991) + 1n  // 9007199254740992n  ✓
```

---

### 10. `Math.max()` / `Math.min()` 空参数的返回值

```typescript
Math.max()    // -Infinity（空时返回 -Infinity，不是 0！）
Math.min()    // Infinity

// 影响：用 Math.max(...arr) spread 大数组会 stack overflow
const big = new Array(100000).fill(1);
Math.max(...big);   // RangeError: Maximum call stack size exceeded

// 正确做法
big.reduce((a, b) => Math.max(a, b));   // ✓
big.reduce((a, b) => a > b ? a : b);   // ✓（更快，避免函数调用）
```

---

### 11. 字符串比较是字典序（数字字符串排序坑）

```typescript
"10" < "9"    // true！（"1" < "9" 字典序）
"10" > "9"    // false

// 影响：用字符串存数字再比较
const nums = ["10", "9", "2"];
nums.sort();                           // ["10", "2", "9"]  ← 错
nums.sort((a, b) => +a - +b);         // ["2", "9", "10"]  ✓
```

---

### 12. 解构赋值默认值只在 `undefined` 时生效，不对 `null` 生效

```typescript
const { a = 5 } = { a: null };
console.log(a);   // null  ← 不是 5！null !== undefined

const { a = 5 } = { a: undefined };
console.log(a);   // 5  ✓

// 算法中 Map 返回值
const { size = 0 } = map ?? {};   // map 为 null 时不生效
```

---

### 13. `>>` vs `>>>` 右移符号位

```typescript
-1 >> 1    // -1（算术右移，填充符号位 1）
-1 >>> 1   // 2147483647（逻辑右移，填充 0）

// 二分法 mid：
const mid = (l + r) >> 1;   // ✓ 当 l+r 不超过 2^30 时安全
const mid = Math.floor((l + r) / 2);  // ✓ 更安全
```

---

### 14. 闭包在循环中捕获变量引用（`var` 的经典坑）

```typescript
// var 会导致所有闭包共享同一个 i
const fns: (() => number)[] = [];
for (var i = 0; i < 3; i++) {
  fns.push(() => i);
}
fns.map(f => f())   // [3, 3, 3]  ← 全是 3

// 用 let 则每次迭代创建新绑定
for (let i = 0; i < 3; i++) {
  fns.push(() => i);
}
fns.map(f => f())   // [0, 1, 2]  ✓

// 算法中 DFS 用闭包时注意此点
```

---

### 15. `parseInt` 的解析停止行为

```typescript
parseInt("123abc")   // 123（遇到非数字停止，不报错！）
parseInt("abc")      // NaN
parseInt("0x10")     // 16（十六进制）
parseInt("010")      // 10（现代 JS），旧版本为 8（八进制）

Number("123abc")     // NaN（严格转换）
+"123abc"            // NaN
+"123"               // 123  ✓（快速转数字）
```

---

# Rust

---

### 1. `usize` 减法下溢：最常见的算法 bug

```rust
let i: usize = 0;
i - 1   // panic（debug）或 usize::MAX（release）！

// 算法中遍历到 0 的写法
for i in (1..n).rev() { ... }      // ✓ 从 n-1 到 1
for i in 0..n { ... }              // ✓ 反向：n-1 downto 0 用 rev()

// 需要做减法时用 i32 / i64，或检查
if i > 0 { let prev = i - 1; }    // ✓ 检查后再减
i.checked_sub(1)                   // Option<usize>  ✓
i.saturating_sub(1)                // 最低钳制到 0  ✓

// 网格边界判断：转成 i32 再计算
let nr = r as i32 + dr;
if nr >= 0 && nr < rows as i32 { let r2 = nr as usize; }
```

---

### 2. 整除向零截断（与 Python 不同）

```rust
-7_i32 / 2    // -3（向零截断，不是 -4！）
-7_i32 % 2    // -1（余数跟被除数同号）

// Python 的行为
// -7 // 2 == -4（floor），-7 % 2 == 1（正）

// Rust 的欧几里得运算（等同 Python 行为）
(-7_i32).div_euclid(2)   // -4
(-7_i32).rem_euclid(2)   // 1

// 哈希取模保证非负
let h = key.rem_euclid(n as i32) as usize;
```

---

### 3. Debug 模式 overflow panic，release 模式静默回绕

```rust
let x: i32 = i32::MAX;
x + 1   // debug: panic! overflow
        // release: -2147483648（回绕）

// 正确做法（选一种）
x.checked_add(1)      // Option<i32>，溢出时 None
x.saturating_add(1)   // 钳制到 i32::MAX
x.wrapping_add(1)     // 明确回绕（-2147483648）

// Dijkstra 中更新距离前要防溢出
if dist[u] != i64::MAX && dist[u] + w < dist[v] { ... }
// 或者用 i64::MAX / 2 作为初始值
```

---

### 4. `Vec::swap` vs 同时可变借用两个下标

```rust
let mut v = vec![1, 2, 3];

// ❌ 同时可变借用两个元素：编译错误！
let a = &mut v[0];
let b = &mut v[1];   // error: cannot borrow `v` as mutable more than once

// ✓ 用 swap
v.swap(0, 1);

// ✓ 用 split_at_mut 获取两个可变引用
let (left, right) = v.split_at_mut(1);
let a = &mut left[0];
let b = &mut right[0];   // right[0] 是原来的 v[1]
```

---

### 5. 字符串不能用下标索引

```rust
let s = String::from("hello");
s[0]        // ❌ 编译错误：String 不支持 Index<usize>
&s[0..1]    // ✓ 字节切片（但 UTF-8 非 ASCII 时可能在字符中间切，panic）

// 安全方法
s.chars().nth(0)           // Option<char>，O(n)！不是 O(1)
s.chars().collect::<Vec<char>>()[0]   // O(n) 建 Vec 后再 O(1) 访问

// 算法中处理字符：先转 Vec<char>
let chars: Vec<char> = s.chars().collect();
chars[i]    // ✓ O(1)
```

---

### 6. `chars().nth(i)` 是 O(n)，不是 O(1)

```rust
// 如果需要多次随机访问字符，必须先 collect
let s = "hello world";
for i in 0..s.len() {
    s.chars().nth(i)   // ❌ 总复杂度 O(n^2)！
}

let chars: Vec<char> = s.chars().collect();  // O(n) 一次
for i in 0..chars.len() {
    chars[i]           // ✓ O(1)
}
```

---

### 7. `as` 强制转换会静默截断

```rust
300_u32 as u8    // 44（300 % 256，不报错！）
-1_i32 as u32    // 4294967295（回绕）
3.9_f64 as i32   // 3（截断，不是四舍五入）
f64::NAN as i32  // 0（实现定义行为，不要依赖）
f64::INFINITY as i32  // i32::MAX（saturating，Rust 1.45+）

// 安全转换
let n: i32 = 300;
let b: u8 = n.try_into().unwrap();    // Ok(44)? 不，会 Err（超出 u8 范围）
// try_into 会检查范围，超出时返回 Err
```

---

### 8. `BinaryHeap` 是大顶堆，Dijkstra 必须用 `Reverse`

```rust
use std::collections::BinaryHeap;
use std::cmp::Reverse;

// 错误：直接用，弹出的是最大距离，不是最小
let mut heap = BinaryHeap::new();
heap.push((dist, node));          // ❌ 最大堆，Dijkstra 需要最小堆

// 正确：用 Reverse 包装
let mut heap: BinaryHeap<Reverse<(i64, usize)>> = BinaryHeap::new();
heap.push(Reverse((0, start)));
let Reverse((d, u)) = heap.pop().unwrap();
```

---

### 9. `f64` 没有 `Ord`，不能直接放入 `BinaryHeap` 或排序

```rust
let mut v: Vec<f64> = vec![3.0, 1.0, 2.0];
v.sort()   // ❌ 编译错误：f64 不实现 Ord（因为 NaN）

v.sort_by(|a, b| a.partial_cmp(b).unwrap());   // ✓（假设没有 NaN）
v.sort_by(|a, b| a.total_cmp(b));              // ✓ Rust 1.62+，处理 NaN

// BinaryHeap<f64> 也不行——需要包装类型或转成整数
```

---

### 10. HashMap 迭代时不能修改（并发修改问题）

```rust
let mut map: HashMap<i32, i32> = HashMap::new();

// ❌ 编译错误：迭代时持有不可变引用，不能同时可变借用
for (&k, v) in &map {
    map.insert(k + 1, *v);   // error: cannot borrow `map` as mutable
}

// ✓ 先收集，再修改
let keys: Vec<i32> = map.keys().cloned().collect();
for k in keys {
    let v = map[&k];
    map.insert(k + 1, v);
}
```

---

### 11. 递归在 Rust 中容易碰到借用检查器

```rust
// ❌ 典型问题：递归时同时借用 graph 和 visited
fn dfs(graph: &Vec<Vec<usize>>, visited: &mut Vec<bool>, node: usize) {
    visited[node] = true;
    for &nb in &graph[node] {   // 借用 graph
        if !visited[nb] {
            dfs(graph, visited, nb);   // ✓ 这里实际上是可以的
        }
    }
}
// 上面这个其实可以编译，因为 graph 是不可变引用

// 真正的问题：tree 结构递归（Rc<RefCell<T>>）
// 推荐：算法题中用下标表示树/图节点，避免 Rc<RefCell<T>>
```

---

### 12. `vec![expr; n]` 的 expr 只求值一次

```rust
// ✓ 对 Copy 类型没问题（0 是 Copy）
let v: Vec<i32> = vec![0; n];

// ❌ 对非 Copy 类型：所有元素是同一个对象（但 Rust 实际上会 clone）
// vec![String::new(); 3] 会 clone，产生 3 个独立的 String ✓

// 真正的坑：Vec<Vec<T>>
let matrix: Vec<Vec<i32>> = vec![vec![0; cols]; rows];
// ✓ 这是安全的，每个 vec![0; cols] 都是独立的（被 clone）
// Rust 不像 Python 那样共享引用

// 但如果 T 是 Rc/Arc，clone 是浅拷贝
```

---

### 13. `entry().or_insert()` 返回的是 `&mut V`

```rust
let mut map: HashMap<i32, Vec<i32>> = HashMap::new();

// 常见用法
map.entry(key).or_insert_with(Vec::new).push(val);  // ✓

// 想要修改返回值
let v = map.entry(key).or_insert(0);
*v += 1;   // ✓ 必须解引用

// 条件性修改
let count = map.entry(key).or_insert(0);
*count += 1;
```

---

### 14. `collect()` 需要明确类型注解

```rust
// ❌ 编译器不知道收集成什么类型
let result = v.iter().filter(|&&x| x > 0).collect();

// ✓ 几种注解方式
let result: Vec<_> = v.iter().filter(|&&x| x > 0).collect();
let result: Vec<i32> = v.iter().filter(|&&x| x > 0).cloned().collect();
let result = v.iter().filter(|&&x| x > 0).cloned().collect::<Vec<_>>();
```

---

### 15. 迭代器的 `iter()` vs `into_iter()` vs `iter_mut()`

```rust
let v = vec![1, 2, 3];

for x in v.iter() { }        // x: &i32，v 仍可用
for x in v.iter_mut() { }    // x: &mut i32，v 仍可用
for x in v.into_iter() { }   // x: i32，v 被消耗，之后不能用 v！
for x in &v { }              // 等价 v.iter()
for x in &mut v { }          // 等价 v.iter_mut()
for x in v { }               // 等价 v.into_iter()

// 链式操作中 .iter() 产生 &&T 的情况
v.iter().filter(|x| **x > 0)    // x: &&i32，需要双重解引用
v.iter().filter(|&&x| x > 0)    // ✓ 模式解构更清晰
```

---

## 三语言对照：同一个坑的不同表现

| 场景 | Python | TypeScript | Rust |
|---|---|---|---|
| **整除方向** | `//` 向下（-7//2=-4） | 无整除，`Math.floor(-7/2)=-4` | `/` 向零（-7/2=-3） |
| **取模符号** | 跟除数走（-7%2=1） | 跟被除数走（-7%2=-1） | 跟被除数走（-7%2=-1） |
| **矩阵初始化** | `[[0]*n]*m` 共享引用 ⚠️ | `new Array(m).fill(arr)` 共享引用 ⚠️ | `vec![vec![0;n];m]` 安全 ✓ |
| **排序默认** | 正确升序 ✓ | 字典序 ⚠️ | 需 Ord trait，正确 ✓ |
| **空数组 max** | 抛 ValueError | 返回 -Infinity | `iter().max()` 返回 `None` |
| **大整数** | 原生任意精度 ✓ | 超 2^53 不精确 ⚠️ | 固定位宽，overflow panic ⚠️ |
| **下标访问** | 负数合法（-1=末尾） | 负数返回 undefined | 负数编译错误（usize） |
| **回溯拷贝** | 必须 `path[:]` | 必须 `[...path]` | 必须 `path.clone()` |
