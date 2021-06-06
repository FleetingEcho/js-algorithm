// 445.两数相加ll

// 出栈相加。并且>10则下一位补位
function addTwoNumbers(l1, l2) {
	// 利用栈的先进后出原则实现加法
	let stack1 = []
	let stack2 = []

	// 将链表数据入栈，栈顶为低位
	while (l1 != null || l2 != null) {
		if (l1 != null) {
			stack1.push(l1.val)
			l1 = l1.next
		}
		if (l2 != null) {
			stack2.push(l2.val)
			l2 = l2.next
		}
	}

	let num1 = 0
	let num2 = 0

	// 存储进位数据
	let carry = 0

	// 最终结果
	let result = null

	// 出栈，出栈过程是计算相对低位数据的过程
	while (stack1.length !== 0 || stack2.length !== 0 || carry == 1) {
		num1 = stack1.length === 0 ? 0 : stack1.pop()
		num2 = stack2.length === 0 ? 0 : stack2.pop()
		let listNode = new ListNode(0)

		// 有进位的情况
		if (num1 + num2 + carry > 9) {
			listNode.val = num1 + num2 + carry - 10
			carry = 1 //设置进位
		} else {
			// 无进位
			listNode.val = num1 + num2 + carry
			carry = 0
		}
		//   要反转链表
		// 原有高位降一位
		listNode.next = result
		// 设置最新高位
		result = listNode
	}

	return result
}
