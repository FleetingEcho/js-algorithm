const str='Aa 1b23bcdef112 P'
const str1='  shadowSVultr333/ DowaaA'
console.log(str.charAt(2)); // ! 返回指定index的字符
console.log(str.charCodeAt(1));  // a的ASCII码是97

console.log(str.concat(str1)); //Aa 1b23bcdef112P  shadowSVultr333 aaA

console.log(String.fromCharCode(97)); // a

console.log( str.indexOf(' '));// 2
console.log( str.lastIndexOf(' '));// 15

console.log(str1.includes('3')); //true

console.log(str1.match(/dow/g)); //i不分大小写，g全局匹配，返回数组 [ 'dow', 'Dow' ]


console.log(str1.repeat(1)); //  shadowSVultr333 DowaaA
console.log(str1.repeat(2)); //  shadowSVultr333 DowaaA  shadowSVultr333 DowaaA


console.log(str1.replace(/dow/ig, "AAA?")); //  shaAAA?SVultr333 AAA?aaA
console.log(str1.replace("aaA", "AAA?")); //   shadowSVultr333 DowAAA?

console.log(str1.search('333/'));  // 返回index= 14
console.log(str1.search(/333\//ig)); // 返回index=14

console.log(str.split(' '));//! 根据空格来分 [ 'Aa', '1b23bcdef112', 'P' ]

// 把字符串分割为字符串数组。
console.log(str.split('1b23bcdef1'));//返回 [ 'Aa ', '12 P' ]  注意不返回分割内容

const str3='abc123 _AAA456NN8888';

// ! splice是数组方法
console.log(str3.slice(0,6)); //! 从index=0提取到index=6.    abc123
console.log(str3.slice(-1)); //! 尾部index=1开始到末尾   返回 8


// * 注意  substr是提取几位，  slice是提取到指定index

console.log(str3.substr(0,3));// abc

console.log(str.startsWith('Aa')); //true
console.log(str.startsWith('AAAA')); //false

// ! toString(startIndex, endIndex);

console.log(str.substring(0,5)); // Aa 1b 取不到末尾的index=5

const str4='A SDFaasasawcmnijidw123 20'
console.log(str4.toLowerCase());// a sdfaasasawcmnijidw123 20
console.log(str4.toUpperCase());// A SDFAASASAWCMNIJIDW123 20

// substr VS substring
// substring不指定end,则默认到最后
str.substring(start,end) // [start, end), 返回新的字符串
str.substring(start,end+1) // [start, end], 返回新的字符串
str.substr(start ,length)
/* 
substr:
如果start为负数，则start=str.length+start。
如果 length 为 0 或负数，将返回一个空字符串。
如果没有指定该参数，则子字符串将延续到stringObject的最后。
*/
// 去除两边空白
let str5=' 123 ASA '
console.log(str5.trim());//123 ASA

console.log(str5.valueOf());//  123 ASA 
console.log(str5.toString()); // 123 ASA

let str6=' abc defgh 123'
console.log(str6.endsWith('def',8)); // 总长度默认为str6的长度14，如果设置为8，那就是以def结尾了
console.log(str6.length) //14
const [a, b, c, d, e] = 'hello'
console.log(a)  // h 解构赋值

//!  字符串遍历

/* 
for(let i in str6){
  console.log(i)  // index
  console.log(str6[i]) //打印每个位置
}
for(let item of str6){
  console.log(item)  //注意 item是每一项， 而 let .. in 是指的index
}

const arr=[100,99,20,2,3];
for(let i in arr){
  console.log(i) //打印的是index
}
for(let i=0;i<str6.length;i++){
  console.log(str6[i])
}
*/


