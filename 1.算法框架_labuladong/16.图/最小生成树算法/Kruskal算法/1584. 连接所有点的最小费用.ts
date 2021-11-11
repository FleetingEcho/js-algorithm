namespace LeetCode1584Common {
	function minCostConnectPoints(points: number[][]) {
		let n = points.length
		// 生成所有边及权重
		let edges = []
		for (let i = 0; i < n; i++) {
			for (let j = i + 1; j < n; j++) {
				let xi = points[i][0],
					yi = points[i][1],
					xj = points[j][0],
					yj = points[j][1]
				// 用坐标点在 points 中的索引表示坐标点
				edges.push([i, j, Math.abs(xi - xj) + Math.abs(yi - yj)])
			}
		}

		// 将边按照权重从小到大排序
		edges.sort((a, b) => a[2] - b[2])
		// 执行 Kruskal 算法
		let mst = 0
		let unionFind = new UnionFind<number>(n)
		for (let edge of edges) {
			let u = edge[0],
				v = edge[1],
				weight = edge[2]
			// 若这条边会产生环，则不能加入 mst
			if (unionFind.connected(u, v)) {
				continue
			}
			// 若这条边不会产生环，则属于最小生成树
			mst += weight
			unionFind.union(u, v)
		}
		return mst
	}

	// 并查集

	class UnionFind<T extends number> {
		private total: T // 连通分量个数
		private parent: number[] // 存储一棵树
		private size: number[] // 记录树的“重量”
		constructor(n: T) {
			this.total = n
			this.parent = new Array(n).fill(0).map((_, index) => index) // [ 0,1,2,3,4,...]
			this.size = new Array(n).fill(1)
		}
		connected(p: T, q: T) {
			let rootP = this.find(p)
			let rootQ = this.find(q)
			return rootP === rootQ
		}
		get count() {
			return this.total
		}
		find(x: number) {
			while (this.parent[x] !== x) {
				// 进行路径压缩
				this.parent[x] = this.parent[this.parent[x]]
				x = this.parent[x]
			}
			return x
		}
		union(p: T, q: T) {
			let rootP = this.find(p)
			let rootQ = this.find(q)
			if (rootP === rootQ) {
				return
			}

			// 小树接到大树下面，较平衡
			if (this.size[rootP] > this.size[rootQ]) {
				this.parent[rootQ] = rootP
				this.size[rootP] += this.size[rootQ]
			} else {
				this.parent[rootP] = rootQ
				this.size[rootQ] += this.size[rootP]
			}
			this.total--
		}
	}
}

// LeetCode1584Common.test()

/* 

	export const test = () => {
		const res = minCostConnectPoints([
			[0, 0],
			[2, 2],
			[3, 10],
			[5, 2],
			[7, 0],
		])
		console.log(res)
	}
	*/
