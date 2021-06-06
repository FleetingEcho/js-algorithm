// 0_227. 基本计算器 II

function calculate(s) {
	s = s.split('')
	return helper(s)
}
var helper = (s) => {
	let stack = []
	// 记录 num 前的符号，初始化为 +
	let sign = '+'
	let num = 0
	// while(s.length>0){
	for (let i = 0; i < s.length; i++) {
		let c = s[i]
		if (!isNaN(c) && c !== ' ') {
			num = num * 10 + Number(c)
		}
		if (c == '(') {
			num = helper(s)
		}
		// 如果不是数字，就是遇到了下一个符号，
		// 之前的数字和符号就要存进栈中
		//# 防止空格进入判断 c != ' '
		if ((isNaN(c) && c != ' ') || s.length - 1 === i) {
			//# 乘除法优先于加减法体现在，乘除法可以和栈顶的数结合，而加减法只能把自己放入栈。
			switch (sign) {
				case '+':
					stack.push(num)
					break
				case '-':
					stack.push(-num)
					break
				case '*':
					stack.push(stack.pop() * num)
					break
				case '/':
					stack.push(Math.trunc(stack.pop() / num))
					break
			}
			// 更新符号为当前符号，数字清零
			sign = c
			num = 0
		}
		// # 遇到右括号返回递归结果
		if (c == ')') break
	}
	return stack.reduce((pre, cur) => pre + cur)
}

/* 

输入: "3+2*2"
输出: 7
*/
