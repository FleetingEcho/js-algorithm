package main

import "math"

func main() {}

// 套用搜索左侧边界的算法框架
func minEatingSpeed(piles []int, h int) int {
	left := 1
	right := int(math.Pow(10, float64(9))) + 1 //因为写成了开区间
	for left < right {
		mid := left + (right-left)/2
		if f(piles, mid) <= h {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left
}

// 速度x,香蕉数组piles
func f(piles []int, x int) int {
	hours := 0
	for i := 0; i < len(piles); i++ {
		hours += (piles[i] / x)
		if piles[i]%x > 0 {
			hours++
		}
	}
	return hours
}
