const deleteAndEarn = (nums: Array<number>): number => {
	console.time('spend')
	if (nums.length < 1) return 0
	let max = Math.max(0, ...nums)
	const cnt = new Array(max + 1).fill(0)
	const dp = new Array(max + 1).fill(0)

	for (const curNumber of nums) cnt[curNumber]++
	dp[1] = cnt[1]
	for (let i = 2; i <= max; i++) dp[i] = Math.max(dp[i - 1], dp[i - 2] + cnt[i] * i)
	console.timeEnd('spend')
	return dp[max]
}

const deleteAndEarn1 = (nums: Array<number>): number => {
	console.time('spend1')
	if (nums.length < 1) return 0
	let max = Math.max(0, ...nums)
	const cnt = new Int16Array(max + 1)
	const dp = new Int16Array(max + 1)
	for (const curNumber of nums) cnt[curNumber]++
	dp[1] = cnt[1]
	for (let i = 2; i <= max; i++) dp[i] = Math.max(dp[i - 1], dp[i - 2] + cnt[i] * i)
	console.timeEnd('spend1')
	return dp[max]
}
deleteAndEarn([3, 4, 2])
deleteAndEarn1([3, 4, 2])
