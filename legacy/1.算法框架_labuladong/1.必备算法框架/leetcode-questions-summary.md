# LeetCode 题库总览

> 按专题分类，含题号、题目名称、完成状态、基本思路与备注

---

## 一、基础

### 基础

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 37 | Reverse 3-digit Integer | Easy | 数学取模/整除反转数字 | 🔥 热度题 |
| ✅ | 214 | Max of Array | Easy | 线性扫描求最大值 | 🔥 热度题 |
| ✅ | 283 | Max of 3 Numbers | Easy | 条件判断比较 | 🔥 热度题 |
| ✅ | 146 | Lower to Uppercase II | Easy | ASCII 码转换（'a'-'A'） | 🔥 热度题 |
| ✅ | 241 | String to Integer | Easy | 遍历字符串逐位累加 | ⭐ 高频 必备 |
| ✅ | 449 | Char to Integer | Easy | char - '0' | 🔥 热度题 |
| ✅ | 463 | Sort Integers | Easy | 排序 API / 手写排序 | ⭐ 高频 必备 |
| ✅ | 484 | Swap Two Integers in Array | Easy | 临时变量/异或交换 | 🔥 热度题 |
| ✅ | 485 | Generate ArrayList with Given Size | Easy | 循环 add | 🔥 热度题 |

### 链表基础

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 225 | Find Node in Linked List | Easy | 遍历链表 | 🔥 热度题 |
| ✅ | 466 | Count Linked List Nodes | Easy | 遍历计数 | 🔥 热度题 |
| ✅ | 483 | Convert Linked List to Array List | Easy | 遍历 collect | 🔥 热度题 |

### 进阶基础

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 454 | Rectangle Area | Easy | 长宽相乘 | 📈 进阶 |
| ✅ | 478 | Simple Calculator | Easy | 运算符判断 + 算术运算 | 📈 进阶 |
| ✅ | 366 | Fibonacci | Easy | 迭代/递归/矩阵快速幂 | ⭐ 高频 必备 |
| ✅ | 632 | Binary Tree Maximum Node | Easy | 递归遍历二叉树 | 📈 进阶 |

### 栈与队列基础

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 40 | Implement Queue by Two Stacks | Easy | 双栈（push 栈 + pop 栈），pop 栈空时倒数据 | ⭐ 高频 必备 |
| ✅ | 492 | Implement Queue by Linked List | Easy | 链表头出尾入 | 📈 进阶 |
| ✅ | 494 | Implement Stack by Two Queues | Easy | 双队列，入队时倒腾 | 📈 进阶 |
| ✅ | 495 | Implement Stack | Easy | 数组/链表实现 LIFO | 📈 进阶 |

---

## 二、二分法

### 朴素二分法

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 704 | Binary Search | Easy | 经典二分，while l ≤ r | ⭐ 必备 |
| ✅ | 34 | Find First and Last Position of Element in Sorted Array | Medium | 两次二分分别找左右边界 | 🔥 高频 |
| ✅ | 702 | Search in a Sorted Array of Unknown Size | Medium | 先倍增找右边界，再二分 | ⭐ 挑战 |
| ✅ | 153 | Find Minimum in Rotated Sorted Array | Medium | 二分比较 mid 与 right，排除有序半段 | ⭐ 必备 |
| ✅ | 154 | Find Minimum in Rotated Sorted Array II | Medium | 同上，但需处理重复值（right--） | 🔥 高频 |
| ✅ | 278 | First Bad Version | Easy | 二分查找第一个 true | ⭐ 基础 |
| ✅ | 658 | Find K Closest Elements | Medium | 二分找到最接近值的起点，双指针扩展 | ⭐ 必备 |

### 条件二分法

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 33 | Search in Rotated Sorted Array | Medium | 先判断哪半有序，再决定搜索方向 | 🔥 高频必备，经典题 |
| ✅ | 81 | Search in Rotated Sorted Array II | Medium | 相比 33 增加重复值处理 | 🔥 高频，进阶版 |
| ✅ | 4 | Median of Two Sorted Arrays | Hard | 对短数组二分分割线，保证左右数量相等且左 max ≤ 右 min | 🚀 Hard，超高频核心 |
| ✅ | 74 | Search a 2D Matrix | Medium | 将二维视为一维做二分 | ⭐ 高频常考 |
| ✅ | 162 | Find Peak Element | Medium | 二分比较 mid 与 mid+1，往大的一侧走 | ⭐ 高频面试爱考 |
| ✅ | 302 | Smallest Rectangle Enclosing Black Pixels | Hard | 分别在四边做二分找临界 | ⭐ Premium，冷门偏算法 |
| ✅ | 852 | Peak Index in a Mountain Array | Easy | 二分找山顶 | ⭐ 高频基础题 |

### 答案二分法

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 875 | Koko Eating Bananas | Medium | 对速度二分，check 是否能在 h 小时内吃完 | ⭐ 高频必备 |
| ✅ | 1283 | Find the Smallest Divisor Given a Threshold | Medium | 对除数二分，check 除后和是否 ≤ threshold | ⭐ 二分答案思维 |
| ✅ | 69 | Sqrt(x) | Easy | 对结果二分，mid² ≤ x | ⭐ 高频基础 |
| ✅ | Lint-586 | Sqrt(x) II | Medium | 浮点数二分，精度控制 | ⭐ 扩展 |
| ✅ | Lint-183 | Wood Cut | Medium | 对段长二分，check 段数是否 ≥ k | ⭐ 高频经典 |
| ✅ | Lint-437 | Copy Books | Hard | 对最短时间二分，贪心分配 | ⭐ 高频 Hard，分割类 |
| ✅ | Lint-438 | Copy Books II | Hard | 同上但每个复印员速度不同 | ⭐ 进阶分配问题 |

---

## 三、多指针

### 数组

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 912 | Sort an Array | Medium | 快排/归并/堆排 | 🚀 Hard 排序经典 |
| ✅ | 75 | Sort Colors | Easy | 三指针（low/mid/high），DNF 荷兰国旗问题 | 🔥 高频核心，一趟原地 |
| ✅ | 26 | Remove Duplicates from Sorted Array | Easy | 快慢指针，fast 读 slow 写 | ⭐ 高频基础 |
| ✅ | 80 | Remove Duplicates from Sorted Array II | Medium | 快慢指针，允许最多两个重复 | ⭐ 高频进阶 |
| ✅ | 88 | Merge Sorted Array | Easy | 从后往前双指针归并 | 💯 高频面试常客 |
| ✅ | 283 | Move Zeroes | Easy | 快慢指针，非零往前移，末尾补零 | ⭐ 高频必考 |
| ✅ | 215 | Kth Largest Element in an Array | Medium | QuickSelect / 堆 | 🔥 高频核心 |
| ✅ | 347 | Top K Frequent Elements | Medium | 哈希计数 + 桶排序/堆 | 🔥 高频热门 |
| ✅ | 349 | Intersection of Two Arrays | Easy | 哈希集合去重取交集 | ⭐ 基础 |
| ✅ | 350 | Intersection of Two Arrays II | Medium | 哈希表计数 / 排序双指针 | ⭐ 高频变形 |
| ✅ | 845 | Longest Mountain in Array | Medium | 枚举山顶向左右扩展 | ⭐ 思维题 |
| ✅ | 42 | Trapping Rain Water | Hard | 双指针/单调栈/DP，左右最大高度夹逼 | 🚀 超高频核心 |
| ✅ | 43 | Multiply Strings | Medium | 模拟竖式乘法，res[i+j] 累加 | ⭐ 字符串模拟 |
| ✅ | 969 | Pancake Sorting | Medium | 每次找最大翻转到顶再翻到底 | ⭐ 扩展题 |
| ✅ | Lint-31 | Partition Array | Medium | 双指针按 pivot 分区 | ⭐ 高频经典 |
| ✅ | Lint-625 | Partition Array II | Medium | 三指针按两个 pivot 分区 | ⭐ 进阶 |
| ✅ | Lint-143 | Sort Colors II | Medium | 分治/彩虹排序（O(nlogk)） | ⭐ 扩展 |
| ✅ | Lint-461 | Kth Smallest Numbers in Unsorted Array | Medium | QuickSelect / 堆 | ⭐ 高频 |
| ✅ | Lint-544 | Top k Largest Numbers | - | 堆 / 排序取 top k | ⭐ 高频 |

