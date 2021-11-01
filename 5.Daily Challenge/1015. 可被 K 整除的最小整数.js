// 1015. 可被 K 整除的最小整数
function smallestRepunitDivByK(K) {
	let seen = new Array(K).fill(false)
	let n = 0
	let c = 0
	while (!seen[n]) {
		seen[n] = true
		n = (10 * n + 1) % K
		++c
	}
	return n == 0 ? c : -1
}

function smallestRepunitDivByK(K) {
	if (K % 2 == 0 || K % 5 == 0) {
		return -1
	}
	let temp = 1
	let len = 1
	while (temp % K != 0) {
		temp = temp % K
		temp = temp * 10 + 1
		len++
	}
	return len
}
