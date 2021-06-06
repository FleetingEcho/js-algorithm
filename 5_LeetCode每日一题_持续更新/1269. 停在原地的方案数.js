/* 

有一个长度为 arrLen 的数组，开始有一个指针在索引 0 处。

每一步操作中，你可以将指针向左或向右移动 1 步，或者停在原地（指针不能被移动到数组范围外）。

给你两个整数 steps 和 arrLen ，请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

由于答案可能会很大，请返回方案数 模 10^9 + 7 后的结果。

输入：steps = 3, arrLen = 2
输出：4
解释：3 步后，总共有 4 种不同的方法可以停在索引 0 处。
向右，向左，不动
不动，向右，向左
向右，不动，向左
不动，不动，不动
*/

const mod = 1e9 + 7
function numWays(steps, len) {
	let max = Math.min(Math.floor(steps / 2), len - 1)
	let f = new Array(steps + 1).fill(0).map((_) => new Array(max + 1).fill(0))

	console.log(f)
	f[steps][0] = 1
	for (let i = steps - 1; i >= 0; i--) {
		for (let j = 0; j <= max; j++) {
			f[i][j] = (f[i][j] + f[i + 1][j]) % mod
			if (j - 1 >= 0) f[i][j] = (f[i][j] + f[i + 1][j - 1]) % mod
			if (j + 1 <= max) f[i][j] = (f[i][j] + f[i + 1][j + 1]) % mod
		}
	}
	return f[0][0]
}
// 优化---- 剪枝， 因为随着「可操作次数」的减少，「可达到的最远位置」下标也会逐步缩小。从目标状态 f[0][0]f[0][0] 进行倒推的话，会发现「可达到的最远位置」等于「可操作次数」。
const mod = 1e9 + 7
function numWays(steps, len) {
	let max = Math.floor(Math.min(steps / 2, len - 1))
	let f = new Array(steps + 1).fill(0).map((_) => new Array(max + 1).fill(0))
	f[steps][0] = 1
	for (let i = steps - 1; i >= 0; i--) {
		let edge = Math.floor(Math.min(i, max))
		for (let j = 0; j <= edge; j++) {
			f[i][j] = (f[i][j] + f[i + 1][j]) % mod
			if (j - 1 >= 0) f[i][j] = (f[i][j] + f[i + 1][j - 1]) % mod
			if (j + 1 <= max) f[i][j] = (f[i][j] + f[i + 1][j + 1]) % mod
		}
	}
	return f[0][0]
}
