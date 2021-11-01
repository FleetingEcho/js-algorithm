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

// 迭代

// function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
// 	const l1: number[] = []
// 	const l2: number[] = []
// 	dfs(root1, l1)
// 	dfs(root2, l2)
// 	if (l1.length === l2.length) {
// 		for (let i = 0; i < l1.length; i++) {
// 			if (l1[i] !== l2[i]) return false
// 		}
// 		return true
// 	}
// 	return false
// }
// function dfs(root: TreeNode | null, list: number[]) {
// 	if (root == null) return
// 	if (root.left == null && root.right == null) {
// 		list.push(root.val)
// 		return
// 	}
// 	dfs(root.left, list)
// 	dfs(root.right, list)
// }

//DFS

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
	let res1: number[] = [],
		res2: number[] = []
	dfs(root1, res1)
	dfs(root2, res2)
	return checkTwoArr(res1, res2)
}
const checkTwoArr = (res1: number[], res2: number[]) => {
	if (res1.length !== res2.length) {
		return false
	}
	for (const [index, item] of res1.entries()) {
		if (item !== res2[index]) return false
	}
	return true
}
const dfs = (root: TreeNode | null, res: number[]) => {
	if (!root) return
	let stack: Array<TreeNode> = []
	let current: TreeNode | undefined | null = root
	while (current || stack.length !== 0) {
		while (current) {
			stack.push(current)
			current = current.left
		}
		current = stack.pop()
		if (!current) {
			return
		}
		if (!current.left && !current.right) {
			res.push(current.val)
		}
		current = current.right
	}
}
