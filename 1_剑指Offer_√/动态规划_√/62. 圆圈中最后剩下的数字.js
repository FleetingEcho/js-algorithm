// 62. 圆圈中最后剩下的数字
/* 
0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。
求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，
则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3

输入: n = 5, m = 3
输出: 3
*/
// ! 如果依靠暴力枚举的话，每次要遍历 m 个元素，遍历 n 次留下最后一个，时间复杂度达到了O(mn)O(mn)

// * 倒推，每次都从第一个开始计算，每次都删除第三个元素
// 详细讲解：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/huan-ge-jiao-du-ju-li-jie-jue-yue-se-fu-huan-by-as/
var lastRemaining = function (n, m) {
	let res = 0
	for (let i = 2; i <= n; i++) {
		res = (m + res) % i
	}
	return res
}

// 进阶: 如果要输出哪个数字，则：
let arr = [1, 2, 3, 100, 30, 204, 39, 11]
var lastRemaining = function (arr, m) {
	let n = arr.length
	let res = 0
	for (let i = 2; i <= n; i++) {
		res = (m + res) % i
	}
	return arr[res]
}
