/* 
86. 分隔链表
给你一个链表和一个特定值 x ，请你对链表进行分隔，使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

 

示例：

输入：head = 1->4->3->2->5->2, x = 3
输出：1->2->2->4->3->5

*/

const partition = function (head, x) {
	let pA = (a = new ListNode(0)),
		pB = (b = new ListNode(0))
	while (head) {
		head.val < x ? (a = a.next = head) : (b = b.next = head)
		head = head.next
	}
	a.next = pB.next
	b.next = null
	return pA.next
}
