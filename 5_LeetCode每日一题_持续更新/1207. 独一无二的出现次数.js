// 1207. 独一无二的出现次数
/* 
输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。

>独一无二的出现次数
*/

var uniqueOccurrences = function (arr) {
	if (arr.length === 0) return true
	const memo = new Map()
	for (let val of arr) {
		if (!memo.has(val)) memo.set(val, 1)
		else {
			let temp = memo.get(val)
			memo.set(val, temp + 1)
		}
	}
	let arr1 = Array.from(memo.values())
	console.log(arr1)
	let set = new Set(arr1)
	if (arr1.length === set.size) return true
	else return false
}

// console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1, 2]))
