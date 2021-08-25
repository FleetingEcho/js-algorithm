
const maxHeapify=(Arr, i, size)=>{
  let l = 2 * i + 1, r = 2 * i + 2; // 左子节点为2i + 1，右子节点为2i + 2
  let largest = i;
  // 若子节点比节点大，则标记
  if (l <= size && Arr[l] > Arr[largest]) {
      largest = l;
  }
  if (r <= size && Arr[r] > Arr[largest]) {
      largest = r;
  }
  // 若标记有子节点，则交换父子位置，并递归计算
  if (largest !== i) {
    // swap
      [Arr[i],Arr[largest]]=[Arr[largest],Arr[i]]
      maxHeapify(Arr, largest, size);
  }
}

const heapSort=(iArr)=>{
  let n = iArr.length;
  // 若只有一个或者没有，则返回
  if (n <= 1) { return iArr; }
  // 若有多个，则建最大堆
  else {
      // 建堆（Build-Max-Heap）
      for (let i = Math.floor(n / 2); i >= 0; i--) {
          maxHeapify(iArr, i, n);
      }
      // 堆排序
      for (let j = 0; j < n; j++) {
          swap(iArr, 0, n - 1 - j)
              // swap
      [Arr[0],Arr[n - 1 - j]]=[Arr[n - 1 - j],Arr[0]]
          maxHeapify(iArr, 0, n - 2 - j);
      }
      return iArr;
  }
}


console.log(heapSort([5, 2, 4, 6, 1, 3])); 
// 输出[1, 2, 3, 4, 5, 6]
console.log(heapSort([2, 1, 3, 1, 5]));
// 输出[1, 1, 2, 3, 5]
console.log(heapSort([5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3, 4]));
// 输出[1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 12, 34, 134]