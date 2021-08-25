//  LeetCode 204 计算质数(素数)


/* 
12 = 2 × 6
12 = 3 × 4
12 = sqrt(12) × sqrt(12)
12 = 4 × 3
12 = 6 × 2
>1.可以看到，后两个乘积就是前面两个反过来，反转临界点就在 sqrt(n)。


首先从 2 开始，我们知道 2 是一个素数，那么 2 × 2 = 4, 3 × 2 = 6, 4 × 2 = 8... 都不可能是素数了。
然后我们发现 3 也是素数，那么 3 × 2 = 6, 3 × 3 = 9, 3 × 4 = 12... 也都不可能是素数了。
> 1个数的倍数就不是素数了
*/
function countPrimes(n) {
   // 将数组都初始化为 true
  let isPrim = new Array(n).fill(true);
  // i 不需要遍历到 n，而只需要到 sqrt(n) 即可。
  for (let i = 2; i * i < n; i++) {
    if (isPrim[i]){
      // i 的倍数不可能是素数了
      for (let j = i * i; j < n; j += i) 
      isPrim[j] = false;
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++)
      if (isPrim[i]===true) count++;
  return count;
}