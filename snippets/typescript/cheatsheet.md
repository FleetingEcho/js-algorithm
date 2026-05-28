# TypeScript 算法代码片段

> LeetCode TypeScript 模式下最常用的写法速查。注意：TS 数字运算全为 float64，位运算会截断为 32-bit signed int。

---

## 1. 数组基础

```typescript
// ---------- 初始化 ----------
const arr = new Array(n).fill(0);
const matrix: number[][] = Array.from({ length: rows }, () => new Array(cols).fill(0));
const range = Array.from({ length: n }, (_, i) => i);   // [0, 1, ..., n-1]

// ---------- 交换 ----------
[arr[i], arr[j]] = [arr[j], arr[i]];          // 解构赋值，无需 temp

// ---------- 反转 ----------
arr.reverse();                                  // 原地 O(n)
[...arr].reverse();                             // 新数组

// ---------- 切片 ----------
arr.slice(l, r);                                // [l, r)，返回新数组
arr.slice(-2);                                  // 最后两个元素

// ---------- 排序（必须指定比较函数！）----------
arr.sort((a, b) => a - b);                      // 数字升序
arr.sort((a, b) => b - a);                      // 数字降序
arr.sort((a, b) => a.localeCompare(b));         // 字符串字典序
// 不传比较函数时会按 toString() 排序，[-10, 9] 会变成 [-10, 9]（看似正确但 [10, 9] 会错！）

// ---------- 查找 ----------
arr.indexOf(x);                                  // 第一个 x 的下标（-1 表示不存在）
arr.includes(x);                                 // 是否存在 O(n)
arr.findIndex(x => x > 5);                      // 找第一个满足条件的下标
arr.find(x => x > 5);                           // 找第一个满足条件的值

// ---------- 增删 ----------
arr.push(x);                                     // 尾部添加 O(1)
arr.pop();                                       // 弹出末尾 O(1)
arr.unshift(x);                                  // 头部插入 O(n)
arr.shift();                                     // 弹出头部 O(n)
arr.splice(i, 1);                               // 删除下标 i 的元素，O(n)
arr.splice(i, 0, x);                            // 在下标 i 插入 x，O(n)

// ---------- 聚合 ----------
arr.reduce((acc, x) => acc + x, 0);             // 求和
Math.max(...arr);                                // 最大值（数组小时用，大时用 reduce）
Math.min(...arr);
arr.reduce((a, b) => Math.max(a, b));            // 大数组用 reduce

// ---------- 变换 ----------
arr.map(x => x * 2);
arr.filter(x => x > 0);
arr.flat();                                      // 一层展开
arr.flat(Infinity);                             // 完全展开嵌套数组
arr.flatMap(x => [x, x * 2]);                  // map + 一层 flat

// ---------- 复制 ----------
[...arr];                                        // 浅拷贝
arr.slice();                                     // 浅拷贝
arr.map(row => [...row]);                        // 矩阵深拷贝（一层）

// ---------- 推导：TS 没有列表推导，用 map/filter/Array.from ----------
const even = arr.filter(x => x % 2 === 0);
const flat = matrix.flat();
```

---

## 2. 双指针

```typescript
// ---------- 左右夹逼（有序数组 two-sum）----------
function twoSumSorted(arr: number[], target: number): [number, number] {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    const s = arr[l] + arr[r];
    if (s === target) return [l, r];
    else if (s < target) l++;
    else r--;
  }
  return [-1, -1];
}

// ---------- 快慢指针（链表中点）----------
function findMiddle(head: ListNode | null): ListNode | null {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

// ---------- 快慢指针（原地去重）----------
function removeDuplicates(nums: number[]): number {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (fast === 0 || nums[fast] !== nums[fast - 1]) {
      nums[slow++] = nums[fast];
    }
  }
  return slow;
}

// ---------- 三指针（荷兰国旗）----------
function sortColors(nums: number[]): void {
  let lo = 0, mid = 0, hi = nums.length - 1;
  while (mid <= hi) {
    if (nums[mid] === 0) {
      [nums[lo], nums[mid]] = [nums[mid], nums[lo]];
      lo++; mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[hi]] = [nums[hi], nums[mid]];
      hi--;
    }
  }
}
```

