class Solution698 {
  public boolean canPartitionKSubsets(int[] nums, int k) {
    // init
    Arrays.sort(nums);
    boolean[] used = new boolean[nums.length];
    int sum = 0;
    for (int i = 0; i < nums.length; i++)
      sum += nums[i];
    if (sum % k != 0)
      return false;
    int target = sum / k;
    if (nums[nums.length - 1] > target)
      return false;

    return dfs(nums, nums.length - 1, target, 0, k, used);
  }

  public static boolean dfs(int[] nums, int begin, int target, int curSum, int k, boolean[] used) {
    if (k == 1)
      return true; // 剪枝1
    if (curSum == target)
      return dfs(nums, nums.length - 1, target, 0, k - 1, used);// 找到了一个组合,还有k-1个.

    for (int i = begin; i >= 0; i--) {
      if (used[i] == true)
        continue; // 使用过的元素就不能再使用了
      if (curSum + nums[i] > target)
        continue; // 剪枝2
      used[i] = true;// 添加元素nums[i]
      if (dfs(nums, i - 1, target, curSum + nums[i], k, used))
        return true;// 如果添加这个元素后，完成了题目要求，就return true.
      used[i] = false;// 回溯
      while (i > 0 && nums[i - 1] == nums[i])
        i--; // 剪枝3,因为能到达此处的都是和nums[i]不匹配的。
    }

    return false;
  }
}

// 回溯 + 减枝