// 389. 找不同
/* 
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。

*/

var findTheDifference = function (s, t) {
	const map = new Map()
	for (let i = 0; i < s.length; i++) {
		const val = map.get(s[i])
		map.set(s[i], val === undefined ? 1 : val + 1)
	}
	for (let i = 0; i < t.length; i++) {
		const val = map.get(t[i])
		if (val === 0 || val === undefined) {
			return t[i]
		} else {
			map.set(t[i], val - 1)
		}
	}
}
