// 14剪绳子
// 8，分为 2 3 3 时候乘积最大

// 使用动态规划 /贪心算法

/* 
将 i 拆分成 j 和 i−j 的和，且 i−j 不再拆分成多个正整数，此时的乘积是 j×(i−j)；
将 i 拆分成 j 和 i−j 的和，且 i−j 继续拆分成多个正整数，此时的乘积是 j×dp[i−j]。
 */
var cuttingRope = function (n) {
	const dp = new Array(n + 1).fill(1)
	for (let i = 2; i <= n; ++i) {
		for (let j = 1; j < i; ++j) {
			dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
		}
		console.log(dp)
	}

	return dp[n]
}

const cuttingRope = (n) => {
	const dp = new Array(n + 1).fill(1)
	dp[0] = 1
	dp[1] = 1
	dp[2] = 2
	for (let i = 2; i <= n; i++) {
		for (let j = 1; j < i; j++) {
			dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
		}
	}
}

console.log(cuttingRope(8))
// console.log(cuttingRope(2));

// 贪心算法

var cuttingRope1 = function (n) {
	if (n === 2) return 1
	if (n === 3) return 2
	// a的含义：n能拆成的3的个数
	const a = Math.floor(n / 3)
	const b = n % 3

	// n是3的倍数
	if (b === 0) return Math.pow(3, a)
	// n是 3k + 1，例如7。拆成3、3、1。由于有1对结果无法有贡献，所以最后的3、1换成4
	if (b === 1) return Math.pow(3, a - 1) * 4
	return Math.pow(3, a) * 2
}
