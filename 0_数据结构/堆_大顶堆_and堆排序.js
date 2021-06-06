const swap = function (array, a, b) {
  // let temp = array[i]
  // array[i] = array[j]
  // array[j] = temp
  [array[a], array[b]] = [array[b], array[a]];
}

// 最大堆 化
const maxHeapify = function (array, heapSize, i) {
  let leftIndex = i * 2 + 1
  let rightIndex = i * 2 + 2
  let largest = i
  if (leftIndex < heapSize && array[leftIndex] > array[i]) {
    largest = leftIndex
  }
  if (rightIndex < heapSize && array[rightIndex] > array[largest]) {
    largest = rightIndex
  }
  if (largest !== i) {
    swap(array, i, largest)
    maxHeapify(array, heapSize, largest)
  }
  return array
}
const buildMaxHeap = function (array) {
  // 4
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    maxHeapify(array, array.length, i)//10  4
  }
  // 循环完成后就是最大堆了
}
const heapSort = function (array) {
  buildMaxHeap(array)
  array.heapSize = array.length
  // console.log(array);
  // 将堆顶的数和最后一位数字进行交换，把堆顶这个最大的数放在数组末尾，数组长度-1
  // 再次进行最大堆化，然后继续交换首尾，再次数组长度-1
  // 反复执行最大对话，直到length=0
  for (let i = array.length - 1; i >= 0; i--) {
    swap(array, 0, i)
    array.heapSize--
    maxHeapify(array, array.heapSize, 0)
  }
  return array
}
// console.log(heapSort([1,2,3]) );
console.log(heapSort([12,15,2,4,5,6,77,8,99,100]) );