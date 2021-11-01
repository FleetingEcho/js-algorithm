const mergeSort=(arr)=>{
  const len=arr.length
  if(len<2) return arr
  let middle=Math.floor(arr.length /2);
  let left=arr.slice(0,middle)
  let right=arr.slice(middle)
  const res=merge(mergeSort(left),mergeSort(right))
  return res 
  
}
const merge=(left,right)=>{
  const result=[];
  while(left.length>0 && right.length>0){
    if(left[0]<=right[0]){
      // 删除left第一位
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  // concat原因是left或right可能有一个先清空，但另一个仍有值
  return result.concat(left).concat(right)
};


let list=[2,1,3,6,10,100,-20,-1]
console.log(mergeSort(list));







// const mergeSort=(arr)=>{
//   const len=arr.length;
//   if(len<=1) return arr;
// let middle=Math.floor(arr.length/2);
// let left=arr.split(0,middle);
// let right=arr.split(middle);
//  return merge(mergeSort(left),mergeSort(right));
// }

// const merge=(left,right)=>{
//   const res=[];

//   while(left.length>=0 && right.length>=0){
//     if(left[0]<=right[0]){
//       res.push(left.shift())
//     }else{
//       res.push(right.shift())
//     }
//   }
//   return res.concat(left).concat(right);
// }


































// ! 归并排序的框架
/* 
先对左右子数组排序，然后合并（类似合并有序链表的逻辑），
你看这是不是二叉树的后序遍历框架？另外，这不就是传说中的分治算法嘛，不过如此呀。
*/
function sort(nums,low,high) {
  let mid = (low + high) / 2;
  sort(nums, low, mid);
  sort(nums, mid + 1, high);

  /****** 后序遍历位置 ******/
  // 合并两个排好序的子数组
  merge(nums, low, mid, high);
  /************************/
}

// ! 只要涉及递归，都可以抽象成二叉树的问题