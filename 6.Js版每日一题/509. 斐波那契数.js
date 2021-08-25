// 509. 斐波那契数
var fib = function (N) {
	return N === 0 ? 0 : N < 3 ? 1 : fib(N - 1) + fib(N - 2)
}

// 动态规划
var fib = function (N) {
	let dp = new Uint32Array(N + 1)
	let i = 1
	dp[1] = 1
	while (i++ < N) dp[i] = dp[i - 1] + dp[i - 2]
	return N ? dp[N] : 0
}
