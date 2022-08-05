public class Solution {

  public List<List<Integer>> fourSum(int[] nums, int target) {
    Arrays.sort(nums);
    return nSumTarget(nums, 4, 0, target);
  }

  private List<List<Integer>> nSumTarget(int[] nums, int n, int start, int target) {
    int sz = nums.length;
    List<List<Integer>> res = new ArrayList<>();
    if (n < 2 || sz < n)
      return res;
    if (n == 2) {
      int lo = start;// index
      int hi = sz - 1;
      while (lo < hi) {
        int sum = nums[lo] + nums[hi];
        int left = nums[lo];
        int right = nums[hi];
        if (sum < target) {
          while (lo < hi && nums[lo] == left)
            lo++;
        } else if (sum > target) {
          while (lo < hi && nums[hi] == right)
            hi--;
        } else {
          List<Integer> temp = new ArrayList<>();
          temp.add(left);
          temp.add(right);
          res.add(temp);
          while (lo < hi && nums[lo] == left)
            lo++;
          while (lo < hi && nums[hi] == right)
            hi--;
        }
      }
    } else {
      for (int i = start; i < sz; i++) {
        List<List<Integer>> sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
        for (List<Integer> arr : sub) {
          arr.add(nums[i]);
          res.add(arr);
        }
        while (i < sz - 1 && nums[i] == nums[i + 1])
          i++;
      }
    }
    return res;
  }

}