### 链表

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 21 | Merge Two Sorted Lists | Easy | 归并双指针（dummy 头） | ⭐ 高频必备 |
| ✅ | 86 | Partition List | Medium | 双指针分 < x 和 ≥ x 两个链表再合并 | ⭐ 双指针链表分割 |
| ✅ | 141 | Linked List Cycle | Easy | 快慢指针相遇判环 | ⭐ 高频必备 |
| ✅ | 160 | Intersection of Two Linked Lists | Easy | 双指针分别走 A+B 路程 | ⭐ 高频双指针 |
| ✅ | 234 | Palindrome Linked List | Easy | 快慢找中点 + 反转后半比较 | ⭐ 高频 |
| ✅ | 328 | Odd Even Linked List | Medium | 奇偶双指针分离再连接 | ⭐ 高频链表重排 |
| ✅ | 142 | Linked List Cycle II | Hard | 快慢相遇后从 head 再走一步找入环点 | ⭐ 高频必备 |
| ✅ | 287 | Find the Duplicate Number | Medium | 看成链表找环入口（值域 1..n 指向 nums[i]） | ⭐ 快慢指针/二分 |
| ✅ | 876 | Middle of the Linked List | Easy | 快慢指针，快指针到末尾时慢指针在中点 | ⭐ 高频基础 |

### 区间

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | Lint-391 | Number of Airplanes in the Sky | Medium | 扫描线，起飞+1 降落-1 | 📈 进阶 |
| ✅ | 56 | Merge Intervals | Medium | 按起点排序，合并重叠 | ⭐ 高频必备 |
| ✅ | 57 | Insert Interval | Medium | 遍历分三段（不重叠左/重叠中/不重叠右）插入合并 | ⭐ 高频必备 |
| ✅ | 252 | Meeting Rooms | Easy | 排序后检查相邻是否有重叠 | ⭐ 高频必备 |
| ✅ | 253 | Meeting Rooms II | Medium | 扫描线/最小堆（按结束时间） | ⭐ 高频必备 |
| ✅ | 986 | Interval List Intersections | Medium | 双指针走两个列表，取交集区间 | 🔥 热度题 |

### 回文串

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 5 | Longest Palindromic Substring | Medium | 中心扩展 / Manacher | ⭐ 高频必备 |
| ✅ | 345 | Reverse Vowels of a String | Easy | 双指针两端找元音互换 | 🔥 热度题 |
| ✅ | 680 | Valid Palindrome II | Easy | 双指针，最多跳过一个字符 | ⭐ 高频必备 |
| ✅ | 125 | Valid Palindrome | Easy | 双指针，忽略非字母数字 | ⭐ 高频必备 |

### 滑动窗口

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 3 | Longest Substring Without Repeating Characters | Medium | 滑动窗口 + 哈希集记录字符位置 | ⭐ 高频必备 |
| ✅ | 11 | Container With Most Water | Medium | 双指针两端向中间移，短板决定高度 | ⭐ 高频必备 |
| ✅ | 76 | Minimum Window Substring | Hard | 滑动窗口 + 计数数组，先扩再缩找最小覆盖 | 💎 挑战 |
| ✅ | 209 | Minimum Size Subarray Sum | Medium | 滑动窗口，和 ≥ target 时收缩 left | ⭐ 高频必备 |
| ✅ | 239 | Sliding Window Maximum | Hard | 单调队列（双端队列存下标） | 💎 挑战 |
| ✅ | 713 | Subarray Product Less Than K | Medium | 滑动窗口，乘积 < k 时 right-left+1 个子数组 | 📈 进阶 |
| ✅ | 395 | Longest Substring with At Least K Repeating Characters | Medium | 分治 / 对字符种类数滑动窗口 | 💎 挑战 |
| ✅ | 480 | Sliding Window Median | Hard | 双堆（maxHeap + minHeap）+ 延迟删除 | 💎 挑战 |
| ✅ | 567 | Permutation in String | Medium | 固定长度滑动窗口 + 字符计数 | 📈 进阶 |
| ✅ | 727 | Minimum Window Subsequence | Hard | DP / 双指针逐字符匹配 | 💎 挑战 |
| ✅ | Lint-604 | Window Sum | Easy | 固定大小滑动窗口求和 | 📈 进阶 |

### 流

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 295 | Find Median from Data Stream | Hard | 双堆（大顶堆存小半，小顶堆存大半） | 💎 挑战 |
| ✅ | 346 | Moving Average from Data Stream | Easy | 队列维护窗口和 | 🔥 热度题 |
| ✅ | 352 | Data Stream as Disjoint Intervals | Hard | TreeMap 按起点存区间，合并相邻 | 💎 挑战 |
| ✅ | 703 | Kth Largest Element in a Stream | Easy | 小顶堆维护 top k | ⭐ 高频必备 |

### 前项和

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 53 | Maximum Subarray | Medium | Kadane 算法，dp[i] = max(nums[i], dp[i-1]+nums[i]) | ⭐ 高频必备 |
| ✅ | 238 | Product of Array Except Self | Medium | 前缀积 * 后缀积 | ⭐ 高频必备 |
| ✅ | 303 | Range Sum Query - Immutable | Easy | 前缀和数组预处理 | 🔥 热度题 |
| ✅ | 325 | Maximum Size Subarray Sum Equals k | Medium | 前缀和 + 哈希表存最早下标 | 📈 进阶 |
| ✅ | 528 | Random Pick with Weight | Medium | 前缀和 + 二分找随机数落点 | 📈 进阶 |
| ✅ | 560 | Subarray Sum Equals K | Medium | 前缀和 + 哈希表计数 | ⭐ 高频必备 |

### 和差问题

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 1 | Two Sum | Easy | 哈希表存补数 | ⭐ 高频必备 |
| ✅ | 15 | 3Sum | Medium | 排序 + 固定一个 + 双指针 | 🔥 高频必备 |
| ✅ | 18 | 4Sum | Medium | 排序 + 双层循环 + 双指针 | 🔥 挑战 |
| ✅ | Lint-382 | Triangle Count | Medium | 排序 + 定最大边 + 双指针 | ⭐ 高频 |
| ✅ | 167 | Two Sum II | Easy | 有序数组双指针夹逼 | ⭐ 高频必备 |
| ✅ | 170 | Two Sum III | Easy | 哈希表存数字及出现次数 | 🔥 挑战 |
| ✅ | 653 | Two Sum IV | Easy | BST 遍历 + 哈希集 | ⭐ 高频 |
| ✅ | 1099 | Two Sum Less Than K | Medium | 排序 + 双指针找最大和 < K | ⭐ 进阶 |
| ✅ | 259 | 3Sum Smaller | Medium | 排序 + 固定一个 + 双指针计数 | 🔥 挑战 |
| ✅ | Lint-57 | 3Sum Closest | Medium | 排序 + 固定 + 双指针更新 closest | 🔥 高频必备 |
| ✅ | Lint-443 | Two Sum - Greater than target | Medium | 排序 + 双指针计数 | ⭐ 进阶 |
| ✅ | Lint-533 | Two Sum - Closest to target | Medium | 排序 + 双指针更新 minDiff | ⭐ 进阶 |
| ✅ | Lint-587 | Two Sum - Unique pairs | Medium | 排序 + 双指针跳过重复 | 🔥 挑战 |
| ✅ | Lint-609 | Two Sum - Less than or equals to target | Medium | 排序 + 双指针计数 | ⭐ 高频 |
| ✅ | Lint-610 | Two Sum - Difference equals to target | Medium | 排序 + 双指针（差时移动 left） | ⭐ 高频 |

