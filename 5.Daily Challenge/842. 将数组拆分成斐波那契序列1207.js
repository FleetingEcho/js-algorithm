// 842. 将数组拆分成斐波那契序列1207
/* 
输入："123456579"
输出：[123,456,579]

斐波那契式序列是一个非负整数列表 F，且满足：

0 <= F[i] <= 2^31 - 1，（也就是说，每个整数都符合 32 位有符号整数类型）；
F.length >= 3；
对于所有的0 <= i < F.length - 2，都有 F[i] + F[i+1] = F[i+2] 成立。
*/

const max = 2 ** 31 - 1
let ans = []
var splitIntoFibonacci = function (S) {
	dfs([], S)
	return ans
}
var dfs = (curr, S) => {
	if (S.length === 0) {
		return (ans = curr)
	}

	if (curr.length <= 1) {
		// 数组中有 0 个或者 1 个元素，可以任意选择
		for (let i = 1; i < S.length; i++) {
			let str = S.slice(0, i)
			if (str.length > 1 && str.startsWith('0')) break
			let num = Number(str)
			if (num > max) break
			dfs(curr.concat(num), S.slice(i))
		}
	} else {
		// 数组长度大于等于 2，看看下一个数是否出现在剩余的字符串的开头，是则继续
		let len = curr.length
		let nextNum = String(curr[len - 1] + curr[len - 2])
		if (Number(nextNum) > max) return
		let targetIndex = S.indexOf(nextNum)
		if (targetIndex !== 0) {
			return //如果列表中至少有 2 个数，并且拆分出的数已经大于最后 2个数的和，就不需要继续尝试拆分了。
		}
		dfs(curr.concat(Number(S.slice(0, nextNum.length))), S.slice(nextNum.length))
	}
}

/* 
斐波那契式序列是一个非负整数列表 F，且满足：
0 <= F[i] <= 2^31 - 1，（也就是说，每个整数都符合 32 位有符号整数类型）；
F.length >= 3；
对于所有的0 <= i < F.length - 2，都有 F[i] + F[i+1] = F[i+2] 成立。

*/
function splitIntoFibonacci(S) {
	const max = 2 ** 31 - 1
	let res = []
	let len = S.length

	const dfs = (start, S, res) => {
		let size = res.length
		if (start == len) {
			return size > 2
		}
		let num = 0
		for (let i = start; i < len; i++) {
			num = 10 * num + Number(S.charAt(i))
			if (num >= max || num < 0) return false //是否超出范围
			if (size < 2 || num == res[size - 1] + res[size - 2]) {
				res.push(num)
				if (dfs(i + 1, S, res)) {
					return true
				}
				res.pop()
			}
			//判断是否以0开头
			if (Number(S.charAt(i)) == 0 && i == start) return false
		}
		return false
	}
	return dfs(0, S, res) ? res : []
}
