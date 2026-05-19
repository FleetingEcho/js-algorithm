from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverse(self, a: ListNode, b: ListNode) -> ListNode:
        # reverse [a,b)
        pre, cur, rest = None, a, a
        while cur != b:
            rest = cur.next
            cur.next = pre
            pre = cur
            cur = rest
        return pre

    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        if not head:
            return
        a, b = head, head
        for _ in range(k):
            if not b:
                return head
            b = b.next
        new_head = self.reverse(a, b)
        a.next = self.reverseKGroup(b, k)
        return new_head
