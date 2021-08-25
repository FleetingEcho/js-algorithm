// 考察的是动态规划技巧，时间复杂度一般都是 O(n^2)。

// > 思路：  1. 一维dp，   2. 二维dp

/* 
! 方法 1
let n = array.length;
let dp = new Array(n).fill(0);

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        dp[i] = Math.max(dp[i], dp[j] + ...)
    }
}


! 方法2
let n = arr.length;
let dp=new Array(n).fill(0).map(v=>new Array(n).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
        if (arr[i] == arr[j]) 
            dp[i][j] = dp[i][j] + '...'
        else
            dp[i][j] = Math.max('...')
    }
}


# 2.1 涉及两个字符串/数组时（比如最长公共子序列），dp 数组的含义如下：
在子数组arr1[0..i]和子数组arr2[0..j]中，我们要求的子序列（最长公共子序列）长度为dp[i][j]。

# 2.2 只涉及一个字符串/数组时（比如本文要讲的最长回文子序列），dp 数组的含义如下：

   在子数组array[i..j]中，我们要求的子序列（最长回文子序列）的长度为dp[i][j]。
   第一种情况可以参考这两篇旧文：详解编辑距离 和 最长公共子序列。
*/

// > 最长回文子序列
// 输入 "bbbab" ,输出4，最长是"bbbb";

function longestPalindromeSubseq(s) {
  let n = s.length;
  // dp 数组全部初始化为 0
  let dp=new Array(n).fill(0).map(v=>new Array(n).fill(0));
  // base case
  for (let i = 0; i < n; i++){
    dp[i][i] = 1;
  }
  // 反着遍历保证正确的状态转移
  for (let i = n - 1; i >= 0; i--) {
      for (let j = i + 1; j < n; j++) {
          // 状态转移方程
          if (s[i] == s[j])
              dp[i][j] = dp[i + 1][j - 1] + 2;
          else
              dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
  }
  // 整个 s 的最长回文子串长度
  return dp[0][n - 1];
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

*/
console.log(longestPalindromeSubseq("bbbab"));



//> 另外，找到状态转移和 base case 之后，一定要观察 DP table，看看怎么遍历才能保证通过已计算出来的结果解决新的问题