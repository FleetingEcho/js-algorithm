// 563. 二叉树的坡度
var findTilt = function (root) {
	let sum = 0
	const helper = (root) => {
		if (!root) {
			return 0
		}
		let leftVal = helper(root.left)
		let rightVal = helper(root.right)
		// 到最底层的点了；
		sum += Math.abs(leftVal - rightVal)
		return leftVal + rightVal + root.val
	}
	helper(root)
	return sum
}
