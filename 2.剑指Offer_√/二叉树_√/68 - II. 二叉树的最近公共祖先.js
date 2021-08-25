// 68 - II. 二叉树的最近公共祖先
const lowestCommonAncestor = (root, p, q) => {
	if (root == null || root == p || root == q) {
		return root
	}
	left = lowestCommonAncestor(root.left, p, q)
	right = lowestCommonAncestor(root.right, p, q)
	if (!left && !right) {
		return null
	} else if (!left && right) {
		return right
	} else if (left && !right) {
		return left
	} else {
		// 左右均不为空，则root就是left,right的root
		return root
	}
}
