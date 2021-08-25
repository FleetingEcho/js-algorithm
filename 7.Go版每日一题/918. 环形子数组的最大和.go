package main

func main() {}

/*
输入：[3,-1,2,-1]
输出：4
解释：从子数组 [2,-1,3] 得到最大和 2 + (-1) + 3 = 4
*/

func maxSubarraySumCircular(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}
	length := len(nums)
	dpx := nums[0]
	sum := nums[0] //整个数组的和

	max := dpx //最大子序列和
	min := Min(dpx, 0)
	dpm := min
	for i := 1; i < length; i++ {
		dpx = Max(dpx+nums[i], nums[i])
		max = Max(max, dpx)
		if i < length-1 {
			dpm = Min(dpm+nums[i], nums[i])
			min = Min(min, dpm)
		}
		sum += nums[i]
	}
	return Max(max, sum-min)
}

func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}
func Min(x, y int) int {
	if x > y {
		return y
	}
	return x
}
func maxSubarraySumCircular1(A []int) int {
	dp := A[0] //初始化
	max := dp  //最大子序列和
	sum := dp  //整个数组的和

	//求最大子序列和，见53题
	for i := 1; i < len(A); i++ {
		sum += A[i]
		dp = A[i] + Max(dp, 0)
		max = Max(dp, max)
	}
	min := 0
	dp = A[0]
	for i := 1; i < len(A)-1; i++ {
		dp = A[i] + Min(0, dp)
		min = Min(dp, min)
	}

	return Max(sum-min, max)
}
