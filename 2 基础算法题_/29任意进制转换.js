// 用babel跨文件夹会报错，需要进行进一步配置，先直接引入了
// const Stack = require('../1 数据结构/栈.js')
// import {Stack} from './index'  //报错

// 十进制转换为二进制
const decimalToBinary=(num)=>{
 let str="", temp=[], rem, decNumber=num
 while(decNumber>0){
  rem=Math.floor(decNumber % 2)
  temp.push(rem)
  decNumber= Math.floor(decNumber/ 2)
 }
 while(temp.length>0){
  str+= temp.pop().toString()  //确保转换为字符串
 }
 return str
}
// 除2不断取余数
console.log(decimalToBinary(233)) // 11101001
console.log(decimalToBinary(10)) // 1010
console.log(decimalToBinary(1000)) // 1111101000


const baseConverter=(num,base)=>{
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let str="", temp=[], rem, decNumber=num
  if (!(base >= 2 && base <= 36)) { 
    // 进制保护，因为digits只有0--Z
    return ''; 
    }
  while(decNumber>0){
   rem=Math.floor(decNumber % base)
   temp.push(rem)
   decNumber=Math.floor(decNumber/ base)   //return会直接退出循环函数， 而 break会继续执行后面的函数
    // continue
  }
  while(temp.length>0){
   str+= digits[temp.pop()]
  }
  return str
 }



console.log(baseConverter(100345, 2)); // 11000011111111001 
console.log(baseConverter(100345, 8)); // 303771 
console.log(baseConverter(100345, 16)); // 187F9 
console.log(baseConverter(100345, 35)); // 2BW0