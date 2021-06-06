/* 
求子集（subset），求排列（permutation），求组合（combination）
这几个问题都可以用回溯算法解决。
*/

//! 回溯算法就一种简单粗暴的算法技巧，说白了就是一个暴力穷举算法，比如让你 用回溯算法求子集、全排列、组合，
/* 
以上，就是排列组合和子集三个问题的解法，总结一下：

> 1.子集问题可以利用数学归纳思想，假设已知一个规模较小的问题的结果，思考如何推导出原问题的结果。
>   也可以用回溯算法，要用 start 参数排除已选择的数字。

> 2.组合问题利用的是回溯思想，结果可以表示成树结构，
>   我们只要套用回溯算法模板即可，关键点在于要用一个 start 排除已经选择过的数字。

> 3.排列问题是回溯思想，也可以表示成树结构套用算法模板，
>   不同之处在于使用 contains 方法排除已经选择的数字. 

对于这三个问题，关键区别在于回溯树的结构，不妨多观察递归树的结构，很自然就可以理解代码的含义了。



*/

//> 1. 子集

/* 
输入 nums = [1,2,3]，你的算法应输出 8 个子集，包含空集和本身，顺序可以不同：

[ [],[1],[2],[3],[1,3],[2,3],[1,2],[1,2,3] ]


! 回溯算法模板

result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择

*/

function subsets(nums) {
  let res=[];
    // 记录走过的路径
    function backtrack(nums, start,track) {
        res.push(Array.from(track));
        // 注意 i 从 start 开始递增
        for (let i = start; i < nums.length; i++) {
            // 做选择
            track.push(nums[i]);
            // 回溯
            backtrack(nums, i + 1, track);
            // 撤销选择
            track.pop();
        }
    }
    let track=[];
    backtrack(nums, 0, track);
    return res;
}


// console.log(subsets([1,2,3]));


//> 2.组合
/* 
输入两个数字 n, k，算法输出 [1..n] 中 k 个数字的所有组合。

vector<vector<int>> combine(int n, int k);
比如输入 n = 4, k = 2，输出如下结果，顺序无所谓，
但是不能包含重复（按照组合的定义，[1,2] 和 [2,1] 也算重复）：

[
 [1,2],
 [1,3],
 [1,4],
 [2,3],
 [2,4],
 [3,4]
]
这就是典型的回溯算法，k 限制了树的高度，n 限制了树的宽度，
直接套我们以前讲过的回溯算法模板框架就行了：
*/

let res=[];
function combine(n, k) {
  // base
    if (k <= 0 || n <= 0) return res;
   let track=[];
    backtrack(n, k, 1, track);
    return res;
}
function backtrack( n,  k,  start, track) {
    // 到达树的底部
    if (track.length===k) {
        res.push(Array.from(track));//需要深拷贝
        return;
    }
    // 注意 i 从 start 开始递增
    for (let i = start; i <= n; i++) {
        // 做选择
        track.push(i);
        backtrack(n, k, i + 1, track);
        // 撤销选择
        track.pop();
    }
}

// console.log(combine(4,2));


// > 3. 排列问题
/* 
输入一个不包含重复数字的数组 nums，返回这些数字的全部排列。

vector<vector<int>> permute(vector<int>& nums);
比如说输入数组 [1,2,3]，输出结果应该如下，顺序无所谓，不能有重复：

[
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
]

回溯算法详解 中就是拿这个问题来解释回溯模板的。这里又列出这个问题，
是将「排列」和「组合」这两个回溯算法的代码拿出来对比。
*/
// let res =[];

/* 主函数，输入一组不重复的数字，返回它们的全排列 */
function permute( nums) {
    // 记录「路径」
    let track =[];
    backtrack1(nums, track);
    return res;
}

function backtrack1(nums,track) {
    // 触发结束条件
    if (track.length === nums.length) {
        res.push(Array.from(track));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        // 排除track中已经选择过的数字
        if (track.includes(nums[i])) continue;
        // 做选择
        track.push(nums[i]);
        // 进入下一层决策树
        backtrack1(nums, track);
        // 取消选择
        track.pop()
      }
}

console.log(permute([1,2,3]));


//> 总结
/* 
回溯模板依然没有变，但是根据排列问题和组合问题画出的树来看，
排列问题的树比较对称，而组合问题的树越靠右节点越少。

在代码中的体现就是，
> 1.排列问题每次通过 contains 方法来排除在 track 中已经选择过的数字；
> 2.而组合问题通过传入一个 start 参数，来排除 start 索引之前的数字。


以上，就是排列组合和子集三个问题的解法，总结一下：

> 1.子集问题可以利用数学归纳思想，假设已知一个规模较小的问题的结果，思考如何推导出原问题的结果。也可以用回溯算法，要用 start 参数排除已选择的数字。

> 2.组合问题利用的是回溯思想，结果可以表示成树结构，我们只要套用回溯算法模板即可，关键点在于要用一个 start 排除已经选择过的数字。

> 3.排列问题是回溯思想，也可以表示成树结构套用算法模板，不同之处在于使用 contains 方法排除已经选择的数字，前文有详细分析，这里主要是和组合问题作对比。

对于这三个问题，关键区别在于回溯树的结构，不妨多观察递归树的结构，很自然就可以理解代码的含义了。



*/
