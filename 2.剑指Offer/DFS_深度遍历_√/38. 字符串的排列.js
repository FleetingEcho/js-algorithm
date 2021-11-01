// 38. 字符串的排列
/* 
输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
*/

/* 
! 详解过程 https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/mian-shi-ti-38-zi-fu-chuan-de-pai-lie-hui-su-fa-by/
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
*/
const str = 'abc'
const str1 = 'abb'
var permutation = function (s) {
	const res = new Set()
	const visited = [] //标注元素是否已经被使用过了
	const arr = [...s] // ["a","b","c"]
	const path = []
	DFS(res, visited, arr, path)
	return Array.from(res) //[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
}
// 从a开始，abb abb，
function DFS(res, visited, arr, path) {
	// 触发终止条件，停止递归，拼接成字符串
	if (arr.length === path.length) {
		res.add(path.join(''))
		return
	}
	for (let i = 0; i < arr.length; i++) {
		// visited中三个元素均为true才输出，否则跳过
		// console.log(visited);
		if (visited[i]) continue //为true时才继续迭代

		visited[i] = true
		//进入下一层
		path.push(arr[i])
		DFS(res, visited, arr, path)
		path.pop() //取得是[a,b]中的b,继续试探[a,c]
		visited[i] = false
	}
}

console.log(permutation(str1))

/*
 *  let result = []
 *  backtrack(路径, 选择列表){
 *    if 满足结束条件:
 *        result.add(路径)
 *        return
 *
 *    for 选择 in 选择列表:
 *        做选择
 *        backtrack(路径, 选择列表)
 *        撤销选择
 *   }
 */

const permutation1 = (s) => {
	const visited = [] //本题目可能出"aaab""
	const res = new Set()
	const arr = [...s]
	const path = []
	const DFS = (res, arr, visited, path) => {
		// 有了，下一轮
		if (res.has(path.join(''))) return
		// 没有，添加
		if (path.length == arr.length) return res.add(path.join(''))

		for (let i = 0; i < arr.length; i++) {
			let element = arr[i] //当前元素；
			if (visited[i] === true) continue
			visited[i] = true
			path.push(element)
			DFS(res, arr, visited, path) //继续
			// 撤销选择
			path.pop()
			visited[i] = false
		}
	}
	DFS(res, arr, visited, path)
	return Array.from(res)
}
/* 
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]

*/
