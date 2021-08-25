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
