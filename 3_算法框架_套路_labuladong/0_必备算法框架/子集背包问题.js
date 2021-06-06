/* 
>  解法分析
* 1. 要明确两点，「状态」和「选择」。
* 2. 明确dp数组的定义
* 3. 根据「选择」，思考状态转移的逻辑
*/

//!  416. 分割等和子集

/* 

* 1. 要明确两点，「状态」和「选择」。
状态就是「背包的容量」和「可选择的物品」，选择就是「装进背包」或者「不装进背包」。

* 2. 明确dp数组的定义
dp[i][j] = x 表示，对于前 i 个物品，当前背包的容量为 j 时，若 x 为 true，
则说明可以恰好将背包装满，若 x 为 false，则说明不能恰好将背包装满。
>比如说，如果 dp[4][9] = true，其含义为：对于容量为 9 的背包，若只是用前 4 个物品，可以有一种方法把背包恰好装满。
或者说对于本题，含义是对于给定的集合中，若只对前 4 个数字进行选择，存在一个子集的和可以恰好凑出 9。

根据这个定义，我们想求的最终答案就是 dp[N][sum/2]，base case 就是 
dp[..][0] = true 和 dp[0][..] = false，因为背包没有空间的时候，就相当于装满了，
而当没有物品可选择的时候，肯定没办法装满背包。
* 3. 根据「选择」，思考状态转移的逻辑

回想刚才的 dp 数组含义，可以根据「选择」对 dp[i][j] 得到以下状态转移：
如果不把 nums[i] 算入子集，或者说你不把这第 i 个物品装入背包，
那么是否能够恰好装满背包，取决于上一个状态 dp[i-1][j]，继承之前的结果。
如果把 nums[i] 算入子集，或者说你把这第 i 个物品装入了背包，那么是否能够恰好装满背包，
取决于状态 dp[i-1][j-nums[i-1]]。
首先，由于 i 是从 1 开始的，而数组索引是从 0 开始的，所以第 i 个物品的重量
应该是 nums[i-1]，这一点不要搞混。
dp[i - 1][j-nums[i-1]] 也很好理解：你如果装了第 i 个物品，
就要看背包的剩余重量 j - nums[i-1] 限制下是否能够被恰好装满。
换句话说，如果 j - nums[i-1] 的重量可以被恰好装满，那么只要把第 i 个物品装进去，
也可恰好装满 j 的重量；否则的话，重量 j 肯定是装不满的。
*/


function canPartition(nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  // 和为奇数时，不可能划分成两个和相等的集合
  if (sum % 2 != 0) return false;
  let n = nums.length;
  // > 一分为二，开始计算
  sum = sum / 2;
  let dp=new Array(n+1).fill(0).map(v=>new Array(sum+1).fill(false))
  // base case 背包没有空间的时候，就相当于装满了，而当没有物品可选择的时候，肯定没办法装满背包。
  for (let i = 0; i <= n; i++){
    dp[i][0] = true;
  }
  // 开始状态转移
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= sum; j++) {
          if (j - nums[i - 1] >= 0) {
            // 装入或不装入背包
            dp[i][j] = dp[i - 1][j] || dp[i - 1][j-nums[i-1]];
          } else {
            // 背包容量不足，不能装入第 i 个物品
            dp[i][j] = dp[i - 1][j]; 
            }
      }
  }
  return dp[n][sum];
}


// > 进行状态压缩
/* 
注意到 dp[i][j] 都是通过上一行 dp[i-1][..] 转移过来的，之前的数据都不会再使用了。
我们可以进行状态压缩，将二维 dp 数组压缩为一维，节约空间复杂度：

这就是状态压缩，其实这段代码和之前的解法思路完全相同，只在一行 dp 数组上操作，
i 每进行一轮迭代，dp[j] 其实就相当于 dp[i-1][j]，所以只需要一维数组就够用了。
唯一需要注意的是 j 应该从后往前反向遍历，因为每个物品（或者说数字）只能用一次，
以免之前的结果影响其他的结果。
至此，子集切割的问题就完全解决了，时间复杂度 O(n*sum)，空间复杂度 O(sum)。

*/

function canPartition1(nums) {
  let sum = 0, n = nums.length;
  for (let num of nums) sum += num;
  if (sum % 2 != 0) return false;
  sum = sum / 2;
  let dp=new Array(sum+1).fill(false);
  // base case
  dp[0] = true;
  for (let i = 0; i < n; i++){
    //  j 应该从后往前反向遍历，因为每个物品（或者说数字）只能用一次，以免之前的结果影响其他的结果。
    for (let j = sum; j >= 0; j--){
      if (j - nums[i] >= 0) 
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }
  return dp[sum];
}

console.log(canPartition([1, 5, 11, 5])); //true
console.log(canPartition1([1, 5, 11, 5])); //true


console.log(canPartition([1, 2, 3, 5])); //false
console.log(canPartition1([1, 2, 3, 5])); //false