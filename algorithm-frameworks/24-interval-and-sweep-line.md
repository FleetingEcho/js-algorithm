# 区间与扫描线

> 核心一句话：**区间问题统一解法：按起点排序 + 遍历维护当前区间。扫描线是将时间轴事件化：起点+1，终点-1。**

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                                                            | 题目         | 难度 | 核心考点        | 推荐指数 |
| --- | ------------------------------------------------------------------------------- | ------------ | :--: | --------------- | :------: |
| 1   | [56](https://leetcode.cn/problems/merge-intervals/)                             | 合并区间     |  🟡  | 排序 + 合并     |    ⭐    |
| 2   | [57](https://leetcode.cn/problems/insert-interval/)                             | 插入区间     |  🟡  | 三段式插入      |   ⭐⭐   |
| 3   | [252](https://leetcode.cn/problems/meeting-rooms/)                              | 会议室       |  🟢  | 排序判重叠      |    ⭐    |
| 4   | [253](https://leetcode.cn/problems/meeting-rooms-ii/)                           | 会议室 II    |  🟡  | 扫描线 / 最小堆 |   ⭐⭐   |
| 5   | [435](https://leetcode.cn/problems/non-overlapping-intervals/)                  | 无重叠区间   |  🟡  | 最早结束优先    |   ⭐⭐   |
| 6   | [452](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/) | 气球引爆     |  🟡  | 区间交集        |   ⭐⭐   |
| 7   | [986](https://leetcode.cn/problems/interval-list-intersections/)                | 区间列表交集 |  🟡  | 双指针          |   ⭐⭐   |

---

## 📐 模板

```typescript
// merge-intervals.ts
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const last = result[result.length - 1];

    if (start <= last[1]) {
      last[1] = Math.max(last[1], end); // 重叠 → 合并
    } else {
      result.push([start, end]); // 不重叠 → 直接加入
    }
  }

  return result;
}

// meeting-rooms-ii.ts — 扫描线
function minMeetingRooms(intervals: number[][]): number {
  const events: number[][] = [];
  for (const [start, end] of intervals) {
    events.push([start, 1]); // 开始 → +1
    events.push([end, -1]); // 结束 → -1
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let maxRooms = 0,
    curr = 0;
  for (const [, delta] of events) {
    curr += delta;
    maxRooms = Math.max(maxRooms, curr);
  }

  return maxRooms;
}
```

---

> **关联阅读：** `35-greedy.md` → `14-two-pointers.md`
