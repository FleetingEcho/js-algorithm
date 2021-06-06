// 518.零钱兑换II

/* 
输入: amount = 5, coins = [1, 2, 5]
输出: 4
解释: 有四种方式可以凑成总金额:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

我们可以把这个问题转化为背包问题的描述形式：
有一个背包，最大容量为 amount，有一系列物品 coins，每个物品的重量为 coins[i]，每个物品的数量无限。请问有多少种方法，能够把背包恰好装满？
这个问题和我们前面讲过的两个背包问题，有一个最大的区别就是，每个物品的数量是无限的，这也就是传说中的「完全背包问题」，没啥高大上的，无非就是状态转移方程有一点变化而已。
下面就以背包问题的描述形式，继续按照流程来分析。

*/
// > 若只使用 coins 中的前 i 个硬币的面值，若想凑出金额 j，有 dp[i][j] 种凑法。
// > base case 为 dp[0][..] = 0， dp[..][0] = 1

// ! dp[N][amount]，其中 N 为 coins 数组的大小。
/* 
1.不装进包， 也就是说你不使用 coins[i] 这个面值的硬币，那么凑出面额 j 的方法数 dp[i][j] 应该等于 dp[i-1][j]，继承之前的结果。

2.如果你把这第 i 个物品装入了背包，也就是说你使用 coins[i] 这个面值的硬币，那么 dp[i][j] 应该等于 dp[i][j-coins[i-1]]。

而我们想求的 dp[i][j] 是「共有多少种凑法」，
所以 dp[i][j] 的值应该是以上两种选择的结果之和：

*/
/* 
[
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
]

*/
function change(amount,coins) {
  let n = coins.length;
  // let[][] dp = amount let[n + 1][amount + 1];
  let dp=new Array(n+1).fill(0).map(v=>new Array(amount+1).fill(0));
  // base case
  for (let i = 0; i <= n; i++) dp[i][0] = 1;
// 开始状态转移
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= amount; j++)
          if (j - coins[i-1] >= 0) //能装下
              // 方法数相加
              dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i-1]];
          else 
              // 还是原来的方法数
              dp[i][j] = dp[i - 1][j];
  }
  return dp[n][amount];
}
console.log(change(5,[1,2,5]));



/* 
> 优化: 状态压缩
而且，我们通过观察可以发现，dp 数组的转移只和 dp[i][..] 和 dp[i-1][..] 有关，所以可以压缩状态，进一步降低算法的空间复杂度
这个解法和之前的思路完全相同，将二维 dp 数组压缩为一维，时间复杂度 O(N*amount)，空间复杂度 O(amount)。
至此，这道零钱兑换问题也通过背包问题的框架解决了。
*/

function change1(amount, coins) {
  let n = coins.length;
  let dp=new Array(amount+1).fill(0);
  dp[0] = 1; // base case
  for (let i = 0; i < n; i++)
  for (let j = 1; j <= amount; j++)
      if (j - coins[i] >= 0)
       dp[j] = dp[j] + dp[j-coins[i]];
  return dp[amount];
}

console.log(change1(5,[1,2,5]));


