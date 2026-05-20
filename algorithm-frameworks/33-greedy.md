# 贪心算法

> 核心一句话：**贪心 = 每一步都选当前最优，期望最终全局最优。难点不在写代码，而在证明"贪心选择正确"。**

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                                                            | 题目                   | 难度 | 核心考点        | 推荐指数 |
| --- | ------------------------------------------------------------------------------- | ---------------------- | :--: | --------------- | :------: |
| 1   | [435](https://leetcode.cn/problems/non-overlapping-intervals/)                  | 无重叠区间             |  🟡  | 最早结束优先    |    ⭐    |
| 2   | [452](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/) | 用最少数量的箭引爆气球 |  🟡  | 区间贪心        |   ⭐⭐   |
| 3   | [55](https://leetcode.cn/problems/jump-game/)                                   | 跳跃游戏               |  🟡  | 最远可达距离    |    ⭐    |
| 4   | [45](https://leetcode.cn/problems/jump-game-ii/)                                | 跳跃游戏 II            |  🟡  | 最少跳跃次数    |   ⭐⭐   |
| 5   | [134](https://leetcode.cn/problems/gas-station/)                                | 加油站                 |  🟡  | 总油量 + 起始点 |   ⭐⭐   |
| 6   | [1024](https://leetcode.cn/problems/video-stitching/)                           | 视频拼接               |  🟡  | 区间覆盖        |   ⭐⭐   |
| 7   | [253](https://leetcode.cn/problems/meeting-rooms-ii/)                           | 会议室 II              |  🟡  | 扫描线/最小堆   |   ⭐⭐   |

---

## 🧠 核心规律

```
区间重叠/选择 → 按结束时间排序，选最早结束的
跳跃游戏   → 维护最远可达距离
加油站     → 总油量 ≥ 总耗油，从亏油最少点出发
```

### 区间调度模板

```typescript
/**
 * 435. 无重叠区间
 * 思路：按结束时间排序，选最早结束的，移除重叠的
 */
function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  // 按结束时间排序
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 1; // 最多能选的不重叠区间数
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      count++;
      end = intervals[i][1]; // 选这个区间
    }
  }

  return intervals.length - count; // 需要移除的 = 总数 - 能选的
}
```

### 跳跃游戏

```typescript
/**
 * 55. 跳跃游戏
 * 思路：维护最远能到的位置，遍历每个位置更新最远距离
 */
function canJump(nums: number[]): boolean {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; // 到不了这个位置
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

/**
 * 45. 跳跃游戏 II — 最少跳跃次数
 */
function jump(nums: number[]): number {
  let jumps = 0,
    curEnd = 0,
    farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === curEnd) {
      jumps++;
      curEnd = farthest;
    }
  }

  return jumps;
}
```

---

## 📊 复杂度速查表

| 问题           | 时间复杂度 | 空间复杂度 | 关键点      |
| -------------- | :--------: | :--------: | ----------- |
| 435 无重叠区间 | O(n log n) |    O(1)    | 按 end 排序 |
| 55 跳跃游戏    |    O(n)    |    O(1)    | 最远可达    |
| 45 跳跃 II     |    O(n)    |    O(1)    | 边界更新    |
| 134 加油站     |    O(n)    |    O(1)    | 总油量+起点 |
| 253 会议室 II  | O(n log n) |    O(n)    | 扫描线/堆   |

---

> **关联阅读：** `25-interval-and-sweep-line.md` → `20-prefix-sum-and-diff-array.md`
