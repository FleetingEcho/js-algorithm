// ! 解决一个回溯问题，实际上就是一个决策树的遍历过程。
/* 
! 只要涉及递归，都可以抽象成二叉树的问题
* 只需要考虑三个问题：
1、路径：也就是已经做出的选择。
2、选择列表：也就是你当前可以做的选择。
3、结束条件：也就是到达决策树底层，选择列表为空时，无法再做选择的条件。
*/
// ! 注意递归时候的深拷贝 浅拷贝
/* 
写 backtrack 函数时，需要维护走过的「路径」和当前可以做的「选择列表」，
当触发「结束条件」时，将「路径」记入结果集。
*/
/* 
某种程度上说，动态规划的暴力求解阶段就是回溯算法。只是有的问题具有重叠子问题性质，
可以用 dp table 或者备忘录优化，将递归树大幅剪枝，这就变成了动态规划。
? 而今天的两个问题，都没有重叠子问题，也就是回溯算法问题了，复杂度非常高是不可避免的。
*/
/*
 *  let result = []
 *  backtrack(路径, 选择列表){
 *    if 满足结束条件:
 *        result.add(路径)
 *        return
 *
 *    for 选择 in 选择列表:
 *        做选择
 *        backtrack(路径, 选择列表)
 *        撤销选择
 *   }
 */
// ! 其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」，特别简单。
// ! 决策树------------ 因为你在每个节点上其实都在做决策

// * 前序遍历的代码在进入某一个节点之前的那个时间点执行，
// * 后序遍历代码在离开某个节点之后的那个时间点执行。

/* 
! 这也是回溯算法的一个特点，不像动态规划存在重叠子问题可以优化，
! 回溯算法就是纯暴力穷举，复杂度一般都很高。 
*/

// ! 例如 全排列(不重复的所有组合可能  n!) 比如输入[1,2,3]

const input = [1, 2, 3]
/* 主函数，输入一组不重复的数字，返回它们的全排列 */
function permute(nums) {
  let res = []
  // 记录「路径」
  let track = []
  // 路径：记录在 track 中
  // 选择列表：nums 中不存在于 track 的那些元素
  // 结束条件：nums 中的元素全都在 track 中出现
  function backtrack(track) {
    // 触发结束条件
    if (track.length === nums.length) {
      res.push(track)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if (track.includes(nums[i])) continue
      // 做选择
      track.push(nums[i])
      // console.log(track);
      // 进入下一层决策树
      backtrack(Array.from(track));//为了递归，深拷贝一份
      // backtrack(Array.of(...track)) //为了递归，深拷贝一份
      // backtrack(track.slice());//为了递归，浅拷贝，不改变原数组
      // 取消选择
      track.pop()
    }
  }
  backtrack(track)

  return res
}
console.log(permute(input))
// console.log([1,2,3,4,5,6,7].slice());

// 八皇后问题

/* 输入棋盘边长 n，返回所有合法的放置 */
function solveNQueens(n) {
  let res = []
  // '.' 表示空，'Q' 表示皇后，初始化空棋盘。
  // ''随便什么内容，占位用
  let board = new Array(n).fill('').map((x) => new Array(n).fill('.'))
  // let n = board.length;
  function isValid(row, col) {
    // 检查列是否有皇后互相冲突
    for (let i = 0; i < n; i++) {
      if (board[i][col] == 'Q') return false
    }
    // 检查右上方是否有皇后互相冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] == 'Q') return false
    }
    // 检查左上方是否有皇后互相冲突
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 'Q') return false
    }
    return true
  }
  const backtrack = (board, row) => {
    // 触发结束条件
    if (row == n) {
/* 
[
  [ '.Q..', '...Q', 'Q...', '..Q.' ],
  [ '..Q.', 'Q...', '...Q', '.Q..' ]
]
*/
      // const stringsBoard = board.slice() //拷贝一份条件成立的结果
      const stringsBoard =Array.from(board) //拷贝一份条件成立的结果
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('') //每一行拼成字符串
      }
      res.push(stringsBoard)
      return
    }

    // let n = board[row].length;
    for (let col = 0; col < n; col++) {
      // 排除不合法选择
      if (!isValid(row, col)) continue
      // 做选择
      board[row][col] = 'Q'
      // 进入下一行决策
      backtrack(board, row + 1)
      // 撤销选择
      board[row][col] = '.'
    }
  }
  backtrack(board, 0)
  return res
}

// 路径：board 中小于 row 的那些行都已经成功放置了皇后
// 选择列表：第 row 行的所有列都是放置皇后的选择
// 结束条件：row 超过 board 的最后一行

console.log(solveNQueens(4))
