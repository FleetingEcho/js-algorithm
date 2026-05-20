# 二叉树进阶（LCA、序列化、公共祖先）

> 核心一句话：**LCA = 后序遍历 + 子树判断。序列化 = 层序/前序 + 分隔符 + 空标记。路径总和 = 递归减 target。右视图 = BFS 每层最右。**

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

## 📋 目录

1. [LCA 模板](#lca-模板)
2. [序列化与反序列化](#序列化与反序列化)
3. [路径总和](#路径总和)
4. [最大路径和](#最大路径和)
5. [右视图](#右视图)
6. [展开为链表](#展开为链表)
7. [BST 迭代器](#bst-迭代器)
8. [复杂度速查表](#-复杂度速查表)

---

## 📐 LCA 模板

```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  if (root === null || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root; // p,q 在两侧 → root 是 LCA
  return left || right; // 在同一侧 → 返回那一侧找到的
}
```

```python
def lowestCommonAncestor(root, p, q):
    if not root or root == p or root == q: return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right: return root
    return left or right
```

### BST 的 LCA

利用 BST 性质：若 p,q 都在左侧则去左子树，都在右侧则去右子树，否则 root 即为 LCA。

```typescript
function lowestCommonAncestorBST(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  if (!root) return null;
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestorBST(root.left, p, q);
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestorBST(root.right, p, q);
  return root;
}
```

```python
def lowestCommonAncestorBST(root, p, q):
    if p.val < root.val and q.val < root.val:
        return lowestCommonAncestorBST(root.left, p, q)
    if p.val > root.val and q.val > root.val:
        return lowestCommonAncestorBST(root.right, p, q)
    return root
```

---

## 序列化与反序列化

### 层序 BFS 序列化

```typescript
function serialize(root: TreeNode | null): string {
  if (!root) return '[]';
  const queue: (TreeNode | null)[] = [root];
  const res: (number | null)[] = [];
  while (queue.length) {
    const node = queue.shift()!;
    if (node) {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push(null);
    }
  }
  // 去掉末尾的 null
  while (res[res.length - 1] === null) res.pop();
  return JSON.stringify(res);
}

function deserialize(data: string): TreeNode | null {
  const arr = JSON.parse(data);
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length) {
    const node = queue.shift()!;
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
```

```python
def serialize(root):
    if not root: return '[]'
    q, res = [root], []
    while q:
        node = q.pop(0)
        if node:
            res.append(node.val)
            q.append(node.left)
            q.append(node.right)
        else:
            res.append(None)
    while res and res[-1] is None: res.pop()
    return str(res)

def deserialize(data):
    arr = eval(data)
    if not arr: return None
    root = TreeNode(arr[0])
    q, i = [root], 1
    while q:
        node = q.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            q.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            q.append(node.right)
        i += 1
    return root
```

### 验证前序序列化（slot 计数）

```typescript
function isValidSerialization(preorder: string): boolean {
  const nodes = preorder.split(',');
  let slots = 1; // 根节点需要一个 slot
  for (const node of nodes) {
    slots--; // 消耗一个 slot
    if (slots < 0) return false;
    if (node !== '#') slots += 2; // 非空节点产生两个 slot
  }
  return slots === 0;
}
```

```python
def isValidSerialization(preorder: str) -> bool:
    slots = 1
    for node in preorder.split(','):
        slots -= 1
        if slots < 0: return False
        if node != '#': slots += 2
    return slots == 0
```

---

## 路径总和

### 路径总和 I（判断是否存在）

```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return hasPathSum(root.left, targetSum - root.val) ||
         hasPathSum(root.right, targetSum - root.val);
}
```

```python
def hasPathSum(root, target):
    if not root: return False
    if not root.left and not root.right: return root.val == target
    return hasPathSum(root.left, target - root.val) or hasPathSum(root.right, target - root.val)
```

### 路径总和 II（记录所有路径）

```typescript
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];
  function dfs(node: TreeNode | null, sum: number, path: number[]) {
    if (!node) return;
    path.push(node.val);
    sum += node.val;
    if (!node.left && !node.right && sum === targetSum) res.push([...path]);
    dfs(node.left, sum, path);
    dfs(node.right, sum, path);
    path.pop();
  }
  dfs(root, 0, []);
  return res;
}
```

```python
def pathSum(root, target):
    res = []
    def dfs(node, s, path):
        if not node: return
        path.append(node.val)
        s += node.val
        if not node.left and not node.right and s == target:
            res.append(path[:])
        dfs(node.left, s, path)
        dfs(node.right, s, path)
        path.pop()
    dfs(root, 0, [])
    return res
```

---

## 最大路径和

> **思路：** 后序遍历，维护全局最大值。每棵子树返回"单边最大路径"供父节点拼接。

```typescript
function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity;
  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    const left = Math.max(0, dfs(node.left));  // 负数则不取
    const right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, left + right + node.val); // 跨过当前节点的路径
    return Math.max(left, right) + node.val; // 返回单边最大路径
  }
  dfs(root);
  return maxSum;
}
```

```python
def maxPathSum(root):
    max_sum = -float('inf')
    def dfs(node):
        nonlocal max_sum
        if not node: return 0
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        max_sum = max(max_sum, left + right + node.val)
        return max(left, right) + node.val
    dfs(root)
    return max_sum
```

---

## 右视图

```typescript
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const queue: TreeNode[] = [root];
  const res: number[] = [];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (i === len - 1) res.push(node.val); // 每层最后一个
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
}
```

```python
def rightSideView(root):
    if not root: return []
    q, res = [root], []
    while q:
        for i in range(len(q)):
            node = q.pop(0)
            if i == len(q): res.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
    return res
```

---

## 展开为链表

> **思路：** 后序遍历，先拉平左右子树，再把右子树接到左子树下方。

```typescript
function flatten(root: TreeNode | null): void {
  if (!root) return;
  flatten(root.left);
  flatten(root.right);

  const left = root.left;
  const right = root.right;

  // 左子树移到右边
  root.left = null;
  root.right = left;

  // 原右子树接到新右子树的末端
  let p = root;
  while (p.right) p = p.right;
  p.right = right;
}
```

```python
def flatten(root):
    if not root: return
    flatten(root.left)
    flatten(root.right)

    left, right = root.left, root.right
    root.left = None
    root.right = left

    p = root
    while p.right: p = p.right
    p.right = right
```

---

## BST 迭代器

> **思路：** 用栈模拟中序遍历 — 每次先一路向左入栈，出栈时即为中序下一个。

```typescript
class BSTIterator {
  private stack: TreeNode[] = [];

  constructor(root: TreeNode | null) {
    this.pushLeft(root);
  }

  next(): number {
    const node = this.stack.pop()!;
    this.pushLeft(node.right); // 处理右子树的左侧
    return node.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }

  private pushLeft(node: TreeNode | null): void {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }
}
```

```python
class BSTIterator:
    def __init__(self, root):
        self.stack = []
        self._push_left(root)

    def _push_left(self, node):
        while node:
            self.stack.append(node)
            node = node.left

    def next(self):
        node = self.stack.pop()
        self._push_left(node.right)
        return node.val

    def hasNext(self):
        return len(self.stack) > 0
```

---

## 📊 复杂度速查表

| 操作 | 时间复杂度 | 空间复杂度 | 说明 |
|---|---|---|---|
| LCA | O(n) | O(h) | 后序遍历 |
| BST LCA | O(h) | O(h) | BST 性质 |
| 序列化 | O(n) | O(n) | BFS 层序 |
| 反序列化 | O(n) | O(n) | BFS 构建 |
| 前序验证 | O(n) | O(1) | slot 计数 |
| 路径总和 I | O(n) | O(h) | 递归减 target |
| 路径总和 II | O(n) | O(h) | 回溯记录 |
| 最大路径和 | O(n) | O(h) | 后序 + 全局 |
| 右视图 | O(n) | O(n) | BFS 每层最右 |
| 展开为链表 | O(n) | O(h) | 后序连接 |
| BST 迭代器 | O(1)* | O(h) | *平均 O(1) |

---

> **关联阅读：** `12-binary-tree-traversal.md` → `13-binary-tree-operations.md`
