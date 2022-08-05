namespace LeetCode96 {
	// 备忘录
	function numTrees(n: number) {
		// 备忘录的值初始化为 0
		let memo: number[][] = new Array(n + 1).fill(0).map((v) => new Array(n + 1).fill(0))

		function count(lo: number, hi: number) {
			if (lo > hi) return 1 // 空节点，也算一种情况
			if (memo[lo][hi] != 0) return memo[lo][hi]

			let res = 0
			for (let mid = lo; mid <= hi; mid++) {
				let left = count(lo, mid - 1)
				let right = count(mid + 1, hi)
				res += left * right
			}
			memo[lo][hi] = res // 将结果存入备忘录
			return res
		}
		return count(1, n)
	}
}
