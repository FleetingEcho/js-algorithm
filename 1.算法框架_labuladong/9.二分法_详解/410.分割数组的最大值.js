/* 
给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。

注意:
数组长度 n 满足以下条件:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
示例:

输入:
nums = [7,2,5,10,8]
m = 2

输出:
18

解释:
一共有四种方法将nums分割为2个子数组。
其中最好的方式是将其分为[7,2,5] 和 [10,8]，
因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
*/

// ! 二分法找左边界；[ ]

function splitArray(nums, m) {
  let lo = Math.max(...nums);
  let hi = nums.reduce((pre,cur)=>pre+cur);
  while (lo <= hi) {
      let mid =Math.floor(lo + (hi - lo) / 2);
      let n = split(nums, mid);//该最大值条件下，分的子数组数量
      if (n == m) {
        //! 别返回， 先锁定边界
          hi = mid-1;
      } else if (n < m) {
        // 数量太小，则降低上线，使得数组增加一些
          hi = mid-1;
      } else if (n > m) {
          // 数量太大，则增加上线，使得数组减少一些
          lo = mid + 1;
      }
  }
  return lo;
}
function split( nums, max) {
  // 至少可以分割的子数组数量
  let count = 1;
  // 记录每个子数组的元素和
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] > max) {
        // 过max了？
        count++;//超过之后记一次
        sum = nums[i];
      } else {
        // 没过max
          sum += nums[i];
      }
  }
  return count;
}


// ======================================
// ! 普通暴力法求值      但会超时。。。
function splitArray1(nums, m) {
  let lo = Math.max(...nums);
  let hi = nums.reduce((pre,cur)=>pre+cur);
  for (let max = lo; max <= hi; max++) {
      // 如果最大子数组和是 max，
      // 至少可以把 nums 分割成 n 个子数组
      let n = split(nums, max);
      // 为什么是 <= 不是 == ？
      if (n <= m) {
          return max;
      }
  }

  return -1;
}

/* 辅助函数，若限制最大子数组和为 max，
计算 nums 至少可以被分割成几个子数组 */
function split( nums, max) {
  // 至少可以分割的子数组数量
  let count = 1;
  // 记录每个子数组的元素和
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] > max) {
        // 过max了？
        count++;//超过之后记一次
        sum = nums[i];
      } else {
        // 没过max
          sum += nums[i];
      }
  }
  return count;
}
