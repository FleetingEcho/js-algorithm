// 98. 验证二叉搜索树
var isValidBST = function (root) {
	let min = Number.MIN_SAFE_INTEGER
	let max = Number.MAX_SAFE_INTEGER
	return dfs(root, min, max)
}

function dfs(root, min, max) {
	if (!root) return true
	if (root.val >= max || root.val <= min) return false
	return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
}

// ======================

function isValidBST(root, min = null, max = null) {
	if (!root) return true
	if (min && min.val >= root.val) return false
	if (max && max.val <= root.val) return false
	return isValidBST(root.left, min, root) && isValidBST(root.right, root, max)
}
