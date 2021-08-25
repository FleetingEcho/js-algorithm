/* 
392.判断子序列

如何判定字符串 s 是否是字符串 t 的子序列（可以假定 s 长度比较小，且 t 的长度非常大）。
举两个例子：
s = "abc", t = "ahbgdc", return true.
s = "axc", t = "ahbgdc", return false.
*/

//! 一般的解法   利用双指针 i, j 分别指向 s, t，一边前进一边匹配子序列：
function isSubsequence(s, t) {
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
      if (s[i] == t[j]) i++;
      j++;
  }
  return i == s.length;
}

// ! 二分法        ------通过构建数组对应表,或者Map集来进行快速定位，避免大范围的遍历
function isSubsequence(s, t) {
  let m = s.length, n = t.length;
  let index = new Array(256);
  // 先记下 t 中每个字符出现的位置
  for (let i = 0; i < n; i++) {
      let c = t.charAt(i);
      if (index[c] == null){
        index[c] =[] 
      }
      index[c].push(i);
  }

      // 串 t 上的指针
      let j = 0;
      // 借助 index 查找 s[i]
      for (let i = 0; i < m; i++) {
          let c = s.charAt(i);
          // 整个 t 压根儿没有字符 c
          if (index[c] == null) return false;
          let pos = left_bound(index[c], j);
          // 二分搜索区间中没有找到字符 c
          if (pos == index[c].length) return false;
          // 向前移动指针 j
          j = index[c][pos] + 1;
      }
      return true;
}

function left_bound(arr, tar) {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);
      if (tar > arr[mid]) {
          lo = mid + 1;
      } else {
          hi = mid;
      } 
  }
  return lo;
}

/* 
在前文 二分查找详解 中，详解了如何正确写出三种二分查找算法的细节。
二分查找返回目标值 val 的索引，对于搜索左侧边界的二分查找，有一个特殊性质：
当 val 不存在时，得到的索引恰好是比 val 大的最小元素索引。
什么意思呢，就是说如果在数组 [0,1,3,4] 中搜索元素 2，算法会返回索引 2，
也就是元素 3 的位置，元素 3 是数组中大于 2 的最小元素。
所以我们可以利用二分搜索避免线性扫描。

*/
// 查找左侧边界的二分查找

// ! 二分法        ------通过构建数组对应表,或者Map集来进行快速定位，避免大范围的遍历
function isSubsequence(s, t) {
  let m = s.length, n = t.length;
  let index = new Map();
  // 先记下 t 中每个字符出现的位置
  for (let i = 0; i < n; i++) {
      let c = t.charAt(i);
      if (!index.has(c)){
        index.set(c,[]) 
      }
      let temp=index.get(c)
      temp.push(i);
      index.set(c,temp)
    }

      // 串 t 上的指针
      let j = 0;
      // 借助 index 查找 s[i]
      for (let i = 0; i < m; i++) {
          let c = s.charAt(i);
          // 整个 t 压根儿没有字符 c
          if (!index.has(c)) return false;
          let pos = left_bound([...index.get(c)], j);
          // 二分搜索区间中没有找到字符 c
          if (pos == [...index.get(c)].length) return false;
          // 向前移动指针 j
          j = [...index.get(c)][pos] + 1;
      }
      return true;
}

function left_bound(arr, tar) {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);
      if (tar > arr[mid]) {
          lo = mid + 1;
      } else {
          hi = mid;
      } 
  }
  return lo;
}
