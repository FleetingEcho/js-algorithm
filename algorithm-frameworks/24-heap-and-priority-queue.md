# 堆与优先级队列

> 核心一句话：**堆是"动态求最值"的数据结构 — 大顶堆求最大，小顶堆求最小。双堆技巧用于求中位数。**

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

## 📐 双堆模板（数据流中位数）

```typescript
// median-finder.ts
class MedianFinder {
  private maxHeap: number[] = []; // 存较小的一半（大顶堆）
  private minHeap: number[] = []; // 存较大的一半（小顶堆）

  addNum(num: number): void {
    // 先入大顶堆，再平衡到小顶堆
    this.maxHeap.push(num);
    this.maxHeap.sort((a, b) => b - a); // 大顶堆

    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.shift()!);
      this.minHeap.sort((a, b) => a - b); // 小顶堆
    }
  }

  findMedian(): number {
    if (this.maxHeap.length > this.minHeap.length) {
      return this.maxHeap[0];
    }
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
  }
}
```

---

> **关联阅读：** `29-lru-and-lfu-cache.md` → `25-interval-and-sweep-line.md`