---

## 四、宽度优先搜索 (BFS)

### BFS / 二叉树

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 297 | Serialize and Deserialize Binary Tree | Hard | 层序遍历/前序遍历转字符串再反序列化 | ⭐ 进阶 Tree 必备 |
| ✅ | 102 | Binary Tree Level Order Traversal | Medium | 队列 BFS，每层收集 | ⭐ 高频 BFS 基础 |
| ✅ | 103 | Binary Tree Zigzag Level Order Traversal | Medium | 层序 + 奇偶层反转顺序 | ⭐ 高频 BFS 变形 |
| ✅ | 107 | Binary Tree Level Order Traversal II | Medium | 层序后结果反转 | ⭐ 高频 BFS 变形 |
| ✅ | 513 | Find Bottom Left Tree Value | Medium | BFS 从右往左，最后一个节点即最左 | ⭐ 高频 |
| ✅ | Lint-242 | Convert Binary Tree to Linked Lists by Depth | Medium | BFS 每层构建链表 | ⭐ 高频 |

### BFS / 拓扑排序

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | Lint-127 | Topological Sorting | Medium | Kahn（入度表）/ DFS | ⭐ 高频必备 |
| ✅ | 207 | Course Schedule | Medium | 拓扑排序判环 | ⭐ 高频必备 |
| ✅ | 210 | Course Schedule II | Medium | 拓扑排序返回顺序 | ⭐ 高频必备 |
| ✅ | 269 | Alien Dictionary | Hard | 字符比较建图 + 拓扑排序 | ⭐ 进阶必备 |
| ✅ | 444 | Sequence Reconstruction | Medium | 拓扑排序唯一性判断 | ⭐ 进阶 |

### BFS / 矩阵

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 200 | Number of Islands | Medium | DFS/BFS 每遇到 1 就感染（标记访问） | ⭐ 高频必备 |
| ✅ | 490 | The Maze | Medium | BFS/DFS 模拟球滚直到撞墙 | ⭐ 高频 |
| ✅ | 505 | The Maze II | Medium | Dijkstra/BFS 优先队列找最短距离 | ⭐ 进阶 |
| ✅ | 542 | 01 Matrix | Medium | 多源 BFS 从所有 0 出发 | ⭐ 高频 |
| ✅ | 733 | Flood Fill | Easy | DFS/BFS 颜色填充 | ⭐ 高频基础 |
| ✅ | 994 | Rotting Oranges | Medium | 多源 BFS 分钟级别扩散 | ⭐ 高频 |
| ✅ | 305 | Number of Islands II | Hard | 并查集 Union-Find 动态加岛 | ⭐ 进阶 |
| ✅ | 773 | Sliding Puzzle | Hard | BFS 状态压缩 + 方向交换 | ⭐ 进阶 |
| ✅ | Lint-573 | Build Post Office II | Hard | 多源 BFS 求最近距离和 | ⭐ 进阶 |
| ✅ | Lint-598 | Zombie in Matrix | Medium | 多源 BFS 扩散 | ⭐ 高频 |
| ✅ | Lint-611 | Knight Shortest Path | Medium | BFS 图最短路（骑士走法） | ⭐ 高频 |
| ✅ | Lint-794 | Sliding Puzzle II | Hard | BFS 双向搜索优化 | ⭐ 进阶 |

### BFS / 图

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 133 | Clone Graph | Medium | BFS/DFS 拷贝节点与邻居 | ⭐ 高频必备 |
| ✅ | 127 | Word Ladder | Medium | BFS 逐字母变换，找最短路径长度 | ⭐ 高频必备 |
| ✅ | 261 | Graph Valid Tree | Medium | 检查边数 = n-1 且连通（并查集/DFS） | ⭐ 高频 |
| ✅ | 841 | Keys and Rooms | Medium | DFS/BFS 遍历可达房间 | ⭐ 高频 |
| ✅ | 323 | Number of Connected Components | Medium | 并查集/DFS/BFS 统计连通分量 | ⭐ 高频 |
| ✅ | 1306 | Jump Game III | Medium | BFS/DFS 从起点跳跃搜索 | ⭐ 高频 |
| ✅ | Lint-531 | Six Degree | Medium | BFS 找最短距离 | ⭐ 高频 |
| ✅ | Lint-618 | Search Graph Nodes | Medium | BFS/DFS 查找目标值 | ⭐ 高频 |
| ✅ | Lint-624 | Remove Substrings | Medium | BFS/DFS 状态压缩状态搜索 | ⭐ 进阶 |

---

## 五、二叉树 + 递归

### 前中后序遍历

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 94 | Binary Tree Inorder Traversal | Easy | 递归/栈模拟/颜色标记法 | ⭐ 高频必备 |
| ✅ | 144 | Binary Tree Preorder Traversal | Easy | 递归/栈模拟 | ⭐ 高频必备 |
| ✅ | 145 | Binary Tree Postorder Traversal | Easy | 递归/栈 + 反转（左右根） | ⭐ 高频必备 |

### 反向复原二叉树

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 105 | Construct Binary Tree from Preorder and Inorder | Medium | 前序定根 + 中序分左右递归 | 🔥 高频必备 |
| ✅ | 106 | Construct Binary Tree from Inorder and Postorder | Medium | 后序定根 + 中序分左右递归 | 🔥 高频必备 |
| ✅ | 889 | Construct Binary Tree from Preorder and Postorder | Medium | 前序定根 + 后序分左右递归 | ⭐ 进阶 |

### Iterator 相关

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 173 | Binary Search Tree Iterator | Medium | 栈模拟中序遍历，next 时弹出并压入右子树 | 🔥 高频必备 |
| ✅ | 230 | Kth Smallest Element in a BST | Medium | 中序遍历 / 分治 | 🔥 高频必备 |
| ✅ | 285 | Inorder Successor in BST | Medium | 中序后继：若右子树则最左，否则向上追溯 | 🔥 进阶 |
| ✅ | 270 | Closest Binary Search Tree Value | Easy | 遍历 BST 比较更新 closest | ⭐ 高频 |
| ✅ | 272 | Closest Binary Search Tree Value II | Hard | 中序 + 滑动窗口/双队列 | ⭐ 高频 |
| ✅ | 510 | Inorder Successor in BST II | Medium | 带 parent 指针，直接找后继 | ⭐ 高频 |
| ✅ | Lint-915 | Inorder Predecessor in BST | Medium | 对称于后继的思路 | ⭐ 高频 |

### 判断树的形态

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 98 | Validate Binary Search Tree | Medium | 递归传递 min/max 上下界 | 🔥 高频必备 |
| ✅ | 100 | Same Tree | Easy | 递归比较左右子树 | ⭐ 高频必备 |
| ✅ | 101 | Symmetric Tree | Easy | 递归镜像比较两个节点 | ⭐ 高频必备 |
| ✅ | 110 | Balanced Binary Tree | Easy | 后序遍历 + 高度差 ≤ 1 | 🔥 高频必备 |

