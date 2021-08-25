package lib

import "errors"

// SingleLinkedListNode 单链表节点
type SingleLinkedListNode struct {
    data ElemType
    next *SingleLinkedListNode
}

// SingleLinkedList 单链表
type SingleLinkedList struct {
    length int                   // 单链表长度
    head   *SingleLinkedListNode // 头节点
    tail   *SingleLinkedListNode // 尾节点
}

// InitSingleLinkedList 初始化单链表
func InitSingleLinkedList() *SingleLinkedList {
    return new(SingleLinkedList)
}

// AddElem 在单链表尾部添加一个节点
func (list *SingleLinkedList) AddElem(value ElemType) {
    node := new(SingleLinkedListNode)
    node.data = value
    // 前方无节点
    if list.length == 0 {
        list.head = node
    } else {
        // 前方有节点
        oldNode := list.tail
        oldNode.next = node
    }
    // 处理尾部和长度
    list.tail = node
    list.length++
}

// InsertElem 在单链表前方插入一个节点
func (list *SingleLinkedList) InsertElem(value ElemType) {
    node := new(SingleLinkedListNode)
    node.data = value
    node.next = list.head
    list.head = node
    list.length++
}

// InsertLocationElem 在单链表某位置插入一个节点
func (list *SingleLinkedList) InsertLocationElem(location int, value ElemType) error {
    node := new(SingleLinkedListNode)
    node.data = value
    // 不允许插入在头部以外、尾部以外
    if location > list.length || location < 0{
        return errors.New("无法插入该位置")
    }
    if location == 0 {
        node.next = list.head
        list.head = node
    } else {
        preElem := list.head
        // 寻找第location个节点
        for j := 0; j < location-1; j++ {
            preElem = preElem.next
        }
        // 此时preElem是第location个节点
        node.next = preElem.next
        preElem.next = node
        // 尾部处理
        if location == list.length {
            list.tail = node
        }
    }
    list.length++
    return nil
}

// DeleteLocationElem 删除单链表某位置的节点
func (list *SingleLinkedList) DeleteLocationElem(location int) error {
    // 不允许删除头部以外、尾部以外
    if location > list.length-1 || location < 0  {
        return errors.New("该处无节点")
    }
    // 删除头部
    if location == 0 {
        node := list.head
        list.head = node.next
    } else {
        preElem := list.head
        // 寻找第location个节点
        for j := 0; j < location-1; j++ {
            preElem = preElem.next
        }
        // node为要删除的节点
        node := preElem.next
        preElem.next = node.next
        // 尾部处理
        if location == list.length-1 {
            list.tail = preElem
        }
    }
    list.length--
    return nil
}

// GetLocationNode 获取某节点
func (list *SingleLinkedList) GetLocationNode(location int) *SingleLinkedListNode {
    if location > list.length-1 {
        return nil
    }
    preElem := list.head
    for j := 0; j < location; j++ {
        preElem = preElem.next
    }
    return preElem
}

// GetLength 获取长度
func (list *SingleLinkedList) GetLength() int {
    return list.length
}

// DeleteAll 删除全部节点
func (list *SingleLinkedList) DeleteAll() {
    list.head = nil
    list.tail = nil
    list.length = 0
}
