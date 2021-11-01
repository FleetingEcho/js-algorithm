/* 
53. 最大子序和
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/
// 简单动态规划------------- 求最值

function maxSubArray(nums) {
	let result = Number.MIN_SAFE_INTEGER
	let numsSize = nums.length
	//dp[i]表示nums中以nums[i]结尾的最大子序和
	let dp = new Array(numsSize)
	dp[0] = nums[0]
	result = dp[0]
	for (let i = 1; i < numsSize; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
		result = Math.max(result, dp[i])
	}

	return result
}

// 降维:
// 由于状态只和dp_0 和dp_1有关
function maxSubArray(nums) {
	let result = Number.MIN_SAFE_INTEGER
	let numsSize = nums.length
	//dp[i]表示nums中以nums[i]结尾的最大子序和
	let dp_0 = nums[0]
	result = dp_0
	for (let i = 1; i < numsSize; i++) {
		dp_1 = Math.max(dp_0 + nums[i], nums[i])
		result = Math.max(result, dp_1)
		dp_0 = dp_1
	}
	return result
}
