// 129. 求根到叶子节点数字之和
// DFS
var sumNumbers = function (root) {
	const traverse = (root, preSum) => {
		if (!root) return 0
		const sum = preSum * 10 + root.val
		if (!root.left && !root.right) return sum
		else {
			return traverse(root.left, sum) + traverse(root.right, sum)
		}
	}
	return traverse(root, 0)
}

// BFS
var sumNumbers = function (root) {
	if (root === null) return 0

	let sum = 0
	const nodeQueue = []
	const numQueue = []
	nodeQueue.push(root)
	numQueue.push(root.val)
	let depth = 1
	while (nodeQueue.length !== 0) {
		let sz = nodeQueue.length
		for (let i = 0; i < sz; i++) {
			const node = nodeQueue.shift()
			const num = numQueue.shift()
			// const num = node.val;
			const left = node.left,
				right = node.right
			// 到达终点？
			if (left === null && right === null) {
				sum += num //不能return,因为求的是最终和，需要不断累加，return的话只能求一条路径
			} else {
				// 否则将 相邻节点加入队列；
				if (left !== null) {
					nodeQueue.push(left)
					numQueue.push(num * 10 + left.val)
				}
				if (right !== null) {
					nodeQueue.push(right)
					numQueue.push(num * 10 + right.val)
				}
			}
		}
		depth++
	}
	return sum
}
