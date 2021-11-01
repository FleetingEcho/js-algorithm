// 334. 递增的三元子序列
/* 

给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

输入: [1,2,3,4,5]
输出: true


*/

/* 
当前数分别跟在前面每个数后，如果比那数大，递增序列长度+1。从0到i取最大
找最大递增序列长度超过3的位置


*/

const increasingTriplet = function (arr) {
	let dp = new Array(arr.length).fill(1)
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < i; j++) if (arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
		if (dp[i] >= 3) return true
	}
	return false
}
