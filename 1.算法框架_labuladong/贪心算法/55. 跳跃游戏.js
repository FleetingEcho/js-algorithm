/* 
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:

输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ，
 所以你永远不可能到达最后一个位置。

*/

/* 
每一步都计算一下从当前位置最远能够跳到哪里，然后和一个全局最优的最远位置 farthest 做对比，
通过每一步的最优解，更新全局最优解，这就是贪心

*/

function canJump(nums) {
  let n = nums.length;
  let farthest = 0;
  for (let i = 0; i < n - 1; i++) {
      // 不断计算能跳到的最远距离
      farthest = Math.max(farthest, i + nums[i]);
      // 可能碰到了 0，卡住跳不动了
      if (farthest <= i) return false;
  }
  return farthest >= n - 1;
}
console.log(canJump([2,5,0,0]));



