// 11旋转数组的最小数字
let temp = [3, 4, 5, 1, 2]

const minArray = (arr) => {
	const min = Math.min(...arr)
	let arr1 = arr
	arr1.every((item, index, self) => {
		if (arr1[0] === min) return false
		if (arr1[0] > min) {
			arr1.push(arr1.shift())
			return true
		}
	})
	return arr1[0]
}

console.log(minArray(temp))
