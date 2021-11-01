// 455. 分发饼干
/* 
输入: g = [1,2], s = [1,2,3]
输出: 2
解释: 
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
*/

const findContentChildren = function (g, s) {
	let i = 0,
		j = 0
	g.sort((a, b) => a - b) // 升序
	s.sort((a, b) => a - b) // 升序
	while (j < s.length) {
		if (s[j] >= g[i]) {
			if (i === g.length) break
			i++
		}

		j++
	}
	return i
}
