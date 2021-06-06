

function videoStitching(clips,T) {
      clips=clips.sort((a,b)=>{
        if(a[0]===b[0])return a[1]-b[1];
        return a[0]-b[0]
      });
      let dp= new Array(T+1).fill(Number.MAX_SAFE_INTEGER);
      dp[0] = 0;
      // i时间
      for (let i = 1; i <= T; i++) {
          for (let item of clips) {
              if (item[0] < i && i <= item[1]) {
                  dp[i] = Math.min(dp[i], dp[item[0]] + 1);
              }
          }
      }
      console.log(dp);
      return dp[T] ==Number.MAX_SAFE_INTEGER ? -1 : dp[T];
}

// 状态方程  
// [
//   0, 1, 1, 1, 1,
//   2, 2, 2, 3, 3 
// ]
// console.log(videoStitching([[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]],9));
console.log(videoStitching([[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]],10));
// [0,3],[1,3],[2,5],[2,7];