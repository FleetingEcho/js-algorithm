// 50. 第一个只出现一次的字符
/* 
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
*/
/* s = "abaccdeff"
返回 "b"

s = "" 
返回 " "
*/
const s = 'cc'
var firstUniqChar = function (s) {
	if (s === '') return ' '
	const map = new Map()
	let count, res
	for (let i = 0; i < s.length; ++i) {
		if (!map.has(s[i])) {
			count = 1
		} else {
			count++
		}
		map.set(s[i], count)
	}

	;[...map.keys()].some((item) => {
		if (map.get(item) === 1) {
			res = item
			return true
		} else {
			res = ' '
		}
	})
	return res
}
console.log(firstUniqChar(s))
