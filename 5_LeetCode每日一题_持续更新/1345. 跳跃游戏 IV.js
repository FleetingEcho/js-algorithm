/* 
1345. 跳跃游戏 IV
给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。

每一步，你可以从下标 i 跳到下标：

i + 1 满足：i + 1 < arr.length
i - 1 满足：i - 1 >= 0
j 满足：arr[i] == arr[j] 且 i != j
请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。

注意：任何时候你都不能跳到数组外面。


输入：arr = [100,-23,-23,404,100,23,23,23,3,404]
输出：3
解释：那你需要跳跃 3 次，下标依次为 0 --> 4 --> 3 --> 9 。
下标 9 为数组的最后一个元素的下标。
*/

const minJumps = function (arr) {
	if (arr.length === 1) return 0
	let map = new Map()
	let visited = new Set([0]),
		ans = 0
	let count = 0 // 计数同值 如果连续同值 只要第一个和最后一个的下标
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			if (count > 0) {
				continue
			} else {
				count++
				map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]).add(i) : new Set([i]))
			}
		} else {
			count = 0
			map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]).add(i) : new Set([i]))
		}
	}
	console.log(map)
	/* 
Map(5) {
  100 => Set(2) { 0, 4 },
  -23 => Set(2) { 1, 2 },
  404 => Set(2) { 3, 9 },
  23 => Set(2) { 5, 7 },
  3 => Set(1) { 8 }
}

*/
	//跳跃方法分为 前后跳跃 + 同值一步跳跃；
	let queue = [0]
	while (queue.length) {
		let size = queue.length
		while (size-- > 0) {
			let temp = queue.shift()
			if (temp === arr.length - 1) return ans
			let a = temp + 1
			let b = temp - 1
			if (arr[temp] === arr[arr.length - 1] || a === arr.length - 1) return ans + 1 // b不可能等于arr.length - 1
			if (a < arr.length && !visited.has(a)) {
				queue.push(a)
				visited.add(a)
			}
			if (b >= 0 && !visited.has(b)) {
				queue.push(b)
				visited.add(b)
			}
			let set = map.get(arr[temp])
			set.size > 1 &&
				set.forEach((item) => {
					if (!visited.has(item)) {
						queue.push(item)
						visited.add(item)
					}
				})
		}
		ans++
	}
}
