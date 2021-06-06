// 53 - I. 在排序数组中查找数字 I
/* 
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
*/

var search = function (nums, target) {
	const map = new Map()
	let count = 1
	for (let i = 0; i < nums.length; i++) {
		if (!map.has(nums[i])) {
			map.set(nums[i], count)
			continue
		}
		let temp = map.get(nums[i])
		map.set(nums[i], ++temp)
	}
	let res = map.get(target)
	return res === undefined ? 0 : res
}
const nums = [5, 7, 7, 8, 8, 10]
const tar = 6
console.log(search(nums, tar))
