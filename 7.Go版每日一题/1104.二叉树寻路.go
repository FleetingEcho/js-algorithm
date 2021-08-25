package main

import (
	"math"
)

func main1104() {
	pathInZigZagTree(26)
}

func pathInZigZagTree(label int) (res []int) {
	cur := 0
	depth := 1
	for cur < label {
		cur = myPow(2, depth) - 1
		res = append(res, cur)
		depth++
	}
	for i := depth - 2; i > 0; {
		var offset = (res[i] - label) >> 1
		res[i] = label
		i--
		label = myPow(2, i) + offset
	}
	return
}
func myPow(base, val int) int {
	return int(math.Pow(float64(base), float64(val)))
}
