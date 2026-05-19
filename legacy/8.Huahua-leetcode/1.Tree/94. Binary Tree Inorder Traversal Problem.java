class Solution {
  List<Integer> arr;

  public List<Integer> inorderTraversal(TreeNode root) {
    arr = new ArrayList<Integer>();
    traverse(root);
    return arr;
  }

  public void traverse(TreeNode root) {
    if (root == null) {
      return;
    }
    traverse(root.left);
    arr.add(root.val);
    traverse(root.right);
  }

}