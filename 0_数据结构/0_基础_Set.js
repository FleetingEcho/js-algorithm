// * 类似于数组，但是成员的值都是唯一的，没有重复 的值。
// * Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。

/* 
*    本身的属性有  constructor,   size
*    本身的方法：   add() , delete(), has(), clear()
*
*/

const set=new Set();
const set1=new Set([1,2,3,4,5]);
set.add(100)
set.add('apple')
set.add(1)
set.add(3)
set.add() // 添加进一个undefined
set.add(2)
set.add(9)

console.log(set1)  //Set { 1, 2, 3, 4, 5 }
// 打印set为数组 
// console.log(set) // Set { 100, 1, 3, 2, 9 }
// console.log(...set) //  100 1 3 2 9
// console.log([...set])   //[ 100, 1, 3, 2, 9 ]
// console.log(Array.from(set))  //[ 100, 1, 3, 2, 9 ]

if(set.has(100)){
  console.log('set内部有'+'100')
}

// * Set中的键名和键值 完全相同
// * Set 可以用for...of 遍历  set.keys(),  set.values(),  set.entries()
/* 
keys() ：   返回 键名   的遍历器 
values() ： 返回 键值   的遍历器 
entries() ：返回 键值对 的遍历器 
forEach() ：使用回调函数遍历每个成员
*/
// ! 最常用的
for (let item of set1) { 
  // console.log(item); 
}
/* 
for (let item of set.keys()){
   console.log(item);   //
}

for (let item of set.values()) { console.log(item); }

for (let item of set.entries()) { console.log(item); } 

 entries()返回-----
[ 100, 100 ]
[ 'apple', 'apple' ]
[ 1, 1 ]
[ 3, 3 ]
[ undefined, undefined ]
[ 2, 2 ]
[ 9, 9 ]

*/

// * 由于Set是类数组的结构，所以可以直接用forEach()  进行遍历
set1.forEach((value, key) => {
  // console.log(value) 
})  //! 同样, key和value完全相同

// * 同样，在new Set()时候，数组的 map 和filter也可以用于Set结构
let set2 = new Set([1, 2, 3]); 
set2 = new Set([...set2].map(x => x * 2)); 
// 返回Set结构：{2, 4, 6} 
let set3 = new Set([1, 2, 3, 4, 5]); 
set3 = new Set([...set3].filter(x => (x % 2) == 0));

console.log(set2)  // Set { 2, 4, 6 }
console.log(set3)  // Set { 2, 4}


//* 使用Set可以轻易实现 并集（Union）、交集（Intersect）和差集 （Difference）。
let a = new Set([1, 2, 3]); 
let b = new Set([4, 3, 2]);
// 并集 
let union = new Set([...a, ...b]);
console.log(union)  //Set { 1, 2, 3, 4 }

// 交集 
let intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);  // Set { 2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference) //Set { 1 }

console.log(set.keys()) //! 返回的一个迭代器，并非数组

// ! 想迭代直接转换为数组，  [...set] 以及 Array.from(set)


// ! WeakSet的成员只能是对象  , 并且是不可遍历的