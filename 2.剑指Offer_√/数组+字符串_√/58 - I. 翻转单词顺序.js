// 58 - I. 翻转单词顺序
/* 
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，
标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
输入: "a good   example"
输出: "example good a"
*/

var reverseWords = function (s) {
	var str = s
		.trim()
		.split(' ')
		.filter((item) => item != '')
		.reverse()
		.join(' ')
	return str
}

var reverseWords1 = function (s) {
	res = s.trim().replace(/\s+/g, ' ').split(' ')
	let len = res.length
	for (let i = 0; i < res.length / 2; i++) {
		term = res[i]
		res[i] = res[len - i - 1]
		res[len - i - 1] = term
	}
	return res.join(' ')
}
