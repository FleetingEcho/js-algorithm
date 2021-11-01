namespace LeetCode876 {
	// 快慢指针
	function middleNode(head: ListNode | null): ListNode | null {
		let slow = head,
			fast = head
		while (fast != null && fast.next != null) {
			// 慢指针走一步，快指针走两步
			slow = slow!.next
			fast = fast.next.next
		}
		// 慢指针指向中点
		return slow
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
