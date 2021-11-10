namespace LeetCode743 {
	function networkDelayTime(times: number[][], n: number, k: number): number {
		// 节点编号是从 1 开始的，所以要一个大小为 n + 1 的邻接表
		let graph: Array<Array<any>> = new Array(n + 1).fill(0).map((v) => [])
		// 构造图
		for (let edge of times) {
			let from = edge[0]
			let to = edge[1]
			let weight = edge[2]
			// from -> List<(to, weight)>
			// 邻接表存储图结构，同时存储权重信息
			const temp = [to, weight]
			graph[from].push(temp)
		}
		// 启动 dijkstra 算法计算以节点 k 为起点到其他节点的最短路径
		let distTo = DijkstraAlgorithm.dijkstra(k, graph)

		// 找到最长的那一条最短路径
		let res = 0
		for (let i = 1; i < distTo.length; i++) {
			if (distTo[i] == Number.MAX_VALUE) {
				// 有节点不可达，返回 -1
				return -1
			}
			res = Math.max(res, distTo[i])
		}
		return res
	}
}
