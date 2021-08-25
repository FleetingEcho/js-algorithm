package main

func main198() {}

func rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	n := len(nums)
	dp := make([]int, n+2)
	for i := n - 1; i >= 0; i-- {
		dp[i] = max(dp[i+1], nums[i]+dp[i+2])
	}
	return dp[0]
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

// 方法2：状态压缩
func rob1(nums []int) int {
	n := len(nums)
	var dp1, dp2, dp_i int
	for i := n - 1; i >= 0; i-- {
		dp_i = max(dp1, nums[i]+dp2)
		dp2 = dp1
		dp1 = dp_i
	}
	return dp_i
}
