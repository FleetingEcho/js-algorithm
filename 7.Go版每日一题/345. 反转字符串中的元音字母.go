package main

import "strings"

func main() {}

// 左右双指针往中间靠拢，遇到元音字母就停下来，当两个指针指向的都是元音字母的时候，交换之，代码比较简单：
func reverseVowels(s string) string {
	t := []byte(s)
	n := len(t)
	i, j := 0, n-1
	for i < j {
		for i < n && !strings.Contains("aeiouAEIOU", string(t[i])) {
			i++
		}
		for j > 0 && !strings.Contains("aeiouAEIOU", string(t[j])) {
			j--
		}
		if i < j {
			t[i], t[j] = t[j], t[i]
			i++
			j--
		}
	}
	return string(t)
}

// func reverseVowels(s string) string {
// 	n := len(s)
// 	if n <= 1 {
// 		return s
// 	}
// 	arr := []byte(s)
// 	left := 0
// 	right := n - 1
// 	for left < right {
// 		if isVowel(arr[left]) && isVowel(arr[right]) {
// 			arr[left], arr[right] = arr[right], arr[left]
// 			left++
// 			right--
// 		}
// 		if !isVowel(arr[left]) {
// 			left++
// 		}
// 		if !isVowel(arr[right]) {
// 			right--
// 		}
// 	}

// 	return string(arr)
// }
// func isVowel(c byte) bool {
// 	return strings.Contains("aeiouAEIOU", string(c))
// }
