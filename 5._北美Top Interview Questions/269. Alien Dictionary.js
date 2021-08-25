/* 
There is a new alien language which uses the latin alphabet. However,
the order among letters are unknown to you. You receive a list of non-empty words from the dictionary,
 where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:

Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"
Example 2:

Input:
[
  "z",
  "x"
]

Output: "zx"
Example 3:

Input:
[
  "z",
  "x",
  "z"
] 

Output: "" 

Explanation: The order is invalid, so return "".
*/

var alienOrder = function(words) {
const map=new Map();
let pos=0;
let newArr;
while(words&&words.length!==0){
  if(!map.has(words[0][pos])){
    map.set(words[0][pos],1);
  }
  else{
    let temp1=map.get(words[0][pos])
    map.set(words[0][pos],temp1++)
  }
  for(let i=1;i<words.length;i++){
    if(pos===words[i].length-1){
      // ? 这里需要对相同位数的字符连续删除，否则会因为i而改变；
      let temp=words; 
      newArr=temp.filter((val,index,self)=>{
        self.length>words[i].length-1
      })
      }
      if(words[i][pos]!==words[i-1][pos]){
        // 没有旧值？
        if(!map.has(words[i][pos])){
          map.set(words[i][pos],1)
          // 有旧值？
        }else{
          return ""
        }
        continue;
      }
      // 重复值？与上一个相同？
      let temp=map.get(words[i][pos])
      map.set(words[i][pos],temp+1);
    }
    if(newArr){words=newArr;}
  pos++;
}
return [...map.keys()].join("")
};

const aa=[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
const bb=[
  "z",
  "x"
];
const cc=[
  "z",
  "x",
  "z"
] 
const dd=[
  "wrt",
  "wrtkj",
  "wrtkjd"
]
console.log(alienOrder(aa));
console.log(alienOrder(bb));
console.log(alienOrder(cc));
