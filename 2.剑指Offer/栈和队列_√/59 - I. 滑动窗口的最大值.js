// 59 - I. 滑动窗口的最大值
// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
/* 
! 单调队列
*/
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
var maxSlidingWindow = function (nums, k) {
	if (nums.length == 0 || k == 0) {
		return []
	}
	let queue = []
	let res = []
	for (let right = 0, left = 1 - k; right < nums.length; left++, right++) {
		// 如果queue的头部和窗口左边-1一致，说明queue该清理一位数了
		if (left > 0 && queue[0] == nums[left - 1]) {
			queue.shift()
		}
		// 如果新的nums[right]大于queue
		// 需要保证queue始终递减，则直接pop()直到尾部 > nums[right],继续递减
		while (queue.length != 0 && queue[queue.length - 1] < nums[right]) {
			queue.pop()
		}
		// queue添加进right值
		queue.push(nums[right])
		//
		if (left >= 0) {
			// queue[]始终是由大到小，递减
			res[left] = queue[0]
		}
	}
	return res
}
