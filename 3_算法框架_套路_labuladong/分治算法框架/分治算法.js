/* 
回溯算法就一种简单粗暴的算法技巧，说白了就是一个暴力穷举算法，比如让你 用回溯算法求子集、全排列、组合
动态规划是一类算法问题，肯定是让你求最值的。
因为动态规划问题拥有 最优子结构，可以通过状态转移方程从小规模的子问题最优解推导出大规模问题的最优解。



>分治算法呢，可以认为是一种算法思想，通过将原问题分解成小规模的子问题，然后根据子问题的结果构造出原问题的答案。
> 这有点类似动态规划，所以说运用分治算法也需要满足一些条件，你的原问题结果应该可以通过合并子问题结果来计算。

# 其实这几个算法之间界定并没有那么清晰，有时候回溯算法加个备忘录似乎就成动态规划了，而分治算法有时候也可以加备忘录进行剪枝。

*/

// ! 最典型的分治算法 ---归并排序

function sort(nums,lo,hi) {
  let mid = (lo + hi) / 2;
  /****** 分 ******/
  // 对数组的两部分分别排序
  sort(nums, lo, mid);
  sort(nums, mid + 1, hi);
  /****** 治 ******/
  // 合并两个排好序的子数组
  merge(nums, lo, mid, hi);
}



//!  LeetCode 241. 为运算表达式设计优先级;
/* 
解决的关键点： 

# 1、不要思考整体，而是把目光聚焦局部，只看一个运算符。
   说白了，解决递归相关的算法问题，就是一个化整为零的过程，你必须瞄准一个小的突破口，然后把问题拆解，大而化小，利用递归函数来解决。

# 2、明确递归函数的定义是什么，相信并且利用好函数的定义。
   这也是前文经常提到的一个点，因为递归函数要自己调用自己，你必须搞清楚函数到底能干嘛，才能正确进行递归调用。

*/

// > 基本逻辑

const test="(1 + 2 * 3) - (4 * 5)";
function diffWaysToCompute(test) {
  let res =[];
  /****** 分 ******/
  let left = diffWaysToCompute("1 + 2 * 3");
  let right = diffWaysToCompute("4 * 5");
  /****** 治 ******/
  for (let a of left)
      for (let b of right)
          res.push(a - b);
  return res;
}


// > 解决

// 1 + 2 * 3- 4 * 5
function diffWaysToCompute(input) {
 let res =[];
  for (let i = 0; i < input.length; i++) {
      let c = input.charAt(i);
      // 扫描算式 input 中的运算符
      if (c == '-' || c == '*' || c == '+') {
          /****** 分 ******/
          // 以运算符为中心，分割成两个字符串，分别递归计算
          let left = diffWaysToCompute(input.substring(0, i));
          let right= diffWaysToCompute(input.substring(i + 1));
          /****** 治 ******/
          // 通过子问题的结果，合成原问题的结果
          for (let a of left){
            for (let b of right){
              if (c == '+') res.push(a + b);
              else if (c == '-') res.push(a - b);
              else if (c == '*') res.push(a * b);
            }
          }

      }
  }
  // base case
  // 如果 res 为空，说明算式是一个数字，没有运算符
  // ! 递归函数必须有个 base case 用来结束递归
  if (res.length===0) {
      res.push(Number(input));
  }
  return res;
}


/* 
(1 + 1) + (1 + 1 + 1)
(1 + 1 + 1) + (1 + 1)
属于重复计算，所以可以加一个备忘录进行剪枝
*/
// 备忘录 优化
const memo=new Map();
function diffWaysToCompute(input) {
  // 避免重复计算--剪枝
  if (memo.has(input)) {return memo.get(input);}
 let res =[];
  for (let i = 0; i < input.length; i++) {
      let c = input.charAt(i);
      // 扫描算式 input 中的运算符
      if (c == '-' || c == '*' || c == '+') {
          /****** 分 ******/
          // 以运算符为中心，分割成两个字符串，分别递归计算
          let left = diffWaysToCompute(input.substring(0, i));
          let right= diffWaysToCompute(input.substring(i + 1));
          /****** 治 ******/
          // 通过子问题的结果，合成原问题的结果
          for (let a of left){
            for (let b of right){
              if (c == '+') res.push(a + b);
              else if (c == '-') res.push(a - b);
              else if (c == '*') res.push(a * b);
            }
          }

      }
  }
  // base case
  // 如果 res 为空，说明算式是一个数字，没有运算符
  // ! 递归函数必须有个 base case 用来结束递归
  if (res.length===0) {res.push(Number(input))};

  // 将结果添加进备忘录
  memo.set(input, res);
  return res;
}