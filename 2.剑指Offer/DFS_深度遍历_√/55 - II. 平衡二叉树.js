// 55 - II. 平衡二叉树
/* 
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
如果某二叉树中任意节点的左右子树的深度相差不超过1，
那么它就是一棵平衡二叉树。

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
*/
const isBalanced = (root) => {
	// 1. 设置结果集
	let result = true

	// 3. 递归
	const recursion = (root) => {
		// 3.1 如果没有下一个节点了，返回 0
		if (!root) {
			return 0
		}
		// 3.2 当前层 + 1
		const left = recursion(root.left) + 1
		const right = recursion(root.right) + 1
		// 3.3 比较两棵树的深度
		if (Math.abs(left - right) > 1) {
			result = false
		}
		// 3.4 返回这棵树最深的深度
		return Math.max(left, right)
	}
	// 2. 递归这棵树
	recursion(root)

	// 4. 返回结果
	return result
}
const isBalanced = (root) => {
	const helper = (root) => {
		if (!root) return 0
		let left = helper(root.left) + 1
		let right = helper(root.right) + 1
		if (Math.abs(left - right) > 1) return false
		// 需要返回子树最深的深度；
		return Math.max(left, right)
	}
	return helper(root)
}

// ==============方法2
var isBalanced = function (root) {
	if (!root) return true
	let left = dfs(root.left)
	let right = dfs(root.right)
	if (Math.abs(right - left) > 1) return false
	return isBalanced(root.left) && isBalanced(root.right)
}
/** 获取深度 */
function dfs(root) {
	if (!root) return 0
	// 进入下一层
	return Math.max(dfs(root.left) + 1, dfs(root.right) + 1)
}
