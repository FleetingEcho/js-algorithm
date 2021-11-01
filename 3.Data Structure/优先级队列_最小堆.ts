namespace PriorityQueue_DS {
	class Node {
		public val: any
		public priority: number
		constructor(val: any, priority: number) {
			this.val = val
			this.priority = priority
		}
	}
	class PriorityQueue {
		public list: Node[] = []
		constructor() {
			this.list = []
		}

		enqueue(val: any, priority: number) {
			let node = new Node(val, priority)
			this.list.push(node)
			this.bubbleUp()
		}
		len = () => this.list.length

		dequeue() {
			let max = this.list[0]
			let end = this.list.pop() as Node
			if (this.len()) {
				this.list[0] = end
				this.bubbleDown()
			}
			return max.val
		}

		isEmpty = () => this.list.length === 0

		bubbleUp(index = this.len() - 1) {
			if (index <= 0) return
			let parentIndex = Math.floor((index - 1) / 2)
			const curNode = this.list[index]
			const parentNode = this.list[parentIndex]
			if (curNode.priority <= parentNode.priority) {
				;[this.list[index], this.list[parentIndex]] = [parentNode, curNode]
				this.bubbleUp(parentIndex)
			}
		}

		bubbleDown(index = 0, swapIndex: number | null = null) {
			const leftIndex = index * 2 + 1,
				rightIndex = index * 2 + 2,
				length = this.len()
			const curNode = this.list[index],
				leftNode = this.list[leftIndex],
				rightNode = this.list[rightIndex]
			// ===
			if (leftIndex < length) {
				if (leftNode.priority <= curNode.priority) {
					swapIndex = leftIndex
				}
			}

			if (rightIndex < length) {
				if (
					(swapIndex === null && rightNode.priority <= curNode.priority) ||
					(swapIndex !== null && rightNode.priority <= leftNode.priority)
				) {
					swapIndex = rightIndex
				}
			}
			if (swapIndex !== null) {
				const swapNode = this.list[swapIndex]
				;[this.list[index], this.list[swapIndex]] = [swapNode, curNode]
				this.bubbleDown(swapIndex, null)
			}
		}
	}
}
