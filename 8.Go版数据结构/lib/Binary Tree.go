package lib

import (
    "errors"
)

// BinaryTree 二叉树
type BinaryTree struct {
    value       ElemType    // 节点储存值
    left, right *BinaryTree // 左右子树
    parent      *BinaryTree // 父节点
}

// InitBinaryTree 初始化二叉树
func InitBinaryTree(value ElemType) *BinaryTree {
    tree := new(BinaryTree)
    tree.value = value
    tree.parent = nil
    return tree
    //return new(BinaryTree)
}

// Insert 插入节点
func (tree *BinaryTree) Insert(value ElemType) {
    // 空树
    if tree.value == 0 {
        tree.value = value
    } else {
        // 非空树
        if value > tree.value {
            if tree.right == nil {
                tree.right = new(BinaryTree)
                tree.right.parent = tree
            }
            tree.right.Insert(value)
        } else {
            if tree.left == nil {
                tree.left = new(BinaryTree)
                tree.left.parent = tree
            }
            tree.left.Insert(value)
        }
    }
}

// Delete 删除节点
func (tree *BinaryTree) Delete(value ElemType) error {
    node, err := tree.FindNode(value)
    parent := node.parent
    // 未找到该节点
    if err != nil {
        return err
    }
    // node为要删除的节点
    if node.left == nil && node.right == nil{
        if node.parent.left == node{
            node.parent.left = nil
        }else{
            node.parent.right = nil
        }
        return nil
    }
    // 左孩子为空
    if node.left == nil {
        // 父节点的孩子重新赋值
        if parent.left == node {
            parent.left = node.right
        } else {
            parent.right = node.right
        }
        // 更新子节点
        node = node.right
        node.parent = parent
        return nil
    }
    // 右孩子为空
    if node.right == nil {
        // 父节点的孩子重新赋值
        if parent.left == node {
            parent.left = node.right
        } else {
            parent.right = node.right
        }
        // 更新子节点
        node = node.left
        node.parent = parent
        return nil
    }
    // 左右孩子都不为空
    // cur为右孩子的最左侧孩子设为新的节点
    cur := node.right
    var flag = true // 用于标识cur是否为右子树的唯一节点
    for cur.left != nil {
        cur = cur.left
        flag = false
    }
    node.value = cur.value
    if !flag { // cur不是右子树唯一节点
            cur.parent.left = cur.right
    }else{
        cur.parent.right = nil
    }
    return nil
}

// Value 返回节点值
func (tree *BinaryTree) Value() ElemType {
    return tree.value
}

// Height 返回树的高度
func (tree *BinaryTree) Height() int {
    if tree == nil {
        return 0
    }
    leftHeight := tree.left.Height()
    rightHeight := tree.right.Height()
    if leftHeight > rightHeight {
        return leftHeight + 1
    } else {
        return rightHeight + 1
    }
}

// Left 返回左子树
func (tree *BinaryTree) Left() *BinaryTree {
    return tree.left
}

// Right 返回右子树
func (tree *BinaryTree) Right() *BinaryTree {
    return tree.right
}

// FindNode 寻找节点
func (tree *BinaryTree) FindNode(value ElemType) (*BinaryTree, error) {
    if tree == nil {
        return nil, errors.New("不存在该节点")
    }
    if value == tree.value {
        return tree, nil
    } else {
        if value > tree.value {
            return tree.right.FindNode(value)
        } else {
            return tree.left.FindNode(value)
        }
    }
}

// PreNode 前驱节点
func (tree *BinaryTree) PreNode() *BinaryTree {
    return tree.parent
}

// PreOrder 前序遍历
func (tree *BinaryTree) PreOrder(array *[]ElemType) *[]ElemType {
    if tree != nil {
        *array = append(*array, tree.value)
        tree.left.PreOrder(array)
        tree.right.PreOrder(array)
    }
    return array
}

// InOrder 中序遍历
func (tree *BinaryTree) InOrder(array *[]ElemType) *[]ElemType {
    if tree != nil {
        tree.left.PreOrder(array)
        *array = append(*array, tree.value)
        tree.right.PreOrder(array)
    }
    return array
}

// PostOrder 后序遍历
func (tree *BinaryTree) PostOrder(array *[]ElemType) *[]ElemType {
    if tree != nil {
        tree.left.PreOrder(array)
        tree.right.PreOrder(array)
        *array = append(*array, tree.value)
    }
    return array
}

// GrandOrder 广度优先遍历(层先遍历)
func (tree *BinaryTree) GrandOrder(array *[][]ElemType) {
    if tree == nil {
        return
    }
    GrandBfs(tree, 0, array)
}

func GrandBfs(tree *BinaryTree, level int, array *[][]ElemType) {
    if tree == nil {
        return
    }
    // 补充切片
    if len(*array) < level+1 {
        *array = append(*array, make([]ElemType, 0))
    }
    (*array)[level] = append((*array)[level], tree.value)
    GrandBfs(tree.left, level+1, array)
    GrandBfs(tree.right, level+1, array)
}
