# 设计与 OOD

> 核心一句话：**设计题考察对数据结构的组合能力 — LRU = 哈希表 + 双向链表，O(1)随机访问 = 哈希表 + 动态数组。**

---

## 🎯 经典 LeetCode 题目

| # | 题号 | 题目 | 难度 | 核心数据结构 | 推荐指数 |
|---|------|------|:----:|-------------|:--------:|
| 1 | [146](https://leetcode.cn/problems/lru-cache/) | LRU 缓存 | 🟡 | 哈希表 + 双向链表 | ⭐⭐⭐ |
| 2 | [155](https://leetcode.cn/problems/min-stack/) | 最小栈 | 🟢 | 辅助栈 | ⭐ |
| 3 | [173](https://leetcode.cn/problems/binary-search-tree-iterator/) | BST 迭代器 | 🟡 | 栈模拟中序 | ⭐⭐⭐ |
| 4 | [208](https://leetcode.cn/problems/implement-trie-prefix-tree/) | 实现 Trie | 🟡 | 字典树 | ⭐ |
| 5 | [380](https://leetcode.cn/problems/insert-delete-getrandom-o1/) | O(1) 插入删除随机获取 | 🟡 | 哈希表 + 数组 | ⭐⭐⭐ |
| 6 | [460](https://leetcode.cn/problems/lfu-cache/) | LFU 缓存 | 🔴 | 哈希表 + 频率桶 | ⭐⭐⭐ |
| 7 | [588](https://leetcode.cn/problems/design-in-memory-file-system/) | 设计内存文件系统 | 🔴 | Trie | ⭐⭐⭐ |
| 8 | [703](https://leetcode.cn/problems/kth-largest-element-in-a-stream/) | 数据流第 K 大 | 🟢 | 小顶堆 | ⭐ |
| 9 | [706](https://leetcode.cn/problems/design-hashmap/) | 设计哈希映射 | 🟢 | 链地址法 | ⭐⭐ |
| 10 | [895](https://leetcode.cn/problems/maximum-frequency-stack/) | 最大频率栈 | 🔴 | 频率 + 栈映射 | ⭐⭐⭐ |
| 11 | [981](https://leetcode.cn/problems/time-based-key-value-store/) | 基于时间的键值存储 | 🟡 | 哈希 + 有序数组 + 二分 | ⭐⭐⭐ |
| 12 | [1396](https://leetcode.cn/problems/design-underground-system/) | 设计地铁系统 | 🟡 | 哈希表 | ⭐⭐ |

---

## 📐 常用模式

```typescript
// 155. 最小栈
class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [Infinity];

  push(val: number): void {
    this.stack.push(val);
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
  }
  pop(): void { this.stack.pop(); this.minStack.pop(); }
  top(): number { return this.stack[this.stack.length - 1]; }
  getMin(): number { return this.minStack[this.minStack.length - 1]; }
}

// 380. O(1) 随机访问
class RandomizedSet {
  private nums: number[] = [];
  private map = new Map<number, number>();

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.map.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val)!;
    const last = this.nums[this.nums.length - 1];
    this.nums[idx] = last;         // 用最后一个元素覆盖
    this.map.set(last, idx);       // 更新最后一个元素的索引
    this.nums.pop();
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}
```

---

> **关联阅读：** `28-lru-and-lfu-cache.md` → `29-trie-prefix-tree.md`
