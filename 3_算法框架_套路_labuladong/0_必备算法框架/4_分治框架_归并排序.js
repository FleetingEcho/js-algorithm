/* 
> 归并排序，典型的分治算法；分治，典型的递归结构。

# 分治算法可以分三步走：分解 -> 解决 -> 合并
#   1.分解原问题为结构相同的子问题。
#   2.分解到某个容易求解的边界之后，进行第归求解。
#   3.将子问题的解合并成原问题的解。


> 举例： 归并排序问题
*/
function merge_sort(一个数组) {
      if (可以很容易处理) return;
      merge_sort(左半个数组);
      merge_sort(右半个数组);
      merge(左半个数组, 右半个数组);
  }
/* 
好了，这个算法也就这样了，完全没有任何难度。
记住之前说的，相信函数的能力，传给他半个数组，那么这半个数组就已经被排好了。
我们分治算法的套路是 
> 分解 -> 解决（触底） -> 合并（回溯） 
先左右分解，再处理合并，回溯就是在退栈，就相当于后序遍历了。
至于merge函数，参考两个有序链表的合并，简直一模一样，
*/

//> JS 归并排序
let list=[2,1,3,6,10,100,-20,-1]
const mergeSort=(arr)=>{
  const len=arr.length
  if(len<2) return arr
  let middle=Math.floor(arr.length /2);
  let left=arr.slice(0,middle)
  let right=arr.slice(middle)
  const res=merge(mergeSort(left),mergeSort(right))
  return res //只要return就会进merge,

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
  let mid = Math.floor((low + high) / 2);
  sort(nums, low, mid);
  sort(nums, mid + 1, high);

  /****** 后序遍历位置 ******/
  // 合并两个排好序的子数组
  merge(nums, low, mid, high);
  /************************/
}

// ! 只要涉及递归，都可以抽象成二叉树的问题




