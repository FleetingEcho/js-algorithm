const setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3); 
setA.add(100); 
setA.add(10)
setA.delete(100); 
console.log(setA);
console.log([...setA]);//[1 2 3 10]
console.log(setA.has(1)); //true

/* 
Set { 1, 2, 3, 10 }
[1 2 3 10]
true
*/
const setB = new Set(); 
setB.add(2); 
setB.add(3); 
setB.add(4);
setB.add(12);


// ! 并集
function union(setA, setB){ 
  const unionAb = new Set(); 
  setA.forEach(value => unionAb.add(value)); 
  setB.forEach(value => unionAb.add(value)); 
  return [...unionAb]; 
 };
  // ! 交集
function intersection(setA, setB){ 
  const intersectionSet = new Set(); 
  setA.forEach(value => { 
  if (setB.has(value)) { 
  intersectionSet.add(value); 
  } 
  }); 
  return [...intersectionSet]; 
 };

//  ! 差集
function difference(setA, setB){ 
  const differenceSet = new Set(); 
  setA.forEach(value => { 
  if (!setB.has(value)) { 
  differenceSet.add(value); 
  } 
  }); 
  return [...differenceSet]; 
 };

//  !子集 
function isSubsetOf(setA, setB){
  // 子集最好不要用forEach，因为forEach必须throw Error才能跳出
  const tempA=[...setA]
  let res
  tempA.some(value=>{
    if(!setB.has(value)){
      res=false;
      return true  //跳出some循环
    }
  })
  return res
}


// 使用forEach实现子集
function _isSubsetOf(setA, setB){
  // 子集最好不要用forEach，因为forEach必须throw Error才能跳出
  let res
  setA.forEach(value => { 
    try{
      if (!setB.has(value)) { 
        throw new Error('123')
      } 
    }catch(e){
      if(e.message==='123'){
        res=false  // 
      }
    }
    }); 
  return res
}



  arr.forEach(value => { 
    try{
      if (true!==false) { 
        throw new Error('123')
      } 
    }catch(e){
      if(e.message==='123'){
        // 可以进行跳出前的操作了 比如外部定义res.这里设置res=false 
      }
    }
    }); 
 


/* 
1)结束本次循环进入下一次循环：
! 如果有两层for循环，内层continue只结束内层本次循环，内层break只结束内层循环
continue：for循环 、 for in 、 for of

return true/false：for Each 

2)结束整个循环
break：for循环 、 for in 、 for of、while、do{}while()、

try catch：for Each等各种需要终止循环的程序


* map 遍历循环     ---返回新数组
* some 遍历      --返回布尔值    一旦内部return true， 则循环跳出  
*                                      return false   继续循环
*
* filter 遍历     --返回新数组  新数组中的元素是通过检查指定数组中符合条件的所有元素
* for of 遍历数组   for(let item of array){}
* for in 遍历对象属性   ----没有返回值
* forEach 能遍历数组和对象,set,Map都可以，但跳出需要throw error
*           遍历数组    ----   arr.forEach((item,index,self)=>{})
*           遍历对象    ----    obj.forEach((value,key,self)=>{})
      for(var key in obj){
                if (key == "age") {
                   continue;
                }
                alert(key);// ['name','sex']
            }
    -----------------------------------------------
      arr.forEach(value => { 
        try{
          if (true!==false) { 
            throw new Error('123')
          } 
        }catch(e){
          if(e.message==='123'){
            ...可以进行跳出前的操作了 比如外部定义res.这里设置res=false 
          }
        }
        }); 
*/
console.log( union(setA,setB));  // [ 1, 2, 3, 10, 4, 12 ]
console.log( intersection(setA,setB));  // [  2, 3 ]
console.log( difference(setA,setB));  // [ 1,10]
console.log( isSubsetOf(setA,setB));  // [ 1,10]
console.log( _isSubsetOf(setA,setB));  // [ 1,10]