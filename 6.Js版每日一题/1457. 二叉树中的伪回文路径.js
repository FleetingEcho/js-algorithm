// 1457. 二叉树中的伪回文路径
// 最多有一个无重复值的数----回文
var pseudoPalindromicPaths = function (root) {
	let count = 0
	function isFakePalindrome(arr) {
		const map = new Map()
		for (let c of arr) {
			map.set(c, map.has(c) ? map.get(c) + 1 : 1)
		}
		let oddOccurrences = 0 // 奇数频次
		for (let times of map.values()) {
			// map.values() 的返回值是迭代器，用 for ... of 循环遍历
			if (times % 2 === 1) {
				oddOccurrences++
				if (oddOccurrences > 1) return false
			}
		}
		return true
	}

	function traverse(path = [], root) {
		if (!root) return
		if (!root.left && !root.right) {
			path.push(root.val)
			if (isFakePalindrome(path)) {
				count++
			}
		} else {
			traverse(path.concat(root.val), root.left)
			traverse(path.concat(root.val), root.right)
		}
	}
	traverse([], root)
	return count
}
