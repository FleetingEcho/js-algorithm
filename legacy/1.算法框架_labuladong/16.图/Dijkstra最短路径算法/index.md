其实，很多算法的底层原理异常简单，无非就是一步一步延伸，变得看起来好像特别复杂，特别牛逼。
我们说二叉树非常重要，你把这个结构掌握了，就会发现
动态规划，分治算法，回溯（DFS）算法，BFS 算法框架，Union-Find 并查集算法，二叉堆实现优先级队列
就是把二叉树翻来覆去的运用。

Dijkstra 算法（一般音译成迪杰斯特拉算法）无非就是一个 BFS 算法的加强版，它们都是从二叉树的层序遍历衍生出来的。

--接前文

[图论第一期：遍历基础](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247491039&idx=1&sn=860d8418b3c955c1d5075cf02ee2907d&scene=21#wechat_redirect)

图」这种数据结构的基本实现，图中的节点一般就抽象成一个数字（索引），图的具体实现一般是「邻接矩阵」或者「邻接表」。

![image-20211105092121816](index.assets/image-20211105092121816.png)

前文 [图论第二期：拓扑排序](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247491897&idx=1&sn=c2d77dd649548d077815af3c976b61d1&scene=21#wechat_redirect) 告诉你，我们用邻接表的场景更多.

**如果你想把一个问题抽象成「图」的问题，那么首先要实现一个 API`adj`**：

```tsx
// 输入节点 s 返回 s 的相邻节点
Array<number> adj(s:number);
```

类似多叉树节点中的`children`字段记录当前节点的所有子节点，`adj(s)`就是计算一个节点`s`的相邻节点。

`adj`函数就可以这样表示

```tsx
graph:[]number ;
// 输入节点 s，返回 s 的相邻节点
adj(s:number):[]number {
    return graph[s];
}
```

当然，对于「加权图」，我们需要知道两个节点之间的边权重是多少，所以还可以抽象出一个`weight`方法：

```tsx
// 返回节点 from 到节点 to 之间的边的权重
type weight = (from: number, to: number) => number
```

这个`weight`方法可以根据实际情况而定，因为不同的算法题，题目给的「权重」含义可能不一样，我们存储权重的方式也不一样。

有了上述基础知识，就可以搞定 Dijkstra 算法了，下面我给你从二叉树的层序遍历开始推演出 Dijkstra 算法的实现。

我们之前说过==二叉树的层级遍历框架==

```tsx
// 输入一棵二叉树的根节点，层序遍历这棵二叉树
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}
const levelTraverse = (root: TreeNode) => {
	if (root == null) return 0
	let q: TreeNode[] = []
	q.push(root)
	let depth = 1
	// 从上到下遍历二叉树的每一层
	while (q.length !== 0) {
		let size = q.length
		// 从左到右遍历每一层的每个节点
		for (let i = 0; i < size; i++) {
			let cur = q.shift() as TreeNode
			console.log(`节点 ${cur} 在第 ${depth}层`)
			// 将下一层节点放入队列
			if (cur.left) q.push(cur.left)
			if (cur.right) q.push(cur.right)
		}
		depth++
	}
}
```

![image-20211105092714808](index.assets/image-20211105092714808.png)

**`while`循环控制一层一层往下走，`for`循环利用`sz`变量控制从左到右遍历每一层二叉树节点**。

注意我们代码框架中的`depth`变量，其实就记录了当前遍历到的层数。换句话说，每当我们遍历到一个节点`cur`，都知道这个节点属于第几层。

基于二叉树的遍历框架，我们又可以扩展出==多叉树的层序遍历框架==

```tsx
class Node {
	val: number
	children: Node[]
	constructor(val: number, children: Node[]) {
		this.val = val
		this.children = children
	}
}

// 输入一棵多叉树的根节点，层序遍历这棵多叉树
const levelNTraverse = (root: Node) => {
	if (root == null) return 0
	let q: Node[] = []
	q.push(root)
	let depth = 1
	// 从上到下遍历二叉树的每一层
	while (q.length !== 0) {
		let size = q.length
		// 从左到右遍历每一层的每个节点
		for (let i = 0; i < size; i++) {
			let cur = q.shift() as Node
			console.log(`节点 ${cur} 在第 ${depth}层`)
			// 将下一层节点放入队列
			for (let child of root.children) {
				q.push(child)
			}
		}
		depth++
	}
}
```

基于多叉树的遍历框架，我们又可以扩展出 ==BFS（广度优先搜索）==的算法框架

```tsx
// 输入起点，进行 BFS 搜索

const BFS = (start, target) => {
	if (start === null) return //判断初始条件，特殊情况直接return
	let queue = [] // 核心数据结构
	let visited = new Set() // 避免走回头路

	queue.push(start) // 将起点加入队列
	visited.add(start) //像一般的二叉树结构，没有子节点到父节点的指针，不会走回头路就不需要visited
	let step = 0 // 记录扩散的步数

	while (queue.length !== 0) {
		let size = queue.length
		/* 将当前队列中的所有节点向四周扩散 */
		for (let i = 0; i < size; i++) {
			let cur = queue.shift()
			if (visited.has(cur)) continue
			/* 划重点：这里判断是否到达终点 */
			if (cur === target) return step
			/* 将 cur 的相邻节点加入队列 */
			for (let x of cur.adj()) {
				// !!!!!! 相邻节点
				//cur.adj()泛指 cur 相邻的节点
				if (!visited.has(x)) {
					queue.push(x)
					visited.add(x)
				}
			}
		}
		/* 划重点：更新步数在这里 */
		step++
	}
}
```

如果对 BFS 算法不熟悉，可以看前文 [BFS 算法框架](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485134&idx=1&sn=fd345f8a93dc4444bcc65c57bb46fc35&scene=21#wechat_redirect)，这里只是为了让你做个对比，==所谓 BFS 算法，就是把算法问题抽象成一幅「无权图」，然后继续玩二叉树层级遍历那一套罢了。==

**注意，我们的 BFS 算法框架也是`while`循环嵌套`for`循环的形式，也用了一个`step`变量记录`for`循环执行的次数，无非就是多用了一个`visited`集合记录走过的节点，防止走回头路罢了**。

其实 Dijkstra 和 BFS 算法差不多,只是不能默认每条路的权重都是 1

![image-20211105093032897](index.assets/image-20211105093032897.png)

**得想办法去掉`while`循环里面的`for`循环**。

刚才说`for`循环是干什么用的来着？

是为了让二叉树一层一层往下遍历，让 BFS 算法一步一步向外扩散，因为这个层数`depth`，或者这个步数`step`，在之前的场景中有用。

但现在我们想解决「加权图」中的最短路径问题，「步数」已经没有参考意义了，「路径的权重之和」才有意义，所以这个`for`循环可以被去掉。

怎么去掉？就拿二叉树的层级遍历来说，其实你可以直接去掉`for`循环相关的代码：

```tsx
// 输入一棵二叉树的根节点，遍历这棵二叉树所有节点
const levelTraverse = (root: TreeNode) => {
	if (root == null) return 0
	let q: TreeNode[] = []
	q.push(root)
	// 从上到下遍历二叉树的每一层
	while (q.length !== 0) {
		let size = q.length
		// 从左到右遍历每一层的每个节点
		for (let i = 0; i < size; i++) {
			let cur = q.shift() as TreeNode
			console.log(`节点 ${cur} 在第 ${depth}层`)
			// 将下一层节点放入队列
			if (cur.left) q.push(cur.left)
			if (cur.right) q.push(cur.right)
		}
	}
}
```

但问题是，没有`for`循环，你也没办法维护`depth`变量了。

如果你想同时维护`depth`变量，让每个节点`cur`知道自己在第几层，可以想其他办法，比如新建一个`State`类，记录每个节点所在的层数：

```tsx
class State {
	// 记录 node 节点的深度
	depth: number
	node: TreeNode

	constructor(node: TreeNode, depth: number) {
		this.depth = depth
		this.node = node
	}
}

// 输入一棵二叉树的根节点，遍历这棵二叉树所有节点
const levelTraverse = (root: TreeNode) => {
	if (root == null) return 0
	let q: State[] = []
	q.push(new State(root, 1))
	// 遍历二叉树的每一个节点
	while (q.length !== 0) {
		let cur = q.shift() as State
		let cur_node: TreeNode = cur.node
		let cur_depth = cur.depth
		console.log(`节点 ${cur_node} 在第 ${cur_depth} 层`)
		// 将子节点放入队列
		if (cur_node.left != null) {
			q.push(new State(cur_node.left, cur_depth + 1))
		}
		if (cur_node.right != null) {
			q.push(new State(cur_node.right, cur_depth + 1))
		}
	}
}
```

这样，我们就可以不使用`for`循环也确切地知道每个二叉树节点的深度了。

**如果你能够理解上面这段代码，我们就可以来看 Dijkstra 算法的代码框架了**。

### Dijkstra 算法框架

Dijkstra 算法的签名

```tsx
// 输入一幅图和一个起点 start，计算 start 到其他节点的最短距离
// 输入是一幅图 graph 和一个起点 start，返回是一个记录最短路径权重的数组。
type dijkstra=( start:number,  graph:[]number)=>number[];
```

比方说，输入起点 start = 3，函数返回一个 int[]数组，假设赋值给 distTo 变量，那么从起点 3 到节点 6 的最短路径权重的值就是 distTo[6]。
==是的，标准的 Dijkstra 算法会把从起点 start 到所有其他节点的最短路径都算出来==

当然，如果你的需求只是计算从起点 start 到某一个终点 end 的最短路径，那么在标准 Dijkstra 算法上稍作修改就可以更高效地完成这个需求，这个我们后面再说。

```tsx
class State {
	// 记录 node 节点的深度
	id: number
	distFromStart: number

	constructor(id: number, distFromStart: number) {
		this.id = id
		this.distFromStart = distFromStart
	}
}
```

刚才说普通 BFS 算法中，根据 BFS 的逻辑和无权图的特点，第一次遇到某个节点所走的步数就是最短距离，所以用一个 visited 数组防止走回头路，每个节点只会经过一次。
加权图中的 Dijkstra 算法和无权图中的普通 BFS 算法不同，在 Dijkstra 算法中，你第一次经过某个节点时的路径权重，不见得就是最小的，所以对于同一个节点，我们可能会经过多次，而且每次的 distFromStart 可能都不一样，比如下图：

![image-20211105101407177](index.assets/image-20211105101407177.png)

我会经过节点`5`三次，每次的`distFromStart`值都不一样，那我取`distFromStart`最小的那次，不就是从起点`start`到节点`5`的最短路径权重了么？

好了，明白上面的几点，我们可以来看看 Dijkstra 算法的代码模板。

**其实，Dijkstra 可以理解成一个带 dp table（或者说备忘录）的 BFS 算法，伪码如下**：

```tsx
class State {
	// 记录 node 节点的深度
	id: number
	distFromStart: number

	constructor(id: number, distFromStart: number) {
		this.id = id
		this.distFromStart = distFromStart
	}
}
// 输入一幅图和一个起点 start，计算 start 到其他节点的最短距离
const dijkstra = (start: number, graph: Array<Array<any>>): number[] => {
	// 图中节点的个数
	let V = graph.length
	// 记录最短路径的权重，你可以理解为 dp table
	// 定义：distTo[i] 的值就是节点 start 到达节点 i 的最短路径权重
	// 求最小值，所以 dp table 初始化为正无穷
	let distTo: number[] = new Array(graph.length).fill(Number.MAX_VALUE)
	// base case，start 到 start 的最短距离就是 0
	distTo[start] = 0

	// 优先级队列，distFromStart 较小的排在前面
	let pq = new HeapRelatedDS.PriorityQueue([], (a: State, b: State) => {
		return a.distFromStart - b.distFromStart
	})
	// 从起点 start 开始进行 BFS
	pq.push(new State(start, 0))

	while (pq.size !== 0) {
		let curState = pq.shift()
		let curNodeID = curState.id
		let curDistFromStart = curState.distFromStart
		if (curDistFromStart > distTo[curNodeID]) {
			// 已经有一条更短的路径到达 curNode 节点了
			continue
		}
		// 将 curNode 的相邻节点装入队列
		for (let neighbor of graph[curNodeID]) {
			// 看看从 curNode 达到 nextNode 的距离是否会更短
			let nextNodeID = neighbor[0]
			let distToNextNode = distTo[curNodeID] + neighbor[1]
			if (distTo[nextNodeID] > distToNextNode) {
				// 更新 dp table
				distTo[nextNodeID] = distToNextNode
				// 将这个节点以及距离放入队列
				pq.push(new State(nextNodeID, distToNextNode))
			}
		}
	}
	return distTo
}
```

**对比普通的 BFS 算法，你可能会有以下疑问**：

**1、没有`visited`集合记录已访问的节点，所以一个节点会被访问多次，会被多次加入队列，那会不会导致队列永远不为空，造成死循环**？

-   如果你能让到达`nextNodeID`的距离更短，那就更新`distTo[nextNodeID]`的值，让你入队，否则的话对不起，不让入队。

-   **因为两个节点之间的最短距离（路径权重）肯定是一个确定的值，不可能无限减小下去，所以队列一定会空，队列空了之后，`distTo`数组中记录的就是从`start`到其他节点的最短距离**。

**2、为什么用优先级队列`PriorityQueue`而不是`LinkedList`实现的普通队列？为什么要按照`distFromStart`的值来排序**？

-   如果你非要用普通队列，其实也没问题的，你可以直接把`PriorityQueue`改成`LinkedList`，也能得到正确答案，但是效率会低很多。
-   **Dijkstra 算法使用优先级队列，主要是为了效率上的优化，类似一种贪心算法的思路**。

**3、如果我只想计算起点`start`到某一个终点`end`的最短路径，是否可以修改算法，提升一些效率**？

-   接下来说第三个问题，如果只关心起点`start`到某一个终点`end`的最短路径，是否可以修改代码提升算法效率。

    肯定可以的，因为我们标准 Dijkstra 算法会算出`start`到所有其他节点的最短路径，你只想计算到`end`的最短路径，相当于减少计算量，当然可以提升效率。

    -   ```tsx
        class State {
        	// 记录 node 节点的深度
        	id: number
        	distFromStart: number

        	constructor(id: number, distFromStart: number) {
        		this.id = id
        		this.distFromStart = distFromStart
        	}
        }
        // 返回节点 from 到节点 to 之间的边的权重
        let weight = (from: number, to: number): number => {
        	return 1
        }
        // 输入节点 s 返回 s 的相邻节点
        let adj = (s: number): number[] => [1, 2]
        // 输入一幅图和一个起点 start，计算 start 到其他节点的最短距离
        const dijkstra = (start: number, graph: number[]): number => {
        	// 图中节点的个数
        	let V = graph.length
        	// 记录最短路径的权重，你可以理解为 dp table
        	// 定义：distTo[i] 的值就是节点 start 到达节点 i 的最短路径权重
        	// 求最小值，所以 dp table 初始化为正无穷
        	let distTo: number[] = new Array<number>(V).fill(Number.MAX_SAFE_INTEGER)
        	// base case，start 到 start 的最短距离就是 0
        	distTo[start] = 0

        	// 优先级队列，distFromStart 较小的排在前面
        	let pq = new HeapRelatedDS.PriorityQueue()
        	// 从起点 start 开始进行 BFS
        	pq.push(new State(start, 0))

        	while (pq.size !== 0) {
        		let curState = pq.shift()
        		let curNodeID = curState.id
        		let curDistFromStart = curState.distFromStart

        		// 在这里加一个判断就行了，其他代码不用改
        		if (curNodeID == 'end_Condition') {
        			return curDistFromStart
        		}

        		if (curDistFromStart > distTo[curNodeID]) {
        			continue
        		}
        		// 将 curNode 的相邻节点装入队列
        		for (let nextNodeID of adj(curNodeID)) {
        			// 看看从 curNode 达到 nextNode 的距离是否会更短
        			let distToNextNode = distTo[curNodeID] + weight(curNodeID, nextNodeID)
        			if (distTo[nextNodeID] > distToNextNode) {
        				// 更新 dp table
        				distTo[nextNodeID] = distToNextNode
        				// 将这个节点以及距离放入队列
        				pq.push(new State(nextNodeID, distToNextNode))
        			}
        		}
        	}

        	// 如果运行到这里，说明从 start 无法走到 end
        	return Number.MAX_VALUE
        }
        ```

    ```

    ```

-   因为优先级队列自动排序的性质，**每次**从队列里面拿出来的都是`distFromStart`值最小的，所以当你从队头拿出一个节点，如果发现这个节点就是终点`end`，那么`distFromStart`对应的值就是从`start`到`end`的最短距离。

    这个算法较之前的实现提前 return 了，所以效率有一定的提高。

![image-20211105101654558](index.assets/image-20211105101654558.png)
==在用 Dijkstra 之前，别忘了要满足一些条件，加权有向图，没有负权重边，OK，可以用 Dijkstra 算法计算最短路径。==
