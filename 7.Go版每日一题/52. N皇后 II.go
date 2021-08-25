package main

func main() {}

func totalNQueens(n int) (ans int) {
	columns := make([]bool, n)        // 列上是否有皇后
	diagonals1 := make([]bool, 2*n-1) // 左上到右下是否有皇后
	diagonals2 := make([]bool, 2*n-1) // 右上到左下是否有皇后
	var backtrack func(int)
	backtrack = func(row int) {
		if row == n {
			ans++
			return
		}
		for col, hasQueen := range columns {
			d1, d2 := row+n-1-col, row+col
			if hasQueen || diagonals1[d1] || diagonals2[d2] {
				continue
			}
			columns[col] = true
			diagonals1[d1] = true
			diagonals2[d2] = true
			backtrack(row + 1)
			columns[col] = false
			diagonals1[d1] = false
			diagonals2[d2] = false
		}
	}
	backtrack(0)
	return
}
