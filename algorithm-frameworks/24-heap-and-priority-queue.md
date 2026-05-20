# 堆与优先级队列

> 核心一句话：**堆是"动态求最值"的数据结构 — 大顶堆求最大，小顶堆求最小。双堆技巧用于求中位数。Top K 问题首选堆。**
>
> 规律：「动态最值 / Top K / 中位数」→ 堆

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                                                 | 题目                  | 难度 | 核心考点             | 推荐指数 |
| --- | -------------------------------------------------------------------- | --------------------- | :--: | -------------------- | :------: |
| 1   | [703](https://leetcode.cn/problems/kth-largest-element-in-a-stream/) | 数据流中的第 K 大元素 |  🟢  | 小顶堆维护 top k     |    ⭐    |
| 2   | [347](https://leetcode.cn/problems/top-k-frequent-elements/)         | 前 K 个高频元素       |  🟡  | 堆 / 桶排序          |   ⭐⭐   |
| 3   | [692](https://leetcode.cn/problems/top-k-frequent-words/)            | 前K个高频单词         |  🟡  | 堆 + 字典序          |   ⭐⭐   |
| 4   | [295](https://leetcode.cn/problems/find-median-from-data-stream/)    | 数据流的中位数        |  🔴  | **双堆**（大小顶堆） |  ⭐⭐⭐  |
| 5   | [973](https://leetcode.cn/problems/k-closest-points-to-origin/)      | 最接近原点的 K 个点   |  🟡  | 大顶堆 / 快选        |   ⭐⭐   |
| 6   | [767](https://leetcode.cn/problems/reorganize-string/)               | 重构字符串            |  🟡  | 大顶堆 + 隔位插入    |  ⭐⭐⭐  |
| 7   | [23](https://leetcode.cn/problems/merge-k-sorted-lists/)             | 合并 K 个升序链表     |  🔴  | 小顶堆 + 链表合并    |  ⭐⭐⭐  |

---

## 📋 目录

1. [堆的实现](#堆的实现)
2. [Top K 模板](#top-k-模板)
3. [双堆：数据流中位数](#双堆数据流中位数)
4. [合并 K 个有序链表](#合并-k-个有序链表)
5. [复杂度速查表](#-复杂度速查表)

---

## 堆的实现

> 堆的本质是一个**完全二叉树**，用数组存储。节点 `i` 的子节点为 `2i+1` 和 `2i+2`，父节点为 `⌊(i-1)/2⌋`。

### 小顶堆

```typescript
class MinHeap {
  private data: number[] = [];

  insert(val: number): void {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  extractMin(): number | null {
    if (!this.data.length) return null;
    [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
    const min = this.data.pop()!;
    this.bubbleDown(0);
    return min;
  }

  peek(): number | null { return this.data.length ? this.data[0] : null; }
  size(): number { return this.data.length; }

  /** 建堆 — 从最后一个非叶子节点开始 heapify */
  static buildHeap(arr: number[]): MinHeap {
    const heap = new MinHeap();
    heap.data = arr;
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) heap.bubbleDown(i);
    return heap;
  }

  private bubbleUp(idx: number): void {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.data[parent] <= this.data[idx]) break;
      [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
      idx = parent;
    }
  }

  private bubbleDown(idx: number): void {
    const n = this.data.length;
    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1, right = 2 * idx + 2;
      if (left < n && this.data[left] < this.data[smallest]) smallest = left;
      if (right < n && this.data[right] < this.data[smallest]) smallest = right;
      if (smallest === idx) break;
      [this.data[idx], this.data[smallest]] = [this.data[smallest], this.data[idx]];
      idx = smallest;
    }
  }
}
```

```python
class MinHeap:
    def __init__(self):
        self.data = []

    def insert(self, val):
        self.data.append(val)
        self._bubble_up(len(self.data) - 1)

    def extract_min(self):
        if not self.data: return None
        self.data[0], self.data[-1] = self.data[-1], self.data[0]
        min_val = self.data.pop()
        self._bubble_down(0)
        return min_val

    def peek(self): return self.data[0] if self.data else None

    @classmethod
    def build_heap(cls, arr):
        heap = cls()
        heap.data = arr[:]
        for i in range(len(arr) // 2 - 1, -1, -1):
            heap._bubble_down(i)
        return heap

    def _bubble_up(self, i):
        while i > 0:
            p = (i - 1) // 2
            if self.data[p] <= self.data[i]: break
            self.data[p], self.data[i] = self.data[i], self.data[p]
            i = p

    def _bubble_down(self, i):
        n = len(self.data)
        while True:
            s = i
            l, r = 2*i+1, 2*i+2
            if l < n and self.data[l] < self.data[s]: s = l
            if r < n and self.data[r] < self.data[s]: s = r
            if s == i: break
            self.data[i], self.data[s] = self.data[s], self.data[i]
            i = s
```

### 大顶堆（只需反转比较符号或存负数）

```typescript
class MaxHeap extends MinHeap {
  bubbleUp(idx: number): void {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.data[parent] >= this.data[idx]) break; // 改为 >=
      [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
      idx = parent;
    }
  }
  bubbleDown(idx: number): void {
    // 所有 < 改为 >，> 改为 <
  }
}

// 或用技巧：存负数模拟大顶堆
// heap.insert(-val);  // 插入时取负
// -heap.extractMin(); // 取出时取负
```

---

## Top K 模板

> **思路：** 找前 K 大用**小顶堆**（堆顶是门槛，新元素比堆顶大就替换）；找前 K 小用**大顶堆**。

### 前 K 个高频元素

```typescript
function topKFrequent(nums: number[], k: number): number[] {
  // 1. 统计频率
  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  // 2. 小顶堆维护 top k（按频率比较）
  const heap: [number, number][] = []; // [频率, 数字]
  for (const [num, count] of freq) {
    heap.push([count, num]);
    heap.sort((a, b) => a[0] - b[0]); // 工程中应使用真正的最小堆
    if (heap.length > k) heap.shift();
  }

  return heap.map(item => item[1]);
}
```

```python
import heapq
from collections import Counter

def topKFrequent(nums: list[int], k: int) -> list[int]:
    freq = Counter(nums)
    # 小顶堆存 (频率, 数字)
    heap = []
    for num, cnt in freq.items():
        heapq.heappush(heap, (cnt, num))
        if len(heap) > k:
            heapq.heappop(heap)
    return [h[1] for h in heap]
```

### 最接近原点的 K 个点

```typescript
function kClosest(points: number[][], k: number): number[][] {
  // 大顶堆 — 存距离最大的在堆顶，新点距离更小时替换
  const heap: [number, number[]][] = []; // [距离², 点]
  for (const p of points) {
    const dist = p[0] * p[0] + p[1] * p[1];
    heap.push([dist, p]);
    heap.sort((a, b) => b[0] - a[0]); // 大顶堆
    if (heap.length > k) heap.pop();
  }
  return heap.map(item => item[1]);
}
```

```python
def kClosest(points: list[list[int]], k: int) -> list[list[int]]:
    return sorted(points, key=lambda p: p[0]**2 + p[1]**2)[:k]
```

---

## 双堆：数据流中位数

> **思路：** 大顶堆放较小的一半，小顶堆放较大的一半，保持两者大小平衡。

```typescript
class MedianFinder {
  private maxHeap: number[] = []; // 较小的一半（大顶堆）
  private minHeap: number[] = []; // 较大的一半（小顶堆）

  addNum(num: number): void {
    // 先入大顶堆，再平衡到小顶堆
    this.maxHeap.push(num);
    this.maxHeap.sort((a, b) => b - a);

    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.shift()!);
      this.minHeap.sort((a, b) => a - b);
    }
  }

  findMedian(): number {
    if (this.maxHeap.length > this.minHeap.length) return this.maxHeap[0];
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
  }
}
```

```python
import heapq

class MedianFinder:
    def __init__(self):
        self.max_heap = []  # 大顶堆（存负数模拟）
        self.min_heap = []  # 小顶堆

    def addNum(self, num):
        heapq.heappush(self.max_heap, -num)
        heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        if len(self.min_heap) > len(self.max_heap):
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

    def findMedian(self):
        if len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        return (-self.max_heap[0] + self.min_heap[0]) / 2
```

---

## 合并 K 个有序链表

> **思路：** 把每个链表的头节点放入小顶堆，每次弹出最小节点并加入其 next。

```typescript
function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  const heap: [number, number, ListNode][] = []; // [val, index, node]

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) heap.push([lists[i]!.val, i, lists[i]!]);
  }

  const dummy = new ListNode(0);
  let cur = dummy;

  while (heap.length) {
    heap.sort((a, b) => a[0] - b[0]); // 小顶堆
    const [, i, node] = heap.shift()!;
    cur.next = node;
    cur = cur.next;
    if (node.next) heap.push([node.next.val, i, node.next]);
  }

  return dummy.next;
}
```

```python
import heapq

def mergeKLists(lists):
    heap = []
    for i, l in enumerate(lists):
        if l: heapq.heappush(heap, (l.val, i, l))

    dummy = ListNode(0)
    cur = dummy

    while heap:
        val, i, node = heapq.heappop(heap)
        cur.next = node
        cur = cur.next
        if node.next: heapq.heappush(heap, (node.next.val, i, node.next))

    return dummy.next
```

---

## 📊 复杂度速查表

| 操作 | 时间复杂度 | 空间复杂度 | 说明 |
|---|---|---|---|
| 堆插入 | O(log n) | O(1) | bubbleUp |
| 堆删除（堆顶） | O(log n) | O(1) | bubbleDown |
| 建堆 | O(n) | O(1) | Floyd 建堆法 |
| Top K（堆） | O(n log k) | O(k) | 小顶堆维护 |
| 双堆中位数 | O(log n) | O(n) | 保持平衡 |
| 合并 K 链表 | O(n log k) | O(k) | 小顶堆存 k 个头 |

---

> **关联阅读：** `29-lru-and-lfu-cache.md` → `25-interval-and-sweep-line.md` → `97-data-structures-implementations.md`
