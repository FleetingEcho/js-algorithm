// 137. 只出现一次的数字 II
const singleNumber = function (arr) {
	arr.sort((a, b) => a - b)
	for (let i = 0; i < arr.length; i += 3) {
		if (arr[i] != arr[i + 1]) return arr[i]
	}
}
