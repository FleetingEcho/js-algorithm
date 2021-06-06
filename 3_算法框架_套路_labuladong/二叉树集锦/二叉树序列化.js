/* 
你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
*/

// ! 二叉树前序遍历 框架
/* function traverse(root) {
  if (root == null) return;
  // 前序遍历的代码
  traverse(root.left);
  traverse(root.right);
}
*/


let NULL = "#";

/* 主函数，将二叉树序列化为字符串 */
function serialize( root) {
    let sb =[];
    serializeHelper(root, sb);
    return sb.toString();//"[1,2,3,null,null,4,5]"
}

/* 辅助函数，将二叉树存入 StringBuilder */
function serializeHelper(root,sb) {
    if (root == null) {
        sb.push(NULL);
        return;
    }
    /****** 前序遍历位置 ******/
    sb.push(root.val);
    /***********************/
    serializeHelper(root.left, sb);
    serializeHelper(root.right, sb);
}


/* 主函数，将字符串反序列化为二叉树结构 */
function deserialize(data) {
  // 将字符串转化成列表
 let nodes =[];
  for (let s of data.split(",")) {
      nodes.push(s);
  }
  return deserializeHelper(nodes);
}

/* 辅助函数，通过 nodes 列表构造二叉树 */
function deserializeHelper(nodes) {
  if (nodes.length===0) return null;

  /****** 前序遍历位置 ******/
  // 列表最左侧就是根节点
  let first = nodes.shift();
  if (first===NULL) return null;
  let root = new TreeNode(parseInt(first,10));
  /***********************/
  root.left = deserializeHelper(nodes);
  root.right = deserializeHelper(nodes);
  return root;
}

// ! 还有其他办法可以解决该问题  --比如中序和后续遍历均可以

