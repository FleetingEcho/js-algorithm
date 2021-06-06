/* 
如果是输出个位数，则可以使用位运算
*/
function  missingNumber(nums) {
  let n = nums.length;
  let res = 0;
  // 新补的索引
  res += n - 0;
  // 剩下索引和元素的差加起来
  for (let i = 0; i < n; i++) 
      res += i - nums[i];
  return res;
}


// 如果缺失多位数，则不能用这个

// [1, 2, 2, 3,3, 4, 7, 8]
// var findDisappearedNumbers = function(nums) {
//   // console.log(len);
//   const len=nums.length;
//   nums=[...new Set(nums)].sort((a,b)=>a-b)
//   for(let i=0;i<len;i++){
//     if(nums[i]==i+1&& i===0){
//       nums.shift()
//       i=-1;
//     }else if(nums[i]==i+1){
//       nums.shift()
//       --i
//     }else{
//       nums.push(i+1)
//     }
//   }
//   return nums
// };
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
// // console.log(findDisappearedNumbers([1,1]));

function findDisappearedNumbers(nums) {
  //用来存放结果
  let res=[];
  //1. 遍历下数组的元素，对对应的索引位置的元素作标记
  let len = nums.length;
  for(let i = 0; i < len; i++){
    let num = Math.abs(nums[i]);  //由于数组的元素有可能被*-1，所以取绝对值
    let index = num - 1;
    if(nums[index] > 0){
      nums[index] *= -1;
    }
  }  
  console.log(nums);    
  // 寻找没有标记的索引位置
  for(let i = 0; i < len; i++){
    if(nums[i] > 0){
      let num = i + 1;  //将索引转化为对应的元素
      res.push(num);
    }     
  }
  return res;
}
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
