package main

func main3() {}

func lengthOfLongestSubstring(s string) int {
	window := make(map[byte]int) //可以用string类型，但实际存储的都是byte
	var left, right, res int
	for right < len(s) {
		c := s[right]
		right++
		// 进行窗口内数据的一系列更新
		window[c]++
		// 判断左侧窗口是否要收缩
		for window[c] > 1 {
			d := s[left]
			left++
			// 进行窗口内数据的一系列更新
			window[d]--
		}
		if t := right - left; t > res {
			res = t
		}
	}
	return res
}
