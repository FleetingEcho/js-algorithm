const LinkedList= require('./链表_新实现')
const Node= require('./链表_新实现')

// 双向循环链表有指向 head 元素的 tail.next 和指向 tail 元素的 head.prev。

// 在此实现单向循环列表
class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.getElementAt(this.size() - 1);
      current.next = node;
    }
    // 头部挂给尾部
    node.next = this.head;
    this.count++;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          // 头尾互挂
          this.head = node;
          node.next = this.head;
        } else {

          node.next = current;
          current = this.getElementAt(this.size());
          // update last element
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
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
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          // 移除头部元素
          const removed = this.head;
          current = this.getElementAt(this.size() - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        // 移除中间元素
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        // next挂给previous
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}
const List= new CircularLinkedList()
List.push(1)
List.push(2)
// List.push(3)
// List.push(4);
console.log(List);
// List.remove(3);