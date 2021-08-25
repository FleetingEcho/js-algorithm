package main

func main() {}
func robRange(nums []int, start int, end int) int {
	var first, second, amount int
	for i := end; i >= start; i-- {
		amount = max(first, nums[i]+second)
		second = first
		first = amount
	}
	return amount
}

func rob(nums []int) int {
	n := len(nums)
	if n == 1 {
		return nums[0]
	}
	return max(robRange(nums, 0, n-2), robRange(nums, 1, n-1))
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