---

## 3. 滑动窗口

```typescript
// ---------- 可变窗口（最小覆盖子串）----------
function minWindow(s: string, t: string): string {
  const need = new Map<string, number>();
  for (const c of t) need.set(c, (need.get(c) ?? 0) + 1);
  const window = new Map<string, number>();

  let l = 0, r = 0, valid = 0;
  let start = 0, minLen = Infinity;

  while (r < s.length) {
    const c = s[r++];
    if (need.has(c)) {
      window.set(c, (window.get(c) ?? 0) + 1);
      if (window.get(c) === need.get(c)) valid++;
    }
    while (valid === need.size) {
      if (r - l < minLen) { minLen = r - l; start = l; }
      const d = s[l++];
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.set(d, window.get(d)! - 1);
      }
    }
  }
  return minLen === Infinity ? "" : s.slice(start, start + minLen);
}

// ---------- 定长窗口（字符异位词）----------
function findAnagrams(s: string, p: string): number[] {
  const need = new Array(26).fill(0);
  const window = new Array(26).fill(0);
  for (const c of p) need[c.charCodeAt(0) - 97]++;

  const k = p.length;
  const result: number[] = [];

  for (let r = 0; r < s.length; r++) {
    window[s.charCodeAt(r) - 97]++;
    if (r >= k) window[s.charCodeAt(r - k) - 97]--;
    if (window.every((v, i) => v === need[i])) result.push(r - k + 1);
  }
  return result;
}

// ---------- 满足条件的最短子数组 ----------
function minSubarrayLen(target: number, nums: number[]): number {
  let l = 0, total = 0, ans = Infinity;
  for (let r = 0; r < nums.length; r++) {
    total += nums[r];
    while (total >= target) {
      ans = Math.min(ans, r - l + 1);
      total -= nums[l++];
    }
  }
  return ans === Infinity ? 0 : ans;
}
```

---

## 4. DFS 模板

```typescript
// ---------- 图 DFS（邻接表）----------
function dfsGraph(graph: number[][], start: number): void {
  const visited = new Set<number>();
  function dfs(node: number): void {
    if (visited.has(node)) return;
    visited.add(node);
    for (const nb of graph[node]) dfs(nb);
  }
  dfs(start);
}

// ---------- 网格 DFS ----------
const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function dfsGrid(grid: string[][], r: number, c: number): void {
  const rows = grid.length, cols = grid[0].length;
  if (r < 0 || r >= rows || c < 0 || c >= cols) return;
  if (grid[r][c] !== '1') return;
  grid[r][c] = '#';                             // 原地标记，避免重复
  for (const [dr, dc] of DIRS) dfsGrid(grid, r + dr, c + dc);
}

// ---------- 岛屿数量 ----------
function numIslands(grid: string[][]): number {
  let count = 0;
  for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[0].length; c++)
      if (grid[r][c] === '1') { dfsGrid(grid, r, c); count++; }
  return count;
}

// ---------- 回溯（子集）----------
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function bt(start: number): void {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      bt(i + 1);
      path.pop();
    }
  }

  bt(0);
  return result;
}

// ---------- 回溯（全排列，去重）----------
function permutationsUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const path: number[] = [];
  const used = new Array(nums.length).fill(false);

  function bt(): void {
    if (path.length === nums.length) { result.push([...path]); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; // 同层去重
      used[i] = true;
      path.push(nums[i]);
      bt();
      path.pop();
      used[i] = false;
    }
  }

  bt();
  return result;
}
```

---

## 5. BFS 模板

