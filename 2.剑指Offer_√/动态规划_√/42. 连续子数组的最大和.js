// 42. 连续子数组的最大和
/* 
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。
求所有子数组的和的最大值。
要求时间复杂度为O(n)。
! 通过动态规划计算每一步的状态可以在遍历数组结束后得到结果，成为最优解
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

* 其中为了降低空间复杂度，可以将 dp 数组与 nums 数组合并，避免开辟新的内存空间
*/

var maxSubArray = function (nums) {
	let res = nums[0]
	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] > 0) {
			nums[i] += nums[i - 1]
		}
		res = Math.max(res, nums[i])
	}
	return res
}

//  nums = [-2,1,-3,4,-1,2,1,-5,4]
const maxSubArray2 = (nums) => {
	let res = nums[0]
	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] > 0) nums[i] = nums[i - 1] + nums[i]
		res = Math.max(nums[i], res)
		// ! res作用其实是记录和 和现在的进行比较， res为最大和
		// nums[i]=Math.max(nums[i-1],nums[i-1]+nums[i])
	}
	return res
}

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
