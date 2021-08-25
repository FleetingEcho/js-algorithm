package main

func main() {}

func getMaximumGenerated(n int) (ans int) {
	if n == 0 {
		return
	}
	arr := make([]int, n+1)
	arr[1] = 1
	ans = 1 // start from 1
	for i := 2; i <= n; i++ {
		arr[i] = arr[i/2] + i%2*arr[(i/2)+1]
		ans = myMax(ans, arr[i])
	}
	return
}

func myMax(a, b int) int {
	if a > b {
		return a
	}
	return b
}
