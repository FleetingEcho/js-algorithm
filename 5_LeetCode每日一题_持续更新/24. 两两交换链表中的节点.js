// 24. 两两交换链表中的节点
// 递归
function swapPairs(head) {
	if (head == null || head.next == null) {
		return head
	}
	let temp = head.next
	head.next = swapPairs(temp.next) //相信3之后直接调换好了
	temp.next = head
	return temp
}

// 哨兵节点

/* 
      |-------|
      |___    |
      |   |   |
prev  1   2   3     4
|         |
|_________|

图解
https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/24-liang-liang-jiao-huan-lian-biao-zhong-de-jie-58/
*/
const swapPairs = (head) => {
	const dummy = new ListNode(0)
	dummy.next = head
	let prev = dummy

	while (head && head.next) {
		const temp = head.next // 临时保存head.next，因为head.next待会要改变
		head.next = temp.next
		temp.next = head
		prev.next = temp

		prev = head // 指针更新
		head = head.next // 指针更新
	}
	return dummy.next
}
