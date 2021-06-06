/* 
* 凡是属性名属于 Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
! 可以接受一个字符串作为参数
* Symbol作为属性名时候不能进行遍历，只有一种方法： Object.getOwnPropertySymbols()
* Symbol值不能与其他类型的值进行运算，会报错。
*/


let s1 = Symbol("foo"); 
let s2 = Symbol("foo");
console.log(s1===s2)  //! false

let s3 = Symbol(); 
let s4 = Symbol(); 
// s1 === s2 // false

// * Symbol值可以显式转为字符串。Symbol值也可以转为布尔值，但是不能转为数值Number
console.log(String(s1))  // Symbol(foo)


var obj = {}; 
var a = Symbol('a'); 
var b = Symbol('b'); 
obj[a] = 'Hello'; 
obj[b] = 'World';
console.log(obj)
/* 
{ [Symbol(a)]: 'Hello', [Symbol(b)]: 'World' }
*/
console.log(obj[a])  // 'Hello'

// * 遍历属性名
let objectSymbols = Object.getOwnPropertySymbols(obj); // [ Symbol(a), Symbol(b) ]
console.log(objectSymbols)  

//*  如果想重新使用同一个Symbol值， Symbol.for 方法可以做到这一点。
/* 
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo'); 
s1 === s2 // true
*/


/*
*  Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
var s1 = Symbol.for("foo"); 
Symbol.keyFor(s1) // "foo"
*/

