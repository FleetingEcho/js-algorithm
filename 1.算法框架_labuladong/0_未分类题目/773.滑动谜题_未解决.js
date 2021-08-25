function slidingPuzzle(board) {
  let m = 2, n = 3;
  let start = "";
  let target = "123450";
  // 将 2x3 的数组转化成字符串
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          start+=(board[i][j]);
      }
  }
  // return start
  // 记录一维字符串的相邻索引 每个index的邻居index
  const neighbor = [
    [ 1,3 ],
    [ 0, 4, 2 ],
    [ 1, 5 ],
    [ 0, 4 ],
    [ 3, 1, 5 ],
    [ 4, 2 ]
  ];

  /******* BFS 算法框架开始 *******/
  let q=[];
  let visited=new Set();
  q.push(start);
  visited.add(start);
  let step = 0;
  while (q.length!==0) {
      let sz = q.length;
      for (let i = 0; i < sz; i++) {
          let cur = q.shift(); 
          q.pop();
          // console.log(cur);
          // 判断是否达到目标局面
          if (target == cur) {
              return step;
          }
          // 找到数字 0 的索引
          let idx = 0;
          for (; cur[idx] != '0'; idx++){
              // 将数字 0 和相邻的数字交换位置
              for (let adj of neighbor[idx]) {
                  let new_board = cur;//'412503'
                  new_board=new_board.split("")
                  // 交换
                  let temp=new_board[adj];//'4'
                  // console.log(new_board[adj]);

                  new_board[adj]=new_board[idx];
                  new_board[idx]=temp;
                  let temp2=new_board.join("")
                  // console.log(new_board);//412503
                  // 防止走回头路
                  if (!visited.has(temp2)) {
                      q.push(temp2);
                      // console.log(q);
                      visited.add(temp2);
                  }
              }
          }
      }
      step++;
  }
  return -1;
  /******* BFS 算法框架结束 *******/
}

console.log(slidingPuzzle([[4,1,2],[5,0,3]]));