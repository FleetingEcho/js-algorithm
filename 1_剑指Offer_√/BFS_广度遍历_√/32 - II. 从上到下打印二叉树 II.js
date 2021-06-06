// 32 - II. 从上到下打印二叉树 II
/* 
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，
每一层打印到一行。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
*/

var levelOrder = function (root) {
	// queue做临时存储使用
	let queue = []
	let res = []
	if (root == null) {
		return res
	}
	queue.push(root)
	while (queue.length != 0) {
		//level做每层临时存储用
		let level = []
		const len = queue.length
		for (let i = 0; i < len; i++) {
			// 核心不变
			let node = queue.shift()
			// 左---右
			level.push(node.val)
			if (node.left != null) {
				queue.push(node.left)
			}
			if (node.right != null) {
				queue.push(node.right)
			}
		}
		// 每一层push进去
		res.push(level)
	}
	return res
}

const levelOrder = (root) => {
	if (!root) return []
	let res = []
	let queue = []
	queue.push(root)
	while (queue.length !== 0) {
		const total = queue.length
		let level = []
		for (let i = 0; i < total; i++) {
			const cur = queue.shift()
			level.push(cur.val)
			// 齐步走，一次补充整层的数据
			if (cur.left) queue.push(cur.left)
			if (cur.right) queue.push(cur.right)
		}
		res.push(level)
	}
	return res
}
