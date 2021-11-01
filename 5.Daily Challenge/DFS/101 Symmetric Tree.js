/* 
Given a binary tree, check whether it is a mirror of itself 
(ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
 
But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
*/

var isSymmetric = function(root) {
  const dfs=(p,q)=>{
    if(p==null && q==null)return true
    if(p==null || q==null)return false
    return p.val===q.val && dfs(p.left,q.right) && dfs(p.right,q.left)
  }
   return dfs(root,root)
};