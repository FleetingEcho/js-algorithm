namespace Leetcode237 {
	function deleteNode(node: ListNode | null): void {
		if (node) {
			node.val = node.next!.val
			node.next = node.next!.next
		}
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
