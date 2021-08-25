package main

func main() {
	countDigitOne(123)
}

// 233. 数字 1 的个数
func countDigitOne(n int) int {
	t, base := 0, 1
	for base <= n {
		high, low := n/base, n%base //
		t += high / 10 * base
		if high%10 > 1 {
			t += base
		}
		if high%10 == 1 {
			t += low + 1
		}
		base *= 10
	}
	return t
}

// 面试题 17.06. 2出现的次数
func numberOf2sInRange(n int) int {
	t, base := 0, 1
	for base <= n {
		high := n / base
		t += high / 10 * base
		if high%10 > 2 {
			t += base
		}
		if high%10 == 2 {
			t += n%base + 1
		}
		base *= 10
	}
	return t
}
