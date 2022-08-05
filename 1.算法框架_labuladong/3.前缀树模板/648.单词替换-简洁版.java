class Solution {
  class TrieNode {
    boolean isLeaf;
    TrieNode[] children = new TrieNode[26];
  }

  TrieNode root = new TrieNode();

  public String replaceWords(List<String> dict, String sentence) {
    add(dict);
    StringBuilder stringBuilder = new StringBuilder();
    for (String s : sentence.split(" ")) {
      int index = search(s);
      String str = index > 0 ? s.substring(0, index) : s;
      stringBuilder.append(str);
      stringBuilder.append(" ");
    }
    return stringBuilder.toString().trim();
  }

  private int search(String s) {
    TrieNode node = root;
    int index = 0;
    for (char c : s.toCharArray()) {
      if (node.children[c - 'a'] == null && !node.isLeaf)
        return 0;
      if (node.isLeaf)
        return index;
      index++;
      node = node.children[c - 'a'];
    }
    return index;

  }

  private void add(List<String> dict) {
    for (String d : dict) {
      TrieNode node = root;
      for (char c : d.toCharArray()) {
        if (node.children[c - 'a'] == null) {
          node.children[c - 'a'] = new TrieNode();
        }
        node = node.children[c - 'a'];
      }
      node.isLeaf = true;
    }
  }
}