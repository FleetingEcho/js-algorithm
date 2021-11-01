// 34. 二分_在排序数组中查找元素的位置
// 通过找右边界确定左边界
var searchRange = function (nums, target) {
	let mid, midL, midR
	// 搜索右边界
	function searchR(left, right, target) {
		while (left <= right) {
			mid = (left + right) >> 1
			if (nums[mid] <= target) left = mid + 1
			else right = mid - 1
		}
		return right
	}
	// 在区间[0, nums.length - 1]搜索target的右边界midR
	midR = searchR(0, nums.length - 1, target)
	// midR < 0说明超过边界；nums[midR] !== target说明无此元素；
	if (midR < 0 || nums[midR] !== target) return [-1, -1]
	// 在区间[0, midR - 1]搜索target - 1的右边界midL
	midL = searchR(0, midR - 1, target - 1)
	return [midL + 1, midR]
}

// 我的方法，左右开工。。。
function searchRange(nums, target) {
	let midL, midR
	midR = searchR(0, nums.length - 1, target, nums)
	midL = searchL(0, midR - 1, target, nums)
	// 最后要检查 right 越界的情况
	if (midL >= nums.length || nums[midL] != target) return [-1, -1]
	if (midR < 0 || nums[midR] != target) return [-1, -1]
	return [midL, midR]
}

var searchR = (left, right, target, nums) => {
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2)
		if (nums[mid] < target) {
			left = mid + 1
		} else if (nums[mid] > target) {
			right = mid - 1
		} else if (nums[mid] == target) {
			//! 别返回，锁定右侧边界
			left = mid + 1
		}
	}
	return right
}

var searchL = (left, right, target, nums) => {
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2)
		if (nums[mid] < target) {
			left = mid + 1
		} else if (nums[mid] > target) {
			right = mid - 1
		} else if (nums[mid] == target) {
			//! 别返回，锁定左侧边界
			right = mid - 1
		}
	}
	// 最后要检查 left 越界的情况
	return left
}
