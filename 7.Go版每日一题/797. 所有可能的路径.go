package main797

import "fmt"

func main() {
	graph := [][]int{{1, 2}, {3}, {3}, {}}
	res := allPathsSourceTarget(graph)
	fmt.Println(res)
}

// 带visited，有向图的写法。通用
func allPathsSourceTarget(graph [][]int) [][]int {
	var (
		res     = [][]int{}
		n       = len(graph)
		path    = []int{0}
		visited = make([]bool, n)
	)
	visited[0] = true
	var traverse func(int, []int)
	traverse = func(s int, path []int) {
		if s == n-1 {
			res = append(res, append([]int{}, path...))
			path = path[:len(path)-1]
			return
		}
		for _, node := range graph[s] {
			if !visited[node] {
				visited[node] = true
				path = append(path, node)
				traverse(node, path)
				path = path[:len(path)-1]
				visited[node] = false
			}
		}
	}
	traverse(0, path)
	return res
}
