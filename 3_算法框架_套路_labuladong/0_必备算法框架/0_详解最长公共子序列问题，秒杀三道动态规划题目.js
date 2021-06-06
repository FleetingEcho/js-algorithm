// > LeetCode 1143   给你输入两个字符串s1和s2，请你找出他们俩的最长公共子序列，返回这个子序列的长度。
/* 主函数 */

/* 
本来有三种情况，
1. 不在s1中
2. 不在s2中,
3. 两个都不在； 但这种情况其实被上面两种情况包括了，因为求的是Math.min();

*/
let memo;
function longestCommonSubsequence(s1, s2) {
  let m = s1.length, n = s2.length;
  // 备忘录，消除重叠子问题
  // 备忘录值为 -1 代表未曾计算
  memo=new Array(m).fill(0).map(v=>new Array(n).fill(-1)); // 备忘录值为 -1 代表未曾计算
    // 计算 s1[0..] 和 s2[0..] 的 lcs 长度
    return dp(s1, 0, s2, 0);
}

// 定义：计算 s1[i..] 和 s2[j..] 的最长公共子序列长度
function dp(s1,i, s2,j) {
    // base case
    if (i == s1.length || j == s2.length) {return 0;}
    // 如果之前计算过，则直接返回备忘录中的答案
    if (memo[i][j] != -1) {return memo[i][j];}
    // 根据 s1[i] 和 s2[j] 的情况做选择
    if (s1.charAt(i) == s2.charAt(j)) {
        // s1[i] 和 s2[j] 必然在 lcs 中
        memo[i][j] = 1 + dp(s1, i + 1, s2, j + 1);
    } else {
        // s1[i] 和 s2[j] 至少有一个不在 lcs 中
        memo[i][j] = Math.max(
            dp(s1, i + 1, s2, j),
            dp(s1, i, s2, j + 1)
        );
    }
    return memo[i][j];
}



// > 自底向上的解法

function longestCommonSubsequence(s1,s2) {
  let m = s1.length, n = s2.length;
  let dp = new Array(m+1).fill(0).map(v=>new Array(n+1).fill(0));
  // 定义：s1[0..i-1] 和 s2[0..j-1] 的 lcs 长度为 dp[i][j]
  // 目标：s1[0..m-1] 和 s2[0..n-1] 的 lcs 长度，即 dp[m][n]
  // base case: dp[0][..] = dp[..][0] = 0

  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          // 现在 i 和 j 从 1 开始，所以要减一
          if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
              // s1[i-1] 和 s2[j-1] 必然在 lcs 中
              dp[i][j] = 1 + dp[i - 1][j - 1];
          } else {
              // s1[i-1] 和 s2[j-1] 至少有一个不在 lcs 中
              dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
          }
      }
  }

  return dp[m][n];
}


// >583 字符串的删除操作

function minDistance(s1, s2) {
  let m = s1.length, n = s2.length;
  // 复用前文计算 lcs 长度的函数
  let lcs = longestCommonSubsequence(s1, s2);
  return (m - lcs)+(n - lcs);
}



// >712 最小 ASCII 删除和


// 备忘录
/* 主函数 */    
let memo;
function minimumDeleteSum( s1, s2) {
    let m = s1.length, n = s2.length;
    // 备忘录值为 -1 代表未曾计算
     memo=new Array(m).fill(0).map(v=>new Array(n).fill(-1));
      return dp(s1, 0, s2, 0);
}

// 定义：将 s1[i..] 和 s2[j..] 删除成相同字符串，
// 最小的 ASCII 码之和为 dp(s1, i, s2, j)。
function dp( s1, i,  s2, j) {
    let res = 0;
    // base case
    if (i == s1.length) {
        // 如果 s1 到头了，那么 s2 剩下的都得删除
        for (; j < s2.length; j++)
            res += s2.charCodeAt(j);// 删除s2剩余所有元素
        return res;
    }
    if (j == s2.length) {
        // 如果 s2 到头了，那么 s1 剩下的都得删除
        for (; i < s1.length; i++)
            res += s1.charCodeAt(i);// 删除s1剩余所有元素
        return res;
    }

    if (memo[i][j] != -1) {return memo[i][j];}

    if (s1.charAt(i) == s2.charAt(j)) {
        // s1[i] 和 s2[j] 都是在 lcs 中的，不用删除
        memo[i][j] = dp(s1, i + 1, s2, j + 1);
    } else {
        // s1[i] 和 s2[j] 至少有一个不在 lcs 中，删一个
        memo[i][j] = Math.min(
            s1.charCodeAt(i) + dp(s1, i + 1, s2, j),
            s2.charCodeAt(j) + dp(s1, i, s2, j + 1)
        );
    }
    return memo[i][j];
}
