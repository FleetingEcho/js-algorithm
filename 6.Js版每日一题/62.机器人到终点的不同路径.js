// 动态规划
// 62.机器人到终点的不同路径
/* 
1	1	1	1	   1 	 1	  1
1	2	3	4	   5 	 6	  7
1	3	6	10	15	 21	  28

*/
var uniquePaths = function (m, n) {
	const dp = new Array(m)
	for (let i = 0; i < n; i++) {
		dp[i] = new Array(m)
		dp[i][0] = 1
	}
	for (let j = 0; j < m; j++) {
		dp[0][j] = 1
	}
	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
		}
	}
	return dp[n - 1][m - 1]
}

// 动态规划优化
// 由于每次都是走一步。并且只向右或者向下

var uniquePaths = function (m, n) {
	const dp = new Array(n).fill(1)
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[j] = dp[j] + dp[j - 1]
		}
	}
	return dp[n - 1]
}

// DFS   一般小于50*50可以

var uniquePaths = function (m, n) {
	const cache = new Map()
	function dfs(m, n) {
		const keys = [`${m}-${n}`, `${n}-${m}`]
		for (const key of keys) {
			if (cache.has(key)) {
				return cache.get(key)
			}
		}
		let sum = 0
		if (m === 0 && n === 0) {
			return 1
		}
		if (m > 0) {
			sum += dfs(m - 1, n)
		}
		if (n > 0) {
			sum += dfs(m, n - 1)
		}
		for (const key of keys) {
			cache.set(key, sum)
		}
		return sum
	}
	return dfs(m - 1, n - 1)
}
