// 369. 给单链表加一
// 例如  12399 +1  =12400
function plusOne(head) {
	//1.双指针
	let fast = head
	let slow = new ListNode(0)
	slow.next = head

	//2.遍历链表
	while (fast != null) {
		if (fast.val != 9) {
			slow = fast
		}
		// 等于9则不动
		fast = fast.next
	}

	//3.末位加1
	slow.val += 1
	let cur = slow.next
	// 慢指针后面全部设为0
	while (cur != null) {
		cur.val = 0
		cur = cur.next
	}
	return slow.next == head ? slow : head
}