### 子树相关

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 111 | Minimum Depth of Binary Tree | Easy | 递归，空节点为 0，左右取最小 + 1 | ⭐ 高频 |
| ✅ | 104 | Maximum Depth of Binary Tree | Easy | 递归，max(left,right) + 1 | ⭐ 高频必备 |
| ✅ | 333 | Largest BST Subtree | Medium | 后序遍历返回 (min,max,size) 判断 BST | ⭐ 进阶 |
| ✅ | Lint-596 | Minimum Subtree | Medium | 后序遍历求和取最小 | ⭐ 高频 |
| ✅ | Lint-597 | Subtree with Maximum Average | Medium | 后序遍历算均值取最大 | ⭐ 高频 |

### 路径相关

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 112 | Path Sum | Easy | 递归减 target，到叶子判断 | ⭐ 高频必备 |
| ✅ | 113 | Path Sum II | Medium | 递归回溯记录路径 | 🔥 高频必备 |
| ✅ | 124 | Binary Tree Maximum Path Sum | Hard | 后序遍历，维护全局最大值 | 🔥 高频挑战 |
| ✅ | Lint-475 | Binary Tree Maximum Path Sum II | Medium | 从上到下的单一路径 | ⭐ 高频 |
| ✅ | 298 | Binary Tree Longest Consecutive Sequence | Medium | 递归传递 parent 值和当前长度 | ⭐ 高频 |
| ✅ | 549 | Binary Tree Longest Consecutive Sequence II | Medium | 可递增递减，双方向 | ⭐ 高频 |
| ✅ | Lint-619 | Binary Tree Longest Consecutive Sequence III | Medium | N 叉树版本 | ⭐ 高频 |

### 最近公共祖先 LCA

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 236 | Lowest Common Ancestor of a Binary Tree | Medium | 后序遍历，左右各找 p/q，谁先返回谁就是 LCA | 🔥 高频必备 |
| ✅ | Lint-474 | Lowest Common Ancestor II | Medium | 带 parent 指针，先拉到同层再同步上移 | ⭐ 高频 |
| ✅ | Lint-578 | Lowest Common Ancestor III | Medium | 需要确认 p/q 都在树中 | ⭐ 高频 |

### 其他

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 199 | Binary Tree Right Side View | Medium | BFS 取每层最后一个 / DFS 先右后左 | ⭐ 高频 |
| ✅ | 513 | Find Bottom Left Tree Value | Medium | BFS 从左到右取最后一层首个 | ⭐ 高频 |
| ✅ | 331 | Verify Preorder Serialization of a Binary Tree | Medium | 利用 slot 计数（1 节点消耗 1 slot + 产生 2 slot） | ⭐ 高频 |
| ✅ | 449 | Serialize and Deserialize BST | Medium | 利用 BST 性质前序即可复原 | ⭐ 高频 |
| ✅ | 114 | Flatten Binary Tree to Linked List | Medium | 后序遍历/前驱连接法 | 🔥 高频必备 |

---

## 六、深度优先搜索 (DFS)

### DFS 排列组合

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 39 | Combination Sum | Medium | 排序 + 回溯（可重复选同一元素） | 🔥 高频必备 |
| ✅ | 40 | Combination Sum II | Medium | 排序 + 回溯 + 同层去重 | 🔥 高频必备 |
| ✅ | 46 | Permutations | Medium | 回溯 + visited 数组 | ⭐ 高频必备 |
| ✅ | 47 | Permutations II | Medium | 回溯 + 同层剪枝（排序后 i > 0 && nums[i]==nums[i-1] && !visited[i-1]） | ⭐ 高频必备 |
| ✅ | 77 | Combinations | Medium | 回溯 + startIndex | 🔥 高频必备 |
| ✅ | 78 | Subsets | Medium | 回溯选或不选 / 增量构造 | 🔥 高频必备 |
| ✅ | 90 | Subsets II | Medium | 排序 + 同层去重 | 🔥 高频必备 |
| ✅ | 17 | Letter Combinations of a Phone Number | Medium | 数字到字母映射 + 回溯 | 🔥 高频必备 |
| ✅ | 22 | Generate Parentheses | Medium | 回溯，open ≤ n, close ≤ open | 🔥 高频必备 |
| ✅ | 51 | N-Queens | Hard | 行回溯 + 列/对角冲突检查 | 🔥 挑战 |
| ✅ | 254 | Factor Combinations | Medium | 回溯分解因子（从 2 到 sqrt(n)） | ⭐ 进阶 |
| ✅ | 301 | Remove Invalid Parentheses | Hard | BFS/DFS 校验括号合法性 | 🔥 挑战 |
| ✅ | 491 | Increasing Subsequences | Medium | 回溯 + 同层去重（set） | ⭐ 高频 |
| ✅ | 37 | Sudoku Solver | Hard | 回溯 + 行列宫格合法性检查 | 🔥 挑战 |
| ✅ | 52 | N-Queens II | Medium | 回溯计数，同 N-Queens | ⭐ 进阶 |
| ✅ | 93 | Restore IP Addresses | Medium | 回溯分段 + 合法性检查 | 🔥 高频必备 |
| ✅ | 131 | Palindrome Partitioning | Medium | 回溯逐个切分 + 回文检查 | ⭐ 高频 |
| ✅ | Lint-10 | String Permutation II | Medium | 同 Permutations II（字符去重） | ⭐ 高频 |
| ✅ | Lint-570 | Find the Missing Number II | Medium | 回溯枚举数字 | ⭐ 高频 |
| ✅ | Lint-680 | Split String | Medium | 回溯切分 1-2 字符 | ⭐ 高频 |

### DFS 二叉树

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 113 | Path Sum II | Medium | 回溯记录路径到叶子 | 🔥 高频必备 |
| ✅ | 257 | Binary Tree Paths | Easy | DFS 拼接路径 | ⭐ 高频必备 |
| ✅ | Lint-246 | Binary Tree Path Sum II | Medium | 任意节点到任意节点，回溯 | ⭐ 高频 |
| ✅ | Lint-376 | Binary Tree Path Sum | Medium | 从根到叶子，回溯 | ⭐ 高频 |
| ✅ | Lint-472 | Binary Tree Path Sum III | Medium | 可拐弯回溯（N 叉树版） | ⭐ 高频 |

### DFS 图

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 140 | Word Break II | Hard | DFS + 记忆化搜索 | 🔥 高频挑战 |
| ✅ | 494 | Target Sum | Medium | DFS 回溯 / DP 转化为 Subset Sum | 🔥 高频必备 |
| ✅ | 1192 | Critical Connections in a Network | Hard | Tarjan（低链接值 low[] + dfn[]） | 🔥 挑战 |
| ✅ | 126 | Word Ladder II | Hard | BFS 建图 + DFS 找所有最短路径 | 🔥 高频挑战 |
| ✅ | 290 | Word Pattern | Easy | 双射映射检查 | ⭐ 高频必备 |
| ✅ | 291 | Word Pattern II | Medium | 回溯 + 双射映射 | ⭐ 高频 |

---

## 七、数据结构

### Array & Matrix

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 442 | Find All Duplicates in an Array | Medium | 值对应下标取反标记 | 🔥 高频必备 |
| ✅ | 48 | Rotate Image | Medium | 先转置再逐行反转 | 🔥 高频必备 |
| ✅ | 54 | Spiral Matrix | Medium | 四边界遍历 | ⭐ 高频 |
| ✅ | 73 | Set Matrix Zeroes | Medium | 用首行首列做标记 | 🔥 高频必备 |
| ✅ | 289 | Game of Life | Medium | 复合状态（如 2 表示 1→0）原地更新 | 🔥 高频 |

