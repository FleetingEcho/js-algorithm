/* 
给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：

字母异位词指字母相同，但排列不同的字符串。
不考虑答案输出的顺序。
示例 1:

输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 示例 2:

输入:
s: "abab" p: "ab"

输出:
[0, 1, 2]

解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
*/

function findAnagrams(s, t) {
  let need={};
  let window={};
  // 没有设置为0，有则累加
  for (const c of t){
    if(!need[c]) need[c]=1;
    else need[c]++;
  };
  let res=[];
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
      if (valid == Object.keys(need).length) res.push(left)
      let d = s[left];
      left++;
      // 进行窗口内数据的一系列更新
      if (need[d]) {
          if (window[d] == need[d]) valid--;
          window[d]--;
      }
  }
  }
  return res;
}

console.log(findAnagrams("cbaebabacd","abc"))