const networkDelayTime = function (times, n, k) {
	const map = {}
	times.map((p) => {
		if (!map[p[0]]) map[p[0]] = {}
		map[p[0]][p[1]] = p[2]
	})
	const arr = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
	arr[0] = 0
	arr[k] = 0
	const q = [[k, 0]]
	while (q.length > 0) {
		const cur = q.shift()
		if (map[cur[0]]) {
			Object.keys(map[cur[0]]).map((other) => {
				const node = map[cur[0]]
				const time = node[other] + cur[1]
				if (time < arr[other]) {
					arr[other] = time
					q.push([other, time])
				}
			})
		}
	}
	let res = Number.MIN_SAFE_INTEGER
	arr.some((val, index) => {
		if (index > n) return true
		res = res < val ? val : res
	})
	return (res = res === Number.MAX_SAFE_INTEGER ? -1 : res)
}
