// 92.反转链表 II
var sortArrayByParityII = function (A) {
	const len = A.length
	let j = 1
	for (let i = 0; i < len; i += 2) {
		// A[i]是奇数
		if (A[i] & 1) {
			// A[j]是奇数
			while (A[j] & 1) {
				j += 2 //直到遇到A[j]是偶数
			}
			;[A[i], A[j]] = [A[j], A[i]]
		}
	}
	return A
}
