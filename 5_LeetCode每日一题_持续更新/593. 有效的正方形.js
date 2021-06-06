// 593. 有效的正方形
/* 
利用了正方形的定义，四边相等，对角线相等。
输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
输出: True
*/

/* 
[1,0]
[-1,0]
[0,-1]
[0,1]

*/
var validSquare = function (p1, p2, p3, p4) {
	let list = [p1, p2, p3, p4]
	let dist = []
	const sideLength = (a, b) => (list[a][1] - list[b][1]) ** 2 + (list[a][0] - list[b][0]) ** 2
	for (let i = 0; i < list.length; i++) {
		for (let j = i + 1; j < list.length; j++) {
			let side = sideLength(i, j)
			dist.push(side)
		}
	}
	let set = new Set(dist)
	dist = [...set].sort((a, b) => a - b)
	if (dist.length !== 2) {
		return false
	}
	if (dist[0] !== 0 && dist[0] == dist[1] >> 1) {
		return true
	}
	return false
}

let p1 = [1, 0],
	p2 = [-1, 0],
	p3 = [0, -1],
	p4 = [0, 1]
console.log(validSquare(p1, p2, p3, p4))
