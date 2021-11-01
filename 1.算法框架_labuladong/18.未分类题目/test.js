let str="abcdefg";
str[0]='???'
console.log(str);

let dp = new Array(4).fill(0).map((item,index,self)=>{
  return self=new Array(6).fill(0)
});
console.log(dp);