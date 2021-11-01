const list=[1,2,3,-1,-200,4,11,100,2,5,9,1000];
// * 方法1
Array.prototype.max=function(){
  let max=this[0];
  this.forEach((item,index,self)=>{
    max=max >item? max :item
  })
  return max
}

console.log('方法1的结果是---'+list.max());

// * 方法2
const findMax=(array)=>{
  let max1;
 return  array.sort((a,b)=>{
    return b-a
  })[0]
}
console.log('方法2的结果是---'+ findMax(list));


// *方法3
const Max=(arr)=>{
  return Math.max.apply(null,arr)
}
console.log('方法3的结果是---'+ Max(list));

// * 方法4
const Max1=(arr)=>{
  return  Math.max(...arr)
}
console.log('方法4的结果是---'+ Max1(list));

// *方法5
// arr.sort()不带参数的时候，是按照字符编码的顺序进行排序的
const Max2=(arr)=>{
  return arr.sort()
}
// 有缺点
// console.log('方法5的结果是---'+ Max2(list));
