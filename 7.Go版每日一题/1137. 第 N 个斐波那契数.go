package main

func tribonacci(n int) int {
	if n == 0 {
		return 0
	}
	if n <= 2 {
		return 1
	}
	t0 := 0
	t1 := 1
	t2 := 1
	res := 0
	for i := 3; i <= n; i++ {
		res = t0 + t1 + t2
		t0, t1, t2 = t1, t2, res
	}

	return res

}
func main1137() {

}
