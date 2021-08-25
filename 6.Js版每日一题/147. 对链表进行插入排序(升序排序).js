// 147. 对链表进行插入排序(升序排序)
/* 
输入: -1->5->3->4->0
输出: -1->0->3->4->5
*/
// 哨兵节点，每次都从头向后遍历一遍，把新值增加到该有的地方。
// 从小到大排序

const insertionSortList = (head) => {
	const guard = new ListNode(-100)

	while (head) {
		let nextNode = head.next
		let cur = guard
		// 从小到大
		while (cur.next !== null && cur.next.val < head.val) {
			cur = cur.next
		}
		/* 
    例如将10->7>9插入  12->11->8->3;
    12->11->(10)->8->3
    下一轮遍历7->9
    */
		head.next = cur.next
		cur.next = head
		head = nextNode
	}
	return guard.next
}
