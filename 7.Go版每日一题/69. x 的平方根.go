package main

func main69() {}

func mySqrt(x int) int {
	l, r := 0, x
	res := -1
	for l <= r {
		mid := l + (r-l)>>1
		if mid*mid <= x {
			res = mid
			l = mid + 1
		} else {
			r = mid - 1
		}
	}
	return res
}
