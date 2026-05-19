package main

func main() {}

func numTrees(n int) int {
	// 备忘录的值初始化为 0
	memo := make([][]int, n+1)
	for i := range memo {
		memo[i] = make([]int, n+1)
	}
	var count func(lo, hi int) int
	count = func(lo, hi int) int {
		if lo > hi {
			return 1
		} // 空节点，也算一种情况
		if memo[lo][hi] != 0 {
			return memo[lo][hi]
		}
		res := 0
		for mid := lo; mid <= hi; mid++ {
			left := count(lo, mid-1)
			right := count(mid+1, hi)
			res += left * right
		}
		memo[lo][hi] = res // 将结果存入备忘录
		return res
	}
	return count(1, n)
}
