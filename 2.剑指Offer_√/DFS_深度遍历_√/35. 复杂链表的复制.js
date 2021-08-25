// 35. 复杂链表的复制
/* 
请实现 copyRandomList 函数，复制一个复杂链表。
在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，
还有一个 random 指针指向链表中的任意节点或者 null。

输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
*/

// ! 深度优先搜索

function copyRandomList(head) {
	const visited = new Map()
	const dfs = (head) => {
		if (head === null) return null
		if (visited.has(head)) {
			return visited.get(head)
		}
		//  创建新结点
		let copy = new Node(head.val, null, null)
		visited.set(head, copy)
		copy.next = dfs(head.next)
		copy.random = dfs(head.random)
		return copy
	}
	return dfs(head)
}
