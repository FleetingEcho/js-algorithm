// 880. 索引处的解码字符串
/* 
给定一个编码字符串 S。请你找出 解码字符串 并将其写入磁带。解码时，从编码字符串中 每次读取一个字符 ，并采取以下步骤：

如果所读的字符是字母，则将该字母写在磁带上。
如果所读的字符是数字（例如 d），则整个当前磁带总共会被重复写 d-1 次。
现在，对于给定的编码字符串 S 和索引 K，查找并返回解码字符串中的第 K 个字母。

输入：S = "leet2code3", K = 10
输出："o"
解释：
解码后的字符串为 "leetleetcodeleetleetcodeleetleetcode"。
字符串中的第 10 个字母是 "o"。

*/

function decodeAtIndex(S, K) {
	let j = 0,
		len = 0
	let stack = new Array() // [index,  stringIndex]
	for (let i = 0; i < S.length; i++) {
		if (S[i] >= '0' && S[i] <= '9') {
			len *= Number(S[i])
			stack.push([i, len])
		} else len++
		//满足条件K了
		if (len >= K) {
			j = findIdx(stack, K, S)
			break
		}
	}
	return String(S[j])
}

// 从栈顶开始，不断靠近下标K,
const findIdx = (stack, K, S) => {
	while (stack.length !== 0 && stack[stack.length - 1][1] >= K) {
		const cur = stack[stack.length - 1] //栈顶
		let s = S[cur[0]],
			strLength = cur[1]
		s = strLength / s //倒推，计算前面重复的长度;
		K = K % s //多出几位
		if (K == 0) K = s
		stack.pop()
	}
	const cur = stack[stack.length - 1]
	return stack.length !== 0 ? cur[0] + (K - cur[1]) : K - 1 // K-1后是字母位数
}
