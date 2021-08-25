package main

import (
	"sort"
)

func main1337() {

}

func kWeakestRows(mat [][]int, k int) []int {
	count := make([]int, len(mat))
	res := make([]int, k)
	for i := 0; i < len(mat); i++ {
		sum := 0
		for j := 0; j < len(mat[0]); j++ {
			if mat[i][j] == 1 {
				sum++
			} else {
				break
			}
		}
		count[i] = sum*10000 + i
	}
	sort.Stable(sort.IntSlice(count))
	for i := 0; i < k; i++ {
		res[i] = count[i] % 10000 //取余后只剩index
	}
	return res
}
