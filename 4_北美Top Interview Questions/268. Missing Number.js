var missingNumber = function(nums) {
  nums=nums.sort((a,b)=>a-b) ;
  console.log(nums);
  let len=nums.length;
  let pointer=0;
  for(let i=0;i<len;i++){
    if(pointer!==nums[i])break;
    pointer++
  } 
  return pointer;
};
console.log(missingNumber( [9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([3,0,1]));
