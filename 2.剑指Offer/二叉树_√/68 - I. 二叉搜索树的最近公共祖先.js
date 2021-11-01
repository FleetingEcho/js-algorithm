// 68 - I. 二叉搜索树的最近公共祖先
/* 
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，
最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
*/

// 递归===========
const lowestCommonAncestor = (root, p, q) => {
	while (true) {
		if (root.val > p.val && root.val > q.val) {
			root = root.left
		} else if (root.val < p.val && root.val < q.val) {
			root = root.right
		} else {
			//此时 root.val===p.val
			return root
		}
	}
}

const lowestCommonAncestor = (root, p, q) => {
	function helper(root, p, q) {
		if (!root) return root
		if (root.val === p || root.val === q) return root
		if (root.val > p.val && root.val > q.val) helper(root.left, p, q)
		else if (root.val < p.val && root.val < q.val) helper(root.right, p, q)
	}
	return helper(root, p, q)
}
