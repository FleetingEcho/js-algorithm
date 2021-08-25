// 30. 包含 min 函数的栈
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的
//  min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
/* 
! 方法：  辅助栈

[-200,10,0,-3]
*/

var MinStack = function () {
	this.stack1 = []
	this.stack2 = []
}

MinStack.prototype.push = function (x) {
	this.stack1.push(x)
	if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
		this.stack2.push(x)
	}
}

MinStack.prototype.pop = function () {
	if (this.stack1.pop() == this.stack2[this.stack2.length - 1]) {
		this.stack2.pop()
	}
}

// top返回栈顶值
MinStack.prototype.top = function () {
	return this.stack1[this.stack1.length - 1]
}

MinStack.prototype.min = function () {
	return this.stack2[this.stack2.length - 1]
}
