// JavaScript的对象（Object），本质上是键值对的集合（Hash结构），
// 但是传统上 只能用字符串当作键。这给它的使用带来了很大的限制。


// ! map可以直接使用forEach进行遍历循环！　 Map.forEach和Array.forEach类似
/* map3.forEach((value,key,self)=>{
  if(key!== 3) return
  console.log(value)  //three
})
 */

// * 由于Set是类数组的结构，所以可以直接用forEach()  进行遍历
const set1=new Set([1,2,3,4,5]);
set1.forEach((value, key) => {
  // console.log(value) 
})  //! 同样, key和value完全相同


// * Map 的“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

//*  如果对同一个键多次赋值，后面的值将覆盖前面的值。

/* 
* Map属性 size
* Map方法  set(key,value) get(key) has() delete() clear()

* 读取未知的键，则返回undefined
! 注意，只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心。
! 例如： map.set(['a'], 555);  map.get(['a']) // undefined
! 表面是针对同一个键，但实际上这是两个值，内存 地址是不一样的，因此 get 方法无法读取该键，返回 undefined 。
* Map的键实际上是跟内存地址绑定的,只要内存地址不一样，就视为两个键
*/

/* 
* 如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格 相等
* Map会将其视为一个键，包括0和-0。
* 另外，虽然NaN不严格相等于自身，但 Map将其视为同一个键。 
*
*/
// ! 键名甚至可以是undefined NaN
let map = new Map(); 
map.set(NaN, 123); 
map.get(NaN) // 123 

map.set(-0, 123); 
map.get(+0) // 123

let a=1;
let b=1;
map.set(a,11)
map.set(b,22)
map.set(undefined, "nah");  //! 即使设定了好几个undefined，Map也会认为是同一个键
console.log(map.get(a))
console.log(map.get(b))  //! 说明只要是简单类型并且值严格相等，则不用担心范围undefined
console.log(map)  // Map { NaN => 123, 0 => 123, 1 => 22, undefined => 'nah' }
map.delete(undefined);  // Map { NaN => 123, 0 => 123, 1 => 22 }
// map.clear()  // Map {}
console.log(map) 



// ! Map的遍历方法    用迭代器 map.keys()   map.values()   map.entries() 
// * 这些迭代器都是用for ... of 进行遍历的
// ! forEach()  ,或使用扩展运算符 Map转换为数组后使用map filter等方法进行遍历

 const map1= new Map();
 map1.set('Honda', 'Accord')
 map1.set('Honda1', 'Civic')
 map1.set('Honda2', 'CRV')
 map1.set('Honda3', 'Fit')

 for(let key of map1.keys()){
  //  console.log(key)
 }

 for(let value of map1.values()){
  //  console.log(value)
 }
 
 for(let [key,value] of map1){
   console.log(key,value)
   /* 
   Honda Accord
   Honda1 Civic
   Honda2 CRV
   Honda3 Fit
   */
}


for(let item of map1.entries()){
  console.log(item)
  /* 
[ 'Honda', 'Accord' ]
[ 'Honda1', 'Civic' ]
[ 'Honda2', 'CRV' ]
[ 'Honda3', 'Fit' ]
  */
}

// * Map结构转为数组  ------------使用扩展运算符 ...

let map3 = new Map([ [1, 'one'], [2, 'two'], [3, 'three'], ]);

console.log( [...map3.keys()]  )  //  [1,2,3]
console.log( [...map3.values()]  )  // [ 'one', 'two', 'three' ]
console.log( [...map3.entries()]  )  //  [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
console.log( [...map3]  )  // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

// console.log( [...map] ) 
/* 
[
  [ 'Honda', 'Accord' ],
  [ 'Honda1', 'Civic' ],
  [ 'Honda2', 'CRV' ],
  [ 'Honda3', 'Fit' ]
]
*/
console.info( [...map1.values()] )  //[ 'Accord', 'Civic', 'CRV', 'Fit' ]
console.info( map1.values() )  //[Map Iterator] { 'Accord', 'Civic', 'CRV', 'Fit' }

const arr= Array.from(map3)  // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
// const arr= Array.from([...map1.values()])  //! 数组符号不能省略 [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
// console.log(arr)

arr.map(([key,val],index,self)=>{
  if(key!== 3) return
  console.log(val)  //three
})

// ! map可以直接使用forEach进行遍历循环！！！！！！！！
map3.forEach((value,key,self)=>{
  if(key!== 3) return
  console.log(value)  //three
})

// ! forEach 方法还可以接受第二个参数，用来绑定 this 。
var reporter = { aaa: function(key, value) { console.log("Key: %s, Value: %s", key, value); } };
map3.forEach(function(value, key, map) { this.aaa(key, value); }, reporter);  //this指向的是reporter
/* 
Key: 1, Value: one
Key: 2, Value: two
Key: 3, Value: three
*/


// * map转为数组

console.log([...map3])   //  [ [ 1, 'one' ] [ 2, 'two' ] [ 3, 'three' ] ]

// * 数组转为Map

console.log(new Map([[1,2],[3,4]]))  //Map { 1 => 2, 3 => 4 }

// * Map转换为对象

const obj={}
map3.forEach((value,key)=>{
  obj[key]=value
})
console.log(obj)  // { '1': 'one', '2': 'two', '3': 'three' }

// * 对象转换为Map

const map5=new Map();
for(let key in obj){
  map5.set(key,obj[key])
}
console.log(map5)  // Map { '1' => 'one', '2' => 'two', '3' => 'three' }


// *  Map转换为 JSON
// *          情况1： Map的键为 字符串
// *                  方法： 先将Map转换成Obj， 再 JSON.stringify(Obj)

// *          情况1： Map的键是 非字符串
// *                  方法： JSON.stringify([...map])

console.log(  JSON.stringify([...map5])  )   //  '[["1","one"],["2","two"],["3","three"]]'


// * JSON转换为Map   情况1: 如果JSON所有的键都是字符串
// *                       和对象转换为Map一样       JSON.parse( '{"yes":true,"no":false}' ),转换完后是个对象，然后对象再转换为Map


// * JSON转换为Map   情况2: 如果JSON为数组嵌套型，则可以直接new Map()生成map
// * 
function jsonArrToMap(str){
  return  new Map(JSON.parse(str))
}
console.log( jsonArrToMap('[[true,7],[{"foo":3},["abc"]]]') )
//  Map { true => 7, { foo: 3 } => [ 'abc' ] }
