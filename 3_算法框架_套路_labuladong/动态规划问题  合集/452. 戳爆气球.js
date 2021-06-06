/* 
输入:
[[10,16], [2,8], [1,6], [7,12]]

输出:
2

解释:
对于该样例，我们可以在x = 6（射爆[2,8],[1,6]两个气球）和 
x = 11（射爆另外两个气球）。

*/

function findMinArrowShots(intvs) {
  if (intvs.length == 0) return 0;
  // 按 end 升序排序
  intvs.sort((a,b)=>{return a[1] - b[1]})
  // 至少有一个区间不相交
  let count = 1;
  // 排序后，第一个区间就是 x
  let x_end = intvs[0][1];
  for (let interval of intvs) {
      let start = interval[0];
      if (start > x_end) {
          // 找到下一个选择的区间了
          count++;
          x_end = interval[1];
      }
  }
  return count; //返回的是最多有几个区间不会重叠
}