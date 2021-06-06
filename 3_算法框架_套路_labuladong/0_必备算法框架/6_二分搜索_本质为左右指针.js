/* 
! 零、二分查找框架
! 只要数组有序，就应该想到双指针技巧(二分查找)。
*/
// > 二分法可以优化线性扫描
/* 
> 找中间值:  mid>目标，则搜[left,mid-1] , mid<目标 [mid+1,right]

> 找左边值:  mid等于目标，则让right=mid-1，锁定和返回left值   mid>目标，则搜[left,mid-1] , mid<目标 [mid+1,right]

> 找右边值:  mid等于目标，则让left=mid+1，锁定和返回left值   mid>目标，则搜[left,mid-1] , mid<目标 [mid+1,right]

*/
//! 二分查找返回目标值 val 的索引，对于搜索左侧边界的二分查找，有一个特殊性质：
//!  当 val 不存在时，得到的索引恰好是比 val 大的最小元素索引。

function binarySearch(nums,target) {
  let left = 0, right = '...';

  while('...') {
    //! 注意计算Mid的时候一定要防止溢出，直接(left+right)/2可能会溢出
      let mid = left + (right - left) / 2;
      if (nums[mid] == target) {
          '...'
      } else if (nums[mid] < target) {
          left = '...'
      } else if (nums[mid] > target) {
          right = '...'
      }
  }
  return '...';
}

/* 
! 分析二分查找的一个技巧是：不要出现 else，而是把所有情况用 else if 写清楚，这样可以清楚地展现所有细节。
! 本文都会使用 else if，旨在讲清楚，读者理解后可自行简化。
*/
// [1,2,3,4,8,10,60,100]  //找60
function binarySearch(nums,target) {
  let left = 0; 
  let right = nums.length - 1; // 注意

  // <=是因为包括了最后一个元素
  while(left <= right) {
      let mid = left + (right - left) / 2;
      if(nums[mid] == target)
          return mid; 
      else if (nums[mid] < target)
          left = mid + 1; // 注意
      else if (nums[mid] > target)
          right = mid - 1; // 注意
  }
  return -1;
}


/* 
* while(left <= right) 的终止条件是 left == right + 1，写成区间的形式就是 [right + 1, right]，
或者带个具体的数字进去 [3, 2]，可见这时候区间为空，因为没有数字既大于等于 3 又小于等于 2 的吧。
所以这时候 while 循环终止是正确的，直接返回 -1 即可。

* while(left < right) 的终止条件是 left == right，写成区间的形式就是 [left, right]，
或者带个具体的数字进去 [2, 2]，这时候区间非空，还有一个数 2，但此时 while 循环终止了。
也就是说这区间 [2, 2] 被漏掉了，索引 2 没有被搜索，如果这时候直接返回 -1 就是错误的。
*/


// * 寻找左侧边界的二分搜索
// nums = [1,2,2,2,3]，target 为 2
//  nums = [2,3,5,7], target = 8，

// ! 方法1   [ ) 区间查找 左临界值
function left_bound(nums,target) {
  if (nums.length == 0) return -1;
  let left = 0;
  let right = nums.length; // 注意

  while (left < right) { // 注意
      let mid = (left + right) / 2;
      if (nums[mid] == target) {
          right = mid; 
          //可见，找到 target 时不要立即返回，而是缩小「搜索区间」的上界 right，
          // 在区间 [left, mid) 中继续搜索，即不断向左收缩，达到锁定左侧边界的目的。
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid; // 注意
      }
  }
  // target 比所有数都大
if (left == nums.length) return -1;
return nums[left] == target ? left : -1;
// 返回left是因为 while 终止的条件是 left == right。
}


// ! 方法2   [ ] 区间查找

function left_bound(nums,target) {
  let left = 0,right = nums.length-1; // 注意

  while (left <= right) { // 注意
      let mid = left + (right - left) / 2;
      if (nums[mid]== target) {
          right = mid-1; 
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid-1; // 注意
      }
  }
  // 检查是否越界
if (left >= nums.length || nums[left] != target) return -1;
return left;
}

/* 由于 while 的退出条件是 left == right + 1，所以当 target 比 nums 中所有元素都大时，会存在以下情况使得索引越界：
 */



//!   归一  [ ]

function binary_search(nums,target) {
  let left = 0, right = nums.length - 1; 
  while(left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1; 
      } else if(nums[mid] == target) {
          // 直接返回
          return mid;
      }
  }
  // 直接返回
  return -1;
}

//> 查找左临界值
function left_bound(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else if (nums[mid] == target) {
          right = mid - 1; //! 别返回，锁定左侧边界
      }
  }
  // 最后要检查 left 越界的情况
  if (left >= nums.length || nums[left] != target) return -1;
  return left;
}

// 查找右临界值
function right_bound(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else if (nums[mid] == target) {
        left = mid + 1;  //! 别返回，锁定右侧边界   
      }
  }
  // 最后要检查 right 越界的情况
  if (right < 0 || nums[right] != target)
      return -1;
  return right;
}



// *  例题！！！！！！！    和392判断子序列完全一致
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
    let lo = 0, hi = arr.length-1;
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        if (tar > arr[mid]) {
            lo = mid- 1;
        } else {
            hi = mid;
        } 
    }
    return lo;
  }
  