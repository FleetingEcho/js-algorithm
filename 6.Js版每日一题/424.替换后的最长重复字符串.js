// 424.替换后的最长重复字符串
// 循环遍历字符串数组
/* 
输入：s = "ABAB", k = 2
输出：4
解释：用两个'A'替换为两个'B',反之亦然。

*/
const characterReplacement = function (s, k) {
	let left = 0,
		right = 0
	let maxCopy = 0
	let map = new Map()
	let arr = s.split('')

	arr.map((item) => {
		if (!map.has(item)) map.set(item, 0)
		map.set(item, map.get(item) + 1)
		maxCopy = Math.max(map.get(item), maxCopy)

		if (right - left + 1 - maxCopy > k) {
			map.set(arr[left], map.get(arr[left]) - 1) //向右移动
			left++
			right++
		} else {
			right++ //继续扩大窗口
		}
	})
	return Math.max(maxCopy, right - left)
}
