// array.splice(index,1，3,4,5); 从index开始删除1个数字，添加3,4,5
/* 
! 创建一个递增数组，从0开始
    方法1
  let dp=new Array(amount+1);
  for(let i=0;i<amount+1;i++){
    dp[i]=i
  }
  方法2
   var arr = new Array(100).keys();
   console.log(Array.from(arr));
! 3最好的办法
　var dp = Array.from({length:amount+1}, (v,k) => k);

*/
// splice拼接按index-个数--补充元素   slice分片---按index
const arr = [...s] // ["a","b","c"]
// !    一键去除数组中重复数据     5 和 "5" 是两个不同的值。
// !    let arr = [3, 5, 2, 2, 5, 5];   let unique = [...new Set(arr)];
const temp=[0,1,2,3,4,5,6,7]
console.log(temp.findIndex((val)=>{return val===7})); //找到index===6
console.log(temp.slice(1));//从index==1取到最后  [1,2,3,4,5,6,7]
console.log(temp.slice(-1));// -1为尾部第一个数组到最后，[7]
console.log(temp.slice(-3));// -1为尾部第一个数组到最后，[5,6,7]
console.log(temp.slice(1,3));// [1,3)

console.log(temp.splice(0,3));//返回的是被删除的部分  [ 0, 1, 2 ]
console.log(temp); //[ 3, 4, 5, 6, 7 ]

//!  backtrack(Array.from(track));//为了递归，深拷贝一份
//!  backtrack(Array.of(...track));//为了递归，深拷贝一份
//* concat
/* 
const zero = 0; 
const positiveNumbers = [1, 2, 3]; 
const negativeNumbers = [-3, -2, -1]; 
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers); //[-3, -2, -1, 0, 1,  2,  3 ]
console.log(negativeNumbers); // ! concat不会改变原数组
*/


// * every 方法会迭代数组中的每个元素，直到返回 false，，   必须return true 才会进下一个循环
/* 
const temp = [1,2,3,4,5,6,7,8,9,10]
temp.every((item,index,self)=>{
  if(item>3 && item<8){
    return false
  }
  console.log(item);
  return true  //必须return true 才会进下一个循环
})
*/
// * some会迭代数组的每个元素， return true 跳出循环 ,  会自动进入下一个循环，return false会导致函数变慢
/* const temp = [1,2,3,4,5,6,7,8,9,10]
temp.some((item,index,self)=>{
  if(item>3 && item<8){
    return true  // * 跳出循环
  }
  console.log(item);
}) */

// *  数组最好不要用delete清除元素，会变成undefined。   而要使用arr.splice(index,1)清除元素，
// * forEach遍历会遍历所有元素，  想跳出只能用try catch， try到条件然后抛出异常

// *  map方法  return是到下一次循环，不关注return的是true/false   break和continue无效

/* 
const temp = [1,2,3,4,5,6,7,8,9,10]
temp.map((item,index,self)=>{
  if(item>3 && item<8){
    return false
  }
  console.log(item);// 1,2,3,8,9,10
})
*/

// ! filter函数     只筛选返回true的数组元素。

/* 
const temp = [1,2,3,4,5,6,7,8,9,10]
const temp1=temp.filter((item,index,self)=>{
  if(item>3 && item<8){
    return false
  }else{
    return true
  }
})
console.log(temp1); //新数组只包含返回true的值[ 1, 2, 3, 8, 9, 10 ]
*/


/* 

* copyWithin 复制数组中一系列元素到同一数组指定的起始位置
* keys 返回包含数组所有索引的@@iterator
* values 返回包含数组中所有值的@@iterator
* entries 返回包含数组所有键值对的@@iterator
* from 根据已有数组创建一个新数组
* of 根据传入的参数创建一个新数组
* fill 用静态值填充数组
* includes 如果数组中存在某个元素则返回 true，否则返回 false。E2016 新增
* find 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素
* findIndex 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素在数组中的索引

*/

