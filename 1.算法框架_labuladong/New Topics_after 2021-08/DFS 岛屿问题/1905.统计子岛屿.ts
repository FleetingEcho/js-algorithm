namespace LeetCode1905 {
	// https://leetcode-cn.com/problems/count-sub-islands/
	/*
什么情况下grid2中的一个岛屿B是grid1中的一个岛屿A的子岛？
当岛屿B中所有陆地在岛屿A中也是陆地的时候，岛屿B是岛屿A的子岛。
反过来说，如果岛屿B中存在一片陆地，在岛屿A的对应位置是海水，那么岛屿B就不是岛屿A的子岛。
*/
	const ISLAND = 1,
		SEA = 0
	// 找 Grid2中的子岛屿
	function countSubIslands(grid1: number[][], grid2: number[][]) {
		let m = grid1.length,
			n = grid1[0].length
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid1[i][j] === SEA && grid2[i][j] === ISLAND) {
					// 这个岛屿肯定不是子岛，淹掉
					dfs(grid2, i, j)
				}
			}
		}
		// 现在 grid2 中剩下的岛屿都是子岛，计算岛屿数量
		let res = 0
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid2[i][j] == ISLAND) {
					res++
					dfs(grid2, i, j)
				}
			}
		}
		return res
	}

	// 从 (i, j) 开始，将与之相邻的陆地都变成海水
	function dfs(grid: number[][], i: number, j: number) {
		let m = grid.length,
			n = grid[0].length
		if (i < 0 || j < 0 || i >= m || j >= n) return
		if (grid[i][j] == SEA) return
		grid[i][j] = SEA
		dfs(grid, i + 1, j)
		dfs(grid, i, j + 1)
		dfs(grid, i - 1, j)
		dfs(grid, i, j - 1)
	}
}
