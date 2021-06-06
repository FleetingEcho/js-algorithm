// 39.组合总和
// https://leetcode-cn.com/problems/combination-sum/solution/shou-hua-tu-jie-zu-he-zong-he-combination-sum-by-x/
/* 
关键是不能产生重复组合，怎么限制（剪枝）：如上图，只要限制下一次选择的起点，是基于本次的选择，
这样下一次就不会选到本次选择的同层左边的数。

*/

/* 

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
可以重复
*/
const combinationSum = (candidates, target) => {
	const res = []
	const dfs = (start, temp, sum) => {
		if (sum >= target) {
			if (sum == target) {
				res.push(temp.slice())
			}
			return // 结束当前递归
		}
		for (let i = start; i < candidates.length; i++) {
			temp.push(candidates[i])
			//  重点!  合理剪枝，去除duplicate number
			dfs(i, temp, sum + candidates[i])
			temp.pop() // 撤销选择
		}
	}
	dfs(0, [], 0)
	return res
}
