class Solution {
  private List<List<Integer>> res = new ArrayList<>();

  public List<List<Integer>> levelOrder(Node root) {
    if (root != null) {
      traverse(root, 0);
    }
    return res;
  }

  public void traverse(Node node, Integer level) {
    if (res.size() <= level) {
      res.add(new ArrayList<Integer>());
    }
    res.get(level).add(node.val);
    for (Node item : node.children) {
      traverse(item, level + 1);
    }
  }
}