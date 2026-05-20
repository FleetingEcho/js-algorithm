# 题号索引

> 核心一句话：**这是从 `List.md` 生成的完整题号跳转索引，用来按题号、题名、分类快速跳到对应算法专题。**
>
> 生成方式：`node scripts/generate-question-index.mjs`

---

## 使用方式

| 你要查什么 | 怎么搜 |
|---|---|
| 题号 | `Cmd/Ctrl + F` 搜 `560`、`Lint-437` |
| 题名 | 搜 `Minimum Window`、`Course Schedule` |
| 模式 | 搜 `滑动窗口`、`二分`、`DP` |
| 分类 | 搜 `二分法`、`动态规划`、`数据结构` |

---

## 统计

| 项目 | 数量 |
|---|---:|
| 索引条目数 | 434 |
| 来源文件 | `List.md` |
| 说明 | 包含 `List.md` 中主库、补充题和 LintCode/Premium 条目 |

---

## 一、基础

### 基础

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 37 | Reverse 3-digit Integer | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 数学取模/整除反转数字 |
| ✅ | 214 | Max of Array | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 线性扫描求最大值 |
| ✅ | 283 | Max of 3 Numbers | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 条件判断比较 |
| ✅ | 146 | Lower to Uppercase II | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | ASCII 码转换（'a'-'A'） |
| ✅ | 241 | String to Integer | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 遍历字符串逐位累加 |
| ✅ | 449 | Char to Integer | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | char - '0' |
| ✅ | 463 | Sort Integers | Easy | 排序 | [17-sorting-algorithms](../algorithm-frameworks/17-sorting-algorithms.md) | 排序 API / 手写排序 |
| ✅ | 484 | Swap Two Integers in Array | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 临时变量/异或交换 |
| ✅ | 485 | Generate ArrayList with Given Size | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 循环 add |

### 链表基础

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 225 | Find Node in Linked List | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 遍历链表 |
| ✅ | 466 | Count Linked List Nodes | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 遍历计数 |
| ✅ | 483 | Convert Linked List to Array List | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 遍历 collect |

### 进阶基础

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 454 | Rectangle Area | Easy | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 长宽相乘 |
| ✅ | 478 | Simple Calculator | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 运算符判断 + 算术运算 |
| ✅ | 366 | Fibonacci | Easy | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 迭代/递归/矩阵快速幂 |
| ✅ | 632 | Binary Tree Maximum Node | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归遍历二叉树 |

### 栈与队列基础

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 40 | Implement Queue by Two Stacks | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 双栈（push 栈 + pop 栈），pop 栈空时倒数据 |
| ✅ | 492 | Implement Queue by Linked List | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 链表头出尾入 |
| ✅ | 494 | Implement Stack by Two Queues | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 双队列，入队时倒腾 |
| ✅ | 495 | Implement Stack | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 数组/链表实现 LIFO |

## 二、二分法

### 朴素二分法

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 704 | Binary Search | Easy | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 经典二分，while l ≤ r |
| ✅ | 34 | Find First and Last Position of Element in Sorted Array | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 两次二分分别找左右边界 |
| ✅ | 702 | Search in a Sorted Array of Unknown Size | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 先倍增找右边界，再二分 |
| ✅ | 153 | Find Minimum in Rotated Sorted Array | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分比较 mid 与 right，排除有序半段 |
| ✅ | 154 | Find Minimum in Rotated Sorted Array II | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 同上，但需处理重复值（right--） |
| ✅ | 278 | First Bad Version | Easy | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分查找第一个 true |
| ✅ | 658 | Find K Closest Elements | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分找到最接近值的起点，双指针扩展 |

### 条件二分法

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 33 | Search in Rotated Sorted Array | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 先判断哪半有序，再决定搜索方向 |
| ✅ | 81 | Search in Rotated Sorted Array II | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 相比 33 增加重复值处理 |
| ✅ | 4 | Median of Two Sorted Arrays | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 对短数组二分分割线，保证左右数量相等且左 max ≤ 右 min |
| ✅ | 74 | Search a 2D Matrix | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 将二维视为一维做二分 |
| ✅ | 162 | Find Peak Element | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分比较 mid 与 mid+1，往大的一侧走 |
| ✅ | 302 | Smallest Rectangle Enclosing Black Pixels | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 分别在四边做二分找临界 |
| ✅ | 852 | Peak Index in a Mountain Array | Easy | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分找山顶 |

### 答案二分法

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 875 | Koko Eating Bananas | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 对速度二分，check 是否能在 h 小时内吃完 |
| ✅ | 1283 | Find the Smallest Divisor Given a Threshold | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 对除数二分，check 除后和是否 ≤ threshold |
| ✅ | 69 | Sqrt(x) | Easy | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 对结果二分，mid² ≤ x |
| ✅ | Lint-586 | Sqrt(x) II | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 浮点数二分，精度控制 |
| ✅ | Lint-183 | Wood Cut | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 对段长二分，check 段数是否 ≥ k |
| ✅ | Lint-437 | Copy Books | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 对最短时间二分，贪心分配 |
| ✅ | Lint-438 | Copy Books II | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 同上但每个复印员速度不同 |

## 三、多指针

### 数组

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 912 | Sort an Array | Medium | 排序 | [17-sorting-algorithms](../algorithm-frameworks/17-sorting-algorithms.md) | 快排/归并/堆排 |
| ✅ | 75 | Sort Colors | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 三指针（low/mid/high），DNF 荷兰国旗问题 |
| ✅ | 26 | Remove Duplicates from Sorted Array | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 快慢指针，fast 读 slow 写 |
| ✅ | 80 | Remove Duplicates from Sorted Array II | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 快慢指针，允许最多两个重复 |
| ✅ | 88 | Merge Sorted Array | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 从后往前双指针归并 |
| ✅ | 283 | Move Zeroes | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 快慢指针，非零往前移，末尾补零 |
| ✅ | 215 | Kth Largest Element in an Array | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | QuickSelect / 堆 |
| ✅ | 347 | Top K Frequent Elements | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 哈希计数 + 桶排序/堆 |
| ✅ | 349 | Intersection of Two Arrays | Easy | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 哈希集合去重取交集 |
| ✅ | 350 | Intersection of Two Arrays II | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 哈希表计数 / 排序双指针 |
| ✅ | 845 | Longest Mountain in Array | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 枚举山顶向左右扩展 |
| ✅ | 42 | Trapping Rain Water | Hard | 单调栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 双指针/单调栈/DP，左右最大高度夹逼 |
| ✅ | 43 | Multiply Strings | Medium | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 模拟竖式乘法，res[i+j] 累加 |
| ✅ | 969 | Pancake Sorting | Medium | 排序 | [17-sorting-algorithms](../algorithm-frameworks/17-sorting-algorithms.md) | 每次找最大翻转到顶再翻到底 |
| ✅ | Lint-31 | Partition Array | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 双指针按 pivot 分区 |
| ✅ | Lint-625 | Partition Array II | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 三指针按两个 pivot 分区 |
| ✅ | Lint-143 | Sort Colors II | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 分治/彩虹排序（O(nlogk)） |
| ✅ | Lint-461 | Kth Smallest Numbers in Unsorted Array | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | QuickSelect / 堆 |
| ✅ | Lint-544 | Top k Largest Numbers | - | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 堆 / 排序取 top k |

