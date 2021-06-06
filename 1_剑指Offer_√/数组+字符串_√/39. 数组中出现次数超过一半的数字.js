// 39. 数组中出现次数超过一半的数字
/* 
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
*/
// const arr=[1, 2, 3, 2, 2, 2, 5, 4, 2]
const arr = [10, 9, 9, 9, 10]
var majorityElement = function (nums) {
	if (nums.length === 0) return 0
	let res,
		midLength = Math.ceil(nums.length / 2),
		count
	let temp = new Map()
	nums.map((item) => {
		if (!temp.has(item)) {
			count = 1
		} else {
			count = temp.get(item)
			count++
		}
		temp.set(item, count)
	})
	const key = [...temp.keys()]
	key.some((item) => {
		if (temp.get(item) >= midLength) {
			res = item
			return true
		}
	})
	return res
}
console.log(majorityElement(arr))
