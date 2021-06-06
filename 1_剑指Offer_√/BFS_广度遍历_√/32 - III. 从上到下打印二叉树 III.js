// 32 - III. 从上到下打印二叉树 III
/* 
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

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
  [20,9],
  [15,7]
]
*/

var levelOrder = function (root) {
	let res = []
	if (root == null) {
		return res
	}
	let queue = []
	queue.push(root)

	while (queue.length != 0) {
		// list做临时存储使用
		let level = []
		const len = queue.length
		for (let i = 0; i < len; i++) {
			let treeNode = queue.shift()
			// 提取节点
			// =======================
			// level
			// 偶数行则 右-左
			// 注意length为奇数的时候为偶数行，[1,2,3]
			if (res.length % 2 == 0) {
				//第一行开始  左-右
				level.push(treeNode.val)
			} else {
				// 奇数行则  右-左
				level.unshift(treeNode.val)
			}
			// =======================
			if (treeNode.left != null) {
				queue.push(treeNode.left)
			}
			if (treeNode.right != null) {
				queue.push(treeNode.right)
			}
		}
		res.push(level)
	}
	return res
}
