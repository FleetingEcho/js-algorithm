// 858.镜面反射
// 最小公倍数
function mirrorReflection(p, q) {
	let m = p,
		n = q
	let r
	while (n > 0) {
		r = m % n
		m = n
		n = r
	}
	//l是p奇数倍: 北墙   再判断光线与东西墙的接触次数: 奇数左，偶数右
	//偶数倍: 南墙   0
	if ((p / m) % 2 == 0) {
		return 2
	} else if ((q / m) % 2 == 0) {
		return 0
	} else {
		return 1
	}
}

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
