const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和
  const dfs = (root) => {
    if (root == null) return 0;   // 遍历到null节点，返回0;
    
    const left = Math.max(0, dfs(root.left));   // 左子树提供的最大收益
    const right = Math.max(0, dfs(root.right)); // 右子树提供的最大收益
     maxSum=Math.max(maxSum,left+right+root.val);

    return  Math.max(left,right)+root.val //返回节点贡献的最大值
  };

  dfs(root); // 递归的入口
  return maxSum;
};