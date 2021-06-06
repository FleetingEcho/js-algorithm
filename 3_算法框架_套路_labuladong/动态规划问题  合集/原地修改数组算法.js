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





/* 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
同时保持非零元素的相对顺序。

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
*/
function moveZeroes1(nums) {
  // 去除 nums 中的所有 0
  const removeElement=(nums)=>{
    let fast = 0, slow = 0;
    while (fast < nums.length) {
      if (nums[fast]!=0) {
        nums[slow] = nums[fast];
        slow++;
      }
      fast++;
    }
    // 返回去除 0 之后的数组长度
    return slow;
  }
  let p = removeElement(nums);
  for (; p < nums.length; p++) {
      nums[p] = 0;
  }
}

var moveZeroes = (nums) => {
  let slow = 0, fast = 0
  for (; fast < nums.length; fast++) {
    // 零的时候slow是不变的，等着和fast非零数交换
    if (nums[fast] !== 0) {
      let temp = nums[slow]
      nums[slow] = nums[fast]
      nums[fast] = temp
      slow++
    }
  }
}
// console.log(moveZeroes([0,1,0,0,10,3,12]));
console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]));
