package main

func main847() {}

/*
			curIndex 表示当前位于的节点编号；
			visited 是一个长度为 nn 的二进制数，表示每一个节点是否经过。如果 visited 的第 i 位是 1，则表示节点 i 已经过，否则表示节点 i 未经过；

			stepLen 表示到当前节点为止经过的路径长度。

			使用该三元组进行广度优先搜索，即可解决本题。初始时，我们将所有的 (i, 2^i, 0) 放入队列，表示可以从任一节点开始。在搜索的过程中，
			如果当前三元组中的 visited 包含 n 个 1（即 visited=2^n−1），那么我们就可以返回 stepLen 作为答案。

	为了保证广度优先搜索时间复杂度的正确性，即同一个节点 curIndex 以及节点的经过情况 visited 只被搜索到一次，我们可以使用数组或者哈希表记录
	(curIndex,visited) 是否已经被搜索过，防止无效的重复搜索。

*/
// 难题 状态压缩+ BFS
func shortestPathLength(graph [][]int) int {
	n := len(graph)
	type tuple struct{ curIndex, visited, stepLen int }
	q := []tuple{}
	seen := make([][]bool, n)
	for i := range seen {
		seen[i] = make([]bool, 1<<n)
		seen[i][1<<i] = true
		q = append(q, tuple{i, 1 << i, 0})
	}

	for {
		t := q[0]
		q = q[1:]
		if t.visited == 1<<n-1 {
			return t.stepLen
		}
		// 搜索相邻的节点
		for _, v := range graph[t.curIndex] {
			maskV := t.visited | 1<<v
			if !seen[v][maskV] {
				q = append(q, tuple{v, maskV, t.stepLen + 1})
				seen[v][maskV] = true
			}
		}
	}
}
