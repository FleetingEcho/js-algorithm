/* 
那么，我们最终要实现的计算器功能如下：

1、输入一个字符串，可以包含+ - * / ()、数字、空格，你的算法返回运算结果。

2、要符合运算法则，括号的优先级最高，先乘除后加减。

3、除号是整数除法，无论正负都向 0 取整（5/2=2，-5/2=-2）。

4、可以假定输入的算式一定合法，且计算过程不会出现整型溢出，不会出现除数为 0 的意外情况。

比如输入如下字符串，算法会返回 9：

 " 3 * (2-6 /(3 -7)) "
*/
// > 1. 处理加减法

const { idText } = require("typescript");

/* 
现在进一步，如果输入的这个算式只包含加减法，而且不存在空格，
你怎么计算结果？我们拿字符串算式1-12+3为例，来说一个很简单的思路：
1、先给第一个数字加一个默认符号+，变成+1-12+3。
2、把一个运算符和数字组合成一对儿，也就是三对儿+1，-12，+3，
把它们转化成数字，然后放到一个栈中。
3、将栈中所有的数字求和，就是原算式的结果。

*/
function calculate1(s) {
  let stk=[];
  // 记录算式中的数字
  let num = 0;
  // 记录 num 前的符号，初始化为 +
  let sign = '+';
  for (let i = 0; i < s.length;i++) {
      let c = s[i];
      // 如果是数字，连续读取到 num
      if (!isNaN(c)) num = 10 * num + (Number(c));
      // 如果不是数字，就是遇到了下一个符号，
      // 之前的数字和符号就要存进栈中
      if (isNaN(c) || i == s.length - 1) {
          switch (sign) {
              case '+':
                  stk.push(num); break;
              case '-':
                  stk.push(-num); break;
          }
          // 更新符号为当前符号，数字清零
          sign = c;
          num = 0;
      }
  }
  // 将栈中所有结果求和就是答案
  let res = 0;
  while (stk.length!==0) {
      res += stk[stk.length-1];
      stk.pop();
  }
  return res;
}


// > 处理乘除法
/* 
其实思路跟仅处理加减法没啥区别，拿字符串2-3*4+5举例，
核心思路依然是把字符串分解成符号和数字的组合。

比如上述例子就可以分解为+2，-3，*4，+5几对儿，我们刚才不是没有处理乘除号吗，
很简单，其他部分都不用变，在switch部分加上对应的 case 就行了：

*/
const helper=(s)=>{
  let stack=[];
  // 记录 num 前的符号，初始化为 +
  let sign = '+';
  let num = 0;
  // while(s.length>0){
  for(let i=0;i<s.length;i++){
    let c=s[i];
      if(!isNaN(c) && c!==' '){
        num = num*10 + Number(c);
    }
      if(c == '(') {
        num = helper(s)
      }
      // 如果不是数字，就是遇到了下一个符号，
      // 之前的数字和符号就要存进栈中
      //# 防止空格进入判断 c != ' '
      if ( isNaN(c) && c != ' ' || s.length-1===i) {
        //# 乘除法优先于加减法体现在，乘除法可以和栈顶的数结合，而加减法只能把自己放入栈。
          switch (sign) {
              case '+':
                  stack.push(num); break;
              case '-':
                  stack.push(-num); break;
              case '*':
                stack.push(stack.pop() * num); break;
              case '/':
                stack.push(Math.trunc(stack.pop() / num)); break;
          }
          // 更新符号为当前符号，数字清零
          sign = c;
          num = 0;
      }
      // # 遇到右括号返回递归结果
      if(c == ')') break;
  }
  return stack.reduce((pre,cur)=>pre+cur)
}
function calculate(s) {
  s=s.split("");
  return helper(s);
}


// > 解决括号问题          递归，从 遇到(开始递归，遇到)结束递归：
// > 代码如上，  只是添加了进入括号和结束括号的部分

console.log(calculate("3*(2-6/(3-7))"))
// console.log(calculate("3+2*2"))
// console.log(calculate("(9+1)+(2*2)"))

// ! 练习
var calculate1 = function(s) {
  const res=s.split("");
  const helper1=(s)=>{
    let sign='+';
    let stack=[];
    let num=0;
    for(let i=0;i<s.length;i++){
      let cur=s[i];
      // 1.数字？
      if(cur!==' '&& !isNaN(cur)){
        num=num*10 +Number(cur);
      }
      // 3.括号？
      if(cur==='('){
        num=helper1(s)
      }
      // 2.加减乘乘除？
      if(cur!==' ' && isNaN(cur) ||s.length-1===i){
        switch(sign){
          case '+' : stack.push(num) ;break;
          case '-' : stack.push(-num) ;break;
          case '*' : stack.push(stack.pop()*num) ;break;
          case '/' : stack.push(Math.trunc(stack.pop()/num)) ;break;
        }
        num=0;
        sign=cur
      }
      if(cur===')') break;
    }
    return stack.reduce((pre,cur)=>pre+cur);
  }
  return helper1(res)  
};
console.log(calculate1("3*(2-6/(3-7))"))
console.log(calculate1("3+2*2"))
console.log(calculate1("(9+1)+(2*2)"))
