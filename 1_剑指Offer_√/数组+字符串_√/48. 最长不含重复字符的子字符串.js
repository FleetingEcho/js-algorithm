// 48. 最长不含重复字符的子字符串
/* 
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
*/

var lengthOfLongestSubstring = function (String) {
	let len = String.length
	let res = 0
	let str = ''
	for (let i = 0; i < len; i++) {
		let char = String.charAt(i)
		let index = str.indexOf(char)
		if (index === -1) {
			str += char
			res = Math.max(res, str.length)
		} else {
			// 有的话就从略过一位继续
			// index应该始终都是0，因为每次都会检查
			str = str.substr(index + 1) + char
		}
	}
	return res
}

function lengthOfStr(string) {
	let str = ''
	let res = 0

	string.split('').map((item) => {
		if (str.includes(item)) {
			str = str.substr(str.indexOf(item) + 1) + item
		} else {
			str += item
			res = Math.max(res, str.length)
		}
	})
	return res
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfStr('abcabcbb'))
