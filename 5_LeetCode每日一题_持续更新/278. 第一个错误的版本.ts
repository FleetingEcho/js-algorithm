type _version = (a: number) => boolean
const solution = (isBadVersion: _version) => {
	return (n: number) => {
		let low = 0,
			high = n,
			res = n
		while (low <= high) {
			const mid = (low + high) >>> 1
			if (isBadVersion(mid)) {
				res = mid
				high = mid - 1
			} else {
				low = mid + 1
			}
		}
		return res
	}
}
