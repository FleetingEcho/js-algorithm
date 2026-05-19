一套二叉树通用迭代遍历框架。

遍历 入栈出栈过程

![image-入栈出栈动图](https://mmbiz.qpic.cn/sz_mmbiz_gif/gibkIz0MVqdHXoicHeiaMwypjFRc6R7yw296MZKk18SJPNX43sAS0fElR4hpOib5HREYT5tcmt993jvKfyLoSerNicw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

简单说就是这样一个流程：

**1、拿到一个节点，就一路向左遍历（因为`traverse(root.left)`排在前面），把路上的节点都压到栈里**。

**2、往左走到头之后就开始退栈，看看栈顶节点的右指针，非空的话就重复第 1 步**。

### 迭代代码框架

```tsx
// 一套二叉树通用迭代遍历框架。

// 模拟函数调用栈
const stk: TreeNode[] = []

// 左侧树枝一撸到底
function pushLeftBranch(p: TreeNode | null) {
	while (p != null) {
		/** 前序遍历代码位置 **/
		stk.push(p)
		p = p.left
	}
}
// visited指针初始化指向一个新 new 出来的二叉树节点，相当于一个特殊值，目的是避免和输入二叉树中的节点重复。
function traverse(root: TreeNode) {
	// 指向上一次遍历完的子树根节点
	let visited = new TreeNode(-1) //记录最近一次遍历完的子树根节点（最近一次 pop 出栈的节点）
	// 开始遍历整棵树
	pushLeftBranch(root)

	while (stk.length !== 0) {
		let p = stk.shift() as TreeNode

		// p 的左子树被遍历完了，且右子树没有被遍历过
		if ((p.left === null || p.left === visited) && p.right !== visited) {
			/** 中序遍历代码位置 **/
			pushLeftBranch(p.right)
		}
		// p 的右子树被遍历完了
		if (p.right === null || p.right === visited) {
			/** 后序遍历代码位置 **/
			// 以 p 为根的子树被遍历完了，出栈
			// visited 指针指向 p
			visited = stk.pop() as TreeNode
		}
	}
}
```
