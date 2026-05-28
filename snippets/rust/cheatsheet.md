# Rust 算法代码片段

> Rust 特有规则：所有权 / 借用检查器让递归 DFS 和树操作比 Python/TS 更绕。本文重点解决这类问题，优先给出迭代版本。

---

## 1. Vec 基础

```rust
// ---------- 初始化 ----------
let arr: Vec<i32> = vec![0; n];
let matrix: Vec<Vec<i32>> = vec![vec![0; cols]; rows];
let range: Vec<usize> = (0..n).collect();
let mut v: Vec<i32> = Vec::with_capacity(n);   // 预分配容量

// ---------- 交换 ----------
v.swap(i, j);                                   // 安全交换，不用借用 v[i] 和 v[j]

// ---------- 反转 ----------
v.reverse();                                     // 原地 O(n)
let rev: Vec<_> = v.iter().rev().cloned().collect(); // 新 Vec

// ---------- 切片 ----------
&v[l..r];                                        // [l, r) 切片引用
&v[l..=r];                                       // [l, r] 含 r
v[l..r].to_vec();                               // 复制为新 Vec

// ---------- 排序 ----------
v.sort();                                        // 升序，需 Ord
v.sort_unstable();                              // 更快的升序（不稳定）
v.sort_by(|a, b| a.cmp(b));                    // 自定义升序
v.sort_by(|a, b| b.cmp(a));                    // 降序
v.sort_by_key(|&x| std::cmp::Reverse(x));      // 降序（Reverse 包装）
v.sort_by(|a, b| a.partial_cmp(b).unwrap());   // f64 排序（f64 没有 Ord，只有 PartialOrd）

// ---------- 增删 ----------
v.push(x);
v.pop();                                         // Option<T>
v.insert(i, x);                                 // O(n)
v.remove(i);                                    // O(n)，返回被删元素
v.retain(|&x| x > 0);                          // 原地过滤（相当于 filter）

// ---------- 查找 ----------
v.contains(&x);
v.iter().position(|&x| x > 5);                 // Option<usize>
v.binary_search(&x);                            // Result<usize, usize>（需有序）
v.partition_point(|&x| x < target);            // 等同 bisect_left

// ---------- 聚合 ----------
v.iter().sum::<i32>();
v.iter().min().copied();                        // Option<i32>
v.iter().max().copied();
v.iter().fold(0, |acc, &x| acc + x);

// ---------- 去重（需先排序）----------
v.sort_unstable();
v.dedup();                                       // 删除连续重复

// ---------- 拼接 ----------
v.extend(other.iter().cloned());                // 追加另一个 Vec
let merged: Vec<i32> = a.iter().chain(b.iter()).cloned().collect();
```

---

## 2. 迭代器（Rust 核心能力）

```rust
// ---------- 基础适配器 ----------
v.iter()                                         // &T 迭代器
v.iter_mut()                                     // &mut T 迭代器
v.into_iter()                                    // T 迭代器（消耗所有权）

// ---------- 变换 ----------
let doubled: Vec<i32> = v.iter().map(|&x| x * 2).collect();
let even: Vec<i32> = v.iter().filter(|&&x| x % 2 == 0).cloned().collect();
let flat: Vec<i32> = matrix.iter().flatten().cloned().collect();
let pairs: Vec<_> = a.iter().zip(b.iter()).collect();         // zip
let indexed: Vec<_> = v.iter().enumerate().collect();         // (index, &val)

// ---------- 窗口 / 分块 ----------
v.windows(k);                                    // 滑动窗口，每个是 &[T] slice
v.chunks(k);                                     // 不重叠分块

// ---------- 短路迭代器 ----------
v.iter().any(|&x| x > 5);
v.iter().all(|&x| x > 0);
v.iter().find(|&&x| x > 5);                     // Option<&T>
v.iter().position(|&x| x > 5);                  // Option<usize>
v.iter().count();

// ---------- 汇聚 ----------
v.iter().sum::<i32>();
v.iter().product::<i32>();
v.iter().min(), v.iter().max();                  // Option<&T>
v.iter().cloned().min_by_key(|&x| (x - 5).abs()); // 按绝对差找最小

// ---------- 前缀和 ----------
use std::iter::*;
let prefix: Vec<i32> = once(0)
    .chain(v.iter().scan(0, |acc, &x| { *acc += x; Some(*acc) }))
    .collect();

// ---------- 收集为各种类型 ----------
let s: String = chars.iter().collect();
let set: std::collections::HashSet<i32> = v.into_iter().collect();
let map: std::collections::HashMap<i32, i32> = pairs.into_iter().collect();

// ---------- 链式构建 ----------
(0..n)
    .filter(|&i| i % 2 == 0)
    .map(|i| i * i)
    .take(5)
    .collect::<Vec<_>>();
```

