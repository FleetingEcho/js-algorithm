/* 
二叉树算法的设计的总路线：明确一个节点要做的事情，
然后剩下的事抛给框架。
*/

// > 二叉树的增删改查 + 前中后序遍历

//=============BST遍历框架==================
function BST(root, arget) {
	if (root.val == target)
		if (root.val > target)
			// 找到目标，做点什么
			BST(root.left, target)
	if (root.val < target) BST(root.right, target)
}

//===========================================
// >如何判断我们应该用 前序 还是 中序 还是 后序遍历 的框架?
//! 652 题「寻找重复子树」
function traverse(root) {
	traverse(root.left)
	traverse(root.right)
	/* 解法代码的位置 */
}

function findDuplicateSubtrees(root) {
	let memo = new Map() // 记录所有子树以及出现的次数
	let res = [] // 记录重复的子树根节点
	let freq
	const traverse = (root) => {
		if (root == null) {
			return '#'
		}

		let left = traverse(root.left)
		let right = traverse(root.right)

		let subTree = left + ',' + right + ',' + root.val
		if (!memo.has(subTree)) {
			memo.set(subTree, 0), (freq = 0)
		} else {
			freq = memo.get(subTree)
		}
		if (freq == 1) res.push(root) // 多次重复也只会被加入结果集一次

		memo.set(subTree, freq + 1) // 给子树对应的出现次数加一
		return subTree
	}
	traverse(root)
	return res //返回的是TreeNode形式
}

// > 二叉树的序列化操作

function traverse(root) {
	// 对于空节点，可以用一个特殊字符表示
	if (root == null) {
		return '#'
	}
	// 将左右子树序列化成字符串
	let left = traverse(root.left)
	let right = traverse(root.right)
	/* 后序遍历代码位置 */
	// 左右子树加上自己，就是以自己为根的二叉树序列化结果
	let subTree = left + ',' + right + ',' + root.val
	return subTree
}

// > 1. 如何把二叉树所有的节点中的值加一？
function plusOne(root) {
	if (root == null) return
	root.val += 1
	plusOne(root.left)
	plusOne(root.right)
}

// > 2. 如何判断两棵二叉树是否完全相同？

function isSameTree(root1, root2) {
	if (root1 == null && root2 == null) return true
	if (root1 == null || root2 == null) return false
	if (root1.val !== root2.val) return false

	return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}

// > 判断 BST 的合法性、增、删、查。其中「删」和「判断合法性」略微复杂

// ! 个二叉树中，任意节点的值要大于左子树所有节点的值，且要小于右边子树的所有节点的值。

// > 零、判断 BST 的合法性

/* 
BST 的定义，root 需要做的，不仅仅是和左右子节点比较，而是要和左子树和右子树的所有节点比较。
这种情况，我们可以使用辅助函数，增加函数参数列表，在参数中携带额外信息.

      20
     /  \
    8    10
   / \   / \
  3   5  9 18
             \
             22

*/

function isValidBST(root) {
	return isValid(root, null, null)
}
// 加入了对左右子树的完整判断
function isValid(root, min, max) {
	if (root == null) return true
	if (min !== null && root.val <= min.val) return false // 根>左子树
	if (max !== null && root.val >= max.val) return false // 根<右子树
	return isValid(root.left, min, root) && isValid(root.right, root, max)
}

// >  在 BST 中查找一个数是否存在

// ! 方法1
function isInBST(root, target) {
	if (root == null) return false
	if (root.val == target) return true
	return isInBST(root.left, target) || isInBST(root.right, target)
}

// ! 方法2  --加了一层筛选
function isInBST(root, target) {
	if (root == null) return false
	if (root.val == target) return true
	if (target > root.val) {
		return isInBST(root.right, target)
	}
	if (target < root.val) {
		return isInBST(root.left, target)
	}
}

// > 在 BST 中插入一个数

function insertIntoBST(root, val) {
	if (root == null) return new TreeNode(val)
	if (root.val < val) {
		root.right = insertIntoBST(root.right, val)
	}
	if (root.val > val) {
		root.right = insertIntoBST(root.left, val)
	}
	return root
}

// > 在 BST 中删除一个数    ---删除节点的同时不能破坏 BST 的性质。有三种情况

//> 情况 1：A 恰好是末端节点，两个子节点都为空，则直接删除

// > 情况 2：A 只有一个非空子节点，那么它要让这个孩子接替自己的位置。

//> 情况3： A 有两个子节点，麻烦了，为了不破坏 BST 的性质，
//> A 必须找到左子树中最大的那个节点，或者右子树中最小的那个节点来接替自己。

function deleteNode(root, key) {
	if (root == null) return null
	if (root.val == key) {
		//这两个if 把情况1和2都正确处理了
		if (root.left == null) return root.right
		if (root.right == null) return root.left
		//处理情况3
		let minNode = getMin(root.right)
		root.val = minNode.val
		root.right = deleteNode(root.right, minNode.val)
	} else if (root.val > key) {
		root.left = deleteNode(root.left, key)
	} else if (root.val < key) {
		root.right = deleteNode(root.right, key)
	}
	return root
}
function getMin(node) {
	//BST最左边的就是最小的
	while (node.left != null) node = node.left
	return node
}

/* 
> 1. 二叉树算法设计的总路线：把当前节点要做的事做好，其他的交给递归框架，不用当前节点操心。

> 2. 如果当前节点会对下面的子节点有整体性影响，可以通过辅助函数加长参数列表，借助函数参数传递信息。
   这就是递归函数传递信息的常用方式。
> 3. 在二叉树框架之上，扩展出一套 BST 遍历框架：

function BST(root,target) {
  if (root.val == target)
      // 找到目标，做点什么
  if (root.val < target) 
      BST(root.right, target);
  if (root.val > target)
      BST(root.left, target);
}

> 4. 掌握BST 的基本操作，包括判断 BST 的合法性以及 BST 中的增、删、查操作。
*/
