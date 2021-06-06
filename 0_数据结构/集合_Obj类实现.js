/* 
集合是由一组无序且唯一（即不能重复）的项组成的。该数据结构使用了与有限集合相同的数学概念
空集就是不包含任何元素的集合
素数 （除了 1 和自身，没有其他正因数的、大于 1 的自然数）

集合想象成一个既没有重复元素，也没有顺序概念的数组
*/
// ! prop in object   一个字符串类型或者 symbol 类型的属性名
// !  如果是数组的话--------必须是数组索引(0,1,2,3)
// const temp=()=>{
//   const obj= {"a":"aa"}
//   return 'aa' in obj  //只能判断key
// } 
// console.log(temp());
// ! SQL 联接的基础就是集合运算
// !  array.splice(index,1);//删除指定位置

export default class Set {
  constructor() {
    this.items = {};
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  values() {
    return Object.values(this.items);
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return Object.keys(this.items).length;
  }
  clear() {
    this.items = {};
  }

/* 
* union          并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合。
* intersection   交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合。
* difference     差集：对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
* isSubsetOf     子集：验证一个给定集合是否是另一集合的子集。
*/

  union(otherSet) {
    const unionSet = new Set();
    // 将两个不同的集合push到一起，add的时候会自动进行去重判断
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

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const values = this.values();
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`;
    }
    return objString;
  }
}


// ! 测试

/* 
const set = new Set(); 
set.add(1); 
console.log(set.values()); //[1] 
console.log(set.has(1)); // true 
console.log(set.size()); // 1 
set.add(2); 
console.log(set.values()); //[1, 2] 
console.log(set.has(2)); // true 
console.log(set.size()); // 2 
set.delete(1); 
console.log(set.values()); //[2] 
set.delete(2); 
console.log(set.values()); //[]

*/

// !测试 Union运算
/* 
const setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3); 
const setB = new Set(); 
setB.add(3); 
setB.add(4); 
setB.add(5); 
setB.add(6); 
const unionAB = setA.union(setB); 
console.log(unionAB.values());
*/

// ! 交集运算
/* 
const setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3); 
const setB = new Set(); 
setB.add(2); 
setB.add(3); 
setB.add(4); 
const intersectionAB = setA.intersection(setB); 
console.log(intersectionAB.values());
[ 2, 3 ]
*/

// ! 子集运算


const setA = new Set(); 
setA.add(1); 
setA.add(2); 
const setB = new Set(); 
setB.add(1); 
setB.add(2); 
setB.add(3); 
const setC = new Set(); 
setC.add(2); 
setC.add(3); 
setC.add(4); 
console.log(setA.isSubsetOf(setB)); //true
console.log(setA.isSubsetOf(setC));//false
