// 67. 正则_把字符串转换成整数
var strToInt = function (str) {
	let res = str.match(/^\s*[+-]?\d+/)
	if (!res) return 0
	// 符号部分：[+-]， \s空格开头
	res = str.match(/^\s*[+-]?\d+/)[0].trim()
	if (res >= Math.pow(2, 31)) {
		return Math.pow(2, 31) - 1
	} else if (res <= Math.pow(-2, 31)) {
		return Math.pow(-2, 31)
	} else {
		return res
	}
}
