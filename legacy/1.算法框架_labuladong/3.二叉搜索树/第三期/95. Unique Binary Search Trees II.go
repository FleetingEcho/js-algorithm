package main

func main() {

}

/*

明白了上道题构造合法 BST 的方法，这道题的思路也是一样的：
1、穷举root节点的所有可能。
2、递归构造出左右子树的所有合法 BST。
3、给root节点穷举所有左右子树的组合。
*/
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func generateTrees(n int) []*TreeNode {
	if n == 0 {
		return []*TreeNode{}
	}
	// 构造闭区间 [1, n] 组成的 BST
	return build(1, n)
}

/* 构造闭区间 [lo, hi] 组成的 BST */
func build(lo, hi int) []*TreeNode {
	res := []*TreeNode{}
	// base case
	if lo > hi {
		return []*TreeNode{nil}
	}

	// 1、穷举 root 节点的所有可能。
	for i := lo; i <= hi; i++ {
		// 2、递归构造出左右子树的所有合法 BST。
		leftTree := build(lo, i-1)
		rightTree := build(i+1, hi)
		// 3、给 root 节点穷举所有左右子树的组合。
		for _, left := range leftTree {
			for _, right := range rightTree {
				root := &TreeNode{i, left, right}
				res = append(res, root)
			}
		}
	}
	return res
}
