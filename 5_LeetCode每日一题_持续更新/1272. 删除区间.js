// 1272. 删除区间
function removeInterval(intervals, toBeRemoved) {
  let toL = toBeRemoved[0], toR = toBeRemoved[1];
  let ans=[];
  for (let i = 0; i < intervals.length; ++i) {
      let x = intervals[i][0], y = intervals[i][1];
      if (y<=toL || x>=toR) {  //不相交
          ans.push([x, y]);
      }
      else {
        // 相交
          if (toL > x) {
              ans.push([x, toL]);
          }
          if (toR < y) {
              ans.push([toR, y]);
          }
      }
  }
  return ans;
}
