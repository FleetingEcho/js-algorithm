/* 
Given a positive integer n, find the least number of perfect square numbers 
(for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.


Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/

//! 基本BFS题目
var numSquares = function(target) {
  let min_sqrt_n=Math.sqrt(target);
  let queue=[] // 核心数据结构
  let visited=new Set() // 避免走回头路
  let start=0;
  queue.push(start); // 将起点加入队列
  visited.add(start); 
  let step = 0; // 记录扩散的步数
  while (queue.length!==0) {
    let size = queue.length;
    /* 将当前队列中的所有节点向四周扩散 */
    for (let i = 0; i < size; i++) {
        let cur = queue.shift();
        /* 划重点：这里判断是否到达终点 */
        if (cur===target) return step;
        // ! 将 cur 的相邻节点加入队列 
        for (let j=1;j<=min_sqrt_n;j++){ //cur.adj()泛指 cur 相邻的节点
          let sum=cur+Math.pow(j,2);
          if(sum>target) break;
          //  queue.push(sum);   ------直接push也行
           if(!visited.has(sum)){
            queue.push(sum);
            visited.add(sum)
          }
        }
    }
    step++;
  }
};


/* 
! 动态规划做法
*/
function numSquares1(n){
  let dp=new Array(n+1).fill(n);
  dp[0]=0;
  console.log(dp);
  for(let i=1;i<=n;i++){
    for(let j=Math.floor(Math.sqrt(i));j>=0;j--){
      dp[i]=Math.min(dp[i],
                     dp[i-Math.pow(j,2)]+1 
                    )
      console.log(dp)
    }
  }
  return dp[n]
}



console.log(numSquares(12));
console.log(numSquares1(12));