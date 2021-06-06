// 649. Dota2 参议院
var predictPartyVictory = function (senate) {
	const n = senate.length
	let radiant = [],
		dire = []
	// 不要用for...in遍历数组
	Array.from(senate).map((val, i) => {
		if (val === 'R') {
			radiant.push(i)
		} else {
			dire.push(i)
		}
	})

	while (radiant.length && dire.length) {
		if (radiant[0] < dire[0]) {
			radiant.push(radiant[0] + n) //下一轮
		} else {
			dire.push(dire[0] + n)
		}
		radiant.shift() //这一轮投过了，被封的直接删除了，有权利的继续push到下一轮
		dire.shift()
	}
	return radiant.length ? 'Radiant' : 'Dire'
}
