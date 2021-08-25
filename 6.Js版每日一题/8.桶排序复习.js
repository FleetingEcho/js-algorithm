// 8.桶排序复习
// 桶排序
// 缺点是内部不能有小数 / 负数。
function bucketSort(arr, num = 5) {
	const len = arr.length
	if (len === 0) return arr
	const max = Math.max(...arr)
	const min = Math.min(...arr)
	const count = Math.floor((max - min) / num) + 1
	const buckets = new Array(count).fill(0).map((v) => new Array())
	for (let i = 0; i < len; i++) {
		let key = Math.floor((arr[i] - min) / num)
		buckets[key].push(arr[i])
	}
	arr = []
	for (let item of buckets) {
		arr = arr.concat(quickSort(item)) //内部使用快速排序
	}
	return arr
}

// 快速排序
function quickSort(arr) {
	if (arr.length <= 1) return arr
	let right = [],
		left = [],
		keys = arr.shift()
	for (let value of arr) {
		if (value > keys) {
			right.push(value)
		} else {
			left.push(value)
		}
	}
	return quickSort(left).concat(keys, quickSort(right))
}

// console.log(bucketSort([3,44,28,6,300,2,3,5,1999,39,20,11,5]));
console.log(bucketSort([3, 44, 28, 6, 300, 2, 3, 5, 1999, 39, 20, 11, 5], 5))