### 链表

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 21 | Merge Two Sorted Lists | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 归并双指针（dummy 头） |
| ✅ | 86 | Partition List | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 双指针分 < x 和 ≥ x 两个链表再合并 |
| ✅ | 141 | Linked List Cycle | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 快慢指针相遇判环 |
| ✅ | 160 | Intersection of Two Linked Lists | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 双指针分别走 A+B 路程 |
| ✅ | 234 | Palindrome Linked List | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 快慢找中点 + 反转后半比较 |
| ✅ | 328 | Odd Even Linked List | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 奇偶双指针分离再连接 |
| ✅ | 142 | Linked List Cycle II | Hard | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 快慢相遇后从 head 再走一步找入环点 |
| ✅ | 287 | Find the Duplicate Number | Medium | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 看成链表找环入口（值域 1..n 指向 nums[i]） |
| ✅ | 876 | Middle of the Linked List | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 快慢指针，快指针到末尾时慢指针在中点 |

### 区间

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | Lint-391 | Number of Airplanes in the Sky | Medium | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 扫描线，起飞+1 降落-1 |
| ✅ | 56 | Merge Intervals | Medium | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 按起点排序，合并重叠 |
| ✅ | 57 | Insert Interval | Medium | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 遍历分三段（不重叠左/重叠中/不重叠右）插入合并 |
| ✅ | 252 | Meeting Rooms | Easy | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 排序后检查相邻是否有重叠 |
| ✅ | 253 | Meeting Rooms II | Medium | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 扫描线/最小堆（按结束时间） |
| ✅ | 986 | Interval List Intersections | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 双指针走两个列表，取交集区间 |

### 回文串

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 5 | Longest Palindromic Substring | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 中心扩展 / Manacher |
| ✅ | 345 | Reverse Vowels of a String | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 双指针两端找元音互换 |
| ✅ | 680 | Valid Palindrome II | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 双指针，最多跳过一个字符 |
| ✅ | 125 | Valid Palindrome | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 双指针，忽略非字母数字 |

### 滑动窗口

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 3 | Longest Substring Without Repeating Characters | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 滑动窗口 + 哈希集记录字符位置 |
| ✅ | 11 | Container With Most Water | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 双指针两端向中间移，短板决定高度 |
| ✅ | 76 | Minimum Window Substring | Hard | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 滑动窗口 + 计数数组，先扩再缩找最小覆盖 |
| ✅ | 209 | Minimum Size Subarray Sum | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 滑动窗口，和 ≥ target 时收缩 left |
| ✅ | 239 | Sliding Window Maximum | Hard | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 单调队列（双端队列存下标） |
| ✅ | 713 | Subarray Product Less Than K | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 滑动窗口，乘积 < k 时 right-left+1 个子数组 |
| ✅ | 395 | Longest Substring with At Least K Repeating Characters | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 分治 / 对字符种类数滑动窗口 |
| ✅ | 480 | Sliding Window Median | Hard | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 双堆（maxHeap + minHeap）+ 延迟删除 |
| ✅ | 567 | Permutation in String | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 固定长度滑动窗口 + 字符计数 |
| ✅ | 727 | Minimum Window Subsequence | Hard | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | DP / 双指针逐字符匹配 |
| ✅ | Lint-604 | Window Sum | Easy | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 固定大小滑动窗口求和 |

### 流

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 295 | Find Median from Data Stream | Hard | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 双堆（大顶堆存小半，小顶堆存大半） |
| ✅ | 346 | Moving Average from Data Stream | Easy | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 队列维护窗口和 |
| ✅ | 352 | Data Stream as Disjoint Intervals | Hard | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | TreeMap 按起点存区间，合并相邻 |
| ✅ | 703 | Kth Largest Element in a Stream | Easy | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 小顶堆维护 top k |

### 前项和

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 53 | Maximum Subarray | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | Kadane 算法，dp[i] = max(nums[i], dp[i-1]+nums[i]) |
| ✅ | 238 | Product of Array Except Self | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 前缀积 \* 后缀积 |
| ✅ | 303 | Range Sum Query - Immutable | Easy | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 前缀和数组预处理 |
| ✅ | 325 | Maximum Size Subarray Sum Equals k | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 前缀和 + 哈希表存最早下标 |
| ✅ | 528 | Random Pick with Weight | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 前缀和 + 二分找随机数落点 |
| ✅ | 560 | Subarray Sum Equals K | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 前缀和 + 哈希表计数 |

### 和差问题

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 1 | Two Sum | Easy | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 哈希表存补数 |
| ✅ | 15 | 3Sum | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 固定一个 + 双指针 |
| ✅ | 18 | 4Sum | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 双层循环 + 双指针 |
| ✅ | Lint-382 | Triangle Count | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 定最大边 + 双指针 |
| ✅ | 167 | Two Sum II | Easy | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 有序数组双指针夹逼 |
| ✅ | 170 | Two Sum III | Easy | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 哈希表存数字及出现次数 |
| ✅ | 653 | Two Sum IV | Easy | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | BST 遍历 + 哈希集 |
| ✅ | 1099 | Two Sum Less Than K | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 双指针找最大和 < K |
| ✅ | 259 | 3Sum Smaller | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 固定一个 + 双指针计数 |
| ✅ | Lint-57 | 3Sum Closest | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 固定 + 双指针更新 closest |
| ✅ | Lint-443 | Two Sum - Greater than target | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 双指针计数 |
| ✅ | Lint-533 | Two Sum - Closest to target | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 双指针更新 minDiff |
| ✅ | Lint-587 | Two Sum - Unique pairs | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 双指针跳过重复 |
| ✅ | Lint-609 | Two Sum - Less than or equals to target | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 双指针计数 |
| ✅ | Lint-610 | Two Sum - Difference equals to target | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 排序 + 双指针（差时移动 left） |

