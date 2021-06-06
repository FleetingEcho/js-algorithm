// 1、输入一个非负整数 n，请你计算阶乘 n! 的结果末尾有几个 0。
// > LeetCode 172阶乘后的零
function trailingZeroes(n) {
  let res = 0;
  let divisor = 5;
  while (divisor <= n) {
      res += Math.floor(n / divisor);
      divisor *= 5;
  }
  return res;
}
// ! 简化后
function trailingZeroes(n) {
  let res = 0;
  for (let d = n; d / 5 > 0; d = d / 5) {
      res += Math.floor(d / 5);
  }
  return res;
}

// ==============================================================

// > LeetCode 793 阶乘后K个零

// 现在是给你一个非负整数 K，问你有多少个 n，使得 n! 结果末尾有 K 个 0。
// 前文 二分查找如何运用 说过，对于这种具有单调性的函数，用 for 循环遍历，可以用二分查找进行降维打击，对吧？

function test(n) {
  let res = 0;
  for (let d = n; d / 5 > 0; d = d / 5) {
      res += Math.floor(d / 5);
  }
  return res;
}
/* 主函数 */
function preimageSizeFZF(K) {
  let top=K;
  // 左边界和右边界之差 + 1 就是答案
  return right_bound(K,top) - left_bound(K,top) + 1;
}

/* 搜索 test(n) == K 的左侧边界 */
function left_bound(target,K) {
  // let lo = 0, hi = Number.MAX_SAFE_INTEGER;
  let lo = 0, hi =Math.pow(10,10)
  while (lo < hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);
      if (test(mid) < target) {
          lo = mid + 1;
      } else if (test(mid) > target) {
          hi = mid;
      } else {
          hi = mid;
      }
  }

  return lo;
}

/* 搜索 test(n) == K 的右侧边界 */
function right_bound(target,K) {
  let lo = 0, hi =Math.pow(10,10)
  while (lo < hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);
      if (test(mid) < target) {
          lo = mid + 1;
      } else if (test(mid) > target) {
          hi = mid;
      } else {
          lo = mid + 1;
      }
  }

  return lo - 1;
}

// ! 方法2====================================================
//结果要么是0、要么是5
var preimageSizeFZF = function(K) {
  let min = 0,max = K+1;
  //2分查找
  while(min<max){
      let center = ~~((min+max)/2);
      let numZero = tools(center);
      if(numZero>K){
          max=center;
      }else if(numZero<K){
          min=center+1;
      }else{
          return 5;
      }
  }
  return 0;
  
  //5*m的阶乘的0的个数
  function tools(m){
      let result=m;
      while(m>0){
          m = Math.floor(m/5);
          result += m;
      }
      return result;
  }
};
