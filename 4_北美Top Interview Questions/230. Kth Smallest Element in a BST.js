/* 
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
*/

/* 
错误做法：
      if(root.val>stack[stack.length-1]){stack.push(root.val)}
      else if(root.val<stack[0]){stack.unshift(root.val)
*/
// ! 只需要维护单调栈的结果即可
var kthSmallest = function(root, k) {
  const stack=[];
  const helper=(root)=>{
    if(root===null) return;
    // 单调上升
    if(stack.length===0){
      stack.push(root.val);
    }
    // 缺点:没有逐项检验
    else{
      for(let i=0;i<stack.length;i++){
        // 小于
        if(root.val<stack[0]){
          stack.unshift(root.val);
        break;
      }
        // 大于
        if(root.val>stack[stack.length-1]){
          stack.push(root.val);break;
        }
        // 中间
        if(root.val<stack[i]){
          stack.splice(i,0,root.val);
          break;
        }
      }
    }
    helper(root.left);
    helper(root.right);
    console.log(stack);
    return stack[k-1];   
  }
  return helper(root,k)
};