// 621. 任务调度器1206
/* 
对于整数索引的较小哈希表，性能
数组 > Map ≈ Object。变量 > 数组 > 二维数组 > 多哈希表
其中，maxTimes为出现次数最多的那个任务出现的次数。maxCount为一共有多少个任务和出现最多的那个任务出现次数一样。

图中一共占用的方格即为完成所有任务需要的时间，即：

(maxTimes - 1)*(n + 1) + maxCount
(maxTimes−1)∗(n+1)+maxCount

此外，如果任务种类很多，在安排时无需冷却时间，只需要在一个任务的两次出现间填充其他任务，然后从左到右从上到下依次执行即可，由于每一个任务占用一个时间单位，我们又正正好好地使用了tasks中的所有任务，而且我们只使用tasks中的任务来占用方格（没用冷却时间）。因此这种情况下，所需要的时间即为tasks的长度。

由于这种情况时再用上述公式计算会得到一个不正确且偏小的结果，因此，我们只需把公式计算的结果和tasks的长度取最大即为最终结果。

*/
// https://leetcode-cn.com/problems/task-scheduler/solution/jian-ming-yi-dong-de-javajie-da-by-lan-s-jfl9/
// 数组模式
const leastInterval = function (tasks, n, h = Array(26).fill(0)) {
	if (n === 0) return tasks.length
	for (let i = 0; i < tasks.length; i++) {
		h[tasks[i].charCodeAt() - 65]++
	}

	let max = Math.max(...h),
		maxCount = 0
	h.forEach((n) => n === max && maxCount++)
	return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
}

// 贪心算法    对象模式
var leastInterval = function (tasks, n) {
	let obj = {},
		maxTimes = 0,
		maxCount = 0 //maxTimes为出现次数最多的那个任务出现的次数。maxCount为一共有多少个任务和出现最多的那个任务出现次数一样。除去冷却时间
	for (let i = 0; i < tasks.length; i++) {
		obj[tasks[i]] = obj[tasks[i]] ? obj[tasks[i]] + 1 : 1
	}
	for (let i in obj) {
		if (maxTimes < obj[i]) {
			maxTimes = obj[i]
			maxCount = 1
		} else if (maxTimes == obj[i]) {
			maxCount++
		}
	}
	return Math.max((maxTimes - 1) * (n + 1) + maxCount, tasks.length) //可能带上冷却时间 会超过总length
}
