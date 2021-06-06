// 45. 把数组排成最小的数
/* 
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，
打印能拼接出的所有数字中最小的一个。

示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"
*/
const nums = [3, 30, 34, 5, 9]

/* 解题思路：
字符串：只要 x + y < y + x，即可认为 x "<" y
算法流程：

设置排序规则：只要 "" + x + y < "" + y + x，即可认为 x < y;
使用数组的 join() 方法将数组拼接成字符串。
代码： */
var minNumber = function (nums) {
	nums.sort((a, b) => {
		if ('' + a + b < '' + b + a) {
			return -1
		} else return 1
	})
	return nums.join('')
}
minNumber(nums)
