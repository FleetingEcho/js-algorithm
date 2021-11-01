//数组排序
//最大总和
var arrayPairSum = function(num){
  let sum = 0;
  //数组排序
  num.sort((a,b) => {return b - a;});
  for(let i = 1; i < num.length; i = i + 2){
      sum += num[i]
  }
  return sum
}

//调用
let arr = [1,4,3,-100,-1,3,-10,200,2,5,6,7,8,9]
console.log(arrayPairSum(arr)) //4

// sort排序
const Sort=(arr)=>{
  return arr.sort((a,b)=>{ return b-a})
}
console.log(Sort(arr));
