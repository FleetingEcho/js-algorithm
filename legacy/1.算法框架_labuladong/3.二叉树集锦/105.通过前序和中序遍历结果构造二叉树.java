class Solution {
	private Map<Integer, Integer> inOrderMap;
	int[] preorder;
	int[] inorder;

	public TreeNode buildTree(int[] preorder, int[] inorder) {
		this.preorder = preorder;
		this.inorder = inorder;

		int n = preorder.length;
		inOrderMap = new HashMap<Integer, Integer>();
		for (int i = 0; i < n; i++) {
			inOrderMap.put(inorder[i], i);
		}
		return myBuildTree(0, n - 1, 0, n - 1);
	}

	public TreeNode myBuildTree(int preStart, int preEnd, int inStart, int inEnd) {
		if (preStart > preEnd) {
			return null;
		}
		int rootIndex = preStart;
		int rootVal = preorder[rootIndex];
		TreeNode root = new TreeNode(rootVal);
		int inRoot_Index = inOrderMap.get(rootVal);
		int size_left_subtree = inRoot_Index - inStart;

		root.left = myBuildTree(preStart + 1, preStart + size_left_subtree, inStart, inRoot_Index - 1);
		root.right = myBuildTree(preStart + size_left_subtree + 1, preEnd, inRoot_Index + 1, inEnd);
		return root;
	}
}
/*
 * 
 * 对于任意一颗树而言，前序遍历的形式总是
 * [ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]
 * 
 * 即根节点总是前序遍历中的第一个节点。而中序遍历的形式总是
 * [ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]
 * 
 */