### String

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 6 | ZigZag Conversion | Medium | 按行模拟 | ⭐ 高频 |
| ✅ | 13 | Roman to Integer | Easy | 逆序，当前 < 上一个则减 | ⭐ 高频必备 |
| ✅ | 14 | Longest Common Prefix | Easy | 纵向/横向逐个字符比较 | ⭐ 高频必备 |
| ✅ | 68 | Text Justification | Hard | 贪心每行分配，均匀加空格 | 🔥 挑战 |
| ✅ | 443 | String Compression | Medium | 快慢指针原地压缩 | ⭐ 高频 |

### Linked List

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 2 | Add Two Numbers | Medium | 虚拟头 + 遍历两链表逐位加和进位 | 🔥 高频必备 |
| ✅ | 21 | Merge Two Sorted Lists | Easy | dummy 头 + 归并 | 🔥 高频必备 |
| ✅ | 25 | Reverse Nodes in k-Group | Hard | 递归/迭代每组反转 + 连接 | 🔥 挑战 |
| ✅ | 82 | Remove Duplicates from Sorted List II | Medium | 快慢指针跳过全部重复节点 | ⭐ 高频 |
| ✅ | 83 | Remove Duplicates from Sorted List | Easy | 遍历跳过重复 | ⭐ 高频 |
| ✅ | 86 | Partition List | Medium | 拆两个链表再合并 | ⭐ 高频 |
| ✅ | 92 | Reverse Linked List II | Medium | 四指针穿针引线反转 m-n | ⭐ 高频 |
| ✅ | 138 | Copy List with Random Pointer | Medium | 原地复制 O(1) 空间：A→A'→B→B'，再拆分 | 🔥 高频必备 |
| ✅ | 141 | Linked List Cycle | Easy | 快慢指针 | ⭐ 高频必备 |
| ✅ | 148 | Sort List | Medium | 归并排序（快慢找中点 + 合并） | 🔥 高频必备 |
| ✅ | 160 | Intersection of Two Linked Lists | Easy | 双指针交替走 | 🔥 高频必备 |
| ✅ | 203 | Remove Linked List Elements | Easy | dummy 头 + 遍历删除 | ⭐ 高频 |
| ✅ | 206 | Reverse Linked List | Easy | 迭代（prev/curr/next） / 递归 | ⭐ 高频必备 |
| ✅ | 234 | Palindrome Linked List | Easy | 快慢找中点 + 反转后半比较 | 🔥 高频 |
| ✅ | 328 | Odd Even Linked List | Medium | 奇偶指针分离再连接 | ⭐ 高频 |
| ✅ | 445 | Add Two Numbers II | Medium | 栈存两链表再逐位加 | ⭐ 高频 |
| ✅ | 142 | Linked List Cycle II | Medium | 快慢相遇 + 从 head 再走一步 | 🔥 高频必备 |
| ✅ | 876 | Middle of the Linked List | Easy | 快慢指针 | ⭐ 高频 |

### Hash

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 706 | Design HashMap | Easy | 数组 + 链表/开放地址 | ⭐ 高频 |
| ✅ | 49 | Group Anagrams | Medium | 排序后字符串做 key | 🔥 高频必备 |
| ✅ | 128 | Longest Consecutive Sequence | Medium | 哈希集找序列起点，逐次扩展 | 🔥 高频必备 |
| ✅ | 560 | Subarray Sum Equals K | Medium | 前缀和 + 哈希表 | 🔥 高频必备 |
| ✅ | 953 | Verifying an Alien Dictionary | Medium | 按字典序映射比较相邻单词 | ⭐ 高频 |
| ✅ | 290 | Word Pattern | Easy | 双映射 | ⭐ 高频必备 |

### Heap

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 23 | Merge k Sorted Lists | Hard | 优先队列放链表头，依次弹出 | 🔥 高频必备 |
| ✅ | 295 | Find Median from Data Stream | Hard | 大顶堆 + 小顶堆 | 🚀 高频挑战 |
| ✅ | 347 | Top K Frequent Elements | Medium | 哈希计数 + 堆/桶排序 | ⭐ 高频必备 |
| ✅ | 692 | Top K Frequent Words | Medium | 哈希计数 + 堆（字典序比较） | ⭐ 高频必备 |
| ✅ | 767 | Reorganize String | Medium | 最大堆按频次放字符，间隔 1 | ⭐ 高频 |
| ✅ | 973 | K Closest Points to Origin | Medium | 堆 / QuickSelect | ⭐ 高频必备 |
| ✅ | 480 | Sliding Window Median | Hard | 双堆 + 延迟删除 | 🚀 高频挑战 |
| ✅ | 703 | Kth Largest Element | Easy | 小顶堆维护 top k | ⭐ 高频基础 |

### Stack

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 155 | Min Stack | Easy | 辅助栈 / 差值法 | ⭐ 高频基础 |
| ✅ | 20 | Valid Parentheses | Easy | 左括号入栈，右括号匹配弹出 | 🔥 高频必备 |
| ✅ | 85 | Maximal Rectangle | Hard | 逐行累加高度 + 单调栈求最大矩形 | 🚀 高频挑战 |
| ✅ | 224 | Basic Calculator | Hard | 双栈（操作数+操作符）/ 展开符号法 | 🚀 高频挑战 |
| ✅ | 227 | Basic Calculator II | Medium | 栈存中间结果，遇到 +- 入栈，遇到 */ 计算后入栈 | ⭐ 高频必备 |
| ✅ | 394 | Decode String | Medium | 双栈（数字 + 字符串），遇到 ] 出栈构造 | ⭐ 高频必备 |
| ✅ | 1249 | Minimum Remove to Make Valid Parentheses | Medium | 栈记录多余括号下标 | ⭐ 高频 |

### Monotonic Stack

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 300 | Longest Increasing Subsequence | Medium | 耐心排序（tails 数组 + 二分） | 🔥 高频必备 |
| ✅ | 84 | Largest Rectangle in Histogram | Hard | 单调递增栈，遇到矮柱子出栈算面积 | 🔥 高频经典 |
| ✅ | 239 | Sliding Window Maximum | Hard | 单调队列（双端队列存下标） | 🔥 高频必备 |
| ✅ | 1019 | Next Greater Node In Linked List | Medium | 单调栈 + 链表转数组 | ⭐ 高频 |

### Trie

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 208 | Implement Trie (Prefix Tree) | Medium | 字典树节点 isEnd + children[26] | 🔥 高频必备 |
| ✅ | 211 | Design Add and Search Words Data Structure | Medium | Trie + DFS 搜索（含 . 通配符） | ⭐ 高频必备 |
| ✅ | 1032 | Stream of Characters | Hard | 反转建 Trie + 后缀流匹配 | 🚀 Hard 高频 |

### Union Find

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 200 | Number of Islands | Medium | 并查集合并相邻 1 | 🔥 高频必备 |
| ✅ | 305 | Number of Islands II | Hard | 动态 Union-Find | 🚀 高频挑战 |
| ✅ | 323 | Number of Connected Components | Medium | 并查集统计连通分量 | ⭐ 高频 |

### Sweep Line

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | Lint-391 | Number of Airplanes in the Sky | Medium | 事件排序扫描 | ⭐ 高频 |
| ✅ | 252 | Meeting Rooms | Easy | 排序检查重叠 | ⭐ 高频基础 |
| ✅ | 253 | Meeting Rooms II | Hard | 扫描线/最小堆 | 🔥 高频必备 |

### Binary Index Tree & Segment Tree

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 307 | Range Sum Query - Mutable | Medium | BIT / 线段树 | ⭐ 高频 |
| ✅ | 327 | Count of Range Sum | Hard | 前缀和 + BIT/归并 | 🚀 高频难题 |
| ✅ | 715 | Range Module | Hard | 有序集合维护区间 | 🚀 Hard |
| ✅ | 315 | Count of Smaller Numbers After Self | Hard | BIT / 归并排序求逆序 | 🔥 高频必备 |
| ✅ | 493 | Reverse Pairs | Hard | BIT / 归并排序 | 🚀 高频难题 |

