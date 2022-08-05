https://mmbiz.qpic.cn/sz_mmbiz_jpg/gibkIz0MVqdHbPt3iaYMdmqUMxEpq0F5AMqngdeqiaUYJ39ExKr5Sk4OyeTiap1KLDH38ib9WMYZTrMRamDIFVxgI9g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1

这里要特别注意，TrieNode 节点本身只存储 val 字段，并没有一个字段来存储字符，字符是通过子节点在父节点的 children 数组中的索引确定的。

现在你应该知道为啥 Trie 树也叫前缀树了，因为其中的字符串共享前缀，相同前缀的字符串集中在 Trie 树中的一个子树上，给字符串的处理带来很大的便利。

```java
// 底层用 Trie 树实现的键值映射
// 键为 String 类型，值为类型 V
class TrieMap<V> {

    public void put(String key, V val);
    public void remove(String key);

    /***** 查 *****/

    // 搜索 key 对应的值，不存在则返回 null
    public V get(String key);

    // 判断 key 是否存在在 Map 中
    public boolean containsKey(String key);

    // 在 Map 的所有键中搜索 query 的最短前缀
    // shortestPrefixOf("themxyz") -> "the"
    public String shortestPrefixOf(String query);

    // 在 Map 的所有键中搜索 query 的最长前缀
    // longestPrefixOf("themxyz") -> "them"
    public String longestPrefixOf(String query);

    // 搜索所有前缀为 prefix 的键
    // keysWithPrefix("th") -> ["that", "the", "them"]
    public List<String> keysWithPrefix(String prefix);

    // 判断是和否存在前缀为 prefix 的键
    // hasKeyWithPrefix("tha") -> true
    // hasKeyWithPrefix("apple") -> false
    public boolean hasKeyWithPrefix(String prefix);

    // 通配符 . 匹配任意字符，搜索所有匹配的键
    // keysWithPattern("t.a.") -> ["team", "that"]
    public List<String> keysWithPattern(String pattern);

    // 通配符 . 匹配任意字符，判断是否存在匹配的键
    // hasKeyWithPattern(".ip") -> true
    // hasKeyWithPattern(".i") -> false
    public boolean hasKeyWithPattern(String pattern);

    // 返回 Map 中键值对的数量
    public int size();
}
```

至于 TrieSet 的 API 大同小异，所以这里不重复列举，后文直接给出实现。

接下来是重头戏，我们一个一个实现 TrieMap 的上述 API 函数。

首先，TrieMap 类中一定需要记录 Trie 的根节点 root，以及 Trie 树中的所有节点数量用于实现 size()方法：
