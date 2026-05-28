# Python 算法代码片段

> 面试中最常用的 Python 写法速查。无需 import 的优先用内置。

---

## 1. 数组 / 列表

```python
# ---------- 初始化 ----------
arr = [0] * n
matrix = [[0] * cols for _ in range(rows)]   # 注意！不能用 [[0]*cols]*rows（共享引用）
visited = [False] * n

# ---------- 交换 ----------
arr[i], arr[j] = arr[j], arr[i]              # 原地交换，无需 temp
a, b = b, a                                  # 变量交换

# ---------- 反转 ----------
arr.reverse()                                # 原地，O(n)
arr[::-1]                                    # 新列表，O(n)

# ---------- 切片 ----------
arr[l:r]                                     # [l, r) 不含 r
arr[l:r:2]                                   # 步长为 2
arr[::-1]                                    # 完整反转

# ---------- 查找 / 统计 ----------
arr.index(x)                                 # 第一个 x 的下标（不存在抛 ValueError）
x in arr                                     # O(n) 存在判断
arr.count(x)

# ---------- 增删 ----------
arr.append(x)                                # 尾部添加 O(1)
arr.insert(i, x)                             # 插入 O(n)
arr.pop()                                    # 弹出末尾 O(1)
arr.pop(i)                                   # 弹出下标 i O(n)
del arr[i]                                   # 同 pop(i)

# ---------- 聚合 ----------
sum(arr)
min(arr), max(arr)
min(arr, key=lambda x: abs(x))              # 自定义 key

# ---------- 推导 ----------
even = [x for x in arr if x % 2 == 0]
flat = [x for row in matrix for x in row]   # 二维展开
squares = [x * x for x in range(n)]

# ---------- 转置矩阵 ----------
transposed = list(zip(*matrix))             # list of tuples
transposed = [list(row) for row in zip(*matrix)]  # list of lists

# ---------- 复制 ----------
copy1 = arr[:]
copy2 = arr.copy()
import copy; deep = copy.deepcopy(matrix)   # 深拷贝（矩阵）
```

---

## 2. 双指针

```python
# ---------- 左右夹逼（有序数组 two-sum）----------
def two_sum_sorted(arr: list[int], target: int):
    l, r = 0, len(arr) - 1
    while l < r:
        s = arr[l] + arr[r]
        if s == target:
            return l, r
        elif s < target:
            l += 1
        else:
            r -= 1
    return -1, -1

# ---------- 快慢指针（链表找中点）----------
def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow                              # 奇数长返回正中，偶数长返回前半最后一个

# ---------- 快慢指针（原地去重 / 移除元素）----------
def remove_duplicates(nums: list[int]) -> int:
    slow = 0
    for fast in range(len(nums)):
        if fast == 0 or nums[fast] != nums[fast - 1]:
            nums[slow] = nums[fast]
            slow += 1
    return slow

def remove_val(nums: list[int], val: int) -> int:
    slow = 0
    for fast in range(len(nums)):
        if nums[fast] != val:
            nums[slow] = nums[fast]
            slow += 1
    return slow

# ---------- 三指针（荷兰国旗 / Sort Colors）----------
def dutch_flag(nums: list[int]) -> None:
    lo, mid, hi = 0, 0, len(nums) - 1
    while mid <= hi:
        if nums[mid] == 0:
            nums[lo], nums[mid] = nums[mid], nums[lo]
            lo += 1; mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[hi] = nums[hi], nums[mid]
            hi -= 1

# ---------- 归并双指针 ----------
def merge_sorted(a: list[int], b: list[int]) -> list[int]:
    res, i, j = [], 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            res.append(a[i]); i += 1
        else:
            res.append(b[j]); j += 1
    res.extend(a[i:]); res.extend(b[j:])
    return res
```

---

## 3. 滑动窗口

```python
# ---------- 可变窗口（最小覆盖子串模板）----------
from collections import defaultdict

def min_window(s: str, t: str) -> str:
    need = defaultdict(int)
    for c in t:
        need[c] += 1
    window: dict[str, int] = defaultdict(int)
    l = r = valid = 0
    start, min_len = 0, float('inf')

    while r < len(s):
        c = s[r]; r += 1
        if c in need:
            window[c] += 1
            if window[c] == need[c]:
                valid += 1

        while valid == len(need):
            if r - l < min_len:
                min_len = r - l; start = l
            d = s[l]; l += 1
            if d in need:
                if window[d] == need[d]:
                    valid -= 1
                window[d] -= 1

    return s[start:start + min_len] if min_len != float('inf') else ""

# ---------- 定长窗口（字符异位词）----------
def find_anagrams(s: str, p: str) -> list[int]:
    from collections import Counter
    need = Counter(p)
    window: dict[str, int] = defaultdict(int)
    k = len(p)
    valid = res = 0
    result = []

    for r in range(len(s)):
        c = s[r]
        if c in need:
            window[c] += 1
            if window[c] == need[c]:
                valid += 1
        if r >= k:
            d = s[r - k]
            if d in need:
                if window[d] == need[d]:
                    valid -= 1
                window[d] -= 1
        if valid == len(need):
            result.append(r - k + 1)
    return result

# ---------- 求和 >= target 的最短子数组 ----------
def min_subarray_len(target: int, nums: list[int]) -> int:
    l = total = 0
    ans = float('inf')
    for r in range(len(nums)):
        total += nums[r]
        while total >= target:
            ans = min(ans, r - l + 1)
            total -= nums[l]; l += 1
    return 0 if ans == float('inf') else ans
```