### Complex Data Structure

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 146 | LRU Cache | Medium | 哈希表 + 双向链表 | 🔥 高频必备 |
| ✅ | 460 | LFU Cache | Hard | 哈希表 + 频次链表组 | 🚀 高频挑战 |
| ✅ | 211 | Design Add and Search Words | Medium | Trie + DFS | ⭐ 高频 |
| ✅ | 380 | Insert Delete GetRandom O(1) | Medium | 哈希表 + 数组，删除时与末尾交换 | ⭐ 高频必备 |
| ✅ | 528 | Random Pick with Weight | Medium | 前缀和 + 二分 | ⭐ 高频 |
| ✅ | 588 | Design In-Memory File System | Hard | Trie 结构 + 文件系统操作 | 🚀 系统设计 |
| ✅ | 981 | Time Based Key-Value Store | Medium | HashMap<String, TreeMap<timestamp, value>> | ⭐ 高频必备 |
| ✅ | 1396 | Design Underground System | Medium | 两个哈希表（checkin + 总时间统计） | ⭐ 系统设计 |

---

## 八、动态规划 (DP)

### Backpack 系列

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | Lint-92 | Backpack | Medium | 01 背包——dp[j] = max(dp[j], dp[j-A[i]]+A[i]) | ⭐ 高频必备 |
| ✅ | Lint-125 | Backpack II | Medium | 01 背包——dp[j] = max(dp[j], dp[j-w[i]]+v[i]) | ⭐ 高频必备 |
| ✅ | Lint-440 | Backpack III | Medium | 完全背包——内层正序 | 📈 进阶 |
| ✅ | Lint-562 | Backpack IV | Medium | 完全背包计数 | 📈 进阶 |
| ✅ | Lint-563 | Backpack V | Medium | 01 背包计数 | 📈 进阶 |
| ✅ | Lint-564 | Backpack VI | Medium | 组合总和 IV，顺序有关（排列）（先 target 再 nums） | 💎 挑战 |
| ✅ | Lint-971 | Surplus Value Backpack | Medium | 扩展背包 | 💎 挑战 |
| ✅ | 474 | Ones and Zeroes | Medium | 二维 01 背包（0 和 1 两个容量） | 📈 进阶 |

### 单序列

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 139 | Word Break | Medium | dp[i] = dp[j] && dict.contains(s[j:i]) | ⭐ 高频必备 |
| ✅ | 121 | Best Time to Buy and Sell Stock | Easy | 记录历史最低价，每天算最大利润 | ⭐ 高频必备 |
| ✅ | 122 | Best Time to Buy and Sell Stock II | Medium | 贪心——累加所有正差价 | ⭐ 高频必备 |
| ✅ | 123 | Best Time to Buy and Sell Stock III | Hard | DP（4 状态/前后缀分解） | 📈 进阶 |
| ✅ | 188 | Best Time to Buy and Sell Stock IV | Hard | DP（k 次交易，优化为 2*k 状态） | 💎 挑战 |
| ✅ | 256 | Paint House | Medium | dp[i][c] = cost[i][c] + min(dp[i-1][其他两色]) | 📈 进阶 |
| ✅ | 265 | Paint House II | Hard | dp[i][c] = cost[i][c] + min(dp[i-1][c']) 找最小两个 | 💎 挑战 |
| ✅ | Lint-843 | Digital Flip | Medium | dp[i][0/1] 最少翻转次数 | 📈 进阶 |

### 双序列

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 10 | Regular Expression Matching | Hard | dp[i][j] 匹配 s[:i] 和 p[:j]，处理 * 匹配零或多个 | 💎 挑战 |
| ✅ | 44 | Wildcard Matching | Hard | dp[i][j]，* 匹配零到多个，? 匹配单个 | 💎 挑战 |
| ✅ | 72 | Edit Distance | Medium | dp[i][j] = min(insert, delete, replace) | 💎 挑战 |
| ✅ | 97 | Interleaving String | Medium | dp[i][j] = (dp[i-1][j] && s3[i+j-1]==s1[i-1]) || (dp[i][j-1] && s3[i+j-1]==s2[j-1]) | 📈 进阶 |
| ✅ | 115 | Distinct Subsequences | Hard | dp[i][j] = dp[i-1][j] + (s[i-1]==t[j-1] ? dp[i-1][j-1] : 0) | 💎 挑战 |
| ✅ | 1143 | Longest Common Subsequence | Medium | dp[i][j] = dp[i-1][j-1]+1 if equal else max(dp[i-1][j],dp[i][j-1]) | ⭐ 高频必备 |

### 区间

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 312 | Burst Balloons | Hard | dp[i][j] = max(dp[i][k-1]+dp[k+1][j] + nums[i-1]*nums[k]*nums[j+1]) | 💎 挑战 |
| ✅ | 516 | Longest Palindromic Subsequence | Medium | dp[i][j] = dp[i+1][j-1] + (s[i]==s[j]) else max(dp[i+1][j], dp[i][j-1]) | 📈 进阶 |
| ✅ | 87 | Scramble String | Hard | dp[i][j][k] 子串 s1[i:i+k] 能否 scramble 成 s2[j:j+k] | 💎 挑战 |

### 矩阵

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 62 | Unique Paths | Medium | dp[i][j] = dp[i-1][j] + dp[i][j-1] | ⭐ 高频必备 |
| ✅ | 63 | Unique Paths II | Medium | 有障碍物 dp[i][j] = 0 | 📈 进阶 |
| ✅ | 64 | Minimum Path Sum | Medium | dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]) | ⭐ 高频必备 |
| ✅ | 85 | Maximal Rectangle | Hard | 逐行算高度 + 柱状图最大矩形 | 💎 挑战 |
| ✅ | 221 | Maximal Square | Medium | dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) 取边长 | 📈 进阶 |
| ✅ | 361 | Bomb Enemy | Medium | 四方向 DP 累积可消灭敌人 | 📈 进阶 |

### 其他

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 91 | Decode Ways | Medium | dp[i] = dp[i-1] + dp[i-2]（需校验两位是否 ≤ 26） | ⭐ 高频必备 |
| ✅ | Lint-394 | Coins in a Line | Medium | 博弈 DP，dp[i] = !dp[i-1] || !dp[i-2] | 📈 进阶 |
| ✅ | 132 | Palindrome Partitioning II | Hard | dp[i] = min(dp[j] + 1) if s[j+1:i] 回文 | 📈 进阶 |
| ✅ | 279 | Perfect Squares | Medium | dp[i] = min(dp[i-j*j] + 1) | ⭐ 高频必备 |
| ✅ | 639 | Decode Ways II | Hard | 考虑 \* 通配符情况分类讨论 | 💎 挑战 |
| ✅ | Lint-395 | Coins in a Line II | Medium | 博弈 DP，dp[i] = sum - min(dp[i+1], dp[i+2]) | 📈 进阶 |
| ✅ | Lint-396 | Coins in a Line III | Medium | 区间博弈 dp[i][j] | 📈 进阶 |

### 贪心

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 55 | Jump Game | Medium | 维护最远可达位置 | ⭐ 高频必备 |
| ✅ | 45 | Jump Game II | Medium | BFS 思想/贪心选每跳最远 | 📈 进阶 |
| ✅ | 763 | Partition Labels | Medium | 记录每个字母最后出现位置，遍历分段 | ⭐ 高频必备 |

---

## 九、补充

