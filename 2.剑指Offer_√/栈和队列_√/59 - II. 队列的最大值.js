// 59 - II. 队列的最大值
/* 
请定义一个队列并实现函数 max_value 得到队列里的最大值，
要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1
*/
/* 
!　辅助队列
*/
var MaxQueue = function () {
	this.queue = []
	this.deque = [] //保证是递减的
}
// [100,2,3,4,5,6,7,8,9]
// max_value 函数中只需要每次从辅助单调队列 deque 取头部值即可，如果没有则返回 -1
MaxQueue.prototype.max_value = function () {
	return this.deque.length > 0 ? this.deque[0] : -1
}

MaxQueue.prototype.push_back = function (value) {
	this.queue.push(value)
	// 将 deque 尾部所有小于该值的元素都剔除，最后将该值放入尾部，保证单调队列递减
	while (this.deque.length > 0 && this.deque[this.deque.length - 1] < value) {
		this.deque.pop()
	}
	this.deque.push(value)
}

// pop_front 函数中首先获取 queue 头部值 head，如果不存在则返回 -1，
// 然后判断 deque 的头部值是否和 head 相等，如果相等则将其头部值也移除

MaxQueue.prototype.pop_front = function () {
	let head = this.queue.length > 0 ? this.queue.shift() : -1
	if (this.deque.length > 0 && this.deque[0] === head) {
		this.deque.shift()
	}
	return head
}
