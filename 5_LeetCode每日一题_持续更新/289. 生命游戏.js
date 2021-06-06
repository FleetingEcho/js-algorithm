// 289. 生命游戏
/* 
根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
输入： 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
输出：
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
*/

var gameOfLife = function (board) {
	// 八个方向的偏移量
	const idx = [0, 1, 0, -1, -1, -1, 1, 1]
	const jdx = [1, 0, -1, 0, 1, -1, 1, -1]

	// 数组副本
	const CopyBoard = board.map((ary) => {
		// 值是基础类型（Number），不存在引用问题，直接解构比较方便
		return [...ary]
	})

	// 遍历每个细胞
	for (let i = 0; i < CopyBoard.length; i++) {
		for (let j = 0; j < CopyBoard[i].length; j++) {
			// 周边活细胞统计
			let liveAmount = 0

			// 八个方向都走一遍
			for (let index = 0; index < 8; index++) {
				let x = i + idx[index]
				let y = j + jdx[index]

				// 边界规避
				if (x < 0 || y < 0 || x >= CopyBoard.length || y >= CopyBoard[i].length) continue

				// 活细胞则计数加1
				liveAmount += CopyBoard[x][y] ? 1 : 0
			}

			// 该位置细胞死活决策
			if (liveAmount < 2 || liveAmount > 3) {
				board[i][j] = 0
			} else if (liveAmount <= 3 && CopyBoard[i][j]) {
				board[i][j] = 1
			} else if (liveAmount === 3 && !CopyBoard[i][j]) {
				board[i][j] = 1
			}
		}
	}
}
