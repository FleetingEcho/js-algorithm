// 0_二分搜索复习

//!   归一   [a,b,c]

/* 
找中间值:  mid>目标，则搜[left,mid-1] , mid<目标 [mid+1,right]

找左边值:  mid等于目标，则让right=mid-1，锁定和返回left值   mid>目标，则搜[left,mid-1] , mid<目标 [mid+1,right]

找右边值:  mid等于目标，则让left=mid+1，锁定和返回left值   mid>目标，则搜[left,mid-1] , mid<目标 [mid+1,right]

*/

// 查找中间值
function binary_search(nums, target) {
	let left = 0,
		right = nums.length - 1
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2) //位操作只适用于整数二分;
		if (nums[mid] < target) {
			left = mid + 1
		} else if (nums[mid] > target) {
			right = mid - 1
		} else if (nums[mid] == target) {
			// 直接返回
			return mid
		}
	}
	// 直接返回
	return -1
}

// 查找左临界值
function left_bound(nums, target) {
	let left = 0,
		right = nums.length - 1
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
	if (left >= nums.length || nums[left] != target) return -1
	return left
}

// 查找右临界值
function right_bound(nums, target) {
	let left = 0,
		right = nums.length - 1
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
	// 最后要检查 right 越界的情况
	if (right < 0 || nums[right] != target) return -1
	return right
}
