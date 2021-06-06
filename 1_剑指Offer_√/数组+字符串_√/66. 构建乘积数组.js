// 66. 构建乘积数组
/* 
给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，
其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

输入: [1,2,3,4,5]
输出: [120,60,40,30,24]

*/
/* 
! 使用 数组遍历!
    A0  A1  A2  A3  A4  
B0  X   2   3   4    5     120
B1  1   X   3   4    5     60
B2  1   2   X   4    5     40
B3  1   2   3   X    5     30
B4  1   2   3   4    X     24

*/

var constructArr = function (arr) {
	let res = []
	let left = 1
	for (let i = 0; i < arr.length; i++) {
		res[i] = left
		left *= arr[i]
	}
	let right = 1
	for (let i = arr.length - 1; i >= 0; i--) {
		res[i] *= right
		right *= arr[i]
	}
	return res
}
