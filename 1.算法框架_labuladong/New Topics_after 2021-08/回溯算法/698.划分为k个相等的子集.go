package main

func main() {}
func canPartitionKSubsets(nums []int, k int) bool {
	size := len(nums)
	if k > size {
		return false
	}
	sum := 0
	for _, v := range nums {
		sum += v
	}
	if sum%k != 0 {
		return false
	}
	used := make([]bool, size)
	target := sum / k
	return backtrack(k, 0, nums, 0, used, target)
}
func backtrack(
	k int,
	bucketTotal int,
	nums []int,
	start int,
	used []bool,
	target int,
) bool {
	if k == 0 {
		return true
	}
	if bucketTotal == target {
		return backtrack(k-1, 0, nums, 0, used, target)
	}
	for i := start; i < len(nums); i++ {
		if used[i] {
			continue
		}
		if nums[i]+bucketTotal > target {
			continue
		}
		used[i] = true
		bucketTotal += nums[i]
		if backtrack(k, bucketTotal, nums, i+1, used, target) {
			return true
		}
		used[i] = false
		bucketTotal -= nums[i]
	}
	return false
}
