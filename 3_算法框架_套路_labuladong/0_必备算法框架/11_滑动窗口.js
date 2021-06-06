/* 
! 滑动窗口
*/
// !  1.滑动窗口基础模板
function slideWindow(){
  let left = 0, right = 0;
  let window=[];
  while (right < s.length) {
      // 增大窗口
      window.push(s[right]);
      right++;

      while ('window needs shrink') {
          // 缩小窗口
          window.shift()
      }
  }
}
/* 
> 滑动窗口思路

1、我们在字符串S中使用双指针中的左右指针技巧，初始化left = right = 0，把索引左闭右开区间[left, right)称为一个「窗口」。
2、我们先不断地增加right指针扩大窗口[left, right)，直到窗口中的字符串符合要求（包含了T中的所有字符）。
3、此时，我们停止增加right，转而不断增加left指针缩小窗口[left, right)，
   直到窗口中的字符串不再符合要求（不包含T中的所有字符了）。同时，每次增加left，我们都要更新一轮结果。
4、重复第 2 和第 3 步，直到right到达字符串S的尽头。

这个思路其实也不难，第 2 步相当于在寻找一个「可行解」，然后第 3 步在优化这个「可行解」，
最终找到最优解，也就是最短的覆盖子串。左右指针轮流前进，窗口大小增增减减，窗口不断向右滑动，
这就是「滑动窗口」这个名字的来历。

下面画图理解一下，needs和window相当于计数器，分别记录T中字符出现次数和「窗口」中的相应字符的出现次数。

*/
// ! 2 终极模板！！！

/* 滑动窗口算法框架 */
function slidingWindow(s, t) {
  let need={};
  let window={};
  // 将要匹配的target写入need中
  for (const c of t){
    if(!need[c]) need[c]=1;
    else need[c]++;
  };

  let left = 0, right = 0;
  let valid = 0; 

  while (right < s.length) {
    // 右移窗口
    let c = s[right];
    right++;
      // 进行窗口内数据的一系列更新，
      //!   ...
      //!  例如window中有需要的值,并且个数相同，则valid++;
      /*** debug 输出的位置 ***/
      console.log("window: [%d, %d)\n", left, right);
      /********************/

      // 判断左侧窗口是否要收缩
      while ('window needs shrink') {
          //#  。。。。。进行一系列返回操作! 
          let d = s[left];
          // 左移窗口
          left++;
          // 进行窗口内数据的一系列更新
          if (need[d]) {
            if (window[d]==need[d]) valid--;
            window[d]--;
          }   
      }
  }
  return valid
}

// > 例题1： 最小覆盖子串
/* 
给你一个字符串 S、一个字符串 T 。
请你设计一种算法，可以在 O(n) 的时间复杂度内，
从字符串 S 里面找出：包含 T 所有字符的最小子串。

输入：S = "ADOBECODEBANC", T = "ABC"
输出："BANC"
如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。
*/
// 其中valid变量表示窗口中满足need条件的字符个数，
// 如果valid和need.size的大小相同，则说明窗口已满足条件，已经完全覆盖了串T。

// S = "ADOBECODEBANC", T = "ABC"