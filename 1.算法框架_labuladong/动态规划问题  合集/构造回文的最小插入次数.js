// 和最长回文子序列类似
//! 构造回文最小插入次数
/* 
根据刚才对 dp 数组的定义以及以上的分析，s[i] != s[j] 时的代码逻辑
if (s[i] != s[j]) {
    步骤一选择代价较小的
    步骤二必然要进行一次插入
    dp[i][j] = min(dp[i + 1][j], dp[i][j - 1]) + 1;
}

> 也就是
if (s[i] == s[j]) {
    dp[i][j] = dp[i + 1][j - 1];
} else {
    dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
}
*/
//> 和最长回文序列相比，只是状态转移方程不同

function minInsertions(s) {
  let n = s.length;
  // 定义：对 s[i..j]，最少需要插入 dp[i][j] 次才能变成回文
  let dp=new Array(n).fill(0).map(v=>new Array(n).fill(0))
  // base case：i == j 时 dp[i][j] = 0，单个字符本身就是回文
  // dp 数组已经全部初始化为 0，base case 已初始化

  // 从下向上遍历
  // n-1项其实是不进行遍历的，只是好记。
  for (let i = n-1; i >=0; i--) {
      // 从左向右遍历
      for (let j = i + 1; j < n; j++) {
          // 根据 s[i] 和 s[j] 进行状态转移
          if (s[i] == s[j]) {
              dp[i][j] = dp[i + 1][j - 1];
          } else {
              dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
          }
      }
  }
  // 根据 dp 数组的定义，题目要求的答案
  return dp[0][n - 1];
}


// ! 状态压缩后
// 时间和空间复杂度都是 O(N^2)。还有一个小优化，
// 注意到 dp 数组的状态之和它相邻的状态有关，所以 dp 数组是可以压缩成一维的：
function minInsertions1(s) {
  let n = s.length;
  let dp=new Array(n).fill(0);
  let temp = 0;
  for (let i = n - 2; i >= 0; i--) {
      // 记录 dp[i+1][j-1]
      let pre = 0;
      for (let j = i + 1; j < n; j++) {
          temp = dp[j];

          if (s[i] == s[j]) {
              // dp[i][j] = dp[i+1][j-1];
              dp[j] = pre;
          } else {
              // dp[i][j] = min(dp[i+1][j], dp[i][j-1]) + 1;
              dp[j] = Math.min(dp[j], dp[j - 1]) + 1;
          }
          pre = temp;
      }
  }

  return dp[n - 1];
}



console.log(minInsertions("leetcode"));
console.log(minInsertions1("mbadm"));