//! 双指针分为 
//* 1.快慢指针        主要解决链表中的问题，比如典型的判定链表中是否包含环；
//* 2.左右指针        主要解决数组（或者字符串）中的问题，比如二分查找。



// * 1 快慢指针
// ! 解决  1、判定链表中是否含有环
/* 
单链表由于最后是null,所以没有环的话最终就是到头了
但如果链表中含有环，那么这个指针就会陷入死循环，因为环形数组中没有 null 指针作为尾部节点。

经典解法就是用两个指针，一个跑得快，一个跑得慢。如果不含有环，跑得快的那个指针最终会遇到 null，
说明链表不含环；如果含有环，快指针最终会超慢指针一圈，和慢指针相遇，说明链表含有环。

*/
// >只走一圈
function hasCycle(head) {
  let fast, slow;
  fast = slow = head;
  while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) return true;
  }
  return false;
}

//!  解决 2、已知链表中含有环，返回这个环的起始位置 
function detectCycle(head) {
  let fast, slow;
  fast = slow = head;
  while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) break;
  }
  // >这个while结束时fast就在末尾
  // 上面的代码类似 hasCycle 函数
  // 在相遇点，让slow从头开始和fast齐头并进，重新相遇的地方就是环的起点
  slow = head;
  while (slow != fast) {
      fast = fast.next;
      slow = slow.next;
  }
  return slow;
}

//!  解决 3、寻找单向链表的中点
// 因为慢指针一步步走，而快指针两步走，当快指针到达链表尽头时，慢指针就处于链表的中间位置。

while (fast != null && fast.next != null) {
  fast = fast.next.next;
  slow = slow.next;
}
// slow 就在中间位置
return slow; //链表长度为奇数的时候正好在中点


// ! 解决 4、寻找链表的倒数第 k 个元素
/* 
我们的思路还是使用快慢指针，让快指针先走 k 步，然后快慢指针开始同速前进。
这样当快指针走到链表末尾 null 时，慢指针所在的位置就是倒数第 k 个链表节点（为了简化，假设 k 不会超过链表长度）：
*/
function findKth(head,k){
  let slow, fast;
slow = fast = head;
while (k-- > 0){
  fast = fast.next;
}

while (fast != null) {
    slow = slow.next;
    fast = fast.next;
}
return slow;
}



/* 
* 左右指针
! 常用于 1.二分查找
只要数组有序，就应该想到双指针技巧。
*/
//!  Leetcode题目：两数之和
// [2,7,11,15]  target=9    返回[1,2]

function twoSum(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
       sum = nums[left] + nums[right];
      if (sum == target) {
          // 题目要求的索引是从 1 开始的
          return [left+1,right+1]
      } else if (sum < target) {
          left++; // 让 sum 大一点
      } else if (sum > target) {
          right--; // 让 sum 小一点
      }
  }
  return [-1,-1];
}


// ! 3、反转数组
function reverse(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    // # swap left---right
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++; right--;
  }
}


// ! 4、滑动窗口算法
// 这也许是双指针技巧的最高境界了，如果掌握了此算法，可以解决一大类子字符串匹配的问题，
// 不过「滑动窗口」稍微比上述的这些算法复杂些。
