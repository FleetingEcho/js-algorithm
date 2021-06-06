// 56 - II. 数组中数字出现的次数 II
/* 
在一个数组 nums 中除一个数字只出现一次之外，
其他数字都出现了三次。请找出那个只出现一次的数字。

输入：nums = [3,4,3,3]
输出：4
示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1

*/
// const nums = [9,1,7,9,7,9,7]
const nums = [3, 4, 3, 3]
var singleNumber = function (nums) {
	const map = new Map()
	let count = 1,
		res
	for (let item of nums) {
		if (map.has(item)) {
			temp = map.get(item)
			map.set(item, ++temp)
			continue
		}
		map.set(item, count)
	}
	;[...map.keys()].some((item) => {
		if (map.get(item) === 1) {
			res = item
			return true
		}
	})
	return res
}

console.log(singleNumber(nums))
