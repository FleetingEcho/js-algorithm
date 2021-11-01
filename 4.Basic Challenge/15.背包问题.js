  // 存储背包中承受的最大重量
  var max = Number.MIN_VALUE;
  
  //i : 对第I个物品做出选择
  //currentWeight: 当前背包的总重量
  //goods: 存储每个物品的质量
  // n: 物品数量
  //weight: 背包应承受的重量

  const testPackage = (i, currentWeight, goods, n, maxWeight) =>{
      //终止条件
      if(currentWeight === maxWeight || i === n){
        //保存满足条件的最大值
          if(currentWeight > max){
              max = currentWeight
          }
          return
      }
      // 将当前物品装入背包
      // 判断当前物品装入背包之前是否超过背包的重量,如果已经超过当前背包重量，就不要就继续装了
      if(currentWeight+goods[i] <= maxWeight){
        testPackage(i+1, currentWeight+goods[i], goods, n, maxWeight)
      }

      testPackage(i+1, currentWeight, goods, n, maxWeight)
  }

  //调用
  // let a = [2,2,4,6,3,6,2,3,4,6]
  let a = [2,2,2,2,3,2,2]
  testPackage(0, 0, a, 7, 14)
  console.log(max)