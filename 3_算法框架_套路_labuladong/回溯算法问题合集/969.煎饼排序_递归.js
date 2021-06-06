// 记录反转操作序列

function pancakeSort( cakes) {
  let res =[];
  function sort( cakes, n) {
      // base case
      if (n == 1) return;
  
      // 寻找最大饼的索引
      // [3,2,4,1]
      let maxCake = 0;
      let maxCakeIndex = 0;
      for (let i = 0; i < n; i++){
        if (cakes[i] > maxCake) {
          maxCakeIndex = i;
          maxCake = cakes[i];
      }
      }
  
      // 第一次翻转，将最大饼翻到最上面
      reverse(cakes, 0, maxCakeIndex);
      res.push(maxCakeIndex + 1);
      // 第二次翻转，将最大饼翻到最下面
      reverse(cakes, 0, n - 1);
      res.push(n);
      // 递归调用
      sort(cakes, n - 1);
  }
    sort(cakes, cakes.length);
    return res;
}


function reverse( arr, i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; j--;
    }
}
console.log(pancakeSort([3,2,4,1]));
/* 
[ 4, 2, 3, 1 ]
[ 1, 3, 2, 4 ]
[ 3, 1, 2, 4 ]
[ 2, 1, 3, 4 ]
[ 2, 1, 3, 4 ]
[ 1, 2, 3, 4 ]

*/