// 217. 存在重复元素
const containsDuplicate = function (nums: number[]) {
	return nums.length !== new Set(nums).size
}
