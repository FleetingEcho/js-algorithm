import java.util.LinkedList;

class BSTIterator {
  private int idx;
  private List<Integer> arr;

  public BSTIterator(TreeNode root) {
    idx = 0;
    arr = new ArrayList<Integer>();
    traverse(root, arr);
  }

  public int next() {
    return arr.get(idx++);
  }

  public boolean hasNext() {
    return idx < arr.size();
  }

  private void traverse(TreeNode root, List<Integer> arr) {
    if (root == null) {
      return;
    }
    traverse(root.left, arr);
    arr.add(root.val);
    traverse(root.right, arr);
  }
}