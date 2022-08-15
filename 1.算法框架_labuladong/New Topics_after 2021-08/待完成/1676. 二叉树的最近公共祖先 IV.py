# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def lowestCommonAncestor(self, root: "TreeNode", nodes: "List[TreeNode]") -> "TreeNode":
        self.mySet: set[int] = set()
        for node in nodes:
            self.mySet.add(node.val)
        return self.find(root, self.mySet)

    def find(self, root, mySet):
        if not root:
            return None
        if root.val in mySet:
            return root
        left = self.find(root.left, mySet)
        right = self.find(root.right, mySet)
        if left and right:
            return root
        return left if left else right
