class Node {
  int curRow;
  int val;

  Node(int row, int v) {
    curRow = row;
    val = v;
  }
}

class Solution {
  private TreeMap<Integer, List<Node>> map = new TreeMap<>();
  private List<List<Integer>> arr = new ArrayList<>();

  public List<List<Integer>> verticalTraversal(TreeNode root) {
    if (root == null) {
      return arr;
    }
    traverse(root, 0, 0);
    for (Map.Entry<Integer, List<Node>> entry : map.entrySet()) {
      List<Node> temp = entry.getValue();
      Collections.sort(temp, (Node a, Node b) -> {
        if (a.curRow != b.curRow) {
          return a.curRow - b.curRow;
        }
        return a.val - b.val;
      });
      List<Integer> curArr = new ArrayList<>();
      for (Node node : temp) {
        curArr.add(node.val);
      }
      arr.add(curArr);
    }
    return arr;
  }

  public void traverse(TreeNode root, Integer curRow, Integer curCol) {
    if (root == null) {
      return;
    }
    if (!map.containsKey(curCol)) {
      List<Node> temp = new ArrayList<>();
      temp.add(new Node(curRow, root.val));
      map.put(curCol, temp);
    } else {
      map.get(curCol).add(new Node(curRow, root.val));
    }
    traverse(root.left, curRow + 1, curCol - 1);
    traverse(root.right, curRow + 1, curCol + 1);
  }
}

// [3,1,4,0,2,2]