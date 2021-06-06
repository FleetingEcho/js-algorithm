// 116. 填充每个节点的下一个右侧节点指针

// 前提：完全二叉树
function connect(root) {
	if (root == null) return null
	connectTwoNode(root.left, root.right)
	return root
}

// 定义：输入两个节点，将它俩连接起来
function connectTwoNode(node1, node2) {
	if (node1 == null || node2 == null) {
		return
	}
	/**** 前序遍历位置 ****/
	// 将传入的两个节点连接
	node1.next = node2

	// 连接相同父节点的两个子节点
	connectTwoNode(node1.left, node1.right)
	connectTwoNode(node2.left, node2.right)
	// 连接跨越父节点的两个子节点
	connectTwoNode(node1.right, node2.left)
}
