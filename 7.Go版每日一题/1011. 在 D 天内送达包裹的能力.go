package main

func main() {}

func shipWithinDays(weights []int, days int) int {
	// 载重可能的最小值
	var left, right int
	for _, val := range weights {
		if val > left {
			left = val
		}
		right += val
	}
	for left < right {
		mid := (left + (right-left)/2)
		if f(weights, mid) <= days {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left
}

// 如果载重为 cap，是否能在 D 天内运完货物？
func f(weights []int, x int) int {
	days := 0
	for i := 0; i < len(weights); {
		// 尽可能多装货物
		cap := x
		for i < len(weights) {
			if cap < weights[i] {
				break
			}
			cap -= weights[i]
			i++
		}
		days++
	}
	return days
}
