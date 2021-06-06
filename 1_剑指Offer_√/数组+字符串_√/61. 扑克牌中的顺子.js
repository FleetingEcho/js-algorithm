// 61. 扑克牌中的顺子
// 从扑克牌中随机抽5张牌，判断是不是一个顺子，
// 即这5张牌是不是连续的。2～10为数字本身，
// A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。
// A 不能视为 14。

// ! 利用Set的去重  [1,2,3,0,0], [1,3,9,0,0]
const isStraight = (nums) => {
	let set = new Set()
	let max = 1,
		min = 14
	for (let n of nums) {
		if (n !== 0) {
			if (set.has(n)) return false
			set.add(n)
			max = Math.max(max, n)
			min = Math.min(min, n)
		}
	}
	return max - min < 5
}
