// 1030.距离顺序排列矩阵单元格
// flat扁平化数组
var allCellsDistOrder = function (R, C, r0, c0) {
	const hash = []
	for (let r = 0; r < R; r++) {
		for (let c = 0; c < C; c++) {
			const distance = Math.abs(r0 - r) + Math.abs(c0 - c)
			if (!hash[distance]) hash[distance] = []
			hash[distance].push([r, c])
		}
	}

	return hash.filter((item) => item).flat() //扁平化数组
}

function allCellsDistOrder(R, C, r0, c0) {
	let res = new Array(R * C).fill(0).map((v) => new Array(2).fill(0))
	let dist = 0
	let cnt = 0
	let factor = [-1, 1]
	while (cnt < R * C) {
		for (let rowDist = 0; rowDist <= dist; rowDist++) {
			let colDist = dist - rowDist
			for (let i = 0; i < 2; i++) {
				let row = r0 + factor[i] * rowDist
				for (let j = 0; j < 2; j++) {
					let col = c0 + factor[j] * colDist
					if (row >= 0 && row < R && col >= 0 && col < C) {
						res[cnt][0] = row
						res[cnt][1] = col
						cnt++
					}
					if (colDist == 0) break
				}
				if (rowDist == 0) break
			}
		}
		dist++
	}

	return res
}

function allCellsDistOrder(R, C, r0, c0) {
	let matrix = new Array(R * C).fill(0).map((v) => new Array(2).fill(0)) //矩阵中所有的点
	let visited = new Array(R).fill(0).map((v) => new Array(C).fill(false)) //记忆化
	const direction = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	] //方向
	let index = 1 //matrix索引
	let level = 0 //对matrix每个点探索周围
	matrix[0] = [r0, c0] //最小的点是自身
	visited[r0][c0] = true
	// 遍历所有点
	while (index < R * C) {
		for (let i = 0; i < 4; i++) {
			let ri = matrix[level][0] + direction[i][0]
			let ci = matrix[level][1] + direction[i][1]
			if (ri >= 0 && ri < R && ci >= 0 && ci < C) {
				if (!visited[ri][ci] && index < R * C) {
					matrix[index] = [ri, ci]
					visited[ri][ci] = true
					index++ //找到一个点，继续下一个
				}
			}
		}
		level++ //访问下一个点
	}
	return matrix
}
