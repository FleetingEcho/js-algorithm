/* 
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function(s, t) {
  const map={};
  s.split("").map((val,index)=>{
    if(!map[val]) map[val]=1;
    else map[val]++
  })
  for(let i=0;i<t.length;i++){
    if(!map[t[i]]) return false;
    if(map[t[i]]){map[t[i]]--};
    if(map[t[i]]===0){delete(map[t[i]])}
  }
  if(Object.keys(map).length!==0) return false;
  return true
};

const s='anagram';
const t='nagaram'
console.log(isAnagram(s,t));


// ! 或者巧妙办法

var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};