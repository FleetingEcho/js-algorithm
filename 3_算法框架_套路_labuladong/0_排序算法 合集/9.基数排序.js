
// 同样，只适用于正数排序，并且必须为整数。
function radix_sort(arr) {
  // 取最大值 最大值的位数就是要循环遍历的次数
  const max = Math.max(...arr);
  const buckets = Array.from({ length: 10 }, () => []);
  let m = 1;    //从个位开始
  while (m < max) {
    // 放入桶
    arr.forEach(number => {
      // digit表示某位数的值
      const digit = Math.floor((number % (m * 10)) / m);
      buckets[digit].push(number);   // 通过索引确定顺序 类比计数排序
    });
    
    let ind = 0;
    buckets.map(item => {
      while (item.length > 0) {
        // shift从头部取值
        // 保证按照队列先入先出
        arr[ind++] = item.shift();
      }
    });

    // 判断下一位 比如当前是个位 下次就要判断十位
    m *= 10;
  }
  return arr
}

const arr = [10, 200, 13, 12, 7, 88, 91, 24];
console.log(radix_sort(arr))