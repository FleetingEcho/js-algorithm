namespace LeetCode1373 {
	// 全局变量，记录 BST 最大节点之和

	/* 主函数 */
	function maxSumBST(root: TreeNode) {
		let maxSum = 0
		function traverse(root: TreeNode): number[] {
			// base case
			if (!root) {
				return [1, Infinity, -Infinity, 0]
			}
			// 递归计算左右子树
			const left = traverse(root.left)
			const right = traverse(root.right)

			/******* 后序遍历位置 *******/
			const res = new Array(4).fill(0)
			// 这个 if 在判断以 root 为根的二叉树是不是 BST
			if (left[0] === 1 && right[0] === 1 && root.val > left[2] && root.val < right[1]) {
				res[0] = 1 // 是否为二叉树
				res[1] = Math.min(left[1], root.val) // 计算以 root 为根的这棵 BST 的最小值
				res[2] = Math.max(right[2], root.val) // 计算以 root 为根的这棵 BST 的最大值
				res[3] = left[3] + right[3] + root.val //BST 所有节点之和
				maxSum = Math.max(maxSum, res[3]) // 更新全局变量
			}
			// 以 root 为根的二叉树不是 BST
			//else的 其他的值都没必要计算了，因为用不到

			return res
		}
		traverse(root)
		return maxSum
	}
}
/* 
  
  根据以上三点，站在当前节点的视角，需要知道以下具体信息：
1、左右子树是否是 BST。
2、左子树的最大值和右子树的最小值。
3、左右子树的节点值之和。

这道题为什么用后序遍历呢，因为我们需要的这些变量都是可以通过后序遍历得到的。

你计算以root为根的二叉树的节点之和，是不是可以通过左右子树的和加上root.val计算出来？

你计算以root为根的二叉树的最大值/最小值，是不是可以通过左右子树的最大值/最小值和root.val比较出来？

你判断以root为根的二叉树是不是 BST，是不是得先判断左右子树是不是 BST？是不是还得看看左右子树的最大值和最小值？

文章开头说过，如果当前节点要做的事情需要通过左右子树的计算结果推导出来，就要用到后序遍历。
*/
