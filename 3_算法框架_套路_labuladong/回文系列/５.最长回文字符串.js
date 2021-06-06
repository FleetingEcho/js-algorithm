/* 
最长回文子串
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
*/
var longestPalindrome = function(s) {
   let res='';
  //  有位数中奇偶的区别
   for(let i =0;i<s.length;i++){
     let s1=helper(s,i,i); //s[i]为中心的回文字符串
     let s2=helper(s,i,i+1); //找到以s[i]和s[i+1]为中心的回文字符串
     res=res.length>s1.length? res: s1; 
     res=res.length>s2.length? res: s2; 
   }
   return res;
};

function helper(s, l, r){
  while(l>=0 && r<s.length&& s[l]===s[r]){
    l--  //往两边扩散技能型寻找
    r++
  }
  return s.substr(l+1,r-l-1)
}