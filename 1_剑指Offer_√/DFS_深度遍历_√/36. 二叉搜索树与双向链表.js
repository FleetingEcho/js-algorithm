// 36. 二叉搜索树与双向链表
/* 
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。
要求不能创建任何新的节点，只能调整树中节点指针的指向。
*/
// 中序遍历，   左-中-右   由小到大排序
function treeToDoublyList(root) {
	let pre, head
	if (root == null) return null
	const dfs = (cur) => {
		if (cur == null) return
		dfs(cur.left)
		if (pre != null) pre.right = cur
		else head = cur //pre==null时，说明正在表头
		cur.left = pre
		pre = cur
		dfs(cur.right)
	}
	dfs(root)
	// 头部前驱指向尾部，尾部后继为头部
	head.left = pre
	pre.right = head
	return head
}
