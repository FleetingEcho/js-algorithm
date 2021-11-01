/* 
127.单词接龙

beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
     返回它的长度 5。
*/

// 单向BFS
var ladderLength3 = function (beginWord, endWord, wordList) {
	let queue = []
	let visited = new Set()
	//是否是变换一个字母得到的
	let match = function (a, b) {
		let sum = 0
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) sum++
		}
		if (sum === 1) return true
		return false
	}
	//搜索队列
	queue.push(beginWord)
	visited.add(beginWord)
	let res = 1 //原词就算第一步了

	while (queue.length !== 0) {
		let size = queue.length
		for (let j = size; j > 0; j--) {
			let cur = queue.shift()
			for (let item of wordList) {
				// 终点？
				if (visited.has(item)) continue
				if (match(cur, item)) {
					if (item === endWord) return res + 1
					queue.push(item)
					visited.add(item)
				}
			}
		}
		res++
	}
	return 0
}

var ladderLength2 = function (beginWord, endWord, wordList) {
	let queue = []
	let visited = new Set()
	//是否是变换一个字母得到的
	let match = function (a, b) {
		let sum = 0
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) sum++
		}
		if (sum === 1) return true
		return false
	}
	//搜索队列
	queue.push(beginWord)
	visited.add(beginWord)
	let res = 1 //原词就算第一步了

	while (queue.length !== 0) {
		let size = queue.length
		for (let j = size; j > 0; j--) {
			let cur = queue.shift()
			for (let item of wordList) {
				// 终点？
				if (visited.has(item)) continue
				if (match(cur, item)) {
					if (item === endWord) return res + 1
					queue.push(item)
					visited.add(item)
				}
			}
		}
		res++
	}
	return 0
}

/* 
"hit"
"cog"
["hot","dot","dog","lot","log","cog"]

*/

console.log(ladderLength1111('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))

let ladderLength = function (beginWord, endWord, wordList) {
	let words = new Set(wordList)
	if (!words.has(endWord)) {
		return 0
	}

	let beginSet = new Set()
	beginSet.add(beginWord)
	let endSet = new Set()
	endSet.add(endWord)
	let step = 1
	// BFS
	while (beginSet.size > 0) {
		// 果然是需要第三方的set来进行增加的， 否则跳不出beginSet。
		let tempSet = new Set()
		for (let item of beginSet) {
			for (let i = 0; i < item.length; i++) {
				for (let j = 0; j < 26; j++) {
					let s = String.fromCharCode(97 + j)
					if (s != item[i]) {
						let new_word = item.slice(0, i) + s + item.slice(i + 1)
						if (endSet.has(new_word)) {
							return level + 1
						}
						if (words.has(new_word)) {
							tempSet.add(new_word)
							words.delete(new_word)
						}
					}
				}
			}
			//
		}
		beginSet = tempSet
		step++
		if (beginSet.size > endSet.size) {
			;[beginSet, endSet] = [endSet, beginSet]
		}
	}
	return 0
}

let ladderLength = function (beginWord, endWord, wordList) {
	let words = new Set(wordList)
	if (!words.has(endWord)) return 0
	// 验证是否只有一位字母不同;
	const match = (a, b) => {
		let count = 0
		for (let i = 0; i < a.length; ++i) {
			if (a[i] !== b[i]) {
				if (++count > 1) return false
			}
		}
		return count == 1
	}
	// 验证endSet是否能一步跳到相交点;
	const check = (set, target) => {
		let flag = false
		;[...set].some((item) => {
			if (match(item, target)) {
				flag = true
				return true //跳出some循环
			}
		})
		return flag
	}
	let visited = new Set()
	let beginSet = new Set()
	let endSet = new Set()

	beginSet.add(beginWord)
	endSet.add(endWord)
	let step = 1

	while (beginSet.size > 0) {
		let tempSet = new Set()
		for (let cur of beginSet) {
			visited.add(cur)
			if (check(endSet, cur)) return step + 1
			for (let item of words) {
				if (visited.has(item)) continue
				if (match(cur, item)) {
					visited.add(item)
					tempSet.add(item)
				}
			}
		}
		// 反转方向
		beginSet = tempSet
		step++
		if (beginSet.size > endSet.size) {
			;[beginSet, endSet] = [endSet, beginSet]
		}
	}
	return 0
}

/* 
"hit"
"cog"
["hot","dot","dog","lot","log","cog"]

"hot"
"dog"
["hot","dog","dot"]


*/