## 四、宽度优先搜索 (BFS)

### BFS / 二叉树

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 297 | Serialize and Deserialize Binary Tree | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 层序遍历/前序遍历转字符串再反序列化 |
| ✅ | 102 | Binary Tree Level Order Traversal | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 队列 BFS，每层收集 |
| ✅ | 103 | Binary Tree Zigzag Level Order Traversal | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 层序 + 奇偶层反转顺序 |
| ✅ | 107 | Binary Tree Level Order Traversal II | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 层序后结果反转 |
| ✅ | 513 | Find Bottom Left Tree Value | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 从右往左，最后一个节点即最左 |
| ✅ | Lint-242 | Convert Binary Tree to Linked Lists by Depth | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | BFS 每层构建链表 |

### BFS / 拓扑排序

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | Lint-127 | Topological Sorting | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | Kahn（入度表）/ DFS |
| ✅ | 207 | Course Schedule | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 拓扑排序判环 |
| ✅ | 210 | Course Schedule II | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 拓扑排序返回顺序 |
| ✅ | 269 | Alien Dictionary | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 字符比较建图 + 拓扑排序 |
| ✅ | 444 | Sequence Reconstruction | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 拓扑排序唯一性判断 |

### BFS / 矩阵

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 200 | Number of Islands | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | DFS/BFS 每遇到 1 就感染（标记访问） |
| ✅ | 490 | The Maze | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS/DFS 模拟球滚直到撞墙 |
| ✅ | 505 | The Maze II | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | Dijkstra/BFS 优先队列找最短距离 |
| ✅ | 542 | 01 Matrix | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 多源 BFS 从所有 0 出发 |
| ✅ | 733 | Flood Fill | Easy | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | DFS/BFS 颜色填充 |
| ✅ | 994 | Rotting Oranges | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 多源 BFS 分钟级别扩散 |
| ✅ | 305 | Number of Islands II | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 并查集 Union-Find 动态加岛 |
| ✅ | 773 | Sliding Puzzle | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 状态压缩 + 方向交换 |
| ✅ | Lint-573 | Build Post Office II | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 多源 BFS 求最近距离和 |
| ✅ | Lint-598 | Zombie in Matrix | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 多源 BFS 扩散 |
| ✅ | Lint-611 | Knight Shortest Path | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 图最短路（骑士走法） |
| ✅ | Lint-794 | Sliding Puzzle II | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 双向搜索优化 |

### BFS / 图

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 133 | Clone Graph | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS/DFS 拷贝节点与邻居 |
| ✅ | 127 | Word Ladder | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 逐字母变换，找最短路径长度 |
| ✅ | 261 | Graph Valid Tree | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 检查边数 = n-1 且连通（并查集/DFS） |
| ✅ | 841 | Keys and Rooms | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | DFS/BFS 遍历可达房间 |
| ✅ | 323 | Number of Connected Components | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 并查集/DFS/BFS 统计连通分量 |
| ✅ | 1306 | Jump Game III | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS/DFS 从起点跳跃搜索 |
| ✅ | Lint-531 | Six Degree | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 找最短距离 |
| ✅ | Lint-618 | Search Graph Nodes | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS/DFS 查找目标值 |
| ✅ | Lint-624 | Remove Substrings | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | BFS/DFS 状态压缩状态搜索 |

## 五、二叉树 + 递归

### 前中后序遍历

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 94 | Binary Tree Inorder Traversal | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归/栈模拟/颜色标记法 |
| ✅ | 144 | Binary Tree Preorder Traversal | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归/栈模拟 |
| ✅ | 145 | Binary Tree Postorder Traversal | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归/栈 + 反转（左右根） |

### 反向复原二叉树

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 105 | Construct Binary Tree from Preorder and Inorder | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 前序定根 + 中序分左右递归 |
| ✅ | 106 | Construct Binary Tree from Inorder and Postorder | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 后序定根 + 中序分左右递归 |
| ✅ | 889 | Construct Binary Tree from Preorder and Postorder | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 前序定根 + 后序分左右递归 |

### Iterator 相关

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 173 | Binary Search Tree Iterator | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 栈模拟中序遍历，next 时弹出并压入右子树 |
| ✅ | 230 | Kth Smallest Element in a BST | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 中序遍历 / 分治 |
| ✅ | 285 | Inorder Successor in BST | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 中序后继：若右子树则最左，否则向上追溯 |
| ✅ | 270 | Closest Binary Search Tree Value | Easy | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 遍历 BST 比较更新 closest |
| ✅ | 272 | Closest Binary Search Tree Value II | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 中序 + 滑动窗口/双队列 |
| ✅ | 510 | Inorder Successor in BST II | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 带 parent 指针，直接找后继 |
| ✅ | Lint-915 | Inorder Predecessor in BST | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 对称于后继的思路 |

### 判断树的形态

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 98 | Validate Binary Search Tree | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 递归传递 min/max 上下界 |
| ✅ | 100 | Same Tree | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归比较左右子树 |
| ✅ | 101 | Symmetric Tree | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归镜像比较两个节点 |
| ✅ | 110 | Balanced Binary Tree | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 后序遍历 + 高度差 ≤ 1 |

### 子树相关

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 111 | Minimum Depth of Binary Tree | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归，空节点为 0，左右取最小 + 1 |
| ✅ | 104 | Maximum Depth of Binary Tree | Easy | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归，max(left,right) + 1 |
| ✅ | 333 | Largest BST Subtree | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 后序遍历返回 (min,max,size) 判断 BST |
| ✅ | Lint-596 | Minimum Subtree | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 后序遍历求和取最小 |
| ✅ | Lint-597 | Subtree with Maximum Average | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 后序遍历算均值取最大 |

