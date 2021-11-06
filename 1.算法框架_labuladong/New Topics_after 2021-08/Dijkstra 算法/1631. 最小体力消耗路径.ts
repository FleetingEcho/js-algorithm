namespace LeetCode1631 {
	/*

  1.这题给的是无向图，也可以用 Dijkstra 算法吗？
  - 首先关于有向图和无向图，前文 图算法基础 说过，无向图本质上可以认为是「双向图」，从而转化成有向图。

  2.更重要的是，Dijkstra 算法计算的是最短路径，计算的是最小值，这题让你计算最大概率是一个最大值，怎么可能用 Dijkstra 算法呢？
  - 重点说说最大值和最小值这个问题，其实 Dijkstra 和很多最优化算法一样，计算的是「最优值」，这个最优值可能是最大值，也可能是最小值。

  3.标准 Dijkstra 算法是计算最短路径的，但你有想过为什么 Dijkstra 算法不允许存在负权重边么？
  - 因为 Dijkstra 计算最短路径的正确性依赖一个前提：路径中每增加一条边，路径的总权重就会增加。
  如果你想计算最长路径，路径中每增加一条边，路径的总权重就会减少，要是能够满足这个条件，也可以用 Dijkstra 算法。

  你看这道题是不是符合这个条件？边和边之间是乘法关系，每条边的概率都是小于 1 的，所以肯定会越乘越小。
  只不过，这道题的解法要把优先级队列的排序顺序反过来，一些 if 大小判断也要反过来，我们直接看解法代码吧：
  */

	function maxProbability(
		n: number,
		edges: number[][],
		succProb: number[],
		start: number,
		end: number
	): number {
		let graph: any[][] = new Array(n).fill(0).map((v) => [])
		// 构造邻接表结构表示图
		for (let i = 0; i < edges.length; i++) {
			let from = edges[i][0]
			let to = edges[i][1]
			let weight = succProb[i]
			// 无向图就是双向图；先把 int 统一转成 double，待会再转回来
			graph[from].push([to, weight])
			graph[to].push([from, weight])
		}

		return dijkstra(start, end, graph)
	}

	class State {
		// 图节点的 id
		id: number
		// 从 start 节点到达当前节点的概率
		probFromStart: number

		constructor(id: number, probFromStart: number) {
			this.id = id
			this.probFromStart = probFromStart
		}
	}

	function dijkstra(start: number, end: number, graph: any[][]) {
		// 定义：probTo[i] 的值就是节点 start 到达节点 i 的最大概率
		let probTo = new Array(graph.length).fill(-1)
		// dp table 初始化为一个取不到的最小值
		// base case，start 到 start 的概率就是 1
		probTo[start] = 1

		// 优先级队列，probFromStart 较大的排在前面
		const basedArr: State[] = []
		let pq = new HeapDS.PriorityQueue(basedArr, (a, b) => b.probFromStart - a.probFromStart)
		// 从起点 start 开始进行 BFS
		pq.push(new State(start, 1))

		while (pq.size !== 0) {
			let curState = pq.shift() as State
			let curNodeID = curState.id
			let curProbFromStart = curState.probFromStart

			// 遇到终点提前返回
			if (curNodeID == end) {
				return curProbFromStart
			}

			if (curProbFromStart < probTo[curNodeID]) {
				// 已经有一条概率更大的路径到达 curNode 节点了
				continue
			}
			// 将 curNode 的相邻节点装入队列
			for (let neighbor of graph[curNodeID]) {
				let nextNodeID = neighbor[0]
				// 看看从 curNode 达到 nextNode 的概率是否会更大
				let probToNextNode = probTo[curNodeID] * neighbor[1]
				if (probTo[nextNodeID] < probToNextNode) {
					probTo[nextNodeID] = probToNextNode
					pq.push(new State(nextNodeID, probToNextNode))
				}
			}
		}
		// 如果到达这里，说明从 start 开始无法到达 end，返回 0
		return 0
	}
}
