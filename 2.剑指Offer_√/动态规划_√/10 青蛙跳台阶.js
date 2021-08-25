// 10 青蛙跳台阶
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// !动态规划思想   --由底向上通过迭代解决问题
function numWays(n) {
	let over = 1000000007
	const dp = new Array(n).fill(n)
	dp[0] = 1
	dp[1] = 1
	dp[2] = 2
	for (let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 2] + dp[i - 1]) % over
	}
	return dp[n]
}

//!  也是斐波那契数列变形
var numWays = function (n) {
	let n1 = 1,
		n2 = 1,
		sum
	for (let i = 0; i < n; i++) {
		sum = (n1 + n2) % 1000000007
		n1 = n2
		n2 = sum
	}
	return n1
}
