package main

import (
	"math"
)

func main743() {}

/*
	Map={
			node 2:{
					node 1: step 1
					node 3: step 1
			}
	}
*/
func networkDelayTime(times [][]int, n, k int) (ans int) {
	Map := make(map[int]map[int]int)
	for _, edg := range times {
		if _, ok := Map[edg[0]]; !ok {
			Map[edg[0]] = make(map[int]int)
		}
		Map[edg[0]][edg[1]] = edg[2]
	}
	arr := make([]int, n+1)
	for i := 1; i <= n; i++ {
		arr[i] = math.MaxInt32
	}
	arr[k] = 0
	q := append([][]int{}, []int{k, 0})
	for len(q) != 0 {
		cur := q[0]
		q = q[1:]
		if _, ok := Map[cur[0]]; ok {
			for _, other := range getMapKeys(Map[cur[0]]) {
				node := Map[cur[0]]
				time := node[other] + cur[1]
				if time < arr[other] {
					arr[other] = time
					q = append(q, []int{other, time})
				}
			}
		}

	}
	return getMinTime(arr, n)
}

func getMapKeys(cur map[int]int) (t []int) {
	for k := range cur {
		t = append(t, k)
	}
	return
}
func getMinTime(arr []int, n int) int {
	var res = math.MinInt32
	for i := 1; i <= n; i++ {
		if res < arr[i] {
			res = arr[i]
		}
	}
	if res == math.MaxInt32 {
		return -1
	}
	return res
}
