package main

import "strings"

func main() {}

/*
不能同行
不能同列
不能同斜线
*/
func solveNQueens(n int) [][]string {

	res := [][]string{}
	board := make([][]string, n) // 初始化了string数组
	for i := range board {
		board[i] = make([]string, n)
	}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			board[i][j] = "."
		}
	}

	var isValid func(row, col int) bool
	isValid = func(row, col int) bool { //不用进行同行检查，因为在单层搜索的过程中，每一层递归，只会选for循环（也就是同一行）里的一个元素，所以不用去重了。
		// 检查列
		for i := 0; i < row; i++ { //棋盘的宽度就是for循环的长度
			if board[i][col] == "Q" {
				return false
			}
		}
		//检查 45度角是否有皇后
		for i, j := row, col; i >= 0 && j >= 0; i, j = i-1, j-1 {
			if board[i][j] == "Q" {
				return false
			}
		}
		//检查 135度角是否有皇后
		for i, j := row, col; i >= 0 && j < n; i, j = i-1, j+1 {
			if board[i][j] == "Q" {
				return false
			}
		}
		return true
	}

	var backtrack func(row int)
	backtrack = func(row int) {
		size := len(board) //高度
		if row == size {
			// 条件满足，转换为string返回
			temp := make([]string, size)
			for i := 0; i < size; i++ {
				temp[i] = strings.Join(board[i], "")
			}
			res = append(res, temp)
			return
		}
		for col := 0; col < size; col++ { //递归的深度就是棋盘的高度
			if !isValid(row, col) {
				continue
			}
			// 做选择
			board[row][col] = "Q"
			// 进入下一行决策
			backtrack(row + 1)
			// 撤销选择
			board[row][col] = "."
		}
	}
	backtrack(0)
	return res
}
