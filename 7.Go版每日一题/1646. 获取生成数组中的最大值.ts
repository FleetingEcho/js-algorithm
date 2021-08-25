function getMaximumGenerated(n: number): number {
	if (n === 0 || n === 1) return n
	const arr = new Array(n + 1).fill(0)
	let res = 0
	arr[1] = 1
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[Math.floor(i / 2)] + (i % 2) * arr[Math.floor(i / 2) + 1]
		res = res < arr[i] ? arr[i] : res
	}
	return res
}
