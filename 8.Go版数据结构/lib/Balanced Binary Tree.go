package lib

import "errors"

// BalancedBinaryTree 平衡二叉树节点
type BalancedBinaryTree struct {
    value       ElemType            // 节点储存值
    left, right *BalancedBinaryTree // 左右子树
    parent      *BalancedBinaryTree // 父节点
    height      int                 // 相对高度
}

// InitBalancedBinaryTree 初始化平衡二叉树
func InitBalancedBinaryTree(value ElemType) *BalancedBinaryTree {
    tree := new(BalancedBinaryTree)
    tree.value = value
    tree.height = 1
    return tree
}

// InsertNode 插入节点
func (tree *BalancedBinaryTree) InsertNode(value ElemType) {
    // 插入左子树
    if value < tree.value {
        // 无左子树
        if tree.left == nil {
            tree.left = new(BalancedBinaryTree)
            tree.left.parent = tree
        } else {
            tree.left.InsertNode(value)
        }
    } else { // 插入右子树
        // 无右子树
        if tree.right == nil {
            tree.right = new(BalancedBinaryTree)
            tree.right.parent = tree
        } else {
            tree.right.InsertNode(value)
        }
    }
    // LL型 右旋
    if tree.BF() == 2 {
        // LR型 先左旋
        if tree.left.BF() == -1 {
            tree.left.LeftRotate()
        }
        tree.RightRotate()
    }
    // RR型 左旋
    if tree.BF() == -2 {
        // RL型 先右旋
        if tree.right.BF() == 1 {
            tree.right.RightRotate()
        }
        tree.LeftRotate()
    }
}

// Delete 删除
// 1.被删除节点没有子节点直接删除
// 2.被删除节点只有一个子节点, 子节点直接连至删除节点的父节点
// 3.被删除节点有两个子节点, 用右子树的最小节点代替删除节点
// 4.检查调整平衡
func (tree *BalancedBinaryTree) Delete(value ElemType) error {
    // node为只有一个节点存在时的赋值节点
    node := new(BalancedBinaryTree)
    // 空树
    if tree == nil {
        return errors.New("树为空")
    }
    // 寻找值
    if value > tree.value {
        return tree.right.Delete(value)
    } else if value < tree.value {
        return tree.left.Delete(value)
    } else { // 有两个子节点
        if tree.left != nil && tree.right != nil {
            tree.value = tree.right.GetMin()
            _ = tree.right.Delete(tree.value)
        } else {                  // 有一个子节点
            if tree.left != nil { // 只有左节点
                node = tree.left
            } else { // 只有右节点
                node = tree.right
            }
            // 单节点的赋值
            tree.value = node.value
            tree.left = node.left
            tree.right = node.right
        }
    }
    // LL型 右旋
    if tree.BF() == 2 {
        // LR型 先左旋
        if tree.left.BF() == -1 {
            tree.left.LeftRotate()
        }
        tree.RightRotate()
    }
    // RR型 左旋
    if tree.BF() == -2 {
        // RL型 先右旋
        if tree.right.BF() == 1 {
            tree.right.RightRotate()
        }
        tree.LeftRotate()
    }
    return nil
}

// GetMin 获取树的最小节点值
func (tree *BalancedBinaryTree) GetMin() ElemType {
    if tree.left == nil && tree.right == nil {
        return tree.value
    } else if tree.left == nil {
        return tree.right.GetMin()
    } else if tree.right == nil {
        return tree.left.GetMin()
    } else {
        return tree.left.GetMin()
    }
}

// LeftRotate 左旋
// 1. 旧根节点为新根节点的左子树
// 2. 新根节点的左子树(如果存在)为旧根节点的右子树
func (tree *BalancedBinaryTree) LeftRotate() {
    oldRoot := tree
    newRoot := tree.right
    parent := tree.parent
    // newRoot替换OldRoot
    if parent != nil { // 如果oldRoot不是根节点
        // 判断newRoot的位置
        if oldRoot.parent.value > oldRoot.value {
            parent.left = newRoot
        } else {
            parent.right = newRoot
        }
    }
    newRoot.parent = parent
    // 将newRoot的左子树(如果存在)给oldRoot的右子树
    oldRoot.right = newRoot.left
    if newRoot.left != nil {
        newRoot.left.parent = oldRoot
    }
    // oldRoot为newRoot的左子树
    newRoot.left = oldRoot
    oldRoot.parent = newRoot
    // 更新高度
    oldRoot.height = oldRoot.Height()
    newRoot.height = newRoot.Height()
}

// RightRotate 右旋
// 1. 旧根节点为新根节点的右子树
// 2. 新根节点的右子树(如果存在)为旧根节点的左子树
func (tree *BalancedBinaryTree) RightRotate() {
    oldRoot := tree
    newRoot := tree.left
    parent := tree.parent
    // newRoot替换oldRoot
    if parent != nil { // 如果oldRoot不是根节点
        // 判断newRoot的位置
        if oldRoot.parent.value > oldRoot.value {
            parent.left = newRoot
        } else {
            parent.right = newRoot
        }
    }
    newRoot.parent = parent
    // 将newRoot的右子树(如果存在)给oldRoot的左子树
    oldRoot.left = newRoot.right
    if newRoot.right != nil {
        newRoot.right.parent = oldRoot
    }
    // oldRoot为newRoot的右子树
    newRoot.right = oldRoot
    oldRoot.parent = newRoot
    // 更新高度
    oldRoot.height = oldRoot.Height()
    newRoot.height = newRoot.Height()
}

// BF 计算平衡因子
func (tree *BalancedBinaryTree) BF() int {
    // 只有根节点
    if tree.left == nil && tree.right == nil {
        return 0
    } else if tree.right == nil {
        return tree.left.height
    } else if tree.left == nil {
        return tree.right.height
    } else {
        return tree.left.height - tree.right.height
    }
}

// Height 返回树的高度
func (tree *BalancedBinaryTree) Height() int {
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

// Value 获取根节点值
func (tree *BalancedBinaryTree) Value() ElemType {
    return tree.value
}

// Left 返回左子树
func (tree *BalancedBinaryTree) Left() *BalancedBinaryTree {
    return tree.left
}

// Right 返回右子树
func (tree *BalancedBinaryTree) Right() *BalancedBinaryTree {
    return tree.right
}

// FindNode 寻找节点
func (tree *BalancedBinaryTree) FindNode(value ElemType) (*BalancedBinaryTree, error) {
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

// PreOrder 前序遍历
func (tree *BalancedBinaryTree) PreOrder(array *[]ElemType) *[]ElemType {
    if tree != nil {
        *array = append(*array, tree.value)
        tree.left.PreOrder(array)
        tree.right.PreOrder(array)
    }
    return array
}

// InOrder 中序遍历
func (tree *BalancedBinaryTree) InOrder(array *[]ElemType) *[]ElemType {
    if tree != nil {
        tree.left.PreOrder(array)
        *array = append(*array, tree.value)
        tree.right.PreOrder(array)
    }
    return array
}

// PostOrder 后序遍历
func (tree *BalancedBinaryTree) PostOrder(array *[]ElemType) *[]ElemType {
    if tree != nil {
        tree.left.PreOrder(array)
        tree.right.PreOrder(array)
        *array = append(*array, tree.value)
    }
    return array
}
