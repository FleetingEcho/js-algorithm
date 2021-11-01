// 26 树的子结构
/* 
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
B是A的子结构， 即 A中有出现和B相同的结构和节点值。
https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/
例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true
*/
// 递归

function isSubStructure(Main, B) {
	const recur = (Main, B) => {
		if (B == null) return true
		if (Main == null || Main.val != B.val) return false
		//   判断两个值是否相等
		return recur(Main.left, B.left) && recur(Main.right, B.right)
	}
	return Main != null && B != null && (recur(Main, B) || isSubStructure(Main.left, B) || isSubStructure(Main.right, B))
}

// 这个写法的缺点是二叉树有可能两个节点拥有同一个值
const isSubStructure = (Main, B) => {
	if (!Main || !B) return false
	const finder = (Main, B) => {
		if (!Main) return false
		if (Main.val !== B.val) {
			finder(Main.left, B) || finder(Main.right, B)
		}
		if (Main.val === B.val) {
			return helper(Main, B)
		}
	}
	const helper = (Main, B) => {
		if (!B) return true
		if (!Main || Main.val !== B.val) return false
		return helper(Main.left, B.left) && helper(Main.right, B.right)
	}
	// 这里很重要，只要有一个返回true,就返回true;
	return finder(Main, B) || isSubStructure(Main.left, B) || isSubStructure(Main.right, B)
}
