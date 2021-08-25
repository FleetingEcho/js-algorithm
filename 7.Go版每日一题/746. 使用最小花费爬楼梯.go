package main

func main746() {

}

// 746. 使用最小花费爬楼梯
func minCostClimbingStairs(cost []int) int {
	min := func(a, b int) int {
		if a < b {
			return a
		}
		return b
	}
	n := len(cost)
	dp := make([]int, n+1) //耗能
	for i := 2; i <= n; i++ {
		dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
	}
	return dp[n]
}
