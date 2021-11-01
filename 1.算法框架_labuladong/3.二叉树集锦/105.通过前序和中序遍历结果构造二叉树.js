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
const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]
// 主函数
var buildTree = function (preorder, inorder) {
  const build = (preStart, preEnd, inStart, inEnd) => {
    // base
    if (preStart > preEnd) return null
  
    // root 节点对应的值就是前序遍历数组的第一个元素
    let rootVal = preorder[preStart]
    // rootVal 在中序遍历数组中的索引
    let index = 0
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === rootVal) {index = i  
        break }
    }
    // index为root的索引
    let leftSize = index - inStart
  
    // 先构造出当前根节点
    const root = new TreeNode(rootVal)
    // 递归构造左右子树
    root.left = build(preStart + 1,preStart + leftSize, 
                      inStart,index - 1)
  
    root.right = build(preStart + leftSize + 1,preEnd,
                      index + 1,inEnd
    )
    return root
  }
  return build( 0, preorder.length - 1, 0, inorder.length - 1)
}


console.log(buildTree(preorder, inorder))
