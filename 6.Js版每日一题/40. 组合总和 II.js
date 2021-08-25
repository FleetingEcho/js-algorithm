/*
40. 组合总和 II 
输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

数值不能重复
 */

var combinationSum2 = function (candidates, target) {
	let res = []
	let visited = new Set()
	let dfs = (start, arr, result) => {
		if (result === target) {
			// 这里去重res
			let tmp = arr
				.slice()
				.sort((a, b) => a - b)
				.join('.') //去重数组内容
			if (!visited.has(tmp)) {
				// 判断有无重复路径
				res.push(arr.slice())
			}
			visited.add(tmp)
			return
		} else if (result > target) {
			return
		}
		for (let i = start; i < candidates.length; i++) {
			arr.push(candidates[i])
			// 这里去重，
			dfs(i + 1, arr, result + candidates[i])
			arr.pop()
		}
	}
	dfs(0, [], 0) //从0开始
	return res
}