// ! for.. of遍历 ，  return和break会跳出当前循环，continue进入下一个循环
/* const temp = [1,2,3,4,5,6,7,8,9,10]
for(let item of temp){
  if(item>5) return
  console.log(item); 
  break
} */

// ! for... in是用来遍历 对象Obj的！   return/break 跳出循环 ,  continue进下一个循环

// const temp ={"apple":'iphone', "honda":'accord', "BMW":'280i'}
/* for(let item in temp){
  if(item>5) return
  console.log(item); // apple
  console.log(temp[item]) //iphone
  break
} */
/* for(let item in temp){
  if(item>5) return
  console.log(Object.prototype.hasOwnProperty.call(temp,"apple"));  //返回true
  return  //会跳出循环-----不关注return true/false
    continue  //进入下一个循环
}
 */


//! entries 种从数组中得到迭代器的方法
// const temp =[100,200,1,2,3,30,22]
// const temp2=Object.entries(temp)
// console.log(temp2);
/* 数组
[
  [ '0', 100 ],
  [ '1', 200 ],
  [ '2', 1 ],
  [ '3', 2 ],
  [ '4', 3 ],
  [ '5', 30 ],
  [ '6', 22 ]
]
*/
// ! keys    返回数组的键---index   方法1： arr.values()  需要不停调用 temp2.next().value才能获取值
// !                               方法2: Object.values(arr)
// ! values  返回数组的值---arr[index]
/* const temp =[100,200,1,2,3,30,22]
const temp2=Object.keys(temp) 
const temp4=temp.keys()  //返回的是下标index
const temp2=Object.values(temp) //返回的也就是数组本身，
console.log(temp2); //返回的是迭代器 */


/* 
想打印数值的话


const temp =[100,200,1,2,3,30,22]
const temp2=temp.values()
console.log(temp2.next().value);//才能连续打印   100
console.log(temp2.next().value);//200
console.log(temp2.next().value);//1
console.log(temp2.next().value);//2
console.log(temp2.next().value);//3
console.log(temp2.next().value);//30
console.log(temp2.next().value);//22
console.log(temp2.next().value);//结束后打印undefined


*/

// ! Array.from()  根据已有的数组创建一个新数组,  可以传一个过滤函数
// !   内部参数， Array.from(self,function, this)
// ! function为数组中每个元素要调用的函数。

// * from可以用来赋值数组，但不会改变数组元素个数，即使使用function控制，无值的也是undefined，并且占位
/* const arr=[1,2,3,4,5,6,7,8,9,10]
const test=Array.from(arr,(item)=>{
  if(item<5){
    console.log(item); // 1,2,3,4
    return item
  }else{return}
})
console.log(test); */

const temp=[1,2,3,4,5,6,7,8];
console.log(temp.slice(0,3));//index==3取不到

/* let  arr=[1,2,3,4,5,6,7,8,9,10]
let arr1= new Set([2,3,4,5,6,7,8,9,10])
let res=Array.from(arr)
let res2=Array.from(arr1)  //返回set数组
console.log(res);//复制了新数组
console.log(res2);//复制了新数组
arr.splice(1,1)
console.log(arr);//arr改变了
console.log(res);//res未改变，说明确实未新数组 */

//! Array.of() 方法  也可以用来复制数组    ---根据传入的参数创建一个新数组
//*  但必须用扩展操作符 Array.of(...arr) ,否则生成的是一个二维数组 [[1,2,3,4,5,6]]

/* let arr=[1,2,3,4,100]
let arr2=Array.of(...arr);
console.log(arr2);  // 复制了 数组
 */

//  ! fill方法， 用静态值填充数组  ---会改变原数组

// let arr=[1,2,3,4,5,6,7,8];
// console.log(arr.fill(0));//[0,0,0,0,0,0,0]   //会改变原数组
// console.log(arr.fill(100,2)); //从index==2时开始用100填充
// console.log(arr.fill(100,0,2));//! [100,100,3,4,5,6,7,8]  -从index==0到index==2

