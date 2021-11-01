// 27. 二叉树的镜像
/*
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
*/

var mirrorTree = function (root) {
	let res = null
	// 只要节点不为null,则节点的值给镜像
	if (root != null) {
		// res先返回，再继续子树
		res = new TreeNode(root.val)
		res.left = mirrorTree(root.right)
		res.right = mirrorTree(root.left)
	}
	return res
}

//
const mirrorTree = (root) => {
	let res = null
	// 必须要有返回值；
	if (!root) return res
	let res = new TreeNode(root.val)
	res.right = mirrorTree(root.left)
	res.left = mirrorTree(root.right)
	return res
}