---

## 4. DFS 模板

```python
# ---------- 图 DFS（邻接表，防重复访问）----------
def dfs_graph(graph: dict, start: int) -> None:
    visited = set()
    def dfs(node):
        if node in visited:
            return
        visited.add(node)
        for nb in graph[node]:
            dfs(nb)
    dfs(start)

# ---------- 网格 DFS（4 方向连通）----------
DIRS = [(-1, 0), (1, 0), (0, -1), (0, 1)]

def dfs_grid(grid: list[list[int]], r: int, c: int, visited: list[list[bool]]) -> None:
    rows, cols = len(grid), len(grid[0])
    if r < 0 or r >= rows or c < 0 or c >= cols:
        return
    if visited[r][c] or grid[r][c] == 0:
        return
    visited[r][c] = True
    for dr, dc in DIRS:
        dfs_grid(grid, r + dr, c + dc, visited)

# ---------- 岛屿数量（染色 / 标记访问）----------
def num_islands(grid: list[list[str]]) -> int:
    rows, cols = len(grid), len(grid[0])
    def dfs(r, c):
        if not (0 <= r < rows and 0 <= c < cols) or grid[r][c] != '1':
            return
        grid[r][c] = '#'                     # 原地标记，省去 visited 数组
        for dr, dc in DIRS:
            dfs(r + dr, c + dc)
    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c); count += 1
    return count

# ---------- 回溯模板（子集 / 排列 / 组合）----------
def backtrack(nums: list[int]) -> list[list[int]]:
    result: list[list[int]] = []
    path: list[int] = []

    def bt(start: int) -> None:
        result.append(path[:])              # 每个状态都是一个子集
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i - 1]:  # 同层去重（需提前排序）
                continue
            path.append(nums[i])
            bt(i + 1)
            path.pop()

    nums.sort()
    bt(0)
    return result

# ---------- 迭代式 DFS（显式栈，避免递归深度限制）----------
def dfs_iterative(graph: dict, start: int) -> None:
    visited = set()
    stack = [start]
    while stack:
        node = stack.pop()
        if node in visited:
            continue
        visited.add(node)
        for nb in graph[node]:
            if nb not in visited:
                stack.append(nb)

# Python 默认递归深度 1000，必要时：
import sys
sys.setrecursionlimit(10 ** 6)
```

---

## 5. BFS 模板

```python
from collections import deque

# ---------- 单源最短路（无权图）----------
def bfs(graph: dict, start: int, target: int) -> int:
    queue = deque([start])
    visited = {start}
    step = 0
    while queue:
        for _ in range(len(queue)):          # 按层遍历
            node = queue.popleft()
            if node == target:
                return step
            for nb in graph[node]:
                if nb not in visited:
                    visited.add(nb)
                    queue.append(nb)
        step += 1
    return -1

# ---------- 网格 BFS ----------
def bfs_grid(grid: list[list[int]], sr: int, sc: int) -> int:
    rows, cols = len(grid), len(grid[0])
    queue = deque([(sr, sc, 0)])
    visited = {(sr, sc)}
    while queue:
        r, c, d = queue.popleft()
        if (r, c) == (rows - 1, cols - 1):
            return d
        for dr, dc in DIRS:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited and grid[nr][nc] == 0:
                visited.add((nr, nc))
                queue.append((nr, nc, d + 1))
    return -1

# ---------- 多源 BFS（所有 0 出发，求最近距离）----------
def multi_source_bfs(grid: list[list[int]]) -> list[list[int]]:
    rows, cols = len(grid), len(grid[0])
    INF = float('inf')
    dist = [[INF] * cols for _ in range(rows)]
    queue = deque()
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 0:
                dist[r][c] = 0
                queue.append((r, c))
    while queue:
        r, c = queue.popleft()
        for dr, dc in DIRS:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and dist[nr][nc] == INF:
                dist[nr][nc] = dist[r][c] + 1
                queue.append((nr, nc))
    return dist
```

