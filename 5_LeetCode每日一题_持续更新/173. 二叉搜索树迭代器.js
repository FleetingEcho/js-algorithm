// 173. 二叉搜索树迭代器
// 1. 用数组存储，然后获取
var BSTIterator = function (root) {
	var preOrder = (root) => {
		if (root) {
			return [...preOrder(root.left), ...preOrder(root.right), root.val]
		} else {
			return []
		}
	}
	this.arr = preOrder(root).sort((a, b) => b - a)
}

BSTIterator.prototype.next = function () {
	return this.arr.pop()
}

BSTIterator.prototype.hasNext = function () {
	return this.arr.length > 0
}

// 用类写
class BSTIterator {
	constructor(root) {
		this.idx = 0
		this.arr = []
		this.getNode(root)
	}
	getNode = (node) => {
		if (!node) return
		this.getNode(node.left)
		this.arr.push(node.val)
		this.getNode(node.right)
	}
	next = () => {
		return this.arr[this.idx++]
	}
	hasNext = () => {
		if (this.arr.length === this.idx) return true
		else return false
	}
}
