// 1026. 节点与其祖先之间的最大差值
var maxAncestorDiff = function (root) {
	// BASE
	if (!root) return 0
	let res = Number.MIN_SAFE_INTEGER
	const dfs = (root, max, min) => {
		if (!root) return
		max = Math.max(root.val, max)
		min = Math.min(root.val, min)
		// 到达最深层节点
		if (!root.left && !root.right) {
			res = Math.max(res, Math.abs(max - min))
		}
		dfs(root.left, max, min)
		dfs(root.right, max, min)
	}
	dfs(root, root.val, root.val)
	return res
}
