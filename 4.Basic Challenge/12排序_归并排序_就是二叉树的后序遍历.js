let list=[2,1,3,6,10,100,-20,-1]
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
  const result=[];let result1=[]
  while(left.length && right.length){
    if(left[0]<=right[0]){
      // 删除left第一位
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  // console.log(result);
  result1=result.concat(left).concat(right)
  return result1
};


mergeSort(list);



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