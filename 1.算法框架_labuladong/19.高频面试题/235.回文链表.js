/* 
这道题的关键在于，单链表无法倒着遍历，无法使用双指针技巧。那么最简单的办法就是，
把原始链表反转存入一条新的链表，然后比较这两条链表是否相同。关于如何反转链表，可以参见前文「递归操作链表」。
! 其实，借助二叉树后序遍历的思路，不需要显式反转原始链表也可以倒序遍历链表，下面来具体聊聊。
*/

// 左侧指针
// ! 空间复杂度为O(N)
function isPalindrome(head) {
    let left;
    left = head;
    const traverse=(right)=>{
        if (right == null) return true;
        let res = traverse(right.next);
        // 后序遍历代码
        res = res && (right.val == left.val);
        left = left.next;
        return res;
    }
    return traverse(head);
}


//! 方法2----优化空间复杂度
// 算法总体的时间复杂度 O(N)，空间复杂度 O(1)，已经是最优的了。
// slow 指针现在指向链表中点

/*
! 1.先通过「双指针技巧」中的快慢指针来找到链表的中点：
let slow, fast;
slow = fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
}


! 2.如果fast指针没有指向null，说明链表长度为奇数，slow还要再前进一步：
if (fast != null) slow = slow.next;

! 3.从slow开始反转后面的链表，现在就可以开始比较回文串了
 */


function isPalindrome(head) {
  let slow, fast;
  slow = fast = head;
  // 奇数时
  while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  // 偶数时，slow需要再走一步
  if (fast != null) slow = slow.next;
  // 至此为止，确定了中点
  let left = head;
  // 反转中点后面的链表
  let right = reverse(slow);
  while (right != null) {
      if (left.val != right.val)
          return false;
      left = left.next;
      right = right.next;
  }
  // 直到right匹配完成
  return true;
}

function reverse(head) {
  let pre = null, cur = head;
  // 1->2->3->4->5
  while (cur != null) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  return pre;
}