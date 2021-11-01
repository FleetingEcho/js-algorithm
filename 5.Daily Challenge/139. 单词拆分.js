// 139. 单词拆分
// 超时？
// var wordBreak = function(s, wordDict) {
//   let map=new Map();
//   const helper=(wordDict,s)=>{
//       if(map.has(s)) return map.get(s);
//       if(s.length===0) return '';
//       let res=[];
//       for(let word of wordDict){
//           if(s.substr(0,word.length)!==word) continue;
//           res.push(word);
//           let temp=helper(wordDict,s.substr(word.length));
//           // 若没有返回值，说明到头了
//           if(temp===''){continue}
//           for(let item of temp){
//           res.push(item)
//           }
//       }
//       map.set(s,res);
//       return res;
//   }
//    helper(wordDict,s);
//   //  校验是否一致
//    let ans=map.get(s);
//     if(ans.length===0) return false;
//     for(let item of ans){
//       if(!wordDict.includes(item)) return false;
//     }
//     return true;
// };

//  DFS+ 记忆化
// > 和套路的区别在于，这个存的是指针，需要不断进行向后推移，
const wordBreak = (s, wordDict) => {
	const len = s.length
	const wordSet = new Set(wordDict)
	const memo = new Array(len)

	const canBreak = (start) => {
		if (start == len) return true
		if (memo[start] !== undefined) return memo[start]

		for (let i = start + 1; i <= len; i++) {
			const prefix = s.slice(start, i)
			if (wordSet.has(prefix) && canBreak(i)) {
				memo[start] = true
				return true
			}
		}
		memo[start] = false
		return false
	}
	return canBreak(0)
}

// BFS+记忆化
const wordBreak = (s, wordDict) => {
	const wordSet = new Set(wordDict)
	const len = s.length
	const visited = new Array(len)

	const queue = []
	queue.push(0)

	while (queue.length) {
		const start = queue.shift() // 考察出列的节点
		if (visited[start]) continue // 访问过了，跳过

		visited[start] = true // 现在访问了 记录一下

		for (let i = start + 1; i <= len; i++) {
			const prefix = s.slice(start, i)
			if (wordSet.has(prefix)) {
				// 前缀部分是单词
				if (i < len) {
					// i还没越界，i入列，作为下一层待考察的节点
					queue.push(i)
				} else {
					// i==len，越界，说明整个是一个单词，直接返回true
					return true
				}
			} // 前缀部分不是单词，不用看了，不用入列
		}
	}
	return false // 遍历完所有节点也没有返回true，则返回false
}

const s = 'applepenapple',
	wordDict = ['apple', 'pen']
// const  s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict))
