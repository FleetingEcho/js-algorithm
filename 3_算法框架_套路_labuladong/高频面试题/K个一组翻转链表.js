/* 
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例：

给你这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5

*/
// >链表是一种兼具递归和迭代性质的数据结构，认真思考一下可以发现这个问题具有递归性质。


// >反转以a为头的链表
// 反转以 a 为头结点的链表
function reverse1(a) {
  let pre, cur, nxt;
  pre = null; cur = a; nxt = a;
  while (cur != null) {
      nxt = cur.next;
      // 逐个结点反转
      cur.next = pre;
      // 更新指针位置
      pre = cur;
      cur = nxt;
  }
  // 返回反转后的头结点
  return pre;
}


// > 反转 a到b之间的结点

/** 反转区间 [a, b) 的元素，注意是左闭右开 */
  function reverse(a, b) {
    let pre, cur, nxt;
    pre = null; cur = a; nxt = a;
    // while 终止的条件改一下就行了
    while (cur != b) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    // 返回反转后的头结点
    return pre;
}


// > 该题答案：

function reverseKGroup(head, k) {
  if (head == null) return null;
  // 区间 [a, b) 包含 k 个待反转元素
  let a, b;
  a = b = head;
  for (let i = 0; i < k; i++) {
      // 不足 k 个，不需要反转，base case
      if (b == null) return head;
      b = b.next;
  }
  // 反转前 k 个元素
  let newHead = reverse(a, b);
  // 递归反转后续链表并连接起来
  a.next = reverseKGroup(b, k);
  return newHead;
}

