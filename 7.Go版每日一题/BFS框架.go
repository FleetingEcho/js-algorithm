package main

func main() {}

/*
    3
   / \
  9  20
    /  \
   15   7
*/
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/*

 */
// 剑指 Offer 55 - I. 二叉树的深度
// [3,9,20,null,null,15,7]
// reflect.DeepEqual(m1, m2) 比较两个map
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	queue := []*TreeNode{root}
	depth := 1
	for len(queue) != 0 {
		length := len(queue)
		for i := 0; i < length; i++ {
			// fmt.Printf("%T", queue)
			cur := queue[0]
			queue = queue[1:]
			if cur.Left == nil && cur.Right == nil {
				return depth
			}
			// if cur.Left == (&TreeNode{}) && cur.Right == (&TreeNode{}) {
			// 	return depth
			// }
			if cur.Left != nil {
				queue = append(queue, cur.Left)
			}
			if cur.Right != nil {
				queue = append(queue, cur.Right)
			}
		}
		depth++
	}
	return depth
}

/*
func isSameTree(p *TreeNode, q *TreeNode) bool {
	return reflect.DeepEqual(p, q)
}
*/
