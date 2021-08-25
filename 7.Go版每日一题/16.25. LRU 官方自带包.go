package main

import (
	"container/list"
)

func mainLRU1() {

}

/**
* Your LRUCache object will be instantiated and called as such:
* obj := Constructor(capacity);
* param_1 := obj.Get(key);
* obj.Put(key,value);
 */
type LRUCache struct {
	myList *list.List
	m      map[interface{}]*list.Element
	cap    int
}

type CacheNode struct {
	key, value int
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		myList: list.New(),
		m:      make(map[interface{}]*list.Element, capacity),
		cap:    capacity,
	}
}

func (cur *LRUCache) Get(key int) int {
	if p, ok := cur.m[key]; ok {
		cur.myList.MoveToFront(p)
		return p.Value.(*CacheNode).value
	} else {
		return -1
	}
}

func (cur *LRUCache) Put(key int, value int) {
	if p, ok := cur.m[key]; ok {
		cur.myList.MoveToFront(p)
		p.Value.(*CacheNode).value = value
	} else {
		newNode := cur.myList.PushFront(&CacheNode{key, value})
		cur.m[key] = newNode
		if cur.myList.Len() > cur.cap {
			back := cur.myList.Back()
			delete(cur.m, back.Value.(*CacheNode).key)
			cur.myList.Remove(back)
		}
	}
}
