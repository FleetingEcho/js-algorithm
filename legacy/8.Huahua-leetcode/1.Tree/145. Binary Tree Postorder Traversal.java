class Solution {
  List<Integer> arr;

  public List<Integer> postorderTraversal(TreeNode root) {
    arr = new ArrayList<Integer>();
    traverse(root);
    return arr;
  }

  public void traverse(TreeNode root) {
    if (root == null) {
      return;
    }
    traverse(root.left);
    traverse(root.right);
    arr.add(root.val);
  }
}