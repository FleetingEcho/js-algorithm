/* 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

*/


function lengthOfLongestSubstring(s) {
  let window={};
  
  let left = 0, right = 0;
  let res=0;
  while (right < s.length) {
    let c = s[right];
    right++;
    if(!window[c]) window[c]=0;
    // 进行窗口内数据的一系列更新
    window[c]++;
    // 判断左侧窗口是否要收缩
    while (window[c] > 1) {
        let d = s[left];
        left++;
        // 进行窗口内数据的一系列更新
        window[d]--;
    }
  // 在这里更新答案
  res = Math.max(res, right - left);
  }
  return res;
}

console.log(lengthOfLongestSubstring("abcabcbb"))