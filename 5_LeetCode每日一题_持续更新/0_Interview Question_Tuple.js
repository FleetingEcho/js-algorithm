// https://cdn.jsdelivr.net/gh/JakeZT/picGo/win10imgs/Tuple.png
const edges = [
	[4, 5],
	[5, 3],
	[1, 5],
	[2, 5],
]
const edges1 = [
	[4, 5],
	[5, 3],
	[1, 5],
	[2, 1],
]
/* 
{
'1': Node { value: 1, children: [ 5, 2 ] },
'2': Node { value: 2, children: [ 1 ] },
'3': Node { value: 3, children: [ 5 ] },
'4': Node { value: 4, children: [ 5 ] },
'5': Node { value: 5, children: [ 4, 3, 1 ] }
}
*/

class Node {
	constructor(value) {
		this.value = value
		this.children = []
	}
}

function create_tree(edges) {
	let nodes = {}
	for (let [a, b] of edges) {
		if (!nodes[a]) {
			nodes[a] = new Node(a)
		}
		if (!nodes[b]) {
			nodes[b] = new Node(b)
		}
		nodes[a].children.push(nodes[b].value)
		nodes[b].children.push(nodes[a].value)
	}
	return nodes
}

function clean(root, nodes) {
	for (let child of root.children) {
		if (nodes[child].children.length > 0) {
			const temp = nodes[child].children
			temp.splice(temp.indexOf(root.value), 1) //删除根元素
			nodes[child].children = temp
		}
	}
	for (let child of root.children) {
		clean(nodes[child], nodes)
	}
}

function show(root, nodes) {
	console.log(root.value, root.children)
	for (let child of root.children) {
		show(nodes[child], nodes)
	}
}

function Main() {
	const nodes = create_tree(edges)
	// const nodes = create_tree(edges1)
	const root = nodes[1]
	clean(root, nodes)
	show(root, nodes)
	return root
}

Main()
