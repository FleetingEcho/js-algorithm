package leetcode655

import "strconv"

// 对当前传入的数，如果是空树，则返回。
// 我们获得当前可填充范围，计算出中位数mid，在二维数组的[h][mid]填充节点值，
// 然后递归对左节点，右节点调用fill方法。
func main() {}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func getHeight(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return max(getHeight(root.Left), getHeight(root.Right)) + 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func printTree(root *TreeNode) [][]string {
	h := getHeight(root)
	w := (1 << h) - 1
	ans := make([][]string, h)
	for i := range ans {
		ans[i] = make([]string, w)
	}
	//start filling
	var fill func(root *TreeNode, h, l, r int)
	fill = func(root *TreeNode, h, l, r int) {
		if root == nil {
			return
		}
		mid := l + (r-l)/2
		ans[h][mid] = strconv.Itoa(root.Val)
		fill(root.Left, h+1, l, mid-1)
		fill(root.Right, h+1, mid+1, r)
	}

	fill(root, 0, 0, w-1)
	return ans
}
