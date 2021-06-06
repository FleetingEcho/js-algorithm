
//> 差分数组的主要适用场景是频繁对原始数组的某个区间的元素进行增减。
/* 
比如说，我给你输入一个数组nums，然后又要求给区间nums[2..6]全部加 1，
再给nums[3..9]全部减 3，再给nums[0..4]全部加 2，再给…
一通操作猛如虎，然后问你，最后nums数组的值是什么？

这里就需要差分数组的技巧，类似前缀和技巧构造的prefix数组，
我们先对nums数组构造一个diff差分数组，
diff[i]就是nums[i]和nums[i-1]之差：

int[] diff = new int[nums.length];
构造差分数组
diff[0] = nums[0];
for (int i = 1; i < nums.length; i++) {
    diff[i] = nums[i] - nums[i - 1];
}

>例如：  
nums=[8,2,6,3,1]
diff=[8,-6,4,-3,-2]
*/

// ============差分框架============
function arrToDiff(nums) {
  let diff = new Array(nums.length).fill(0)
  // 构造差分数组
  diff[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    diff[i] = nums[i] - nums[i - 1]
  }
}
// ==============================

//===============diff数组反推原数组======
function diffToArr(diff) {
  let res = new Array(diff.length).fill(0)
  // 根据差分数组构造结果数组
  res[0] = diff[0]
  for (let i = 1; i < diff.length; i++) {
    res[i] = res[i - 1] + diff[i]
  }
}

// ========================================

/* 
这样构造差分数组diff，就可以快速进行区间增减的操作，
如果你想对区间nums[i..j]的元素全部加 3，那么只需要让diff[i] += 3，
然后再让diff[j+1] -= 3即可：

> 只要花费 O(1) 的时间修改diff数组，就相当于给nums的整个区间做了修改。
> 多次修改diff，然后通过diff数组反推，即可得到nums修改后的结果。

*/

// 差分数组的类

class Difference {
  constructor(nums) {
    this.diff = []
    this.Diff(nums)
  }
  // 创建diff数组
  Diff(nums) {
    if (nums.length === 0) return []
    this.diff = new Array(nums.length)
    // 构造差分数组
    this.diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }
  }

  /* 给闭区间 [i,j] 增加 val（可以是负数）*/
  // [1,2,3,4]; [0,1]
  increment(i, j, val) {
    this.diff[i] += val
    // 如果j位没有到末尾，表示加不到末尾，则j+1要减去val才能使得转换成数组的时候正确
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val
    }
  }
  // diff输出为数组
  result() {
    let res = new Array(this.diff.length).fill(0)
    // 根据差分数组构造结果数组
    res[0] = this.diff[0]
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i]
    }
    return res
  }
}

function corpFlightBookings(bookings, n) {
  // nums 初始化为全 0
  let nums = new Array(n).fill(0)
  // 构造差分解法
  const df = new Difference(nums)

  for (let booking of bookings) {
    // 注意转成数组索引要减一哦
    let i = booking[0] - 1
    let j = booking[1] - 1
    let val = booking[2]
    // 对区间 nums[i..j] 增加 val
    df.increment(i, j, val)
  }
  // 返回最终的结果数组
  return df.result()
}
console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5
  )
)
