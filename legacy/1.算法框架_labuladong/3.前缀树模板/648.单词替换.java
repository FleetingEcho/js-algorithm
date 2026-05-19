
// ....确实是秒杀。。。
class Solution {
  String replaceWords(List<String> dict, String sentence) {
    TrieSet set = new TrieSet();
    for (String key : dict) {
      set.add(key);
    }
    StringBuilder sb = new StringBuilder();
    String[] words = sentence.split(" ");
    for (int i = 0; i < words.length; i++) {
      String prefix = set.shortestPrefixOf(words[i]);
      if (!prefix.isEmpty()) {
        sb.append(prefix);
      } else {
        sb.append(words[i]);
      }
      if (i != words.length - 1) {
        sb.append(' ');
      }
    }
    return sb.toString();
  }
}

class TrieMap<V> {
  private static final int R = 256;
  private int size = 0;
  private TrieNode<V> root = null;

  private static class TrieNode<V> {
    V val = null;
    TrieNode<V>[] children = new TrieNode[R];
  }

  public void put(String key, V val) {
    if (!containsKey(key)) {
      size++;
    }
    root = put(root, key, val, 0);
  }

  private TrieNode<V> put(TrieNode<V> node, String key, V val, int i) {
    if (node == null) {
      node = new TrieNode<>();
    }
    if (i == key.length()) {
      node.val = val;
      return node;
    }
    char c = key.charAt(i);
    node.children[c] = put(node.children[c], key, val, i + 1);
    return node;
  }

  public V get(String key) {
    TrieNode<V> x = getNode(root, key);
    if (x == null || x.val == null) {
      return null;
    }
    return x.val;
  }

  public boolean containsKey(String key) {
    return get(key) != null;
  }

  public String shortestPrefixOf(String query) {
    TrieNode<V> p = root;
    for (int i = 0; i < query.length(); i++) {
      if (p == null) {
        return "";
      }
      if (p.val != null) {
        return query.substring(0, i);
      }
      char c = query.charAt(i);
      p = p.children[c];
    }

    if (p != null && p.val != null) {
      return query;
    }
    return "";
  }

  private TrieNode<V> getNode(TrieNode<V> node, String key) {
    TrieNode<V> p = node;
    for (int i = 0; i < key.length(); i++) {
      if (p == null) {
        return null;
      }
      char c = key.charAt(i);
      p = p.children[c];
    }
    return p;
  }
}

// ======================================================================

class TrieSet {
  private final TrieMap<Object> map = new TrieMap<>();

  public void add(String key) {
    map.put(key, new Object());
  }

  public String shortestPrefixOf(String query) {
    return map.shortestPrefixOf(query);
  }
}