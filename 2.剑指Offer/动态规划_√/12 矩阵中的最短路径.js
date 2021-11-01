// 12 矩阵中的最短路径
/* 
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

*/
let board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
]
let word = 'ABCCED'

const exist = (board, word) => {
	function _exist(board, word, row, col, visited) {
		// 单词中字母全部匹配，说明可以搜索到，返回true
		if (!word.length) {
			return true
		}

		const key = `${row}-${col}`
		// 越界、之前访问过、单词首字母和当前元素不相同，返回false
		if (row >= board.length || col >= board[0].length || row < 0 || col < 0 || visited[key] || board[row][col] !== word[0]) {
			return false
		}

		visited[key] = true
		word = word.slice(1)
		// 下、上、右、左搜索（顺序不重要）
		const success =
			_exist(board, word, row + 1, col, visited) ||
			_exist(board, word, row - 1, col, visited) ||
			_exist(board, word, row, col + 1, visited) ||
			_exist(board, word, row, col - 1, visited)

		// success为false时，就是回溯
		visited[key] = success
		return success
	}

	const rowNum = board.length
	const colNum = board[0].length

	// for循环中， i++ 与 ++i完全相同
	for (let i = 0; i < rowNum; ++i) {
		for (let j = 0; j < colNum; ++j) {
			if (board[i][j] === word[0]) {
				// 找到第一位就开始
				const isExist = _exist(board, word, i, j, {})
				if (isExist) return true // 找到就返回
			}
		}
	}
	return false
}

console.log(exist(board, word))
