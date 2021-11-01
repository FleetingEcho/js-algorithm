/* 

! 所谓区间问题，就是线段问题，让你合并所有线段、找出线段的交集等等。主要有两个技巧：
> 1、排序。常见的排序方法就是按照区间起点排序，或者先按照起点升序排序，若起点相同，
>    则按照终点降序排序。当然，如果你非要按照终点排序，无非对称操作，本质都是一样的。

> 2、画图。就是说不要偷懒，勤动手，两个区间的相对位置到底有几种可能，
>    不同的相对位置我们的代码应该怎么去处理。
*/


//> LeetCode 1288 删除被覆盖的区间
/* 
输入：intervals = [[1,4],[3,6],[2,8]]
输出：2
解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。

*/
function removeCoveredIntervals(intvs) {
  // 按照起点升序排列，起点相同时降序排列
  // ! 重要！ 
  /* 
  对于这两个起点相同的区间，我们需要保证长的那个区间在上面（按照终点降序），
  这样才会被判定为覆盖，否则会被错误地判定为相交，少算一个覆盖区间。
  */
  intvs.sort((a, b) =>{
    // 终点降序
      if (a[0] == b[0]) {
          return b[1] - a[1];
      }
      return a[0] - b[0]; 
  });

  // 记录合并区间的起点和终点
  let left = intvs[0][0];
  let right = intvs[0][1];

  let res = 0;
  for (let i = 1; i < intvs.length; i++) {
      let intv = intvs[i];
      // 情况一，找到覆盖区间
      if (intv[0]>=left && intv[1]<=right) {
          res++;
      }
      // 情况二，找到相交区间，合并
      if (right >= intv[0] && right <= intv[1]) {
          right = intv[1];
      }
      // 情况三，完全不相交，更新起点和终点
      if (right < intv[0]) {
          left = intv[0];
          right = intv[1];
      }
  }

  return intvs.length - res;
}



// > 区间合并问题
//> LeetCode 56   合并区间

/* 
输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/

// ! intervals 形如 [[1,3],[2,6]...]


/* 
|    [1,2,3]
|         [3,4,5]
|              [5,6,7]
|       [2,3,4]
|                        [10,11,12]
↓

*/
function merge(intervals){
  if(intervals.length===0) return []
  //  按区间的 start 升序排列
  intervals.sort((a,b)=>a[0]-b[0])
  let res = []
  res.push(intervals[0])

  for(let i=1;i<intervals.length;i++){
    curr = intervals[i]
    //  res 中最后一个元素的引用
    last = res[res.length-1]
    if( last[1]>=curr[0])
        //  找到最大的 end
        last[1] = Math.max(last[1], curr[1])
    else
        // 处理下一个待合并区间
        res.push(Array.from(curr))
  }
  return res
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));


//>  区间交集问题  LeetCode 986 


// > 解决区间问题的思路一般是先排序，以便操作.

var intervalIntersection=function(A,B){
  let i=0,j=0; //双指针
  let res=[];
  while(i<A.length && j<B.length){
    let a1=A[i][0], a2=A[i][1]
    let b1=B[j][0], b2=B[j][1]
    // 有交集
      // 比如 [1,5],[0,3];
    if(a1<=b2&&a2>=b1){
      let temp=[ Math.max(a1,b1),Math.min(a2,b2)]
      res.push(temp)
    }
    // 指针前进
    // [1,5],[0,3]
    if(b2<a2) j+=1;//判断B下一个
    else i+=1 //判断A下一个
  }
  return res
}
console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]));
// [ [ 1, 2 ], [ 5, 5 ], [ 8, 10 ], [ 15, 23 ], [ 24, 24 ], [ 25, 25 ] ]