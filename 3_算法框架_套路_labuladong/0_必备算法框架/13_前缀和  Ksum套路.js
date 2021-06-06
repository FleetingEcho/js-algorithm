/* 
给定一个整数数组和一个整数 k，你需要找到该数组中和为 k
的连续的子数组的个数。
> 前缀和主要适用的场景是原始数组不会被修改的情况下，
> 频繁查询某个区间的累加和。

输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
*/
/* 
> 前缀和 
比如： nums=[3,5,2,-1,4,1]
  preSum=[0,3,8,10,8,12,13]




这个前缀和数组 preSum 的含义也很好理解，
preSum[i] 就是 nums[0..i-1] 的和。
那么如果我们想求 nums[i..j] 的和，
只需要一步操作 preSum[j+1]-preSum[i] 即可，
而不需要重新去遍历数组了。

*/
// > 前缀和 框架

// ==========================================
  /* 输入一个数组，构造前缀和 */
  function PrefixSum(nums) {
   let prefix = new Array(nums.length + 1).fill(0);
    // 计算 nums 的累加和
    for (let i = 1; i < prefix.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
    }
}

/* 查询闭区间 [i, j] 的累加和 */
function query(i, j) {
    return prefix[j + 1] - prefix[i];
}
// ==========================================

function subarraySum1(nums,k) {
  let n = nums.length;
  // 构造前缀和
  let sum = new Array(n+1);
  sum[0] = 0; 
  for (let i = 0; i < n; i++){
    sum[i + 1] = sum[i] + nums[i];
  }

  let ans = 0;
  // 穷举所有子数组
  for (let i = 1; i <= n; i++){
    for (let j = 0; j < i; j++){
        if (sum[i] - sum[j] == k)
        ans++;
    }
  }
  return ans;
}
// 这个解法的时间复杂度 O(N^2) 空间复杂度 O(N)，并不是最优的解法。


// ! 优化   ---避免内层循环   ---并使用哈希表优化

function subarraySum(nums,k) {
  let n = nums.length;
  // map：前缀和 -> 该前缀和出现的次数
 let preSum = new Map();
  // base case
  preSum.set(0, 1);
  let ans = 0, sum0_i = 0;
  for (let i = 0; i < n; i++) {
      sum0_i += nums[i];
      // 这是我们想找的前缀和 nums[0..j]
      let sum0_j = sum0_i - k;// sum i- sum j=k;
      // 如果前面有这个前缀和，则直接更新答案
      if (preSum.has(sum0_j)){
        ans += preSum.get(sum0_j) //有的时候才累加
      }
      // 没出现过，则设定为1次,然后下一轮
      if(!preSum.has(sum0_i)){
        preSum.set(sum0_i,1)
        continue
      }
      // 出现过,则加1
      if(preSum.has(sum0_i)){
        let temp=preSum.get(sum0_i);
        preSum.set(sum0_i,temp+1)
      }
  }
  return ans;
}

console.log(subarraySum([1,1,1],2));

// ! LeetCode 1109 航班预订统计



