package lib

import "errors"

// Stack 栈
type Stack struct {
    maxLength int           // 栈最高
    top       int           // 栈顶(当前栈高度)
    array     [MAX]ElemType // 数组模拟栈
}

// InitStack 初始化栈
func InitStack() *Stack {
    stack := new(Stack)
    stack.top = -1
    stack.maxLength = MAX
    return stack
}

// Push 入栈
func (stack *Stack) Push(value ElemType) error {
    // 栈满
    if stack.top == stack.maxLength-1 {
        return errors.New("栈满")
    }
    stack.top++
    stack.array[stack.top] = value
    return nil
}

// Pop 出栈
func (stack *Stack) Pop() (ElemType, error) {
    // 栈空
    if stack.top == -1 {
        return 0, errors.New("栈空")
    }
    value := stack.array[stack.top]
    stack.top--
    return value, nil
}

// List 遍历栈
func (stack *Stack) List() ([]ElemType, error) {
    if stack.top == -1 {
        return nil, errors.New("栈空")
    }
    return stack.array[0:stack.top], nil
}

// Length 栈长度
func (stack *Stack) Length() int {
    return stack.top + 1
}

// Clear 清空栈
func (stack *Stack) Clear() error {
    if stack.top == -1 {
        return errors.New("栈空")
    }
    // 改变底层数组的方法
    //for i := stack.top; i >= 0; i-- {
    //    stack.array[i] = 0
    //}

    // 不改变底层数组的方法, 整体来说减少赋值次数
    stack.top = -1
    return nil
}
