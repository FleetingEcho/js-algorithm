# 二叉树进阶（LCA、序列化、公共祖先）

> 核心一句话：**LCA = 后序遍历 + 子树判断。序列化 = 前/后序 + 分隔符 + 空标记。路径总和 = 递归减 target。**

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                                                                | 题目               | 难度 | 核心考点      | 推荐指数 |
| --- | ----------------------------------------------------------------------------------- | ------------------ | :--: | ------------- | :------: |
| 1   | [236](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)        | 最近公共祖先       |  🟡  | 后序遍历 ✅   |  ⭐⭐⭐  |
| 2   | [235](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/) | BST 的最近公共祖先 |  🟢  | BST 性质      |    ⭐    |
| 3   | [297](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/)          | 二叉树序列化       |  🔴  | 层序/前序 ✅  |  ⭐⭐⭐  |
| 4   | [331](https://leetcode.cn/problems/verify-preorder-serialization-of-a-binary-tree/) | 验证前序序列化     |  🟡  | slot 计数     |  ⭐⭐⭐  |
| 5   | [112](https://leetcode.cn/problems/path-sum/)                                       | 路径总和           |  🟢  | 递归减 target |    ⭐    |
| 6   | [113](https://leetcode.cn/problems/path-sum-ii/)                                    | 路径总和 II        |  🟡  | 回溯记录路径  |   ⭐⭐   |
| 7   | [124](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)                   | 最大路径和         |  🔴  | 后序 + 全局   |  ⭐⭐⭐  |
| 8   | [199](https://leetcode.cn/problems/binary-tree-right-side-view/)                    | 右视图             |  🟡  | BFS/DFS       |   ⭐⭐   |
| 9   | [114](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)             | 展开为链表         |  🟡  | 后序连接      |   ⭐⭐   |
| 10  | [173](https://leetcode.cn/problems/binary-search-tree-iterator/)                    | BST 迭代器         |  🟡  | 栈模拟中序    |  ⭐⭐⭐  |

---

## 📐 LCA 模板

```typescript
// lowest-common-ancestor.ts
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root; // p,q 在两侧 → root 是 LCA
  return left || right; // 在同一侧 → 返回那一侧找到的
}
```

---

> **关联阅读：** `12-binary-tree-traversal.md` → `13-binary-tree-operations.md`
