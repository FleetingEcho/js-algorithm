// ! 标准动态规划题目

/*
* 简明框架 
主函数
public int rob(int[] nums) {
    return dp(nums, 0);
}
返回 nums[start..] 能抢到的最大值
private int dp(int[] nums, int start) {
    if (start >= nums.length) {
        return 0;
    }

    int res = Math.max(
            不抢，去下家
            dp(nums, start + 1), 
            抢，去下下家
            nums[start] + dp(nums, start + 2)
        );
    return res;
}


*/

// ! 方法1 
let memo=[];
// 主函数
function rob1(nums) {
    // 初始化备忘录0
    memo = new Array(nums.length).fill(-1)
    // 强盗从第 0 间房子开始抢劫
    return dp(nums, 0);
}

// 返回 dp[start..] 能抢到的最大值
function dp(nums,start) {
    if (start >= nums.length) {
        return 0;
    }
    // 避免重复计算
    if (memo[start] != -1) return memo[start];

    let res = Math.max(dp(nums, start + 1), 
                       nums[start] + dp(nums, start + 2)
                      );
    // 记入备忘录
    memo[start] = res;
    return res;
}

// ! 方法2   --自底向上
// * 从右向左计算，因为要留有空余的0进行递推
function rob(nums) {
  let n = nums.length;
  // dp[i] = x 表示：
  // 从第 i 间房子开始抢劫，最多能抢到的钱为 x
  // base case: dp[n] = 0
  let dp = new Array(n + 2).fill(0);
  for (let i=n-1; i >= 0; i--) {
      dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }
  return dp[0];
}



// !  方法3
// 空间复杂度降低到O(1)
function rob1(nums) {
  let n = nums.length;
  // 记录 dp[i+1] 和 dp[i+2]
  let dp1 = 0, dp2 = 0;
  // 记录 dp[i]
  let dp_i = 0; 
  for (let i = n - 1; i >= 0; i--) {
      dp_i = Math.max(dp1, nums[i] + dp2);
      dp2 = dp1;
      dp1 = dp_i;
  }
  return dp_i;
}


//! 环形数组的打家劫舍

function rob2(nums) {
  let n = nums.length;
  if (n == 1) return nums[0];
  // 仅比较两种情况即可，因为金额始终是抢的越多越好
  return Math.max(robRange(nums, 0, n - 2), 
                  robRange(nums, 1, n - 1)
                  );
}

// 仅计算闭区间 [start,end] 的最优结果
function robRange(nums,start,end) {
  let first = 0, second = 0;
  let amount = 0;
  // [....] first second
  for (let i = end; i >= start; i--) {
      amount = Math.max(first, nums[i] + second);
      second = first;
      first = amount;
  }
  return amount;
}



// ! 二叉树形的打家劫舍 

//! 方法1          --超时。。。。时间复杂度 O(N)
// !  可能是memo太慢，如果数组超级大的话，时间会很长
function rob3(root) {
  const memo=new Map()
    if (root == null) return 0;
    // 利用备忘录消除重叠子问题
    if (memo.has(root)) return memo.get(root);
    // 抢，然后去下下家
    let do_it = root.val
        + (root.left == null 
          ? 0 
          : rob(root.left.left) + rob(root.left.right))
        + (root.right == null 
          ? 0 
          : rob(root.right.left) + rob(root.right.right));
    // 不抢，然后去下家
    let not_do = rob(root.left) + rob(root.right);
    let res = Math.max(do_it, not_do);
    memo.set(root, res);
    return res;
}


//!  时间复杂度 O(N)，空间复杂度只有递归函数堆栈所需的空间，不需要备忘录的额外空间。
function rob4(root) {
  let res = dp(root);
  return Math.max(res[0], res[1]);
}
const dp=(root)=>{
  if (root == null) return [0,0];
  let left = dp(root.left);
  let right = dp(root.right);
  // 抢，下两家就不能抢了
  let rob = root.val + left[0] + right[0];
  // 不抢，下家可抢可不抢，取决于收益大小
  let not_rob = Math.max(left[0], left[1])
              + Math.max(right[0], right[1]);

  return [not_rob, rob];
}

/* 返回一个大小为 2 的数组 arr
arr[0] 表示不抢 root 的话，得到的最大钱数
arr[1] 表示抢 root 的话，得到的最大钱数 */


console.log(rob([2,7,9,3,1]));
console.log(rob1([2,7,9,3,1]));
console.log(rob2([2,7,9,3,1]));
console.log(rob4([3,4,5,1,3,null,1]));
