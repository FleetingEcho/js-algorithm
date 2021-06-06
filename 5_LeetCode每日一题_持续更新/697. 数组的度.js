// 697. 数组的度
/* 

找出现同个数次数最多的 连续 子数组， 返回长度
输入：[1,2,2,3,1,4,2]
输出：6
因为: [2,2,3,1,4,2] // 2最多，连续，

*/

let findShortestSubArray = (nums) => {
	let map = {}
	let times = 0 //当前最大次数
	let minLen = 0 //最短长度
	nums.map((item, i) => {
		if (!map[item]) {
			// 初始化
			map[item] = [1, i, i] //次数，起点，终点
		} else {
			// 有，开始设定终点
			map[item][0]++
			map[item][2] = i
			// 更新最大次数，长度
			if (map[item][0] > times) {
				times = map[item][0]
				minLen = map[item][2] - map[item][1]
			} else if (map[item][0] == times) {
				// 更新长度
				minLen = Math.min(minLen, map[item][2] - map[item][1])
			}
		}
	})
	return minLen + 1
}

// 方法2

const findShortestSubArray = (nums) => {
	let map = new Map(), // [数字, 出现次数]
		count = 0, //最大的度
		maxVal = 0, //最大 度 的数字
		minLen = nums.length

	for (let item of nums) {
		map.set(item, map.has(item) ? map.get(item) + 1 : 1)
		const temp = map.get(item)
		if (temp >= count) {
			count = temp
			maxVal = item
		}
	}
	let arr = []
	//遍历map，arr存放出现次数最多的数字
	for (let [key, value] of map) {
		if (value == count) {
			arr.push(key)
		}
	}
	console.log(arr)
	for (let item of arr) {
		minLen = Math.min(minLen, nums.lastIndexOf(item) - nums.indexOf(item) + 1)
	}
	return minLen
}
