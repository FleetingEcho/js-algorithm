// 57.插入区间
var insert = function (intervals, newInterval) {
	let i = 0
	let res = []
	let len = intervals.length
	if (len == 0) return [newInterval]
	intervals.push(newInterval)
	intervals.sort((a, b) => a[0] - b[0])
	len++

	while (i < len) {
		let currLeft = intervals[i][0]
		let currRight = intervals[i][1]
		while (i < len - 1 && intervals[i + 1][0] <= currRight) {
			i++
			currRight = Math.max(intervals[i][1], currRight)
		}
		res.push([currLeft, currRight])
		i++
	}
	return res
}
