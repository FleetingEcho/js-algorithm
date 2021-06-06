// 20. 表示数值的字符串
/* 
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"
都表示数值，
但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
*/
// !注意空格特殊情况  Number("")结果是0
var isNumber = function (s) {
	if (s.trim() === '') return false
	return isNaN(s.trim()) ? false : true
}
console.log(isNumber('1a3.14'))
console.log(isNumber('-1E-16'))
console.log(isNumber(' '))
console.log(isNaN('')) //是一个数字
console.log(Number('')) // 0
console.log(isNaN(' ')) // 是一个数字
console.log(Number(' ')) // 0
