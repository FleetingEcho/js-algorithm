/* 
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

*/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
let beginWord = "hit"
let endWord = "cog"
let wordList =["hot","dot","dog","lot","log","cog"]
const ladderLength = function(beginWord, endWord, wordList) {
  if(!endWord || wordList.indexOf(endWord) == -1) return 0
// 各个通用状态对应所有单词
let comboDicts = {};
let len = beginWord.length;
  for(let i = 0;i<wordList.length;i++){
  for(let r = 0;r<len;r++){
    let newWord = wordList[i].substring(0,r)+'*'+wordList[i].substring(r+1,len);
    (!comboDicts[newWord]) && (comboDicts[newWord] = []);//前面的执行了后面的才执行
    comboDicts[newWord].push(wordList[i]);
  }
}
/* 
{
  '*ot': [ 'hot', 'dot', 'lot' ],
  'h*t': [ 'hot' ],
  'ho*': [ 'hot' ],
  'd*t': [ 'dot' ],
  'do*': [ 'dot', 'dog' ],
  '*og': [ 'dog', 'log', 'cog' ],
  'd*g': [ 'dog' ],
  'l*t': [ 'lot' ],
  'lo*': [ 'lot', 'log' ],
  'l*g': [ 'log' ],
  'c*g': [ 'cog' ],
  'co*': [ 'cog' ]
}

*/
// 遍历所有的字典，如果最后能有cog,就return层级，否则就是0
// 必须加入visited
let queue = [[beginWord,1]];
let visited = {beginWord:true};
while(queue.length > 0){
  let currNode = queue.shift();
  let currWord = currNode[0];
  let currLevel = currNode[1];
  for(let i = 0;i < len;i++){
    // 通用状态
    let newWord = currWord.substring(0,i)+'*'+currWord.substring(i+1,len);
    console.log(newWord);
    if(newWord in comboDicts){
      let tmpWords = comboDicts[newWord];//数组列表，所有可能
      for(let z = 0;z<tmpWords.length;z++){
        if(tmpWords[z] == endWord){
          return currLevel + 1;
        }
        // 已经visited就不再push了
        if(!visited[tmpWords[z]]){
          visited[tmpWords[z]] = true;
          queue.push([tmpWords[z],currLevel+1]);
                  }
              }
          }
  }
}
return 0;
};

console.log(ladderLength(beginWord,endWord,wordList));