// 完全二叉树的节点个数
function countNodes(root) {
	return root == null ? 0 : countNodes(root.left) + countNodes(root.right) + 1
}

// BFS
function countNodes(root) {
	if (!root) {
		return 0
	}
	let q = []
	let sum = 0
	q.push(root)
	while (q.length !== 0) {
		for (let i = 0; i < q.length; i++) {
			let demo = q.shift()
			sum++
			if (demo.left) q.push(demo.left)
			if (demo.right) q.push(demo.right)
		}
	}
	return sum
}
