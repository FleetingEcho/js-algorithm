// 1492. n 的第 k 个因子
function kthFactor(n, k) {
	let i = 0
	while (k > 0 && i <= n) {
		i++
		if (n % i == 0) {
			k-- //个数减少
		}
	}
	if (i > n) {
		return -1
	}
	return i
}
