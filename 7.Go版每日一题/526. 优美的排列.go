package main

func main() {}

func _countArrangement(n int) (ans int) {
	res := 0
	visited := make([]bool, n+1)

	var backtrack func(index int)
	backtrack = func(index int) {
		if index == n+1 {
			res++
			return
		}
		for i := 1; i < n+1; i++ {
			if !visited[i] && (index%i == 0 || i%index == 0) {
				visited[i] = true
				backtrack(index + 1)
				visited[i] = false
			}
		}
	}

	backtrack(1)
	return res
}

/*
为了优化回溯效率，我们可以预处理每个位置的符合条件的数有哪些，用二维数组match 保存。当我们尝试向位置 index 放入数时，
我们只需要遍历 match[index] 即可。
*/
func countArrangement(n int) (ans int) {
	vis := make([]bool, n+1)
	match := make([][]int, n+1)
	/*
		第 i 位的数字能被 i 整除
		i 能被第 i 位上的数字整除
	*/
	for i := 1; i <= n; i++ {
		for j := 1; j <= n; j++ {
			if i%j == 0 || j%i == 0 {
				match[i] = append(match[i], j)
			}
		}
	}

	var backtrack func(int)
	backtrack = func(index int) {
		if index > n {
			ans++
			return
		}
		for _, x := range match[index] {
			if !vis[x] {
				vis[x] = true
				backtrack(index + 1)
				vis[x] = false
			}
		}
	}
	backtrack(1)
	return
}
