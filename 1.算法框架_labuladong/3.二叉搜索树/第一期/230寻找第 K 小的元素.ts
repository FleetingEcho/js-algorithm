namespace LeetCode230_1 {
	function kthSmallest(root: TreeNode, k: number) {
		let res = 0
		let rank = 0
		const traverse = (root: TreeNode, k: number) => {
			if (!root) return
			traverse(root.left, k)
			rank++
			if (k == rank) {
				res = root.val
				return
			}
			traverse(root.right, k)
		}
		traverse(root, k)
		return res
	}
}
