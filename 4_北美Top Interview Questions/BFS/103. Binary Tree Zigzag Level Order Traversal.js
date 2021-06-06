var zigzagLevelOrder = function(root) {
  let res=[],queue=[];
  if(root===null){ return []}
  queue.push(root);
  while(queue.length){
    let level=[];
    //注意，这里由于queue.shift()，所以必须在外部定义长度
    const len=queue.length;
    for(let i=0;i<len;i++){
      let node=queue.shift()
      // 仅仅添加一句判断
      if(res.length %2===0)level.push(node.val)
      else level.unshift(node.val);
      if(node.left!==null){queue.push(node.left)}
      if(node.right!==null){queue.push(node.right)}
    }
    res.push(level)
    
  }
  return res
};