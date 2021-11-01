//888. 公平的糖果棒交换

function fairCandySwap(A, B) {
	let sumA = A.reduce((prev, cur) => prev + cur, 0)
	let sumB = B.reduce((prev, cur) => prev + cur, 0)
	let target = (sumA + sumB) / 2
	let set = new Set(B)
	for (let a of A) {
		let b = target - (sumA - a)
		if (set.has(b)) {
			return [a, b]
		}
	}
	return []
}
