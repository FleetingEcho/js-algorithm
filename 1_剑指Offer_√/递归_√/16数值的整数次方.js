// 16数值的整数次方
/* 
实现函数double Power(double base, int exponent)，求base的exponent次方。
不得使用库函数，同时不需要考虑大数问题。
*/

/* 

输入: 2.00000, 10
输出: 1024.00000
示例 2:

输入: 2.10000, 3
输出: 9.26100
示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
*/
var myPow = function (x, n) {
	if (n === 0) return Number(1).toFixed(5)
	if (n === 1) return x
	// let first=Number(1).toFixed(5)
	let init = x.toFixed(5)
	let flag = n > 0 ? true : false
	n = n > 0 ? n : Math.abs(n)
	for (let i = 2; i <= n; ++i) {
		init = init * x
	}
	init = flag === true ? init : 1 / init
	return init
}
// 位运算

/* 
! 二分法！！！
为了方便讨论，假设指数exponent是正数。那么递归式如下：

如果exponent是偶数，Power(base, exponent) = Power(base, exponent / 2) * Power(base, exponent / 2)
如果exponent是奇数，Power(base, exponent) = base * Power(base, exponent / 2) * Power(base, exponent / 2)
对于负指数exponent的情况，取其绝对值先计算。将最后结果取倒数即可。

时间复杂度是 O(logN)；由于采用递归结构，空间复杂度是 O(logN)。
*/

// console.log(myPow(2.10000,3));
console.log(myPow(2, -2))
// console.log(myPow(2.00020,10));
// console.log(myPow(34.00515,-3));

var myPow = function (x, n) {
	const isNegative = n < 0 // 是否是负指数
	const result = absMyPow(x, Math.abs(n))
	return isNegative ? 1 / result : result
}

function absMyPow(base, exponent) {
	if (exponent === 0) return 1
	if (exponent === 1) return base

	const subResult = absMyPow(base, Math.floor(exponent / 2))
	// 0==false ? 奇数: 偶数
	return exponent % 2 ? subResult * subResult * base : subResult * subResult
}
/* 为false的值
1、 "" 空的字符串
2、 为 0 的数字
3、 为 null 的对象
4、 为 undefined 的对象
5、 布尔值 false
6. NaN既不是true也不是false
*/
