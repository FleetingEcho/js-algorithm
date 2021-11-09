namespace LeetCode1020 {
	// 1020 题中1代表陆地，0代表海水
	const ISLAND = 1
	const SEA = 0
	function numEnclaves(grid: number[][]) {
		let m = grid.length,
			n = grid[0].length
		grid = clearEdge(grid)
		// 遍历 grid，剩下的岛屿都是封闭岛屿
		let res = 0
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid[i][j] == ISLAND) {
					res += 1
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
			dfs(res, 0, j)
			dfs(res, m - 1, j)
		}
		for (let i = 0; i < m; i++) {
			dfs(res, i, 0)
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
			return
		}
		grid[i][j] = SEA
		// 淹没上下左右的陆地
		dfs(grid, i + 1, j)
		dfs(grid, i, j + 1)
		dfs(grid, i - 1, j)
		dfs(grid, i, j - 1)
	}
}
