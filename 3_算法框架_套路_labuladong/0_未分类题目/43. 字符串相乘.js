

function multiply(num1, num2) {
  let m = num1.length, n = num2.length;
  // 结果最多为 m + n 位数
  let res=new Array(m+n).fill(0);
  // 从个位数开始逐位相乘
  for (let i = m - 1; i >= 0; i--){
    for (let j = n - 1; j >= 0; j--) {
      let mul = (num1[i]) * (num2[j]);
      // 乘积在 res 对应的索引位置
      let p1 = i + j, p2 = i + j + 1;
      // 旧值叠加到 res 上
      let sum = mul + res[p2];
      res[p2] = sum % 10; //个位
      res[p1] += Math.floor(sum / 10); //十位
    }
  }
  
  // 结果前缀可能存的 0（未使用的位）
  // 找到第一个不为0的数字
  // > 但是，for循环避免不了 ["0","0"]
  let i = 0;
  console.log(res)
  while (i < res.length && res[i] == 0){ i++;}
  // 这里返回的i是第一个不为0的数，若直到length-1都未找到，则i++后就是res.length
  if(i===res.length) return "0";
  return res.filter((v,index)=>index>=i).join("")
}



console.log(multiply('123','456'));
