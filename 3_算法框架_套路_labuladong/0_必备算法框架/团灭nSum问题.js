/* 
! 编一道 2Sum问题：
如果假设输入一个数组 nums 和一个目标和 target，
请你返回 nums 中能够凑出 target 的两个元素的值，
比如输入 nums = [1,3,5,6], target = 9，那么算法返回两个元素 [3,6]。
可以假设只有且仅有一对元素可以凑出 target。

但如果有重复元素[1,2,3,3,3,4,6,6,6,7,8] ,就必须用while循环过滤掉
如果是找14的话 [1,6,7],[2,4,8]
*/

//> n Sum和  框架:
/* 
! 注意：调用这个函数之前一定要先给 nums 排序
>  nums=nums.sort((a,b)=>a-b); 
*/


function nSumTarget( nums, n, start, target) {
  let sz = nums.length;
  let res=[];
  // 至少是 2Sum，且数组大小不应该小于 n
  if (n < 2 || sz < n) return res;
  // 2Sum 是 base case
  if (n == 2) {
      // 双指针那一套操作
      let lo = start, hi = sz - 1;
      while (lo < hi) {
          let left = nums[lo], right = nums[hi];
          let sum = nums[lo] + nums[hi];
          //  和小于，则low++;
          if (sum < target) {
              while (lo < hi && nums[lo] == left) lo++;
          //  和大于，则high--;
            } else if (sum > target) {
              while (lo < hi && nums[hi] == right) hi--;//跳过所有重复元素 [1,1,1,2,2,3,3]
          } else {
          //  和相同  
              res.push([left, right]);
              while (lo < hi && nums[lo] == left) lo++;
              while (lo < hi && nums[hi] == right) hi--;// 跳过所有重复元素 [1,1,1,2,2,3,3]
          }
      }
  } else {
      // n > 2 时，递归计算 (n-1)Sum 的结果
      for (let i = start; i < sz; i++) {
            let  sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
          for (let arr of sub) {
              // (n-1)Sum 加上 nums[i] 就是 nSum
              arr.push(nums[i]);
              res.push(arr);
          }
          while (i < sz - 1 && nums[i] == nums[i + 1]) i++;// 跳过第一个数字重复的情况，否则会出现重复结果
      }
  }
  return res;
}

// 手敲一遍；
function nSumTarget( nums, n, start, target) {
    let size=nums.length;
    let res=[];
    if(size<n|| n<2) return res;
    if(n===2){
        let lo=nums[0],hi=nums[size-1];
        while(lo<hi){
        let left=nums[lo],right=nums[hi];
        let sum=left+right;
        if(sum<target){
            while(lo<hi && nums[lo]==left) lo++
        }
        else if(sum>target){
            while(lo<hi && nums[hi]==right) hi--
        }
        else{
            res.push([lo,hi]);
            while(lo<hi && nums[lo]==left) lo++
            while(lo<hi && nums[hi]==right) hi--
        }
        }
    }else{

        for(let i=0;i<size;i++){
            let sub=nSumTarget(nums,n-1, i+1,target-nums[i])
            for(let arr of sub){
                arr.push(nums[i])
                res.push(arr)
            }
            while(i<size-1 && nums[i]==nums[i+1] ){i++};
        }
    }
    return res;
}

// 我们可以先对 nums 排序，然后利用前文 双指针技巧 写过的左右双指针技巧，从两端相向而行就行了：
// > 双指针

function twoSum(nums,target) {
  // 先对数组排序 ---如果本身就确定是排好序的，就不用了
  nums=nums.sort((a,b)=>a-b);
  // 左右指针
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
      let sum = nums[lo] + nums[hi];
      // 根据 sum 和 target 的比较，移动左右指针
      if (sum < target) {
          lo++;
      } else if (sum > target) {
          hi--;
      } else if (sum == target) {
          return [lo, hi];
      }
  }
  return [];
}
// console.log(twoSum([1,3,5,6],9)); //[1.3] 返回两个值的index

// >升级题目难度
/* 
题目告诉我们可以假设 nums 中有且只有一个答案，且需要我们返回对应元素的索引，
现在修改这些条件：nums 中可能有多对元素之和都等于 target，
请你的算法返回所有和为 target 的元素对儿，其中不能出现重复。

举例：
输入 nums = [1,3,1,2,2,3], target = 4
返回 [[1,3],[2,2]]
*/

// > 思路: 排序+ 双指针

/* function twoSumTarget( nums, target) {
  先对数组排序
  nums=nums.sort((a,b)=>a-b);
  let res=[];
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    let sum = nums[lo] + nums[hi];
    记录索引 lo 和 hi 最初对应的值
    let left = nums[lo], right = nums[hi];
    if (sum < target)      lo++;
    else if (sum > target) hi--;
    else {
        res.push([nums[left],nums[right]]);
        跳过所有重复的元素
        while (lo < hi && nums[lo] == left) lo++;
        while (lo < hi && nums[hi] == right) hi--;
    }
  }
  return res;
}
 */

// > 优化if语句   nSum问题框架


function twoSumTarget1( nums,target) {
  // nums 数组必须有序
  nums=nums.sort((a,b)=>a-b);
  let lo = 0, hi = nums.length - 1;
  let res=[];
  while (lo < hi) {
      let sum = nums[lo] + nums[hi];
      let left = nums[lo], right = nums[hi];
      if (sum < target) {
          while (lo < hi && nums[lo] == left) lo++;
      } else if (sum > target) {
          while (lo < hi && nums[hi] == right) hi--;
      } else {
          res.push([nums[lo],nums[hi]]);
          while (lo < hi && nums[lo] == left) lo++; //跳过所有重复元素 [1,1,1,2,2,3,3]
          while (lo < hi && nums[hi] == right) hi--; //跳过所有重复元素
      }
  }
  return res;
}

