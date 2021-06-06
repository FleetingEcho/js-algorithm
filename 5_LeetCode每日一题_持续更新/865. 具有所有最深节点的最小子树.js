// 865. 具有所有最深节点的最小子树
function depth(root) {
	if (root == null) return 0
	return Math.max(depth(root.left), depth(root.right)) + 1
}
function subtreeWithAllDeepest(root) {
	if (root == null) return root
	let dl = depth(root.left)
	let dr = depth(root.right)
	if (dl == dr) return root
	if (dl > dr) return subtreeWithAllDeepest(root.left)
	return subtreeWithAllDeepest(root.right)
}
