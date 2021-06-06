
function Greedy(arr) {
let res=Number.MAX_SAFE_INTEGER;
let temp=0;
// 从初始解触发
for (let i = 0; i <arr.length; i++){
  // 先更新数据，比如步数，判断的值之类的。
// 如果有可行解
  if('条件符合'){
    res=Math.min(res,temp) //之类的
  }
// 继续
}
  return res //注意要对res是否合格进行判断

}


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
// !我们常见的贪心算法题目，就像本文的题目，大多一眼就能看出来，大不了就先用动态规划求解，如果动态规划都超时，
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