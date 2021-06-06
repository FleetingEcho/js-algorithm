/* 
给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 

示例 1:

给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。
*/
// ! 在使用 O(1) 额外空间的条件下完成

// ! 可以使用快慢指针
var removeDuplicates = function(nums) {
  const len=nums.length
  if(len===0) return 0
  let slow = 0, fast = 0;
  while (fast < len) {
      if (nums[fast] != nums[slow]) {
          slow++;
          // 维护 nums[0..slow] 无重复
          nums[slow] = nums[fast];
      }
      fast++;
  }
  // 数组长度为索引 + 1
  return slow + 1;  //返回去重数组长度
};


// ! 有序链表去重

function deleteDuplicates(head) {
  if (head == null) return null;
  let slow = head, fast = head;
  while (fast != null) {
      if (fast.val != slow.val) {
          slow.next = fast;
          slow = slow.next;
      }
      fast = fast.next;
  }
  // 断开与后面重复元素的连接
  slow.next = null;
  return head;
}