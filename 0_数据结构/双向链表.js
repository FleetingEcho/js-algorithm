const LinkedList= require('./链表_新实现')
const Node= require('./链表_新实现')


class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = undefined;
  }
  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node; // NEW
    } else {
      // node挂到当前的tail上，并且建立连接后自己称为tail
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) { // NEW
          this.head = node;
          this.tail = node; // NEW
        } else {
          // 头部添加元素
          // 不为空，则current 变量将是对双向链表中第一个元素的引用
          node.next = this.head;
          this.head.prev = node; // NEW
          this.head = node;
        }
      //  末尾添加元素 prev current(tail) next----prev node next---- X
      } else if (index === this.count) { // last item NEW
        current = this.tail;
        current.next = node;
        node.prev = current;   
        this.tail = node;
      } else {
        // 中间添加元素
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node; // NEW
        node.prev = previous; // NEW
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = this.head.next;
        // if there is only one item, then we update tail as well //NEW
        if (this.count === 1) {
          // {2}
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }

      } else if (index === this.count - 1) {
        // last item //NEW
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        // link previous with current's next - skip it to remove
        previous.next = current.next;
        // previous挂给current.next.prev
        current.next.prev = previous; // NEW
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (element=== current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  clear() {
    super.clear();
    this.tail = undefined;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    while (current != null) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
  inverseToString() {
    if (this.tail == null) {
      return '';
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
};
const List=new DoublyLinkedList()
List.push(1)
List.push(2)
// List.push(3)
// List.push(4);
console.log(List);
// List.remove(3);