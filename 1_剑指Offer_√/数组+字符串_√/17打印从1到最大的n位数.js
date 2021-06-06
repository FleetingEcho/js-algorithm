// 17打印从1到最大的n位数
/* 

输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，
则打印出 1、2、3 一直到最大的 3 位数 999。
*/
var printNumbers = function (n) {
	let arr = [],
		max = ''
	while (n > 0) {
		max += '9'
		n--
	}
	maxVal = Number(max)
	for (let i = 1; i <= maxVal; i++) {
		arr.push(i)
	}
	return arr
}
console.log(printNumbers(2))
