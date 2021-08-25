package mian

func main() {}

// 95. 不同的二叉搜索树 II
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/*
对于连续整数序列[left, right]中的一点i，若要生成以i为根节点的BST，则有如下规律：
i左边的序列可以作为左子树结点，且左儿子可能有多个，所以有vector<TreeNode *> left_nodes = generate(left, i - 1);；
i右边的序列可以作为右子树结点，同上所以有vector<TreeNode *> right_nodes = generate(i + 1, right);；
产生的以当前i为根结点的BST（子）树有left_nodes.size() * right_nodes.size()个，遍历每种情况，即可生成以i为根节点的BST序列；
然后以for循环使得[left, right]中每个结点都能生成子树序列。

*/
func generateTrees(n int) []*TreeNode {
	if n == 0 {
		return nil
	}
	return helper(1, n)
}

func helper(start, end int) []*TreeNode {
	if start > end {
		return []*TreeNode{nil}
	}
	allTrees := []*TreeNode{}
	// 枚举可行根节点
	for i := start; i <= end; i++ {
		// 获得所有可行的左子树集合
		leftTrees := helper(start, i-1)
		// 获得所有可行的右子树集合
		rightTrees := helper(i+1, end)
		// 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
		for _, left := range leftTrees {
			for _, right := range rightTrees {
				currTree := &TreeNode{i, nil, nil}
				currTree.Left = left
				currTree.Right = right
				allTrees = append(allTrees, currTree)
			}
		}
	}
	return allTrees
}