---

## 6. 排序技巧

```python
# ---------- 排序 ----------
arr.sort()                                    # 升序原地 O(n log n)
arr.sort(reverse=True)                        # 降序
sorted_arr = sorted(arr)                      # 返回新列表

# ---------- 自定义 key ----------
intervals.sort(key=lambda x: x[0])           # 按第一列升序
intervals.sort(key=lambda x: (x[0], -x[1])) # 第一列升，第二列降
words.sort(key=lambda w: (len(w), w))        # 先按长度，再字典序

# ---------- 自定义比较函数（少用）----------
from functools import cmp_to_key
def cmp(a, b):
    return int(a + b) - int(b + a)            # 数字字符串拼接最大值
nums_str.sort(key=cmp_to_key(cmp))

# ---------- 按频次排序 ----------
from collections import Counter
freq = Counter(nums)
nums.sort(key=lambda x: (-freq[x], x))       # 高频在前，同频按值升序

# ---------- 获取排序下标 ----------
order = sorted(range(len(arr)), key=lambda i: arr[i])

# ---------- 桶排序 / 计数排序 ----------
def counting_sort(arr: list[int], max_val: int) -> list[int]:
    cnt = [0] * (max_val + 1)
    for x in arr:
        cnt[x] += 1
    return [x for x, c in enumerate(cnt) for _ in range(c)]
```

---

## 7. 字符串

```python
# ---------- 字符 ↔ 整数 ----------
ord('a')                                      # 97
chr(97)                                       # 'a'
ord(c) - ord('a')                             # 'a'→0, 'z'→25
chr(ord('a') + i)                             # 0→'a', 25→'z'

# ---------- 拆分 / 合并 ----------
words = s.split()                             # 按空白拆
words = s.split(',')                          # 按逗号拆
s2 = ' '.join(words)                          # 列表合并为字符串

# ---------- 反转 ----------
s[::-1]
''.join(reversed(s))

# ---------- 检查 ----------
s.startswith('pre'), s.endswith('suf')
s.isdigit(), s.isalpha(), s.isalnum()
s.islower(), s.isupper()

# ---------- 替换 / 大小写 ----------
s.replace('old', 'new')
s.lower(), s.upper(), s.title()
s.strip(), s.lstrip(), s.rstrip()

# ---------- 统计 ----------
s.count('ab')                                 # 子串出现次数（可重叠不计）
s.find('sub')                                 # 第一次出现下标（-1 表示不存在）
s.index('sub')                                # 同上但不存在时抛 ValueError

# ---------- 字符串转列表再修改 ----------
chars = list(s)
chars[0] = 'X'
result = ''.join(chars)

# ---------- f-string ----------
f"{val:.2f}"                                  # 两位小数
f"{n:05d}"                                    # 补零到 5 位
f"{n:b}"                                      # 二进制
f"{n:,}"                                      # 千分位分隔符

# ---------- 回文检查 ----------
s == s[::-1]
```

---

## 8. 数据结构（标准库）

```python
# ===== heapq（小顶堆）=====
import heapq

h: list = []
heapq.heappush(h, val)
val = heapq.heappop(h)                        # 弹出最小
h[0]                                          # 查看最小（不弹）
heapq.heapify(lst)                            # 原地建堆 O(n)
heapq.nlargest(k, lst)                        # Top-K 大（内部用小堆）
heapq.nsmallest(k, lst)                       # Top-K 小

# 大顶堆：存负数
heapq.heappush(h, -val)
max_val = -heapq.heappop(h)

# 元组优先队列（距离, 节点）
heapq.heappush(h, (dist, node))

# ===== Counter =====
from collections import Counter

cnt = Counter(nums)                           # {val: count}
cnt['a'] += 1                                 # 不存在时默认 0
cnt.most_common(k)                            # [(val, cnt), ...] 高频在前
del cnt['a']                                  # 删除键
cnt.subtract(other)                           # 减法
cnt & other_cnt                               # 取交集（取最小）
cnt | other_cnt                               # 取并集（取最大）

# ===== defaultdict =====
from collections import defaultdict

d: defaultdict[int, int] = defaultdict(int)   # 默认 0
d: defaultdict[int, list] = defaultdict(list) # 默认 []
d[key].append(val)                            # 无需先判断 key 是否存在

# ===== deque（双端队列）=====
from collections import deque

q: deque = deque()
q.append(x)                                   # 右入 O(1)
q.appendleft(x)                               # 左入 O(1)
q.pop()                                       # 右出 O(1)
q.popleft()                                   # 左出 O(1)
q[0], q[-1]                                   # 查看头/尾
deque(arr, maxlen=k)                          # 固定大小滑动窗口

# ===== bisect（二分，数组需预先有序）=====
import bisect

bisect.bisect_left(arr, x)                    # 第一个 >= x 的位置（左边界）
bisect.bisect_right(arr, x)                   # 第一个 > x 的位置（右边界）
bisect.insort(arr, x)                         # 插入并保持有序 O(n)

# ===== sortedcontainers.SortedList（竞赛用）=====
# from sortedcontainers import SortedList
# sl = SortedList()
# sl.add(x); sl.remove(x)
# sl.bisect_left(x); sl[0]; sl[-1]           # O(log n) 有序集合

# ===== set 操作 =====
s = set()
s.add(x); s.discard(x)                       # discard 不存在不报错
s1 & s2                                       # 交集
s1 | s2                                       # 并集
s1 - s2                                       # 差集
x in s                                        # O(1) 查询
```

