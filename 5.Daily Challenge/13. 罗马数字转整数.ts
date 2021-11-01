const romanToInt = function (s: string) {
	type Map = {
		[key: string]: number
	}
	const map: Map = {
		I: 1,
		IV: 4,
		V: 5,
		IX: 9,
		X: 10,
		XL: 40,
		L: 50,
		XC: 90,
		C: 100,
		CD: 400,
		D: 500,
		CM: 900,
		M: 1000,
	}
	let res = 0
	for (let i = 0; i < s.length; ) {
		if (i + 1 < s.length && map[s.substring(i, i + 2)]) {
			res += map[s.substring(i, i + 2)]
			i += 2
		} else {
			res += map[s.substring(i, i + 1)]
			i++
		}
	}
	return res
}
/* 
罗马数字由 I,V,X,L,C,D,M 构成；
当小值在大值的左边，则减小值，如 IV=5-1=4；
当小值在大值的右边，则加小值，如 VI=5+1=6；
由上可知，右值永远为正，因此最后一位必然为正。
////////////////////////////////////////////////////////
，把一个小值放在大值的左边，就是做减法，否则为加法。
*/
const romanToInt1 = (s: string) => {
	let sum = 0
	let preNum = getValue(s[0])
	for (let i = 1; i < s.length; i++) {
		let num = getValue(s[i])
		if (preNum < num) {
			sum -= preNum
		} else {
			sum += preNum
		}
		preNum = num
	}
	sum += preNum
	return sum
}

let getValue = (ch: string): number => {
	switch (ch) {
		case 'I':
			return 1
		case 'V':
			return 5
		case 'X':
			return 10
		case 'L':
			return 50
		case 'C':
			return 100
		case 'D':
			return 500
		case 'M':
			return 1000
		default:
			return 0
	}
}
