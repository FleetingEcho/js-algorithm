//  intervals 形如 [[1,3],[2,6]...]
// 56.合并区间
function merge(intervals) {
	if (intervals.length == 0) return []
	intervals.sort((a, b) => a[0] - b[0])
	let res = []
	res.push(intervals[0])
	for (let i = 1; i < intervals.length; i++) {
		curr = intervals[i]
		last = res[res.length - 1]
		if (curr[0] <= last[1]) {
			last[1] = Math.max(last[1], curr[1])
		} else {
			res.push(Array.from(curr))
		}
	}
	return res
}
