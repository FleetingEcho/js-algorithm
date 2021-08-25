// 463. 岛屿的周长
var islandPerimeter1 = function (grid) {
	const dx = [0, 1, 0, -1]
	const dy = [1, 0, -1, 0]
	const n = grid.length,
		m = grid[0].length
	let perimeter = 0
	// const track=new Array(n).fill(0).map(v=>new Array(m).fill(false));
	const traverse = (x, y) => {
		// 如果是左右是海，或者左右是边界的时候，就直接+1；
		if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] === 0) {
			perimeter++
			return 1
		}
		let res = 0
		if (grid[x][y] === 'find') {
			return 0
		}
		grid[x][y] = 'find' //标记为已经访问过
		// 上下左右走一圈看看
		for (let i = 0; i < 4; ++i) {
			const tx = x + dx[i]
			const ty = y + dy[i]
			res += traverse(tx, ty)
		}
		return res
	}

	let ans = 0
	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < m; ++j) {
			if (grid[i][j] === 1) {
				ans += traverse(i, j)
			}
		}
	}

	return ans
}

// >方法2：
function islandPerimeter(grid) {
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (grid[r][c] == 1) {
				// 题目限制只有一个岛屿，计算一个即可
				return dfs(grid, r, c)
			}
		}
	}
	return 0
}

function dfs(grid, r, c) {
	if (!(0 <= r && r < grid.length && 0 <= c && c < grid[0].length)) {
		return 1
	}
	if (grid[r][c] == 0) {
		return 1
	}
	if (grid[r][c] != 1) {
		return 0
	}
	grid[r][c] = 2
	return dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1)
}

const test = [
	[0, 1, 0, 0],
	[1, 1, 1, 0],
	[0, 1, 0, 0],
	[1, 1, 0, 0],
]

const test1 = [
	[0, 1, 0, 0],
	[1, 1, 1, 0],
	[0, 1, 0, 0],
	[1, 1, 0, 0],
]

console.log(islandPerimeter(test))
console.log(islandPerimeter1(test1))
