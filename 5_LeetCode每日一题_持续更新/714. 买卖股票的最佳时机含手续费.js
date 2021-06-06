// 714. 买卖股票的最佳时机含手续费
function maxProfit(prices, fee) {
	let n = prices.length
	let dp_i_0 = 0,
		dp_i_1 = Number.MIN_SAFE_INTEGER
	for (let i = 0; i < n; i++) {
		let temp = dp_i_0
		dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
		dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee)
	}
	return dp_i_0
}