### 排序类 (Sort)

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 179 | Largest Number | Medium | 自定义排序比较 a+b > b+a | 📈 进阶 |
| ✅ | 215 | Kth Largest Element | Medium | QuickSelect / 堆 | ⭐ 高频必备 |
| ✅ | 4 | Median of Two Sorted Arrays | Hard | 二分分割线 | 💎 挑战 |

### Queue

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 225 | Implement Stack using Queues | Easy | 双队列/单队列 | 📈 进阶 |
| ✅ | 281 | Zigzag Iterator | Medium | 队列存各迭代器 | 📈 进阶 |
| ✅ | 1429 | First Unique Number | Medium | 队列 + 哈希集 | 📈 进阶 |
| ✅ | 362 | Design Hit Counter | Medium | 队列/时间窗口计数 | 📈 进阶 |

### Stack（补充）

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 716 | Max Stack | Medium | 双栈/双向链表 + TreeMap | 📈 进阶 |
| ✅ | 232 | Implement Queue using Stacks | Easy | 双栈倒腾 | 📈 进阶 |
| ✅ | 150 | Evaluate Reverse Polish Notation | Medium | 遇到操作符弹出两个运算再入栈 | ⭐ 高频必备 |
| ✅ | 1472 | Design Browser History | Medium | 双栈/数组+指针 | 📈 进阶 |
| ✅ | 1209 | Remove All Adjacent Duplicates in String II | Medium | 栈存 (字符,连续计数) | 📈 进阶 |
| ✅ | 735 | Asteroid Collision | Medium | 栈模拟碰撞 | 📈 进阶 |

### Hashmap / Hashset

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 350 | Intersection of Two Arrays II | Easy | 哈希表计数 | 🔥 热度题 |
| ✅ | 299 | Bulls and Cows | Medium | 哈希表统计位置/数字匹配 | 📈 进阶 |
| ✅ | 348 | Design Tic-Tac-Toe | Medium | 行列对角计数 | 📈 进阶 |

### Heap / Priority Queue

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 264 | Ugly Number II | Medium | 三指针 DP / 最小堆 | 📈 进阶 |
| ✅ | 1086 | High Five | Medium | 小顶堆维护每人 top 5 | 📈 进阶 |
| ✅ | 88 | Merge Sorted Array | Easy | 从后往前归并 | ⭐ 高频必备 |
| ✅ | 378 | Kth Smallest Element in a Sorted Matrix | Medium | 堆 / 二分答案 | 📈 进阶 |
| ✅ | 1438 | Longest Continuous Subarray With Absolute Diff ≤ Limit | Hard | 双端队列维护窗口最大最小值 | 💎 挑战 |
| ✅ | 895 | Maximum Frequency Stack | Hard | 每组频次一个栈 + 频率哈希表 | 💎 挑战 |

### 二分法（补充）

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 34 | Find First and Last Position | Medium | 两次二分 | ⭐ 高频必备 |
| ✅ | 33 | Search in Rotated Sorted Array | Medium | 条件二分 | ⭐ 高频必备 |
| ✅ | 1095 | Find in Mountain Array | Hard | 三次二分（找山顶 → 左半 → 右半） | 📈 进阶 |
| ✅ | 162 | Find Peak Element | Medium | 二分比较 | 📈 进阶 |
| ✅ | 278 | First Bad Version | Easy | 二分找第一个 true | ⭐ 高频必备 |
| ✅ | 74 | Search a 2D Matrix | Medium | 二维转一维二分 | ⭐ 高频必备 |
| ✅ | 240 | Search a 2D Matrix II | Medium | 右上角 Z 字形搜索 | 📈 进阶 |
| ✅ | 69 | Sqrt(x) | Easy | 二分 | 📈 进阶 |
| ✅ | 540 | Single Element in a Sorted Array | Medium | 奇偶性二分 | 📈 进阶 |
| ✅ | 644 | Maximum Average Subarray II | Hard | 二分平均值 + check 用前缀和 | 💎 挑战 |
| ✅ | 1300 | Sum of Mutated Array Closest to Target | Medium | 二分 value + check 和 | 📈 进阶 |
| ✅ | 1060 | Missing Element in Sorted Array | Medium | 二分缺失数 | 📈 进阶 |
| ✅ | 1062 | Longest Repeating Substring | Medium | 二分长度 + 滚动哈希 | 💎 挑战 |
| ✅ | 1891 | Cutting Ribbons | Medium | 二分长度 + check 段数 | 📈 进阶 |

### BFS（补充）

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 314 | Binary Tree Vertical Order Traversal | Medium | BFS + (col → list) | ⭐ Premium |
| ✅ | 130 | Surrounded Regions | Medium | 边界 DFS/BFS 标记未包围 O | ⭐ 高频 |
| ✅ | 752 | Open the Lock | Medium | BFS 逐位转动 | ⭐ 高频 |
| ✅ | 815 | Bus Routes | Hard | 站点-线路建图 BFS | 🚀 Hard |
| ✅ | 1091 | Shortest Path in Binary Matrix | Medium | BFS 8 方向 | ⭐ 高频 |
| ✅ | 1293 | Shortest Path in a Grid with Obstacles Elimination | Hard | BFS + (r,c,k) 状态 | 🚀 Hard |
| ✅ | 310 | Minimum Height Trees | Medium | 拓扑消叶子 | ⭐ 高频 |
| ✅ | 366 | Find Leaves of Binary Tree | Medium | DFS 按高度收集 | ⭐ Premium |

### DFS - 基于树

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 543 | Diameter of Binary Tree | Easy | 后序求左右高度，取 max(left+right) | ⭐ 高频必备 |
| ✅ | 226 | Invert Binary Tree | Easy | 递归交换左右子树 | ⭐ 高频基础 |
| ✅ | 951 | Flip Equivalent Binary Trees | Medium | 递归检查翻转/不翻转 | ⭐ Premium |
| ✅ | 987 | Vertical Order Traversal of a Binary Tree | Hard | 列序 + 行序 + 值序三级排序 | 🚀 Hard |
| ✅ | 1485 | Clone Binary Tree With Random Pointer | Medium | DFS + 哈希表 | ⭐ Premium |
| ✅ | 572 | Subtree of Another Tree | Easy | 对每个节点 checkSame | ⭐ 高频 |
| ✅ | 863 | All Nodes Distance K in Binary Tree | Medium | 建父亲映射 + BFS | ⭐ 高频 |
| ✅ | 1110 | Delete Nodes And Return Forest | Medium | 后序遍历 + 标记删除收集 | ⭐ 高频 |

### DFS - 基于图

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 341 | Flatten Nested List Iterator | Medium | DFS 展开 / 栈迭代 | ⭐ 高频 |
| ✅ | 586 | Score of Parentheses | Medium | 栈 / DFS 分治 | ⭐ Premium |
| ✅ | 212 | Word Search II | Hard | Trie + DFS 剪枝 | 🚀 Hard |
| ✅ | 1087 | Brace Expansion | Medium | 回溯展开 | ⭐ Premium |
| ✅ | 399 | Evaluate Division | Medium | 图 DFS 求边权积 | ⭐ 高频 |
| ✅ | 1274 | Number of Ships in a Rectangle | Hard | 四分递归 | ⭐ Premium |
| ✅ | 1376 | Time Needed to Inform All Employees | Medium | DFS 最长时间 | ⭐ 高频 |
| ✅ | 694 | Number of Distinct Islands | Medium | DFS 序列化形状 | ⭐ Premium |

### DFS - 排列组合

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 698 | Partition to K Equal Sum Subsets | Hard | 回溯 + 剪枝 | 🚀 Hard |
| ✅ | 526 | Beautiful Arrangement | Medium | 回溯 visited | ⭐ Medium |

