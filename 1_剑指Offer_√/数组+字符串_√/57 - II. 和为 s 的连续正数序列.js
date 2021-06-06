// 57 - II. 和为 s 的连续正数序列
/* 
输入一个正整数 target ，输出所有和为 target 的连续正整数序列
（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
*/
/* 
! 数组求和
! const sum=temp.reduce((pre,cur)=> pre+cur)
*/
var findContinuousSequence = function (target) {
	let left = 1
	let right = 2
	let res = []

	while (left < right) {
		let sum = ((left + right) * (right - left + 1)) / 2
		if (sum == target) {
			let arr = []
			for (let k = left; k <= right; k++) {
				arr[k - left] = k
			}
			res.push(arr)
			left++
		} else if (sum < target) {
			right++
		} else {
			left++
		}
	}

	return res
}
