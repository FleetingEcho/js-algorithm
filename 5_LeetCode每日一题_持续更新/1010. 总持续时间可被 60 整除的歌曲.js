// 1010. 总持续时间可被 60 整除的歌曲

const numPairsDivisibleBy60 = (time) => {
	let res = 0
	let seconds = new Array(60).fill(0)
	for (let t of time) {
		let i = 60 - (t % 60)
		res += seconds[i == 60 ? 0 : i]
		seconds[t % 60] += 1
	}
	return res
}

// 例如 2，  i=58 ,  s[2]++;
