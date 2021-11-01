//1052.爱生气的书店老板
// 滑动窗口
// 其实就是给你一个定长的窗口，窗口内的满意值都可以累加，不管是否生气。当该窗口滑动到某个位置，总满意度会达到最大值，求出最大值。

// 先滑动到憋两分钟不生气的时候，留一天给滑动窗口
const maxSatisfied = (customers, grumpy, X) => {
	let bonus = 0
	let regular = 0
	for (let i = 0; i < X - 1; i++) {
		if (grumpy[i] == 1) {
			bonus += customers[i]
		} else {
			regular += customers[i]
		}
	}
	let maxBonus = bonus
	for (let i = X - 1; i < customers.length; i++) {
		if (grumpy[i] == 1) {
			bonus += customers[i]
			maxBonus = Math.max(bonus, maxBonus)
		} else {
			regular += customers[i]
		}
		if (grumpy[i + 1 - X] == 1) {
			//丢弃左边为生气的日子，bonus减值
			bonus -= customers[i + 1 - X]
		}
	}
	return regular + maxBonus
}
