// 33. 二叉搜索树的后序遍历序列
/* 
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。
如果是则返回 true，否则返回 false。
假设输入的数组的任意两个数字都互不相同。

left-right-node
      5
    /   \
   2     6
  / \   / \
 1   3 4   10
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,4,10,6,5]
输出: true
*/
/* 

二叉搜索树特点是右子树值永远大于左子树
后序遍历：左子树 -> 右子树 -> 根
取出左子树，取出右子树，判断右子树 和 根相比, 根必须最小，如果不是，则返回false
递归左子树和右子树，直到树中值元素<=2 返回true;
举例[1,6,3,2,5]，分为左子树[1],右子树[6,3,2],根[5],
Math.min(6,3,2,5) !== 5, return false

https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/solution/mian-shi-ti-33-er-cha-sou-suo-shu-de-hou-xu-bian-6/
时间空间复杂度： O(nlogn), O(n)
*/
// ! 递归分治
var verifyPostOrder = function (postOrder) {
	// 如果只有一个节点，直接返回true
	if (postOrder.length <= 1) return true
	const root = postOrder[postOrder.length - 1] // root 为末尾值
	const idx = postOrder.findIndex((item) => item > root)
	const left = postOrder.slice(0, idx) // 取到idx前一位
	const right = postOrder.slice(idx, -1)
	if (Math.min(root, ...right) !== root) return false

	return verifyPostOrder(left) && verifyPostOrder(right)
}

const temp = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(temp.slice(0, 3)) //index==3取不到 [ 0, 1, 2 ]
