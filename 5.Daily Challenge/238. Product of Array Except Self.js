/* 
Input:  [1,2,3,4]
Output: [24,12,8,6]

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
*/



var productExceptSelf = function(nums) {
  const length = nums.length;
  const res = new Array(length);

  res[0] = 1;
  for (let i = 1; i < length; i++) {
      res[i] = nums[i - 1] * res[i - 1];
  }
  console.log(res);

  // R 为右侧所有元素的乘积
  // 刚开始右边没有元素，所以 R = 1
  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
      // 对于索引 i，左边的乘积为 res[i]，右边的乘积为 R
      res[i] = res[i] * R;
      // R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到 R 上
      R *= nums[i];
  }
  return res;
};


const productExceptSelf1=(nums)=>{
let res=[];
res[0]=1;
for(let i=1;i<nums.length;i++){
  res[i]=res[i-1]*nums[i-1]
}
let R=1;
for(let i=res.length-1;i>=0;i--){
  res[i]=res[i]* R;
  R=R*nums[i]
}
return res
};


console.log(productExceptSelf([3,2,4,3]));
console.log(productExceptSelf1([3,2,4,3]));