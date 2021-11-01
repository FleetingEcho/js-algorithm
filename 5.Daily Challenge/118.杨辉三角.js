//118. 杨辉三角
// i>>>1  就是除2
const generate = function (numRows) {
	let r = new Array(numRows)
	for (let i = 0; i < numRows; i++) {
		r[i] = new Array(i + 1).fill(1)
		for (let j = 1; j <= i / 2; j++) {
			r[i][j] = r[i][i - j] = r[i - 1][j - 1] + r[i - 1][j]
		}
	}
	return r
}
console.log(9 >>> 1)
console.log(9 >>> 2)
console.log(8 >>> 1)
console.log(9 >>> 0)
