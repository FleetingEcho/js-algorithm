let map0 = new Map() .set(1, 'a') .set(2, 'b') .set(3, 'c');
console.log(map0)
console.log([...map0])
let map1 = new Map( [...map0].filter(([k, v]) => k < 3) );
console.log(map1);
// 产生Map结构 {1 => 'a', 2 => 'b'} 

let map2 = new Map( [...map0].map(([k, v]) => [k * 2, '_' + v]) ); 
console.log(map2);
 // 产生Map结构 {2 => '_a', 4 => '_b', 6 => '_c'}
 const map3=[...map0]

//  !注意这里的map3是数组，但Map本身也有forEach方法
 map3.forEach((item,index,self)=>{
  //  console.log(self);
 })
 map0.forEach(function(value, key, self) {
  console.log("Key: %s, Value: %s", key, value); 
});

// Map转换为对象=== 必须所有的键都是字符串
function strMapToObj(strMap) {
   let obj = Object.create(null); 
   for (let [k,v] of strMap) { obj[k] = v; }return obj; 
  }
let myMap = new Map().set('yes', true).set('no', false); 

strMapToObj(myMap) // { yes: true, no: false }


// Map的方法，set ,get ,has ,clear,delete  , size

// Set的方法  add, delete ,has ,delete ,clear   ,size    [...set]获取数组
