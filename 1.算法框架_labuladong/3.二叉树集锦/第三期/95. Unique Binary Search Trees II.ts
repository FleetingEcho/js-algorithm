namespace LeetCode95 {
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
	/* 

明白了上道题构造合法 BST 的方法，这道题的思路也是一样的：

1、穷举root节点的所有可能。

2、递归构造出左右子树的所有合法 BST。

3、给root节点穷举所有左右子树的组合。
*/
	function generateTrees(n: number): Array<TreeNode | null> {
		if (n == 0) return []
		// 构造闭区间 [1, n] 组成的 BST
		return build(1, n)
	}

	/* 构造闭区间 [lo, hi] 组成的 BST */
	function build(lo: number, hi: number) {
		let res: any[] = []
		// base case
		if (lo > hi) {
			res.push(null)
			return res
		}

		// 1、穷举 root 节点的所有可能。
		for (let i = lo; i <= hi; i++) {
			// 2、递归构造出左右子树的所有合法 BST。
			let leftTree = build(lo, i - 1)
			let rightTree = build(i + 1, hi)
			// 3、给 root 节点穷举所有左右子树的组合。
			for (let left of leftTree) {
				for (let right of rightTree) {
					// i 作为根节点 root 的值
					let root = new TreeNode(i)
					root.left = left
					root.right = right
					res.push(root)
				}
			}
		}
		return res
	}
}
