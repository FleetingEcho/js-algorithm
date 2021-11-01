// 57 - I. 和为 s 的两个数字
/* 
输入一个递增排序的数组和一个数字s，在数组中查找两个数，
使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
*/

/* 
读题不清楚，没看完就写。。。。
这是一个递增序列，如果遍历会超时
*/
const arr = [10, 26, 30, 31, 47, 60]
const tar = 40

/* 
! 用双指针法
*/
var twoSum = function (arr, target) {
	let l = 0,
		r = arr.length - 1
	while (l !== r) {
		if (arr[l] + arr[r] < target) l++
		if (arr[l] + arr[r] > target) r--
		if (arr[l] + arr[r] === target) return [arr[l], arr[r]]
	}
}
/* var twoSum = function(nums, target) {
  let res=[];
  for(let i=0;i<nums.length;++i){
    if(res.length==2) break;
    let temp=nums[i];
    for(let j=0;nums[j]!==temp&& j<nums.length;++j){
      if(temp+nums[j]===target){
        res.push(temp,nums[j])
        break;
      }
    }
  }
  return res
}; */
console.log(twoSum(arr, tar))
