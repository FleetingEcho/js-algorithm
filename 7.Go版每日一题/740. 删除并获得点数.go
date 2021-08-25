package main

func main() {}
func deleteAndEarn(nums []int) int {
	maxVal := 0
	for _, val := range nums {
		maxVal = max(maxVal, val)
	}
	sum := make([]int, maxVal+1)
	for _, val := range nums {
		sum[val] += val
	}
	return rob(sum)
}

func rob(nums []int) int {
	first, amount := nums[0], max(nums[0], nums[1])
	for i := 2; i < len(nums); i++ {
		first, amount = amount, max(first+nums[i], amount)
	}
	return amount
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
