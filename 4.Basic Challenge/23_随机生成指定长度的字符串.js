const createCode=(len)=>{
  //创建数组 数字和字母
  var arr = ["a","b","c","d","e","f","g","A","B","C","D","E","F","G","1","2","3","4","5","6"];
  var code = "";

  //随机生成数字，从数组当中取len元素
  for(var i = 0; i < len; i++){
      //生成随机下标 [0,1]
      var index = parseInt(Math.random() * arr.length);
      code += arr[index]
  }
  return code;
}
//调用
console.log(createCode(4))