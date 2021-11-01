

function climbStairs(n){
  let over=1000000007;
  const dp=new Array(n).fill(n);
  dp[0]=1;
  dp[1]=1;
  dp[2]=2;
  for(let i=3;i<=n;i++){
      dp[i]=(dp[i-2]+dp[i-1])%over
  }
    return dp[n];
}
console.log(climbStairs(8))
