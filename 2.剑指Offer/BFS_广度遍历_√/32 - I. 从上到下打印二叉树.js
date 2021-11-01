// 32 - I. 从上到下打印二叉树
/* 
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]

时间复杂度 O(n)，空间复杂度：O(n)
*/

var levelOrder = function (root) {
	if (root == null) {
		return []
	}
	let queue = []
	queue.push(root)
	let res = []
	// 每次unshift()出来取值后，查看是否有子树值，有的话加入队列
	while (queue.length != 0) {
		let node = queue.shift()
		res.push(node.val)
		if (node.left != null) {
			queue.push(node.left)
		}
		if (node.right != null) {
			queue.push(node.right)
		}
	}
	return res
}

const levelOrder = (root) => {
	// base case
	if (root === null) return []
	let res = []
	let queue = []
	queue.push(root)
	while (queue.length !== 0) {
		const cur = queue.shift()
		res.push(cur.val)
		if (cur.left) {
			queue.push(cur.left)
		}
		if (cur.right) {
			queue.push(cur.right)
		}
	}
}

// DFS写法，需要对BFS进行修改，因为DFS是单打独斗， BFS每次是一层
const levelOrder = (root) => {
	// base case
	if (root === null) return []
	const res = []
	const helper = (root, level) => {
		if (!root) return
		if (res.length === level) {
			res.push([])
		}
		res[level].push(root.val)
		helper(root.left, level + 1)
		helper(root.right, level + 1)

		const newRes = []
		for (let i of res) {
			for (let j of res[i]) {
				newRes.push(j)
			}
		}
		return newRes
	}
	return helper(root, 0)
}
