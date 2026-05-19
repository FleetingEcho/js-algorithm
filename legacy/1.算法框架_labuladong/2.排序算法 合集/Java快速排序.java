
class Solution {
  public int[] sortArray(int[] nums) {
    mySort(nums, 0, nums.length - 1);
    return nums;

  }

  public void mySort(int[] nums, int left, int right) {
    if (left >= right) {
      return;
    }
    int i = left;
    int j = right;
    int mid = i + (j - i) / 2;
    int pivot = nums[mid];
    while (i <= j) {
      while (nums[i] < pivot) {
        i++;
      }
      while (nums[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(nums, i, j);
        i++;
        j--;
      }
    }
    // System.out.println(Arrays.toString(nums));
    mySort(nums, left, j);
    mySort(nums, i, right);
  }

  void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}

/*
 * 
 * 核心思路：快慢双指针 + 分治
 * 
 * partition方法
 * 先随机选择一个中间值pivot作为比较的基准，因此比这个基准小的放到左边，比这个基准大的放到右边
 * 把选择的基准放到最左边，也就是nums[low]和nums[pivot]交换位置
 * 慢指针 i 从low位置开始，指向比基准小的数字；快指针 j 从low + 1位置开始遍历
 * j <= high进入循环
 * 如果nums[j]比基准小，nums[i + 1]和nums[j]交换位置，并且i + 1
 * j每次循环 + 1
 * 循环结束后，当前 i
 * 指针所在位置即为数组中比base小的最后一个位置，将其和最左边的base交换位置，也就是交换nums[low]和nums[i]；交换完后，
 * i位置之前的都是比它小的，i位置之后的都是比它大的
 * 返回i，该位置的元素已排序完成，就是已经在它该在的位置了，接下来要排序i之前的和i之后的元素了
 * quick_sort方法：
 * 走一遍partition方法，获取已经排序好的mid
 * 分别对[low, mid - 1]和[mid + 1, high]两个区间进行排序，也就是mid的左右两边
 * 代码
 * 
 * 
 */