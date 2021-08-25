// 25合并两个排序的链表
/* 
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：
输入：1->2->4, 2->3->4
输出：1->2->2->3->4->4


1->2->5  0->3->4
*/
/* 
! 递归
*/
// 会每次递归先将值return出来
var mergeTwoLists = function (l1, l2) {
	if (l1 === null) return l2
	if (l2 === null) return l1
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2)
		return l1
	} else {
		l2.next = mergeTwoLists(l1, l2.next)
		return l2
	}
}
