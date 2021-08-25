// 134. 加油站
/* 
输入: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

输出: 3

解释:
从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
因此，3 可为起始索引。
*/

// 贪心算法   求最值
function canCompleteCircuit(gas, cost) {
	const len = gas.length
	let spare = 0
	let minSpare = Number.MAX_SAFE_INTEGER
	let minIndex = 0

	for (let i = 0; i < len; i++) {
		spare += gas[i] - cost[i]
		if (spare < minSpare) {
			minSpare = spare
			minIndex = i
		}
	}
	return spare >= 0 ? (minIndex + 1) % len : -1
}

// 也可以想成环形的，最多走length-1步，但时间复杂度稍高些

// 暴力迭代，最高复杂度 O(N^2);
function canCompleteCircuit(gas, cost) {
	const len = gas.length
	let spare = 0,
		count = 0
	let minIndex = Number.MAX_SAFE_INTEGER
	while (count < len) {
		// 退出条件: 到达第五步并且spare>=0;
		for (let i = count, step = 0; i < 2 * len; i++, step++) {
			if (step > len - 1) {
				break
			}
			i = i % len
			spare += gas[i] - cost[i]
			if (step == len - 1 && spare >= 0) {
				minIndex = Math.min(count, minIndex)
				spare = 0
				break
			}
			// 没油了，退出，下一个
			if (spare < 0) {
				spare = 0
				break
			}
		}
		count++
	}
	return (minIndex = minIndex < len ? minIndex : -1)
}
