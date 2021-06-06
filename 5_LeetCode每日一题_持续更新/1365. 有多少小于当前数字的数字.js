// 1365. 有多少小于当前数字的数字
/* 
输入：nums = [8,1,2,2,3]
输出：[4,0,1,1,3]
解释： 
对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
对于 nums[1]=1 不存在比它小的数字。
对于 nums[2]=2 存在一个比它小的数字：（1）。 
对于 nums[3]=2 存在一个比它小的数字：（1）。 
对于 nums[4]=3 在三个比它小的数字：（1，2 和 2）。

*/

var smallerNumbersThanCurrent = function (nums) {
	const n = nums.length
	const data = new Array(n).fill(0).map((v) => new Array(2).fill(0))
	for (let i = 0; i < n; ++i) {
		data[i][0] = nums[i]
		data[i][1] = i
	}
	data.sort((a, b) => a[0] - b[0])

	const ret = new Array(n)
	let prev = -1
	for (let i = 0; i < n; ++i) {
		if (prev == -1 || data[i][0] !== data[i - 1][0]) {
			prev = i
		}
		ret[data[i][1]] = prev
	}
	return ret
}
