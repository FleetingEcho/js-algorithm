/* 

给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
*/
// !　「如何凑出 target」和「如何把 target 减到 0」其实是一样的。
let result = 0;

/* 主函数 */
function findTargetSumWays(nums, target) {
    if (nums.length == 0) return 0;
    backtrack(nums, 0, target);
    return result;
}

/* 回溯算法模板 */
function backtrack(nums,i,rest) {
    // base case
    if (i == nums.length) {
        if (rest == 0) {
            // 说明恰好凑出 target
            result++;
        }
        return;
    }
    // 给 nums[i] 选择 - 号
    rest += nums[i];
    // 穷举 nums[i + 1]
    backtrack(nums, i + 1, rest);
    // 撤销选择
    rest -= nums[i]; 

    // 给 nums[i] 选择 + 号
    rest -= nums[i];
    // 穷举 nums[i + 1]
    backtrack(nums, i + 1, rest);
    // 撤销选择
    rest += nums[i];
}

// 时间复杂度为 O(2^N)，N 为 nums 的大小

// ! 备忘录优化

function findTargetSumWays(nums, target) {
  if (nums.length == 0) return 0;
  return dp(nums, 0, target);
}

// 备忘录
let memo = new Map();
function dp(nums, i,rest){
  // base case
  if (i == nums.length) {
      if (rest == 0) return 1;
      return 0;
  }
  // 把它俩转成字符串才能作为哈希表的键
  let key = i + "," + rest;
  // 避免重复计算
  if (memo.has(key)) {
      return memo.get(key);
  }
  // 还是穷举
  let result = dp(nums, i + 1, rest - nums[i]) + dp(nums, i + 1, rest + nums[i]);
  // 记入备忘录
  memo.set(key, result);
  return result;
}



//! 动态规划

/* 
! 动态规划之所以比暴力算法快，是因为动态规划技巧消除了重叠子问题。

如何发现重叠子问题？看是否可能出现重复的「状态」。
对于递归函数来说，函数参数中会变的参数就是「状态」，对于 backtrack 函数来说，
会变的参数为 i 和 rest。

*/

/* 
总结一下，回溯算法虽好，但是复杂度高，即便消除一些冗余计算，
也只是「剪枝」，没有本质的改进。而动态规划就比较玄学了，经过各种改造，
从一个加减法问题变成子集问题，又变成背包问题，经过各种套路写出解法，
又搞出状态压缩，还得反向遍历。
*/

/* 计算 nums 中有几个子集的和为 sum */
function subsets(nums, target) {
  let n = nums.length;
  // let[][] dp = new let[n + 1][sum + 1];
  let dp=new Array(n+1).fill(0).map(v=>new Array(target+1).fill(0))
  // base case
  for (let i = 0; i <= n; i++) {
      dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
      for (let j = 0; j <= target; j++) {
          if (j >= nums[i-1]) {
              // 两种选择的结果之和
              dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]];
          } else {
              // 背包的空间不足，只能选择不装物品 i
              dp[i][j] = dp[i-1][j];
          }
      }
  }
  return dp[n][target];
}

