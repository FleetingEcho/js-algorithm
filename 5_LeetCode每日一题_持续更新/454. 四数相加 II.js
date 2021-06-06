// 454. 四数相加 II
/* 
🙂🙂🙂🙂🙂
给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
输入:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

输出:
2

解释:
两个元组如下:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
*/

var A = [1, 2],
	B = [-2, -1],
	C = [-1, 2],
	D = [0, 2]

// 分组+哈希表
var fourSumCount = function (A, B, C, D) {
	const count = new Map()
	A.forEach((u) => B.forEach((v) => count.set(u + v, (count.get(u + v) || 0) + 1)))
	let ans = 0
	for (let u of C) {
		for (let v of D) {
			if (count.has(-u - v)) {
				ans += count.get(-u - v)
			}
		}
	}
	return ans
}

// 由于二维数组太大，爆栈了， N>20尽量就不要用DFS了
var fourSumCount = function (A, B, C, D) {
	let res = 0
	let visited = new Set()
	let track = []
	let list = [A, B, C, D]
	if (list.flat().length === 0) {
		return 0
	} //数组降维
	let level = 0

	function backtrack(track, level) {
		if (track.length === 4) {
			if (track.reduce((pre, cur) => pre + cur) == 0) {
				res++
				return
			}
			return
		}
		if (level > 3) {
			return
		}
		let cur = list[level]
		for (let i = 0; i < cur.length; i++) {
			if (visited.has(`${level}-${i}`)) {
				continue
			}
			visited.add(`${level}-${i}`)
			track.push(cur[i])
			// 进入下一层决策树
			level += 1
			backtrack(Array.from(track), level)
			// 撤销
			level -= 1
			track.pop()
			visited.delete(`${level}-${i}`)
		}
	}

	backtrack(track, level)
	return res
}
