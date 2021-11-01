/* 
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

*/

/* 
DP
可以用数组dp[i]表示正整数i的最少个完全平方数表达
状态转移方程 dp[i] = min(i, 1 + ∑(dp[i - a^2])), a^2 <= i
*/
function numSquares_DP(n: number) {
	let dp = new Array(n + 1).fill(0)
	for (let i = 1; i <= n; i++) {
		dp[i] = i
		for (let j = 1; j * j <= i; j++) {
			dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
		}
	}
	return dp[n]
}

// console.log(numSquares(12))

// BFS 加备忘录

const _numSquares = function (target: number) {
	const limit = Math.floor(target ** 0.5)
	const visited = new Set([0])
	const queue = [0]
	let step = 0
	while (queue.length !== 0) {
		const size = queue.length
		for (let i = 0; i < size; i++) {
			const cur = queue.shift() as number
			if (cur === target) return step
			for (let j = 1; j <= limit; j++) {
				const sum = cur + Math.pow(j, 2)
				if (sum > target) break
				if (!visited.has(sum)) {
					queue.push(sum)
					visited.add(sum)
				}
			}
		}
		step++
	}
}

// DFS 解法 +记忆化
type _type = (target: number) => number
const numSquares: _type = (target) => {
	const map = new Map()
	const dfs: _type = (n) => {
		if (map.has(n)) return map.get(n)
		const limit = Math.floor(n ** 0.5)
		let res = n
		for (let i = limit; i > 0; i--) {
			res = Math.min(res, 1 + dfs(n - i * i))
		}
		map.set(n, res)
		return res
	}
	return dfs(target)
}

// BFS
// 不加备忘录会超时
// const _numSquares = function (n: number) {
// 	let res = 0
// 	let queue = [n]
// 	while (queue.length !== 0) {
// 		let size = queue.length
// 		for (let i = size; i > 0; i--) {
// 			let cur = queue.shift() as number
// 			let limit = Math.floor(cur ** 0.5)
// 			for (let j = limit; j > 0; j--) {
// 				let rem = cur - j * j
// 				if (rem === 0) {
// 					return res
// 				}
// 				queue.push(rem)
// 			}
// 		}
// 		res++
// 	}
// }

// https://leetcode-cn.com/problems/perfect-squares/solution/ji-yi-hua-dfs-dong-tai-gui-hua-bfs-zui-d-xkjf/
