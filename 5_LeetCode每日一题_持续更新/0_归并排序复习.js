// 0_归并排序复习

const reversePairs = (arr) => {
	console.time('123')
	const res = mergeSort(arr)
	console.timeEnd('123') //0.377ms
	return res
}
var mergeSort = (arr) => {
	const len = arr.length
	if (len < 2) return arr
	let middle = Math.floor(arr.length / 2)
	let left = arr.slice(0, middle)
	let right = arr.slice(middle)
	return merge(mergeSort(left), mergeSort(right))
}
var merge = (left, right) => {
	const result = []

	while (left.length > 0 && right.length > 0) {
		if (left[0] <= right[0]) {
			// 删除left第一位
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	// concat原因是left或right可能有一个先清空，但另一个仍有值
	return [...result, ...left, ...right]
}

const test = [-100, 11, 2, 3, -10, -99, 0, 2, 120, 555, 203, 5, 2, 10, -1, -2]

// console.log(reversePairs(test))

const go = (arr) => {
	console.time('123')
	const res = mergeSort1(arr)
	console.timeEnd('123') //0.377ms
	return res
}
const mergeSort1 = (arr) => {
	const len = arr.length
	if (len < 2) return arr
	let middle = Math.floor(arr.length / 2)
	let left = arr.slice(0, middle)
	let right = arr.slice(middle)
	const res = merge1(mergeSort1(left), mergeSort1(right))
	return res
}
var merge1 = (left, right) => {
	console.log(left.length)
	// 利用sort稳定排序
	return [...left, ...right].sort((a, b) => {
		if (a === b) return 0
		else return a - b
	})
}

console.log(go(test))
