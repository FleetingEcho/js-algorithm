/* 
数据结构的基本存储方式就是链式和顺序两种，基本操作就是增删查改，遍历方式无非迭代和递归。
刷算法题建议从「树」分类开始刷，结合框架思维，把这几十道题刷完，对于树结构的理解应该就到位了。
这时候去看回溯、动规、分治等算法专题，对思路的理解可能会更加深刻一些。
*/

/* 
! 数据结构的存储方式只有两种：数组（顺序存储）和链表（链式存储）。
我们分析问题，一定要有递归的思想，自顶向下，从抽象到具体。你上来就列出这么多，那些都属于「上层建筑」，
而数组和链表才是「结构基础」。因为那些多样化的数据结构，究其源头，都是在链表或者数组上的特殊操作，API 不同而已。

! 数组由于是紧凑连续存储,可以随机访问，通过索引快速找到对应元素，而且相对节约存储空间。
! 但扩容的复杂度是O(N)

! 链表因为元素不连续，而是靠指针指向下一个元素的位置，所以不存在数组的扩容问题；
! 但存储空间大，因为要存前后指针；
! 而且不能随机访问
*/



/* 
数据结构的基本操作
* 对于任何数据结构，其基本操作无非遍历 + 访问，再具体一点就是：增删查改。

!　各种数据结构的遍历 + 访问无非两种形式：线性的和非线性的。
!　线性------- for/while 迭代为代表
!  非线性------递归为代表。
*/


//*1. 数组 遍历框架，典型的线性迭代结构：
 function traverse(arr) {
      for (let i = 0; i < arr.length; i++) {
          //! 迭代访问 arr[i]
      }
  }

//*2. 链表遍历框架，兼具迭代和递归结构：

/* 基本的单链表节点 */
class ListNode {
constructor(){
  this.val= val;
   this.next=null;
}}
//! 迭代的话
function traverse(head) {
  for ( p = head; p != null; p = p.next) {
      //* 迭代访问 p.val
  }
}
//! 递归的话
function traverse( head) {
  // 递归访问 head.val
  traverse(head.next)
}

// * 2--倒序打印单链表

/* 倒序打印单链表中的元素值 */
function traverse(head) {
  if (head == null) return;
  traverse(head.next);
  // 后序遍历代码
  console.log(head.val);
}



//* 3.二叉树遍历框架，典型的非线性递归遍历结构：

/* 基本的二叉树节点 */
class TreeNode {
  constructor(){
    this.val= val;
    this.left=null;
    this.right=null;
  }}

function traverse( root) {
  traverse(root.left)
  traverse(root.right)
}

//* 4.N 叉树的遍历框架：
/* 基本的 N 叉树节点 */
class TreeNode {
  constructor(){
    this.val= val;
    this.child=[];
  }}

function traverse(root){
  for(let item of child){
    traverse(item);
  }
}

//* 5. N 叉树的遍历又可以扩展为图的遍历，因为图就是好几 N 叉棵树的结合体。
//*    你说图是可能出现环的？这个很好办，用个布尔数组 visited 做标记就行了

// ! 先刷二叉树，先刷二叉树，先刷二叉树！

// 例如： 二叉树中的最大路径和就是用递归
const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和
  const dfs = (root) => {
    if (root == null) return 0;   // 遍历到null节点，返回0;
    
    const left = Math.max(0, dfs(root.left));   // 左子树提供的最大收益
    const right = Math.max(0, dfs(root.right)); // 右子树提供的最大收益
     maxSum=Math.max(maxSum,left+right+root.val);

    return  Math.max(left,right)+root.val //返回节点贡献的最大值
  };

  dfs(root); // 递归的入口
  return maxSum;
};


//! 举例2
// 99. 恢复二叉搜索树
const recoverTree = (root) => {
  let prev = new TreeNode(-Infinity);
  let s;//错误1
  let t; //错误2
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (node.val < prev.val) {
        s = (s == null) ? prev : s;//记录第一个错误
        t = node; //记录错误2
    }
    prev = node; //更新prev
    traverse(node.right);
  }
  traverse(root)
  // > 交换s.val和t.val  swap这两个错误
  const temp = s.val;
  s.val = t.val;
  t.val = temp; 
};