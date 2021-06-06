/* 
59. 螺旋矩阵 II
给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

var generateMatrix = function (n) {
	let res = new Array(n).fill(0).map((v) => new Array(n))
	let num = 1,
		rowStart = 0, // 行首边界
		rowEnd = n - 1, // 行尾边界
		columnStart = 0, // 列首边界
		columnEnd = n - 1 // 列尾边界
	while (num <= n * n) {
		// 首行
		for (let i = columnStart; i <= columnEnd; i++) {
			res[rowStart][i] = num++
		}
		rowStart++
		// 尾列
		for (let i = rowStart; i <= rowEnd; i++) {
			res[i][columnEnd] = num++
		}
		columnEnd--
		// 尾行
		for (let i = columnEnd; i >= columnStart; i--) {
			res[rowEnd][i] = num++
		}
		rowEnd--
		// 首列
		for (let i = rowEnd; i >= rowStart; i--) {
			res[i][columnStart] = num++
		}
		columnStart++
	}
	return res
}

const generateMatrix = function (n) {
	let b = [0, n - 1, 0, n - 1]
	let x = 0,
		y = 0,
		i = 0,
		d = 'right',
		r = new Array(n).fill(0).map((v) => new Array(n).fill(0))
	while (i++ < n ** 2) {
		;(d === 'right' && ((r[y][x++] = i), x === b[1] && ((d = 'down'), ++b[2]))) ||
			(d === 'down' && ((r[y++][x] = i), y === b[3] && ((d = 'left'), b[1]--))) ||
			(d === 'left' && ((r[y][x--] = i), x === b[0] && ((d = 'up'), b[3]--))) ||
			(d === 'up' && ((r[y--][x] = i), y === b[2] && ((d = 'right'), ++b[0])))
	}
	return r
}
