岛屿系列问题的核心考点就是用 DFS/BFS 算法遍历二维数组。
那么如何在二维矩阵中使用 DFS 搜索呢？如果你把二维矩阵中的每一个位置看做一个节点，这个节点的上下左右四个位置就是相邻节点，那么整个矩阵就可以抽象成一幅网状的「图」结构。

因为二维矩阵本质上是一幅「图」，所以遍历的过程中需要一个 visited 布尔数组防止走回头路，如果你能理解上面这段代码，那么搞定所有岛屿问题都很简单。

```tsx
// 二叉树遍历框架
function traverse(root: TreeNode) {
	traverse(root.left)
	traverse(root.right)
}

//二维矩阵的 DFS 代码框架
function dfs(grid: number[][], i: number, j: number, visited: boolean[][]) {
	let m = grid.length,
		n = grid[0].length
	if (i < 0 || j < 0 || i >= m || j >= n) {
		// 超出索引边界
		return
	}
	if (visited[i][j]) {
		// 已遍历过 (i, j)
		return
	}
	// 前序：进入节点 (i, j)
	visited[i][j] = true
	dfs(grid, i - 1, j, visited) // 上
	dfs(grid, i + 1, j, visited) // 下
	dfs(grid, i, j - 1, visited) // 左
	dfs(grid, i, j + 1, visited) // 右
	// 后序：离开节点 (i, j)
	// visited[i][j] = true;
}
```

```tsx

使用「方向数组」来处理上下左右的遍历


// 方向数组，分别代表上、下、左、右
let dirs: number[][] = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
]
function Dfs(grid: number[][], i: number, j: number, visited: boolean[][]) {
	let m = grid.length
	let n = grid[0].length
	if (i < 0 || j < 0 || i >= m || j >= n) {
		// 超出索引边界
		return
	}
	if (visited[i][j]) {
		// 已遍历过 (i, j)
		return
	}

	// 进入节点 (i, j)
	visited[i][j] = true
	// 递归遍历上下左右的节点
	for (let d of dirs) {
		let next_i = i + d[0]
		let next_j = j + d[1]
		Dfs(grid, next_i, next_j, visited)
	}
	// 离开节点 (i, j)
	// visited[i][j] = true;
}
```
