namespace LeetCode173 {
	class BSTIterator {
		idx: number
		arr: number[]
		constructor(root: TreeNode) {
			this.idx = 0
			this.arr = []
			this.getNode(root)
		}
		getNode = (node: TreeNode) => {
			if (!node) return
			this.getNode(node.left!)
			this.arr.push(node.val)
			this.getNode(node.right!)
		}
		next = () => {
			return this.arr[this.idx++]
		}
		hasNext = () => {
			if (this.idx >= this.arr.length) return false
			else return true
		}
	}

	class TreeNode {
		val: number
		left: TreeNode | null
		right: TreeNode | null
		constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
			this.val = val === undefined ? 0 : val
			this.left = left === undefined ? null : left
			this.right = right === undefined ? null : right
		}
	}
}
