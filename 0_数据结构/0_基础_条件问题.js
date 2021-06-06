/*
为false的值
1、 "" 空的字符串
2、 为 0 的数字
3、 为 null 的对象
4、 为 undefined 的对象
5、 布尔值 false
6. NaN既不是true也不是false
7. undefined值既不是true也不是false
8. null既不是true也不是false

9. 判断a为非空元素，  !!a即可
*/
// let a=""
// let a=0
// let a=undefined
// let a=null
// let a=NaN
let a
console.log(a==false);
console.log(a==true);
// !null==true
// !undefined==true
// !''==true

const test=()=>{
  let i=0;
  while(i<10){
  if(i==2){
    // return //跳出循环
    // i++
    // continue  //继续循环，但while的条件值必须有所改变
    break  //跳出循环
  }
  console.log(i);
  i++
  }
}
test()