// 237. Delete Node in a Linked List

var deleteNode = function(node) {
  node.val=node.next.val;
  node.next=node.next.next;
};


// 剑指 Offer 18. 删除链表的节点

var deleteNode = function(head, val) {
  let pre = new ListNode(-1); // 哨兵节点
  pre.next = head;

  let node = pre;
  while (node.next) {
      if (node.next.val === val) {
          node.next = node.next.next;
          break;
      }
      node = node.next;
  }
  return pre.next;
};

var deleteNode = function(head, val) {

};