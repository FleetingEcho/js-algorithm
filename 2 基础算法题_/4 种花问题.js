/* 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

输入: flowerbed = [1,0,0,0,1], n = 1
输出: True

*/

// 只判断 当前为0 前后也不为1 则可以种花，num ++
const canPlaceFlowers = function (flowerbed, n) {
	let num = 0
	for (let i = 0, length = flowerbed.length; i < length; i++) {
		if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
			// undefined也不等于1
			num++
			i++
		}
	}
	return n <= num
}

// [0,0,1,0,0]
