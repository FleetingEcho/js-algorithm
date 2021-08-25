// 312.戳气球
/* 
https://leetcode-cn.com/problems/burst-balloons/
*/
// 可以用1.回溯法，但是肯定有重复的子问题。 2 动态规划

// 状态，选择，状态方程
// 我们假设最后戳破的气球是 k，戳破 k 获得最大数量的银币就是 nums[i] * nums[k] * nums[j] 再加上前面戳破的最大数量和后面的最大数量，即：nums[i] * nums[k] * nums[j] + 前面最大数量 + 后面最大数量，
// 最终的状态转移方程为：dp[i][j]与自身比较大小：
// dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + nums[k] * nums[i] * nums[j])。
// 由于我们利用了两个虚拟气球，边界就是气球数 n + 2
// 初始值，当 i == j 时，很明显两个之间没有气球，所有为 0；
// 当 i == j 时，i 和 j 之间是没有气球的

// dp[i][j]， 从i开始戳，到j结束的值

var maxCoins = function (nums) {
	let n = nums.length
	// 添加两侧的虚拟气球
	let points = [1, ...nums, 1]
	let dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0))
	// 最后一行开始遍历,从下往上
	for (let i = n; i >= 0; i--) {
		// 从左往右
		for (let j = i + 1; j <= n + 1; j++) {
			for (let k = i + 1; k < j; k++) {
				dp[i][j] = Math.max(dp[i][j], points[j] * points[k] * points[i] + dp[i][k] + dp[k][j])
			}
		}
	}
	return dp[0][n + 1]
}
