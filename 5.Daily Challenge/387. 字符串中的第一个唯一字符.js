// 387. 字符串中的第一个唯一字符
/* 
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
*/

const firstUniqChar = function (s) {
	let h = new Map(),
		i = 0
	while (i < s.length) {
		h.set(s[i], h.has(s[i]) ? h.get(s[i]) + 1 : 1)
		i++
	}
	let res = -1
	Array.from(h).some(([key, val], index) => {
		if (val === 1) {
			res = s.indexOf(key)
			return true
		}
	})
	return res
}
