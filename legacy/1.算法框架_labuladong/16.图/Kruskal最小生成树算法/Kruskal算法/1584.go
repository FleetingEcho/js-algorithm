package main

import (
	"fmt"
	"math"
	"sort"
)

func main() {
	temp := [][]int{
		{0, 0},
		{2, 2},
		{3, 10},
		{5, 2},
		{7, 0},
	}
	res := minCostConnectPoints(temp)
	fmt.Println(res)

}

func getAbs(xi, yi, xj, yj int) int {
	res := math.Abs(float64(xi-xj)) + math.Abs(float64(yi-yj))
	return int(res)
}

func minCostConnectPoints(points [][]int) int {
	n := len(points)
	edges := [][]int{}
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			xi := points[i][0]
			yi := points[i][1]
			xj := points[j][0]
			yj := points[j][1]
			temp := []int{i, j, getAbs(xi, yi, xj, yj)}
			edges = append(edges, temp)
		}
	}
	// 自定义排序
	sort.Slice(edges, func(i, j int) bool {
		return edges[i][2] <= edges[j][2]
	})
	// fmt.Println(edges)
	// 执行 Kruskal 算法
	mst := 0
	_parent := []int{}
	_size := []int{}
	for i := 0; i < n; i++ {
		_parent = append(_parent, i)
		_size = append(_size, 1)
	}
	unionFind := &UnionFind{
		total:  n,
		parent: _parent,
		size:   _size,
	}
	for i := 0; i < len(edges); i++ {
		edge := edges[i]
		u := edge[0]
		v := edge[1]
		weight := edge[2]
		// 若这条边会产生环，则不能加入 mst
		if unionFind.connected(u, v) {
			continue
		}
		// 若这条边不会产生环，则属于最小生成树
		mst += weight
		unionFind.union(u, v)
	}
	return mst

}

type UnionFind struct {
	total  int
	parent []int
	size   []int
}

func (this *UnionFind) connected(p int, q int) bool {
	rootP := this.find(p)
	rootQ := this.find(q)
	return rootP == rootQ
}
func (this *UnionFind) find(x int) int {
	for this.parent[x] != x {
		// 进行路径压缩
		this.parent[x] = this.parent[this.parent[x]]
		x = this.parent[x]
	}
	return x
}
func (this *UnionFind) count() int {
	return this.total
}

func (this *UnionFind) union(p int, q int) {
	rootP := this.find(p)
	rootQ := this.find(q)
	if rootP == rootQ {
		return
	}
	// 小树接到大树下面，较平衡
	if this.size[rootP] > this.size[rootQ] {
		this.parent[rootQ] = rootP
		this.size[rootP] += this.size[rootQ]
	} else {
		this.parent[rootP] = rootQ
		this.size[rootQ] += this.size[rootP]
	}
	this.total--
}
