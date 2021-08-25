var distanceK = function (root, target, k) {
	const parents = new Map()
	const ans = []

	const findParents = (node) => {
		if (node.left != null) {
			parents.set(node.left.val, node)
			findParents(node.left)
		}
		if (node.right != null) {
			parents.set(node.right.val, node)
			findParents(node.right)
		}
	}

	// 从 root 出发 DFS，记录每个结点的父结点
	findParents(root)

	const findAns = (node, from, depth, k) => {
		if (node == null) {
			return
		}
		if (depth === k) {
			ans.push(node.val)
			return
		}
		if (node.left !== from) {
			findAns(node.left, node, depth + 1, k)
		}
		if (node.right !== from) {
			findAns(node.right, node, depth + 1, k)
		}
		if (parents.get(node.val) !== from) {
			findAns(parents.get(node.val), node, depth + 1, k)
		}
	}
	// 从 target 出发 DFS，寻找所有深度为 k 的结点
	findAns(target, null, 0, k)

	return ans
}
