
// > 例题1：76. 最小覆盖子串
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

// >用 Map做
function minWindow2(s, t) {
  let need=new Map();
  let window=new Map();
  // 没有设置为0，有则累加
  for (const c of t){
    if(!need.has(c)) need.set(c,1);
    else{
      let temp=need.get(c);
      need.set(c,temp+1)
    }
  };
  console.log(need.size)
  let left = 0, right = 0;
  let valid = 0; // 记录最小覆盖子串的起始索引及长度
  let start = 0, len = Number.MAX_SAFE_INTEGER;
  while (right < s.length) {
      // c 是将移入窗口的字符
      let c = s[right];
      // 右移窗口
      right++;
      // 进行窗口内数据的一系列更新
      if (need.has(c)) {
        if(!window.has(c)) window.set(c,0)
        let temp1=window.get(c); window.set(c,temp1+1);
        if (window.get(c) == need.get(c))  valid++;
      }
      // debug位置******************
      console.log("window: [%d, %d)\n", left, right);
      // 判断左侧窗口是否要收缩
      while (valid == need.size) {
        // 在这里更新最小覆盖子串
        if (right - left < len) {
          start = left;
          len = right - left;
        }
        console.log(start,left,right)
          // d 是将移出窗口的字符
          let d = s[left];
          // 左移窗口
          left++;
          // 进行窗口内数据的一系列更新
          if (need.has(d)) {
              if (window.get(d) == need.get(d)){
                valid--;
              }
              let num=window.get(d); window.set(d,num-1)
          }                    
      }
  }
  console.log(start)
  // 返回最小覆盖子串
  return len == Number.MAX_SAFE_INTEGER ? "" : s.substr(start, len);
}

// > 用Object做
function minWindow1(s, t) {
  let need={};
  let window={};
  // 没有设置为0，有则累加
  for (const c of t){
    if(!need[c]) need[c]=1;
    else need[c]++;
  };

  let left = 0, right = 0;
  let valid = 0; // 记录最小覆盖子串的起始索引及长度
  let start = 0, len = Number.MAX_SAFE_INTEGER;
  while (right < s.length) {
    // c 是将移入窗口的字符
    let c = s[right];
    // 右移窗口
    right++;
    // 进行窗口内数据的一系列更新
    if (need[c]) {
        if(!window[c]){window[c]=0}
        window[c]++
        if (window[c]== need[c]){valid++}
      }
      console.log("window: [%d, %d)\n", left, right);
      // 判断左侧窗口是否要收缩
      while (valid ==Object.keys(need).length) {
        // 在这里更新最小覆盖子串
        if (right - left < len) {
          start = left;
          len = right - left;
        }
        console.log(start,left,right)
          // d 是将移出窗口的字符
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
  // 返回最小覆盖子串
  return len == Number.MAX_SAFE_INTEGER ? "" : s.substr(start, len);
}


// console.log(minWindow1("ADOBECODEBANC","ABC"))
console.log(minWindow1("aab","aab"))
console.log(minWindow2("aab","aab"))