// 1099. 小于 K 的两数之和
/* 
输入：A = [34,23,1,24,75,33,54,8], K = 60
输出：58
解释：
34 和 24 相加得到 58，58 小于 60，满足题意。


*/
// var twoSumLessThanK = function(arr, K) {
//   arr=arr.sort((a,b)=>a-b);
//   console.log(arr)
//   return right_bound(arr,K);
// };
// function right_bound(nums, target) {
//   let left = 0, right = nums.length - 1;
//   while (left <= right) {
//       let mid = Math.floor(left + (right - left) / 2);
//       if (nums[mid] < target) {
//           left = mid + 1;
//       } else if (nums[mid] > target) {
//           right = mid - 1;
//       } else if (nums[mid] == target) {
//         left = mid + 1;  //! 别返回，锁定右侧边界
//       }
//   }
//   // 最后要检查 right 越界的情况
//  right--;
//   return nums[right];
// }

var twoSumLessThanK = function (arr, K) {
	if (arr == null || arr.length == 0) {
		return -1
	}
	arr = arr.sort((a, b) => a - b)
	let l = 0
	r = arr.length - 1
	let res = Number.MIN_SAFE_INTEGER

	while (l < r) {
		if (arr[l] + arr[r] >= K) {
			r--
		} else {
			res = Math.max(res, arr[l] + arr[r])
			l++
		}
	}
	return res == Number.MIN_SAFE_INTEGER ? -1 : res
}

const A = [34, 23, 1, 24, 75, 33, 54, 8],
	K = 60

console.log(twoSumLessThanK(A, K))
