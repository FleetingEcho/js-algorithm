namespace LeetCode1135 {
	// Union Find在 Kruskal 算法中的主要作用是保证最小生成树的合法性。

	function minimumCost(n: number, connections: number[][]) {
		// 城市编号为 1...n，所以初始化大小为 n + 1
		let unionFind = new UnionFind(n + 1)
		// 对所有边按照权重从小到大排序
		connections.sort((a, b) => a[2] - b[2])
		// 记录最小生成树的权重之和
		let mst = 0
		for (let edge of connections) {
			let u = edge[0]
			let v = edge[1]
			let weight = edge[2]
			// 若这条边会产生环，则不能加入 mst
			if (unionFind.connected(u, v)) {
				continue
			}
			// 若这条边不会产生环，则属于最小生成树
			mst += weight
			unionFind.union(u, v)
		}
		// 保证所有节点都被连通
		// 按理说 unionFind.count == 1 说明所有节点被连通
		// 但因为节点 0 没有被使用，所以 0 会额外占用一个连通分量
		return unionFind.count == 2 ? mst : -1
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