### 路径相关

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 112 | Path Sum | Easy | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 递归减 target，到叶子判断 |
| ✅ | 113 | Path Sum II | Medium | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 递归回溯记录路径 |
| ✅ | 124 | Binary Tree Maximum Path Sum | Hard | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 后序遍历，维护全局最大值 |
| ✅ | Lint-475 | Binary Tree Maximum Path Sum II | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 从上到下的单一路径 |
| ✅ | 298 | Binary Tree Longest Consecutive Sequence | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 递归传递 parent 值和当前长度 |
| ✅ | 549 | Binary Tree Longest Consecutive Sequence II | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 可递增递减，双方向 |
| ✅ | Lint-619 | Binary Tree Longest Consecutive Sequence III | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | N 叉树版本 |

### 最近公共祖先 LCA

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 236 | Lowest Common Ancestor of a Binary Tree | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 后序遍历，左右各找 p/q，谁先返回谁就是 LCA |
| ✅ | Lint-474 | Lowest Common Ancestor II | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 带 parent 指针，先拉到同层再同步上移 |
| ✅ | Lint-578 | Lowest Common Ancestor III | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 需要确认 p/q 都在树中 |

### 其他

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 199 | Binary Tree Right Side View | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 取每层最后一个 / DFS 先右后左 |
| ✅ | 513 | Find Bottom Left Tree Value | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 从左到右取最后一层首个 |
| ✅ | 331 | Verify Preorder Serialization of a Binary Tree | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 利用 slot 计数（1 节点消耗 1 slot + 产生 2 slot） |
| ✅ | 449 | Serialize and Deserialize BST | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 利用 BST 性质前序即可复原 |
| ✅ | 114 | Flatten Binary Tree to Linked List | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 后序遍历/前驱连接法 |

## 六、深度优先搜索 (DFS)

### DFS 排列组合

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 39 | Combination Sum | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 排序 + 回溯（可重复选同一元素） |
| ✅ | 40 | Combination Sum II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 排序 + 回溯 + 同层去重 |
| ✅ | 46 | Permutations | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯 + visited 数组 |
| ✅ | 47 | Permutations II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯 + 同层剪枝（排序后 i > 0 && nums[i]==nums[i-1] && !visited[i-1]） |
| ✅ | 77 | Combinations | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯 + startIndex |
| ✅ | 78 | Subsets | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯选或不选 / 增量构造 |
| ✅ | 90 | Subsets II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 排序 + 同层去重 |
| ✅ | 17 | Letter Combinations of a Phone Number | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 数字到字母映射 + 回溯 |
| ✅ | 22 | Generate Parentheses | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯，open ≤ n, close ≤ open |
| ✅ | 51 | N-Queens | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 行回溯 + 列/对角冲突检查 |
| ✅ | 254 | Factor Combinations | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 回溯分解因子（从 2 到 sqrt(n)） |
| ✅ | 301 | Remove Invalid Parentheses | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS/DFS 校验括号合法性 |
| ✅ | 491 | Increasing Subsequences | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 回溯 + 同层去重（set） |
| ✅ | 37 | Sudoku Solver | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯 + 行列宫格合法性检查 |
| ✅ | 52 | N-Queens II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯计数，同 N-Queens |
| ✅ | 93 | Restore IP Addresses | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯分段 + 合法性检查 |
| ✅ | 131 | Palindrome Partitioning | Medium | 回文 / 字符串 | [22-palindrome-and-string-techniques](../algorithm-frameworks/22-palindrome-and-string-techniques.md) | 回溯逐个切分 + 回文检查 |
| ✅ | Lint-10 | String Permutation II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 同 Permutations II（字符去重） |
| ✅ | Lint-570 | Find the Missing Number II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯枚举数字 |
| ✅ | Lint-680 | Split String | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯切分 1-2 字符 |

### DFS 二叉树

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 113 | Path Sum II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯记录路径到叶子 |
| ✅ | 257 | Binary Tree Paths | Easy | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DFS 拼接路径 |
| ✅ | Lint-246 | Binary Tree Path Sum II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 任意节点到任意节点，回溯 |
| ✅ | Lint-376 | Binary Tree Path Sum | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 从根到叶子，回溯 |
| ✅ | Lint-472 | Binary Tree Path Sum III | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 可拐弯回溯（N 叉树版） |

### DFS 图

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 140 | Word Break II | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DFS + 记忆化搜索 |
| ✅ | 494 | Target Sum | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DFS 回溯 / DP 转化为 Subset Sum |
| ✅ | 1192 | Critical Connections in a Network | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | Tarjan（低链接值 low[] + dfn[]） |
| ✅ | 126 | Word Ladder II | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 建图 + DFS 找所有最短路径 |
| ✅ | 290 | Word Pattern | Easy | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 双射映射检查 |
| ✅ | 291 | Word Pattern II | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯 + 双射映射 |

## 七、数据结构

### Array & Matrix

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 442 | Find All Duplicates in an Array | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 值对应下标取反标记 |
| ✅ | 48 | Rotate Image | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 先转置再逐行反转 |
| ✅ | 54 | Spiral Matrix | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 四边界遍历 |
| ✅ | 73 | Set Matrix Zeroes | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 用首行首列做标记 |
| ✅ | 289 | Game of Life | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 复合状态（如 2 表示 1→0）原地更新 |

### String

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 6 | ZigZag Conversion | Medium | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 按行模拟 |
| ✅ | 13 | Roman to Integer | Easy | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 逆序，当前 < 上一个则减 |
| ✅ | 14 | Longest Common Prefix | Easy | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 纵向/横向逐个字符比较 |
| ✅ | 68 | Text Justification | Hard | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 贪心每行分配，均匀加空格 |
| ✅ | 443 | String Compression | Medium | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 快慢指针原地压缩 |

