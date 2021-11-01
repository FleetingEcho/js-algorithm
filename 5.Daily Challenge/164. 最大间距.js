// 164. 最大间距
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
// console.log(bucketSort([3,44,28,6,300,2,3,5,1999,39,20,11,5],5));

var maximumGap = function (nums) {
	const n = nums.length
	if (n < 2) {
		return 0
	}
	const min = Math.min(...nums)
	const max = Math.max(...nums)
	// 相邻数字的最大间距不会小于 ⌈(max−min)/(N−1)⌉
	const bucketSize = Math.max(1, Math.floor(max - min) / (n - 1))
	const count = Math.floor((max - min) / bucketSize) + 1

	const bucket = new Array(count).fill(0).map((x) => new Array(2).fill(-1)) //只存大小值即可
	for (let i = 0; i < n; i++) {
		const idx = Math.floor((nums[i] - min) / bucketSize)
		if (bucket[idx][0] === -1) {
			bucket[idx][0] = bucket[idx][1] = nums[i] //存入当前值
		} else {
			bucket[idx][0] = Math.min(bucket[idx][0], nums[i]) //取
			bucket[idx][1] = Math.max(bucket[idx][1], nums[i])
		}
	}
	// 元素之间的最大间距一定不会出现在某个桶的内部，而一定会出现在不同桶当中。
	let res = 0
	let prev = null
	for (let item of bucket) {
		if (item[0] == -1) {
			continue
		}
		if (prev !== null) {
			res = Math.max(res, item[0] - prev[1])
		}
		prev = item
	}
	return res
}
