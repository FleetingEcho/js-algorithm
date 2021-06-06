/* 
> 875. 爱吃香蕉的珂珂
! 二分法
珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。
如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

示例 1：
输入: piles = [3,6,7,11], H = 8
输出: 4

输入: piles = [30,11,23,4,20], H = 5
输出: 30

输入: piles = [30,11,23,4,20], H = 6
输出: 23
*/

// var minEatingSpeed = function(piles, H) {

// };

// * 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。
function minEatingSpeed(piles,H) {
  // 套用搜索左侧边界的算法框架
  let left = 1;
  let right = Math.max(...piles);
  while (left <=right) {
      // 防止溢出
      let mid = Math.floor(left + (right - left) / 2);
      if (canFinish(piles, mid, H)) {
        // 到临界值时，锁定左侧边界
          right = mid-1;
      } else {
          left = mid + 1;
      }
  }
  //只有index限制在数组范围内才需要进行越界判断
  // 其他情况不需要
  return left;
}
// 时间复杂度 O(N)
function canFinish(piles,speed,H) {
  let time = 0;
  for (let n of piles) {
      time += timeOf(n, speed);
  }
  return (time <= H);
}
// piles = [30,11,23,4,20]  speed 23
function timeOf(n,speed) {
  // 吃不完，下一顿吃，加两个小时；吃完了，1个小时
  let temp= (n / speed) + ((n % speed > 0) ? 1 : 0);//总有刚好吃完的时候
  return Math.floor(temp)
}
console.log(minEatingSpeed([30,11,23,4,20],5));//30
console.log(minEatingSpeed([30,11,23,4,20],6));//23
console.log(minEatingSpeed([3,6,7,11],8));//4

// 借助二分查找技巧，算法的时间复杂度为 O(NlogN)。




//> LeetCode 1011. 在 D 天内送达包裹的能力


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
          right = mid-1;//! 锁定边界
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