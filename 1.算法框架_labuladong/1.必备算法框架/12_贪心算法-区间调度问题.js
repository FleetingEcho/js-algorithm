/* https://labuladong.gitbook.io/algo/dong-tai-gui-hua-xi-lie/tan-xin-suan-fa-zhi-qu-jian-tiao-du-wen-ti
区间调度问题
正确的思路其实很简单，可以分为以下三步：
1.从区间集合 intvs 中选择一个区间 x，这个 x 是在当前所有区间中结束最早的（end 最小）。
2.把所有与 x 区间相交的区间从区间集合 intvs 中删除。
3.重复步骤 1 和 2，直到 intvs 为空为止。之前选出的那些 x 就是最大不相交子集。


由于我们事先排了序，不难发现所有与 x 相交的区间必然会与 x 的 end 相交；
如果一个区间不想与 x 的 end 相交，它的 start 必须要大于（或等于）x 的 end：
*/
// 输入[ [1,2], [2,3], [3,4], [1,3] ]。输出1
function intervalSchedule(intvs) {
  if (intvs.length == 0) return 0;
  // 按 end 升序排序
  intvs.sort((a,b)=>{return a[1] - b[1]})
  // 至少有一个区间不相交
  let count = 1;
  // 排序后，第一个区间就是 x
  let x_end = intvs[0][1];
  for (let interval of intvs) {
      let start = interval[0];
      if (start >= x_end) {
          // 找到下一个选择的区间了
          count++;
          x_end = interval[1];
      }
  }
  return count; //返回的是最多有几个区间不会重叠
}

function eraseOverlapIntervals(intervals) {
  let n = intervals.length;
  return n - intervalSchedule(intervals);
}