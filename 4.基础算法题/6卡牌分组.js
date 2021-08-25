// * 需要将牌分成一组或者多组，每组牌数量相等，组内数字相同，每组都有 X 张牌，X>2时返回true
// 找一个集体公约数
// 收集每张牌的数量存入新数组arr
//  公约数x从2往上累加，最大不超过min(arr);
//  判断arr[i]能否被x整除
const list=[1,1,2,2]
// const list=[1,1,1,2,2,2,3,3,3,4,5]

const categories= (cards)=>{
  let obj={},max,min,arr=[],n=0
  if(cards.length<2) return false
  for(let i=0;i<cards.length;i++){
    if(obj[cards[i]]>0){
      obj[cards[i]]+=1
    }else{
      obj[cards[i]]=1
    }

  }
  for(i in obj){
    arr[n]=obj[i]
    n++
  }
  // console.log(arr); // [3,3,3,1,1]

    min=Math.min.apply(null,arr)
    max=Math.max.apply(null,arr)
    if(min==1 && min!=max) return false
    // 3，3，3，1，1
    let x=2, status
    while(x<= min){
      status=0;
      // 不能整除，则直接返回false
      for(let index=0;index<arr.length;index++){
        if(arr[index]%x!=0) status=1
      }
      if(status==0)
      return true
      x++
    }
    return false
  }
// }
// categories(list)
console.log(categories(list));