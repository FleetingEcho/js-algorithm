// 31.下一个大一些的排列
/* 
算法分为四步，以 3 5 4 3 2 1 举例：

从右开始，找第一个严格降序的数字，3 5 4 3 2 1 --> 3，索引记做 i
从右开始，找到第一个上一步找到数字大的 --> 4，索引记做 j
i 和 j 对应的数字对调位置，4 5 3 3 2 1
反转 i 的右侧，即可得到结果，4 1 2 3 3 5
*/

var nextPermutation = function (arr) {
	if (!arr || !arr.length) {
		return []
	}
	let i = arr.length - 2
	while (arr[i] >= arr[i + 1]) {
		i--
	}
	// 遍历到头部仍然没有找到，则反转整个数组
	if (i < 0) {
		return reverse(arr, 0, arr.length - 1)
	}
	//
	let j = arr.length - 1
	while (arr[j] <= arr[i]) {
		j--
	}
	// 此时j是第一个比arr[i]大的数字;
	;[arr[i], arr[j]] = [arr[j], arr[i]]
	reverse(arr, i + 1, arr.length - 1)

	return arr
}

function reverse(arr, l, r) {
	while (l < r) {
		;[arr[l], arr[r]] = [arr[r], arr[l]]
		l++
		r--
	}
	return arr
}
