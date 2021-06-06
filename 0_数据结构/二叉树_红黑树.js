const Colors={
  RED:0,
  BLACK:1
}
class Node {
  constructor(data) {
          // this.root = this //根节点
          this.data = data //当前数据
          this.left = null //左子树
          this.right = null //右子树
        }
  toString() {
    return `${this.data}`;
  }
}
class RedBlackNode extends Node {
  constructor(data) {
    super(data);
    this.data=data;
    this.color = Colors.RED;
    this.parent=null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
  // 翻转颜色
  flipColor() {
    if (this.color === Colors.RED) {
      this.color = Colors.BLACK;
    } else {
      this.color = Colors.RED;
    }
  }
}

class RedBlackTree{
  constructor(){
    this.root=null;
  }

  insert(data){
    // 根节点---黑色
    if(this.root==null){
    this.root= new RedBlackNode(data)
    this.root.color =Colors.BLACK
    } else{
      // 插入节点并且做自适应调整
    const newNode =this.insertNode(this.root,data)
    this.fixTreeProperties(newNode)
  }
  }

  insertNode(node,data){

    if(data < node.data){
      // 左子树为空,则直接创建新的子节点
      if(node.left==null){
        node.left=new RedBlackNode(data);
        node.left.parent=node;
        return node.left; //返回节点，进行验证用
      }
      else{
      // 在子左树下继续判断 
        return this.insertNode(node.left,data);
      }
  } 
  else if (node.right == null) { 
    // 右子树为空,创建新的子节点
        node.right = new RedBlackNode(data); 
        node.right.parent = node; 
        return node.right; //返回节点，进行验证用
  } 
  else { 
    // 否则在右树下继续判断
  return this.insertNode(node.right, data); 
  } 
 }
//  左-左    右旋转
 rotationLL(node) {
  const tmp = node.left;
  node.left = tmp.right;

  if (tmp.right && tmp.right.data) {
    tmp.right.parent = node;
  }
  tmp.parent = node.parent;
  if (!node.parent) {
    this.root = tmp;
  } else {
    if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
  }

  tmp.right = node;
  node.parent = tmp;
}
// 右-右    左旋转
rotationRR(node) {
  const tmp = node.right;
  node.right = tmp.left;
  if (tmp.left && tmp.left.data) {
    tmp.left.parent = node;
  }
  tmp.parent = node.parent;
  if (!node.parent) {
    this.root = tmp;
  } else {
    if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
  }
  tmp.left = node;
  node.parent = tmp;
}

getRoot() {
  return this.root;
}
 fixTreeProperties(node) {
  //  父节点--红色  ，node节点也是红色
  while (node && node.parent && node.parent.color === Colors.RED && node.color !== Colors.BLACK) {
     let parent = node.parent;
     const grandParent = parent.parent;
    //情形 A：父节点是左侧子节点
    if (grandParent && grandParent.left === parent) {
      const uncle = grandParent.right;
      if (uncle && uncle.color === Colors.RED) {
      //情形 1A  叔节点也是红色---- 只需要重新填色
        grandParent.color = Colors.RED;
        parent.color = Colors.BLACK;
        uncle.color = Colors.BLACK;
        node = grandParent;
      } else {
        //情形 2A：节点是右侧子节点——左旋转
        if (node === parent.right) {
          this.rotationRR(parent);
          node = parent;
          parent = node.parent;
        }

        // 情形 3A：节点是左侧子节点——右旋转
        if(node === parent.left){
          this.rotationLL(grandParent);
        parent.color = Colors.BLACK;
        grandParent.color = Colors.RED;
        node = parent;
        }
      }

    } else { 
      // 情形B  父节点是右侧子节点

      const uncle = grandParent.left;

      // 情形1B 叔节点是红色------ 只重新上色
      if (uncle && uncle.color === Colors.RED) {
        grandParent.color = Colors.RED;
        parent.color = Colors.BLACK;
        uncle.color = Colors.BLACK;
        node = grandParent;
      } else {
        // 情形2B  节点是左侧子节点 ----左旋转
        if (node === parent.left) {
          this.rotationLL(parent);
          node = parent;
          parent = node.parent;
        }

         // 情形3B  接电视右侧子节点----左旋转
        if(node===parent.right){
          this.rotationRR(grandParent);
        parent.color = Colors.BLACK;
        grandParent.color = Colors.RED;
        node = parent;
        }
      }
    }
  }
  // 保证根节点始终是黑色
  this.root.color = Colors.BLACK;
}
}



const tree = new RedBlackTree()
      tree.insert(3)
      tree.insert(7)
      tree.insert(11)
      tree.insert(9)
      tree.insert(18)
      tree.insert(15)
      tree.insert(14)
      tree.insert(16)
      tree.insert(26)


      console.log(tree);


      /*
      自平衡二叉树结果
                 4
               /   \
              2     6
             / \   / \
            1   3 5   7
                       \
                        8


                       11(黑)
                   /           \
              7(红)            15（红）
              /   \           /      \
        3（黑）  9（黑）     14（黑）  18（黑）
                                    /       \
                                  16（红）  26（红）
      */

