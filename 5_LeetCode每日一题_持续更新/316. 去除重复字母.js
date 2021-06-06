// 316. 去除重复字母
/* 
给你一个仅包含小写字母的字符串，请你去除字符串中重复的字母，使得每个字母只出现一次。
需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

示例 1:

输入: "bcabc"
输出: "abc"
示例 2:

输入: "cbacdcbc"
输出: "acdb"

*/

const removeDuplicateLetters = function (s) {
	let stack = []
	for (let i = 0; i < s.length; i++) {
		let char = s[i]
		if (stack.indexOf(char) > -1) continue
		while (
			stack.length !== 0 &&
			stack[stack.length - 1] > char && //stack最后一位大于当前字母
			s.indexOf(stack[stack.length - 1], i) > i //从s第i位开始查stack最后一位数字，确认还有的话才删除前面的字母
		) {
			stack.pop()
		}
		stack.push(char)
	}
	return stack.join('')
}
