// * Object.prototype.hasOwnProperty.call(obj, element); 在obj中查找是否有key=element， 有返回true,无返回false

// 不使用call可能会出错

// * for... in是用来遍历 对象Obj的！   return/break 跳出循环 ,  continue进下一个循环

// const temp ={"apple":'iphone', "honda":'accord', "BMW":'280i'}
/* for(let i in temp){
  console.log(i); // apple
  console.log(temp[i]) //iphone
  break
} */
/* for(let i in temp){
  console.log(Object.prototype.hasOwnProperty.call(temp,"apple"));  //返回true
  return  //会跳出循环-----不关注return true/false
    continue  //进入下一个循环
}
 */

// * Object.entries(temp)
// const temp ={"apple":'iphone', "honda":'accord', "BMW":'280i'}
/* 对象转换为数组迭代器
[ 
  [ 'apple', 'iphone' ],
  [ 'honda', 'accord' ],
  [ 'BMW', '280i' ] 
]
*/
/* const temp =[100,200,1,2,3,30,22]
const temp2=Object.entries(temp)
console.log(temp2); */
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

// ! 使用reduce() 进行数组求和  写函数{}需要return，因为返回值需要进行迭代
const temp =[100,200,1,2,3,30,22]
const temp3=temp.reduce((previous,current)=> {return previous+current})  //358
// 注意虽然是函数，但是不能用{}括起来，因为 返回值会继续进行迭代，必须是值
console.log(temp3);

// ! 数组中不能用delete关键字删除元素，只能用splice(index,1); 删除一位数字
const arr=[1,200,3,4,5,6,78];
delete arr[1]  // delete的元素只是变成 empty而已
console.log(arr.length);  //delete后长度不变，仍是7

const obj={"apple":'iphone', "honda":'accord', "BMW":'280i'}
delete obj["apple"];  //删除对象十分有用
console.log(obj); // { honda: 'accord', BMW: '280i' }


// * 锁定Obj，Object.preventExtensions(obj1)   能删除能修改   但不允许继续添加内容
var obj1 = {
  brand :'honda',
  name : 'accord' ,
  feature : 'VTEC'
}
obj1 = Object.preventExtensions(obj1);    
obj1.name = "civic" 
console.log(obj1)          //{ brand: 'honda', name: 'civic', feature: 'VTEC' }
obj1.cc = "ee"                     
console.log(obj1)          //{ brand: 'honda', name: 'civic', feature: 'VTEC' }

console.log(Object.keys(obj1))// [ 'brand', 'name', 'feature' ] 
console.log(Object.values(obj1)) //[ 'honda', 'civic', 'VTEC' ]


//  *  Object.assign(target, source);  合并两个不同对象， 同名属性会被覆盖掉
const target = {
  x : 0,
  y : 1
};
const source = {
  x : 1,
  z : 2 ,
  fn : {
      number : 1
  }
};
Object.assign(target, source);  // ! 后面的覆盖前面的。 同名属性会被覆盖掉
console.log(Object.assign(target, source));  // { x: 1, y: 1, z: 2, fn: { number: 1 } }

console.log(target) //{ x: 1, y: 1, z: 2, fn: { number: 1 } }
console.log(source)  //{ x: 1, z: 2, fn: { number: 1 } }


// * 冻结Obj  Object.freeze()    不能添加，修改，删除属性。  freeze后为永不可变

// * 判断Obj是否被冻结 Object.isFrozen()
// * 判断Obj是否可扩展 Object.isExtensible()  注意： Object.preventExtensions，Object.seal 或 Object.freeze 方法都可以标记一个对象为不可扩展（non-extensible）。
/* const temp1={
  "a":"b",
  "c":'d',
  "e":'f'
}
Object.freeze(temp1);
// temp1[a]="ccccc"; // a is not defined，注意
temp1["a"]="ccccc";
console.log(temp1)   //{ a: 'b', c: 'd', e: 'f' }
delete temp1["a"];
console.log(temp1)  // { a: 'b', c: 'd', e: 'f' }


console.log(Object.isFrozen(temp1))  //true
 */

// * Object.seal() 密封一个Obj， 不可添加，删除 , 只可以修改

// *  Object.isSealed()  判断是否密封

const temp1={
  "a":"b",
  "c":'d',
  "e":'f'
}
Object.seal(temp1);
// temp1[a]="ccccc"; // a is not defined，注意
temp1["a"]="ccccc";
temp1["g"]="hhhhhh";  // { a: 'ccccc', c: 'd', e: 'f' }
console.log(temp1)   //{ a: 'b', c: 'd', e: 'f' }
delete temp1["a"];
console.log(temp1)  // { a: 'b', c: 'd', e: 'f' }

console.log(Object.isSealed(temp1))  //true
console.log(Object.isExtensible(temp1))  //false  不可以扩展


//* 对象的遍历：  for...in   Object.keys(), Object.values()
//*  或者entries转换为数组后用数组的各种方法进行遍历
//* Object.getOwnProperty() 也可以转为数组
//* Reflect.ownKeys(obj)   ----------不常用
for(let i in temp1){
  // console.log(i)  // i就是key本身，但注意最好观察一下要不要全转换为字符串之后进行操作   a,b,c
  // console.log(temp1[i])   //值
}
console.log(Object.getOwnPropertyNames(temp1))  //里面有每个name
Object.getOwnPropertyNames(temp1).forEach((name)=>{
  console.log(temp1[name])  //打印出了值
})

// entries遍历
const o={
  'a':1111,
  'b':2222,
  'c':33333
}

for (const [key, value] of Object.entries(o)) {
  console.log(`${key}: ${value}`);
}