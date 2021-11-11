namespace LeetCode1584 {
	function minCostConnectPoints(points: number[][]) {
		let n = points.length
		// 生成所有边及权重
		let baseArr: any[] = []
		let edges = new PriorityQueue(baseArr, (a, b) => a[2] - b[2])
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
		// 执行 Kruskal 算法
		let mst = 0
		let unionFind = new UnionFind(n)
		while (edges.size !== 0) {
			let edge = edges.shift()
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
		return mst
	}

	// 并查集
	class UnionFind {
		private total: number // 连通分量个数
		private parent: number[] // 存储一棵树
		private size: number[] // 记录树的“重量”
		constructor(n: number) {
			this.total = n
			this.parent = new Array(n).fill(0).map((_, index) => index) // [ 0,1,2,3,4,...]
			this.size = new Array(n).fill(1)
		}
		connected(p: number, q: number) {
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
		union(p: number, q: number) {
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

	class Heap<T> {
		array: T[]
		comparator: (a: any, b: any) => number
		constructor(comparator = (a: any, b: any) => a - b) {
			this.array = []
			this.comparator = (a: any, b: any) => comparator(this.array[a], this.array[b])
		}

		add(value: T) {
			this.array.push(value)
			this.bubbleUp()
		}

		peek = () => this.array[0]

		remove(index = 0) {
			if (!this.size) return null
			this.swap(index, this.size - 1) // swap with last
			const value = this.array.pop() // remove element
			this.bubbleDown(index)
			return value
		}

		get size() {
			return this.array.length
		}
		get self(): any[] {
			return this.array
		}
		bubbleUp() {
			let index = this.size - 1
			const parent = (i: number) => Math.ceil(i / 2 - 1)
			while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
				this.swap(parent(index), index)
				index = parent(index)
			}
		}

		bubbleDown(index = 0) {
			let curr = index
			const left = (i: number) => 2 * i + 1
			const right = (i: number) => 2 * i + 2
			const getTopChild = (i: number) =>
				right(i) < this.size && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i)

			while (left(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
				const next = getTopChild(curr)
				this.swap(curr, next)
				curr = next
			}
		}

		swap(i1: number, i2: number) {
			;[this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]]
		}
	}
	class PriorityQueue<T> extends Heap<T> {
		constructor(iterable: T[] = [], comparator = (a: any, b: any) => a - b) {
			super(comparator)
			Array.from(iterable).forEach((el) => this.add(el))
		}

		push = (value: T) => super.add(value)
		shift = () => super.remove()
	}
}

// LeetCode1584.test()

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
