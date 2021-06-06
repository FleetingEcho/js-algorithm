/* 
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

*/

//! k是 --个数   答案正确，但超时了。。。。。。。testcase过大！
var maxSlidingWindow = function(nums, k) {
let res=[],count=0;
let window={};
let left=0,right=0;
while(right<nums.length){
  let c=nums[right];
  right++;
  count++;
  if(!window[c]){window[c]=0}
  window[c]++;
  // 是否要缩小窗口？
  // console.log(window)
  if(count===k){
    res.push(Math.max(...Object.keys(window)))
    let d=nums[left];
    if(window[d]){
      left++;
      count--;
      window[d]--
      if(window[d]==0){
        delete(window[d]) //删除后为undefined,keys打印不出来
      }
    }
  }
}
 return res;
};
// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
// console.log(maxSlidingWindow([1,-1],1))


// ! 由于测试数据过于庞大，必须使用单调队列进行加速
var maxSlidingWindow1 = function(nums, k) {
//  base case
  if(nums.length == 0 || k == 0) {
    return [];
}
let window=[];//保证单调递减
let res=[];
let left=1-k,right=0;
  while(right<nums.length){
    let c=nums[right];
    right++;
    if(window[0]==nums[left-1]&&left>0){window.shift();}
    // 大于头部
    while(window.length!==0 && window[window.length-1]<c){
      window.pop()
    }
    window.push(c);
    if(left>=0){
      res.push(window[0])
    }
    left++;
  }
   return res;
  };
  // console.log(maxSlidingWindow1([1,3,-1,-3,5,3,6,7],3))
  console.log(maxSlidingWindow1(
    [-7,-8,7,5,7,1,6,0]
    ,4))