namespace LeetCode785 {
	// 判断二分图
	// 输入：graph = [[1,2,3],[0,2],[0,1,3],[0,2]] , graph[0]到1,2,3， graph[1]到 0 ，2

	// 记录图是否符合二分图性质

	// 主函数，输入邻接表，判断是否是二分图
	function isBipartite(graph: number[][]) {
		let n = graph.length
		let color = new Array(n).fill(false) // 记录图中节点的颜色，false 和 true 代表两种不同颜色
		let visited = new Array(n).fill(false) // 记录图中节点是否被访问过
		let isMatch = true
		// 因为图不一定是联通的，可能存在多个子图
		// 所以要把每个节点都作为起点进行一次遍历
		// 如果发现任何一个子图不是二分图，整幅图都不算二分图
		for (let v = 0; v < n; v++) {
			if (!visited[v]) {
				dfs(graph, v)
			}
		}
		function dfs(graph: number[][], v: number) {
			if (!isMatch) return //确定不是二分图了
			visited[v] = true
			for (let w of graph[v]) {
				// 相邻节点 w 没有被访问过
				if (!visited[w]) {
					// 那么应该给节点 w 涂上和节点 v 不同的颜色
					color[w] = !color[v]
					// 继续遍历 w
					dfs(graph, w)
				} else {
					// 相邻节点 w 已经被访问过
					// 根据 v 和 w 的颜色判断是否是二分图
					if (color[w] == color[v]) {
						// 若相同，则此图不是二分图
						isMatch = false
					}
				}
			}
		}

		return isMatch
	}
}
