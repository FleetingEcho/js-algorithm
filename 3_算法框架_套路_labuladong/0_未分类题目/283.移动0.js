/* 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
同时保持非零元素的相对顺序。

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
*/
function moveZeroes1(nums) {
  // 去除 nums 中的所有 0
  const removeElement=(nums)=>{
    let fast = 0, slow = 0;
    while (fast < nums.length) {
      if (nums[fast]!=0) {
        nums[slow] = nums[fast];
        slow++;
      }
      fast++;
    }
    // 返回去除 0 之后的数组长度
    return slow;
  }
  let p = removeElement(nums);
  for (; p < nums.length; p++) {
      nums[p] = 0;
  }
}

var moveZeroes = (nums) => {
  let slow = 0, fast = 0
  for (; fast < nums.length; fast++) {
    // 零的时候slow是不变的，等着和fast非零数交换
    if (nums[fast] !== 0) {
      let temp = nums[slow]
      nums[slow] = nums[fast]
      nums[fast] = temp
      slow++
    }
  }
}
// console.log(moveZeroes([0,1,0,0,10,3,12]));
console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]));
