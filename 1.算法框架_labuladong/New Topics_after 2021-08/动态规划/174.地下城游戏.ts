namespace LeetCode174 {
	// 自顶向下带备忘录的动态规划解法
	// 备忘录，消除重叠子问题
	function calculateMinimumHP(grid: number[][]) {
		let m = grid.length
		let n = grid[0].length
		// 备忘录中都初始化为 -1
		let memo = new Array(m).fill(0).map((v) => new Array(n).fill(-1))

		/* 定义：从 (i, j) 到达右下角，需要的初始血量至少是多少 */
		function dp(grid: number[][], i: number, j: number) {
			let m = grid.length
			let n = grid[0].length
			// base case
			if (i == m - 1 && j == n - 1) {
				return grid[i][j] >= 0 ? 1 : -grid[i][j] + 1
			}
			if (i == m || j == n) {
				return Number.MAX_VALUE
			}
			// 避免重复计算
			if (memo[i][j] != -1) {
				return memo[i][j]
			}
			// 状态转移逻辑
			let res = Math.min(dp(grid, i, j + 1), dp(grid, i + 1, j)) - grid[i][j]
			// 骑士的生命值至少为 1
			memo[i][j] = res <= 0 ? 1 : res

			return memo[i][j]
		}
		return dp(grid, 0, 0)
	}
}
