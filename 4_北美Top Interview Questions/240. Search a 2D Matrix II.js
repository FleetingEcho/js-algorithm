/* 
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
*/

// 暴力搜索
var searchMatrix = function(matrix, target) {
  if(matrix.length===0) return false;
  let rowMax=matrix.length;
  let colMax=matrix[0].length;
  let res;
  if(target>matrix[rowMax-1][colMax-1]) return false;
  for(let i=0;i<rowMax;i++){
    matrix[i].some((val,index,self)=>{
      if(target===val){
        res=true;
        return true;
      } 
    })
  }
  return res===true? true: false 
};

// includes()进行判断
var searchMatrix = function(matrix, target) {
  if(matrix.length===0) return false;
  let rowMax=matrix.length;
  let colMax=matrix[0].length;
  let res=false;
  if(target>matrix[rowMax-1][colMax-1]) return false;
  for(let i=0;i<rowMax;i++){
    if(matrix[i].includes(target)){
      res=true
      break;
    }
  }
  return res 
}


// const temp=[
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// console.log(searchMatrix(temp,20));

// BFS

/* 
从右上角开始搜索，
如果比15大，则向下搜索，小，则用缩小横向范围并用11做比较，比11大继续向下搜索，小则继续缩小横向范围


*/
var searchMatrix2 = function(matrix, target) {
  if(matrix.length===0) return false;
  let rowMax=matrix.length;
  let colMax=matrix[0].length;
  if(target>matrix[rowMax-1][colMax-1]) return false;
  let queue=[] // 核心数据结构
  let visited=new Set() // 避免走回头路
  let p=[0,colMax-1];
  queue.push(matrix[p[0]][p[1]]); // queue=[15,[0,4]]
  queue.push(p)

  while (queue.length!==0) {

  let temp = queue.shift();
  let pt=queue.shift();
  if (temp===target) return true;
  // 扩散到周围
  if (temp<target){ //queue=[15,[0,4]]
    if(pt[0]<rowMax-1 && !visited.has([pt[0]+1,pt[1]])){
      queue.push(matrix[pt[0]+1][pt[1]], [pt[0]+1, pt[1]])
      visited.add([pt[0]+1,pt[1]])
      }
    }else{
      if(pt[1]>0 && !visited.has([pt[0],pt[1]-1])){
        queue.push(matrix[pt[0]][pt[1]-1], [pt[0], pt[1]-1])
        visited.add([pt[0], pt[1]-1]) 
      }
    }
      
};
return false;
}

const temp1=[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
console.log(searchMatrix2(temp1,20));