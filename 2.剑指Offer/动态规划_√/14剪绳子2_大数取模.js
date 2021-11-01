// 14剪绳子2_大数取模
var cuttingRope = function (n) {
	let arr = [0, 0, 1, 2, 4]
	if (n < 5) return arr[n]
	const max = 1e9 + 7
	let res = 1
	while (n >= 5) {
		res = (res % max) * 3
		n = n - 3
	}
	return (res * n) % max
}
