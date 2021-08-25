package main

/**
* Your LRUCache object will be instantiated and called as such:
* obj := Constructor(capacity);
* param_1 := obj.Get(key);
* obj.Put(key,value);
 */
func mainLRU() {}

// type LinkNode struct {
// 	key, value int
// 	pre, next  *LinkNode
// }

// type LRUCache struct {
// 	m          map[int]*LinkNode
// 	capacity   int
// 	head, tail *LinkNode
// }

// func Constructor(capacity int) LRUCache {
// 	head := &LinkNode{-1, -1, nil, nil}
// 	tail := &LinkNode{-1, -1, nil, nil}
// 	head.next = tail
// 	tail.pre = head
// 	cache := LRUCache{make(map[int]*LinkNode), capacity, head, tail}
// 	return cache
// }

// func (cur *LRUCache) _AddNode(node *LinkNode) {
// 	node.pre = cur.head
// 	node.next = cur.head.next
// 	cur.head.next = node
// 	node.next.pre = node
// }

// func (cur *LRUCache) RemoveNode(node *LinkNode) {
// 	node.pre.next = node.next
// 	node.next.pre = node.pre
// }

// func (cur *LRUCache) MoveToHead(node *LinkNode) {
// 	cur.RemoveNode(node)
// 	cur._AddNode(node)
// }

// func (cur *LRUCache) Get(key int) int {
// 	m := cur.m
// 	if node, ok := m[key]; ok {
// 		cur.MoveToHead(node)
// 		return node.value
// 	} else {
// 		return -1
// 	}
// }

// func (cur *LRUCache) Put(key int, value int) {
// 	m := cur.m
// 	if node, ok := m[key]; ok {
// 		node.value = value
// 		cur.MoveToHead(node)
// 	} else {
// 		n := &LinkNode{key, value, nil, nil}
// 		if len(m) >= cur.capacity {
// 			delete(m, cur.tail.pre.key)
// 			cur.RemoveNode(cur.tail.pre)
// 		}
// 		m[key] = n
// 		cur._AddNode(n)
// 	}
// }
