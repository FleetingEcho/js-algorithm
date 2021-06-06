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