// 123. 买卖股票的最佳时机 III
// 交易N次有(1)和无(0)股票的情况
function maxProfit(prices) {
	let dp_i10 = 0,
		dp_i11 = Number.MIN_SAFE_INTEGER
	let dp_i20 = 0,
		dp_i21 = Number.MIN_SAFE_INTEGER
	for (let price of prices) {
		dp_i20 = Math.max(dp_i20, dp_i21 + price) //无
		dp_i21 = Math.max(dp_i21, dp_i10 - price) //有，先算第二次交易，否则dp_i10会影响次数,再加1
		dp_i10 = Math.max(dp_i10, dp_i11 + price) //无
		dp_i11 = Math.max(dp_i11, -price) //有
	}
	return dp_i20
}
