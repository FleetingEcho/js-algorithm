
var solveSudoku = function(board) {
return backtrack(board,0,0)
};

function backtrack(board, i, j) {
  let m = 9, n = 9;
  if (j == n) {
      // 穷举到最后一列的话就换到下一行重新开始。
      return backtrack(board, i + 1, 0);
  }
  if (i == m) {
      // 找到一个可行解，触发 base case
      return board;
  }
  // 不是空格，跳过
  if (board[i][j] != '.') {
      // 如果有预设数字，不用我们穷举
      return backtrack(board, i, j + 1);
  } 

  for (let ch = '1'; ch <= '9'; ch++) {
      // 如果遇到不合法的数字，就跳过
      if (!isValid(board, i, j, ch))
          continue;

      board[i][j] = String(ch);
      // 如果找到一个可行解，立即结束
      if (backtrack(board, i, j + 1)) {
          return board;
      }
      board[i][j] = '.';
  }
  // 穷举完 1~9，依然没有找到可行解，此路不通
  return false;
}

function isValid( board,r,c,n) {
  for (let i = 0; i < 9; i++) {
    // 判断行是否存在重复
    if (board[r][i] == n) return false;
    // 判断列是否存在重复
    if (board[i][c] == n) return false;
    // 判断 3 x 3 方框是否存在重复
    //  if (board[(r/3)*3 + i/3][(c/3)*3 + i%3] == n)
    if (board[Math.floor(r/3)*3 + Math.floor(i/3)][Math.floor(c/3)*3 +Math.floor(i%3)] == n)
        return false;
}
return true;
}




const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(solveSudoku(board))