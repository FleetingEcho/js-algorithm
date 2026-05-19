class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        dummy = ListNode(-1)
        dummy.next = head

        dummy.next, pre, cur = head, dummy, head
        while cur and cur.next:
            if cur.val == cur.next.val:
                while cur.next and cur.next.val == cur.val:
                    cur.next = cur.next.next
                pre.next = cur.next  # delete the duplicate node
            else:
                pre = cur
            cur = cur.next

        return dummy.next