// ! Array.of()创建数组并初始化值的时候，fill 方法非常好用，就像下面这样。
// let ones=Array(6).fill(10) //[10,10,10,10,10,10]
// console.log(ones);

// let arr=new Array(6)  // [<6 empty items>]
// console.log(arr);


// ! copyWithin 方法  arr.copyWithin(target,start,end)
/* let arr=[1,2,3,4,5,6];
arr.copyWithin(0,3,4)//! 从index==3的“4”开始，复制到indx==4的 “5”结束，并且取不到5
console.log(arr); // 输出[4,2,3,4,5,6]

传入负数target为负数，则从尾部开始计

 */

//  !  reverse()   反向排序数组元素  
//  !  arr.sort()   排序数组元素，根据字符对应的 ASCII 值来比较的。
// let arr=[1,200,3,4,5,6,7,8,9,10];
// console.log(arr.reverse()); // [10,9,8,7,6,5,4,3,2,1]
// arr.sort((a,b)=>{return b-a}) //从大到小排序
// arr.sort((a,b)=>{return a-b}) //从小到大排序
// console.log(arr);

// ! 使用reduce() 进行数组求和  写函数时候需要有return值，因为返回值需要进行迭代
/* const temp =[100,200,1,2,3,30,22]
const temp3=temp.reduce((previous,current)=>{return previous+current})  //358
注意虽然是函数，但是不能用{}括起来，因为 返回值会继续进行迭代，必须是值
console.log(temp3);//358 */

//* 给名字排序

let names = ['Ana', 'ana', 'John', 'john']; // 重置数组的初始状态
names.sort((a, b) => a.localeCompare(b));  //[ 'ana', 'Ana', 'john', 'John' ]
console.log(names);


// ! 搜索有两个方法：indexOf 方法返回与参数匹配的第一个元素的索引；lastIndexOf 返回与参数匹配的最后一个元素的索引。
/* let numbers=[1,2,3,4,5,6,7,8,100,9];
console.log(numbers.indexOf(10));//  -1
console.log(numbers.indexOf(9));//  index=9
console.log(numbers.lastIndexOf(9));//  从后面找起， index=9

 */

//! find()方法  和 findIndex()
//  find() 返回满足提供的函数的第一个元素的值
/* let numbers = [13,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 
function multipleOf13(element, index, array) { 
return (element===13); 
} 
console.log(numbers.find(multipleOf13));  //返回数值13，说明有这个值
console.log(numbers.find((item)=>{return item===100}));  //返回undefined， 代表没有
console.log(numbers.findIndex((item)=>{return item>14}));// 返回index=14，从15开始
console.log(numbers.findIndex((item)=>{return item>100}));// 返回index=-1,没有

 */

//  ! includes() 方法   找某个元素，有的话返回true,没有的话返回false

/* let arr=[1,2,3,4,5,200,100]
console.log(arr.includes(100)); // false
console.log(arr.includes(1)); // true
console.log(arr.includes(100,5)); // 从index=5开始寻找100  true
console.log(arr.includes(2,5)); // 从index=5开始寻找2  false

 */


//  ! toString() 输出字符串   String()是强制类型转换
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.toString());  // 1,2,3,4,5,6,7,8,9,10
console.log(arr.join('-'));  //1-2-3-4-5-6-7-8-9-10



// ! 类型数组   用于存储单一类型的数据
// let myArray = new TypedArray (length)   TypedArray可以换成以下任意类型
/* 
Int8Array    8 位二进制补码整数
Uint8Array    8 位无符号整数
Uint8ClampedArray   8 位无符号整数
Int16Array    16 位二进制补码整数
Uint16Array    16 位无符号整数
Int32Array    32 位二进制补码整数
Uint32Array   32 位无符号整数
Float32Array   32 位 IEEE 浮点数
Float64Array   64 位 IEEE 浮点数
*/
