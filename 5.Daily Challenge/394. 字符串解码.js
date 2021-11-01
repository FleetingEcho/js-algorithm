// 394. 字符串解码
/* 
输入：s = "3[a]2[bc]"
输出："aaabcbc"

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"

*/

function isLetters(str) {
	var re = /^[A-Za-z]+$/
	if (str.match(re) == null) return false
	else return true
}

/* 
输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
*/
// 遍历字符串，遇数和字母累加。遇[，数、字母入栈并清空。遇]，出栈并拼接
var decodeString = function (str, number = '', word = '') {
	let queue = []
	//数字
	for (const val of str)
		if (!isNaN(val)) number += val
		else if (val === '[') {
			queue.push([word, number])
			;(number = ''), (word = '')
		} else if (val === ']') {
			let [w1, n1] = queue.pop()
			word = w1 + word.repeat(n1)
		} else {
			word += val
		}
	return word
}
