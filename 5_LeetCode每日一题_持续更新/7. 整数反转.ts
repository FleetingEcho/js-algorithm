const reverse = function (x: number): number {
	let res = 0
	while (x !== 0) {
		res = res * 10 + (x % 10)
		if (res > 2 ** 31 - 1 || res < -(2 ** 31)) return 0
		x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
	}
	return res
}
