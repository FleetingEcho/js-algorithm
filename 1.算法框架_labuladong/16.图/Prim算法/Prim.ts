namespace PrimDS {
	class Prim {
		// 核心数据结构，存储「横切边」的优先级队列
		pq: HeapDS.PriorityQueue<number[]>
		// 类似 visited 数组的作用，记录哪些节点已经成为最小生成树的一部分
		inMST: boolean[]
		// 记录最小生成树的权重和
		weightSum: number
		// graph 是用邻接表表示的一幅图，
		// graph[s] 记录节点 s 所有相邻的边，
		// 三元组 int[]{from, to, weight} 表示一条边
		graph: number[][][]

		constructor(graph: number[][][]) {
			this.graph = graph
			this.pq = new HeapDS.PriorityQueue([], (a: number[], b: number[]) => {
				return a[2] - b[2]
			}) as any as HeapDS.PriorityQueue<number[]>

			this.weightSum = 0
			// 图中有 n 个节点
			let n: number = graph.length
			this.inMST = new Array(n).fill(0)
			// 随便从一个点开始切分都可以，我们不妨从节点 0 开始
			this.inMST[0] = true
			this.cut(0)
			// 不断进行切分，向最小生成树中添加边
			while (this.pq.size !== 0) {
				let edge = this.pq.shift() as any
				let to = edge[1]
				let weight = edge[2]
				if (this.inMST[to]) {
					// 节点 to 已经在最小生成树中，跳过
					// 否则这条边会产生环
					continue
				}
				// 将边 edge 加入最小生成树
				this.weightSum += weight
				this.inMST[to] = true
				// 节点 to 加入后，进行新一轮切分，会产生更多横切边
				this.cut(to)
			}
		}

		// 将 s 的横切边加入优先队列
		cut(s: number): void {
			// 遍历 s 的邻边
			for (let edge of this.graph[s]) {
				let to = edge[1]
				if (this.inMST[to]) {
					// 相邻接点 to 已经在最小生成树中，跳过
					// 否则这条边会产生环
					continue
				}
				// 加入横切边队列
				this.pq.push(edge)
			}
		}

		// 最小生成树的权重和
		getWeightSum(): number {
			return this.weightSum
		}

		// 判断最小生成树是否包含图中的所有节点
		allConnected(): boolean {
			for (let i = 0; i < this.inMST.length; i++) {
				if (!this.inMST[i]) {
					return false
				}
			}
			return true
		}
	}
}
