// Forward declaration of the knows API.
// https://mp.weixin.qq.com/s/hd06P3ASUAmA5apbAB1nIw
/* 
  
  输入: graph = [
  [1,1,0],
  [0,1,0],
  [1,1,1]
]
输出: 1
*/
// knows是一个函数， n是第i个人；
var solution = function (knows) {
	return function (n) {
		let result = 0
		for (let i = 1; i < n; ++i) {
			if (knows(result, i)) {
				//a认识b？
				result = i
			}
		}
		for (let i = 0; i < n; ++i) {
			if (result == i) continue
			// 名人不认识某人，或者某人不认识名人，则-1
			if (knows(result, i) || !knows(i, result)) return -1
		}
		return result
	}
}
