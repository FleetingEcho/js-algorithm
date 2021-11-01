namespace Leetcode21 {
	class ListNode {
		val: number
		next: ListNode | null
		constructor(val?: number, next?: ListNode | null) {
			this.val = val === undefined ? 0 : val
			this.next = next === undefined ? null : next
		}
	}

	function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
		if (!l1) return l2
		if (!l2) return l1
		if (l1.val < l2.val) {
			l1.next = mergeTwoLists(l1.next, l2)
			return l1
		} else {
			l2.next = mergeTwoLists(l2.next, l1)
			return l2
		}
	}

	// 虚拟头节点，有了dummy节点这个占位符，可以避免处理空指针的情况，降低代码的复杂性。
	function mergeTwoLists2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
		const dummy = new ListNode(-1) // 虚拟头结点
		let p = dummy
		let p1 = l1,
			p2 = l2

		while (p1 && p2) {
			// 比较 p1 和 p2 两个指针
			if (p1.val > p2.val) {
				// 将值较小的的节点接到 p 指针
				p.next = p2
				p2 = p2.next
			} else {
				p.next = p1
				p1 = p1.next
			}
			// p 指针不断前进
			p = p.next
		}
		if (p1 != null) p.next = p1
		if (p2 != null) p.next = p2
		return dummy.next
	}

	// end
}
