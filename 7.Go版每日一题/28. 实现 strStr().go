package main

func main() {}

//滑动窗口
func strStr1(haystack string, needle string) int {
	len1 := len(haystack)
	len2 := len(needle)
	head := 0
	tail := len2 - 1
	for tail < len1 {
		if haystack[head:head+len2] == needle {
			return head
		}
		head++
		tail++
	}
	return -1
}

//匹配法
func strStr(haystack string, needle string) int {
	if len(needle) == 0 {
		return 0
	}
	if len(haystack) == 0 || len(haystack) < len(needle) {
		return -1
	}

	M := len(haystack)
	N := len(needle)

	for i := 0; i <= M-N; i++ {
		if haystack[i:i+N] == needle {
			return i
		}
	}

	return -1
}
