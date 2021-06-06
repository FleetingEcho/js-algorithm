// 402移掉K位数字

// 单调栈解决
function removeKdigits(num, k) {
	let result = ''
	// 维护单调栈
	for (let i = 0; i < num.length; i++) {
		while (result.length && k > 0 && result[result.length - 1] > num[i]) {
			result = result.substr(0, result.length - 1) //pop最后一位
			k--
		}
		if (result.length == 0 && num[i] == '0') continue
		result += num[i]
	}

	if (k > 0 && result.length !== 0) {
		result = result.substr(0, result.length - k) //消耗掉最后的剩余k位
	}
	return result == '' ? '0' : result
}

/* 
每次丢弃一次，k 减去 1。当 k 减到 0 ，我们可以提前终止遍历。
而当遍历完成，如果 k 仍然大于 0。不妨假设最终还剩下 x 个需要丢弃，那么我们需要选择删除末尾 x 个元素。

输入: num = "1432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。

*/
// 单调栈

function removeKdigits(num, k) {
	let stack = [] //单调递增
	for (let digit of num) {
		while (k && stack && stack[stack.length - 1] > digit) {
			stack.pop()
			k--
		}
		stack.push(digit)
	}
	//若k还有剩余, 消耗掉最后的剩余k位
	if (k > 0 && stack.length !== 0) {
		stack = stack.slice(0, stack.length - k)
	}
	let res = ''
	// 排除左边的0
	for (let i in stack) {
		if (stack[i] === '0') {
			continue
		}
		if (stack[i] !== '0') {
			res += stack.slice(i).join('')
			break
		}
	}
	return res == '' ? '0' : res
}
