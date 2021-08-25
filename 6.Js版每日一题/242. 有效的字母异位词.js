// 242. 有效的字母异位词
var isAnagram = function (s, t) {
	return Array.from(s).sort().join('') === Array.from(t).sort().join('')
}
