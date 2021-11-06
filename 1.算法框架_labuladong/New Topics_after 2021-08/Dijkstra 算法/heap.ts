namespace HeapDS {
	class Heap<T> {
		array: T[]
		comparator: (a: any, b: any) => number
		constructor(comparator = (a: any, b: any) => a - b) {
			this.array = []
			this.comparator = (a: any, b: any) => comparator(this.array[a], this.array[b])
		}

		add(value: T) {
			this.array.push(value)
			this.bubbleUp()
		}

		peek = () => this.array[0]

		remove(index = 0) {
			if (!this.size) return null
			this.swap(index, this.size - 1) // swap with last
			const value = this.array.pop() // remove element
			this.bubbleDown(index)
			return value
		}

		get size() {
			return this.array.length
		}

		bubbleUp() {
			let index = this.size - 1
			const parent = (i: number) => Math.ceil(i / 2 - 1)
			while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
				this.swap(parent(index), index)
				index = parent(index)
			}
		}

		bubbleDown(index = 0) {
			let curr = index
			const left = (i: number) => 2 * i + 1
			const right = (i: number) => 2 * i + 2
			const getTopChild = (i: number) =>
				right(i) < this.size && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i)

			while (left(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
				const next = getTopChild(curr)
				this.swap(curr, next)
				curr = next
			}
		}

		swap(i1: number, i2: number) {
			;[this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]]
		}
	}
	export class MaxHeap extends Heap<number> {
		constructor() {
			super((a, b) => b - a)
		}
	}
	export class MinHeap extends Heap<number> {
		constructor() {
			super((a, b) => a - b)
		}
	}
	export class PriorityQueue<T> extends Heap<T> {
		constructor(iterable: T[] = [], comparator = (a: any, b: any) => a - b) {
			super(comparator)
			Array.from(iterable).forEach((el) => this.add(el))
		}

		push = (value: T) => super.add(value)
		shift = () => super.remove()
	}
	export function main() {
		const data: number[] = [12, 15, 2, 4, 1, 5, 6, 77, 8, 99, 100]
		const test = new PriorityQueue(data, (a, b) => a - b)
		console.log('priorityQueue', test)
		for (let i = 0; i < data.length; i++) {
			console.log(test.shift())
		}
	}
}

HeapDS.main()
