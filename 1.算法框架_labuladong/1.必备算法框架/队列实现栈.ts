namespace QueueToStack {
	class MyStack {
		public queue: number[]
		constructor() {
			this.queue = []
		}
		push = function (data: number) {
			queue.push(data)
		}
		pop = function () {
			let res = []
			// 删除了栈顶元素
			for (let i = 0; i < this.queue.length - 1; i++) {
				res.push(this.queue[i])
			}
			let r = this.queue[this.queue.length - 1]
			this.queue = res
			return r
		}
		top = function () {
			if (this.queue.length === 0) {
				return null
			}
			return this.queue[this.queue.length - 1]
		}
		empty = function () {
			return this.queue.length === 0
		}
	}
}
