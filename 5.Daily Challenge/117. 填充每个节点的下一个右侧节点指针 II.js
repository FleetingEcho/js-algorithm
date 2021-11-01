// 117. 填充每个节点的下一个右侧节点指针 II
var connect = function (root) {
	if (!root) return null
	let res = root
	let queue = [res]
	//层序遍历
	while (queue.length) {
		let len = queue.length
		let pre = null
		for (let i = 0; i < len; i++) {
			let node = queue.shift()
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
			//记录上一个节点，上一个节点指向当前节点
			if (pre) {
				pre.next = node
			}
			pre = node
		}
	}
	return res
}
