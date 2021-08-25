// 转置矩阵==============
const reverseMatrix=(sourceArr)=>{
  var reversedArr = []
  for (var i = 0; i < sourceArr[0].length; i++) {
    reversedArr[i] = []
    for (var j = 0; j < sourceArr.length; j++) {
      reversedArr[i][j] = sourceArr[j][i]
    }
  }
  return reversedArr
}
const tArr = [
  [1, 2, 3],
  [1, 2, 3]
];

const testArr = reverseMatrix(tArr);
console.log(JSON.stringify(testArr));


// 旋转图像算法===========
/*
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/

const rotate =(matrix)=>{
  matrix.reverse()
  for (let i = 0; i < matrix.length; i++) {
      for (let j = i + 1; j < matrix[0].length; j++) {
          let tmp = matrix[i][j]
          matrix[i][j] = matrix[j][i]
          matrix[j][i] = tmp
      }
  }
  return matrix
};

const matrix=[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
console.log(rotate(matrix));

