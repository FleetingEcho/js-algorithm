/* 
81.搜索旋转排序数组 II
输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true
*/

// 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。
// 输入: nums = [2,5,6,0,0,1,2], target = 3
// 输出: false

var search = function (nums, target) {
	//去重
	nums = [...new Set(nums)]
	// base case
	if (nums.length === 1) return nums[0] === target

	// 左右开始
	let l = 0,
		r = nums.length - 1
	while (l <= r) {
		const mid = l + ((r - l) >>> 1)
		let midVal = nums[mid]
		if (midVal === target) return true
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
	return false
}

// 投机取巧 直接判断
var search = function (nums, target) {
	return nums.includes(target)
}
