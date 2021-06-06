/* 
Given a binary tree, return the level order traversal 
of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

var levelOrder = function(root) {
  let res=[],queue=[];
  if(root===null){ return []}
  queue.push(root);
  while(queue.length){
    let level=[];
    //注意，这里由于queue.shift()，所以必须在外部定义长度
    const len=queue.length;
    for(let i=0;i<len;i++){
      let node=queue.shift()
      level.push(node.val)
      if(node.left!==null){queue.push(node.left)}
      if(node.right!==null){queue.push(node.right)}
    }
    res.push(level)
    
  }
  return res
};
