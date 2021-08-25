package main

func main() {}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func rob(root *TreeNode) int {
	res := dp(root)
	return max(res[0], res[1])
}
func dp(root *TreeNode) []int {
	if root == nil {
		return []int{0, 0}
	}
	left := dp(root.Left)
	right := dp(root.Right)
	// 抢，下两家就不能抢了
	rob := root.Val + left[0] + right[0]
	// 不抢，下家可抢可不抢，取决于收益大小
	not_rob := max(left[0], left[1]) + max(right[0], right[1])
	// [0,1]分别表示左右树的价值

	return []int{not_rob, rob}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b

}
