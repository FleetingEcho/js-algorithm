// 5替换空格
// 将字符串s中的空格换为%20
/* 
输入：s = "We are happy."
输出："We%20are%20happy."
*/
const str = 'We%20are%20happy.'
const replaceSpace = (s) => {
	let res = s.replace(/ /gi, '%20')
	return res
}
console.log(replaceSpace(str))
