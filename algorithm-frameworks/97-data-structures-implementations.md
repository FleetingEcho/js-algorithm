# 数据结构手写实现

> 常见数据结构的从零实现，含 TypeScript / Python。
>
> 面试常考"手写 Xxx"时的参考模板。

---

## 目录

1. [链表](#链表)
2. [双向链表](#双向链表)
3. [栈](#栈)
4. [队列（循环队列）](#队列循环队列)
5. [双端队列](#双端队列)
6. [哈希表（分离链接法）](#哈希表分离链接法)
7. [二叉搜索树](#二叉搜索树)
8. [AVL 树](#avl-树)
9. [堆（大顶堆 / 小顶堆）](#堆大顶堆--小顶堆)
10. [优先级队列](#优先级队列)
11. [图（邻接表 + BFS/DFS/拓扑排序）](#图邻接表--bfsdfs拓扑排序)
12. [复杂度速查表](#复杂度速查表)

---

## 链表

```typescript
class ListNode<T> {
  constructor(
    public val: T,
    public next: ListNode<T> | null = null
  ) {}
}

class LinkedList<T> {
  head: ListNode<T> | null = null;

  /** 在末尾添加 */
  append(val: T): void {
    const node = new ListNode(val);
    if (!this.head) { this.head = node; return; }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = node;
  }

  /** 删除第一个匹配的值 */
  delete(val: T): boolean {
    if (!this.head) return false;
    if (this.head.val === val) { this.head = this.head.next; return true; }
    let cur = this.head;
    while (cur.next) {
      if (cur.next.val === val) { cur.next = cur.next.next; return true; }
      cur = cur.next;
    }
    return false;
  }

  /** 查找 */
  find(val: T): ListNode<T> | null {
    let cur = this.head;
    while (cur) {
      if (cur.val === val) return cur;
      cur = cur.next;
    }
    return null;
  }

  /** 转数组 */
  toArray(): T[] {
    const res: T[] = [];
    let cur = this.head;
    while (cur) { res.push(cur.val); cur = cur.next; }
    return res;
  }
}
```

```python
class ListNode:
    def __init__(self, val: int, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, val: int):
        node = ListNode(val)
        if not self.head:
            self.head = node
            return
        cur = self.head
        while cur.next:
            cur = cur.next
        cur.next = node

    def delete(self, val: int) -> bool:
        if not self.head: return False
        if self.head.val == val:
            self.head = self.head.next
            return True
        cur = self.head
        while cur.next:
            if cur.next.val == val:
                cur.next = cur.next.next
                return True
            cur = cur.next
        return False

    def to_list(self) -> list:
        res, cur = [], self.head
        while cur:
            res.append(cur.val)
            cur = cur.next
        return res
```

---

## 双向链表

```typescript
class DoublyListNode<T> {
  constructor(
    public val: T,
    public prev: DoublyListNode<T> | null = null,
    public next: DoublyListNode<T> | null = null
  ) {}
}

class DoublyLinkedList<T> {
  head: DoublyListNode<T> | null = null;
  tail: DoublyListNode<T> | null = null;

  append(val: T): void {
    const node = new DoublyListNode(val);
    if (!this.head) { this.head = this.tail = node; return; }
    this.tail!.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  delete(val: T): boolean {
    let cur = this.head;
    while (cur) {
      if (cur.val === val) {
        if (cur.prev) cur.prev.next = cur.next;
        else this.head = cur.next;
        if (cur.next) cur.next.prev = cur.prev;
        else this.tail = cur.prev;
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  toArray(): T[] {
    const res: T[] = [];
    let cur = this.head;
    while (cur) { res.push(cur.val); cur = cur.next; }
    return res;
  }
}
```

```python
class DoublyListNode:
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, val):
        node = DoublyListNode(val)
        if not self.head:
            self.head = self.tail = node
            return
        self.tail.next = node
        node.prev = self.tail
        self.tail = node

    def delete(self, val) -> bool:
        cur = self.head
        while cur:
            if cur.val == val:
                if cur.prev: cur.prev.next = cur.next
                else: self.head = cur.next
                if cur.next: cur.next.prev = cur.prev
                else: self.tail = cur.prev
                return True
            cur = cur.next
        return False

    def to_list(self) -> list:
        res, cur = [], self.head
        while cur:
            res.append(cur.val)
            cur = cur.next
        return res
```

---

## 栈

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  peek(): T | undefined { return this.items[this.items.length - 1]; }
  isEmpty(): boolean { return this.items.length === 0; }
  size(): number { return this.items.length; }
  clear(): void { this.items = []; }
}
```

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item): self.items.append(item)
    def pop(self): return self.items.pop() if self.items else None
    def peek(self): return self.items[-1] if self.items else None
    def is_empty(self): return len(self.items) == 0
    def size(self): return len(self.items)
    def clear(self): self.items = []
```

---

## 队列（循环队列）

```typescript
class Queue<T> {
  private data: (T | undefined)[];
  private max: number;
  private head = 0;
  private tail = 0;
  private _size = 0;

  constructor(max = 1000) {
    this.max = max;
    this.data = new Array(max);
  }

  enqueue(item: T): void {
    if (this._size >= this.max) throw new Error('Queue overflow');
    this.data[this.tail] = item;
    this.tail = (this.tail + 1) % this.max;
    this._size++;
  }

  dequeue(): T {
    if (this._size === 0) throw new Error('Queue underflow');
    const item = this.data[this.head]!;
    this.head = (this.head + 1) % this.max;
    this._size--;
    return item;
  }

  isEmpty(): boolean { return this._size === 0; }
  size(): number { return this._size; }
}
```

```python
class Queue:
    def __init__(self, max_size=1000):
        self.max = max_size
        self.data = [None] * max_size
        self.head = 0
        self.tail = 0
        self._size = 0

    def enqueue(self, item):
        if self._size >= self.max: raise Exception('Queue overflow')
        self.data[self.tail] = item
        self.tail = (self.tail + 1) % self.max
        self._size += 1

    def dequeue(self):
        if self._size == 0: raise Exception('Queue underflow')
        item = self.data[self.head]
        self.head = (self.head + 1) % self.max
        self._size -= 1
        return item

    def is_empty(self): return self._size == 0
    def size(self): return self._size
```

---

## 双端队列

```typescript
class Deque<T> {
  private items: T[] = [];

  addFront(item: T): void { this.items.unshift(item); }
  addBack(item: T): void { this.items.push(item); }
  removeFront(): T | undefined { return this.items.shift(); }
  removeBack(): T | undefined { return this.items.pop(); }
  peekFront(): T | undefined { return this.items[0]; }
  peekBack(): T | undefined { return this.items[this.items.length - 1]; }
  isEmpty(): boolean { return this.items.length === 0; }
  size(): number { return this.items.length; }
}
```

```python
from collections import deque

# Python 标准库 deque 已支持双端操作
# d = deque()
# d.append(x)      # 右端添加
# d.appendleft(x)  # 左端添加
# d.pop()          # 右端删除
# d.popleft()      # 左端删除
```

---

## 哈希表（分离链接法）

```typescript
class HashNode<K, V> {
  constructor(
    public key: K,
    public value: V,
    public next: HashNode<K, V> | null = null
  ) {}
}

class HashTable<K, V> {
  private buckets: (HashNode<K, V> | null)[];
  private size = 0;
  private readonly capacity: number;

  constructor(capacity = 53) {
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null);
  }

  private hash(key: K): number {
    const str = String(key);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
    }
    return hash;
  }

  put(key: K, value: V): void {
    const idx = this.hash(key);
    const node = new HashNode(key, value);
    if (!this.buckets[idx]) {
      this.buckets[idx] = node;
    } else {
      let cur = this.buckets[idx]!;
      while (cur) {
        if (cur.key === key) { cur.value = value; return; }
        if (!cur.next) break;
        cur = cur.next;
      }
      cur.next = node;
    }
    this.size++;
  }

  get(key: K): V | undefined {
    let cur = this.buckets[this.hash(key)];
    while (cur) {
      if (cur.key === key) return cur.value;
      cur = cur.next;
    }
    return undefined;
  }

  delete(key: K): boolean {
    const idx = this.hash(key);
    let cur = this.buckets[idx];
    if (!cur) return false;
    if (cur.key === key) { this.buckets[idx] = cur.next; this.size--; return true; }
    while (cur.next) {
      if (cur.next.key === key) { cur.next = cur.next.next; this.size--; return true; }
      cur = cur.next;
    }
    return false;
  }

  getSize(): number { return this.size; }
}
```

```python
class HashNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class HashTable:
    def __init__(self, capacity=53):
        self.capacity = capacity
        self.buckets = [None] * capacity
        self.size = 0

    def _hash(self, key):
        return hash(key) % self.capacity

    def put(self, key, value):
        idx = self._hash(key)
        if not self.buckets[idx]:
            self.buckets[idx] = HashNode(key, value)
        else:
            cur = self.buckets[idx]
            while cur:
                if cur.key == key:
                    cur.value = value
                    return
                if not cur.next: break
                cur = cur.next
            cur.next = HashNode(key, value)
        self.size += 1

    def get(self, key):
        cur = self.buckets[self._hash(key)]
        while cur:
            if cur.key == key: return cur.value
            cur = cur.next
        return None

    def delete(self, key) -> bool:
        idx = self._hash(key)
        cur = self.buckets[idx]
        if not cur: return False
        if cur.key == key:
            self.buckets[idx] = cur.next
            self.size -= 1
            return True
        while cur.next:
            if cur.next.key == key:
                cur.next = cur.next.next
                self.size -= 1
                return True
            cur = cur.next
        return False
```

---

## 二叉搜索树

```typescript
class BSTNode<T> {
  constructor(
    public val: T,
    public left: BSTNode<T> | null = null,
    public right: BSTNode<T> | null = null
  ) {}
}

class BST<T> {
  root: BSTNode<T> | null = null;

  insert(val: T): void {
    const insertNode = (node: BSTNode<T> | null): BSTNode<T> => {
      if (!node) return new BSTNode(val);
      if (val < node.val) node.left = insertNode(node.left);
      else if (val > node.val) node.right = insertNode(node.right);
      return node;
    };
    this.root = insertNode(this.root);
  }

  search(val: T): BSTNode<T> | null {
    let cur = this.root;
    while (cur) {
      if (val === cur.val) return cur;
      cur = val < cur.val ? cur.left : cur.right;
    }
    return null;
  }

  delete(val: T): void {
    const deleteNode = (node: BSTNode<T> | null): BSTNode<T> | null => {
      if (!node) return null;
      if (val < node.val) { node.left = deleteNode(node.left); return node; }
      if (val > node.val) { node.right = deleteNode(node.right); return node; }
      // 找到目标
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      // 有两个子节点
      let min = node.right;
      while (min.left) min = min.left;
      node.val = min.val;
      node.right = deleteNode(node.right, min.val);
      return node;
    };
    this.root = deleteNode(this.root);
  }

  inOrder(): T[] {
    const res: T[] = [];
    function dfs(node: BSTNode<T> | null) {
      if (!node) return;
      dfs(node.left);
      res.push(node.val);
      dfs(node.right);
    }
    dfs(this.root);
    return res;
  }
}
```

```python
class BSTNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, val):
        def _insert(node):
            if not node: return BSTNode(val)
            if val < node.val: node.left = _insert(node.left)
            elif val > node.val: node.right = _insert(node.right)
            return node
        self.root = _insert(self.root)

    def search(self, val):
        cur = self.root
        while cur:
            if val == cur.val: return cur
            cur = cur.left if val < cur.val else cur.right
        return None

    def inorder(self) -> list:
        res = []
        def dfs(node):
            if not node: return
            dfs(node.left)
            res.append(node.val)
            dfs(node.right)
        dfs(self.root)
        return res
```

---

## AVL 树

```typescript
class AVLNode {
  constructor(
    public val: number,
    public left: AVLNode | null = null,
    public right: AVLNode | null = null,
    public height: number = 1
  ) {}
}

class AVLTree {
  root: AVLNode | null = null;

  private height(node: AVLNode | null): number {
    return node ? node.height : 0;
  }

  private balanceFactor(node: AVLNode | null): number {
    return this.height(node?.left ?? null) - this.height(node?.right ?? null);
  }

  private updateHeight(node: AVLNode): void {
    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  private rotateRight(y: AVLNode): AVLNode {
    const x = y.left!;
    y.left = x.right;
    x.right = y;
    this.updateHeight(y);
    this.updateHeight(x);
    return x;
  }

  private rotateLeft(x: AVLNode): AVLNode {
    const y = x.right!;
    x.right = y.left;
    y.left = x;
    this.updateHeight(x);
    this.updateHeight(y);
    return y;
  }

  insert(val: number): void {
    const insertNode = (node: AVLNode | null): AVLNode => {
      if (!node) return new AVLNode(val);
      if (val < node.val) node.left = insertNode(node.left);
      else if (val > node.val) node.right = insertNode(node.right);
      else return node;

      this.updateHeight(node);
      const bf = this.balanceFactor(node);

      if (bf > 1 && val < node.left!.val) return this.rotateRight(node);
      if (bf < -1 && val > node.right!.val) return this.rotateLeft(node);
      if (bf > 1 && val > node.left!.val) {
        node.left = this.rotateLeft(node.left!);
        return this.rotateRight(node);
      }
      if (bf < -1 && val < node.right!.val) {
        node.right = this.rotateRight(node.right!);
        return this.rotateLeft(node);
      }
      return node;
    };
    this.root = insertNode(this.root);
  }
}
```

```python
class AVLNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    def _height(self, node): return node.height if node else 0

    def _update_height(self, node):
        node.height = max(self._height(node.left), self._height(node.right)) + 1

    def _balance(self, node): return self._height(node.left) - self._height(node.right)

    def _rotate_right(self, y):
        x = y.left
        y.left = x.right
        x.right = y
        self._update_height(y)
        self._update_height(x)
        return x

    def _rotate_left(self, x):
        y = x.right
        x.right = y.left
        y.left = x
        self._update_height(x)
        self._update_height(y)
        return y

    def insert(self, val):
        def _insert(node):
            if not node: return AVLNode(val)
            if val < node.val: node.left = _insert(node.left)
            elif val > node.val: node.right = _insert(node.right)
            else: return node

            self._update_height(node)
            bf = self._balance(node)

            if bf > 1 and val < node.left.val: return self._rotate_right(node)
            if bf < -1 and val > node.right.val: return self._rotate_left(node)
            if bf > 1 and val > node.left.val:
                node.left = self._rotate_left(node.left)
                return self._rotate_right(node)
            if bf < -1 and val < node.right.val:
                node.right = self._rotate_right(node.right)
                return self._rotate_left(node)
            return node

        self.root = _insert(self.root)
```

---

## 堆（大顶堆 / 小顶堆）

```typescript
class MaxHeap {
  private data: number[] = [];

  insert(val: number): void {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  extractMax(): number | null {
    if (this.data.length === 0) return null;
    [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
    const max = this.data.pop()!;
    this.bubbleDown(0);
    return max;
  }

  peek(): number | null {
    return this.data.length ? this.data[0] : null;
  }

  size(): number { return this.data.length; }

  private bubbleUp(idx: number): void {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.data[parent] >= this.data[idx]) break;
      [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
      idx = parent;
    }
  }

  private bubbleDown(idx: number): void {
    const n = this.data.length;
    while (true) {
      let largest = idx;
      const left = 2 * idx + 1, right = 2 * idx + 2;
      if (left < n && this.data[left] > this.data[largest]) largest = left;
      if (right < n && this.data[right] > this.data[largest]) largest = right;
      if (largest === idx) break;
      [this.data[idx], this.data[largest]] = [this.data[largest], this.data[idx]];
      idx = largest;
    }
  }
}

// 小顶堆：只需反转比较符号
class MinHeap {
  private data: number[] = [];

  insert(val: number): void {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  extractMin(): number | null {
    if (this.data.length === 0) return null;
    [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
    const min = this.data.pop()!;
    this.bubbleDown(0);
    return min;
  }

  peek(): number | null { return this.data.length ? this.data[0] : null; }
  size(): number { return this.data.length; }

  private bubbleUp(idx: number): void {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.data[parent] <= this.data[idx]) break;
      [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
      idx = parent;
    }
  }

  private bubbleDown(idx: number): void {
    const n = this.data.length;
    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1, right = 2 * idx + 2;
      if (left < n && this.data[left] < this.data[smallest]) smallest = left;
      if (right < n && this.data[right] < this.data[smallest]) smallest = right;
      if (smallest === idx) break;
      [this.data[idx], this.data[smallest]] = [this.data[smallest], this.data[idx]];
      idx = smallest;
    }
  }
}
```

```python
class MaxHeap:
    def __init__(self):
        self.data = []

    def insert(self, val):
        self.data.append(val)
        self._bubble_up(len(self.data) - 1)

    def extract_max(self):
        if not self.data: return None
        self.data[0], self.data[-1] = self.data[-1], self.data[0]
        max_val = self.data.pop()
        self._bubble_down(0)
        return max_val

    def peek(self): return self.data[0] if self.data else None

    def _bubble_up(self, i):
        while i > 0:
            p = (i - 1) // 2
            if self.data[p] >= self.data[i]: break
            self.data[p], self.data[i] = self.data[i], self.data[p]
            i = p

    def _bubble_down(self, i):
        n = len(self.data)
        while True:
            largest = i
            l, r = 2*i+1, 2*i+2
            if l < n and self.data[l] > self.data[largest]: largest = l
            if r < n and self.data[r] > self.data[largest]: largest = r
            if largest == i: break
            self.data[i], self.data[largest] = self.data[largest], self.data[i]
            i = largest


class MinHeap:
    def __init__(self):
        self.data = []

    def insert(self, val):
        self.data.append(val)
        self._bubble_up(len(self.data) - 1)

    def extract_min(self):
        if not self.data: return None
        self.data[0], self.data[-1] = self.data[-1], self.data[0]
        min_val = self.data.pop()
        self._bubble_down(0)
        return min_val

    def peek(self): return self.data[0] if self.data else None

    def _bubble_up(self, i):
        while i > 0:
            p = (i - 1) // 2
            if self.data[p] <= self.data[i]: break
            self.data[p], self.data[i] = self.data[i], self.data[p]
            i = p

    def _bubble_down(self, i):
        n = len(self.data)
        while True:
            smallest = i
            l, r = 2*i+1, 2*i+2
            if l < n and self.data[l] < self.data[smallest]: smallest = l
            if r < n and self.data[r] < self.data[smallest]: smallest = r
            if smallest == i: break
            self.data[i], self.data[smallest] = self.data[smallest], self.data[i]
            i = smallest
```

---

## 优先级队列

```typescript
class PriorityQueue<T> {
  private data: { element: T; priority: number }[] = [];

  enqueue(element: T, priority: number): void {
    this.data.push({ element, priority });
    this.bubbleUp(this.data.length - 1);
  }

  dequeue(): T | null {
    if (this.data.length === 0) return null;
    [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
    const item = this.data.pop()!;
    this.bubbleDown(0);
    return item.element;
  }

  peek(): T | null { return this.data.length ? this.data[0].element : null; }
  size(): number { return this.data.length; }

  private bubbleUp(idx: number): void {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.data[parent].priority <= this.data[idx].priority) break;
      [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
      idx = parent;
    }
  }

  private bubbleDown(idx: number): void {
    const n = this.data.length;
    while (true) {
      let smallest = idx;
      const l = 2 * idx + 1, r = 2 * idx + 2;
      if (l < n && this.data[l].priority < this.data[smallest].priority) smallest = l;
      if (r < n && this.data[r].priority < this.data[smallest].priority) smallest = r;
      if (smallest === idx) break;
      [this.data[idx], this.data[smallest]] = [this.data[smallest], this.data[idx]];
      idx = smallest;
    }
  }
}
```

```python
import heapq

# Python 标准库 heapq 实现最小堆
# heap = []
# heapq.heappush(heap, (priority, element))
# priority, element = heapq.heappop(heap)

# 手写版
class PriorityQueue:
    def __init__(self):
        self.data = []  # (priority, element)

    def enqueue(self, element, priority):
        self.data.append((priority, element))
        self._bubble_up(len(self.data) - 1)

    def dequeue(self):
        if not self.data: return None
        self.data[0], self.data[-1] = self.data[-1], self.data[0]
        item = self.data.pop()
        self._bubble_down(0)
        return item[1]

    def _bubble_up(self, i):
        while i > 0:
            p = (i - 1) // 2
            if self.data[p][0] <= self.data[i][0]: break
            self.data[p], self.data[i] = self.data[i], self.data[p]
            i = p

    def _bubble_down(self, i):
        n = len(self.data)
        while True:
            s = i
            l, r = 2*i+1, 2*i+2
            if l < n and self.data[l][0] < self.data[s][0]: s = l
            if r < n and self.data[r][0] < self.data[s][0]: s = r
            if s == i: break
            self.data[i], self.data[s] = self.data[s], self.data[i]
            i = s
```

---

## 图（邻接表 + BFS / DFS / 拓扑排序）

```typescript
class Graph {
  private adjList: Map<number, number[]> = new Map();

  addVertex(v: number): void {
    if (!this.adjList.has(v)) this.adjList.set(v, []);
  }

  addEdge(v: number, w: number): void {
    this.adjList.get(v)?.push(w);
    this.adjList.get(w)?.push(v); // 无向图
  }

  /** BFS 遍历 */
  bfs(start: number): number[] {
    const visited = new Set<number>();
    const queue: number[] = [start];
    const result: number[] = [];
    visited.add(start);
    while (queue.length) {
      const v = queue.shift()!;
      result.push(v);
      for (const n of this.adjList.get(v) || []) {
        if (!visited.has(n)) { visited.add(n); queue.push(n); }
      }
    }
    return result;
  }

  /** DFS 遍历 */
  dfs(start: number): number[] {
    const visited = new Set<number>();
    const result: number[] = [];
    const dfsRec = (v: number) => {
      visited.add(v);
      result.push(v);
      for (const n of this.adjList.get(v) || []) {
        if (!visited.has(n)) dfsRec(n);
      }
    };
    dfsRec(start);
    return result;
  }

  /** 拓扑排序（Kahn 算法） */
  topologicalSort(): number[] {
    const inDegree = new Map<number, number>();
    for (const [v] of this.adjList) inDegree.set(v, 0);
    for (const [, neighbors] of this.adjList) {
      for (const n of neighbors) inDegree.set(n, (inDegree.get(n) || 0) + 1);
    }
    const queue: number[] = [];
    for (const [v, deg] of inDegree) if (deg === 0) queue.push(v);
    const result: number[] = [];
    while (queue.length) {
      const v = queue.shift()!;
      result.push(v);
      for (const n of this.adjList.get(v) || []) {
        inDegree.set(n, inDegree.get(n)! - 1);
        if (inDegree.get(n) === 0) queue.push(n);
      }
    }
    return result;
  }
}
```

```python
from collections import deque

class Graph:
    def __init__(self):
        self.adj = {}  # {vertex: [neighbors]}

    def add_vertex(self, v):
        if v not in self.adj: self.adj[v] = []

    def add_edge(self, v, w):
        self.adj.setdefault(v, []).append(w)
        self.adj.setdefault(w, []).append(v)

    def bfs(self, start):
        visited = {start}
        q = deque([start])
        res = []
        while q:
            v = q.popleft()
            res.append(v)
            for n in self.adj.get(v, []):
                if n not in visited:
                    visited.add(n)
                    q.append(n)
        return res

    def dfs(self, start):
        visited = set()
        res = []

        def _dfs(v):
            visited.add(v)
            res.append(v)
            for n in self.adj.get(v, []):
                if n not in visited: _dfs(n)

        _dfs(start)
        return res

    def topological_sort(self):
        in_deg = {v: 0 for v in self.adj}
        for v in self.adj:
            for n in self.adj[v]:
                in_deg[n] = in_deg.get(n, 0) + 1
        q = deque([v for v, d in in_deg.items() if d == 0])
        res = []
        while q:
            v = q.popleft()
            res.append(v)
            for n in self.adj.get(v, []):
                in_deg[n] -= 1
                if in_deg[n] == 0: q.append(n)
        return res
```

---

## 复杂度速查表

| 数据结构 | 插入 | 删除 | 查找 | 说明 |
|---|---|---|---|---|
| 链表 | O(1)* | O(n) | O(n) | *在头部/尾部插入 |
| 双向链表 | O(1)* | O(1)** | O(n) | *尾部 **已知节点 |
| 栈 | O(1) | O(1) | O(n) | LIFO |
| 队列 | O(1) | O(1) | O(n) | FIFO |
| 哈希表 | O(1) 平均 | O(1) 平均 | O(1) 平均 | 最坏 O(n) |
| 二叉搜索树 | O(log n) 平均 | O(log n) 平均 | O(log n) 平均 | 最坏 O(n) |
| AVL 树 | O(log n) | O(log n) | O(log n) | 严格平衡 |
| 堆 | O(log n) | O(log n) | O(1) 峰顶 | 插入/删除堆顶 |
| 优先级队列 | O(log n) | O(log n) | O(1) 最小 | 同堆 |
| 图 BFS | — | — | O(V+E) | 最短路径（无权） |
| 图 DFS | — | — | O(V+E) | 连通性 |
| 拓扑排序 | — | — | O(V+E) | Kahn 算法 |
