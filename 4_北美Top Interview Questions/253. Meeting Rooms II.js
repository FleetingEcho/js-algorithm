/* 
Given an array of meeting time intervals consisting of start and end times
[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

//!  写的有点问题，因为cover不到所有的情况！
// > 应该用优先级队列
var minMeetingRooms1 = function(intervals) {
  // base case
  if(intervals.length===0) return 0;
  let memo={};//用记忆化的形式解决
  let arr=intervals.sort((a,b)=>{
    // 相同起点区间的话，需要b[1]大的在前面，小的在后面
    // if (a[0] == b[0]) {
    //   return b[1] - a[1];}
    return a[0]-b[0]
  });
  console.log(arr);
  let count=1;
  for(let i=1;i<arr.length;i++){
    // 先查询
    let temp=Object.keys(memo).sort((a,b)=>a-b);
    if(temp.length!==0){
      let res=false;
      console.log(memo);
      for(let j=0;j<temp.length;j++){
        if(arr[i][0]>=Number(temp[j])){
          delete(memo[(temp[j])]);
          res=true;
          break;
        }
      }
      if(res===true) continue;
    }
    // 新的短
    if(arr[i-1][1]>=arr[i][1]){
      count++;
      continue
    };
    // 新的长。分左超了没超；
    if(arr[i-1][1]<arr[i][1]){
      if(arr[i-1][1]<=arr[i][0]){continue;}
      count++;
      // 
      if(!memo[arr[i-1][1]]){
        memo[arr[i-1][1]]=arr[i-1][1];
      }
      continue
    };
  }
  return count;
};

// > 优先级队列

var minMeetingRooms = function(intervals) {
  if(intervals.length===0)return 0;
  //按时间顺序排序
  intervals.sort((a,b)=>a[0]-b[0]);
  //优先队列
  let rooms = [];
  rooms.push(intervals[0]);
  let minRoomNum = 1;
  for(let i=1; i<intervals.length; i++){
    //  起始时间大于上一个的话，
    // console.log(rooms);
      if(intervals[i][0]>=rooms[0][1]){
          rooms.shift();
      }
      rooms.push(intervals[i]);
      minRoomNum =Math.max(minRoomNum,rooms.length);
      //每轮队列更新后维护优先级（结束时间越早，排序越前）
      rooms.sort((a,b)=>a[1]-b[1]);
  } 
  return minRoomNum;
};

var minMeetingRoom2=(intervals)=>{
  const arr=intervals.sort((a,b)=>a[0]-b[0])
  let queue=[];
  queue.push(arr[0])
  let minRoom=1;
  console.log(queue);
  for(let i=1;i<arr.length;i++){
    let temp=arr[i];
    let tar=queue[0]
    if(temp[0]>=tar[1]){
      queue.shift();
    }
    queue.push(temp);
    queue.sort((a,b)=>a[1]-b[1])
    minRoom=Math.max(queue.length,minRoom);
  }
  return minRoom
}

// console.log(minMeetingRooms([[0, 30],[5, 10],[15, 20],[16,18]]));//3
// console.log(minMeetingRooms([[4,9],[4,17],[9,10]]));
// console.log(minMeetingRooms([[13,15],[1,13]]));//1
// console.log(minMeetingRooms([[2,11],[6,16],[11,16]]));//2
// console.log(minMeetingRooms([[6,15],[13,20],[6,17]]));//2
// console.log(minMeetingRooms([[1,8],[6,20],[9,16],[13,17]]));//2
console.log(minMeetingRooms([[2,15],[36,45],[9,29],[16,23],[4,9]]));//2
console.log(minMeetingRoom2([[2,15],[36,45],[9,29],[16,23],[4,9]]));//2

