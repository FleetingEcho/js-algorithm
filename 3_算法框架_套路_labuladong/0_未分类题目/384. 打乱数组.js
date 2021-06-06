
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