### Linked List

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 2 | Add Two Numbers | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 虚拟头 + 遍历两链表逐位加和进位 |
| ✅ | 21 | Merge Two Sorted Lists | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | dummy 头 + 归并 |
| ✅ | 25 | Reverse Nodes in k-Group | Hard | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 递归/迭代每组反转 + 连接 |
| ✅ | 82 | Remove Duplicates from Sorted List II | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 快慢指针跳过全部重复节点 |
| ✅ | 83 | Remove Duplicates from Sorted List | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 遍历跳过重复 |
| ✅ | 86 | Partition List | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 拆两个链表再合并 |
| ✅ | 92 | Reverse Linked List II | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 四指针穿针引线反转 m-n |
| ✅ | 138 | Copy List with Random Pointer | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 原地复制 O(1) 空间：A→A'→B→B'，再拆分 |
| ✅ | 141 | Linked List Cycle | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 快慢指针 |
| ✅ | 148 | Sort List | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 归并排序（快慢找中点 + 合并） |
| ✅ | 160 | Intersection of Two Linked Lists | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 双指针交替走 |
| ✅ | 203 | Remove Linked List Elements | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | dummy 头 + 遍历删除 |
| ✅ | 206 | Reverse Linked List | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 迭代（prev/curr/next） / 递归 |
| ✅ | 234 | Palindrome Linked List | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 快慢找中点 + 反转后半比较 |
| ✅ | 328 | Odd Even Linked List | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 奇偶指针分离再连接 |
| ✅ | 445 | Add Two Numbers II | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 栈存两链表再逐位加 |
| ✅ | 142 | Linked List Cycle II | Medium | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 快慢相遇 + 从 head 再走一步 |
| ✅ | 876 | Middle of the Linked List | Easy | 链表 | [19-linked-list-techniques](../algorithm-frameworks/19-linked-list-techniques.md) | 快慢指针 |

### Hash

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 706 | Design HashMap | Easy | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 数组 + 链表/开放地址 |
| ✅ | 49 | Group Anagrams | Medium | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 排序后字符串做 key |
| ✅ | 128 | Longest Consecutive Sequence | Medium | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 哈希集找序列起点，逐次扩展 |
| ✅ | 560 | Subarray Sum Equals K | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 前缀和 + 哈希表 |
| ✅ | 953 | Verifying an Alien Dictionary | Medium | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 按字典序映射比较相邻单词 |
| ✅ | 290 | Word Pattern | Easy | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 双映射 |

### Heap

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 23 | Merge k Sorted Lists | Hard | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 优先队列放链表头，依次弹出 |
| ✅ | 295 | Find Median from Data Stream | Hard | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 大顶堆 + 小顶堆 |
| ✅ | 347 | Top K Frequent Elements | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 哈希计数 + 堆/桶排序 |
| ✅ | 692 | Top K Frequent Words | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 哈希计数 + 堆（字典序比较） |
| ✅ | 767 | Reorganize String | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 最大堆按频次放字符，间隔 1 |
| ✅ | 973 | K Closest Points to Origin | Medium | nSum / 双指针 | [21-n-sum-problems](../algorithm-frameworks/21-n-sum-problems.md) | 堆 / QuickSelect |
| ✅ | 480 | Sliding Window Median | Hard | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 双堆 + 延迟删除 |
| ✅ | 703 | Kth Largest Element | Easy | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 小顶堆维护 top k |

### Stack

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 155 | Min Stack | Easy | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 辅助栈 / 差值法 |
| ✅ | 20 | Valid Parentheses | Easy | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 左括号入栈，右括号匹配弹出 |
| ✅ | 85 | Maximal Rectangle | Hard | 单调栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 逐行累加高度 + 单调栈求最大矩形 |
| ✅ | 224 | Basic Calculator | Hard | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 双栈（操作数+操作符）/ 展开符号法 |
| ✅ | 227 | Basic Calculator II | Medium | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 栈存中间结果，遇到 +- 入栈，遇到 \*/ 计算后入栈 |
| ✅ | 394 | Decode String | Medium | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 双栈（数字 + 字符串），遇到 ] 出栈构造 |
| ✅ | 1249 | Minimum Remove to Make Valid Parentheses | Medium | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 栈记录多余括号下标 |

### Monotonic Stack

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 300 | Longest Increasing Subsequence | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 耐心排序（tails 数组 + 二分） |
| ✅ | 84 | Largest Rectangle in Histogram | Hard | 单调栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 单调递增栈，遇到矮柱子出栈算面积 |
| ✅ | 239 | Sliding Window Maximum | Hard | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 单调队列（双端队列存下标） |
| ✅ | 1019 | Next Greater Node In Linked List | Medium | 单调栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 单调栈 + 链表转数组 |

### Trie

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 208 | Implement Trie (Prefix Tree) | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 字典树节点 isEnd + children[26] |
| ✅ | 211 | Design Add and Search Words Data Structure | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | Trie + DFS 搜索（含 . 通配符） |
| ✅ | 1032 | Stream of Characters | Hard | Trie | [30-trie-prefix-tree](../algorithm-frameworks/30-trie-prefix-tree.md) | 反转建 Trie + 后缀流匹配 |

### Union Find

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 200 | Number of Islands | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 并查集合并相邻 1 |
| ✅ | 305 | Number of Islands II | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 动态 Union-Find |
| ✅ | 323 | Number of Connected Components | Medium | 并查集 | [26-union-find](../algorithm-frameworks/26-union-find.md) | 并查集统计连通分量 |

### Sweep Line

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | Lint-391 | Number of Airplanes in the Sky | Medium | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 事件排序扫描 |
| ✅ | 252 | Meeting Rooms | Easy | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 排序检查重叠 |
| ✅ | 253 | Meeting Rooms II | Hard | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 扫描线/最小堆 |

### Binary Index Tree & Segment Tree

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 307 | Range Sum Query - Mutable | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | BIT / 线段树 |
| ✅ | 327 | Count of Range Sum | Hard | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 前缀和 + BIT/归并 |
| ✅ | 715 | Range Module | Hard | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 有序集合维护区间 |
| ✅ | 315 | Count of Smaller Numbers After Self | Hard | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | BIT / 归并排序求逆序 |
| ✅ | 493 | Reverse Pairs | Hard | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | BIT / 归并排序 |

### Complex Data Structure

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 146 | LRU Cache | Medium | 缓存设计 | [29-lru-and-lfu-cache](../algorithm-frameworks/29-lru-and-lfu-cache.md) | 哈希表 + 双向链表 |
| ✅ | 460 | LFU Cache | Hard | 缓存设计 | [29-lru-and-lfu-cache](../algorithm-frameworks/29-lru-and-lfu-cache.md) | 哈希表 + 频次链表组 |
| ✅ | 211 | Design Add and Search Words | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | Trie + DFS |
| ✅ | 380 | Insert Delete GetRandom O(1) | Medium | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 哈希表 + 数组，删除时与末尾交换 |
| ✅ | 528 | Random Pick with Weight | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 前缀和 + 二分 |
| ✅ | 588 | Design In-Memory File System | Hard | Trie | [30-trie-prefix-tree](../algorithm-frameworks/30-trie-prefix-tree.md) | Trie 结构 + 文件系统操作 |
| ✅ | 981 | Time Based Key-Value Store | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | HashMap<String, TreeMap<timestamp, value>> |
| ✅ | 1396 | Design Underground System | Medium | 设计题 | [32-design-and-ood](../algorithm-frameworks/32-design-and-ood.md) | 两个哈希表（checkin + 总时间统计） |

