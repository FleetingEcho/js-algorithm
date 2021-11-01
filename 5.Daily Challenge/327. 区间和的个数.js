// 327. 区间和的个数
function countRangeSum(nums, lower, upper) {
	let sum = 0
	let len = nums.length
	if (len == 0) return 0
	let prefix = new Array(len)
	prefix[0] = nums[0]
	if (nums[0] >= lower && nums[0] <= upper) sum++
	//   累加和
	for (i = 1; i < len; i++) {
		prefix[i] = prefix[i - 1] + nums[i]
		if (prefix[i] >= lower && prefix[i] <= upper) sum++
	}
	//从dp[1]开始反推数字，列举所有可能
	for (j = 1; j < len; j++) {
		for (let i = 0; i < j; i++) {
			//   算单个数的大小
			let t = prefix[j] - prefix[i]
			if (t >= lower && t <= upper) sum++
		}
	}
	return sum
}
