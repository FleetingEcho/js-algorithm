// 103.二叉树的锯齿形层序遍历
/* 

给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层序遍历如下：

[
  [3],
  [20,9],
  [15,7]
]

*/

var zigzagLevelOrder = function (root) {
	const res = []
	if (root == null) {
		return res
	}
	let curLevel = [root] // 存放当前层的节点

	while (curLevel.length) {
		const nextLevel = [] // 存放下一层的节点
		const curLevelVals = [] // 存放当前层的节点值

		for (const node of curLevel) {
			// 遍历
			curLevelVals.push(node.val)
			node.left && nextLevel.push(node.left)
			node.right && nextLevel.push(node.right)
		}

		res.push(curLevelVals) // 当前层遍历结束，加入res
		res.length % 2 == 0 && curLevelVals.reverse() // 偶数层进行翻转
		curLevel = nextLevel // 更新
	}

	return res
}