## 八、动态规划 (DP)

### Backpack 系列

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | Lint-92 | Backpack | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | 01 背包——dp[j] = max(dp[j], dp[j-A[i]]+A[i]) |
| ✅ | Lint-125 | Backpack II | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | 01 背包——dp[j] = max(dp[j], dp[j-w[i]]+v[i]) |
| ✅ | Lint-440 | Backpack III | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | 完全背包——内层正序 |
| ✅ | Lint-562 | Backpack IV | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | 完全背包计数 |
| ✅ | Lint-563 | Backpack V | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | 01 背包计数 |
| ✅ | Lint-564 | Backpack VI | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | 组合总和 IV，顺序有关（排列）（先 target 再 nums） |
| ✅ | Lint-971 | Surplus Value Backpack | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | 扩展背包 |
| ✅ | 474 | Ones and Zeroes | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | 二维 01 背包（0 和 1 两个容量） |

### 单序列

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 139 | Word Break | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i] = dp[j] && dict.contains(s[j:i]) |
| ✅ | 121 | Best Time to Buy and Sell Stock | Easy | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 记录历史最低价，每天算最大利润 |
| ✅ | 122 | Best Time to Buy and Sell Stock II | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 贪心——累加所有正差价 |
| ✅ | 123 | Best Time to Buy and Sell Stock III | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | DP（4 状态/前后缀分解） |
| ✅ | 188 | Best Time to Buy and Sell Stock IV | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | DP（k 次交易，优化为 2\*k 状态） |
| ✅ | 256 | Paint House | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][c] = cost[i][c] + min(dp[i-1][其他两色]) |
| ✅ | 265 | Paint House II | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][c] = cost[i][c] + min(dp[i-1][c']) 找最小两个 |
| ✅ | Lint-843 | Digital Flip | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][0/1] 最少翻转次数 |

### 双序列

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 10 | Regular Expression Matching | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j] 匹配 s[:i] 和 p[:j]，处理 \* 匹配零或多个 |
| ✅ | 44 | Wildcard Matching | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j]，\* 匹配零到多个，? 匹配单个 |
| ✅ | 72 | Edit Distance | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j] = min(insert, delete, replace) |
| ✅ | 97 | Interleaving String | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j] = (dp[i-1][j] && s3[i+j-1]==s1[i-1]) |
| ✅ | 115 | Distinct Subsequences | Hard | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | dp[i][j] = dp[i-1][j] + (s[i-1]==t[j-1] ? dp[i-1][j-1] : 0) |
| ✅ | 1143 | Longest Common Subsequence | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | dp[i][j] = dp[i-1][j-1]+1 if equal else max(dp[i-1][j],dp[i][j-1]) |

### 区间

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 312 | Burst Balloons | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j] = max(dp[i][k-1]+dp[k+1][j] + nums[i-1]*nums[k]*nums[j+1]) |
| ✅ | 516 | Longest Palindromic Subsequence | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | dp[i][j] = dp[i+1][j-1] + (s[i]==s[j]) else max(dp[i+1][j], dp[i][j-1]) |
| ✅ | 87 | Scramble String | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j][k] 子串 s1[i:i+k] 能否 scramble 成 s2[j:j+k] |

### 矩阵

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 62 | Unique Paths | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j] = dp[i-1][j] + dp[i][j-1] |
| ✅ | 63 | Unique Paths II | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 有障碍物 dp[i][j] = 0 |
| ✅ | 64 | Minimum Path Sum | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]) |
| ✅ | 85 | Maximal Rectangle | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 逐行算高度 + 柱状图最大矩形 |
| ✅ | 221 | Maximal Square | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) 取边长 |
| ✅ | 361 | Bomb Enemy | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 四方向 DP 累积可消灭敌人 |

### 其他

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 91 | Decode Ways | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i] = dp[i-1] + dp[i-2]（需校验两位是否 ≤ 26） |
| ✅ | Lint-394 | Coins in a Line | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 博弈 DP，dp[i] = !dp[i-1] |
| ✅ | 132 | Palindrome Partitioning II | Hard | 回文 / 字符串 | [22-palindrome-and-string-techniques](../algorithm-frameworks/22-palindrome-and-string-techniques.md) | dp[i] = min(dp[j] + 1) if s[j+1:i] 回文 |
| ✅ | 279 | Perfect Squares | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i] = min(dp[i-j*j] + 1) |
| ✅ | 639 | Decode Ways II | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 考虑 \* 通配符情况分类讨论 |
| ✅ | Lint-395 | Coins in a Line II | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 博弈 DP，dp[i] = sum - min(dp[i+1], dp[i+2]) |
| ✅ | Lint-396 | Coins in a Line III | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 区间博弈 dp[i][j] |

### 贪心

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 55 | Jump Game | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 维护最远可达位置 |
| ✅ | 45 | Jump Game II | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 思想/贪心选每跳最远 |
| ✅ | 763 | Partition Labels | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 记录每个字母最后出现位置，遍历分段 |

## 九、补充

### 排序类 (Sort)

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 179 | Largest Number | Medium | 排序 | [17-sorting-algorithms](../algorithm-frameworks/17-sorting-algorithms.md) | 自定义排序比较 a+b > b+a |
| ✅ | 215 | Kth Largest Element | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | QuickSelect / 堆 |
| ✅ | 4 | Median of Two Sorted Arrays | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分分割线 |

### Queue

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 225 | Implement Stack using Queues | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 双队列/单队列 |
| ✅ | 281 | Zigzag Iterator | Medium | 设计题 | [32-design-and-ood](../algorithm-frameworks/32-design-and-ood.md) | 队列存各迭代器 |
| ✅ | 1429 | First Unique Number | Medium | 模式识别 | [34-algorithm-pattern-recognition](../algorithm-frameworks/34-algorithm-pattern-recognition.md) | 队列 + 哈希集 |
| ✅ | 362 | Design Hit Counter | Medium | 设计题 | [32-design-and-ood](../algorithm-frameworks/32-design-and-ood.md) | 队列/时间窗口计数 |

