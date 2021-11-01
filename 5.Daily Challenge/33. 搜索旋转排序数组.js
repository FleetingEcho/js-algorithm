// 33. 搜索旋转排序数组
var search = function (nums, target) {
	//不用去重，因为每个值都独一无二
	// base case
	if (nums.length === 1) {
		return nums[0] === target ? 0 : -1
	}

	// 左右开始
	let l = 0,
		r = nums.length - 1
	while (l <= r) {
		const mid = l + ((r - l) >>> 1)
		let midVal = nums[mid]
		if (midVal === target) return mid
		// 常规递增
		if (midVal >= nums[0]) {
			if (target >= nums[0] && target <= midVal) {
				r = mid - 1 //搜左
			} else {
				l = mid + 1 //搜右
			}
		}
		// [10,11,12,2,3,4,5]
		else {
			// 搜右边
			if (midVal <= target && target <= nums[nums.length - 1]) {
				l = mid + 1 //搜右
			} else {
				r = mid - 1 //搜左
			}
		}
	}
	return -1
}
