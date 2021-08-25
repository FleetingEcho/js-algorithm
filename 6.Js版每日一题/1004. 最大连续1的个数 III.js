// 1004. 最大连续1的个数 III
// 滑动窗口
/* 
给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
返回仅包含 1 的最长（连续）子数组的长度。


输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
输出：6
解释： 
[1,1,1,0,0,1,1,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 6。

*/
//滑动窗口办法
const longestOnes = (A, K) => {
	const N = A.length
	let res = 0
	let left = 0,
		right = 0
	let zeroNum = 0
	while (right < N) {
		if (A[right] === 0) zeroNum++ //继续扫描
		while (zeroNum > K) {
			if (A[left] === 0) zeroNum-- //左边是0
			left++ //向右移动
		}
		res = Math.max(res, right - left + 1)
		right++
	}
	return res
}

//滑动窗口模板
const findSubArray = (nums) => {
	const N = len(nums) // 数组/字符串长度
	let left = 0,
		right = 0 // 双指针，表示当前遍历的区间[left, right]，闭区间
	let sums = 0 // 用于统计 子数组/子区间 是否有效，根据题目可能会改成求和/计数
	let res = 0 // 保存最大的满足题目要求的 子数组/子串 长度
	while (right < N) {
		// 当右边的指针没有搜索到 数组/字符串 的结尾
		sums += nums[right] // 增加当前右边指针的数字/字符的求和/计数
		while (`区间${[left, right]}不符合题意`) {
			// 此时需要一直移动左指针，直至找到一个符合题意的区间
			sums -= nums[left] // 移动左指针前需要从counter中减少left位置字符的求和/计数
			left++ // 真正的移动左指针，注意不能跟上面一行代码写反
		}
		// 到 while 结束时，我们找到了一个符合题意要求的 子数组/子串
		res = Math.max(res, right - left + 1) // 需要更新结果
		right++ // 移动右指针，去探索新的区间
	}
	return res
}