---

## 9. 数学工具

```python
from math import gcd, inf, sqrt, ceil, floor, log2, isqrt
import math

# ---------- 整除 / 取余 ----------
a // b                                        # 向下取整（Python 中 -7//2 == -4！）
a % b                                         # 余数（符号跟 b 走）
divmod(a, b)                                  # 返回 (商, 余)

# ---------- 向上取整 ----------
math.ceil(a / b)
(a + b - 1) // b                              # 整数版，常用于分桶

# ---------- 幂 / 开方 ----------
a ** b                                        # a^b（返回 float 如果必要）
pow(a, b, mod)                                # 快速幂取模 O(log b)
math.isqrt(n)                                 # 整数平方根 floor(sqrt(n))

# ---------- GCD / LCM ----------
math.gcd(a, b)
math.lcm(a, b)                                # Python 3.9+
from math import gcd
lcm = lambda a, b: a // gcd(a, b) * b        # 3.9 以下

# ---------- 无穷大 ----------
float('inf'), float('-inf')
math.inf, -math.inf

# ---------- 完全平方数 ----------
math.isqrt(n) ** 2 == n

# ---------- 质数筛（埃氏筛）----------
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

# ---------- 位运算 ----------
n & (n - 1)                                   # 消除最低位的 1
n & -n                                        # 取最低位的 1（lowbit）
bin(n).count('1')                             # popcount
n.bit_count()                                 # Python 3.10+ popcount
n >> 1                                        # 除以 2
n << 1                                        # 乘以 2
```

---

## 10. Python 特有技巧

```python
# ---------- 迭代工具 ----------
for i, val in enumerate(arr):          pass   # 带下标
for i, val in enumerate(arr, 1):       pass   # 下标从 1 开始
for a, b in zip(arr1, arr2):           pass   # 并行遍历（短的截断）
for a, b in zip(arr1, arr2, strict=True): pass # Python 3.10+，长度不等时报错

# 矩阵转置
list(zip(*matrix))

# ---------- itertools ----------
from itertools import combinations, permutations, product, accumulate, groupby

list(combinations(arr, 2))                    # C(n,2) 无序组合
list(permutations(arr, 2))                    # P(n,2) 有序排列
list(product('abc', repeat=2))               # 笛卡尔积
list(accumulate(arr))                         # 前缀和（默认加法）
list(accumulate(arr, initial=0))              # 带 prefix[0]=0

for key, group in groupby(sorted(arr)):
    print(key, list(group))

# ---------- 记忆化 ----------
from functools import cache, lru_cache

@cache                                        # Python 3.9+，等价于 lru_cache(None)
def dp(i: int, j: int) -> int: ...

@lru_cache(maxsize=None)                      # 对所有参数缓存
def dp(mask: int, remaining: int) -> bool: ...

# ---------- 多赋值技巧 ----------
a = b = 0                                     # 同时初始化
a, *b, c = [1, 2, 3, 4, 5]                   # a=1, b=[2,3,4], c=5
(a, b), c = (1, 2), 3

# ---------- 读取输入（竞赛）----------
n = int(input())
arr = list(map(int, input().split()))
import sys; data = sys.stdin.read().split()   # 大数据快速读取

# ---------- 常见 min/max 写法 ----------
ans = min(ans, candidate)
ans = max(ans, candidate)
val = min(a, b, c)                            # 支持多参数
val = min(arr, key=abs)                       # 按绝对值取最小

# ---------- 条件表达式 ----------
val = x if condition else y

# ---------- any / all ----------
any(x > 0 for x in arr)
all(x > 0 for x in arr)

# ---------- 递归深度 ----------
import sys
sys.setrecursionlimit(10 ** 6)               # 默认 1000，网格 DFS 必须调大
```
