// 239. 滑动窗口最大值
/* 
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

// 普通做法是速度过慢 ----测试数据如果10^5 位数，一定超时
function maxSlidingWindow1(arr: number[], k: number) {
	let window = []
	let left = 0,
		right = 0
	let valid = []
	while (right < arr.length) {
		// 右移窗口
		let cur = arr[right]
		if (right < k - 1) {
			window.push(cur)
		} else {
			// 左移窗口
			window.push(cur)
			const max = Math.max.apply(null, window)
			valid.push(max)
			window.shift()
		}
		right++
	}
	return valid
}

// =======================================================
// 单调队列

class MonotonicQueue {
	// 单调递减
	data: number[]
	constructor() {
		this.data = []
	}
	push(n: number) {
		while (this.data.length !== 0 && this.data[this.data.length - 1] < n) {
			this.data.pop()
		}
		this.data.push(n)
	}

	max() {
		return this.data[0]
	}

	pop(n: number) {
		if (this.data.length !== 0 && this.data[0] == n) {
			this.data.shift()
		}
	}
}

function maxSlidingWindow(nums: number[], k: number) {
	let window = new MonotonicQueue()
	let res = []
	for (let i = 0; i < nums.length; i++) {
		if (i < k - 1) {
			//先填满窗口的前 k - 1
			window.push(nums[i])
		} else {
			// 窗口向前滑动
			window.push(nums[i])
			res.push(window.max())
			window.pop(nums[i - k + 1])
		}
	}
	return res
}

// =======================================================
