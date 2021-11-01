/* 
64. 最小路径和
给定一个包含非负整数的 m x n 网格 grid ，
请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
说明：每次只能向下或者向右移动一步。
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。


*/
// # 一般来说，让你在二维矩阵中求最优化问题（最大值或者最小值），肯定需要递归 + 备忘录，也就是动态规划技巧。

function minPathSum(grid) {
	let m = grid.length
	let n = grid[0].length
	let dp = new Array(m).fill(0).map((v) => new Array(m).fill(0))
	//那如果i或者j等于 0 的时候，就会出现索引越界的错误。
	//所以我们需要提前计算出dp[0][..]和dp[..][0]，然后让i和j的值从 1 开始迭代。

	/**** base case ****/
	dp[0][0] = grid[0][0]

	for (let i = 1; i < m; i++) {
		dp[i][0] = dp[i - 1][0] + grid[i][0]
	}

	for (let j = 1; j < n; j++) {
		dp[0][j] = dp[0][j - 1] + grid[0][j]
	}
	/*******************/

	// 状态转移
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
		}
	}

	return dp[m - 1][n - 1]
}
