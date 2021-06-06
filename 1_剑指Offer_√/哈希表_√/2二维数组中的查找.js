// 2二维数组中的查找
const findNumberIn2DArray = (matrix, target) => {
	let flag = false
	for (let arr of matrix) {
		if (flag === true) break
		// 用some减少遍历负担，找到立刻退出
		arr.some((item, index, self) => {
			if (target === item) {
				flag = true
				return true
			} else {
				return false
			}
		})
	}
	return flag
}

const m1 = [
	[1, 4, 7, 11, 15],
	[2, 5, 8, 12, 19],
	[3, 6, 9, 16, 22],
	[10, 13, 14, 17, 24],
	[18, 21, 23, 26, 30],
]

console.log(findNumberIn2DArray(m1, 20))
