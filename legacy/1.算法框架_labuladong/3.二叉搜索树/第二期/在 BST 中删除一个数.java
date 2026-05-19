public class Solution {
  TreeNode deleteNode(TreeNode root, int key) {
    if (root == null)
      return null;
    if (root.val == key) {
      // 这两个 if 把情况 1 和 2 都正确处理了
      if (root.left == null)
        return root.right;
      if (root.right == null)
        return root.left;
      // 处理情况 3,先找到右子树的最小值，也就刚好比当前node.val大，用来替换当前节点
      TreeNode minNode = getMin(root.right);
      root.val = minNode.val;
      root.right = deleteNode(root.right, minNode.val);
    } else if (root.val > key) {
      root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
      root.right = deleteNode(root.right, key);
    }
    return root;
  }

  TreeNode getMin(TreeNode node) {
    // BST 最左边的就是最小的
    while (node.left != null) {
      node = node.left;
    }
    return node;
  }
}
