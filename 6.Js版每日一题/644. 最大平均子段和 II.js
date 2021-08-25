// 644. 最大平均子段和 II
/* 
输入: [1,12,-5,-6,50,3], k = 4
输出: 12.75
解释:
当长度为 5 的时候，最大平均值是 10.8，
当长度为 6 的时候，最大平均值是 9.16667。
所以返回值是 12.75。
*/

function findMaxAverage(arr, k) {
	let maxAvg = 0
	let flag = false
	if (arr.length === 1 && k <= 1) return arr[0]
	for (let i = k; i < arr.length; i++) {
		let sum = 0
		for (let j = 0; j <= i - 2; j++) {
			sum += arr[j]
		}
		let maxSum = sum + arr[i - 1]
		for (let j = i - 1; j < arr.length; j++) {
			sum += arr[j]
			maxSum = Math.max(maxSum, sum)
			sum -= arr[j - i + 1]
		}
		if (!flag) {
			console.log(maxSum)
			maxAvg = maxSum / i
			flag = !flag
		} else {
			maxAvg = Math.max(maxAvg, maxSum / i)
		}
	}
	return maxAvg
}

function findMaxAverage(nums, k) {
	let min = Number.MAX_SAFE_INTEGER
	let max = Number.MIN_SAFE_INTEGER
	min = Math.min(min, ...nums)
	max = Math.max(max, ...nums)
	let ans = min

	while (max - min > 0.00001) {
		ans = (max + min) >> 1
		if (check(nums, k, ans)) {
			min = ans
		} else {
			max = ans
		}
	}
	return ans

	function check(nums, k, m) {
		let sum = new Array(nums.length + 1)
		for (let i = 1; i < sum.length; ++i) sum[i] = sum[i - 1] + nums[i - 1] - m
		let min = 0
		for (let i = k; i < sum.length; ++i) {
			if (sum[i] - min >= 0) {
				return true
			}
			min = Math.min(min, sum[i - k + 1])
		}
		return false
	}
}
