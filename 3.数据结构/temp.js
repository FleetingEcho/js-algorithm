let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']); 
let res=[...myMap]
console.log(res);


let obj={'a':'1', 'b':'2','c':'3'}
console.log(Object.values(obj))