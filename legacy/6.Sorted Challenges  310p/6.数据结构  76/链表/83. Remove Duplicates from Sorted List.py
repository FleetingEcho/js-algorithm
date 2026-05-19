class Solution(object):
    def deleteDuplicates(self, head):
        if not head:
            return None
        prev, cur = head, head.next
        while cur:
            if cur.val == prev.val:
                prev.next = cur.next
            else:
                prev = cur
            cur = cur.next
        return head
