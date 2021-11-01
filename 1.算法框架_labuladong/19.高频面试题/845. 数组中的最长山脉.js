/* 
输入：[2,1,4,7,3,2,5]
输出：5
解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。
示例 2：

输入：[2,2,2]
输出：0
解释：不含 “山脉”。

*/

function longestMountain(A){
  const len=A.length;
  let left=0, right=0;
  let i=0;
  let res=0;
    while(i<len-1){
      // 山峰上升
      while(i<len-1 && A[i+1]>A[i]){
        i++
        right=Math.max(right,i)
      }
      // 山峰下降
      while(right<len-1 && A[right]>A[right+1]){
        right++
      }
      // 筛选长度 
      if(i>left && i<right){
        res=Math.max(res,right-left+1)
      }
      left=i+1
      i++
    }
    return res
  }