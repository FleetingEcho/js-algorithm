// 690. 员工的重要性  BFS  DFS 迭代
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
//优先队列
// [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1

//贴个js版的

//1.  DFS
const map = new Map()
function GetImportance(es, id) {
	const len = es.length
	for (let i = 0; i < len; i++) map.set(es[i].id, es[i])
	return getVal(id, map)
}
const getVal = (id) => {
	const master = map.get(id)
	let total = master.importance
	for (let sub_id of master.subordinates) {
		const other = map.get(sub_id)
		total += other.importance
		for (const sub of other.subordinates) total += getVal(sub)
	}
	return total
}

//2. BFS
function GetImportance(es, id) {
	const len = es.length
	const map = new Map()
	for (let i = 0; i < len; i++) map.set(es[i].id, es[i])
	let total = 0
	const queue = []
	queue.push(map.get(id))
	while (queue.length !== 0) {
		const poll = queue.shift()
		total += poll.importance
		for (const sub_id of poll.subordinates) {
			queue.push(map.get(sub_id))
		}
	}
	return total
}
