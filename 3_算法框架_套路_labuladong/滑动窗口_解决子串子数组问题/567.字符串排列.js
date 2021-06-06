/* 
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
换句话说，第一个字符串的排列之一是第二个字符串的子串。

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
 

输入: s1= "ab" s2 = "eidboaoo"
输出: False

*/
function checkInclusion(t, s) {
  let need={};
  let window={};
  // 没有设置为0，有则累加
  for (const c of t){
    if(!need[c]) need[c]=1;
    else need[c]++;
  };

  let left = 0, right = 0;
  let valid = 0; // 记录最小覆盖子串的起始索引及长度
  while (right < s.length) {
    let c = s[right];
    right++;
    // 进行窗口内数据的一系列更新
    if (need[c]) {
        if(!window[c]){window[c]=0}
        window[c]++
        if (window[c]== need[c]) valid++
      }
     // 判断左侧窗口是否要收缩
     while (right - left >= t.length) {
      // 在这里判断是否找到了合法的子串
      if (valid == Object.keys(need).length) return true;
      let d = s[left];
      left++;
      // 进行窗口内数据的一系列更新
      if (need[d]) {
          if (window[d] == need[d]) valid--;
          window[d]--;
      }
  }
  }
  return false;
}

console.log(checkInclusion("ab","eidbaooo"))