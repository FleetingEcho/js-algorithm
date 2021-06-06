// 28. 对称的二叉树
/*
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false

! 值不相等，则短路效应
*/
const isMirror = (t1, t2) => {
	if (t1 == null && t2 == null) return true
	if (t1 == null || t2 == null) return false
	return t1.val == t2.val && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
	// 均为true的时候，才返回true
}

var isSymmetric = function (root) {
	return isMirror(root, root)
}

const isSymmetric = (root) => {
	const helper = (a, b) => {
		if (!a && !b) return true
		if (!a || !b) return false
		if (a.val !== b.val) return false
		return helper(a.left, b.right) && helper(a.right, b.left)
	}
	return helper(root, root)
}
