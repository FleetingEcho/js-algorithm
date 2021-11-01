namespace Leetcode142 {
	function detectCycle(head: ListNode | null): ListNode | null {
		let fast = head,
			slow = head
		while (fast && fast.next) {
			fast = fast.next.next
			slow = slow!.next
			if (fast == slow) break
		}
		if (fast == null || fast.next == null) {
			// fast 遇到空指针说明没有环
			return null
		}
		// 重新指向头结点
		slow = head
		// 快慢指针同步前进，相交点就是环起点
		while (slow != fast) {
			fast = fast!.next
			slow = slow!.next
		}
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
