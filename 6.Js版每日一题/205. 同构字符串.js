/* 
205. 同构字符串

输入: s = "egg", t = "add"
输出: true
输入: s = "foo", t = "bar"
输出: false

*/
// 同构字符串，每字符 首次出现、最后出现、指定位出现 索引始终相同
const isIsomorphic = function (s, t) {
	for (let i = 0; i < s.length; i++) if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
	return true
}

// map哈希表
const isIsomorphic = function (s, t) {
	let S = new Map(),
		T = new Map(),
		i = -1
	while (i++ < s.length) {
		const a = s[i],
			b = t[i]
		if (S.get(a) !== T.get(b)) return false
		S.set(a, i)
		T.set(b, i)
	}
	return true
}
