/* 
输入：[3,2,1,6,0,5]
输出：返回下面这棵树的根节点：

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
对于构造二叉树的问题，根节点要做的就是把想办法把自己构造出来。
*/
class TreeNode{
  constructor(val){
    this.val=val
    this.left=null;
    this.right=null
  }
}
// let maxVal=nums.sort((a,b)=>b-a)[0]  //最大值

const nums=[3,2,1,6,0,5];
const build=(nums,low,high)=>{
    // base case
    if (low > high) return null

  // 找到数组中的最大值和对应的索引
    // 找到数组中的最大值和对应的索引
    let index =-1, maxVal = Number.MIN_SAFE_INTEGER;
    for (let i = low; i <= high; i++) {
        if (maxVal < nums[i]) {
            index = i;
            maxVal = nums[i];
        }
    }
  let root = new TreeNode(maxVal);
  // 递归调用构造左右子树
  root.left = build(nums, low, index - 1);
  root.right = build(nums, index + 1, high);

  return root;
}
var constructMaximumBinaryTree = function(nums) {
  return build(nums, 0, nums.length-1);
};

console.log(constructMaximumBinaryTree(nums));
// console.log([3,2,1,6,0,5].sort((a,b)=>b-a)[0]);