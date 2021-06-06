/* 
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，
可以接 6 个单位的雨水（蓝色部分表示雨水）。 

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
*/
// ! 方法：  暴力解法 -> 备忘录解法 -> 双指针解法

// ! 方法1     暴力解法

function trap1(height){
  let n=height.length;
  let ans=0;
  for(let i=0;i<n-1;i++){
    let l_max=0,r_max=0;
    for(let j=0;j<n;j++){
      r_max=Math.max(r_max,height[j])
    }
    for(let j=i;j>=n;j--){
      l_max=Math.max(l_max,height[j])
    }
    ans+=Math.min(l_max,r_max)-height[i];
    
  }
  return ans
}
// 这个解法应该是很直接粗暴的，时间复杂度 O(N^2)，空间复杂度 O(1)。
// 但是很明显这种计算r_max和l_max的方式非常笨拙，一般的优化方法就是备忘录。


// ! 方法2 备忘录优化
//l_max[i]表示位置 i 左边最高的柱子高度，r_max[i]表示位置 i 右边最高的柱子高度。
function trap2(height){
  if(height.length===0) return 0;
  let n=height.length;
  let ans=0;
  let l_max=[],r_max=[];
  l_max[0]=height[0];
  r_max[n-1]=height[n-1]
  for(let i=1;i<n;i++){
    l_max[i]=Math.max(height[i],l_max[i-1])
  }
  for(let i=n-2;i>=0;i--){
    r_max[i]=Math.max(height[i],r_max[i+1])
  }
  for(let i=1;i<n-1;i++){
    ans+=Math.min(l_max[i],r_max[i])-height[i];
  }
  return ans
}
// 这个优化其实和暴力解法差不多，就是避免了重复计算，
// 把时间复杂度降低为 O(N)，已经是最优了，但是空间复杂度是 O(N)。

// ! 双指针解法  l_max是height[0..left]中最高柱子的高度，r_max是height[right..end]的最高柱子的高度。

function trap(height) {
  if(height.length===0) return 0;
  let n = height.length;
  let left = 0, right = n - 1;
  let ans =0;
  let l_max = height[0];
  let r_max = height[n - 1];

  while (left<=right) {
      l_max = Math.max(l_max, height[left]);
      r_max = Math.max(r_max, height[right]);
      if(l_max<r_max){
        ans+=l_max-height[left]
        left++;
      }else{
        ans+=r_max-height[right]
        right--;
      }
  }
  return ans;
}

console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]));