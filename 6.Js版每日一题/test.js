// let map=new Map();
// const e='2'
// map[1]=1111;
// map[2]=1221;
// map.set('c',3333)
// map.set('d',{123:445})
// map.set(e,[112,4,5,6,76,2])
// map[3]=()=>{return -1}

// let temp=map;
// console.log(temp);
// console.log(delete map[1]);
// console.log(!map.get(1));


// console.log(22.2 >>1);//11
// console.log(23 >>1);//11
// console.log(22 >>1);//11
// console.log(23.99 >>1);//11
// console.log(24 >>1);//12


// const set=new Set();
// set.add([1,2,3]);
// set.add([1,2,3]);
// console.log(set)
// let arr=[1,2,3,4,5,6,7,8,100]

// console.log(arr[-1])

// console.log(new Array(3).fill(0).map(v=> new Array(3)))


let radiant = [], dire = [];

// 即for-in是为遍历对象而设计的，不适用于遍历数组。
// const arr="RDDRD".split("");
const arr=[1,2,3,4,5,6,7]
  for (const i in arr ) {
      if (arr[i] === 3) {
          radiant.push(i);
      } else {
          dire.push(i);
      }
  }
// Array.from("RDDDD").map((val,i)=>{
//   if (val === 'R') {
//     radiant.push(i);
// } else {
//     dire.push(i);
// }
// })



// for (const [i, ch] of Array.from('RDDDRD').entries()) {
//   if (ch === 'R') {
//       radiant.push(i);
//   } else {
//       dire.push(i);
//   }
// }


  console.log(radiant);
  console.log(dire)

