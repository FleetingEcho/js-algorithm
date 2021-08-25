/*  Number的属性
constructor	                 返回对创建此对象的 Number 函数的引用。
MAX_VALUE                   可表示的最大的数。
MIN_VALUE	                   可表示的最小的数。
NEGATIVE_INFINITY	           负无穷大，溢出时返回该值。
NaN	                         非数字值。
POSITIVE_INFINITY	            正无穷大，溢出时返回该值。
prototype	                   允许你可以向对象添加属性和方法。
EPSILON:                     表示 1 和比最接近 1 且大于 1 的最小 Number 之间的差别
MIN_SAFE_INTEGER:             表示在 JavaScript中最小的安全的 integer 型数字 (-(2^53 - 1))。
MAX_SAFE_INTEGER:             表示在 JavaScript 中最大的安全整数（2^53 - 1）

*/


/* 
 方法	               描述
isFinite	         检测指定参数是否为无穷大。
toExponential()	 把对象的值转换为指数计数法。
toFixed(x)        	把数字转换为字符串，结果的小数点后有指定位数的数字。
toPrecision(x)	   把数字格式化为指定的长度。
toString()        	把数字转换为字符串，使用指定的基数。
valueOf()	         返回一个 Number 对象的基本数字值。
isInteger():       用来判断给定的参数是否为整数。
isSafeInteger():    判断传入的参数值是否是一个"安全整数"。
*/

// const num=new Number(15.123);
const a=15.123456

// console.log(Number.isFinite(a))  // true
// console.log(a.toExponential())  // "5.77774343e+0"

/*
* toFixed()  写几位就小数点保留几位，  不写不保留
* (11.1234567).toFixed()    ==> "11"
* (11.1234567).toFixed(7)     ==> "11.1234567"
*/


/* 
*  (33).toString()    ==>   "33"     默认转换为10进制的字符串
*  (33).toString(2)   ==>  "100001"  转为2进制的字符串
*  (33).toString(8)   ==>  "41"      转为8进制的字符串
*  (33).toString(10)    ==>   "33"     转换为10进制的字符串

*/


/* 
* 把数字格式化为指定的长度:
*  (13.123456).toPrecision(1)     ==> "1e+1"
*  (13.123456).toPrecision(2)     ==> "13"
*  (13.123456).toPrecision(4)     ==> "13.12"

*/