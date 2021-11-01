// 52. 两个链表的第一个公共节点
// 如果map中有重复值，则直接返回
/* 
时间复杂度是O(N)O(N)，空间复杂度是O(N)O(N)。
*/
var getIntersectionNode = function (headA, headB) {
	const map = new Map()
	let node = headA
	while (node) {
		map.set(node, true)
		node = node.next
	}

	node = headB
	while (node) {
		if (map.has(node)) return node
		node = node.next
	}
	return null
}

/* 
! 快慢指针法
*/
var getIntersectionNode1 = function (headA, headB) {
	let curA = headA
	let curB = headB

	while (curA != curB) {
		curA = curA != null ? curA.next : headB
		curB = curB != null ? curB.next : headA
	}
	return curA
}
