
class Solution {
  private int res;
  private int depth;

  public int maxDepth(TreeNode root) {
    if (root == null) {
      return 0;
    }
    traverse(root);
    return res;
  }

  private void traverse(TreeNode root) {
    if (root == null) {
      res = Math.max(res, depth);
      return;
    }
    depth++;
    traverse(root.left);
    traverse(root.right);
    depth--;
  }
}