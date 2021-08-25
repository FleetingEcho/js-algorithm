package main

func main802() {}

/*
输入：graph = [[1,2],[2,3],[5],[0],[5],[],[]]
输出：[2,4,5,6]
其中输入的graph数组中的元素代表了各点的指向情况，例如第一个元素[1,2]就表示以节点0为起点的边有两条，分别指向节点1和节点2。

输出为[2,4,5,6]，首先图中节点5和6都是出度为 00 的节点，他们本身就是终点，而2和4的情况相同，他们的出度都为 11，且都指向节点5，所以他们只能通过这条边走向终点5。

链接：https://leetcode-cn.com/problems/find-eventual-safe-states/solution/gtalgorithm-san-ju-hua-jiao-ni-wan-zhuan-xf5o/

*/
func eventualSafeNodes(graph [][]int) (ans []int) {
	n := len(graph)
	//   # 用多个状态来标记各个节点，0表示未遍历过，1表示该点在环里或者递归中处于被遍历过（不安全），2表示该点是安全的
	color := make([]int, n)
	var safe func(int) bool
	safe = func(x int) bool {
		if color[x] > 0 { // # 如果该点被遍历过，那么返回该点是否安全
			return color[x] == 2
		}
		color[x] = 1 //先标记该点被遍历过
		// dfs遍历下去，如果该点在环上，则一定会遍历回来，这时候遇到该点state为1，则说明该点不安全，会返回False
		// 只要遇到一条dfs路径有问题，根据题意，都需要返回False来表示该点不安全
		for _, y := range graph[x] {
			if !safe(y) {
				return false
			}
		}
		//  如果dfs遍历下去均未遍历回来，则说明该点不在环里，属于安全结点，修改状态并返回True
		color[x] = 2
		return true
	}
	// 依次以每一个结点为出发进行遍历，由于有state数组记录状态，复杂度会低很多
	for i := 0; i < n; i++ {
		if safe(i) {
			ans = append(ans, i)
		}
	}
	return
}

func eventualSafeNodes1(graph [][]int) (ans []int) {
	n := len(graph)

	rg := make([][]int, n) // 反图，邻接表存储

	inDeg := make([]int, n) // 节点入度
	for x, ys := range graph {
		for _, y := range ys {
			rg[y] = append(rg[y], x)
		}
		inDeg[x] = len(ys) // 原数组记录的节点出度，在反图中就是入度
	}

	q := []int{} // 拓扑排序
	for i, d := range inDeg {
		if d == 0 {
			q = append(q, i) // 首先将入度为 0 的点存入队列
		}
	}
	for len(q) > 0 {
		y := q[0] // 每次弹出队头元素
		q = q[1:]
		for _, x := range rg[y] {
			inDeg[x]-- // 将以其为起点的有向边删除，更新终点入度
			if inDeg[x] == 0 {
				q = append(q, x)
			}
		}
	}
	// 最终入度（原图中出度）为 0 的所有点均为安全点
	for i, d := range inDeg {
		if d == 0 {
			ans = append(ans, i)
		}
	}
	return
}
