class Set_ES6{
  constructor() {
    this.set = new Set()
  }
  add(data){
    this.set.add(data)
    return true
  }
  delete(data){
    this.set.delete(data)
    return true
  }
  has(data){
    return this.set.has(data)
  }
  size(){
    return this.set.size
  }
  values(){
    let res=[...this.set]
    return res
  }
  _self(){
    let res=[...this.set]
    return res
  }
  isEmpty(){
    return this.set.size===0
  }
  clear(){
    this.set.clear()
    return true
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }
  // * 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => {
      /* 
      const array1 = [1, 2, 3];
      从第0位开始查找2
      console.log(array1.includes(2,0));  //true
      */
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }
  // * 差集
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  // * 子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;  //结束every的遍历查找
      }
      return true;
    });
    return isSubset;
  }

  
}



// 测试用

const setA = new Set_ES6(); 
setA.add(1); 
setA.add(2); 
setA.add(3); 
setA.add(100); 
setA.add(10)
setA.delete(100); 
console.log(setA);
console.log(setA.values());
console.log(setA.has(1)); //true

const setB = new Set_ES6(); 
setB.add(2); 
setB.add(3); 
setB.add(4);
// const unionAB = setA.union(setA,setB); 
// const unionAB = setA.union(setB); 
// console.log(unionAB.values());

const intersectionAB = setA.intersection(setB); 
console.log(intersectionAB.values()); // 2,3


const intersectionABC = setA.difference(setB); 
console.log(intersectionABC.values());

const setC = new Set_ES6(); 
setC.add(2); 
setC.add(3); 
setC.add(4); 

console.log(setA.isSubsetOf(setB)); //true
console.log(setA.isSubsetOf(setC));//false


/* 

Set_ES6 { set: Set { 1, 2, 3, 10 } }
[ 1, 2, 3, 10 ]
true
[Set Iterator] { 2, 3 }
[Set Iterator] { 1, 10 }
false
false
*/
/* 
! 若不是Set类的实现，可以


     ! 并集
    union(setA, setB){ 
      const unionAb = new Set(); 
      setA.forEach(value => unionAb.add(value)); 
      setB.forEach(value => unionAb.add(value)); 
      return unionAb; 
     };
      ! 交集
    intersection(setA, setB){ 
      const intersectionSet = new Set(); 
      setA.forEach(value => { 
      if (setB.has(value)) { 
      intersectionSet.add(value); 
      } 
      }); 
      return intersectionSet; 
     };
  
     ! 差集
    difference(setA, setB){ 
      const differenceSet = new Set(); 
      setA.forEach(value => { 
      if (!setB.has(value)) { 
      differenceSet.add(value); 
      } 
      }); 
      return differenceSet; 
     };



*/