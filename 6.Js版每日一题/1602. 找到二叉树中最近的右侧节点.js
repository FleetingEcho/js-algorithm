// 1602. 找到二叉树中最近的右侧节点
/* 
给定一棵二叉树的根节点 root 和树中的一个节点 u ，返回与 u 所在层中距离最近的右侧节点，当 u 是所在层中最右侧的节点，返回 null 。

输入: root = [1,2,3,null,4,5,6], u = 4
输出: 5
解释: 节点 4 所在层中，最近的右侧节点是节点 5。

输入: root = [3,null,4,2], u = 2
输出: null
解释: 2 的右侧没有节点。

*/

//BFS
function findNearestRightNode(root, u) {
	let q = [root]
	while (q.length !== 0) {
		let size = q.length
		for (let i = 0; i < size; ++i) {
			let cur = q.shift()
			// 如果是该层最后一个节点，说明没有右侧节点了，则返回null；
			if (cur == u) return i === size - 1 ? null : q.shift()
			if (cur.left) q.push(cur.left)
			if (cur.right) q.push(cur.right)
		}
	}

	return null
}
