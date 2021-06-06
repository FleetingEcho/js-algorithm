// 977. 有序数组的平方
/* 
原数组是非递减排列的，元素的平方和最大，要么是第一项，要么是最后一项。
维护头尾指针，所指向的元素，平方和更大者，安排到结果数组的最后一项。

指针相应的更新，继续比较头尾元素的平方和，较大者，安排到结果数组的倒数第二项。

以此类推。把结束数组的所有元素填满。

*/

var sortedSquares = function (A) {
	return A.map((i) => i * i).sort((a, b) => a - b)
}

//
const sortedSquares = (A) => {
	let start = 0
	let end = A.length - 1
	const res = new Array(A.length)

	for (let i = A.length - 1; i >= 0; i--) {
		if (A[start] ** 2 > A[end] ** 2) {
			res[i] = A[start] ** 2
			start++
		} else {
			res[i] = A[end] ** 2
			end--
		}
	}

	return res
}
