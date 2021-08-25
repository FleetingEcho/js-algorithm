/* 
这个问题的最基本形式是这样：给你一个数组和一个整数 target，可以保证数组中存在两个数的和为 target，请你返回这两个数的索引。
比如输入 nums = [3,1,3,6], target = 6，算法应该返回数组 [0,2]，因为 3 + 3 = 6。


*/

//>  如果是无序的数组，直接使用哈希表解决


//!  方法1: 哈希表
function twoSum(nums,target) {
  let n = nums.length;
  let index=new Map();
  // 构造一个哈希表：元素映射到相应的索引
  for (let i = 0; i < n; i++){
    index.set(nums[i], i);
  }
  // 开始查找
  for (let i = 0; i < n; i++) {
      let other = target - nums[i];
      // 如果 other 存在且不是 nums[i] 本身
      if (index.has(other) && index.get(other) != i)
          return [i, index.get(other)];
  }
  return [-1,-1];
}



// > 如果是有序的数组， 直接使用二分法
//>    但，也可以转换成有序数组然后用二分法解决问题会打乱了原有数组的顺序

//!  方法2: 二分法

function twoSum1(nums,target) {
  let left = 0, right = nums.length-1;
  while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum == target) {
          return [left,right];  
      } else if (sum < target) {  
          left++; // 让 sum 大一点
      } else if (sum > target) {
          right--; // 让 sum 小一点
      }
  }
  // 不存在这样两个数
  return [-1,-1];
}

console.log(twoSum([3,1,3,6],6));
console.log(twoSum1([3,2,4],6));