// 738. 单调递增的数字
function monotoneIncreasingDigits(N) {
	let arr = Array.from(String(N))
	let max = -1,
		idx = -1
	for (let i = 0; i < arr.length - 1; i++) {
		if (max < arr[i]) {
			max = arr[i]
			idx = i
		}
		if (arr[i] > arr[i + 1]) {
			arr[idx] -= 1
			for (let j = idx + 1; j < arr.length; j++) {
				arr[j] = '9'
			}
			break
		}
	}
	return Number(arr.join(''))
}

/* 
将N转化为数组
判断右边是否比左边大，如果是，把左边减一，右边变成9
从头遍历

*/
var monotoneIncreasingDigits = function (N) {
	var s = N.toString().split('')
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] > s[i + 1]) {
			s[i]--
			for (let j = i + 1; j < s.length; j++) s[j] = '9'
			i = -1
		}
	}
	return parseInt(s.join(''))
}
