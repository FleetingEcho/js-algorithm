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
let SEP = ','
let NULL = '#'

function serialize(root: TreeNode | null): string {
	let sb = []
	serializeHelper(root, sb)
	return sb.toString()
}

function serializeHelper(root: TreeNode | null, sb: Array<number | string>) {
	if (root == null) {
		sb.push(NULL)
		return
	}
	sb.push(root.val) //前序遍历位置
	serializeHelper(root.left, sb)
	serializeHelper(root.right, sb)
}

//反序列化
function deserialize(data: string): TreeNode | null {
	// 将字符串转化成列表
	let nodes = []
	for (let s of data.split(SEP)) {
		nodes.push(s)
	}
	return deserializeHelper(nodes)
}

function deserializeHelper(nodes: Array<number | string | null>) {
	if (nodes.length === 0) return null

	let first = nodes.shift() //前序遍历位置
	if (first === NULL) return null
	let root = new TreeNode(parseInt(first as string, 10))
	root.left = deserializeHelper(nodes)
	root.right = deserializeHelper(nodes)
	return root
}
