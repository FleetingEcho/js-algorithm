// 973. 最接近原点的 K 个点
/* 
输入：points = [[1,3],[-2,2]], K = 1
输出：[[-2,2]]
解释： 
(1, 3) 和原点之间的距离为 sqrt(10)，
(-2, 2) 和原点之间的距离为 sqrt(8)，
由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。


*/
// 方法1  优先级队列
var kClosest = function (points, K) {
	let queue = []
	queue.push(points[0])
	const myPow = ([a, b]) => Math.abs(a) ** 2 + Math.abs(b) ** 2
	for (let i = 1; i < points.length; i++) {
		while (queue.length !== 0 && myPow(queue[queue.length - 1]) > myPow(points[i])) {
			queue.pop()
		}
		queue.push(points[i])
	}
	return queue.slice(0, K)
}

// 快速排序
var kClosest = function (points, K) {
	if (points.length === 0 || K === 0) {
		return []
	}
	const myPow = ([a, b]) => Math.abs(a) ** 2 + Math.abs(b) ** 2
	const quickSort = (arr) => {
		if (arr.length <= 1) return arr
		let key = arr.shift()
		let left = [],
			right = []
		for (let item of arr) {
			if (myPow(item) < myPow(key)) {
				left.push(item)
			} else {
				right.push(item)
			}
		}
		return quickSort(left).concat([key], quickSort(right))
	}
	let res = quickSort(points)
	return res.slice(0, K)
}
let points = [
		[6, 10],
		[-3, 3],
		[-2, 5],
		[0, 2],
	],
	K = 3
// let points = [[3,3],[5,-1],[-2,4]], K = 2
console.log(kClosest(points, K))

// 方法2   快速排序
