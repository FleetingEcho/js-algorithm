

const quickSort = function(arr) {
  　　if (arr.length <= 1) return arr;
     // 选中点
  　　const pivotIndex = Math.floor(arr.length / 2);
  　　const pivot = arr.splice(pivotIndex, 1)[0];
  　　const left = [];
  　　const right = [];
  　　for (let i = 0; i < arr.length; i++){
  　　　　if (arr[i] < pivot) {
  　　　　　　left.push(arr[i]);
  　　　　} else {
  　　　　　right.push(arr[i]);
  　　　　}
  　　}
  　　return quickSort(left).concat([pivot], quickSort(right));
  };
let  list=[3,44,28,6,300,2,3,5,1999,39,20,11,5]
console.log(quickSort(list));



//! 快速排序的框架  --------也就是二叉树的前序遍历
//!   先构造分界点，然后去左右子数组构造分界点 
function quickSort(){
  let p=[]
  function sort(nums, low, high) {
    /****** 前序遍历位置 ******/
    // 通过交换元素构建分界点 p
     p = p.concat(nums, low, high);
    /************************/
  
    sort(nums, low, p - 1);
    sort(nums, p + 1, high);
  }

}