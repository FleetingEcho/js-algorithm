namespace BinaryTreeToTraverse {
	function BTtraverse(root: any) {
		if (root == null) return
		// 前序遍历代码位置
		traverse(root.left)
		// 中序遍历代码位置
		traverse(root.right)
		// 后序遍历代码位置
	}

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
	// 只需把递归算法中的前中后序位置的代码复制粘贴到上述框架的对应位置，就可以把任意递归的二叉树算法改写成迭代形式了。
	// ====================================================
	class TreeNode {
		val: number
		left: TreeNode | null
		right: TreeNode | null
		constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
			this.val = val === undefined ? 0 : val
			this.left = left === undefined ? null : left
			this.right = right === undefined ? null : right
		}
	}

	// ==========================================

	// 例如: 返回二叉树后续遍历的结果

	function postorderTraversal(root: TreeNode) {
		const stk: TreeNode[] = []
		let postOrder: number[] = [] // 记录后序遍历的结果
		let visited = new TreeNode(-1)
		function pushLeftBranch(p: TreeNode | null) {
			while (p) {
				stk.push(p)
				p = p.left
			}
		}
		// 前序遍历
		pushLeftBranch(root)
		while (stk.length !== 0) {
			let p = stk.shift() as TreeNode
			if ((p.left !== null || p.left == visited) && p.right !== visited) {
				pushLeftBranch(p.right)
			}

			if (p.right !== null || p.right === visited) {
				// 后序遍历代码位置
				postOrder.push(p.val)
				visited = stk.pop() as TreeNode
			}
		}
		return postOrder
	}
}
