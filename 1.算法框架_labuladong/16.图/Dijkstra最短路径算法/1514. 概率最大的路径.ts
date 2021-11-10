namespace LeetCode1514 {
	// 二维矩阵抽象成图，我们先实现一下图的adj方法，之后的主要逻辑会清晰一些
	// 方向数组，上下左右的坐标偏移量
	const dirs = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	]

	// 返回坐标 (x, y) 的上下左右相邻坐标
	const adj = (matrix: number[][], x: number, y: number) => {
		let m = matrix.length,
			n = matrix[0].length
		// 存储相邻节点
		const neighbors: number[][] = []
		for (let dir of dirs) {
			let nx = x + dir[0]
			let ny = y + dir[1]
			if (nx < 0 || ny < 0 || ny >= n || nx >= m) {
				continue // 索引越界
			}
			neighbors.push([nx, ny])
		}
		return neighbors
	}
	// 我们现在认为一个二维坐标(x, y)是图中的一个节点，所以这个State类也需要修改一下
	class State {
		x: number // 矩阵中的一个位置
		y: number
		effortFromStart: number // 从起点 (0, 0) 到当前位置的最小体力消耗（距离）
		constructor(x: number, y: number, effortFromStart: number) {
			this.x = x
			this.y = y
			this.effortFromStart = effortFromStart
		}
	}

	// Dijkstra 算法，计算 (0, 0) 到 (m - 1, n - 1) 的最小体力消耗
	const minimumEffortPath = (heights: number[][]): number => {
		return dijkstra(heights)
	}

	function dijkstra(heights: number[][]) {
		let m = heights.length,
			n = heights[0].length
		// 定义：从 (0, 0) 到 (i, j) 的最小体力消耗是 effortTo[i][j]
		// dp table 初始化为正无穷
		let effortTo: number[][] = new Array(m)
			.fill(0)
			.map((v) => new Array(n).fill(Number.MAX_VALUE))
		// base case，起点到起点的最小消耗就是 0
		effortTo[0][0] = 0

		// 优先级队列，effortFromStart 较小的排在前面
		const basedArr: State[] = []
		let pq = new HeapDS.PriorityQueue(basedArr, (a, b) => a.effortFromStart - b.effortFromStart)
		// 从起点 (0, 0) 开始进行 BFS
		pq.push(new State(0, 0, 0))

		while (pq.size !== 0) {
			let curState = pq.shift() as State
			let curX = curState.x
			let curY = curState.y
			let curEffortFromStart = curState.effortFromStart

			if (curX == m - 1 && curY == n - 1) {
				// 到达终点提前结束
				return curEffortFromStart
			}

			if (curEffortFromStart > effortTo[curX][curY]) {
				// 已经有一条更短的路径到达 curNode 节点了
				continue
			}
			// 将 (curX, curY) 的相邻坐标装入队列
			for (let neighbor of adj(heights, curX, curY)) {
				let nextX = neighbor[0]
				let nextY = neighbor[1]
				// 计算从 (curX, curY) 达到 (nextX, nextY) 的消耗
				let effortToNextNode = Math.max(
					effortTo[curX][curY],
					Math.abs(heights[curX][curY] - heights[nextX][nextY])
				)
				// 更新 dp table
				if (effortTo[nextX][nextY] > effortToNextNode) {
					effortTo[nextX][nextY] = effortToNextNode
					pq.push(new State(nextX, nextY, effortToNextNode))
				}
			}
		}
		// 正常情况不会达到这个 return
		return -1
	}
}
