/* 
>BFS 的核心思想应该不难理解的，就是把一些问题抽象成图，从一个点开始，向四周开始扩散。
>一般来说，我们写 BFS 算法都是用「队列」这种数据结构，每次将一个节点周围的所有节点加入队列。
>BFS 相对 DFS 的最主要的区别是：BFS 找到的路径一定是最短的，但代价就是空间复杂度比 DFS 大很多
*/
// > 找最短路径，要敏感的想到BFS
// * 本质：从一个点 走到终点， 最短路径

//> BFS 算法并不只是一个寻路算法，而是一种暴力搜索算法，只要涉及暴力穷举的问题，BFS 就可以用，而且可以最快地找到答案

//! 套路 计算从起点 start 到终点 target 的最近距离
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
/* 
队列 q 就不说了，BFS 的核心数据结构；cur.adj() 泛指 cur 相邻的节点，
比如说二维数组中，cur 上下左右四面的位置就是相邻节点；visited 的主要作用是防止走回头路.
Visited大部分时候都是必须的。
但是像一般的二叉树结构，没有子节点到父节点的指针，不会走回头路就不需要 visited。
*/

//! BFS 的逻辑，depth 每增加一次，队列中的所有节点都向前迈一步，这保证了第一次到达终点的时候，走的步数是最少的。
//> BFS 可以找到最短距离，但是空间复杂度高，而 DFS 的空间复杂度较低。

/* 
* DFS 不能找最短路径吗？其实也是可以的，但是“时间复杂度”相对高很多。
你想啊，DFS 实际上是靠递归的堆栈记录走过的路径，你要找到最短路径，
肯定得把二叉树中所有树杈都探索完才能对比出最短的路径有多长对不对？
而 BFS 借助队列做到一次一步「齐头并进」，是可以在不遍历完整棵树的条件下找到最短距离的。
形象点说，DFS 是线，BFS 是面；DFS 是单打独斗，BFS 是集体行动。
*/

// ! 双向BFS优化
// * 传统的 BFS 框架就是从起点开始向四周扩散，遇到终点时停止；
// * 而双向 BFS 则是从起点和终点同时开始扩散，当两边有交集的时候停止。
// > 不过，双向 BFS 也有局限，因为你必须知道终点在哪里
// > 双向 BFS 还是遵循 BFS 算法框架的，只是不再使用队列，而是使用 HashSet 方便快速判断两个集合是否有交集。

// 二叉树的最小高度 剑指 Offer 55 - I. 二叉树的深度

function minDepth(root) {
	if (root == null) return 0
	let queue = []
	queue.push(root)
	// root 本身就是一层，depth 初始化为 1
	let depth = 1
	while (q.length !== 0) {
		let sz = queue.length
		/* 将当前队列中的所有节点向四周扩散 */
		for (let i = 0; i < sz; i++) {
			let cur = queue.shift()
			/* 判断是否到达终点 */
			if (!cur.left && !cur.right) return depth
			/* 将 cur 的相邻节点加入队列 */
			if (cur.left) queue.push(cur.left)
			if (cur.right) queue.push(cur.right)
		}
		/* 这里增加步数 */
		depth++
	}
	return depth
}

// 将 s[j] 向上拨动一次

const plusOne = (str, i) => {
	let arr = [...str]
	// console.log(arr)
	if (str[i] === '9') {
		arr[i] = '0'
	} else {
		arr[i] = String(Number(str[i]) + 1)
	}
	return arr.join('')
}
const minusOne = (str, i) => {
	let arr = [...str]
	// console.log(str)
	if (str[i] === '0') {
		arr[i] = '9'
	} else {
		arr[i] = String(Number(str[i]) - 1)
	}
	return arr.join('')
}

// ! 例如 leetCode 752 开锁问题   用JS写会超时，需要使用双向BFS
function openLock(deadends, target) {
	// 记录需要跳过的死亡密码
	// 记录已经穷举过的密码，防止走回头路
	if (target == null || target == '0000') return -1
	let start = '0000'

	// if(deadends.includes(target)||deadends.includes(start)) return -1;
	let queue = []
	queue.push(start)
	let visited = new Set()
	let death = new Set(deadends)
	if (visited.has(target) || visited.has(start)) return -1
	let step = 0
	visited.add(start)

	while (queue.length !== 0) {
		let len = queue.length
		/* 将当前队列中的所有节点向周围扩散 */
		for (let i = 0; i < len; i++) {
			let cur = queue.shift()
			/* 判断是否到达终点 */
			if (death.has(cur)) continue
			// console.log(cur)
			if (cur === target) return step
			/* 将一个节点的未遍历相邻节点加入队列 */
			for (let j = 0; j < 4; j++) {
				let up = plusOne(cur, j)
				if (!visited.has(up)) {
					queue.push(up)
					visited.add(up)
				}
				let down = minusOne(cur, j)
				if (!visited.has(down)) {
					queue.push(down)
					visited.add(down)
				}
			}
		}
		/* 在这里增加步数 */
		step++
	}
	// 如果穷举完都没找到目标密码，那就是找不到了
	return -1
}

/**
 * 双向BFS 你必须知道终点
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

var openLock1 = function (deadends, target) {
	let set1 = new Set(['0000'])
	let set2 = new Set([target]) //终点

	let visited = new Set(['0000'])
	let deadSet = new Set(deadends)
	if (deadSet.has(target) || deadSet.has('0000')) return -1
	let step = 0

	while (set1.size && set2.size) {
		let neighbors = new Set()
		// if (set1.size > set2.size) {
		//   //小优化，用数量小的存的求邻接节点数量小
		//   let temp = set1;
		//   set1 = set2;
		//   set2 = temp;
		// }
		for (let cur of set1) {
			if (deadSet.has(cur)) continue
			// 判断是否到达终点
			if (set2.has(cur)) return step
			visited.add(cur)
			// 将一个节点的未遍历相邻节点加入集合
			// 每个锁都有两种情况，总共4个锁
			for (let i = 0; i < 4; i++) {
				let down = minusOne(cur, i)
				if (!visited.has(down)) neighbors.add(down)
				let up = plusOne(cur, i)
				if (!visited.has(up)) neighbors.add(up)
			}
		}
		step++
		// ! 轮流扩散set1和set2
		// temp相当于set1
		// 这里交换 set1 set2，下一轮 while 就是扩散 set2
		set1 = set2
		set2 = neighbors //
	}
	return -1
}

// const deadends=["8888"]
// const target="0009";
const deadends = ['0201', '0101', '0102', '1212', '2002']
const target = '0202'
console.log(openLock(deadends, target))
