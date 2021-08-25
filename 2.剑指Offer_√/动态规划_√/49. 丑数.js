// 49. 丑数
/* 
我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。
求按从小到大的顺序的第 n 个丑数。
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。

1 是丑数。
n 不超过1690。
时间复杂度：O(n)。只需要 n 次遍历即可求得第 n 个丑数
空间复杂度：O(n)。需要保存动态规划的整体状态数组
*/
var nthUglyNumber = function (n) {
	let a = 0,
		b = 0,
		c = 0
	let dp = []
	dp[0] = 1
	for (let i = 1; i < n; i++) {
		let n2 = dp[a] * 2
		let n3 = dp[b] * 3
		let n5 = dp[c] * 5
		dp[i] = Math.min(n2, n3, n5)
		if (dp[i] == n2) {
			a++
		}
		if (dp[i] == n3) {
			b++
		}
		if (dp[i] == n5) {
			c++
		}
	}
	return dp[n - 1]
}

const nthUglyNumber = (n) => {
	const dp = new Array(n).fill(0)
	dp[0] = 1
	let factor2 = 0,
		factor3 = 0,
		factor5 = 0
	for (let i = 1; i < n; i++) {
		let n2 = dp[factor2] * 2
		let n3 = dp[factor3] * 3
		let n5 = dp[factor5] * 5
		// 每下一个数，必定是2,3，5的乘积；
		dp[i] = Math.min(n2, n3, n5)
		if (dp[i] === n2) factor2++
		if (dp[i] === n3) factor3++
		if (dp[i] === n5) factor5++
	}
	return dp[n - 1]
}
