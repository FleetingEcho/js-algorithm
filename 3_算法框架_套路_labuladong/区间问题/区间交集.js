
/* 
|    [1,2,3]
|         [3,4,5]
|              [5,6,7]
|       [2,3,4]
|                        [10,11,12]
↓

*/
// > 解决区间问题的思路一般是先排序，以便操作.

var intervalIntersection=function(A,B){
  let i=0,j=0; //双指针
  let res=[];
  while(i<A.length && j<B.length){
    let a1=A[i][0], a2=A[i][1]
    let b1=B[j][0], b2=B[j][1]
    // 有交集
    if(b2>=a1&&b1<=a2){
      let temp=[ Math.max(a1,b1),Math.min(a2,b2)]
      res.push(temp)
    }
    // 指针前进
    if(b2<a2) j+=1;//判断B下一个
    else i+=1 //判断A下一个
  }
  return res
}

console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]));
// [ [ 1, 2 ], [ 5, 5 ], [ 8, 10 ], [ 15, 23 ], [ 24, 24 ], [ 25, 25 ] ]