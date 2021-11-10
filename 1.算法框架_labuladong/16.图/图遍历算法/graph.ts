/* 
图常用 邻接表和邻接矩阵来实现。
邻接表很直观，我把每个节点x的邻居都存到一个列表里，然后把x和这个列表关联起来，
这样就可以通过一个节点x找到它的所有相邻节点。

邻接矩阵则是一个二维布尔数组，我们权且成为matrix，如果节点x和y是相连的，
那么就把matrix[x][y]设为true。如果想找节点x的邻居，去扫一圈matrix[x][..]就行了。

缺点:
1.邻接表无法快速判断两个节点是否相邻。

有向加权图怎么实现？很简单呀：

如果是邻接表，我们不仅仅存储某个节点x的所有邻居节点，还存储x到每个邻居的权重，就实现加权有向图了

如果是邻接矩阵，matrix[x][y]不再是布尔值，而是一个 int 值，0 表示没有连接，其他值表示权重，就变成加权有向图了
无向图怎么实现？也很简单，所谓的「无向」，是不是等同于「双向」？
如果连接无向图中的节点x和y，把matrix[x][y]和matrix[y][x]都变成true不就行了；
邻接表也是类似的操作。

把上面的技巧合起来，就变成了无向加权图……

图和多叉树是强相关的,但是，图和多叉树最大的区别是，图是可能包含环的，你从图的某一个节点开始遍历，有可能走了一圈又回到这个节点。
所以，如果图包含环，遍历框架就要一个visited数组进行辅助：
*/

/* 多叉树遍历框架 */
const traverse_ = (root: any) => {
	if (root == null) return
	for (let child of root.children) traverse(child)
}

// 回溯算法关注的不是节点，而是树枝
// 在 for 循环里面和外面唯一的区别就是对根节点的处理。
/* 
显然，对于这里「图」的遍历，我们应该把visited的操作放到 for 循环外面，否则会漏掉起始点的遍历。

当然，当有向图含有环的时候才需要visited数组辅助，如果不含环，连visited数组都省了，基本就是多叉树的遍历。
*/
namespace Graph {
	let graph
	let visited: boolean[] = [] //boolean

	/* 图遍历框架 */
	const traverse = (graph: any, s: any) => {
		if (visited[s]) return
		// 经过节点 s
		visited[s] = true
		for (const neighbor of graph.neighbors(s)) {
			traverse(neighbor, s)
		}
		// 离开节点 s
		visited[s] = false
	}
}

// leetcode 797 所有可能的路径
/* 
解法很简单，以0为起点遍历图，同时记录遍历过的路径，当遍历到终点时将路径记录下来即可。
既然输入的图是无环的，我们就不需要visited数组辅助了，直接套用图的遍历框架：
*/
namespace No797 {
	/* 
记录所有路径
输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
*/
	function allPathsSourceTarget(graph: number[][]): number[][] {
		const res: number[][] = []
		const path: number[] = []
		const n = graph.length
		function traverse(s: number, path: number[]) {
			path.push(s) // 添加节点 s 到路径
			if (s === n - 1) {
				// 到达终点
				res.push(Array.from(path))
				path.pop()
				return
			}
			// 递归每个相邻节点
			for (let node of graph[s]) {
				traverse(node, path)
			}
			path.pop() // 从路径移出节点 s, 因为要离开了，就要把终点这个节点也撤销掉
		}
		traverse(0, path)
		return res
	}
}

namespace Temp {
	function allPathsSourceTarget(graph: number[][]): number[][] {
		const res: number[][] = []
		const path: number[] = []
		const n = graph.length
		function traverse(s: number, path: number[]) {
			path.push(s)
			if (s === n - 1) {
				res.push(Array.from(path))
				path.pop()
				return
			}
			for (let node of graph[s]) {
				traverse(node, path)
			}
			path.pop()
		}
		traverse(0, path)
		return res
	}
}
