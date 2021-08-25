// 9用两个栈实现队列
/* 
用两个栈实现一个队列。队列的声明如下，
请实现它的两个函数 appendTail 和 deleteHead ，
分别完成在队列尾部插入整数和在队列头部删除整数的功能。
(若队列中没有元素，deleteHead 操作返回 -1 )
*/

var CQueue = function () {
	this.stack1 = []
	this.stack2 = []
}
// stack1=[3,2,1];不断push进去，然后想删除头部的3,需要先倒置，再pop删除
// stack2=[1,2,3], 然后pop最后一位即可.
// 只要stack1为[]，就直接return -1即可，
CQueue.prototype.appendTail = function (value) {
	this.stack1.push(value)
}
CQueue.prototype.deleteHead = function () {
	if (this.stack2.length) {
		return this.stack2.pop()
	}
	if (!this.stack1.length) return -1
	while (this.stack1.length) {
		this.stack2.push(this.stack1.pop())
	}
	return this.stack2.pop()
}
