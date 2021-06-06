// 56 - I. 数组中数字出现的次数
/* 
一个整型数组 nums 里除两个数字之外，
其他数字都出现了两次。请写程序找出这两个只出现一次的数字。
要求时间复杂度是O(n)，空间复杂度是O(1)。
O(1)，只需要常数的空间存放若干变量。
*/

// ! O(N)的空间复杂度可以用map
/* 
时间复杂度：O(n)，我们只需要遍历数组1次。
空间复杂度：O(n)。
*/
var singleNumbers = function (nums) {
	let map = new Map()
	let key
	for (let i = 0; i < nums.length; i++) {
		key = nums[i]
		if (map.has(key)) {
			map.delete(key)
		} else {
			map.set(key, 1)
		}
	}
	return [...map.keys()]
}

// ! 位运算   (另一种O(N)的复杂度可以用map)
/* 
输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
*/
var singleNumbers = function (nums) {
	let temp = 0
	nums.forEach((num) => {
		temp ^= num
	})
	// temp=111
	let div = 1
	while ((div & temp) == 0) {
		div <<= 1
	}
	let a = 0,
		b = 0
	nums.forEach((num) => {
		if ((div & num) == 0) {
			a ^= num
		} else {
			b ^= num
		}
	})
	return [a, b]
}
