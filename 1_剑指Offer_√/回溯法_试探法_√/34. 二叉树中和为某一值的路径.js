// 34. 二叉树中和为某一值的路径
/* 
输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/

var pathSum = function (root, sum) {
	let path = [],
		res = []
	const recur = (root, tar) => {
		if (root == null) return
		path.push(root.val)
		tar -= root.val
		if (tar == 0 && root.left == null && root.right == null) {
			//注意这里必须是深拷贝，否则path改变,push进去的path也会改变
			res.push(Array.from(path))
		}
		// 遍历到最底部时，由于子节点的子节点为null，直接return,然后自然会pop（）
		recur(root.left, tar)
		recur(root.right, tar)
		path.pop()
	}
	recur(root, sum)
	return res
}

/* 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]

*/
const pathSum = (root, sum) => {
	let path = []
	let res = []
	const helper = (root, sum) => {
		if (!root) return
		sum -= root.val
		path.push(root.val)
		if (sum === 0 && !root.left && !root.right) res.push(Array.from(path))

		helper(root.left, sum)
		helper(root.right, sum)
		//! 到底部也没有return时需要pop最后一位
		path.pop()
	}
	return helper(root, sum)
}
