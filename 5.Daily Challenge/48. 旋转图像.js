/* 
48. 旋转图像
首页将输入

1 2 3
4 5 6
7 8 9

通过交换matrix[i][j], matrix[j][i] 得到

1 4 7
2 5 8
3 6 9

最后将得到每组数组倒序排列即可

7 4 1
8 5 2
9 6 3
 */

const rotate = function (matrix) {
	let martrixLength = matrix.length
	for (let i = 0; i < martrixLength; i++) {
		for (let j = i; j < martrixLength; j++) {
			let temp = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = temp
		}
	}
	return matrix.map((item) => item.reverse())
}
