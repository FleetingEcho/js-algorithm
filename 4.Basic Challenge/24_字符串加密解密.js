//加密
function toCode(str) {
	//定义密钥 36个字母和数字
	let key = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let l = key.length
	let a = key.split('') //密钥字条串数组
	let s = '',
		b,
		b1,
		b2,
		b3

	//遍历字符串
	for (let i = 0; i < str.length; i++) {
		//逐个提取每个字符，并获取Unicode编码值
		b = str.charCodeAt(i)
		b1 = b % l //取余数
		b = (b - b1) / l //求最大倍数
		b2 = b % l
		b = (b - b2) / l
		b3 = b % l
		s += a[b3] + a[b2] + a[b1] //根据余数映射密钥中对应下标位置的字符
	}

	return s
}

//解密
function fromCode(str) {
	//定义密钥 36个字母和数字
	let key = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let l = key.length
	let a = key.split('') //密钥字条串数组
	let s,
		b,
		b1,
		b2,
		b3,
		d = 0
	s = new Array(Math.floor(str.length / 3))
	b = s.length
	for (let i = 0; i < b; i++) {
		//截取周期内第一个字符串，计算在密钥的下标值
		b1 = key.indexOf(str.charAt(d))
		d++
		//截取周期内第二个字符串，计算在密钥的下标值
		b2 = key.indexOf(str.charAt(d))
		d++
		//截取周期内第三个字符串，计算在密钥的下标值
		b3 = key.indexOf(str.charAt(d))
		d++
		//反推被加密字符的unicode编码值
		s[i] = b1 * l * l + b2 * l + b3
	}
	//fromCharCode算出字符串
	b = eval('String.fromCharCode(' + s.join(',') + ')')
	//返回返回被解密的字符串
	return b
}

//调用
// let str = "Javascript 中国"
let str = 'https://leetcode.com/problems/design-tinyurl'
str = toCode(str) //加密
console.log(str)
str = fromCode(str) //解密
console.log(str)
