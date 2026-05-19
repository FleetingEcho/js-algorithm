package main

func main() {}

// 自顶向下带备忘录的动态规划解法
// 备忘录，消除重叠子问题

// 其最大值的二进制表示的所有位都为1，那么，
const UINT_MIN uint = 0
const UINT_MAX = ^uint(0)
const INT_MAX = int(^uint(0) >> 1)
const INT_MIN = ^INT_MAX

func calculateMinimumHP(grid [][]int) int {

	m := len(grid)
	n := len(grid[0])
	// 备忘录中都初始化为 -1
	// let memo = new Array(m).fill(0).map((v) => new Array(n).fill(-1))
	memo := make([][]int, m)
	for i := 0; i < m; i++ {
		temp := make([]int, n)
		for i := 0; i < n; i++ {
			temp[i] = -1
		}
		memo[i] = temp
	}
	/* 定义：从 (i, j) 到达右下角，需要的初始血量至少是多少 */
	var dp func(grid [][]int, i int, j int) int
	dp = func(grid [][]int, i int, j int) int {
		m := len(grid)
		n := len(grid[0])
		// base case
		if i == m-1 && j == n-1 {
			if grid[i][j] >= 0 {
				return 1
			} else {
				return -grid[i][j] + 1
			}
		}
		if i == m || j == n {
			return INT_MAX
		}
		// 避免重复计算
		if memo[i][j] != -1 {
			return memo[i][j]
		}
		// 状态转移逻辑
		res := myMin(dp(grid, i, j+1), dp(grid, i+1, j)) - grid[i][j]
		// 骑士的生命值至少为 1
		if res <= 0 {
			memo[i][j] = 1
		} else {
			memo[i][j] = res
		}
		return memo[i][j]
	}
	return dp(grid, 0, 0)
}
func myMin(a int, b int) int {
	if a > b {
		return b
	}
	return a
}
