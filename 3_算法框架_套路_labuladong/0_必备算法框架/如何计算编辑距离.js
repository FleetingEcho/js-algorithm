/* 
https://labuladong.gitbook.io/algo/gao-pin-mian-shi-xi-lie/bian-ji-ju-li
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')

示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
*/


/* 
! 前文「最长公共子序列」说过，解决两个字符串的动态规划问题，
! 一般都是用两个指针 i,j 分别指向两个字符串的最后，然后一步步往前走，缩小问题的规模。
*/


/* 

if s1[i] == s2[j]:
    啥都别做（skip）
    i, j 同时向前移动
else:
    三选一：
        插入（insert）
        删除（delete）
        替换（replace）
*/


// ! 方法1:  暴力解法-------------
function minDistance(s1, s2){

  function dp(i, j){
    // # base case
    if(i == -1) return j + 1
    if(j == -1) return i + 1

    if(s1[i] == s2[j])
        return dp(i - 1, j - 1)  //# 啥都不做
    else
    // 操作数要 + 1
      return Math.min(
        //*1. 插入，# 我直接在 s1[i] 插入一个和 s2[j] 一样的字符
        // # 那么 s2[j] 就被匹配了，前移 j，继续跟 i 对比
        // # 别忘了操作数加一
        dp(i, j - 1) + 1,    
        //* 2.我直接把 s[i] 这个字符删掉
        // # 前移 i，继续跟 j 对比
        // # 操作数加一
        dp(i - 1, j) + 1,  
        //* 3. 我直接把 s1[i] 替换成 s2[j]，这样它俩就匹配了
        // # 同时前移 i，j 继续对比
        // # 操作数加一
        dp(i - 1, j - 1) + 1 
      )
  }
  
  // # i，j 初始化指向最后一个索引
  return dp(len(s1) - 1, len(s2) - 1)
}


//! 方法2: 动态规划进行优化　　　－－优化方法无非是备忘录或者 DP table。

// ! 2.1 备忘录优化 
/* 
def minDistance(s1, s2) -> int:

    memo = dict() # 备忘录
    def dp(i, j):
        if (i, j) in memo: 
            return memo[(i, j)]
        ...

        if s1[i] == s2[j]:
            memo[(i, j)] = ...  
        else:
            memo[(i, j)] = ...
        return memo[(i, j)]

    return dp(len(s1) - 1, len(s2) - 1)

*/
// ! 2.2 主要说下 DP table 的解法：
// 首先明确 dp 数组的含义，dp 数组是一个二维数组，长这样：

//* 既然 dp 数组和递归 dp 函数含义一样，也就可以直接套用之前的思路写代码，
//* 唯一不同的是，DP table 是自底向上求解，递归解法是自顶向下求解：


/* 
创建二维数组的两种方式
! 方式1： 
let dp = new Array(4).fill(0).map((item,index,self)=>{
  return self=new Array(6).fill(0)
});
console.log(dp);


* 方式2： 值得注意的是， 需要return的是self本身，而不是item
let dp = new Array(4).fill(0).map(v=>new Array(6).fill(0));
console.log(dp);
*/


/* 
! dp(i, j) 返回 s1[0..i] 和 s2[0..j] 的最小编辑距离

! dp[i-1][j-1] 存储 s1[0..i] 和 s2[0..j] 的最小编辑距离
*/

function minDistance(s1, s2) {
  let m = s1.length, n = s2.length;//5,3
  let dp = new Array(m+1).fill(0).map(v=>new Array(n+1).fill(0));
  // 对应的base case是两个for循环内容，注意[0][0]还是0
  for (let i = 1; i <= m; i++){dp[i][0] = i}
  for (let j = 1; j <= n; j++){dp[0][j] = j;}
      
  // 自底向上求解
  for (let i = 1; i <= m; i++){
    for (let j = 1; j <= n; j++){
      if (s1.charAt(i-1) == s2.charAt(j-1))
        dp[i][j] = dp[i - 1][j - 1];
      else     
      // dp[i][j]只和它附近的三个状态相关 
      // 无论增，删，改都是一步操作
        dp[i][j] =getMin(
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1,
            dp[i-1][j-1] + 1
        );
    }
  }
  // 储存着整个 s1 和 s2 的最小编辑距离
  return dp[m][n];//最后的一格就是最小距离
}

function getMin(a, b, c) {
  return Math.min(a, Math.min(b, c));
}

console.log(minDistance("horse",'ors'))