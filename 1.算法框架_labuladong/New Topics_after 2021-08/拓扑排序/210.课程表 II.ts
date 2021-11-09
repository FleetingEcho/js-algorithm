// 这道题就是上道题的进阶版，不是仅仅让你判断是否可以完成所有课程，而是进一步让你返回一个合理的上课顺序，保证开始修每个课程时，前置的课程都已经修完。
// 判断有向图是否存在环
// 什么时候无法修完所有课程？当存在循环依赖的时候。
// 看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖。
// 如果发现这幅有向图中存在环，那就说明课程之间存在循环依赖，肯定没办法全部上完；反之，如果没有环，那么肯定能上完全部课程。
// graph[s]是一个列表，存储着节点s所指向的节点。
// 注意图中并不是所有节点都相连，所以要用一个 for 循环将所有节点都作为起点调用一次 DFS 搜索算法。
// 记录一次 traverse 递归经过的节点

// ==
namespace LeetCode210 {
	// 记录后序遍历结果

	function findOrder(numCourses: number, prerequisites: number[][]) {
		let postOrder: number[] = []
		const visited = new Array(numCourses).fill(false) // 记录遍历过的节点，防止走回头路

		if (!canFinish(numCourses, prerequisites)) return [] // 先保证图中无环

		// 建图
		const graph: number[][] = buildGraph(numCourses, prerequisites)
		const traverse = (graph: number[][], s: number) => {
			if (visited[s]) return
			visited[s] = true
			for (let t of graph[s]) {
				traverse(graph, t)
			}
			// 后序遍历位置
			postOrder.push(s)
		}
		for (let i = 0; i < numCourses; i++) {
			traverse(graph, i)
		}
		// 将后序遍历结果反转
		postOrder.reverse()
		let res = new Array(numCourses).fill(0)
		for (let i = 0; i < numCourses; i++) {
			res[i] = postOrder[i]
		}
		return res
	}

	// 记录图中是否有环  即题-207
	function buildGraph(numCourses: number, prerequisites: number[][]) {
		// 图中共有 numCourses 个节点
		let graph: number[][] = new Array(numCourses).fill(0).map((v) => [])
		for (let edge of prerequisites) {
			let from = edge[1]
			let to = edge[0]
			graph[from].push(to)
		}
		// 修完课程 from 才能修课程 to
		// 在图中添加一条从 from 指向 to 的有向边
		return graph
	}

	// 记录图中是否有环
	function canFinish(numCourses: number, prerequisites: number[][]): boolean {
		let hasCycle = false
		let graph: number[][] = buildGraph(numCourses, prerequisites)
		const visited = new Array(numCourses).fill(false) // 记录遍历过的节点，防止走回头路
		const onPath = new Array(numCourses).fill(false)
		const dfs = (graph: number[][], s: number) => {
			if (onPath[s]) {
				hasCycle = true // 出现环
			}
			if (visited[s] || hasCycle) {
				// 如果已经找到了环，也不用再遍历了
				return
			}
			// 前序遍历代码位置
			visited[s] = true
			onPath[s] = true
			for (let t of graph[s]) {
				dfs(graph, t)
			}
			// 后序遍历代码位置
			onPath[s] = false
		}
		for (let i = 0; i < numCourses; i++) {
			// 遍历图中的所有节点
			dfs(graph, i)
		}
		// 只要没有循环依赖可以完成所有课程
		return !hasCycle
	}
}