```typescript
// ---------- 单源最短路 ----------
function bfs(graph: number[][], start: number, target: number): number {
  const queue: number[] = [start];
  const visited = new Set<number>([start]);
  let step = 0, head = 0;

  while (head < queue.length) {
    const size = queue.length - head;
    for (let i = 0; i < size; i++) {
      const node = queue[head++];
      if (node === target) return step;
      for (const nb of graph[node])
        if (!visited.has(nb)) { visited.add(nb); queue.push(nb); }
    }
    step++;
  }
  return -1;
}

// ---------- 网格 BFS ----------
function bfsGrid(grid: number[][], sr: number, sc: number): number {
  const rows = grid.length, cols = grid[0].length;
  const queue: [number, number, number][] = [[sr, sc, 0]];
  const visited = new Set<number>([sr * cols + sc]);   // 2D 坐标编码为 1D

  while (queue.length) {
    const [r, c, d] = queue.shift()!;
    if (r === rows - 1 && c === cols - 1) return d;
    for (const [dr, dc] of DIRS) {
      const nr = r + dr, nc = c + dc;
      const key = nr * cols + nc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited.has(key) && grid[nr][nc] === 0) {
        visited.add(key);
        queue.push([nr, nc, d + 1]);
      }
    }
  }
  return -1;
}

// ---------- 多源 BFS ----------
function multiSourceBfs(grid: number[][]): number[][] {
  const rows = grid.length, cols = grid[0].length;
  const dist: number[][] = Array.from({ length: rows }, () => new Array(cols).fill(Infinity));
  const queue: [number, number][] = [];

  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      if (grid[r][c] === 0) { dist[r][c] = 0; queue.push([r, c]); }

  let head = 0;
  while (head < queue.length) {
    const [r, c] = queue[head++];
    for (const [dr, dc] of DIRS) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && dist[nr][nc] === Infinity) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }
  return dist;
}
```

---

## 6. 排序技巧

```typescript
// 数字排序（必须写比较函数，不然按字符串）
arr.sort((a, b) => a - b);

// 按对象属性
intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);   // 先按第一项，再按第二项

// 字符串排序（默认就是字典序）
words.sort();
words.sort((a, b) => a.length - b.length || a.localeCompare(b));

// 获取排序下标
const order = Array.from({ length: arr.length }, (_, i) => i)
  .sort((i, j) => arr[i] - arr[j]);

// 快速选择（Kth 最大）—— Array.prototype.sort 代替
function kthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
```

---

## 7. 字符串

```typescript
// ---------- 字符 ↔ 编码 ----------
s.charCodeAt(0);                                // 字符 → ASCII 数字
String.fromCharCode(97);                        // 97 → 'a'
s.charCodeAt(i) - 97;                           // 'a'=0, 'z'=25
String.fromCharCode(97 + i);                    // 0→'a', 25→'z'

// ---------- 拆分 / 合并 ----------
[...s];                                          // string → char[]（支持 Unicode）
s.split('');                                     // 同上（ASCII-only 场景）
chars.join('');                                  // char[] → string

// ---------- 查找 / 替换 ----------
s.indexOf('sub');                               // 第一次出现（-1 不存在）
s.lastIndexOf('sub');
s.includes('sub');
s.replace('old', 'new');                        // 只替换第一个
s.replaceAll('old', 'new');                     // 替换全部
s.match(/\d+/g);                               // 正则匹配所有数字串

// ---------- 切片 / 截断 ----------
s.slice(l, r);                                  // [l, r)，支持负数下标
s.substring(l, r);                              // [l, r)，不支持负数
s.at(-1);                                       // 最后一个字符（ES2022）

// ---------- 大小写 / 空白 ----------
s.toLowerCase(), s.toUpperCase();
s.trim(), s.trimStart(), s.trimEnd();

// ---------- 回文 ----------
const isPalindrome = (s: string) => s === [...s].reverse().join('');

// ---------- 字符串转数字 ----------
parseInt('42');
parseFloat('3.14');
Number('42');
+'42';                                           // 最简写法，但 NaN 风险
```

---

## 8. Map / Set / 堆