// console.log(twoSumTarget1([1,3,1,2,2,3],4));



// > 3Sum问题   LeetCode 15. 三数之和

/* 从 nums[start] 开始，计算有序数组
 * nums 中所有和为 target 的二元组 */
function twoSumTarget(nums, start,target) {
  // 左指针改为从 start 开始，其他不变
  let lo = start, hi = nums.length - 1;
  let res=[];
  while (lo < hi) {
    let sum = nums[lo] + nums[hi];
    let left = nums[lo], right = nums[hi];
    if (sum < target) {
        while (lo < hi && nums[lo] == left) lo++;
    } else if (sum > target) {
        while (lo < hi && nums[hi] == right) hi--;
    } else {
        res.push([nums[lo],nums[hi]]);
        while (lo < hi && nums[lo] == left) lo++; //跳过所有重复元素 [1,1,1,2,2,3,3]
        while (lo < hi && nums[hi] == right) hi--; //跳过所有重复元素
    }
}
  return res;
}

/* 计算数组 nums 中所有和为 target 的三元组 */
function threeSumTarget1(nums,target) {
  // 数组得排个序
  nums=nums.sort((a,b)=>a-b);
  let n = nums.length;
  let res=[];
  // 穷举 threeSum 的第一个数
  for (let i = 0; i < n; i++) {
      // 对 target - nums[i] 计算 twoSum
         let tuples = twoSumTarget(nums, i + 1, target - nums[i]);
      // 如果存在满足条件的二元组，再加上 nums[i] 就是结果三元组
      for (let tuple of tuples) {
          tuple.push(nums[i]);//添加当前元素
          res.push(tuple);
      }
      // 跳过第一个数字重复的情况，否则会出现重复结果
      while (i < n - 1 && nums[i] == nums[i + 1]) i++;//跳过重复
  }
  return res;
}
// console.log(threeSumTarget1([-1,0,1,2,-1,4],0)); //[ [ -1, 2, -1 ], [ 0, 1, -1 ] ]

/* 
关键点在于，不能让第一个数重复，至于后面的两个数，
我们复用的 twoSum 函数会保证它们不重复。
所以代码中必须用一个 while 循环来保证 3Sum 中第一个元素不重复。
*/



// >  4sum问题   LeetCode 18 四数之和

function fourSum(nums,target) {
  // 数组需要排序
  nums=nums.sort((a,b)=>a-b);
  let n = nums.length;
  let res=[];
  // 穷举 fourSum 的第一个数
  for (let i = 0; i < n; i++) {
      // 对 target - nums[i] 计算 threeSum
      let triples = threeSumTarget(nums, i + 1, target - nums[i]);
      // 如果存在满足条件的三元组，再加上 nums[i] 就是结果四元组
      for (let triple of triples) {
          triple.push(nums[i]);
          res.push(triple);
      }
      // fourSum 的第一个数不能重复
      while (i < n - 1 && nums[i] == nums[i + 1]) i++;
  }
  return res;
}

/* 从 nums[start] 开始，计算有序数组
* nums 中所有和为 target 的三元组 */
function threeSumTarget(nums, start, target) {
      let n = nums.length;
      let res=[];
      // i 从 start 开始穷举，其他都不变
      for (let i = start; i < n; i++) {
      // 对 target - nums[i] 计算 twoSum
      let tuples = twoSumTarget1(nums, i + 1, target - nums[i]);
      // 如果存在满足条件的二元组，再加上 nums[i] 就是结果三元组
      for (let tuple of tuples) {
          tuple.push(nums[i]);//添加当前元素
          res.push(tuple);
      }
      // 跳过第一个数字重复的情况，否则会出现重复结果
      while (i < n - 1 && nums[i] == nums[i + 1]) i++;//跳过重复
      }
      return res;
}
/* 
[ 
[ 0, 2, -1, -2 ], 
[ 1, 2, 0, -2 ], 
[ 1, 2, 0, -1 ] 
]
*/
// console.log(fourSum([1,0,-1,0,-2,2],0));



//> 100Sum问题？

/* 
! 注意：调用这个函数之前一定要先给 nums 排序
>  nums=nums.sort((a,b)=>a-b); 
*/


function nSumTarget( nums, n, start, target) {
  let sz = nums.length;
  let res=[];
  // 至少是 2Sum，且数组大小不应该小于 n
  if (n < 2 || sz < n) return res;
  // 2Sum 是 base case
  if (n == 2) {
      // 双指针那一套操作
      let lo = start, hi = sz - 1;
      while (lo < hi) {
          let sum = nums[lo] + nums[hi];
          let left = nums[lo], right = nums[hi];
          if (sum < target) {
              while (lo < hi && nums[lo] == left) lo++;
          } else if (sum > target) {
              while (lo < hi && nums[hi] == right) hi--;
          } else {
              res.push([left, right]);
              while (lo < hi && nums[lo] == left) lo++;
              while (lo < hi && nums[hi] == right) hi--;
          }
      }
  } else {
      // n > 2 时，递归计算 (n-1)Sum 的结果
      for (let i = start; i < sz; i++) {
            let  sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
          for (let arr of sub) {
              // (n-1)Sum 加上 nums[i] 就是 nSum
              arr.push(nums[i]);
              res.push(arr);
          }
          while (i < sz - 1 && nums[i] == nums[i + 1]) i++;
      }
  }
  return res;
}


/* 
例如： 
1.四数之和调用：
var fourSum = function(nums, target) {
nums=nums.sort((a,b)=>a-b); 
return nSumTarget(nums,4,0,target)
};

2.三数之和调用:
var threeSum = function(nums) {
nums=nums.sort((a,b)=>a-b); 
return nSumTarget(nums,3,0,0)
};


*/