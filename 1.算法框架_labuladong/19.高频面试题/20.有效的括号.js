function isValid(str) {
	let left = [] //栈
	for (let c of str) {
		if (c == '(' || c == '{' || c == '[') left.push(c)
		// 字符 c 是右括号
		else if (left.length !== 0 && leftOf(c) == left[left.length - 1]) left.pop()
		// 和最近的左括号不匹配
		else return false
	}
	// 是否所有的左括号都被匹配了
	return left.length === 0
}

function leftOf(c) {
	if (c == '}') return '{'
	if (c == ')') return '('
	return '['
}

console.log(isValid('{{()[]}}'))
console.log(isValid('{{()[(]}}'))
