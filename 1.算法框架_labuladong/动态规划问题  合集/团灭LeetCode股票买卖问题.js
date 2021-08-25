/* 
第一题是只进行一次交易，相当于 k = 1；
第二题是不限交易次数，相当于 k = +infinity（正无穷）；
第三题是只进行 2 次交易，相当于 k = 2；
剩下两道也是不限次数，但是加了交易「冷冻期」和「手续费」的额外条件，其实就是第二题的变种，都很容易处理。

*/
/* 
每天都有三种「选择」：买入、卖出、无操作，
我们用 buy, sell, rest 表示这三种选择。
>比如说 dp[3][2][1] 的含义就是：今天是第三天，我现在手上持有着股票，至今最多进行 2 次交易。
>再比如 dp[2][3][0] 的含义：今天是第二天，我现在手上没有持有股票，至今最多进行 3 次交易。
>我们想求的最终答案是 dp[n - 1][K][0]，即最后一天，最多允许 K 次交易，最多获得多少利润。

dp[i][k][0 or 1]
0 <= i <= n-1, 1 <= k <= K
n 为天数，大 K 为最多交易数
此问题共 n × K × 2 种状态，全部穷举就能搞定。

for 0 <= i < n:
    for 1 <= k <= K:
        for s in {0, 1}:
            dp[i][k][s] = max(buy, sell, rest)

*/


/* 
! 状态转移方程

dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
              max(   选择 rest  ,             选择 sell      )

解释：今天我没有持有股票，有两种可能：
要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。

dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
              max(   选择 rest  ,           选择 buy         )

解释：今天我持有着股票，有两种可能：
要么我昨天就持有着股票，然后今天选择 rest，所以我今天还持有着股票；
要么我昨天本没有持有，但今天我选择 buy，所以今天我就持有股票了。

>如果 buy，就要从利润中减去 prices[i]，如果 sell，就要给利润增加 prices[i]。

*/


/* 
! base case分析

dp[-1][k][0] = 0
# 解释：因为 i 是从 0 开始的，所以 i = -1 意味着还没有开始，这时候的利润当然是 0 。
dp[-1][k][1] = -infinity
# 解释：还没开始的时候，是不可能持有股票的，用负无穷表示这种不可能。
dp[i][0][0] = 0
# 解释：因为 k 是从 1 开始的，所以 k = 0 意味着根本不允许交易，这时候利润当然是 0 。
dp[i][0][1] = -infinity
# 解释：不允许交易的情况下，是不可能持有股票的，用负无穷表示这种不可能。

*/

/* 
! 整理后：

base case：
dp[-1][k][0] = dp[i][0][0] = 0
dp[-1][k][1] = dp[i][0][1] = -infinity

状态转移方程：
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])

*/

// > 题目1： 最多进行一次交易，也就是K=1；

var maxProfit = function(prices) {
  let n = prices.length;
  if(prices.length===0) return 0;
  // k = 0 的 base case，所以 dp[i-1][0][0] = 0。
  // 现在发现 k 都是 1，不会改变，即 k 对状态转移已经没有影响了。
  // 也就可以去掉所有的K；
  let dp=new Array(n).fill(0).map(v=>new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    // 显然 i = 0 时 dp[i-1] 是不合法的。这是因为我们没有对 i 的 base case 进行处理。
      if (i===0) {
        dp[i][0] = 0;
        dp[i][1] = -prices[i];
        continue;
    }
      dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
  }
  return dp[n - 1][0];  //左下角

};


// > 降维后  第一题就解决了，但是这样处理 base case 很麻烦，而且注意一下状态转移方程，
// > 新状态只和相邻的一个状态有关，其实不用整个 dp 数组，只需要一个变量储存相邻的那个状态就足够了，这样可以把空间复杂度降到 O(1):
/* 
      今天没股票，可能使今天卖了，或者昨天就没有
      今天有股票，可能使今天买的，或者昨天就有
*/
// k == 1
function maxProfit_k_1(prices) {
  let n = prices.length;
  // base case: dp[-1][0] = 0, dp[-1][1] = -infinity
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]); 
      dp_i_1 = Math.max(dp_i_1, -prices[i]); 
  }
  return dp_i_0;
}

//>  第二题，k = +infinity  

