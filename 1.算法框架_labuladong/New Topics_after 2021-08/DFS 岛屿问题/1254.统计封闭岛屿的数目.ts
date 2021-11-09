namespace LeetCode1254 {
	// 主函数：计算封闭岛屿的数量
	// 此题目要求“上下左右”全被1包围才算岛屿，所以靠边的陆地并不算岛屿。
	const ISLAND = 0
	const SEA = 1
	function closedIsland(grid: number[][]) {
		let m = grid.length,
			n = grid[0].length
		grid = clearEdge(grid)
		// 遍历 grid，剩下的岛屿都是封闭岛屿
		let res = 0
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid[i][j] == ISLAND) {
					res++
					dfs(grid, i, j)
				}
			}
		}
		return res
	}
	function clearEdge(grid: number[][]) {
		let m = grid.length,
			n = grid[0].length
		let res = grid
		for (let j = 0; j < n; j++) {
			// 把靠上边的岛屿淹掉
			dfs(res, 0, j)
			// 把靠下边的岛屿淹掉
			dfs(res, m - 1, j)
		}
		for (let i = 0; i < m; i++) {
			// 把靠左边的岛屿淹掉
			dfs(res, i, 0)
			// 把靠右边的岛屿淹掉
			dfs(res, i, n - 1)
		}
		return res
	}
	// 从 (i, j) 开始，将与之相邻的陆地都变成海水
	function dfs(grid: number[][], i: number, j: number) {
		let m = grid.length,
			n = grid[0].length
		if (i < 0 || j < 0 || i >= m || j >= n) {
			return
		}
		if (grid[i][j] == SEA) {
			// 已经是海水了
			return
		}
		// 将 (i, j) 变成海水
		grid[i][j] = SEA
		// 淹没上下左右的陆地
		dfs(grid, i + 1, j)
		dfs(grid, i, j + 1)
		dfs(grid, i - 1, j)
		dfs(grid, i, j - 1)
	}
}
