// 845. 数组中的最长山脉
/* 
输入：[2,1,4,7,3,2,5]
输出：5
解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。
示例 2：

输入：[2,2,2]
输出：0
解释：不含 “山脉”。

*/

// 第一遍，写法错误；
var longestMountain = function (arr) {
	let tempL = []
	let tempR = []
	let len = arr.length
	let left = 0,
		right = arr.length - 1
	while (left + (len - right) <= len) {
		// 左边不是递增 / 右边不是递减
		// 长度奇数
		// if(arr.length%2!=0 &&arr[left]>arr[left-1] &&left==Math.floor(arr.length/2)){
		//   tempL.push(arr[left])
		//   // console.log(tempL);
		//   return tempL.concat(tempR).length
		// }
		while (tempL.length !== 0 && arr[left] >= arr[left + 1]) {
			tempL.shift()
		}
		while (arr[right] >= arr[right - 1] && tempR.length !== 0) {
			tempR.shift()
		}
		tempL.push(arr[left])
		console.log(tempL)
		console.log(left + '------' + right)
		left++
		if (arr[right] < arr[right - 1]) {
			tempR.unshift(arr[right])
			right--
		}
		// console.log(left);
	}
	// 偶数
	return tempL.concat(tempR).length
}

console.log(longestMountain1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 5, 4, 3, 2]))
// console.log(longestMountain([2,2,2,2,2]));

function longestMountain1(A) {
	const len = A.length
	let left = 0,
		right = 0
	let i = 0
	let res = 0
	while (i < len - 1) {
		// 山峰上升
		while (i < len - 1 && A[i + 1] > A[i]) {
			i++
			right = Math.max(right, i)
		}
		// 山峰下降
		while (right < len - 1 && A[right] > A[right + 1]) {
			right++
		}
		// 筛选长度
		if (i > left && i < right) {
			res = Math.max(res, right - left + 1)
		}
		left = i + 1
		i++
	}
	return res
}