---

## 3. 双指针

```rust
// ---------- 左右夹逼（有序数组 two-sum）----------
fn two_sum_sorted(arr: &[i32], target: i32) -> Option<(usize, usize)> {
    let (mut l, mut r) = (0, arr.len() - 1);
    while l < r {
        let s = arr[l] + arr[r];
        if s == target { return Some((l, r)); }
        else if s < target { l += 1; }
        else { r -= 1; }
    }
    None
}

// ---------- 快慢指针（原地去重）----------
fn remove_duplicates(nums: &mut Vec<i32>) -> usize {
    if nums.is_empty() { return 0; }
    let mut slow = 0;
    for fast in 1..nums.len() {
        if nums[fast] != nums[slow] {
            slow += 1;
            nums[slow] = nums[fast];
        }
    }
    slow + 1
}

// ---------- 三指针（荷兰国旗）----------
fn dutch_flag(nums: &mut Vec<i32>) {
    let (mut lo, mut mid, mut hi) = (0, 0, nums.len() - 1);
    while mid <= hi {
        match nums[mid] {
            0 => { nums.swap(lo, mid); lo += 1; mid += 1; }
            1 => { mid += 1; }
            _ => { nums.swap(mid, hi); if hi == 0 { break; } hi -= 1; }
        }
    }
}

// ---------- 归并双指针 ----------
fn merge_sorted(a: &[i32], b: &[i32]) -> Vec<i32> {
    let mut res = Vec::with_capacity(a.len() + b.len());
    let (mut i, mut j) = (0, 0);
    while i < a.len() && j < b.len() {
        if a[i] <= b[j] { res.push(a[i]); i += 1; }
        else { res.push(b[j]); j += 1; }
    }
    res.extend_from_slice(&a[i..]);
    res.extend_from_slice(&b[j..]);
    res
}
```

---

## 4. DFS 模板（迭代式优先）

```rust
// ---------- 图 DFS（迭代，避免借用检查器问题）----------
fn dfs_graph(graph: &Vec<Vec<usize>>, start: usize) -> Vec<bool> {
    let n = graph.len();
    let mut visited = vec![false; n];
    let mut stack = vec![start];

    while let Some(node) = stack.pop() {
        if visited[node] { continue; }
        visited[node] = true;
        for &nb in &graph[node] {
            if !visited[nb] { stack.push(nb); }
        }
    }
    visited
}

// ---------- 网格 DFS（迭代）----------
fn dfs_grid(grid: &mut Vec<Vec<char>>, sr: usize, sc: usize) {
    let rows = grid.len();
    let cols = grid[0].len();
    let mut stack = vec![(sr, sc)];

    while let Some((r, c)) = stack.pop() {
        if grid[r][c] != '1' { continue; }
        grid[r][c] = '#';                          // 原地标记
        if r > 0 { stack.push((r - 1, c)); }
        if r + 1 < rows { stack.push((r + 1, c)); }
        if c > 0 { stack.push((r, c - 1)); }
        if c + 1 < cols { stack.push((r, c + 1)); }
    }
}

// ---------- 岛屿数量 ----------
fn num_islands(mut grid: Vec<Vec<char>>) -> i32 {
    let rows = grid.len();
    let cols = grid[0].len();
    let mut count = 0;
    for r in 0..rows {
        for c in 0..cols {
            if grid[r][c] == '1' {
                dfs_grid(&mut grid, r, c);
                count += 1;
            }
        }
    }
    count
}

// ---------- 回溯（子集，索引传入）----------
fn subsets(nums: &[i32]) -> Vec<Vec<i32>> {
    let mut result = Vec::new();
    let mut path = Vec::new();

    fn bt(nums: &[i32], start: usize, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        result.push(path.clone());
        for i in start..nums.len() {
            path.push(nums[i]);
            bt(nums, i + 1, path, result);
            path.pop();
        }
    }

    bt(nums, 0, &mut path, &mut result);
    result
}
```

