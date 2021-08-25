/* 
给定一个非负整数数组，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:

输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
*/

// ! 方法1  动态规划               --Js会超时，只能用贪心算法

/* 
该算法的时间复杂度是 递归深度 × 每次递归需要的时间复杂度，
即 O(N^2)，在 LeetCode 上是无法通过所有用例的，会超时。
* for 循环中会陷入递归计算子问题，这是动态规划时间复杂度高的根本原因。

[3,1,4,2,....]
比如上图这种情况，我们站在索引 0 的位置，可以向前跳 1，2 或 3 步，你说应该选择跳多少呢？
显然应该跳 2 步调到索引 2，因为 nums[2] 的可跳跃区域涵盖了索引区间 [3..6]，比其他的都大。
如果想求最少的跳跃次数，那么往索引 2 跳必然是最优的选择。
你看，这就是贪心选择性质，我们不需要【递归地】计算出所有选择的具体结果然后比较求最值，
而只需要做出那个最有【潜力】，看起来最优的选择即可。

*/
// 主函数
function jump1(nums) {
    let n = nums.length;
    // 备忘录都初始化为 n，相当于 INT_MAX
    // 因为从 0 调到 n - 1 最多 n - 1 步
    const memo =new Array(n).fill(n) ;
    const dp=(nums,p)=>{
        let n = nums.length;
        // base case
        if (p >= n - 1) {
            return 0;
        }
        // 子问题已经计算过
        if (memo[p] != n) {
            return memo[p];
        }
        let steps = nums[p];
        // 你可以选择跳 1 步，2 步...
        for (let i = 1; i <= steps; i++) {
            // 穷举每一个选择
            // 计算每一个子问题的结果
            let subProblem = dp(nums, p + i);
            // 取其中最小的作为最终结果
            memo[p] = Math.min(memo[p], subProblem + 1);
        }
        return memo[p];
    }
    return dp(nums, 0);
}

// ! 本算法的时间复杂度 O(N)，空间复杂度 O(1)，可以说是非常高效，动态规划都被吊起来打了。
// !不过我们常见的贪心算法题目，就像本文的题目，大多一眼就能看出来，大不了就先用动态规划求解，如果动态规划都超时，
// !说明该问题存在贪心选择性质无疑了。

// * i 和 end 标记了可以选择的跳跃步数，
// *　farthest 标记了所有选择 [i..end] 中能够跳到的最远距离，jumps 记录了跳跃次数。
function jump(nums) {
  let n = nums.length;
  let end = 0, farthest = 0;
  let jumps = 0;
  for (let i = 0; i < n - 1; i++) {
      farthest = Math.max(nums[i] + i, farthest);
      if (end == i) {
          jumps++;
          end = farthest;
      }
  }
  return jumps;
}

console.log(jump([2,3,1,1,4]));


//! 方法2   贪心算法

