// 46. 把数字翻译成字符串
/* 
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，
1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。
请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
*/
// ! 递归本质是不断压栈再不断出栈。是自上而下解决问题，等待下面返回上来的结果

// ! 动态规划是自下而上解决问题，从已知的 case 出发，存储前面的状态，迭代出最后的结果。
const num = 12258

//*  方法1: 时间复杂度是O(n)，n 是状态转移的次数，空间复杂度是 O(n)。
const translateNum = (num) => {
	// "12258" [ 1, 1, 2, 3, 5, 5 ]
	const str = num.toString()
	const n = str.length

	const dp = new Array(n + 1)
	dp[0] = 1
	dp[1] = 1

	for (let i = 2; i < n + 1; i++) {
		const temp = Number(str[i - 2] + str[i - 1])
		//
		if (temp >= 10 && temp <= 25) {
			dp[i] = dp[i - 1] + dp[i - 2]
		} else {
			dp[i] = dp[i - 1]
		}
	}
	return dp[n] // 翻译前n个数的方法数，即翻译整个数字
	// return dp //[ 1, 1, 2, 3, 5, 5 ]
}

// * 降维后的方法  空间复杂度O(1)
const translateNum1 = (num) => {
	const str = num.toString()
	const n = str.length

	let prev = 1
	let cur = 1

	for (let i = 2; i < n + 1; i++) {
		const temp = Number(str[i - 2] + str[i - 1])
		if (temp >= 10 && temp <= 25) {
			let t = cur // 缓存上个状态
			cur = prev + cur // 当前状态 = 上上个状态 + 上个状态
			prev = t // 更新上上个状态
		} else {
			prev = cur // 这里容易忘了
		}
	}

	return cur
}

console.log(translateNum(num))
