// 22.链表中倒数的第K个节点
/* 
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，
即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，
它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//栈方法
var getKthFromEnd = function (head, k) {
	var stack = []
	var ans = []
	//所有节点入栈
	while (head) {
		stack.push(head)
		head = head.next
	}
	//出栈第k个节点
	while (k > 0) {
		ans = stack.pop()
		k--
	}
	return ans
}

/* 
! 双指针法
给定一个链表: 1->2->3->4->5, 和 k = 2.
*/
var getKthFromEnd = function (head, k) {
	let p = head,
		q = head
	// 从i>=k时候 q开始走，等p结束q刚好走到最后的第K位
	let i = 0
	while (p) {
		if (i >= k) {
			q = q.next
		}
		p = p.next
		i++
	}
	return i < k ? null : q
}
