// 337. 打家劫舍 III
function rob(root) {
	const dp = (root) => {
		if (root == null) return [0, 0]
		let left = dp(root.left)
		let right = dp(root.right)
		// 抢，下两家就不能抢了
		let rob = root.val + left[0] + right[0]
		// 不抢，下家可抢可不抢，取决于收益大小
		let not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

		return [not_rob, rob]
	}
	let res = dp(root)
	return Math.max(res[0], res[1])
}
