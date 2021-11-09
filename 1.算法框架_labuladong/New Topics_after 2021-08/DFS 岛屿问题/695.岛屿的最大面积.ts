namespace LeetCode695 {
	/* 
  这题的大体思路和之前完全一样，只不过dfs函数淹没岛屿的同时，还应该想办法记录这个岛屿的面积。
我们可以给dfs函数设置返回值，记录每次淹没的陆地的个数，直接看解法吧：

*/
	const SEA = 0
	const ISLAND = 1

	function maxAreaOfIsland(grid: number[][]) {
		// 记录岛屿的最大面积
		let res = 0
		let m = grid.length,
			n = grid[0].length
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid[i][j] == ISLAND) {
					// 淹没岛屿，并更新最大岛屿面积
					res = Math.max(res, dfs(grid, i, j))
				}
			}
		}
		return res
	}

	// 淹没与 (i, j) 相邻的陆地，并返回淹没的陆地面积
	function dfs(grid: number[][], i: number, j: number): number {
		let m = grid.length,
			n = grid[0].length
		if (i < 0 || j < 0 || i >= m || j >= n) {
			// 超出索引边界
			return 0
		}
		if (grid[i][j] == SEA) {
			// 已经是海水了
			return 0
		}
		// 将 (i, j) 变成海水
		grid[i][j] = SEA

		return (
			dfs(grid, i + 1, j) +
			dfs(grid, i, j + 1) +
			dfs(grid, i - 1, j) +
			dfs(grid, i, j - 1) +
			1
		)
	}
}
