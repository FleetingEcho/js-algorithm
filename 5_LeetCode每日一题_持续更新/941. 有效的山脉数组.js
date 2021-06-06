// 941. 有效的山脉数组
const validMountainArray = (A) => {
	const n = A.length
	let i = 0
	let j = n - 1
	while (i + 1 < n && A[i] < A[i + 1]) {
		i++
	}
	while (j - 1 >= 0 && A[j - 1] > A[j]) {
		j--
	}
	if (i != 0 && i == j && j != n - 1) {
		return true
	}
	return false
}

const a = [0, 1, 2, 2, 5, 2, 1, 0]
console.log(validMountainArray(a))
