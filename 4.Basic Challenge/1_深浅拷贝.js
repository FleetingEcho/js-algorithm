//基本类型复制变量
// var a = 10;
// var b = a;
// b = 20;

// console.log("a:",a)
// console.log("b:",b)


//引用类型复制变量
// var a = {age: 20};
// var b = a
// b.age = 29

// console.log("a",a.age)
// console.log("b",b.age)


//利用JSON对象方法实现深拷贝
// var a  = { age : 20 }
// var b = JSON.parse(JSON.stringify(a))
// b.age  = 29

// console.log("a",a.age)
// console.log("b",b.age)

// 通过函数进行深拷贝
var person = {
  age: 20
}
function foo(person){
  person.age = 29
}
foo (person)


// 深拷贝

//!  backtrack(Array.from(track));//为了递归，深拷贝一份
//!  backtrack(Array.of(...track));//为了递归，深拷贝一份
console.log(person.age)  //29