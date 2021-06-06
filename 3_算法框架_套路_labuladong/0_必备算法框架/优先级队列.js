






// > 最小会议室问题，用优先级队列

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
    console.log(rooms);
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
  const arr=intervals.sort((a,b)=>a-b)
  let queue=[];
  queue.push(arr[0])
  let minRoom=1;
  for(let i=1;i<arr.length;i++){
    let temp=arr[i];
    if(temp[0]>=queue[0][1]){
      queue.shift();
      continue
    }
    queue.push(temp);
    minRoom=Math.max(queue.length,minRoom);
    queue.sort((a,b)=>a[1]-b[1])
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
console.log(minMeetingRooms2([[2,15],[36,45],[9,29],[16,23],[4,9]]));//2