---

## 5. BFS 模板

```rust
use std::collections::VecDeque;

// ---------- 单源最短路 ----------
fn bfs(graph: &Vec<Vec<usize>>, start: usize, target: usize) -> i32 {
    let n = graph.len();
    let mut visited = vec![false; n];
    let mut queue = VecDeque::new();
    queue.push_back(start);
    visited[start] = true;
    let mut step = 0;

    while !queue.is_empty() {
        let size = queue.len();
        for _ in 0..size {
            let node = queue.pop_front().unwrap();
            if node == target { return step; }
            for &nb in &graph[node] {
                if !visited[nb] {
                    visited[nb] = true;
                    queue.push_back(nb);
                }
            }
        }
        step += 1;
    }
    -1
}

// ---------- 网格 BFS ----------
fn bfs_grid(grid: &Vec<Vec<i32>>, sr: usize, sc: usize) -> i32 {
    let rows = grid.len();
    let cols = grid[0].len();
    let mut dist = vec![vec![i32::MAX; cols]; rows];
    let mut queue = VecDeque::new();
    dist[sr][sc] = 0;
    queue.push_back((sr, sc));

    let dirs: [(i32, i32); 4] = [(-1, 0), (1, 0), (0, -1), (0, 1)];

    while let Some((r, c)) = queue.pop_front() {
        for (dr, dc) in dirs {
            let nr = r as i32 + dr;
            let nc = c as i32 + dc;
            if nr >= 0 && nr < rows as i32 && nc >= 0 && nc < cols as i32 {
                let (nr, nc) = (nr as usize, nc as usize);
                if grid[nr][nc] == 0 && dist[nr][nc] == i32::MAX {
                    dist[nr][nc] = dist[r][c] + 1;
                    queue.push_back((nr, nc));
                }
            }
        }
    }
    dist[rows - 1][cols - 1]
}

// ---------- 多源 BFS ----------
fn multi_source_bfs(grid: &Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let rows = grid.len();
    let cols = grid[0].len();
    let mut dist = vec![vec![i32::MAX; cols]; rows];
    let mut queue = VecDeque::new();

    for r in 0..rows {
        for c in 0..cols {
            if grid[r][c] == 0 {
                dist[r][c] = 0;
                queue.push_back((r, c));
            }
        }
    }

    let dirs: [(i32, i32); 4] = [(-1, 0), (1, 0), (0, -1), (0, 1)];
    while let Some((r, c)) = queue.pop_front() {
        for (dr, dc) in dirs {
            let nr = r as i32 + dr;
            let nc = c as i32 + dc;
            if nr >= 0 && nr < rows as i32 && nc >= 0 && nc < cols as i32 {
                let (nr, nc) = (nr as usize, nc as usize);
                if dist[nr][nc] == i32::MAX {
                    dist[nr][nc] = dist[r][c] + 1;
                    queue.push_back((nr, nc));
                }
            }
        }
    }
    dist
}
```

---

## 6. HashMap / HashSet / BinaryHeap

```rust
use std::collections::{HashMap, HashSet, BinaryHeap};
use std::cmp::Reverse;

// ===== HashMap =====
let mut map: HashMap<i32, i32> = HashMap::new();
map.insert(key, val);
map.get(&key);                                   // Option<&V>
map.contains_key(&key);
map.remove(&key);
map.len();

// 计数器
*map.entry(key).or_insert(0) += 1;

// 遍历
for (k, v) in &map { }
for (k, v) in map.iter() { }

// 按值排序输出
let mut pairs: Vec<_> = map.iter().collect();
pairs.sort_by(|a, b| b.1.cmp(a.1));            // 按 value 降序

// ===== HashSet =====
let mut set: HashSet<i32> = HashSet::new();
set.insert(x);
set.contains(&x);
set.remove(&x);
let union: HashSet<_> = s1.union(&s2).cloned().collect();
let inter: HashSet<_> = s1.intersection(&s2).cloned().collect();
let diff: HashSet<_> = s1.difference(&s2).cloned().collect();

// ===== BinaryHeap（默认大顶堆）=====
let mut max_heap: BinaryHeap<i32> = BinaryHeap::new();
max_heap.push(val);
max_heap.pop();                                  // Option<T>，弹出最大
max_heap.peek();                                 // Option<&T>，查看最大

// 小顶堆：用 Reverse 包装
let mut min_heap: BinaryHeap<Reverse<i32>> = BinaryHeap::new();
min_heap.push(Reverse(val));
let Reverse(min_val) = min_heap.pop().unwrap();

// (优先级, 节点) 元组用于 Dijkstra
let mut pq: BinaryHeap<Reverse<(i32, usize)>> = BinaryHeap::new();
pq.push(Reverse((dist, node)));
let Reverse((d, u)) = pq.pop().unwrap();
```

