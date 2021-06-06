// 53 - II. 0- n-1中缺失的数字
/* 
一个长度为n-1的递增排序数组中的所有数字都是唯一的，
并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字
中有且只有一个数字不在该数组中，请找出这个数字。

输入: [0,1,3]
输出: 2

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
*/
const arr = [0, 1, 3, 4]

// ! 指针法
var missingNumber = function (nums) {
	let pointer = 0,
		res
	for (let i = 0; i <= nums.length + 1; ++i) {
		if (pointer === nums.length) {
			res = nums[nums.length - 1] + 1
			break
		}
		if (pointer !== nums[i]) {
			res = pointer
			break
		}
		++pointer
	}
	return res
}

console.log(missingNumber(arr))
