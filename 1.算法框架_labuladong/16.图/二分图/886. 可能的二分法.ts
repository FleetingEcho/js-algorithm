namespace Leetcide886 {
	function possibleBipartition(n: number, dislikes: number[][]) {
		let ok = true
		// 图节点编号为 1...n
		let color = new Array(n + 1).fill(false)
		let visited = new Array(n + 1).fill(false)
		// 转化成邻接表表示图结构
		let graph: number[][] = buildGraph(n, dislikes)
		for (let v = 1; v <= n; v++) {
			if (!visited[v]) {
				dfs(graph, v)
			}
		}

		function dfs(graph: number[][], v: number) {
			if (!ok) return
			visited[v] = true
			for (let w of graph[v]) {
				if (!visited[w]) {
					color[w] = !color[v]
					dfs(graph, w)
				} else {
					if (color[w] == color[v]) {
						ok = false
					}
				}
			}
		}
		return ok
	}
	// 建图函数
	function buildGraph(n: number, dislikes: number[][]) {
		// 图节点编号为 1...n
		let graph: number[][] = new Array(n + 1).fill(0).map((v) => [])
		for (let edge of dislikes) {
			let v = edge[1]
			let w = edge[0]
			// 「无向图」相当于「双向图」
			graph[v].push(w) // v -> w
			graph[w].push(v) // w -> v
		}
		return graph
	}
}
