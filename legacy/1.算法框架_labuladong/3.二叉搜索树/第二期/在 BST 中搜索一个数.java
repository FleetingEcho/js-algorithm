public class Solution {
  boolean isInBST(TreeNode root, int target) {
    if (root == null)
      return false;
    if (root.val == target)
      return true;
    if (root.val < target)
      return isInBST(root.right, target);
    if (root.val > target)
      return isInBST(root.left, target);
    // root 该做的事做完了，顺带把框架也完成了，妙
  }
}
