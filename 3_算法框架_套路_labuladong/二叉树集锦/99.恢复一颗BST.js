/* 
二叉搜索树中的两个节点被错误地交换。
请在不改变其结构的情况下，恢复这棵树。

输入: [1,3,null,null,2]

   1
  /
 3
  \
   2

输出: [3,1,null,null,2]

   3
  /
 1
  \
   2
============================
输入: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

输出: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3

 */

/* 核心就是中序遍历框架 */
function traverse(node) {
  if (!node) return;
  traverse(node.left);
  if (node.val < prev.val) {
      s = (s == null) ? prev : s;
      t = node;
  }
  prev = node;
  traverse(node.right);
}
/* 核心就是中序遍历框架 */

// 99. 恢复二叉搜索树
const recoverTree = (root) => {
  let prev = new TreeNode(-Infinity);
  let s;//错误1
  let t; //错误2
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (node.val < prev.val) {
        s = (s == null) ? prev : s;//记录第一个错误
        t = node; //记录错误2
    }
    prev = node; //更新prev
    traverse(node.right);
  }
  traverse(root)
  // > 交换s.val和t.val  swap这两个错误
  const temp = s.val;
  s.val = t.val;
  t.val = temp; 
};