### Stack（补充）

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 716 | Max Stack | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | 双栈/双向链表 + TreeMap |
| ✅ | 232 | Implement Queue using Stacks | Easy | 语言基础 / 手写结构 | [95-basic-coding-challenges](../reference/95-basic-coding-challenges.md) | 双栈倒腾 |
| ✅ | 150 | Evaluate Reverse Polish Notation | Medium | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 遇到操作符弹出两个运算再入栈 |
| ✅ | 1472 | Design Browser History | Medium | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 双栈/数组+指针 |
| ✅ | 1209 | Remove All Adjacent Duplicates in String II | Medium | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 栈存 (字符,连续计数) |
| ✅ | 735 | Asteroid Collision | Medium | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 栈模拟碰撞 |

### Hashmap / Hashset

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 350 | Intersection of Two Arrays II | Easy | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 哈希表计数 |
| ✅ | 299 | Bulls and Cows | Medium | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 哈希表统计位置/数字匹配 |
| ✅ | 348 | Design Tic-Tac-Toe | Medium | 哈希表 | [23-hash-table-techniques](../algorithm-frameworks/23-hash-table-techniques.md) | 行列对角计数 |

### Heap / Priority Queue

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 264 | Ugly Number II | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 三指针 DP / 最小堆 |
| ✅ | 1086 | High Five | Medium | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 小顶堆维护每人 top 5 |
| ✅ | 88 | Merge Sorted Array | Easy | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | 从后往前归并 |
| ✅ | 378 | Kth Smallest Element in a Sorted Matrix | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 堆 / 二分答案 |
| ✅ | 1438 | Longest Continuous Subarray With Absolute Diff ≤ Limit | Hard | 单调队列 | [36-monotonic-queue](../algorithm-frameworks/36-monotonic-queue.md) | 双端队列维护窗口最大最小值 |
| ✅ | 895 | Maximum Frequency Stack | Hard | 堆 / 优先队列 | [24-heap-and-priority-queue](../algorithm-frameworks/24-heap-and-priority-queue.md) | 每组频次一个栈 + 频率哈希表 |

### 二分法（补充）

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 34 | Find First and Last Position | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 两次二分 |
| ✅ | 33 | Search in Rotated Sorted Array | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 条件二分 |
| ✅ | 1095 | Find in Mountain Array | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 三次二分（找山顶 → 左半 → 右半） |
| ✅ | 162 | Find Peak Element | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分比较 |
| ✅ | 278 | First Bad Version | Easy | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分找第一个 true |
| ✅ | 74 | Search a 2D Matrix | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二维转一维二分 |
| ✅ | 240 | Search a 2D Matrix II | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 右上角 Z 字形搜索 |
| ✅ | 69 | Sqrt(x) | Easy | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分 |
| ✅ | 540 | Single Element in a Sorted Array | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 奇偶性二分 |
| ✅ | 644 | Maximum Average Subarray II | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分平均值 + check 用前缀和 |
| ✅ | 1300 | Sum of Mutated Array Closest to Target | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分 value + check 和 |
| ✅ | 1060 | Missing Element in Sorted Array | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分缺失数 |
| ✅ | 1062 | Longest Repeating Substring | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分长度 + 滚动哈希 |
| ✅ | 1891 | Cutting Ribbons | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 二分长度 + check 段数 |

### BFS（补充）

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 314 | Binary Tree Vertical Order Traversal | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS + (col → list) |
| ✅ | 130 | Surrounded Regions | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 边界 DFS/BFS 标记未包围 O |
| ✅ | 752 | Open the Lock | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 逐位转动 |
| ✅ | 815 | Bus Routes | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 站点-线路建图 BFS |
| ✅ | 1091 | Shortest Path in Binary Matrix | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS 8 方向 |
| ✅ | 1293 | Shortest Path in a Grid with Obstacles Elimination | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | BFS + (r,c,k) 状态 |
| ✅ | 310 | Minimum Height Trees | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 拓扑消叶子 |
| ✅ | 366 | Find Leaves of Binary Tree | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | DFS 按高度收集 |

### DFS - 基于树

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 543 | Diameter of Binary Tree | Easy | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 后序求左右高度，取 max(left+right) |
| ✅ | 226 | Invert Binary Tree | Easy | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 递归交换左右子树 |
| ✅ | 951 | Flip Equivalent Binary Trees | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 递归检查翻转/不翻转 |
| ✅ | 987 | Vertical Order Traversal of a Binary Tree | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 列序 + 行序 + 值序三级排序 |
| ✅ | 1485 | Clone Binary Tree With Random Pointer | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DFS + 哈希表 |
| ✅ | 572 | Subtree of Another Tree | Easy | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 对每个节点 checkSame |
| ✅ | 863 | All Nodes Distance K in Binary Tree | Medium | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | 建父亲映射 + BFS |
| ✅ | 1110 | Delete Nodes And Return Forest | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 后序遍历 + 标记删除收集 |

### DFS - 基于图

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 341 | Flatten Nested List Iterator | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DFS 展开 / 栈迭代 |
| ✅ | 586 | Score of Parentheses | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 栈 / DFS 分治 |
| ✅ | 212 | Word Search II | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | Trie + DFS 剪枝 |
| ✅ | 1087 | Brace Expansion | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯展开 |
| ✅ | 399 | Evaluate Division | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 图 DFS 求边权积 |
| ✅ | 1274 | Number of Ships in a Rectangle | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 四分递归 |
| ✅ | 1376 | Time Needed to Inform All Employees | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DFS 最长时间 |
| ✅ | 694 | Number of Distinct Islands | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DFS 序列化形状 |

### DFS - 排列组合

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 698 | Partition to K Equal Sum Subsets | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯 + 剪枝 |
| ✅ | 526 | Beautiful Arrangement | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 回溯 visited |

