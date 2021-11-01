// 978. 最长湍流子数组
// 滑动窗口
const maxTurbulenceSize = function (arr) {
	let pre = '='
	let i = 0
	let res = 1
	for (let j = 1; j < arr.length; j++) {
		let cur = arr[j - 1] === arr[j] ? '=' : arr[j - 1] > arr[j] ? '>' : '<'
		if (cur === pre) i = j - 1
		if (cur === '=') i = j
		res = Math.max(res, j - i + 1)
		pre = cur
	}
	return res
}
