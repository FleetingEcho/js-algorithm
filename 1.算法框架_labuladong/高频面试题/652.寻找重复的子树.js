// >如何判断我们应该用 前序 还是 中序 还是 后序遍历 的框架?
//! 652 题「寻找重复子树」
/*
# function traverse(root) {
#  traverse(root.left);
#  traverse(root.right);
#   解法代码的位置 
# }

*/

function findDuplicateSubtrees(root) {
  let memo=new Map(); // 记录所有子树以及出现的次数
  let res=[]; // 记录重复的子树根节点
  let freq;
  const traverse=(root)=>{
      if (root == null) {
          return "#";
      }
  
      let left = traverse(root.left);
      let right = traverse(root.right);

      let subTree = left + "," + right+ "," + root.val;
      // 没出现过设为0，出现过设置+1
      if(!memo.has(subTree)){memo.set(subTree,0),freq=0;}
      else{freq=memo.get(subTree)}
      if (freq == 1) res.push(root); // 多次重复也只会被加入结果集一次

      memo.set(subTree, freq+1);       // 给子树对应的出现次数加一
      return subTree;
  }
    traverse(root);
    return res; //返回的是TreeNode形式
}
