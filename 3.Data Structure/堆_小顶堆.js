// const Compare = {
//   LESS_THAN: -1,
//   BIGGER_THAN: 1,
//   EQUALS: 0
// };
// function defaultCompare(a, b) {
//   if (a === b) {
//     return Compare.EQUALS;
//   }
//   return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }
// function reverseCompare(compareFn) {
//   return (a, b) => compareFn(b, a);
// }

function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
class MinHeap {
  constructor() {
    // this.compareFn = compareFn;
    this.heap = [];
  }
  getLeftIndex(index) {
    return (2 * index) + 1;
  }
  getRightIndex(index) {
    return (2 * index) + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);  //注意堆是数组从0开始计
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() <= 0;
  }
  clear() {
    this.heap = [];
  }
  // 找最小值
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
  insert(value) {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index-1);
      return true;
    }
    return false;
  }

    // 上移 操作 
    siftUp(index) {
      let parent = this.getParentIndex(index);
      while (
        // 直到换到index=0
        index > 0 && this.heap[parent]> this.heap[index]
      ) {
        swap(this.heap, parent, index);
        // 交换后继续判断
        index = parent;
        parent = this.getParentIndex(index);
      }
    }

      // 导出最小值 或者最大值
      /* 在移除后，将堆的最后一个元素移动至根部并执行 siftDown 函数，表示我们将交换元素直
到堆的结构正常。 */
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }

  // 下移操作
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (
      // 左子叶小，大值向下给左子叶
      left < size && this.heap[left]< this.heap[element]
    ) {
      element = left;
    }
    if (
      // 交换之后，左子叶>后代右子叶
      right < size && this.heap[right]< this.heap[element]
    ) {
      element = right;
    }
    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }
  getAsArray() {
    return this.heap;
  }

}
class MaxHeap extends MinHeap {
  // constructor() {
    // super(compareFn);
    // this.compareFn = compareFn;
    // this.compareFn = reverseCompare(compareFn);
    //! 比较大小得反转一下
  // }
}

const data = [12,15,2,4,1,5,6,77,8,99,100];


minHeap = new MinHeap(); 
for (let i = 1; i < data.length; i++) { 
 minHeap.insert(data[i]); 
} 
console.log(minHeap);