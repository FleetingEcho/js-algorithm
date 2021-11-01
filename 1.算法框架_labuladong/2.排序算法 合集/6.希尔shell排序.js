/* 
> 希尔排序的基本思想是把数组按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的元 素越来越多，当增量减至1时，整个数组恰被分成一组，算法便终止。

*/
function shellSort1(array) {
    let len = array.length;
    if (!Array.isArray(array) || len <= 1) return;
  
    // 第一层确定增量的大小，每次增量的大小减半
    for (let gap =Math.floor(len/2); gap >0; gap = Math.floor(gap/2)) {
      for (let i = gap; i < len; i++) {
        let temp = array[i];
        let j = i;
  
        while (j - gap >= 0 && array[j - gap] > temp) {
          array[j] = array[j - gap];
          j -= gap;
        }
        array[j] = temp;
      }
    }
  
    return array;
  }

// console.log(shellSort([3,44,28,6,300,1,2,3,5,1999,39,20,11,5]));
console.log(shellSort1([3,44,28,6,300,1,2,3,5,1999,39,20,11,5]));