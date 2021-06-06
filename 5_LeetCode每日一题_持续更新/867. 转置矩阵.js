// 867. 转置矩阵
/* 
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
*/
const transpose = function (matrix) {
	let l = matrix.length,
		w = matrix[0].length
	let arr = new Array(w).fill(0).map(() => new Array(l).fill(0))
	for (let i = 0; i < l; i++) {
		for (let j = 0; j < w; j++) {
			arr[j][i] = matrix[i][j]
		}
	}
	return arr
}
