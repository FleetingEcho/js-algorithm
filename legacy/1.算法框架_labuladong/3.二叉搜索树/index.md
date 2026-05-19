<!--

首先，BST 的特性大家应该都很熟悉了：

1、对于 BST 的每一个节点node，左子树节点的值都比node的值要小，右子树节点的值都比node的值大。

2、对于 BST 的每一个节点node，它的左侧子树和右侧子树都是 BST。
 -->

从做算法题的角度来看 BST，除了它的定义，还有一个重要的性质：==BST 的中序遍历结果是有序的（升序）。==

也就是说，如果输入一棵 BST，以下代码可以将 BST 中每个节点的值升序打印出来：

void traverse(TreeNode root) {
if (root == null) return;
traverse(root.left);
// 中序遍历代码位置
print(root.val);
traverse(root.right);
}
那么根据这个性质，我们来做两道算法题。
