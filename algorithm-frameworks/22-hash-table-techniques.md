# 哈希表技巧

> 核心一句话：**哈希表是"以空间换时间"的经典工具，核心用于 O(1) 查重、计数、索引映射。**
>
> 规律：「查重 / 计数 / 存补数」→ 哈希表

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                                               | 题目                             | 难度 | 核心考点          | 推荐指数 |
| --- | ------------------------------------------------------------------ | -------------------------------- | :--: | ----------------- | :------: |
| 1   | [1](https://leetcode.cn/problems/two-sum/)                         | 两数之和                         |  🟢  | 存补数 ✅         |    ⭐    |
| 2   | [49](https://leetcode.cn/problems/group-anagrams/)                 | 字母异位词分组                   |  🟡  | 排序/计数作为 key |   ⭐⭐   |
| 3   | [128](https://leetcode.cn/problems/longest-consecutive-sequence/)  | 最长连续序列                     |  🟡  | Set 查前后        |   ⭐⭐   |
| 4   | [136](https://leetcode.cn/problems/single-number/)                 | 只出现一次的数字                 |  🟢  | 异或 / 哈希       |    ⭐    |
| 5   | [290](https://leetcode.cn/problems/word-pattern/)                  | 单词规律                         |  🟢  | 双向映射          |    ⭐    |
| 6   | [347](https://leetcode.cn/problems/top-k-frequent-elements/)       | 前K个高频元素                    |  🟡  | 哈希+桶/堆        |   ⭐⭐   |
| 7   | [380](https://leetcode.cn/problems/insert-delete-getrandom-o1/)    | O(1)时间插入、删除和获取随机元素 |  🟡  | 哈希+数组         |  ⭐⭐⭐  |
| 8   | [560](https://leetcode.cn/problems/subarray-sum-equals-k/)         | 和为 K 的子数组                  |  🟡  | 前缀和+哈希 ✅    |   ⭐⭐   |
| 9   | [706](https://leetcode.cn/problems/design-hashmap/)                | 设计哈希映射                     |  🟢  | 链地址法          |   ⭐⭐   |
| 10  | [953](https://leetcode.cn/problems/verifying-an-alien-dictionary/) | 验证外星语词典                   |  🟢  | 哈希表存字典序    |   ⭐⭐   |

---

## 📐 哈希表常用模式

```typescript
// ① 两数之和 — 存补数
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement)!, i];
    map.set(nums[i], i);
  }
  return [-1, -1];
}

// ② 最长连续序列 — Set 前后查找
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let maxLen = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      // 是连续序列的开头
      let curr = num,
        len = 1;
      while (set.has(curr + 1)) {
        curr++;
        len++;
      }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
}

// ③ 字母异位词分组 — 排序后作为 key
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    map.set(key, [...(map.get(key) || []), s]);
  }
  return [...map.values()];
}
```

---

> **关联阅读：** `20-n-sum-problems.md` → `19-prefix-sum-and-diff-array.md`