/* 
* 如果 k 为正无穷，那么就可以认为 k 和 k - 1 是一样的。可以这样改写框架：

dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
            = max(dp[i-1][k][1], dp[i-1][k][0] - prices[i])

我们发现数组中的 k 已经不会改变了，也就是说不需要记录 k 这个状态了：
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])

*/
function maxProfit_k_inf(prices) {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
      let temp = dp_i_0;
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
      dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
  }
  return dp_i_0;
}


//> 第三题，k = +infinity with cooldown
// 
/* 
* 每次 sell 之后要等一天才能继续交易。只要把这个特点融入上一题的状态转移方程即可：
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-2][0] - prices[i])
解释：第 i 天选择 buy 的时候，要从 i-2 的状态转移，而不是 i-1 。

*/
function maxProfit_with_cool(prices) {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER;
  let dp_pre_0 = 0; // 代表 dp[i-2][0]
  for (let i = 0; i < n; i++) {
      let temp = dp_i_0;
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);//今天没股票，可能有股票然后卖了，或者本来就没有股票
      dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]);//今天有股票，可能本来就有，或者昨天买的
      dp_pre_0 = temp;
    // 第一天pre是0;第二天也是0，第三天才开始是pre=dp_i_0； 
  }
  return dp_i_0;
}



// > 第四题，k = +infinity with fee

/* 
* 每次交易要支付手续费，只要把手续费从利润中减去即可。改写方程：
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i] - fee)
解释：相当于买入股票的价格升高了。
在第一个式子里减也是一样的，相当于卖出股票的价格减小了。
! 不限制交易次数，K可以认为对交易没有影响
*/

function maxProfit_with_fee(prices,fee) {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
      let temp = dp_i_0;
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
      dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee);
  }
  return dp_i_0;
}

// > 第五题，k = 2
/* 
k = 2 和前面题目的情况稍微不同，因为上面的情况都和 k 的关系不太大。
要么 k 是正无穷，状态转移和 k 没关系了；要么 k = 1，跟 k = 0 这个 base case 挨得近，
最后也没有存在感。
这道题 k = 2 和后面要讲的 k 是任意正整数的情况中，对 k 的处理就凸显出来了。
我们直接写代码，边写边分析原因。

原始的动态转移方程，没有可化简的地方
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])

! 这道题由于没有消掉 k 的影响，所以必须要对 k 进行穷举

let max_k = 2;
int[][][] dp = new int[n][max_k + 1][2];
for (int i = 0; i < n; i++) {
    for (int k = max_k; k >= 1; k--) {
        if (i - 1 == -1) { 处理 base case  }
        dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
        dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
    }
}
穷举了 n × max_k × 2 个状态，正确。
return dp[n - 1][max_k][0];
*/

// 两种情况全考虑，肯定是交易越多钱越多，所以最后结果是dp_i20
function maxProfit_k_2(prices) {
  let dp_i10 = 0, dp_i11 =Number.MIN_SAFE_INTEGER;
  let dp_i20 = 0, dp_i21 = Number.MIN_SAFE_INTEGER;
  for (let price of prices) {
      dp_i20 = Math.max(dp_i20, dp_i21 + price);
      dp_i21 = Math.max(dp_i21, dp_i10 - price);
      dp_i10 = Math.max(dp_i10, dp_i11 + price);
      dp_i11 = Math.max(dp_i11, -price);
  }
  return dp_i20;
}


// > 第六题，k = any integer

/* 
一次交易由买入和卖出构成，至少需要两天。所以说有效的限制 k 应该不超过 n/2，
如果超过，就没有约束作用了，相当于 k = +infinity。这种情况是之前解决过的。

*/

function maxProfit_k_any( max_k,prices) {
  let n = prices.length;
  // 交易次数判断是否超过n/2。
  if (max_k > n / 2) return maxProfit_k_inf(prices);
  let dp=new Array(n).fill(0).map(v=>new Array(max_k+1).fill(0).map(v=>{
   return new Array(2).fill(0)
  }));

  for (let i = 0; i < n; i++) 
      for (let k = max_k; k >= 1; k--) {
          if (i===0) {
            dp[i][k][0] = 0;
            dp[i][k][1] = -prices[i];
            continue;
           }
          dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
          dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);     
      }
  return dp[n - 1][max_k][0];
}
// 备选项，如果K 大于一半，那说明就是infinity，随便交易
function maxProfit_k_inf(prices) {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
      let temp = dp_i_0;
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
      dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
  }
  return dp_i_0;
}

