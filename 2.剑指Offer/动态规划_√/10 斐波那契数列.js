// 10 斐波那契数列

/* 
 F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 */
// ! 直接爆栈
var fib = function (n) {
	if (n < 0) return
	if (n === 1 || n === 0) return n
	return fib(n - 1) + fib(n - 2)
}
console.log(fib(44))

//! for循环方法!   -----动态规划问题
var fib = function (n) {
	let n1 = 0,
		n2 = 1,
		sum
	for (let i = 0; i < n; i++) {
		sum = (n1 + n2) % 1000000007
		n1 = n2
		n2 = sum
	}
	return n1
}

// 可以使用记忆化的方式
// ! 不要忘记取模
function fib(n) {
	const over = 1000000007 // 十亿+7
	const memo = [0, 1] // 第0位是0，第一二位是1
	const fibonacci2 = (num) => {
		if (memo[num] != undefined) return memo[num] // {2}
		return (memo[num] = (fibonacci2(num - 1) % over) + (fibonacci2(num - 2) % over)) // {3}
	}
	return fibonacci2(n) % over
}
