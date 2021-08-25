// 1356. 根据数字二进制下 1 的数目排序
var sortByBits = function (arr) {
	const helper = (number) => {
		return number.toString(2).replace(/[^1]/g, '').length
	}
	console.log(helper(3))
	//题目要求， 如果完全一致，则按照数值大小排序
	arr.sort((a, b) => a - b)
	arr.sort((a, b) => {
		return helper(a) - helper(b)
	})
	return arr
}

const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]
console.log(sortByBits(arr))
