# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def lowestCommonAncestor(self, root: "TreeNode", p: "TreeNode", q: "TreeNode") -> "TreeNode":
        self.foundP = False
        self.foundQ = False
        res = self.find(root, p.val, q.val)
        if self.foundP and self.foundQ:
            return res
        return

    def find(self, root, val1, val2):
        if not root:
            return None
        left = self.find(root.left, val1, val2)
        right = self.find(root.right, val1, val2)
        if left and right:
            return root
        if root.val == val1 or root.val == val2:
            if root.val == val1:
                self.foundP = True
            if root.val == val2:
                self.foundQ = True
            return root
        return left if left else right
