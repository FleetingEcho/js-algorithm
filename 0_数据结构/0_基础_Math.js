// Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()。

/* 

!  属性	      描述
* E	       返回算术常量 e，即自然对数的底数（约等于2.718）。
* LN2     返回 2 的自然对数（约等于0.693）。
* LN10	  返回 10 的自然对数（约等于2.302）。
* LOG2E	  返回以 2 为底的 e 的对数（约等于 1.4426950408889634）。
* LOG10E	返回以 10 为底的 e 的对数（约等于0.434）。
* PI	    返回圆周率（约等于3.14159）。
* SQRT1_2	返回 2 的平方根的倒数（约等于 0.707）。
* SQRT2	  返回 2 的平方根（约等于 1.414）

*/

//*  Math.trunc()   Math.trunc 方法用于去除一个数的小数部分，返回整数部分。
//*    内部只接受数值，可以先强制进行数值转换   Number()
// *  对于空值和无法截取整数的值，返回NaN。
// Math.trunc(4.9) // 4 
// Math.trunc(-4.1) // -4
// Math.trunc(NaN);  NaN 
// Math.trunc('foo'); // NaN 
// Math.trunc(); // NaN



//* Math.sign()   判断一个数到底是正数、负数、还是零   1,  -1, 0,   -0,  NaN
/* 
Math.sign(-5) -1 
Math.sign(5) // +1 
Math.sign(0) // +0 
Math.sign(-0) // -0
Math.sign('foo'); // NaN 
Math.sign(); // NaN
*/
// const  x= Math.PI // 3.141592653589793
// const x= Math.E   //算数常量e  2.718281828459045
// const x= Math.LN10   // 10的自然对数 2.302

// * 正弦值  余弦值
// const x=Math.abs(-100)  //100
// const x=Math.cos(3)   //! 返回该数字的余弦值   cos() 返回的是 -1.0 到 1.0 之间的数。
// const x=Math.sin(3)   // ! 返回该数字的正弦值     sin() 返回的是 -1.0 到 1.0 之间的数。

// * Math.round()   四舍五入
// const x= Math.round(1.3)   //1
// const x= Math.round(1.4999999)   // 1
// const x= Math.round(1.5)   // 2
// console.log(x)  


// * Math.floor()   进行向下取整

// const x= Math.floor(1.999999)   //  1
// const x= Math.floor(2.00000001)   //  2
// console.log(x)


// * Math.ceil()   向上取整
// const x= Math.ceil(2.00000001)   //  3
// const x= Math.ceil(2.99999)   //  3
// console.log(x)  //


//* Math.pow(x,y)    x的y次幂

// const x= Math.pow(2,3) // 8
// console.log(x)

//* Math.random()  返回0-1 之间的随机数

// const x= Math.round(Math.random()*10)  //四舍五入取整数
// console.log(x)
//! [0, 1) 
Math.random();

// ! 获取 [a,b)   -----用的最多      
Math.floor((Math.random()*(b-a))+a)

// ! 获取[a,b]随机数 
Math.floor((Math.random()*(b+1-a))+a)  //保证能取到b 

// ! 获取 (a,b]  
Math.floor( (Math.random()*(b+1-a))+a+1)

// ! 获取 (a,b)
Math.floor((Math.random()*(b-a))+a+1) //Math.random(b)本身就取不到b



// * Math.sqrt()  返回数字的平方根

console.log( Math.sqrt(16) ) // 4
console.log( Math.sqrt(8) ) // 2.828

// * Math.max()  与 Math.min()

// ! 求数组最大值

const arr=[1,-100,2,3,100,2,3232]
// ! 如果内部有非数字， 返回NaN
// const arr=[1,2,3,100,2,3232, "avc"]
console.log(Math.max(...arr))  //3232
console.log(Math.min(...arr))  // -100