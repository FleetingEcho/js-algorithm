/* 
其实第一次看到这道题，我首先想到的是滑动窗口算法，因为我们前文说过嘛，滑动窗口算法就是专门处理子串/子数组问题的，这里不就是子数组问题么？
但是，稍加分析就发现，这道题还不能用滑动窗口算法，因为数组中的数字可以是负数。
滑动窗口算法无非就是双指针形成的窗口扫描整个数组/子串，但关键是，你得清楚地知道什么时候应该移动右侧指针来扩大窗口，什么时候移动左侧指针来减小窗口。
而对于这道题目，你想想，当窗口扩大的时候可能遇到负数，窗口中的值也就可能增加也可能减少，这种情况下不知道什么时机去收缩左侧窗口，也就无法求出「最大子数组和」。
解决这个问题需要动态规划技巧，但是 dp 数组的定义比较特殊。按照我们常规的动态规划思路，一般是这样定义 dp 数组：

*/
/* 
输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/
function maxSubArray(nums) {
  let n = nums.length;
  if (n == 0) return 0;
  let dp=new Array(n).fill(0);
  // base case
  // 第一个元素前面没有子数组
  dp[0] = nums[0];
  // 状态转移方程
  for (let i = 1; i < n; i++) {
      dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }
  // 得到 nums 的最大子数组
  let res=Math.max(...dp)
  return res;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6



//! 状态压缩
function maxSubArray1(nums) {
  let n = nums.length;
  if (n == 0) return 0;
  // base case
  let dp_0 = nums[0];
  let dp_1 = 0, res = dp_0;

  for (let i = 1; i < n; i++) {
      dp_1 = Math.max(nums[i], nums[i] + dp_0);
      dp_0 = dp_1;
      // 顺便计算最大的结果
      res = Math.max(res, dp_1);
  }
  return res;
}
console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4])); //6