// 85. 最大矩形 困难
/* 输入：
matrix = [
          ["1","0","1","0","0"],
          ["1","0","1","1","1"],
          ["1","1","1","1","1"],
          ["1","0","0","1","0"]
        ]
输出：6
解释：最大矩形如上图所示。

借鉴解题思路: https://leetcode-cn.com/problems/maximal-rectangle/solution/jian-dan-si-lu-11xing-dai-ma-chao-99-by-8hhlv/
 */

var maximalRectangle = function (matrix) {
	if (matrix.length === 0) return 0
	let i = matrix.length,
		ns = Array.from({ length: i }, (_) => new Uint8Array(matrix[0].length))
	let r = 0,
		j,
		n
	while (i--) {
		for (j = 0, n = 0; j < matrix[0].length; j++) {
			ns[i][j] = matrix[i][j] === '1' ? ++n : (n = 0)
		}
	}

	while (j--) {
		for (i = matrix.length; i--; ) {
			for (let k = i + 1, w = 200, h = 0, t; k-- && ns[k][j]; ) {
				if (ns[k][j] < w) w = ns[k][j]
				if ((t = w * ++h) > r) r = t
			}
		}
	}
	return r
}
