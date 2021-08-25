package skyline

import (
	"sort"
)

func main218() {
	temp := [][]int{
		{2, 9, 10}, {3, 7, 15}, {5, 12, 12}, {15, 20, 10}, {19, 24, 8},
	}
	// temp=[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
	getSkyline(temp)
}
func getSkyline(buildings [][]int) [][]int {
	var (
		pq  = [][]int{}
		pre = -1
	)
	res := new([][]int)
	for _, b := range buildings {
		cur := [][]int{
			{b[0], -b[2]},
			{b[1], b[2]},
		}
		pq = append(pq, cur...)
	}
	arrSort(pq)
	heights := new([]int)
	*heights = []int{0}
	for _, h := range pq {
		if h[1] < 0 {
			*heights = append(*heights, -h[1])
		} else {
			remove(heights, h[1])
		}
		maxHeight := max(heights)
		if pre != maxHeight {
			cur := []int{h[0], maxHeight}
			*res = append(*res, cur)
			pre = maxHeight
		}
	}
	return *res
}

func max(arr *[]int) (max int) {
	for _, i := range *arr {
		if i > max {
			max = i
		}
	}
	return
}
func arrSort(pq [][]int) {
	sort.Slice(pq, func(i, j int) bool {
		if pq[i][0] == pq[j][0] {
			return pq[i][1] < pq[j][1]
		} else {
			return pq[i][0] <= pq[j][0]
		}
	})
}

func remove(arr *[]int, tar int) {
	idx := -1
	for i, val := range *arr {
		if val == tar {
			idx = i
			goto Insert
		}
	}
	if idx == -1 {
		return
	}
Insert:
	*arr = append((*arr)[:idx], (*arr)[idx+1:]...)
}
