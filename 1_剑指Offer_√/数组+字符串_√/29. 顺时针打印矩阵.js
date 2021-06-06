// 29. 顺时针打印矩阵
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
/* 
输入：matrix = [
                [1,2,3,4],
                [5,6,7,8],
                [9,10,11,12]
              ]

                输出：[1,2,3,4,8,12,11,10,9,5,6,7]
*/
const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
]

var spiralOrder = function (matrix) {
	if (matrix.length == 0) return []
	let left = 0,
		width = matrix[0].length - 1,
		top = 0,
		height = matrix.length - 1,
		x = 0
	let res = []
	let count = 0
	/* while循环中，一旦有一项超出设定值，则直接break */
	while (true) {
		for (let i = left; i <= width; i++) {
			console.log(top) //0
			res[x++] = matrix[top][i]
		}
		if (++top > height) break // x==4
		for (let i = top; i <= height; i++) {
			res[x++] = matrix[i][width]
		}
		if (left > --width) break

		for (let i = width; i >= left; i--) res[x++] = matrix[height][i]
		if (top > --height) break
		for (let i = height; i >= top; i--) res[x++] = matrix[i][left]
		if (++left > width) break
	}
	return res
}

/* 
      for(let i = left; i <= width; i++) res[x++] = matrix[top][i];
      if(++top > height) {break}; // x==12
      for(let i = top; i <= height; i++){
        console.log(x); // x== 4,5,9 ?????
        res[x++] = matrix[i][width]
      };
      if(left > --width) break;

      for(let i = width; i >= left; i--) res[x++] = matrix[height][i];
      if(top > --height) break;
      for(let i = height; i >= top; i--) res[x++] = matrix[i][left];
      if(++left > width) break;
*/

/* var spiralOrder = function(matrix) {
  const res = []
  let flag = true
  while(matrix.length) {
      // 从左到右
      if(flag){
          // 第一层
          res = res.concat(matrix.shift())
          // '现在'的第一层到最后一层的末尾
          for(let i=0; i<matrix.length; i++){
              matrix[i].length && res.push(matrix[i].pop())
          }
      // 右到左   
      } else {
          // 最后一层
           res = res.concat(matrix.pop().reverse())
          // '现在'的最后一层到第一层 
          for(let i=matrix.length - 1; i> 0; i--){
             matrix[i].length && res.push(matrix[i].shift())
          }
      }
      flag = !flag
  }
  return res
}; */

/*
var spiralOrder = function(matrix) {
  let res=[]
  if(matrix.length===0) return res

    let width=matrix[0].length -1
    let height=matrix.length -1
    for(let i=0;i<=width;++i){
      res.push(matrix[0][i])
      if(i===width){
        for(let j=1;j<=height;++j){
          console.log(j);
          res.push(matrix[j][width])
          if(j===height){
            for(let z=width-1;z>=0;z--){
              res.push(matrix[height][z])
              if(z===0){
                for(let y=height-1;y>0;--y){
                  res.push(matrix[y][0])
                if(y===1){
                  for(let t=1;t<width;t++){
                    res.push(matrix[1][t])
                  }
                }
  
                }
              }
            }
          }
        }
      }
    }
  
  return res
};

*/
console.log(spiralOrder(matrix))
