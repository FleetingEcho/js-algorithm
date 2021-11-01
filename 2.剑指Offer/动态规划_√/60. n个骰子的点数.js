// 60. n个骰子的点数
var twoSum = function (n) {
	if (n < 1) {
		return []
	}
	const res = [0, 1, 1, 1, 1, 1, 1]
	for (let i = 1; i < n; i++) {
		for (let j = 6 * n; j > 0; j--) {
			res[j] = res.slice(Math.max(0, j - 6), j).reduce((acc, cur) => acc + cur, 0)
		}
	}
	return res
		.slice(1)
		.map((num) => num / Math.pow(6, n))
		.filter(Boolean)
}

/* 
! 如果只有两个骰子，则可能的结果是：
1+1
1+2 2+1
1+3 2+2 3+1
1+4 2+3 3+2 4+1
1+5 2+4 3+3 4+2 5+1
1+6 2+5 3+4 4+3 5+2 6+1
2+6 3+5 4+4 5+3 6+2
3+6 4+5 5+4 6+3
4+6 5+5 6+4
5+6 6+5
6+6

这里将上面的单个排列看做是sum = x + y，x为一个骰子【也可以理解为新的一个】甩出来的点数，
y为前几个骰子甩出来的和，这里由于总的骰子数为2，因此前几个骰子实际上就是上一个骰子。
其计算公式为dp[ sum ] = dp[ sum ] + dp[ y ] * 1/6。
由于x只能甩出1~6个数，因此概率肯定是1/6，因此需要匹配的dp[ y ]需要乘上1/6。
由此不断叠加得到n个骰子甩出来的概率。

*/
var twoSum1 = function (n) {
	let dp = [1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6]
	for (let i = 2; i <= n; i++) {
		//骰子数
		const temp = []
		for (let j = 1; j <= 6; j++) {
			//投出的点数
			for (let k = 0; k < dp.length; k++) {
				//每个值之前的概率
				const sum = k + j - 1
				temp[sum] = (temp[sum] || 0) + (dp[k] * 1) / 6 //如果是计算过的，则会再加一遍
			}
		}
		dp = temp
	}
	return dp
}
console.log(twoSum1(2))
