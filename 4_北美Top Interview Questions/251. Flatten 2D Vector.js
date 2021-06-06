/* 
Design and implement an iterator to flatten a 2d vector. It should support the following operations: next and hasNext.

 

Example:

Vector2D iterator = new Vector2D([[1,2],[3],[4]]);

iterator.next(); // return 1
iterator.next(); // return 2
iterator.next(); // return 3
iterator.hasNext(); // return true
iterator.hasNext(); // return true
iterator.next(); // return 4
iterator.hasNext(); // return false

*/

var Vector2D = function(v) {
  let arr=[];
  while(v.length>0){
    let temp=v.shift();
    for(let i=0;i<temp.length;i++){
      arr.push(temp[i])
    }    
  }
  this.arr=arr
  this.pointer=0;
};


Vector2D.prototype.next = function() {
  const temp=this.arr;
  let res= temp[this.pointer]
  this.pointer++;
  return res;
};


Vector2D.prototype.hasNext = function() {
  if(this.pointer>=this.arr.length) return false;
  return true;

};


//! test;

const iterator = new Vector2D([[1,2],[3],[4]]);

console.log(iterator.next()); // return 1
console.log(iterator.next()); // return 1
console.log(iterator.next()); // return 1
console.log(iterator.hasNext()); // return true
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 1
console.log(iterator.hasNext()); // return false
