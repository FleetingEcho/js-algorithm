//步骤
// 回文----正反都一样
//1.for遍历当前字符串
//2.判断前后比较是否相等
function palindRome(str){
  var len = str.length;
  let res=true
  //1.for遍历当前字符串
  for(var i = 0; i < len; i++){
      //abcba
      //2.判断前后比较是否相等
      if(str.charAt(i) === str.charAt(len-1-i)){
        continue
      }else{
         res=false;
         break;
      }
  }
  return res
}

//调用
let str = "abccccc"
console.log(palindRome(str))