---

## 7. 字符串处理

```rust
// ---------- String vs &str ----------
// &str  = 不可变字符串引用（字符串字面量类型）
// String = 可变堆分配字符串

let s: &str = "hello";
let s: String = String::from("hello");
let s: String = "hello".to_string();

// ---------- 字符迭代 ----------
for c in s.chars() { }                          // Unicode 字符迭代
for b in s.bytes() { }                          // u8 字节迭代（仅 ASCII）
let chars: Vec<char> = s.chars().collect();

// ---------- 字符 ↔ 整数 ----------
let idx = c as usize - 'a' as usize;            // 'a'→0, 'z'→25
let c = (b'a' + i) as char;                     // 0→'a', 25→'z'
// 注意：char 转 int 用 c as u32，不要用 c as usize（可能溢出含义不同）

// ---------- 操作 ----------
s.len();                                         // 字节数（UTF-8），不是字符数！
s.chars().count();                              // Unicode 字符数
s.is_empty();
s.contains("sub");
s.starts_with("pre");
s.ends_with("suf");
s.to_lowercase(); s.to_uppercase();
s.trim(); s.trim_start(); s.trim_end();
s.replace("old", "new");

// ---------- 拆分 / 合并 ----------
let words: Vec<&str> = s.split_whitespace().collect();
let words: Vec<&str> = s.split(',').collect();
let joined: String = words.join(", ");

// ---------- 解析数字 ----------
let n: i32 = "42".parse().unwrap();
let n: i32 = s.parse::<i32>().unwrap_or(0);

// ---------- 字符数组 → String ----------
let result: String = chars.iter().collect();    // Vec<char> → String
let result: String = chars.into_iter().collect();

// ---------- 字符串切片（注意边界必须在字符边界）----------
&s[l..r];                                        // 字节下标切，ASCII 安全，Unicode 危险！
s.chars().skip(l).take(r - l).collect::<String>(); // Unicode 安全版

// ---------- 回文检查 ----------
let is_palindrome = |s: &str| -> bool {
    let chars: Vec<char> = s.chars().collect();
    let n = chars.len();
    (0..n / 2).all(|i| chars[i] == chars[n - 1 - i])
};
```

---

## 8. 数学 / 溢出处理

```rust
// ---------- 常量 ----------
i32::MAX;   i32::MIN;
i64::MAX;   i64::MIN;
usize::MAX;
f64::INFINITY; f64::NEG_INFINITY;

// ---------- 安全运算（防止 panic 在 debug 模式）----------
a.checked_add(b);                                // Option<i32>，溢出时 None
a.saturating_add(b);                             // 溢出时钳制到 MAX/MIN
a.wrapping_add(b);                               // 溢出时回绕（竞赛有时用）
a.overflowing_add(b);                            // (result, overflowed: bool)

// ---------- abs / min / max ----------
x.abs();
a.min(b);
a.max(b);
a.clamp(lo, hi);                                 // 钳制到 [lo, hi]

// ---------- 整除 / 取余 ----------
a / b;                                           // 向零截断（-7/2 == -3，与 Python 不同！）
a % b;                                           // 余数（可能为负）
a.div_euclid(b);                                // 欧几里得除法（向下取整，结果非负）
a.rem_euclid(b);                                // 欧几里得余数（非负，等价 Python %）

// ---------- 幂 ----------
a.pow(n);                                        // i32::pow(n: u32)
(a as f64).sqrt() as i32;                       // 整数平方根

// ---------- GCD ----------
fn gcd(a: u64, b: u64) -> u64 {
    if b == 0 { a } else { gcd(b, a % b) }
}

// ---------- 快速幂（取模）----------
fn fast_pow(mut base: u64, mut exp: u64, modulus: u64) -> u64 {
    let mut result = 1u64;
    base %= modulus;
    while exp > 0 {
        if exp & 1 == 1 { result = result * base % modulus; }
        base = base * base % modulus;
        exp >>= 1;
    }
    result
}

// ---------- 位运算 ----------
n & (n - 1);                                     // 消除最低位 1
n & n.wrapping_neg();                            // 取最低位 1（lowbit），neg 防 i32::MIN panic
n.count_ones();                                  // popcount（内置！）
n.leading_zeros(); n.trailing_zeros();
n.next_power_of_two();                           // 向上取最近的 2 的幂
```

