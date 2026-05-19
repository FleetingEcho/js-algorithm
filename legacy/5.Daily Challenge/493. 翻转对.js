// 493. 翻转对
// 其实就是归并排序，在归并时候进行比较
const reversePairs = function (nums) {
  let count = 0;
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = arr.length >> 1;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return mergeArr(mergeSort(left), mergeSort(right));
  };
  const mergeArr = (left, right) => {
    // 计数
    // 因为是左右区间都是单调递增的
    // 因此左边区间当前元素到结尾元素都可以和右边区间的那个元素组成重要翻转对
    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] > 2 * right[j]) {
        count += left.length - i; // 重点🙂
        j++;
      } else {
        i++;
      }
    }
    // 利用sort稳定排序
    return [...left, ...right].sort((a, b) => {
      if (a === b) return 0;
      else return a - b;
    });
  };
  mergeSort(nums);
  return count;
};
