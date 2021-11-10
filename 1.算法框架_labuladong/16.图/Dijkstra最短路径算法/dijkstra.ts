namespace DijkstraAlgorithm {
	class State {
		// 记录 node 节点的深度
		id: number
		distFromStart: number

		constructor(id: number, distFromStart: number) {
			this.id = id
			this.distFromStart = distFromStart
		}
	}
	// 输入一幅图和一个起点 start，计算 start 到其他节点的最短距离
	export const dijkstra = (start: number, graph: Array<Array<any>>): number[] => {
		// 图中节点的个数
		// const adj = (s: number): any[] => graph[s]
		let V = graph.length
		// 记录最短路径的权重，你可以理解为 dp table
		// 定义：distTo[i] 的值就是节点 start 到达节点 i 的最短路径权重
		// 求最小值，所以 dp table 初始化为正无穷
		let distTo: number[] = new Array(graph.length).fill(Number.MAX_VALUE)
		// base case，start 到 start 的最短距离就是 0
		distTo[start] = 0

		// 优先级队列，distFromStart 较小的排在前面
		const basedArr: State[] = []
		let pq = new HeapDS.PriorityQueue(basedArr, (a: State, b: State) => {
			return a.distFromStart - b.distFromStart
		})
		// 从起点 start 开始进行 BFS
		pq.push(new State(start, 0))

		while (pq.size !== 0) {
			let curState = pq.shift() as State
			let curNodeID = curState.id
			let curDistFromStart = curState.distFromStart
			if (curDistFromStart > distTo[curNodeID]) {
				// 已经有一条更短的路径到达 curNode 节点了
				continue
			}
			// 将 curNode 的相邻节点装入队列
			for (let neighbor of graph[curNodeID]) {
				// 看看从 curNode 达到 nextNode 的距离是否会更短
				let nextNodeID = neighbor[0]
				let distToNextNode = distTo[curNodeID] + neighbor[1]
				if (distTo[nextNodeID] > distToNextNode) {
					// 更新 dp table
					distTo[nextNodeID] = distToNextNode
					// 将这个节点以及距离放入队列
					pq.push(new State(nextNodeID, distToNextNode))
				}
			}
		}
		return distTo
	}
}
