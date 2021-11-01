/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */

//  ! 求最小的临界值，   ------ 二分查找的左边界
/* 
* ************
输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
输出：15
解释：
船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
第 1 天：1, 2, 3, 4, 5
第 2 天：6, 7
第 3 天：8
第 4 天：9
第 5 天：10

请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 
(2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 
* ************
输入：weights = [3,2,2,4,1,4], D = 3
输出：6
解释：
船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
第 1 天：3, 2
第 2 天：2, 4
第 3 天：1, 4
示例 3：
* ************
输入：weights = [1,2,3,1,1], D = 4
输出：3
解释：
第 1 天：1
第 2 天：2
第 3 天：3
第 4 天：1, 1

*/
// 要求返回最低的载重
// 寻找左侧边界的二分查找
function shipWithinDays(weights,D) {
  // 载重可能的最小值
  let left = Math.max(...weights);
  // 载重可能的最大值 + 1
  const totalWeight=weights.reduce((pre,cur)=>pre+cur) //求sum和
  let right =totalWeight;
  while(left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (canFinish(weights, D, mid)) {
          right = mid-1;
      } else {
          left = mid + 1;
      }
  }
  return left;
}

// 如果载重为 cap，是否能在 D 天内运完货物？
function canFinish(weight,D,shipCap) {
  let i = 0;
  for (let day = 0; day < D; day++) {
      let maxCap = shipCap;
      while ((maxCap -= weight[i]) >= 0) {
          i++;
          if (i == weight.length) return true;
      }
  }
  return false;
}

console.log(shipWithinDays([1,2,3,1,1],4));