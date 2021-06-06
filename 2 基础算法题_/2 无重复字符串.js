const str1 = 'aebcfadbccccd'
const str2 = 'abcdabcdabcdd'
const longStr1 = (String) => {
	let len = String.length
	let res = 0
	let str = ''
	for (let i = 0; i < len; i++) {
		let char = String.charAt(i)
		let index = str.indexOf(char)
		if (index === -1) {
			str += char
			// console.log(str);
			// res=str.length //会被直接迭代掉，变成新的长度
			// 为了保持最大值，在迭代之前判断一下
			// 如果新的str.length是2.而上一个最大值res为6.
			res = Math.max(res, str.length)
		} else {
			// 有的话就从略过一位继续
			str = str.substr(index + 1) + char
		}
	}
	return res
}

// 我的办法
// 创建一个字符串，没有则拼接，有则去除第一项，从第二位开始，继续拼接
const Max = (arr) => {
	return arr.sort((a, b) => {
		return b - a
	})[0]
}
const longStr = (String) => {
	const arr = String.split('')
	let temp = []
	let str = ''
	arr.map((item) => {
		let char = item
		let index = str.indexOf(char)
		if (index === -1) {
			str += char
			temp.push(str.length)
		} else {
			str = str.substr(index + 1) + char
		}
	})
	//  console.log(temp);
	return Max(temp)
}

console.log(longStr1(str2))
console.log(longStr(str2))
