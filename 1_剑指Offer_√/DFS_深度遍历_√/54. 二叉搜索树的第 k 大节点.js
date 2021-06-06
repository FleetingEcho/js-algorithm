// 54. 二叉搜索树的第 k 大节点
/* 
给定一棵二叉搜索树，请找出其中第k大的节点。

! 树的深度遍历
将中序遍历按照右、中、左遍历即可---即可得到由大到小的数组

*时间复杂度 O(n)，空间复杂度：O(1)
*/
// !

var kthLargest = function (root, k) {
	let count = 1
	let res
	const helper = (root) => {
		if (!root) return
		helper(root.left)
		if (count === k) return (res = root.val)
		else count++
		helper(root.right)
	}
	helper(root)
	return res
}
