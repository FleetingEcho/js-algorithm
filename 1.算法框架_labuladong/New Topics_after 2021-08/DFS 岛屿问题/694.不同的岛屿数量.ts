namespace LeetCode694 {
	// 很显然我们得想办法把二维矩阵中的「岛屿」进行转化，变成比如字符串这样的类型，然后利用 HashSet 这样的数据结构去重，最终得到不同的岛屿的个数。
	// 你看，这就相当于是岛屿序列化的结果，只要每次使用dfs遍历岛屿的时候生成这串数字进行比较，就可以计算到底有多少个不同的岛屿了。

	// 改造DFS
	// 如果我用分别用1, 2, 3, 4代表上下左右，用-1, -2, -3, -4代表上下左右的撤销
	const ISLAND = 1,
		SEA = 0
	let str = ''
	type DFS = (grid: number[][], i: number, j: number, next: number) => void
	const dfs: DFS = (grid, i, j, next) => {
		let m = grid.length,
			n = grid[0].length
		if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == SEA) return
		// 前序遍历位置：进入 (i, j)
		grid[i][j] = SEA
		str += `${next},`
		dfs(grid, i - 1, j, 1) // 上
		dfs(grid, i + 1, j, 2) // 下
		dfs(grid, i, j - 1, 3) // 左
		dfs(grid, i, j + 1, 4) // 右
		// 后序遍历位置：离开 (i, j)
		str += `-${next},`
	}

	function numDistinctIslands(grid: number[][]) {
		let m = grid.length,
			n = grid[0].length
		// 记录所有岛屿的序列化结果
		let islands = new Set<string>()
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid[i][j] == ISLAND) {
					// 初始的方向可以随便写，不影响正确性
					// 淹掉这个岛屿，同时存储岛屿的序列化结果
					dfs(grid, i, j, 888)
					islands.add(str)
					str = ''
				}
			}
		}
		// 不相同的岛屿数量
		// console.log(islands)
		return islands.size
	}

	export function test() {
		console.log(
			numDistinctIslands([
				[1, 1, 0, 1, 1],
				[1, 0, 0, 0, 0],
				[0, 0, 0, 0, 1],
				[1, 1, 0, 1, 1],
			])
		)
	}
}

LeetCode694.test()
