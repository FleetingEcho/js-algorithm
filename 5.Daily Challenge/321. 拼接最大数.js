// 321. 拼接最大数
// 分治， 数学
function maxNumber(nums1, nums2, k) {
	function pick_max(nums, k) {
		let stack = []
		let drop = nums.length - k
		for (let num of nums) {
			// while(drop && stack && stack[stack.length-1] < num){
			while (stack && stack[stack.length - 1] < num && drop) {
				stack.pop()
				drop--
			}
			stack.push(num)
		}
		return stack.slice(0, k)
	}

	var merge = (A, B) => {
		let res = []
		// 永远比第一个
		while (A.length > 0 || B.length > 0) {
			bigger = A > B ? A : B
			res.push(bigger[0])
			bigger.shift()
		}
		return res
	}

	let res = BigInt(0)
	for (let i = 0; i <= k; i++) {
		if (i <= nums1.length && k - i <= nums2.length) {
			let temp = BigInt(merge(pick_max(nums1, i), pick_max(nums2, k - i)).join(''))
			res = temp > res ? temp : res
		}
	}

	return String(res).split('')
}

// 注意大数使用精度有限，必须使用BigInt进行比较

var maxNumber = function (nums1, nums2, k) {
	var pickmax = (nums, k) => {
		let stack = []
		let drop = nums.length - k
		for (const num of nums) {
			while (stack && stack[stack.length - 1] < num && drop) {
				stack.pop()
				drop--
			}
			stack.push(num)
		}
		return stack.slice(0, k)
	}

	var merge = (n1, n2) => {
		let res = []
		// 永远比第一个
		while (n1.length > 0 || n2.length > 0) {
			bigger = n1 > n2 ? n1 : n2
			res.push(bigger[0])
			bigger.shift()
		}
		return res
	}

	let res = []
	for (let i = 0; i <= k; i++) {
		if (i <= nums1.length && k - i <= nums2.length) {
			res.push(merge(pickmax(nums1, i), pickmax(nums2, k - i)))
		}
	}
	return res.sort((a, b) => {
		if (a > b) return -1
		else if (a < b) return 1
		else return 0
	})[0]
}
