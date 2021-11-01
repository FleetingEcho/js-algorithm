// 0_最大公约数_最小公倍数
// 最大公约数
function gcd(a, b) {
	if (b == 0) {
		return a
	}
	var r = a % b
	return gcd(b, r)
}
// 最小公倍数
function scm(a, b) {
	return (a * b) / gcd(a, b)
}
