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

function timeOf(n,speed) {
  let temp= (n / speed) + ((n % speed > 0) ? 1 : 0);
  return Math.floor(temp)
}
console.log(minEatingSpeed([30,11,23,4,20],5));//30
console.log(minEatingSpeed([30,11,23,4,20],6));//23
console.log(minEatingSpeed([3,6,7,11],8));//4

// 借助二分查找技巧，算法的时间复杂度为 O(NlogN)。

