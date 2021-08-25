// 91. 解码方法
/* 
整个动态规划过程的递推方程为
如果num[i]=0，dp[i]=0；如果num[i]+num[i+1]<=26，dp]=dp[i+1]+dp[i+2]；
否则，dpl]=dp[i+1];

如果开始的数为0，结果为0。
2 2 0 6, dp[3]=1;dp[2]=0; dp[1]=20 6 = 1;
dp[0]=22,=dp[1]+dp[2]=1;
*/

function numDecodings(s) {
	let len = s.length
	let dp = new Array(len + 1).fill(0)
	dp[len] = 1 //将递归法的结束条件初始化为 1
	//最后一个数字不等于 0 就初始化为 1
	if (s.charAt(len - 1) != '0') {
		dp[len - 1] = 1
	}
	for (let i = len - 2; i >= 0; i--) {
		//当前数字时 0 ，直接跳过，0 不代表任何字母
		if (s.charAt(i) == '0') continue
		let ans1 = dp[i + 1]
		//判断两个字母组成的数字是否小于等于 26
		let ans2 = 0
		let ten = (s.charAt(i) - '0') * 10
		let one = s.charAt(i + 1) - '0'
		if (ten + one <= 26) {
			ans2 = dp[i + 2]
		}
		dp[i] = ans1 + ans2
	}
	return dp[0]
}
