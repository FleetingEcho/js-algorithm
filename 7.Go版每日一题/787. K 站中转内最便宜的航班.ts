function findCheapestPrice1(n: number, flights: number[][], src: number, dst: number, k: number): number {
	const INF = 10000 * 101 + 1
	const f = new Array(k + 2).fill(0).map(() => new Array(n).fill(INF))
	f[0][src] = 0
	for (let t = 1; t <= k + 1; ++t) {
		for (const flight of flights) {
			const j = flight[0],
				i = flight[1],
				cost = flight[2]
			f[t][i] = Math.min(f[t][i], f[t - 1][j] + cost)
		}
	}
	let ans = INF
	for (let t = 1; t <= k + 1; ++t) {
		ans = Math.min(ans, f[t][dst])
	}
	return ans == INF ? -1 : ans
}

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
	const INF = 10000 * 101 + 1
	let f = new Array(n).fill(INF)
	f[src] = 0
	let ans = INF
	for (let t = 1; t <= k + 1; ++t) {
		const g = new Array(n).fill(INF)
		for (const flight of flights) {
			const j = flight[0],
				i = flight[1],
				cost = flight[2]
			g[i] = Math.min(g[i], f[j] + cost)
		}
		f = g
		ans = Math.min(ans, f[dst])
	}
	return ans == INF ? -1 : ans
}
