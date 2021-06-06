// ! 目前不太正确。。。 只有方法2正确
/* 
https://leetcode-cn.com/problems/super-egg-drop/solution/ji-ben-dong-tai-gui-hua-jie-fa-by-labuladong/

输入：K = 1, N = 2
输出：2
解释：
鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
如果它没碎，那么我们肯定知道 F = 2 。
因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
示例 2：

输入：K = 2, N = 6
输出：3
示例 3：

输入：K = 3, N = 14
输出：4
*/
// ! 目前不正确，修改ing
function superEggDrop(K, N){
  // let memo = new Array(K + 1).fill(0).map(v=>new Array(N + 1).fill(-1))
  let memo=new Map();
  function dp(K, N){
    // base case
    if(K == 1) return N
    if(K == 0) return 0
    let res =Number.POSITIVE_INFINITY;
    //  避免重复计算
    if (memo.has(`${K}-${N}`)) return memo.get(`${K}-${N}`)
    // console.log(1111);
    //  穷举所有可能的选择
    for(let i=1;i<=N;i++){
      res = Math.min(res, Math.max(
              dp(K - 1, i - 1),//碎了
              dp(K, N - i)//没碎
              ) + 1 //在第i楼扔了一次
        )
    }
    //  记入备忘录
    memo.set(`${K}-${N}`,res)
    // console.log(res);
    // console.log(memo);
    return res
  }
  return dp(K, N)
}
console.log(superEggDrop(3,14));


// ! 正确的二分法解法！！！！
/* 
[
  [0, 0, 0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0, 0],
]
*/
// 返回的m是最坏情况下移动几层才能测出结果
function superEggDrop1(K,N){
  let dp = new Array(K + 1).fill(0).map(v=>new Array(N + 1).fill(0))
  console.log(dp);
  let m = 0; // m是扔鸡蛋的次数，上限就是边界
  // 总共的层数是dp[k][m]

  // while 循环结束的条件是 dp[K][m] == N，
  // 也就是给你 K 个鸡蛋，测试 m 次，最坏情况下最多能测试 N 层楼。
  while (dp[K][m] < N) {
    m++;
    for (let k = 1; k <= K; k++){
      dp[k][m] = dp[k][m - 1] + dp[k - 1][m - 1] + 1;
    }
  }
  return m;
  
}
console.log(superEggDrop1(3,14));
console.log(superEggDrop1(2,6));


/* 

dp[k][m - 1] 就是楼上的楼层数，因为鸡蛋个数 k 不变，
也就是鸡蛋没碎，扔鸡蛋次数 m 减一；

dp[k - 1][m - 1] 就是楼下的楼层数，因为鸡蛋个数 k 减一，
也就是鸡蛋碎了，同时扔鸡蛋次数 m 减一。

dp[k][m] = n
# 当前有 k 个鸡蛋，可以尝试扔 m 次鸡蛋
# 这个状态下，最坏情况下最多能确切测试一栋 n 层的楼

# 比如说 dp[1][7] = 7 表示：
# 现在有 1 个鸡蛋，允许你扔 7 次;
# 这个状态下最多给你 7 层楼，
# 使得你可以确定楼层 F 使得鸡蛋恰好摔不碎
# （一层一层线性探查嘛）


*/