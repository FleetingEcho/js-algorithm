namespace LeetCode261 {
	// 判断输入的若干条边是否能构造出一棵树结构
	function validTree(n: number, edges: number[][]) {
		let unionFind = new UnionFind(n) // 初始化 0...n-1 共 n 个节点

		for (let edge of edges) {
			// 遍历所有边，将组成边的两个节点进行连接
			let u = edge[0]
			let v = edge[1]
			// 若两个节点已经在同一连通分量中，会产生环
			if (unionFind.connected(u, v)) {
				return false
			}
			// 这条边不会产生环，可以是树的一部分
			unionFind.union(u, v)
		}
		// 要保证最后只形成了一棵树，即只有一个连通分量
		return unionFind.count === 1
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
