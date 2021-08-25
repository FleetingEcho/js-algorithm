package main

func main70() {

}
func climbStairs(n int) int {
	last2, last1, res := 0, 0, 1
	for i := 1; i <= n; i++ {
		last2 = last1
		last1 = res
		res = last2 + last1
	}
	return res
}
