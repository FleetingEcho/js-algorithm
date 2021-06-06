//coins : 面值
//amount： 总价
function minCoinChange(coins, amount){
  let change = [], total = 0;
  for(let i = coins.length; i >= 0; i--){
      let coin = coins[i]
      while(total + coin <= amount){
          change.push(coin);
          total += coin
      }
  }
  return change;
}

//调用
console.log(minCoinChange([1,2,5,10,20,50,100],628))