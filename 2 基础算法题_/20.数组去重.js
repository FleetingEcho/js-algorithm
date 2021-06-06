/*
数组去重
1.优化遍历数组法（推荐）
2.indexOf判断法
3.排序后相邻去除法
4.includes去重返回新数组
5.ES6 Set方法
*/

// continue 语句（不论有无标签引用）只能用于跳过一个迭代。
// break 语句，如果没有标签引用，只能用于跳出一个循环或一个 switch。
// 如果有标签引用，则 break 语句可用于跳出任意代码块：

  //优化遍历数组法----------双重循环
const unique=(arr)=>{
    var hash = [];
    //外循环
    for(var i = 0; i < arr.length; i++){
        //内循环
        for(var j = i+1; j < arr.length; j++){
            //如果重复
            if(arr[i] === arr[j]){
              i++
              break;
            }
        }
        hash.push(arr[i]);
    }
    return hash;
}

  //ES6
const unique2=(arr)=>{
    var x = new Set(arr);
    // return x;  // return的是一个Set对象
    // return Array.from(x);
    return [...x];
}

//调用
let arr = [1,2,3,4,5,5,6,6,7,7]
console.log(unique(arr))
console.log(unique2(arr))