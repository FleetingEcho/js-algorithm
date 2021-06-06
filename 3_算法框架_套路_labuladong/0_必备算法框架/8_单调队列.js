/* 

单调队列，就是一个「队列」，只是使用了一点巧妙的方法，使得队列中的元素单调递增（或递减）。
这个数据结构有什么用？可以解决滑动窗口的一系列问题

deque，即双端队列
*/
// ! 一般用于解决滑动窗口问题

/* 滑动窗口算法框架 */
function slidingWindow(s, t) {
  let queue=[];
/* 
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;
*/
  let left = 0, right = 0;
  let valid = 0; 
  while (right < s.length) {
      // c 是将移入窗口的字符
      // 右移窗口
      queue.push(s[right])
      right++;

      // 进行窗口内数据的一系列更新
      //!   ...

      /*** debug 输出的位置 ***/
      console.log("window: [%d, %d)\n", left, right);
      /********************/

      // 判断左侧窗口是否要收缩
      while ('window needs shrink') {
          // d 是将移出窗口的字符
          let del=s.shift()
          // 左移窗口
          // 进行窗口内数据的一系列更新
          // !   ...
      }
  }
  return valid
}
// 滑动窗口的解答框架============
// k为限定的窗口宽度
function maxSlidingWindow(nums,k) {
  let window=[];
  let res=[];
  for (let i = 0; i < nums.length; i++) {
      if (i < k - 1) { //先把窗口的前 k - 1 填满
          window.push(nums[i]);
      } else { // 窗口开始向前滑动
          window.push(nums[i]);
          res.push(Math.max(window));
          window.shift(nums[i - k + 1]);// nums[i - k + 1] 就是窗口开始的元素
      }
  }
  return res;
}

/* 
! 单调队列
*/
/* 
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/
var maxSlidingWindow = function(nums, k) {
  if(nums.length == 0 || k == 0) {
      return [];
  }
  let queue = [];
  let res = [];
  for(let right = 0, left = 1 - k; right < nums.length; left++, right++) {
    // 如果queue的头部和窗口左边-1一致，说明queue该清理一位数了
      if(left > 0 && queue[0] == nums[left - 1]) {
          queue.shift();
      }
      // 如果新的nums[right]大于queue
      // 需要保证queue始终递减，则直接pop()直到尾部 > nums[right],继续递减
      while(queue.length != 0 && queue[queue.length - 1] < nums[right]) {
          queue.pop();
      }
      // queue添加进right值
      queue.push(nums[right]);
      // 
      if(left >= 0) {
        // queue[]始终是由大到小，递减
          res[left] = queue[0];
      }
  }
  return res;
};

