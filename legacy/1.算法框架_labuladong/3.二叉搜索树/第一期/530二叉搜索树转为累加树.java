class Solution {
  private int sum = 0;

  public TreeNode convertBST(TreeNode root) {
    traverse(root);
    return root;
  }

  public void traverse(TreeNode root) {
    if (root == null) {
      return;
    }
    traverse(root.right);

    // root
    sum += root.val;
    root.val = sum;
    traverse(root.left);
  }
}

/*
 * 
 * 这段代码可以从大到小降序打印 BST 节点的值，如果维护一个外部累加变量sum，然后把sum赋值给 BST 中的每一个节点，不就将 BST
 * 转化成累加树了吗？
 * 
 */