// 498. 对角线遍历
function findDiagonalOrder(matrix) {
	let nums = []
	let m = matrix.length
	if (m == 0) return nums
	let n = matrix[0].length
	if (n == 0) return nums

	let bXFlag = true
	for (let i = 0; i < m + n; i++) {
		let pm = bXFlag ? m : n
		let pn = bXFlag ? n : m

		let x = i < pm ? i : pm - 1
		let y = i - x

		while (x >= 0 && y < pn) {
			nums.push(bXFlag ? matrix[x][y] : matrix[y][x])
			x--
			y++
		}

		bXFlag = !bXFlag
	}
	return nums
}

//简版
function findDiagonalOrder(matrix) {
	let ans = []
	let m = matrix.length
	let n = matrix[0].length
	if (m == 0) return ans
	for (let l = 0; l < m + n - 1; l++) {
		for (let i = 0; i <= l; i++) {
			let y = l % 2 == 0 ? i : l - i
			let x = l % 2 == 0 ? l - i : i
			if (x < m && y < n) {
				ans.push(matrix[x][y])
			}
		}
	}
	return ans
}
