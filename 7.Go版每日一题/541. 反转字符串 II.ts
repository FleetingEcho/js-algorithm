const reverseStr = function (s: string, k: number): string {
	const len = s.length
	let resArr = s.split('')
	for (let i = 0; i < len; i += 2 * k) {
		let l = i - 1,
			r = i + k > len ? len : i + k
		while (++l < --r) {
			;[resArr[l], resArr[r]] = [resArr[r], resArr[l]]
		}
	}
	return resArr.join('')
}
