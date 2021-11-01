//  intervals 形如 [[1,3],[2,6]...]

/* 
|    [1,2,3]
|         [3,4,5]
|              [5,6,7]
|       [2,3,4]
|                        [10,11,12]
↓

*/
// > 解决区间问题的思路一般是先排序，以便操作.
function merge(intervals){
  
  if(intervals.length==0) return []
  //  按区间的 start 升序排列
  intervals.sort((a,b)=>a[0]-b[0]);
  let res = []
  res.push(intervals[0])

  for(let i=1;i<intervals.length;i++){
    curr = intervals[i]
    //  res 中最后一个元素的引用
    last = res[res.length-1];
    if(curr[0] <= last[1])
        //  找到最大的 end
        last[1] = Math.max(last[1], curr[1])
    else
        // 处理下一个待合并区间
        res.push(Array.from(curr))
  }
  return res
}


console.log(merge([[1,3],[2,6],[8,10],[15,18]]));