/* 
分析洗牌算法正确性的准则：产生的结果必须有 n! 种可能，
否则就是错误的。这个很好解释，因为一个长度为 n 的数组的全排列就有 n! 种，
> 也就是说打乱结果总共有 n! 种。算法必须能够反映这个事实，才是正确的。
*/

//! 方法1: 
function shuffle(arr){
  let n=arr.length;
  for (let i = 0; i < arr.length; i++) {
    // 不能加1,因为i要小于length
    const random = Math.floor( (Math.random()*(n-i)) +i );// [i,n]才能保证是可能性是n!
    // swap
    [arr[random],arr[i]]=[arr[i],arr[random]]
  }
  return arr
}

console.log(shuffle([1,3,5,7,9]));

/* 
> 蒙特卡罗方法验证正确性
洗牌算法，或者说随机乱置算法的正确性衡量标准是：
对于每种可能的结果出现的概率必须相等，也就是说要足够随机。

*/
//! [0, 1) 
Math.random();

// ! 获取 [a,b)   -----用的最多      
Math.floor((Math.random()*(b-a))+a)

// ! 获取 (a,b)
Math.floor((Math.random()*(b-a))+a+1) //Math.random(b)本身就取不到b

// ! 获取[a,b]随机数 
Math.floor((Math.random()*(b+1-a))+a)  //保证能取到b 

// ! 获取 (a,b]  
Math.floor( (Math.random()*(b+1-a))+a+1)





// ! 384 打乱数组

// 写成class
class Solution {
 constructor(nums){
   this.nums=nums
 }
 reset=()=> this.nums;
 shuffle=()=>{
  let copy=Array.from(this.nums)
  let n=copy.length;
  for (let i = 0; i < copy.length; i++) {
    // i可以从0开始，因此不用+1；
    const random = Math.floor( (Math.random()*(n-i)) +i );// [i,n]才能保证是可能性是n!
    [copy[random],copy[i]]=[copy[i],copy[random]]
  }
  return copy
 }

 randOne=(n, m)=> Math.floor(Math.random() * (m+1 - n)) + n;//[m,n]
}