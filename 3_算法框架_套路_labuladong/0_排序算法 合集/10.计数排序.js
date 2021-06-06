
// 就是以原数组每个元素的值作为新数组的下标，而对应小标的新数组元素的值作为出现的次数，相当于是通过下标进行排
// 计数排序要求输入的数据必须是有确定范围的整数。
/* 
[
0:0,
1:2,
...
99:1,
100:1
]
排序后 [1,1,99,100]
*/
function countingSort(arr, maxValue) {
  let bucket = new Array(maxValue+1),
      pointer = 0;
      len = arr.length,
      totalLength = maxValue + 1;

  for (let i = 0; i < len; i++) {
      if (!bucket[arr[i]]) {
          bucket[arr[i]] = 0;
      }
      bucket[arr[i]]++;
  }

  for (let j = 0; j < totalLength; j++) {
      while(bucket[j] > 0) {
          arr[pointer++] = j;
          bucket[j]--;
      }
  }

  return arr;
}
var arr = [2, 3, 8, 7, 1, 2, 7, 3];
console.log(countingSort(arr,8));//1,2,2,3,3,7,7,8