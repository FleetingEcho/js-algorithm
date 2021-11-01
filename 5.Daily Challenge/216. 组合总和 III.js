/* 
找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]

*/
// 216. 组合总和 III

const combinationSum3 = (k, n) => {
	const res = []
	const dfs = (start, comb, sum) => {
		// 满足条件:
		if (comb.length == k) {
			if (sum == n) {
				res.push(comb.slice())
			}
			return
		}
		for (let i = start; i <= 9; i++) {
			comb.push(i)
			dfs(i + 1, comb, sum + i)
			comb.pop() // 撤销
		}
	}

	dfs(1, [], 0)
	return res
}
