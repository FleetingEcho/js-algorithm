// 58 - II. 左旋转字符串
/* 
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，
该函数将返回左旋转两位得到的结果"cdefgab"。

输入: s = "abcdefg", k = 2
输出: "cdefgab"

*/
const s = 'abcdefg',
	k = 2

var reverseLeftWords = function (s, n) {
	let res = ''
	for (let i = n; i < s.length; i++) {
		res += s[i]
	}
	for (let i = 0; i < n; i++) {
		res += s[i]
	}
	return res
}
console.log(reverseLeftWords(s, k))
