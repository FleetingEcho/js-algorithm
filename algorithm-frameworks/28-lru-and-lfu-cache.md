# LRU & LFU 缓存

> **LRU (Least Recently Used)** — 淘汰最久未使用的；**LFU (Least Frequently Used)** — 淘汰使用次数最少的。

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                           | 题目     | 难度 | 核心考点          | 推荐指数 |
| --- | ---------------------------------------------- | -------- | :--: | ----------------- | :------: |
| 1   | [146](https://leetcode.cn/problems/lru-cache/) | LRU 缓存 |  🟡  | 哈希表 + 双向链表 |  ⭐⭐⭐  |
| 2   | [460](https://leetcode.cn/problems/lfu-cache/) | LFU 缓存 |  🔴  | 哈希表 + 频率链表 |  ⭐⭐⭐  |

---

## 📐 LRU 模板

```typescript
// lru-cache.ts
class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key)!;
    // 删除后重存，确保在 Map 末尾（最近使用）
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // 删除最久未使用的（Map 的第一个 key）
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, value);
  }
}
```

---

> **关联阅读：** `29-trie-prefix-tree.md` → `34-design-and-ood.md`
