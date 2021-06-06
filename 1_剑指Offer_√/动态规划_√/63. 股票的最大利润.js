// 63. 股票的最大利润
/* 
假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
时间复杂度：O(n)。动态规划需要遍历数组一次
空间复杂度：O(1)。只需要记录最小花费和最大收益
*/

var maxProfit = function (prices) {
	let minCost = Number.MAX_SAFE_INTEGER //和最大值比，获取小值
	let maxVal = 0
	for (const price of prices) {
		minCost = Math.min(minCost, price)

		maxVal = Math.max(maxVal, price - minCost)
	}
	return maxBenefit
}
const arr = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(arr))
