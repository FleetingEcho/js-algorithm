// 和316 去除重复字母一模一样
// 1081. 不同字符的最小子序列
//! 使用单调栈解决
const smallestSubsequence = function (s) {
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
