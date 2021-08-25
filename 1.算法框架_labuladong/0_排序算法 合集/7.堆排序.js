function heapSort(array) {
  let len = array.length;
  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序 
  if (!Array.isArray(array) || len <= 1) return;

  buildMaxHeap(array); // 将传入的数组建立为大顶堆

  // 每次循环，将最大的元素与末尾元素交换，然后剩下的元素重新构建为大顶堆
  for (let i = len - 1; i > 0; i--) {
    swap(array, 0, i);
    adjustMaxHeap(array, 0, i); // 将剩下的元素重新构建为大顶堆
  }

  return array;
}


function adjustMaxHeap(array, index, heapSize) {
  let iMax,
    iLeft,
    iRight;

  while (true) {
    iMax = index; // 保存最大值的索引
    iLeft = 2 * index + 1; // 获取左子元素的索引
    iRight = 2 * index + 2; // 获取右子元素的索引

    // 如果左子元素存在，且左子元素大于最大值，则更新最大值索引
    if (iLeft < heapSize && array[iMax] < array[iLeft]) {
      iMax = iLeft;
    }

    // 如果右子元素存在，且右子元素大于最大值，则更新最大值索引
    if (iRight < heapSize && array[iMax] < array[iRight]) {
      iMax = iRight;
    }

    // 如果最大元素被更新了，则交换位置，使父节点大于它的子节点，同时将索引值跟新为被替换的值，继续检查它的子树
    if (iMax !== index) {
      [arr[iMax],arr[index]]= [arr[index],arr[iMax]]
      index = iMax;
    } else {
      // 如果未被更新，说明该子树满足大顶堆的要求，退出循环
      break;
    }
  }
}

// 构建大顶堆
function buildMaxHeap(array) {
  let len = array.length,
    iParent = parseInt(len >> 1) - 1; // 获取最后一个非叶子点的元素

  for (let i = iParent; i >= 0; i--) {
    adjustMaxHeap(array, i, len); // 循环调整每一个子树，使其满足大顶堆的要求
  }
}
