// 40. 最小的k个数
/* 
输入整数数组 arr ，找出其中最小的 k 个数。例如，
输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。


输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]

输入：arr = [0,1,2,1], k = 1
输出：[0]

*/
let arr = [0, 0, 0, 2, 0, 5],
	k = 1
var getLeastNumbers = function (arr, k) {
	let res = []
	arr = arr.sort((a, b) => a - b)
	arr.some((item, index, self) => {
		if (k === 0) return true
		if (index === k - 1) {
			res.push(item)
			return true
		}
		res.push(item)
	})
	return res
}
console.log(getLeastNumbers(arr, k))
