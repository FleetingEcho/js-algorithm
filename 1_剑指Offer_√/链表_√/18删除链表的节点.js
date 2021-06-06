// 18删除链表的节点
/* 
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的所有节点值。
*/
// arr数组，val
// [4,5,1,9]
// 使用哨兵节点，循环找到节点，进行删除

var deleteNode = function (head, val) {
	let pre = new ListNode(-1) // 哨兵节点
	pre.next = head

	let node = pre
	while (node.next) {
		if (node.next.val === val) {
			node.next = node.next.next
			break
		}
		node = node.next
	}
	return pre.next
}