```typescript
// ===== Map =====
const map = new Map<string, number>();
map.set(key, val);
map.get(key);                                    // undefined 如果不存在
map.get(key) ?? 0;                              // 不存在时默认 0
map.has(key);
map.delete(key);
map.size;

for (const [k, v] of map) { }
[...map.keys()], [...map.values()], [...map.entries()]

// 计数器常用写法
map.set(key, (map.get(key) ?? 0) + 1);

// ===== Set =====
const set = new Set<number>();
set.add(x);
set.has(x);
set.delete(x);
set.size;
[...set];                                        // 转数组

// ===== 小顶堆（需手动实现或使用库）=====
// LeetCode 默认不内置优先队列，推荐手写最小堆：
class MinHeap {
  private heap: number[] = [];

  push(val: number): void {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  pop(): number {
    const top = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return top;
  }

  peek(): number { return this.heap[0]; }
  size(): number { return this.heap.length; }

  private _bubbleUp(i: number): void {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  private _sinkDown(i: number): void {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}
```

---

## 9. 数学工具

```typescript
// ---------- 常用常量 ----------
Number.MAX_SAFE_INTEGER;                        // 2^53 - 1
Number.MIN_SAFE_INTEGER;
Infinity; -Infinity;
Number.isInteger(x);
Number.isNaN(x);                                // 注意：isNaN('abc') === true，要用 Number.isNaN

// ---------- 数学函数 ----------
Math.max(a, b, c);
Math.min(...arr);
Math.abs(x);
Math.floor(x); Math.ceil(x); Math.round(x);
Math.sqrt(x);
Math.pow(a, b);                                 // a^b
Math.log2(x); Math.log(x);

// ---------- 整数运算 ----------
Math.floor(a / b);                              // 整除（向下）
(a + b - 1) / b | 0;                           // 向上整除（| 0 截断）
a % b;                                          // 余数（符号跟 a 走，可能为负）
((a % b) + b) % b;                             // 保证非负余数

// ---------- 位运算（32-bit signed int）----------
x & 1;                                          // 判奇
x >> 1;                                         // 除以 2
x << 1;                                         // 乘以 2
x & (x - 1);                                   // 消除最低位 1
x & -x;                                         // 取最低位 1（lowbit）
~x + 1;                                          // 取负（相当于 -x 在 32-bit）
x | 0;                                           // 快速取整（截断小数）

// ---------- GCD ----------
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// ---------- 快速幂 ----------
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

---

## 10. TypeScript 特有技巧

```typescript
// ---------- 类型断言 ----------
const val = arr[0]!;                            // 非空断言（确定不为 null/undefined）
const n = map.get(key) as number;               // 类型转换

// ---------- 可选链 / 空值合并 ----------
node?.next?.val;                                // 短路，undefined 时不报错
map.get(key) ?? defaultVal;                     // null/undefined 时返回默认值

// ---------- 元组解构 ----------
const [a, b, ...rest] = arr;
const [[r, c], dist] = entry;

// ---------- 常见初始化写法 ----------
const dp = new Array(n + 1).fill(0);
const dp2d = Array.from({ length: m }, () => new Array(n).fill(Infinity));
const graph: number[][] = Array.from({ length: n }, () => []);

// ---------- 用数组模拟队列（避免 shift() 的 O(n)）----------
const queue: number[] = [];
let head = 0;
queue.push(x);                                  // 入队
const val = queue[head++];                      // 出队（不用 shift）

// ---------- 字符串中字符频率数组 ----------
const freq = new Array(26).fill(0);
for (const c of s) freq[c.charCodeAt(0) - 97]++;

// ---------- 二维坐标编码为一维（BFS 去重）----------
const key = r * cols + c;                       // 编码
const r2 = Math.floor(key / cols);             // 解码行
const c2 = key % cols;                          // 解码列

// ---------- 打印调试（LeetCode 不输出，但本地用）----------
console.log(JSON.stringify(matrix));

// ---------- BigInt（大数乘法，面试不常用）----------
const big = BigInt(n);
big * BigInt(m);                                // 注意不能混用 number 和 BigInt
```
