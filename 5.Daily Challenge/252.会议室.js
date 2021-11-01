/* 
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/


function canAttendMeetings(intervals) {
  if(intervals.length===0) return true;
  intervals.sort((a, b) =>{
    // 终点降序
      if (a[0] == b[0]) {
          return b[1] - a[1];
      }
      return a[0] - b[0]; 
  });

  // 记录合并区间的起点和终点
  let left = intervals[0][0];
  let right = intervals[0][1];


  // 允许 相同时间；
  for (let i = 1; i < intervals.length; i++) {
      let intv = intervals[i];
      // 情况一，有覆盖
      if (left < intv[0] && right > intv[1]) {
          return false;
      }
      // 情况二，子区间
      if (right > intv[0] && right <= intv[1]) {
         return false;
      }
      // 情况三，完全不相交，更新起点和终点
      if (right < intv[0]) {
          left = intv[0];
          right = intv[1];
      }
  }

  return true;
}