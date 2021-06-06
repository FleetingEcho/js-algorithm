// 回文单链表
/* 
Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true

*/
// 数组判定
var isPalindrome = function(head) {  
  const arr=[];
  const helper=(point)=>{
    if(point===null) return;
    arr.push(point.val)
    helper(point.next)
  }
  helper(head);
  // base case
    if(arr.length===0 ||arr.length===1) return true
    // 迭代确认
    for(let i=0;i<Math.floor(arr.length/2);i++){
      if(arr[i]!==arr[arr.length-1-i]) return false;
    }
    return true;
};


// 快慢指针 
function isPalindrome(head) {
let fast=head, slow=head;
let copy=head;
while(fast!==null && fast.next!==null){
  slow=slow.next;
  fast=fast.next.next;
}
if(fast!==null){slow=slow.next}
// 反转
slow=reverse(slow);
while(slow!==null){
  if(copy.val!==slow.val) return false;
  copy=copy.next;
  slow=slow.next;
}
return true;
}

// 1,2,3,4
const reverse=(head)=>{
  let pre=null;
  while(head!==null){
    let temp=head.next;
    head.next=pre;
    pre=head;
    head=temp;
  }
  return pre
}
