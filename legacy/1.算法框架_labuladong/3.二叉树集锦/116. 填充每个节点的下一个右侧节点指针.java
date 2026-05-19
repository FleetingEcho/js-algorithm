class Solution {
  public Node connect(Node root) {
    if (root == null) {
      return null;
    }
    linkFunc(root.left, root.right);
    root.next = null;
    return root;
  }

  public void linkFunc(Node leftNode, Node rightNode) {
    if (leftNode == null || rightNode == null) {
      return;
    }
    leftNode.next = rightNode;
    linkFunc(leftNode.left, leftNode.right);
    linkFunc(leftNode.right, rightNode.left);
    linkFunc(rightNode.left, rightNode.right);
  }
}

class Node {
  public int val;
  public Node left;
  public Node right;
  public Node next;

  public Node() {
  }

  public Node(int _val) {
    val = _val;
  }

  public Node(int _val, Node _left, Node _right, Node _next) {
    val = _val;
    left = _left;
    right = _right;
    next = _next;
  }
};