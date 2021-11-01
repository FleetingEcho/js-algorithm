/* 
快慢指针

每当慢指针slow前进一步，快指针fast就前进两步。
如果fast最终遇到空指针，说明链表中没有环；如果fast最终和slow相遇，那肯定是fast超过了slow一圈，说明链表中含有环。



计算环的起点
可以看到，当快慢指针相遇时，让其中任一个指针指向头节点，然后让它俩以相同速度前进，再次相遇时所在的节点位置就是环开始的位置。
*/
namespace Leetcode141 {
	function hasCycle(head: ListNode | null): boolean {
		let fast = head,
			slow = head
		while (fast && fast.next) {
			fast = fast.next.next
			slow = slow!.next
			if (fast == slow) break
		}
		if (fast == null || fast.next == null) {
			// fast 遇到空指针说明没有环
			return false
		}
		return true
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
