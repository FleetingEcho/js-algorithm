// 质数，从2开始，所有是2倍数的全部都不是
//       从3开始，所有是3倍数的全都不是
//       .....
// 204.计算质数
const countPrimes = (n) => {
	let num = 0
	let map = new Array(n).fill(true) //假设全是质数
	for (let i = 2; i < n; i++) {
		if (map[i] === true) {
			num++
			for (let j = i + i; j < n; j += i) {
				//比如2, 2的倍数就都是false了，从小到大
				map[j] = false
			}
		}
	}
	return num
}
