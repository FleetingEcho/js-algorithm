// 746. 使用最小花费爬楼梯
// 动态规划
/* 
dp[i]从i出发成本，dp = [cost[0], cost[1]]，从0到cost.length，到终点前
从1步前或2步前出发。(dp[cost.length - 2], dp[cost.length - 1])取小即解
dp[i] = cost[i] + (dp[i - 1], dp[i - 2])取小
*/
var minCostClimbingStairs = function (cost) {
	// let dp = new Array(cost.length + 1).fill(0);
	let dp = new Uint32Array(cost.length + 1) //JavaScript 类型化数组,
	let i = 1
	while (i++ < cost.length) dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
	return dp[i - 1]
}
