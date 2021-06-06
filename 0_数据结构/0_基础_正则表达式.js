// * 字符串对象共有4个方法，可以使用正则表达式 match() 、 replace() 、 search() 和 split() 。
/* 
search    	检索与正则表达式相匹配的值。
match	      返回数组，包含匹配项。
replace    	替换与正则表达式匹配的子串
split	      把字符串分割为字符串数组。
*/
/* 
* RegExp的方法  
* RegExp.exec(str)	检索字符串中指定的值。返回找到的值，并确定其位置。
* RegExp.test(str)	检索字符串中指定的值。返回 true 或 false。
* RegExp.toString	  返回正则表达式本身，是个字符串。 "/ello/g"
*/
const str="Hello World!"
const reg=new RegExp('ello','g')  //[ 'ello', index: 1, input: 'Hello World!', groups: undefined ]
// console.log(reg.exec(str)) //返回值是一个数组，  会改变正则表达式
console.log(reg.test(str))  // true


const str1='  shadowSVultr333/ DowaaA'
console.log(str1.match(/dow/g)); //i不分大小写，g全局匹配，返回数组 [ 'dow']

console.log(str1.match(/dow/ig)); //i不分大小写，g全局匹配，返回数组 [ 'dow', 'Dow' ]

let res= escape("Need tips? Visit RUNOOB!")
console.log(res) // Need%20tips%3F%20Visit%20RUNOOB%21

// 目前没有RegExp.escape()这个函数,但可以自己写
RegExp.escape = function( value ) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
// let reg2=new RegExp()
let res1= RegExp.escape("Need.// tips? Visit RUNOOB!")
console.log(res1) // Need\.//\ tips\?\ Visit\ RUNOOB!


const test='0111101';
console.log(test.replace(/[^1]/g,''));
console.log(test);