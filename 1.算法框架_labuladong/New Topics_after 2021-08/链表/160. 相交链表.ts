namespace Leetcode160 {
	function getIntersectionNode(headA: Node, headB: Node): Node {
		if (headA === null || headB === null) {
			return null
		}
		let pA: Node = headA,
			pB: Node = headB
		while (pA !== pB) {
			pA = pA === null ? headB : pA.next
			pB = pB === null ? headA : pB.next
		}
		return pA
	}

	// end
	type Node = ListNode | null
	class ListNode {
		val: number
		next: Node
		constructor(val?: number, next?: Node) {
			this.val = val === undefined ? 0 : val
			this.next = next === undefined ? null : next
		}
	}
}