### DFS + 记忆化

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 377 | Combination Sum IV | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DP / 记忆化搜索 |
| ✅ | 1235 | Maximum Profit in Job Scheduling | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 排序 + 二分找前驱 + DP |
| ✅ | 1335 | Minimum Difficulty of a Job Schedule | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | DP[i][d] = min(DP[j][d-1] + max(jobs[j:i])) |
| ✅ | 1216 | Valid Palindrome III | Medium | 回文 / 字符串 | [22-palindrome-and-string-techniques](../algorithm-frameworks/22-palindrome-and-string-techniques.md) | 区间 DP / 记忆化 |
| ✅ | 472 | Concatenated Words | Medium | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 排序 + 记忆化搜索 |
| ✅ | 403 | Frog Jump | Hard | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 记忆化 DFS / DP |
| ✅ | 329 | Longest Increasing Path in a Matrix | Hard | BFS | [03-bfs-framework](../algorithm-frameworks/03-bfs-framework.md) | DFS + 记忆化 |

### 前缀和 (Prefix Sum)

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 1423 | Maximum Points You Can Obtain from Cards | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 滑动窗口求中间 n-k 最小 |
| ✅ | 1031 | Maximum Sum of Two Non-Overlapping Subarrays | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 左右 DP 前缀最大和 + 枚举分割 |
| ✅ | 523 | Continuous Subarray Sum | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 前缀和模 k 相同则中间区间和整除 k |
| ✅ | 304 | Range Sum Query 2D - Immutable | Medium | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 二维前缀和 |

### 并查集 (Union Find)

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 721 | Accounts Merge | Medium | 并查集 | [26-union-find](../algorithm-frameworks/26-union-find.md) | 并查集合并同名邮箱 |
| ✅ | 547 | Number of Provinces | Easy | DFS / 回溯 | [04-backtracking-subsets-permutations-combinations](../algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md) | 并查集/DFS 连通分量 |
| ✅ | 737 | Sentence Similarity II | Medium | 并查集 | [26-union-find](../algorithm-frameworks/26-union-find.md) | 并查集合并同义词组 |

### 字典树 (Trie)

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 1268 | Search Suggestions System | Medium | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | Trie / 排序 + 前缀二分 |

### 单调栈 / 单调队列

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 862 | Shortest Subarray with Sum at Least K | Hard | 前缀和 / 差分 | [20-prefix-sum-and-diff-array](../algorithm-frameworks/20-prefix-sum-and-diff-array.md) | 前缀和 + 单调递增队列，队头出答案、队尾去劣 |
| ✅ | 907 | Sum of Subarray Minimums | Medium | 单调栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 单调栈左右找边界，每个元素作为最小值的贡献 |
| ✅ | 739 | Daily Temperatures | Medium | 单调栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 单调递减栈，找到第一个更高温度就出栈算天数差 |
| ✅ | 901 | Online Stock Span | Medium | 单调栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 单调递减栈，栈存 (价,跨度) |
| ✅ | 503 | Next Greater Element II | Medium | 单调栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 循环数组 + 单调栈（遍历 2 倍数组） |

### 扫描线 (Sweep Line)

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 218 | The Skyline Problem | Hard | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 扫描线 + 最大堆 |
| ✅ | 759 | Employee Free Time | Medium | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | 合并区间取补集 |

### TreeMap

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 729 | My Calendar I | Medium | 区间 / 扫描线 | [25-interval-and-sweep-line](../algorithm-frameworks/25-interval-and-sweep-line.md) | TreeMap 找前驱后继检查重叠 |
| ✅ | 846 | Hand of Straights | Medium | 二叉树 | [14-binary-tree-advanced](../algorithm-frameworks/14-binary-tree-advanced.md) | TreeMap 计数 + 贪心分组 |

### DP（补充）

| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |
|---|---|---|---|---|---|---|
| ✅ | 674 | Longest Continuous Increasing Subsequence | Medium | 滑动窗口 | [16-sliding-window](../algorithm-frameworks/16-sliding-window.md) | 一次遍历，递增就 +1，否则重置 |
| ✅ | 70 | Climbing Stairs | Easy | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i] = dp[i-1] + dp[i-2] |
| ✅ | 368 | Largest Divisible Subset | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 排序 + LIS 思想 dp + 追溯路径 |
| ✅ | 354 | Russian Doll Envelopes | Hard | 二分 | [05-binary-search](../algorithm-frameworks/05-binary-search.md) | 排序（宽升、高降）+ LIS 二分 |
| ✅ | 174 | Dungeon Game | Hard | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 从右下往左上倒推 |
| ✅ | 712 | Minimum ASCII Delete Sum for Two Strings | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 双序列 DP，cost = 删减字符的 ASCII 和 |
| ✅ | 1277 | Count Square Submatrices with All Ones | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) 统计 |
| ✅ | 198 | House Robber | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i] = max(dp[i-1], dp[i-2] + nums[i]) |
| ✅ | 213 | House Robber II | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 环状，分两种情况（去头/去尾） |
| ✅ | 740 | Delete and Earn | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 转化为 House Robber（值域桶+相邻不可取） |
| ✅ | 1140 | Stone Game II | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 博弈 DP |
| ✅ | 322 | Coin Change | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | dp[i] = min(dp[i-coin] + 1) |
| ✅ | 518 | Coin Change II | Medium | 背包 | [07-knapsack-problems](../algorithm-frameworks/07-knapsack-problems.md) | dp[j] += dp[j-coin] 完全背包计数 |
| ✅ | 1048 | Longest String Chain | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | 排序 + 逐个去字符在 dp 中查找 |
| ✅ | 32 | Longest Valid Parentheses | Hard | 栈 | [18-monotonic-stack](../algorithm-frameworks/18-monotonic-stack.md) | 栈/DP（遇到 ')' 找匹配位置 + 前导长度） |
| ✅ | 1043 | Partition Array for Maximum Sum | Medium | 双指针 | [15-two-pointers](../algorithm-frameworks/15-two-pointers.md) | dp[i] = max(dp[j] + (i-j)\*max(arr[j:i])) |
| ✅ | 926 | Flip String to Monotone Increasing | Medium | 动态规划 | [06-dp-framework](../algorithm-frameworks/06-dp-framework.md) | dp[i][0/1] 翻转求单调 |

---

> **关联阅读：** [详细专题索引](ALGORITHM-INDEX.md) → [模式识别](../algorithm-frameworks/34-algorithm-pattern-recognition.md) → [错题复盘与题型训练](../training/90-review-and-pattern-training.md)
