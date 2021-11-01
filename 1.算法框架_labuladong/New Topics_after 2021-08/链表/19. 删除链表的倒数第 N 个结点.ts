namespace Leetcode19 {
	function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
		const guard = new ListNode(0, head)
		let first = head,
			second: ListNode | null = guard
		for (let i = 0; i < n; i++) {
			first = first!.next
		}
		while (first) {
			second = second!.next
			first = first.next
		}
		second!.next = second!.next!.next
		return guard.next
	}

	class ListNode {
		val: number
		next: ListNode | null
		constructor(val?: number, next?: ListNode | null) {
			this.val = val === undefined ? 0 : val
			this.next = next === undefined ? null : next
		}
	}
}

namespace Leetcode19_2 {
	function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
		// 虚拟头节点
		let dummy = new ListNode(-1)
		dummy.next = head
		// 删除倒数第 n 个，要先找倒数第 n + 1 个节点
		let x = findFromEnd(dummy, n + 1)
		if (x) {
			x.next = x.next!.next
		}
		return dummy.next
	}

	// 返回链表的倒数第 k 个节点
	function findFromEnd(head: ListNode | null, k: number): ListNode | null {
		let p1 = head
		// p1 先走 k 步
		for (let i = 0; i < k; i++) {
			p1 = p1!.next
		}
		let p2 = head
		// p1 和 p2 同时走 n - k 步
		while (p1 != null) {
			p2 = p2!.next
			p1 = p1.next
		}
		// p2 现在指向第 n - k 个节点
		return p2
	}

	class ListNode {
		val: number
		next: ListNode | null
		constructor(val?: number, next?: ListNode | null) {
			this.val = val === undefined ? 0 : val
			this.next = next === undefined ? null : next
		}
	}
}
