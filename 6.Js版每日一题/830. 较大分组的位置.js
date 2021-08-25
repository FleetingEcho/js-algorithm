// 830. 较大分组的位置
/* 
输入：s = "abbxxxxzzy"
输出：[[3,6]]
解释："xxxx" 是一个起始于 3 且终止于 6 的较大分组。
示例 2：

输入：s = "abc"
输出：[]
解释："a","b" 和 "c" 均不是符合要求的较大分组。
示例 3：

输入：s = "abcdddeeeeaabbbcd"
输出：[[3,5],[6,9],[12,14]]
解释：较大分组为 "ddd", "eeee" 和 "bbb"

*/

var largeGroupPositions = function (s) {
	let i = 0,
		start = 0,
		res = []
	// =s.length 时，JS数组越界不报错，处理类似 aaa 情况
	while (++i <= s.length)
		if (s[start] !== s[i]) {
			if (i - start >= 3) res.push([start, i - 1])
			start = i
		}
	return res
}
