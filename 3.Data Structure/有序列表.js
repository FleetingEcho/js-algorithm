const LinkedList= require('./链表_新实现')
const Node= require('./链表_新实现')
// 有序链表是指保持元素有序的链表结构。
// 除了使用排序算法之外，我们还可以将元素插入到正确的位置来保证链表的有序性
class SortedLinkedList extends LinkedList {
  constructor() {
    super();
  }
  push(element) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }
  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, index === 0 ? index : 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    // 新增5
    for (; i < this.size() && current; i++) {
      if (element<current.element) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}
const Link=new SortedLinkedList()
Link.push(1)
Link.push(2)
Link.push(3)
Link.push(4)
console.log(Link);//  1,2,3,4