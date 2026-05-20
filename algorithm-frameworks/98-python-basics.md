# Python 基础知识参考

> 算法刷题中常用的 Python 语法与内置函数速查。

---

## 目录

1. [列表（List）](#列表list)
2. [字典（Dict）](#字典dict)
3. [集合（Set）](#集合set)
4. [字符串（String）](#字符串string)
5. [队列与双端队列（collections.deque）](#队列与双端队列collectionsdeque)
6. [堆（heapq）](#堆heapq)
7. [计数器（collections.Counter）](#计数器collectionscounter)
8. [默认字典（collections.defaultdict）](#默认字典collectionsdefaultdict)
9. [排序与自定义比较](#排序与自定义比较)
10. [迭代工具（itertools）](#迭代工具itertools)
11. [数学与位运算](#数学与位运算)
12. [输入输出](#输入输出)
13. [算法常用技巧](#算法常用技巧)

---

## 列表（List）

```python
# 创建
arr = [1, 2, 3]
arr = [0] * 10          # [0, 0, 0, ...]
arr = list(range(10))   # [0, 1, 2, ..., 9]

# 二维数组
matrix = [[0] * n for _ in range(m)]  # ✅ 正确创建 m×n
wrong = [[0] * n] * m                  # ❌ 浅拷贝，所有行是同一个对象！

# 添加/删除
arr.append(4)        # 末尾添加
arr.pop()            # 末尾删除并返回
arr.pop(i)           # 删除索引 i 的元素
arr.insert(i, val)   # 在 i 处插入
arr.remove(val)      # 删除第一个匹配值
del arr[i]           # 删除索引 i

# 查找
val in arr           # True/False
arr.index(val)       # 第一个匹配的索引（不存在则抛出异常）
arr.count(val)       # 出现次数

# 切片
arr[i:j]             # [i, j)
arr[i:]              # i 到末尾
arr[:j]              # 开头到 j
arr[-1]              # 最后一个
arr[::-1]            # 反转
arr[::2]             # 每隔一个取一个

# 遍历
for x in arr: ...
for i, x in enumerate(arr): ...   # 同时取索引和值
for x, y in zip(arr1, arr2): ...  # 并行遍历

# 列表推导式
[x * 2 for x in range(10)]              # [0, 2, 4, ...]
[x for x in range(10) if x % 2 == 0]    # 带条件
[(x, y) for x in range(3) for y in range(3)]  # 嵌套

# 排序
sorted(arr)              # 返回新列表
sorted(arr, reverse=True)
arr.sort()               # 原地排序
arr.sort(key=lambda x: -x)

# 其他
sum(arr)                 # 求和
max(arr), min(arr)       # 最大/最小值
len(arr)                 # 长度
list(reversed(arr))      # 反转（返回迭代器）
```

---

## 字典（Dict）

```python
# 创建
d = {}
d = {'a': 1, 'b': 2}
d = dict(zip(['a', 'b'], [1, 2]))  # {'a': 1, 'b': 2}

# 基本操作
d[key] = value        # 设置
d[key]                # 获取（不存在则抛出 KeyError）
d.get(key)            # 获取（不存在返回 None）
d.get(key, default)   # 获取（不存在返回默认值）
d.setdefault(key, default)  # 不存在则设默认值并返回
key in d              # 检查
d.pop(key)            # 删除并返回值
d.pop(key, default)   # 删除并返回（不存在返回默认值）
del d[key]            # 删除

# 遍历
for k in d: ...                   # 遍历键
for k, v in d.items(): ...        # 遍历键值对
for v in d.values(): ...          # 遍历值

# 排序
sorted(d)                          # 按键排序
sorted(d.items(), key=lambda x: x[1])  # 按值排序

# 默认值技巧
d[key] = d.get(key, 0) + 1        # 计数

# 合并
{**d1, **d2}                      # Python 3.5+
d1 | d2                            # Python 3.9+
```

---

## 集合（Set）

```python
# 创建
s = set()
s = {1, 2, 3}
s = set([1, 2, 2, 3])    # {1, 2, 3}（去重）

# 基本操作
s.add(val)
s.remove(val)         # 不存在则抛出 KeyError
s.discard(val)        # 不存在不报错
s.pop()               # 删除并返回任意元素
s.clear()
len(s)
val in s

# 集合运算
a | b                 # 并集
a & b                 # 交集
a - b                 # 差集（在 a 不在 b）
a ^ b                 # 对称差集

# 去重
unique = list(set(arr))

# 以特定顺序遍历
sorted(s)             # 排序后遍历
```

---

## 字符串（String）

```python
s = 'hello'

# 基本操作
len(s)
s[0]                  # 'h'
s[-1]                 # 'o'
s[1:4]                # 'ell'

# 查找
s.index('l')          # 第一个位置（不存在抛出异常）
s.find('l')           # 第一个位置（不存在返回 -1）
s.count('l')          # 出现次数
s.startswith('he')    # True
s.endswith('lo')      # True

# 变换
s.upper(), s.lower()
s.strip()             # 去首尾空白
s.split(',')          # 分割
','.join(['a','b'])   # 'a,b'
s.replace('l', 'x')   # 替换

# 判断
s.isdigit()           # 是否全数字
s.isalpha()           # 是否全字母
s.isalnum()           # 是否字母或数字

# 遍历
for c in s: ...
for i, c in enumerate(s): ...

# 频率统计
from collections import Counter
Counter(s)            # {'h':1, 'e':1, 'l':2, 'o':1}
```

---

## 队列与双端队列（collections.deque）

```python
from collections import deque

d = deque()           # 创建
d = deque([1, 2, 3])

d.append(x)           # 右端添加
d.appendleft(x)       # 左端添加
d.pop()               # 右端删除并返回
d.popleft()           # 左端删除并返回
d[0]                  # 左端元素
d[-1]                 # 右端元素
len(d)

# 用于 BFS
q = deque([start])
while q:
    cur = q.popleft()
    for nxt in neighbors:
        q.append(nxt)
```

---

## 堆（heapq）

```python
import heapq

heap = []                     # 默认小顶堆
heapq.heappush(heap, val)     # 插入
val = heapq.heappop(heap)     # 弹出堆顶（最小值）
heap[0]                       # 查看堆顶

# 建堆 — O(n)
heapq.heapify(arr)            # 原地将列表转为堆

# Top K 最大 — 用小顶堆
def top_k(nums, k):
    heap = []
    for x in nums:
        heapq.heappush(heap, x)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap  # 小顶堆，堆顶是第 k 大的门槛

# 大顶堆 — 存负数模拟
heapq.heappush(heap, -val)
-val = heapq.heappop(heap)

# 合并 K 个有序数组
list(heapq.merge(*arrays))

# n 个最大/最小
heapq.nlargest(k, iterable)      # 最大的 k 个
heapq.nsmallest(k, iterable)     # 最小的 k 个
```

---

## 计数器（collections.Counter）

```python
from collections import Counter

cnt = Counter(arr)            # 统计频次
cnt.most_common(k)            # 前 k 个最高频元素 [(元素, 次数), ...]
cnt[element]                  # 某元素出现次数（不存在返回 0）

# 常见用法
c1 + c2         # 合并计数
c1 - c2         # 差集
c1 & c2         # 交集（取较小值）
c1 | c2         # 并集（取较大值）

# 字符串字母计数
Counter('abracadabra')
# Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
```

---

## 默认字典（collections.defaultdict）

```python
from collections import defaultdict

# 默认值为 list
graph = defaultdict(list)
graph[0].append(1)   # 无需检查键是否存在

# 默认值为 int（可用于计数）
cnt = defaultdict(int)
cnt['a'] += 1

# 默认值为 set
sets = defaultdict(set)
sets[0].add(1)

# 默认值为任意值
d = defaultdict(lambda: float('inf'))
```

---

## 排序与自定义比较

```python
# 标准排序
sorted(arr)
sorted(arr, reverse=True)

# 按 key 函数排序
sorted(arr, key=lambda x: x[1])           # 按第二个元素
sorted(arr, key=lambda x: -x[1])          # 按第二个元素降序
sorted(arr, key=lambda x: (x[1], -x[0]))  # 多级排序

# 自定义比较器（Python 3 没有 cmp 参数，用 functools.cmp_to_key）
from functools import cmp_to_key

def cmp(a, b):
    if a + b > b + a: return -1  # a 应该排在前面
    return 1

sorted(nums, key=cmp_to_key(cmp))

# 对字典按值排序
sorted(d.items(), key=lambda x: x[1])

# 按元组多个属性
students.sort(key=lambda s: (s.grade, -s.age))
```

---

## 迭代工具（itertools）

```python
from itertools import permutations, combinations, product, accumulate

# 排列
list(permutations([1, 2, 3], 2))  # [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]

# 组合
list(combinations([1, 2, 3], 2))  # [(1,2), (1,3), (2,3)]

# 笛卡尔积
list(product([0, 1], repeat=3))   # 8 种 01 组合

# 前缀和
list(accumulate([1, 2, 3, 4]))    # [1, 3, 6, 10]

# 展平
list(itertools.chain.from_iterable([[1,2], [3,4]]))  # [1, 2, 3, 4]
```

---

## 数学与位运算

```python
# 内置数学函数
abs(x)
pow(x, y, mod)           # (x**y) % mod，比 x**y % mod 快
divmod(a, b)             # (a // b, a % b)
round(x, n)              # 四舍五入到 n 位小数

# math 模块
import math
math.gcd(a, b)           # 最大公约数
math.lcm(a, b)           # 最小公倍数（Python 3.9+）
math.sqrt(x)
math.floor(x), math.ceil(x)
math.log(x), math.log2(x), math.log10(x)
math.inf                 # 无穷大
math.pi, math.e

# 位运算
x & (x - 1)              # 消除最低位的 1
x & -x                   # 取最低位的 1
x ^ y                    # 异或
x >> 1, x << 1           # 右移/左移

# 统计二进制 1 的个数
bin(x).count('1')
# Python 3.8+
x.bit_count()            # ✅ 推荐

# 进制转换
bin(x)                   # 二进制字符串 '0b101'
oct(x)                   # 八进制
hex(x)                   # 十六进制
int('101', 2)            # 二进制→十进制
```

---

## 输入输出

```python
# 单行一个整数
n = int(input())

# 单行多个整数
a, b = map(int, input().split())
arr = list(map(int, input().split()))

# 多行输入（常用）
import sys
data = sys.stdin.read().split()
```

---

## 算法常用技巧

```python
# 交换
a, b = b, a

# 深拷贝
import copy
copy.deepcopy(obj)        # 完整深拷贝
# 或简单结构用
json.loads(json.dumps(obj))

# 创建无穷大
float('inf')
float('-inf')

# 三元表达式
x = a if condition else b

# 链式比较
if 0 <= x < n: ...

# Any / All
all(x > 0 for x in arr)     # 是否全部满足
any(x > 0 for x in arr)     # 是否有满足的

# 取模
(-3) % 10                 # 7（Python 取模总是返回非负）
abs(-3)                   # 3

# 大数取模
pow(2, 1000000, 10**9+7)  # ✅ 快速幂取模

# 记忆化搜索（functools.lru_cache 或 @cache）
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n: int) -> int:
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

# Python 3.9+
from functools import cache

@cache
def dp(i, j): ...

# 二分查找（bisect）
import bisect
bisect.bisect_left(arr, x)   # 第一个 ≥ x 的索引
bisect.bisect_right(arr, x)  # 第一个 > x 的索引
bisect.insort(arr, x)        # 插入到有序位置
```
