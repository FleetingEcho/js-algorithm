// 633. 平方数之和 --双指针
// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
var judgeSquareSum = function (c) {
	let left = 0
	let right = Math.floor(c ** 0.5)
	while (left <= right) {
		let sum = left ** 2 + right ** 2
		if (sum == c) return true
		// 如果平方和大于c，则将右指针减一，反之将左指针加一
		if (sum > c) right--
		else left++
	}
	return false
}
