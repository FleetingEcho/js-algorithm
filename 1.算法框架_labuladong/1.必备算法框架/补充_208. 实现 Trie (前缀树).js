class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root
    for (const c of word) {
      if (!node[c])  node[c] = {};
      node = node[c]
    }
    node.isWord = true
    console.log(this.root)
}
  traverse(word) {
    let node = this.root
    for (const c of word) {
      node = node[c]
      if (!node) return null
    }
    return node
  }
  search(word) {
    const node = this.traverse(word)
    return !!node && !!node.isWord
  }
  startsWith(prefix) {
    return !!this.traverse(prefix)
  }
}
const trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true


//> 方法2:

var Trie = function() {
  this.root = new TrieNode()
};

function TrieNode(){
  this.next = new Map();
  this.isEnd = false;
}


Trie.prototype.insert = function(word) {
  if(!word) return;
  var node = this.root;
  for(let i=0;i<word.length;i++){
      if(!node.next.has(word[i])){
          node.next.set(word[i],new TrieNode());            
      }
      // 继续向下递归
      node = node.next.get(word[i])
  }
  node.isEnd = true;    
};


Trie.prototype.search = function(word) {
  if(! word) return false;
  var node = this.root;
  for(let i=0;i<word.length;i++){
      if(! node.next.has(word[i])){
          return false;
      }
      node = node.next.get(word[i]);
  }
  return node.isEnd;
};


Trie.prototype.startsWith = function(prefix) {
  if(! prefix) return true;
  var node = this.root;
  for(let i=0;i<prefix.length;i++){
      if(! node.next.has(prefix[i])){
          return false;
      }
      node = node.next.get(prefix[i]);
  }
  return true;
};

