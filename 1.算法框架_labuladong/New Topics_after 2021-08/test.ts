namespace Test {
	class ListNode {
		val: number
		next: ListNode | null
		constructor(val?: number, next?: ListNode | null) {
			this.val = val === undefined ? 0 : val
			this.next = next === undefined ? null : next
		}
	}

	class PriorityQueue {
		public list: ListNode[] = []
		len = () => this.list.length
		constructor(len: number) {
			this.list = new Array<ListNode>(len)
		}
		get = () => this.list
		shift = () => this.list.shift()
		pop = () => this.list.pop()
		push(val: ListNode) {
			this.list = this.list.filter((v) => !!v).concat(val)
			this.list.sort((a, b) => a.val - b.val)
		}
	}

	export function main() {
		const temp = new PriorityQueue(10)
		temp.push(new ListNode(1))
		temp.push(new ListNode(7))
		temp.push(new ListNode(3))
		temp.push(new ListNode(5))
		console.log(temp)
		console.log(temp.len())
	}
}

Test.main()
