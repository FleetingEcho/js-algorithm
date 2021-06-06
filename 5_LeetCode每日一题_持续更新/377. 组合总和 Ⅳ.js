// 377. 组合总和 Ⅳ
/* 
给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。
nums = [1, 2, 3]
target = 4

所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

请注意，顺序不同的序列被视作不同的组合。

因此输出为 7。
*/

/* 
> 明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义。

base case： dp[0] = 1: 想要达到第0级，只有不跳这一种方法。

明确状态: 该问题只有一格状态，就是当前台阶级数，i从0到target。

明确选择: 选择就是选择跳num级。

定义dp数组含义：dp[i]定义：一个人跳台阶，每次可以选择跳num阶(num in nums),
他要跳到第i级台阶总共有多少种跳法。显然，跳到第i级台阶的方法数为跳到 dp[i-num] for num in nums的方法数之和
，因为他只要跳到第i-num级，再一步跳num级，就可以到第i级了。


*/
// ! 1.动态规划
//nums = [1, 2, 3]
// target = 4
function combinationSum4(nums, target) {
	let dp = new Array(target + 1).fill(0)
	dp[0] = 1
	for (let step = 1; step <= target; step++) {
		for (let num of nums) {
			if (step - num >= 0) {
				dp[step] += dp[step - num] //当前台阶=不跳+由i-num位置一步跳过来
			}
		}
	}

	return dp[target]
}

// ! 2.深度搜索  ----容易超时

// ! 3. 回溯  ---核心思想和dp一样
const combinationSum4 = (nums, target) => {
	if (nums.length == 0) return 0
	nums.sort((a, b) => a - b)
	let save = new Map()
	save.set(0, 1) //值--个数
	return track(nums, target, save)
}

var track = (nums, target, save) => {
	if (save.has(target)) return save.get(target)
	let temp = 0
	for (let val of nums) {
		if (val > target) break
		temp += track(nums, target - val, save)
	}
	save.set(target, temp)
	return temp
}
