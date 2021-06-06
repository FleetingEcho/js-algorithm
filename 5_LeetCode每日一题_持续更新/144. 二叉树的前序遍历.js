// 144. 二叉树的前序遍历
/* 
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]

*/
var preorderTraversal = function (root) {
	if (!root) return []
	const res = []
	const helper = (root) => {
		if (!root) return
		res.push(root.val)
		helper(root.left)
		helper(root.right)
		return res
	}
	return helper(root)
}
