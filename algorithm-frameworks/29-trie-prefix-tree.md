# Trie（前缀树）

> 核心一句话：**Trie 用树形结构存储字符串集合，支持前缀匹配。核心操作：插入、搜索、前缀搜索。**

---

## 🎯 经典 LeetCode 题目

| # | 题号 | 题目 | 难度 | 核心考点 | 推荐指数 |
|---|------|------|:----:|----------|:--------:|
| 1 | [208](https://leetcode.cn/problems/implement-trie-prefix-tree/) | 实现 Trie | 🟡 | Trie 模板 | ⭐ |
| 2 | [211](https://leetcode.cn/problems/design-add-and-search-words-data-structure/) | 添加与搜索单词 | 🟡 | Trie + 通配符 | ⭐⭐ |
| 3 | [648](https://leetcode.cn/problems/replace-words/) | 单词替换 | 🟡 | Trie 前缀匹配 | ⭐⭐ |
| 4 | [1032](https://leetcode.cn/problems/stream-of-characters/) | 字符流 | 🔴 | 后缀 Trie | ⭐⭐⭐ |

---

## 📐 Trie 模板

```typescript
// trie.ts
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd: boolean = false;
}

class Trie {
  private root: TrieNode = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) {
        node.children.set(c, new TrieNode());
      }
      node = node.children.get(c)!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const node = this.find(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix: string): boolean {
    return this.find(prefix) !== null;
  }

  private find(prefix: string): TrieNode | null {
    let node = this.root;
    for (const c of prefix) {
      if (!node.children.has(c)) return null;
      node = node.children.get(c)!;
    }
    return node;
  }
}
```

---

> **关联阅读：** `28-lru-and-lfu-cache.md` → `34-design-and-ood.md`
