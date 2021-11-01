/*
131. 分割回文串 
输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]

*/
// DFS
/* 
dp[i][j]表示i到j间的字符串是不是回文
i === j，同一字符（s[i] === s[j]）。dp[i][j]是回文
i + 1 = j，相邻字符。只要s[i] === s[j]，dp[i][j]是回文
外层是回文 = 向里两字符相等 + 里层是回文：dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]


状态转移方程：dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
i 与 i + 1关联，i循环要倒序（先推大，大作为已知，再推小）
j 与 j - 1关联，j循环要顺序（先推小，小作为已知，再推大）
*/

var partition = function (s) {
	const n = s.length
	if (n === 0) return []
	const res = [],
		dp = Array.from({ length: n }, () => Array(n).fill(0))
	for (let i = n - 1; i >= 0; i--) {
		// 动规
		for (let j = i; j < n; j++) {
			dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
		}
	}
	function traverse(path, start) {
		// 回溯
		if (start === n) res.push([...path])
		for (let i = start; i < n; i++) {
			if (!dp[start][i]) continue
			path.push(s.substring(start, i + 1))
			traverse(path, i + 1)
			path.pop()
		}
	}
	traverse([], 0)
	return res
}

const isPalindrome = (s, start, i) => {
	while (start < i) {
		if (s[start] !== s[i]) return false
		start++
		i--
	}
	return true
}
const partition = function (s) {
	let len = s.length,
		res = [],
		path = []
	backtrack(s, 0, len, path, res)
	return res
}
var backtrack = (s, start, len, path, res) => {
	if (start === len) {
		res.push([...path])
		return
	}
	for (let i = start; i < len; i++) {
		if (!isPalindrome(s, start, i)) {
			continue
		}
		path.push(s.substring(start, i + 1))
		backtrack(s, i + 1, len, path, res)
		path.pop()
	}
}
