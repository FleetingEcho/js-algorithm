/* 
49. 字母异位词分组
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

var groupAnagrams = function (strs) {
	const map = new Map()
	for (let str of strs) {
		let array = Array.from(str)
		array.sort()
		let key = array.toString()
		let list = map.get(key) ? map.get(key) : new Array()
		list.push(str)
		map.set(key, list)
	}
	return Array.from(map.values())
}
