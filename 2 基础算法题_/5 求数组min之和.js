const list=[1,2,3,4,5,6,7,8,1,100];
// const list=[1,2,3,4];
let temp=[];
let temp2=[];
let num=0
const Min=(arr)=>{
 return arr.sort((a,b)=>{
  return a-b
})[0]
}
// console.log(Min([3,4,1]));
const Sum=(list)=>{
  for(let i=0;i<list.length;i+=2){
    temp.push(list[i],list[i+1]);
    temp2.push(Min(temp))
    temp=[];
    // i+=1
 }
  temp2.map((item)=>{
    num+=item
  })
  return num
}

console.log(Sum(list));