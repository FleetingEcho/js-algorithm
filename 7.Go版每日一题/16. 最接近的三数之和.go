package main

import "sort"

func main16() {

}
func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	res := nums[0] + nums[1] + nums[len(nums)-1]

	for i := 0; i < len(nums)-2; i++ {
		n1 := nums[i]
		l, r := i+1, len(nums)-1
		for l < r {
			n2, n3 := nums[l], nums[r]
			if n1+n2+n3 < target {
				l++
			} else {
				r--
			}
			temp := n1 + n2 + n3
			//差越小越好
			if absolute(temp-target) < absolute(res-target) {
				res = temp
			}
		}
	}
	return res
}

func absolute(n int) int {
	if n > 0 {
		return n
	}
	return -n
}
