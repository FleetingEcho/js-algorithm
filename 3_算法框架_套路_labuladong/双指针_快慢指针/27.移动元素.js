/* 

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
*/

// ! 快慢指针 原地改变数组数值
function removeElement(nums,val) {
  let fast = 0, slow = 0;
  while (fast < nums.length) {
      if (nums[fast] != val) {
          nums[slow] = nums[fast];
          slow++;
      }
      fast++;
  }
  return slow;
}

/* 
注意这里和有序数组去重的解法有一个重要不同，我们这里是先给 nums[slow] 赋值然后再给 slow++，
这样可以保证 nums[0..slow-1] 是不包含值为 val 的元素的，
最后的结果数组长度就是 slow。
*/