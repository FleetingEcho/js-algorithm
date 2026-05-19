# 📘 Algorithm Frameworks — Complete Refactoring Plan

> **Goal:** Transform all notes into a structured knowledge base, covering EVERY LeetCode category from `leetcode-questions-summary.md`.

---

## ✅ Coverage Check: Existing Files vs LeetCode Summary

### Files Completed (14 of ~30 planned)

| # | File | Topics Covered | Status |
|---|------|---------------|--------|
| 00 | `data-structures-and-algorithm-thinking` | Big-O, array vs linked list, traversal patterns, framework thinking | ✅ |
| 01 | `recursion-and-divide-conquer` | Recursion, D&C, recursion vs DP vs backtracking vs greedy | ✅ |
| 02 | `dfs-backtracking` | Backtracking template, permutations, N-Queens, pruning strategies | ✅ |
| 03 | `bfs-framework` | BFS template, bidirectional BFS, multi-source BFS | ✅ |
| 04 | `backtracking-subsets-permutations-combinations` | Subsets, permutations, combinations, dedup, 3-in-1 template | ✅ |
| 05 | `binary-search` | 3 BS templates, answer binary search, Koko, ship within days | ✅ |
| 06 | `dp-framework` | DP 3 elements, Fibonacci evolution, coin change, LCS | ✅ |
| 07 | `knapsack-problems` | 0-1 knapsack, unbounded knapsack, partition equal subset, coin change II | ✅ |
| 08 | `stock-series` | Stock 6 problems, state machine DP, cooldown, fee | ✅ |
| 09 | `house-robber-and-interval-dp` | House robber linear/ring/tree | ✅ |
| 10 | `edit-distance` | Edit distance, path backtracking, space compression | ✅ |
| 11 | `egg-drop` | Egg drop DP + binary search, reverse DP optimal | ✅ |
| 12 | `binary-tree-traversal` | Pre/in/post order, iterative, quick sort = pre, merge = post | ✅ |
| 13 | `binary-tree-operations` | Serialize, duplicate subtrees, BST CRUD, BST validation | ✅ |

### Files Still Needed — Mapped to LeetCode Categories

| LeetCode Category | File # | File Name | Key Problems to Cover |
|------------------|--------|-----------|----------------------|
| 链表基础 / 链表双指针 | 14 | `linked-list-techniques.md` | 206, 21, 141, 142, 160, 234, 328, 876, 19, 237, 83 |
| 栈与队列基础 | 15 | `stack-and-queue-implementations.md` | 40(2栈实现Q), 494(2Q实现栈), 225(2栈实现Q), 232 |
| 单调栈 | 16 | `monotonic-stack.md` | 496, 739, 503, 84, 42, 1019 |
| 单调队列 / 滑动窗口 | 17 | `sliding-window-and-monotonic-queue.md` | 239, 3, 76, 567, 209, 713, 480 |
| 双指针技巧 | 18 | `two-pointers.md` | 26, 27, 80, 283, 75, 88, 125, 167, 344, 345, 680 |
| 前缀和与差分数组 | 19 | `prefix-sum-and-diff-array.md` | 303, 325, 528, 560, 238, 1109, 1094 |
| 和差问题 / nSum | 20 | `n-sum-problems.md` | 1, 15, 18, 167, 170, 653, 1099, 259, Lint各种双Sum |
| 回文串 / 字符串 | 21 | `palindrome-and-string-techniques.md` | 5, 125, 345, 680, 43, 13, 14, 443 |
| 哈希表与集合 | 22 | `hash-table-techniques.md` | 49, 128, 290, 560, 706, 953 |
| 堆 / 数据流 / 优先级队列 | 23 | `heap-and-priority-queue.md` | 295, 346, 352, 703, 347, 692, 973, 767, 23 |
| 区间问题 / 扫描线 | 24 | `interval-and-sweep-line.md` | 56, 57, 252, 253, 435, 452, 986, Lint-391 |
| 并查集 Union Find | 25 | `union-find.md` | 200, 305, 323, 547, 721, 737, 990, 128 |
| 图算法 (Dijkstra, Topo, MST) | 26 | `graph-algorithms.md` | 207, 210, 269, 743, 1514, 1631, 785, 886, 277 |
| 拓扑排序 (BFS 图) | 27 | `topological-sorting.md` | Lint-127, 207, 210, 269, 444 |
| LRU & LFU 缓存 | 28 | `lru-and-lfu-cache.md` | 146, 460 |
| Trie 前缀树 | 29 | `trie-prefix-tree.md` | 208, 211, 1032 |
| LCA & 二叉树进阶 | 30 | `binary-tree-advanced.md` | 236, Lint-474, Lint-578, 124, 114, 331, 449, 199, 513 |
| 二叉索引树 / 线段树 | 31 | `fenwick-and-segment-tree.md` | 307, 315, 327, 493, 715 |
| 位运算与数学 | 32 | `bit-manipulation-and-math.md` | 78, 136, 137, 260, 448, 50, 69, 172, 204 |
| KMP / 字符串查找 | 33 | `string-searching.md` | 28, 1392, Lint-594 |
| 设计 / OOD | 34 | `design-and-ood.md` | 146, 208, 211, 355, 380, 588, 895, 981, 1396 |
| 贪心算法 | 35 | `greedy.md` | 435, 452, 55, 45, 134, 1024 |
| 附加：模式抽象总结 | 36 | `algorithm-pattern-recognition.md` | 从 `leetcode-questions-summary.md` 抽象"看到什么想到什么" |

---

## 📐 File Template (Unchanged)

```markdown
# Title

> One-sentence core insight

## 🎯 LeetCode Problems (from the master list)
| # | Problem | Difficulty | Core Technique | Priority |
|---|---------|:----------:|---------------|:--------:|

## 📋 TOC

## 🧠 Core Intuition

## 📐 Template / Code

## 🔢 Problems × N

## 💡 Optimization & Variations

## 📊 Complexity Sheet

## 🎯 Practice Roadmap

## 💪 Whiteboard Challenge
```

---

## 📦 Final File Manifest (36 files total)

### Phase 0-2: Already Written (14 files)
`00`→`13` (see above)

### Phase 3: Data Structures & Algorithms (14 files)
`14`→`27` (see above, queue→binary-tree-advanced)

### Phase 4: Advanced Topics (8 files)
`28`→`35` (see above, lru→greedy)

### Phase 5: Capstone (1 file)
`36-algorithm-pattern-recognition.md`

---

## ⏱ Execution Strategy

1. ✅ Files `00`–`20`: **Done** (19 files: foundations + search + DP + trees + data structures + nSum)
2. ⏳ Next batch: Files `21`–`35`: palindrome, hash, heap, interval, union-find, graph, topo, cache, trie, tree-advanced, BIT/segment-tree, bit-manipulation, KMP, design, greedy
3. ⏳ Finally: `36` — Pattern recognition capstone

---

## ✅ Progress

| Phase | Files | Status |
|-------|-------|--------|
| Foundations (00-01) | 2 files | ✅ |
| Search (02-05) | 4 files | ✅ |
| DP (06-11) | 6 files | ✅ |
| Trees (12-13) | 2 files | ✅ |
| Data Structures (14-27) | 14 files | ✅ |
| Advanced Topics (28-35) | 8 files | ✅ |
| Capstone (36) | 1 file | ✅ |

> 🚀 **入口文件：** `algorithm-frameworks/README.md` — 完整索引 + 跳转链接 + 阅读路线

> After each batch of 3-4 files, I'll pause for review.
