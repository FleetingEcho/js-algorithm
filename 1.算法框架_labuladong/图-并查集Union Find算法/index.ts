namespace UnionFindCommon {
	// https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484751&idx=1&sn=a873c1f51d601bac17f5078c408cc3f6&scene=21#wechat_redirect
	class UF {
		count: number // 连通分量个数
		parent: number[] = [] // 存储一棵树
		size: number[] = [] // 记录树的“重量”
		constructor(n: number) {
			this.count = n
			this.parent = new Array(n).fill(0).map((_, index) => index) // [ 0,1,2,3,4,...]
			this.size = new Array(n).fill(1)
		}
		connected(p: number, q: number) {
			let rootP = this.find(p)
			let rootQ = this.find(q)
			return rootP === rootQ
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
			this.count--
		}
	}
}
