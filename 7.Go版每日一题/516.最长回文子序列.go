package main

import "fmt"

// 516. 最长回文子序列
func main() {
	str := "bbbab"
	fmt.Println(longestPalindromeSubseq(str))
}

/*
> 分析后找状态转移方程
[?, b,  x,  a,  b,  y,  ?]
 i i+1             j-1  j
具体来说，如果我们想求dp[i][j]，假设你知道了子问题dp[i+1][j-1]的结果
(s[i+1..j-1]中最长回文子序列的长度),你是否能想办法算出dp[i][j]的值（s[i..j]中，最长回文子序列的长度）呢？
> 这取决于s[i]和s[j]的字符：
如果它俩相等，那么它俩加上s[i+1..j-1]中的最长回文子序列就是s[i..j]的最长回文子序列：
如果它俩不相等，说明它俩不可能同时出现在s[i..j]的最长回文子序列中，那么把它俩分别加入s[i+1..j-1]中，看看哪个子串产生的回文子序列更长即可：

对应的dp表就是：
[
  [ 1, ?, ?, ?, ? ],
  [ 0, 1, ?, ?, ? ],
  [ 0, 0, 1, ?, ? ],
  [ 0, 0, 0, 1, ? ],
  [ 0, 0, 0, 0, 1 ]
]
      ^
      |
----> |  反着遍历

> 反向斜着遍历  从右下到左上
for (let i = n - 1; i >= 0; i--) {
  for (let j = i + 1; j < n; j++) {
      状态转移方程
  }
}
*/

func longestPalindromeSubseq(s string) int {
	n := len(s)
	dp := make([]int, n)
	for key := range dp {
		dp[key] = 1
	}
	for i := n - 2; i >= 0; i-- {
		pre := 0
		for j := i + 1; j < n; j++ {
			temp := dp[j]
			if s[i] == s[j] {
				dp[j] = pre + 2
			} else {
				dp[j] = max(dp[j], dp[j-1])
			}
			pre = temp
		}
	}
	return dp[n-1]
}
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func longestPalindromeSubseq2(s string) int {
	n := len(s)
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n) //二维数组
		dp[i][i] = 1
	}
	for i := n - 1; i >= 0; i-- {
		for j := i + 1; j < n; j++ {
			if s[i] == s[j] {
				dp[i][j] = dp[i+1][j-1] + 2
			} else {
				dp[i][j] = max(dp[i+1][j], dp[i][j-1])
			}
		}
	}
	return dp[0][n-1]
}
