// Longest Increasing Subsequence
// 动态规划的核心设计思想是数学归纳法。


// 找出其中最长上升子序列的长度
function lengthOfLIS1(nums){
  // base
  if(nums.length===0) return 0
  let dp=new Array(nums.length).fill(1);
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<i;j++){
      if(nums[j]<nums[i]){
        dp[i]=Math.max(dp[i],dp[j]+1)
      }
    }
  }
  let res=Math.max(...dp)
  return res
}

// console.log(lengthOfLIS([1,4,3,4,2,3,5,7])); //也就是[1,2,3,5,7]

//!  方法2： 二分法查找   不好做

/* 
只能把点数小的牌压到点数比它大的牌上。如果当前牌点数较大没有可以放置的堆，
则新建一个堆，把这张牌放进去。如果当前牌有多个堆可供选择，则选择最左边的堆放置。

*/
function lengthOfLIS(nums){
  // 牌堆初始化0
  let top=new Array(nums.length).fill(0);
  let piles=0;
  for(let i=0;i<nums.length;i++){
    // 要处理的扑克牌
    let poker=nums[i];
    let left = 0, right = piles;
    // 探索左侧边界================
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (top[mid]>poker) {
        right = mid;
      } else if (top[mid] < poker) {
        left = mid + 1;
      } else{
        right = mid;
      }
    }
    // 探索左侧边界结束================
    // 没找到合适的牌堆，新建一堆
    if(left==piles) piles++;
    // 把这张牌放到牌堆顶
    top[left]=poker;
    console.log(top);
  }
  // 牌堆数就是LIS长度
  return piles;
}
console.log(lengthOfLIS([6,3,5,10,11,2,9,14,13,7,4,8,12]));
