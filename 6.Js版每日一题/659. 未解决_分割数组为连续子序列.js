// 659. 未解决_分割数组为连续子序列
// 【最优贪心解法】O(N) 时间 + O(1) 空间
function isPossible(nums) {
	let n = nums.length
	let dp1 = 0,
		dp2 = 0,
		dp3 = 0
	let i = 0

	while (i < n) {
		let start = i
		let x = nums[i]
		while (i < n && nums[i] == x) {
			i++
		}
		let cnt = i - start

		if (start > 0 && x != nums[start - 1] + 1) {
			if (dp1 + dp2 > 0) {
				return false
			} else {
				dp1 = cnt
				dp2 = dp3 = 0
			}
		} else {
			if (dp1 + dp2 > cnt) return false
			let left = cnt - dp1 - dp2
			let keep = Math.min(dp3, left)
			dp3 = keep + dp2 // 这里要注意赋值的顺序
			dp2 = dp1
			dp1 = left - keep
		}
	}
	return dp1 == 0 && dp2 == 0
}

//
const set = (m, n, v, t) => (m.has(n) ? ((t = m.get(n) + v) === 0 ? m.delete(n) : m.set(n, t)) : m.set(n, v))
const isPossible = function (nums) {
	for (let i = 0, h = new Map(); i < nums.length; i++) set(h, nums[i], 1)
	for (let i = 0, m = new Map(); i < nums.length; i++) {
		if (!h.has(nums[i])) continue
		if (m.has(nums[i] - 1)) {
			set(m, nums[i] - 1, -1)
			set(m, nums[i], 1)
		} else {
			if (h.has(nums[i] + 1) && h.has(nums[i] + 2)) {
				set(h, nums[i] + 1, -1)
				set(h, nums[i] + 2, -1)
				set(m, nums[i] + 2, 1)
			} else return false
		}
		set(h, nums[i], -1)
	}
	return true
}

// 或用动态规划

const isPossible = function qiefen(nums) {
	var dp1 = 0,
		dp2 = 0,
		dp3 = 0,
		i = 0
	while (i < nums.length) {
		let start = i,
			left
		while (i < nums.length && nums[i] === nums[++i]) {}
		if (start > 0 && nums[start - 1] + 1 < nums[start]) {
			if (dp1 || dp2) return false
			;(dp1 = i - start), (dp3 = 0)
		} else {
			if ((left = i - start - dp1 - dp2) < 0) return false
			let _dp2 = dp2
			dp2 = dp1
			if (left > dp3) {
				dp1 = left - dp3
				dp3 = dp3 + _dp2
			} else {
				dp1 = 0
				dp3 = left + _dp2
			}
		}
	}
	return dp1 === 0 && dp2 === 0
}
