const a=('1'||0)
// 只要比0大，便会输出
console.log(a);

console.log(['1','2','100'].reduce((pre,cur)=>Number(pre)+Number(cur)));

const getSum=(nums)=>{
  let res=0;
  while(nums){
    res+=(nums%10);
    nums=Math.floor(nums/10);
  }
}

