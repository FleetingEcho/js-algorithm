// 376. 摆动序列
/* 
比较典型的动态规划题（一般来说，涉及最大最小等极值的情况，都可以朝动态规划去靠，
再一个就考虑目标问题是否可以由子问题推导）
本题中，状态转移方程可以考虑为dp[n]表示数组中到第n个数字的最长摆动序列长度，
那么这个序列最后一个差值就可能是负数或者正数两种情况，
所以一维的状态转移方程不能清楚的表示子问题的状态，需要再加一个维度，dp[n][m]，
m表示最后一个差值的状态，0表示为负数，1表示为正数，那么状态转移方程就出来了
差值为负数

dp[n][0] = max(dp[n-1][1]+1, dp[n-1][0]);
差值为正数
dp[n][1] = max(dp[n-1][0]+1, dp[n-1][1]);
当差值为0时，维持上一个数的状态，即:
dp[n][0] = dp[n-1][0];
dp[n][1] = dp[n-1][1];

*/

// 交替相加
function wiggleMaxLength(nums) {
	let down = 1,
		up = 1
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) up = down + 1
		else if (nums[i] < nums[i - 1]) down = up + 1
	}
	return nums.length == 0 ? 0 : Math.max(down, up)
}

function wiggleMaxLength(nums) {
	if (nums == null || nums.length < 2) {
		return nums == null ? 0 : nums.length
	}
	// 初始化为1
	let dp = new Array(nums.length + 1).fill(0).map((v) => new Array(2).fill(1))
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] > 0) {
			dp[i + 1][1] = Math.max(dp[i][0] + 1, dp[i][1])
		} else if (nums[i] - nums[i - 1] < 0) {
			dp[i + 1][0] = Math.max(dp[i][1] + 1, dp[i][0])
		} else {
			dp[i + 1][1] = dp[i][1]
			dp[i + 1][0] = dp[i][0]
		}
	}
	return Math.max(dp[dp.length - 1][1], dp[dp.length - 1][0])
}
