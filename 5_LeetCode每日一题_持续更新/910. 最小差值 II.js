// 910. 最小差值 II
/* 
给你一个整数数组 A，对于每个整数 A[i]，可以选择 x = -K 或是 x = K （K 总是非负整数），并将 x 加到 A[i] 中。

在此过程之后，得到数组 B。

返回 B 的最大值和 B 的最小值之间可能存在的最小差值。

 

示例 1：

输入：A = [1], K = 0
输出：0
解释：B = [1]
示例 2：

输入：A = [0,10], K = 2
输出：6
解释：B = [2,8]
示例 3：

输入：A = [1,3,6], K = 3
输出：3
解释：B = [4,6,3]

*/
/* 
当我们选择在 i 这一点“切一刀”的时候，也就是 A[0] ~ A[i] 的元素都上移，A[i + 1] ~ A[A.length - 1] 的元素都下移。
此时 B 点的值是 A[i] + K，D 点的值是 A[A.length - 1] - K。
新数组的最大值要么是 B 点要么是 D 点，也就是说新数组的最大值是 Max(A[i] + K, A[A.length - 1] - K)。

同样道理，此时 A 点的值是 A[0] + K，C 点的值是 A[i + 1] - K。
新数组的最小值要么是 A 点要么是 C 点，也就是说新数组的最小值是 Min(A[0] + K, A[i + 1] - K)。

因此，题目需要的“新数组的最大值和最小值的差值”，就是 Max(A[i] + K, A[A.length - 1] - K) - Min(A[0] + K, A[i + 1] - K)。

K 的值是题目给出的固定值，因此如果我们想让上面这个算式的结果尽可能小的话，就要靠改变 i 的值，也就是思考究竟要在哪里“切这一刀”。因此我们挨个遍历一下所有可能的 i 的值，然后取上面算式的最小值即可。

链接：https://leetcode-cn.com/problems/smallest-range-ii/solution/tai-nan-liao-zhi-neng-hua-tu-ping-zhi-jue-by-user8/
*/

const smallestRangeII = function (A, K) {
	A.sort(function (a, b) {
		return a - b
	})
	let len = A.length
	// 注意这里有个特殊情况，就是我们压根“不切这一刀”，而是把整个数组全部上移或下移，
	//这也是一种策略。这种策略下的差值是 A[len - 1] - A[0]
	let ans = A[len - 1] - A[0]
	for (let i = 0; i < len - 1; i++) {
		let max = Math.max(A[i] + K, A[len - 1] - K)
		let min = Math.min(A[0] + K, A[i + 1] - K)
		let diff = max - min
		ans = Math.min(ans, diff)
	}
	return ans
}
