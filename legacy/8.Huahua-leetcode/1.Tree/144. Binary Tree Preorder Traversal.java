class Solution {
  List<Integer> arr;

  public List<Integer> preorderTraversal(TreeNode root) {
    arr = new ArrayList<Integer>();
    traverse(root);
    return arr;
  }

  public void traverse(TreeNode root) {
    if (root == null) {
      return;
    }
    arr.add(root.val);
    traverse(root.left);
    traverse(root.right);
  }
}