// 395. 至少有K个重复字符的最长子串
var longestSubstring = function (s, k, h = {}, n = []) {
	for (var a of s) h[a] = (h[a] || 0) + 1
	for (var a in h) h[a] < k && n.push(a)
	return n.length ? s.split(new RegExp(n.join('|'))).reduce((p, v) => (v ? Math.max(p, longestSubstring(v, k)) : p), 0) : s.length
}

/* 
输入:
s = "ababbc", k = 2
输出:
5
*/
var longestSubstring = function (s, k) {
	if (!s) return 0
	const record = {}

	for (let i of s) {
		record[i] = (record[i] || 0) + 1
	}
	const fail = Object.keys(record).filter((key) => record[key] < k)
	if (fail.length === 0) return s.length //全部合格，返回
	let j = 0,
		max = 0

	for (let i = 0; i < s.length; i++) {
		if (fail.indexOf(s[i]) >= 0 && j <= i) {
			const sum = longestSubstring(s.slice(j, i), k) //判断j到i的子串
			max = Math.max(max, sum)
			j = i + 1
		}
	}
	const sum = longestSubstring(s.slice(j), k) //刚刚只不满足长度2的i之前的max,现在检测i之后的max
	max = Math.max(max, sum)
	return max
}
