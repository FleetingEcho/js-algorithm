// 7重建二叉树
/* 
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

   3
   / \
  9  20
    /  \
   15   7

   node left right
   left node right 
   */
var buildTree = function (preorder, inorder) {
	if (!preorder.length || !inorder.length) {
		return null
	}
	const rootVal = preorder[0]
	const node = new TreeNode(rootVal)
	// index有两层含义，一是根节点在中序遍历中的次序，二是左子树节点的数量
	const index = inorder.indexOf(rootVal)
	// preorder.slice(1,index+1)是左子树的前序遍历
	// inorder.slice(0,index) 是左子树的中序遍历
	/* 
    前序遍历 preorder = [3,9,20,15,7]
    中序遍历 inorder = [9,3,15,20,7]
    */
	// 这一步递归的对左子树进行重建
	node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
	node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
	return node
}

/* const buildTree=(preorder, inorder)=>{
  if(!preorder.length || !inorder.length) {
      return null;
  }
  const rootVal = preorder[0];
  const node = new TreeNode(rootVal);
  const index = inorder.indexOf(rootVal);
  node.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index));
  node.right = buildTree(preorder.slice(index+1),inorder.slice(index+1))
  return node;
}; */
