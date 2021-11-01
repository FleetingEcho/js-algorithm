// 767.重构字符串
const reorganizeString = function (S) {
	const len = S.length
	if (len === 0) return ''
	//用于存放字符及其数量
	let hashArr = new Array(26).fill(0)
	for (let i = 0; i < S.length; i++) {
		let item = hashArr[S[i].charCodeAt() - 97]
		// !!item ? item.count++ : hashArr[S[i].charCodeAt()-97]={name:S[i],count:1}; //或者
		;(item && item.count++) || (hashArr[S[i].charCodeAt() - 97] = { name: S[i], count: 1 })
	}
	hashArr = hashArr.filter((v) => v != 0) //，过滤，把没出现的数字去掉，减少后面遍历次数
	hashArr.sort((a, b) => b.count - a.count) //按count大小降序排列
	if (hashArr[0].count > Math.ceil(S.length / 2)) {
		//比如"aaaaaabb",a数量过大，根本无法间隔插入其他
		return ''
	} else {
		let res = new Array(hashArr[0].count).fill(hashArr[0].name)
		// let cur = 1;//表示hashArr的索引
		let i = 1
		//开始构造输出的数据，隔一个插入一个
		for (let cur = 1; cur < hashArr.length; ) {
			res.splice(i, 0, hashArr[cur].name)
			hashArr[cur].count--
			if (hashArr[cur].count === 0) {
				cur++
			}
			//最多的插入完了，剩下的从1开始重新插入，直到hashArr到尽头
			i = i + 2 > res.length ? 1 : i + 2
		}
		return res.join('')
	}
}
