// 188. 买卖股票的最佳时机 IV
/* 
给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。


输入：k = 2, prices = [2,4,1]
输出：2
解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
*/

function maxProfit(max_k, prices) {
	let n = prices.length
	// 交易次数判断是否超过n/2。
	if (max_k > n / 2) return maxProfit_k_inf(prices)
	let dp = new Array(n).fill(0).map((v) =>
		new Array(max_k + 1).fill(0).map((v) => {
			return new Array(2).fill(0)
		})
	)
	/* 
  [
      [[0,1],[0,1],[0,1]],
      [[0,1],[0,1],[0,1]],
      [[0,1],[0,1],[0,1]],
      ....max_k +1个数组
  ]
  */
	for (let i = 0; i < n; i++) {
		for (let k = max_k; k >= 1; k--) {
			if (i === 0) {
				dp[i][k][0] = 0
				dp[i][k][1] = -prices[i]
				continue
			}
			dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]) //没股票
			dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]) //有股票
		}
	}
	return dp[n - 1][max_k][0]
}

function maxProfit_k_inf(prices) {
	let n = prices.length
	let dp_i_0 = 0,
		dp_i_1 = Number.MIN_SAFE_INTEGER
	for (let i = 0; i < n; i++) {
		let temp = dp_i_0
		dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]) //没股票
		dp_i_1 = Math.max(dp_i_1, temp - prices[i]) //有股票
	}
	return dp_i_0
}
