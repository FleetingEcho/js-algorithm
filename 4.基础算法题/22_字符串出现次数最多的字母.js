//调用
let str = "adfasdfasdfadsfasdfasdfsdfbbbbbbssssbbbbbbbbbbbbbbbb";
const Max=(arr)=>{
    return Math.max.apply(null,arr)
}
const maxLetter=(str)=>{
  const arr=str.split("");
  let temp={},maxValIndex,maxString;
  arr.map((item)=>{
      if(temp[item]){
        temp[item]++
        return
      }
      temp[item]=1
  })
  const values=Object.values(temp)
  const maxVal=Max(values)
  values.some((item,index)=>{
    if(maxVal===item){
        maxValIndex=index
        maxString=Object.keys(temp)[index]
        return;
    }
  })
  console.log(`String is: ${maxString},Number is ${maxVal}`);

}
maxLetter(str)


