namespace Leetcode23QuickMerge {
	function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
		const len = lists.length
		if (len < 1) {
			return null
		}
		if (len === 1) {
			return lists[0]
		}
		let mid = Math.floor(len / 2)
		let head: Array<List> = [],
			tail: Array<List> = []
		lists.map((v, index) => {
			if (index < mid) {
				//若等于则会死循环，因为始终2个分不下去。
				head.push(v)
			} else {
				tail.push(v)
			}
		})
		let left = mergeKLists(head)
		let right = mergeKLists(tail)
		return subMerge(left, right)
	}

	type List = ListNode | null
	const subMerge = (l1: List, l2: List): List => {
		if (!l1) {
			return l2
		}
		if (!l2) {
			return l1
		}
		if (l1.val < l2.val) {
			l1.next = subMerge(l1.next, l2)
			return l1
		} else {
			l2.next = subMerge(l2.next, l1)
			return l2
		}
	}
}

// ================= 优先级队列

namespace Leetcode23WithQueue {
	class ListNode {
		val: number
		next: ListNode | null
		constructor(val?: number, next?: ListNode | null) {
			this.val = val === undefined ? 0 : val
			this.next = next === undefined ? null : next
		}
	}

	const mergeKLists = function (lists: Array<ListNode | null>): ListNode | null {
		let queue = new PriorityQueue()
		lists.forEach((list) => {
			if (list) queue.enqueue(list, list.val)
		})

		let res = new ListNode(-1)
		let cur = res
		while (!queue.isEmpty()) {
			cur.next = queue.dequeue()
			cur = cur.next as ListNode
			if (cur.next) queue.enqueue(cur.next, cur.next.val)
		}
		return res.next
	}

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
