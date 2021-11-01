// 897. 递增顺序查找树
/* 
给你一个树，请你 按中序遍历 重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。
输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  
 
*/

// 中序遍历 + 构造新的树
function increasingBST(root) {
	let vals = []
	inOrder(root, vals) //中序遍历获取所有的值
	let ans = new TreeNode(0)
	let cur = ans
	for (let v of vals) {
		cur.right = new TreeNode(v)
		cur = cur.right
	}
	return ans.right
}

function inOrder(node, vals) {
	if (node == null) return
	inOrder(node.left, vals)
	vals.push(node.val)
	inOrder(node.right, vals)
}

// 中序遍历 + 更改树的连接方式
/* 

我们在树上进行中序遍历，但会将树中的节点之间重新连接而不使用额外的空间。
具体地，当我们遍历到一个节点时，把它的左孩子设为空，并将其本身作为上一个遍历到的节点的右孩子。
*/

// 也是用哨兵节点，然后改变底部指针方向。
// 速度比构建新树快多了
function increasingBST(root) {
	let ans = new TreeNode(0)
	let cur = ans
	const inOrder = (node) => {
		if (node == null) return
		inOrder(node.left)
		node.left = null
		cur.right = node
		cur = node
		inOrder(node.right)
	}
	inOrder(root)
	return ans.right
}
