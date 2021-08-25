package main

// 509. 斐波那契数
func fib(n int) int {
	if n < 2 {
		return n
	}
	//  res , [p, q]
	p, q, res := 0, 0, 1
	for i := 2; i <= n; i++ {
		p = q
		q = res
		res = p + q
	}
	return res
}
func main509() {

}
