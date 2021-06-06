/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}
const inorder = [9,3,15,20,7]
const postorder = [9,15,7,20,3]
// 主函数
var buildTree = function (inorder, postorder) {
  // return build( 0, inorder.length - 1,0, postorder.length - 1)
  const build = (inStart, inEnd, postStart, postEnd) => {
    // base
    if (inStart > inEnd) return null
  
    // root 节点对应的值就是前序遍历数组的第一个元素
    let rootVal = postorder[postEnd]
    // rootVal 在中序遍历数组中的索引
    let index = 0
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === rootVal) {
        index = i  
        break }
    }
    // index为root的索引
    let leftSize = index - inStart
  
    // 先构造出当前根节点
    const root = new TreeNode(rootVal)
    // 递归构造左右子树
    root.left = build(inStart,index-1, 
                      postStart, postStart+leftSize-1)
  
    root.right = build(index+1,inEnd,
                      postStart + leftSize,postEnd-1)
    return root
  }
  return build( 0, inorder.length - 1,0, postorder.length - 1)
}


console.log(buildTree(inorder, postorder))
