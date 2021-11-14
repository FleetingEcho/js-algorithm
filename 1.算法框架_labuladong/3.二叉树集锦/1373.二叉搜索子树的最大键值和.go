package main

import "math"

func main() {}

// 全局变量，记录 BST 最大节点之和
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxSumBST(root *TreeNode) int {
	var maxSum = 0
	var traverse func(root *TreeNode, maxSum *int) []int
	traverse(root, &maxSum)
	traverse = func(root *TreeNode, maxSum *int) []int {
		// base case
		if root == nil {
			return []int{1, math.MaxInt64, math.MinInt64, 0}
		}
		// 递归计算左右子树
		left := traverse(root.Left, maxSum)
		right := traverse(root.Right, maxSum)

		/******* 后序遍历位置 *******/
		res := make([]int, 4)
		// 这个 if 在判断以 root 为根的二叉树是不是 BST
		if left[0] == 1 && right[0] == 1 && root.Val > left[2] && root.Val < right[1] {
			res[0] = 1                             // 是否为二叉树
			res[1] = myMin(left[1], root.Val)      // 计算以 root 为根的这棵 BST 的最小值
			res[2] = myMax(right[2], root.Val)     // 计算以 root 为根的这棵 BST 的最大值
			res[3] = left[3] + right[3] + root.Val //BST 所有节点之和
			*maxSum = myMax(*maxSum, res[3])       // 更新全局变量
		}
		// 以 root 为根的二叉树不是 BST
		//else的 其他的值都没必要计算了，因为用不到
		return res
	}

	return maxSum
}

func myMin(a, b int) int {
	if a < b {
		return a
	}
	return b
}
func myMax(a, b int) int {
	if a > b {
		return a
	}
	return b
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