---

## 9. Rust 特有技巧与常见模式

```rust
// ---------- 解构 ----------
let (a, b) = (1, 2);
let [first, .., last] = arr[..] else { panic!() };  // slice pattern (nightly)
if let Some(x) = opt { }
let x = opt.unwrap_or(default);
let x = opt.unwrap_or_else(|| expensive_computation());

// ---------- 内存交换 ----------
std::mem::swap(&mut a, &mut b);                 // 交换两个变量

// ---------- Vec 同时访问两个可变下标（绕借用检查）----------
// 方法一：split_at_mut
let (left, right) = v.split_at_mut(j);
let a = &mut left[i];
let b = &mut right[0];                          // right[0] 对应原来的 v[j]

// 方法二：直接用 swap
v.swap(i, j);

// ---------- 哈希 Map 统计频率（惯用写法）----------
let mut freq: HashMap<i32, usize> = HashMap::new();
for &x in &nums {
    *freq.entry(x).or_insert(0) += 1;
}

// ---------- Dijkstra 模板 ----------
fn dijkstra(graph: &Vec<Vec<(usize, i64)>>, start: usize) -> Vec<i64> {
    let n = graph.len();
    let mut dist = vec![i64::MAX; n];
    let mut heap = BinaryHeap::new();
    dist[start] = 0;
    heap.push(Reverse((0i64, start)));

    while let Some(Reverse((d, u))) = heap.pop() {
        if d > dist[u] { continue; }
        for &(v, w) in &graph[u] {
            if dist[u] + w < dist[v] {
                dist[v] = dist[u] + w;
                heap.push(Reverse((dist[v], v)));
            }
        }
    }
    dist
}

// ---------- 并查集（路径压缩 + 按秩合并）----------
struct UnionFind {
    parent: Vec<usize>,
    rank: Vec<usize>,
    count: usize,
}
impl UnionFind {
    fn new(n: usize) -> Self {
        Self { parent: (0..n).collect(), rank: vec![0; n], count: n }
    }
    fn find(&mut self, x: usize) -> usize {
        if self.parent[x] != x {
            self.parent[x] = self.find(self.parent[x]); // 路径压缩
        }
        self.parent[x]
    }
    fn union(&mut self, x: usize, y: usize) -> bool {
        let (px, py) = (self.find(x), self.find(y));
        if px == py { return false; }
        match self.rank[px].cmp(&self.rank[py]) {
            std::cmp::Ordering::Less => self.parent[px] = py,
            std::cmp::Ordering::Greater => self.parent[py] = px,
            std::cmp::Ordering::Equal => { self.parent[py] = px; self.rank[px] += 1; }
        }
        self.count -= 1;
        true
    }
}

// ---------- 常见陷阱 ----------
// ① usize 减法下溢：i > 0 && i - 1 >= ... 改为 i >= 1
// ② for i in 0..n 中 n 为 0 时安全（不执行循环）
// ③ vec![expr; n] 中 expr 只求值一次，适合 Copy 类型；Box<T> 用 (0..n).map(|_| T::new()).collect()
// ④ 递归会堆栈溢出：竞赛中考虑 stacker crate 或转迭代
// ⑤ i32 overflow 在 release 模式下不 panic，用 checked_* 防御
```
