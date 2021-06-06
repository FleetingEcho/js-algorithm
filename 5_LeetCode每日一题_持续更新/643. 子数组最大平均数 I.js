/* 
643. 子数组最大平均数 I


给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
输入：[1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
*/
function findMaxAverage(arr, k) {
	let len = arr.length
	let sum = 0
	arr.some((item, index) => {
		if (index > k - 1) return true
		sum += item
	})
	let res = sum
	for (let i = 1; i + k - 1 < len; i++) {
		//窗口长度不变, 加右减左
		sum += arr[i + k - 1] - arr[i - 1]
		res = Math.max(res, sum)
	}
	return res / k
}
