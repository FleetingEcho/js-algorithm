"""
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
"""


class Solution:

    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        seen: set = set()
        while p:
            seen.add(p)
            p = p.parent
        while q:
            if q in seen:
                return q
            q = q.parent
        return None


def say_hi(name: str) -> str:
    return f"hello,{name}"


print(say_hi(name="labuladong"))