// 44. 数字序列中某一位的数字
/* 
数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，
第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。
请写一个函数，求任意第n位对应的数字。

输入：n = 3
输出：3

输入：n = 11
输出：0
*/
/* 
写出这些数据，可以发现：

1 位数字有 9 个：1-9
2 位数字有 90 个：10-99
3 位数字有 900 个：100-999
k 位数字有 9 * 10^k 个
所以解决思路就是先通过循环，确定所要查找的数字落在第几位。
最后通过计算找出数字即可。例如对于 n=13 来说，过程如下：

n 大于 9，说明不是 1 位数字，n 更新为 n - 9 = 4。继续循环。
n 小于 90，说明是 2 位数字。
计算要找的数字 num：num = 10 + int(4/2) - 1 = 11
计算结果在 num 中的位置：pos = 4 - 2 * (11 - 10) - 1 = 1
*/
// ! n为下标
var findNthDigit = function (n) {
	for (let bit = 1; bit < 32; ++bit) {
		const startNum = Math.pow(10, bit - 1)
		const bitSum = 9 * startNum * bit
		if (n > bitSum) {
			n -= bitSum
		} else {
			// * n为下标
			let num = startNum + Math.ceil(n / bit) - 1
			let position = n - bit * (num - startNum) - 1
			return num.toString(10)[position]
		}
	}
}
