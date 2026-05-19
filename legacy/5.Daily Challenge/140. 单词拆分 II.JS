// 140. 单词拆分 II
/* 
输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]

*/
/* 
1、dfs通过起始位置start作为参数，返回以start为起始位置的所有路径组合的二维数组。
2、如果dfs路径不通，则返回[]，这样是因为[]的长度是0，导致从下开始向上这一整条路径都为[]。
3、当dfs查询本节点时，首先查询map中是否已经存在本节点的路径，出栈时，使用map来保存已查询的路径。

*/
var wordBreak = function (s, wordDict) {
	let map = {}
	let dfs = (start) => {
		if (start == s.length) {
			return [[]] //本条路径可通，则返回二维路径
		}
		let paths = []
		for (let i = start + 1; i <= s.length; ++i) {
			let str = s.substring(start, i)
			if (!wordDict.includes(str)) continue
			let leafPath = []
			if (map[i]) {
				leafPath = map[i]
			} else {
				leafPath = dfs(i)
			}

			for (let j = 0; j < leafPath.length; ++j) {
				let temp = [...leafPath[j]]
				temp.unshift(str)
				paths.push(temp)
			}
		}
		map[start] = paths
		return paths
	}
	return dfs(0).map((v) => v.join(' '))
}

function wordBreak(s, wordDict) {
	let map = new Map()
	const helper = (map, wordDict, s) => {
		if (map.has(s)) return map.get(s)
		if (s.length === 0) return ['']
		let res = []
		for (let word of wordDict) {
			if (s.substr(0, word.length) != word) continue
			let temp = helper(map, wordDict, s.substr(word.length))
			for (let item of temp) {
				res.push(word + (item.length === 0 ? '' : ' ' + item))
			}
		}
		map.set(s, res)
		console.log(map)
		return res
	}
	return helper(map, wordDict, s)
}
const wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple']
console.log(wordBreak('pineapplepenapple', wordDict))
const wordDict1 = ['cat', 'cats', 'and', 'sand', 'dog']
console.log(wordBreak1('catsanddog', wordDict1))

//   function wordBreak(s,wordDict) {
//       let dict = new Set(wordDict);
//       let map=new Map();
//       return dfs(s,dict,map);
//   }
//   function dfs(s,dict,map){
//       if(map.has(s)) return map.get(s);
//       if(s.length===0) return null;
//       let res =[[]];
//       for (let word of dict) {
//           if(s.length<word.length||
//             !s.substring(0,word.length)===word){
//               continue;
//           }
//           let tmp = dfs(s.substring(word.length),dict,map);
//           if(tmp==null){
//               res.push(word);
//           }else {
//               for (let item of tmp) {
//                   res.push(word+(item.length===0? "":" "+item));
//               }
//           }
//       }
//       map.set(s,res);
//       return res;
//   }
