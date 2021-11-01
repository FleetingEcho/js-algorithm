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
      // backtrack(Array.from(track));//为了递归，深拷贝一份
      backtrack(Array.of(...track)) //为了递归，深拷贝一份
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