### DFS + 记忆化

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 377 | Combination Sum IV | Medium | DP / 记忆化搜索 | ⭐ 高频 |
| ✅ | 1235 | Maximum Profit in Job Scheduling | Hard | 排序 + 二分找前驱 + DP | 🚀 Hard |
| ✅ | 1335 | Minimum Difficulty of a Job Schedule | Hard | DP[i][d] = min(DP[j][d-1] + max(jobs[j:i])) | ⭐ Premium |
| ✅ | 1216 | Valid Palindrome III | Medium | 区间 DP / 记忆化 | ⭐ Premium |
| ✅ | 472 | Concatenated Words | Medium | 排序 + 记忆化搜索 | ⭐ 高频 |
| ✅ | 403 | Frog Jump | Hard | 记忆化 DFS / DP | ⭐ 高频 |
| ✅ | 329 | Longest Increasing Path in a Matrix | Hard | DFS + 记忆化 | 🔥 高频核心 |

### 前缀和 (Prefix Sum)

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 1423 | Maximum Points You Can Obtain from Cards | Medium | 滑动窗口求中间 n-k 最小 | ⭐ 高频 |
| ✅ | 1031 | Maximum Sum of Two Non-Overlapping Subarrays | Medium | 左右 DP 前缀最大和 + 枚举分割 | ⭐ Medium |
| ✅ | 523 | Continuous Subarray Sum | Medium | 前缀和模 k 相同则中间区间和整除 k | 🔥 高频必备 |
| ✅ | 304 | Range Sum Query 2D - Immutable | Medium | 二维前缀和 | ⭐ 高频 |

### 并查集 (Union Find)

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 721 | Accounts Merge | Medium | 并查集合并同名邮箱 | ⭐ 高频 |
| ✅ | 547 | Number of Provinces | Easy | 并查集/DFS 连通分量 | ⭐ 高频基础 |
| ✅ | 737 | Sentence Similarity II | Medium | 并查集合并同义词组 | ⭐ Premium |

### 字典树 (Trie)

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 1268 | Search Suggestions System | Medium | Trie / 排序 + 前缀二分 | ⭐ 高频 |

### 单调栈 / 单调队列

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 907 | Sum of Subarray Minimums | Medium | 单调栈左右找边界，每个元素作为最小值的贡献 | ⭐ 高频 |
| ✅ | 739 | Daily Temperatures | Medium | 单调递减栈，找到第一个更高温度就出栈算天数差 | 🔥 高频核心 |
| ✅ | 901 | Online Stock Span | Medium | 单调递减栈，栈存 (价,跨度) | ⭐ 高频 |
| ✅ | 503 | Next Greater Element II | Medium | 循环数组 + 单调栈（遍历 2 倍数组） | ⭐ 高频 |

### 扫描线 (Sweep Line)

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 218 | The Skyline Problem | Hard | 扫描线 + 最大堆 | 🚀 Hard |
| ✅ | 759 | Employee Free Time | Medium | 合并区间取补集 | ⭐ Premium |

### TreeMap

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 729 | My Calendar I | Medium | TreeMap 找前驱后继检查重叠 | ⭐ 高频 |
| ✅ | 846 | Hand of Straights | Medium | TreeMap 计数 + 贪心分组 | ⭐ 高频 |

### DP（补充）

| 完成状态 | 题号 | 题目名称 | 难度 | 基本思路 | 备注 |
|:---:|:---:|:---|:---:|---|---|
| ✅ | 674 | Longest Continuous Increasing Subsequence | Medium | 一次遍历，递增就 +1，否则重置 | ⭐ 高频 |
| ✅ | 70 | Climbing Stairs | Easy | dp[i] = dp[i-1] + dp[i-2] | ⭐ 高频基础 |
| ✅ | 368 | Largest Divisible Subset | Medium | 排序 + LIS 思想 dp + 追溯路径 | ⭐ 高频 |
| ✅ | 354 | Russian Doll Envelopes | Hard | 排序（宽升、高降）+ LIS 二分 | 🚀 Hard |
| ✅ | 174 | Dungeon Game | Hard | 从右下往左上倒推 | 🚀 Hard |
| ✅ | 712 | Minimum ASCII Delete Sum for Two Strings | Medium | 双序列 DP，cost = 删减字符的 ASCII 和 | ⭐ Medium |
| ✅ | 1277 | Count Square Submatrices with All Ones | Medium | dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) 统计 | ⭐ 高频 |
| ✅ | 198 | House Robber | Medium | dp[i] = max(dp[i-1], dp[i-2] + nums[i]) | 🔥 高频必备 |
| ✅ | 213 | House Robber II | Medium | 环状，分两种情况（去头/去尾） | 🔥 高频 |
| ✅ | 740 | Delete and Earn | Medium | 转化为 House Robber（值域桶+相邻不可取） | ⭐ Medium |
| ✅ | 1140 | Stone Game II | Medium | 博弈 DP | ⭐ Medium |
| ✅ | 322 | Coin Change | Medium | dp[i] = min(dp[i-coin] + 1) | 🔥 高频核心 |
| ✅ | 518 | Coin Change II | Medium | dp[j] += dp[j-coin] 完全背包计数 | 🔥 高频 |
| ✅ | 1048 | Longest String Chain | Medium | 排序 + 逐个去字符在 dp 中查找 | ⭐ 高频 |
| ✅ | 32 | Longest Valid Parentheses | Hard | 栈/DP（遇到 ')' 找匹配位置 + 前导长度） | 🚀 Hard |
| ✅ | 1043 | Partition Array for Maximum Sum | Medium | dp[i] = max(dp[j] + (i-j)*max(arr[j:i])) | ⭐ Medium |
| ✅ | 926 | Flip String to Monotone Increasing | Medium | dp[i][0/1] 翻转求单调 | ⭐ 高频 |

---

## 附录：算法触发词速查

```
"连续/区间/窗口/最短含所有/至多 K 种"           → 滑动窗口 / 单调队列
"已排序/可排序/两端逼近/最小差"                  → 对撞指针 / 二分（索引/答案）
"原地/删除重复/稳定压缩/读写合一"                 → 快慢指针
"按 pivot 分段/三色旗"                            → DNF（分区双指针）
"下一个更大/栈顶维护"                             → 单调栈
"TopK/数据流中位数/合并 K 路"                     → 堆（优先队列/双堆）
"最短步数/层数/最少操作"                          → BFS（无权图）
"最短路径/加权边/非负权"                          → Dijkstra（堆）
"负权"                                            → Bellman–Ford（或判负环）
"最小生成树/连通代价"                             → Kruskal（并查集）/Prim
"是否可行/能不能/最大最小且有子结构"               → 动态规划
"可行性单调/答案单调"                             → 二分答案
"合并/覆盖/最大同时在线"                          → 排序 + 扫描线 / 合并区间
"连通块/去冗余连接/合并账户"                      → 并查集（DSU）
"有向无环/先修关系/依赖顺序"                      → 拓扑排序
"多模式匹配/前缀词典"                             → Trie / Aho–Corasick
"字符串单模式匹配"                                → KMP / Z-Algorithm
"子串判等/重复子串/哈希"                          → 滚动哈希（+ 二分长度）
"第 K 小/中位数"                                  → QuickSelect
"出现一次/其余两次/三次/子集枚举"                  → 位运算 / bitmask
"大量区间加/求和/点改/区间改"                     → Fenwick（BIT）/ Segment Tree
"稳定线性级排序/大量整数键"                        → 计数排序 / 桶 / 基数
"组合数/范围幂/模运算/互质/质数"                   → 数论（筛/快速幂/gcd/逆元）
"矩阵状态快速幂/线性递推"                          → 矩阵快速幂
```
