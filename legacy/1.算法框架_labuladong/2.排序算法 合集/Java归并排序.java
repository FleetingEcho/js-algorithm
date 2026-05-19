class Solution {
  public int[] sortArray(int[] nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
  }

  private void mergeSort(int[] nums, int low, int high) {
    if (low < high) {
      int mid = low + (high - low) / 2;
      mergeSort(nums, low, mid);
      mergeSort(nums, mid + 1, high);
      mergeTwoArrays(nums, low, mid, high);
    }
  }

  private void mergeTwoArrays(int[] nums, int low, int mid, int high) {
    int[] tmp = new int[high - low + 1];
    int i = low, j = mid + 1, k = 0;
    while (i <= mid && j <= high) {
      if (nums[i] < nums[j]) {
        tmp[k++] = nums[i++];
      } else {
        tmp[k++] = nums[j++];
      }
    }
    while (i <= mid)
      tmp[k++] = nums[i++];
    while (j <= high)
      tmp[k++] = nums[j++];
    for (int index = 0; index < k; index++) {
      nums[low + index] = tmp[index];
    }
  }
}

class Solution1 {
  public int[] sortArray(int[] nums) {
    dfs(nums, 0, nums.length - 1);
    return nums;
  }

  void dfs(int[] nums, int l, int r) {
    if (l >= r) {
      return;
    }
    int mid = l + (r - l) / 2;
    dfs(nums, l, mid);
    dfs(nums, mid + 1, r);
    mergeTwo(nums, l, mid, r);
  }

  void mergeTwo(int[] nums, int l, int mid, int r) {
    int[] temp = new int[r - l + 1];
    int k = 0;
    int i = l;
    int j = mid + 1;
    while (i <= mid && j <= r) {
      if (nums[i] <= nums[j]) {
        temp[k++] = nums[i++];
      } else {
        temp[k++] = nums[j++];
      }
    }
    while (i <= mid) {
      temp[k++] = nums[i++];
    }
    while (j <= r) {
      temp[k++] = nums[j++];
    }
    for (int c = 0; c < r - l + 1; c++) {
      nums[l + c] = temp[c];
    }
  }
}

/*
 * 
 * 跟快排一样也利用了分治思想
 * 
 * mergeSort方法：
 * 将数组nums分成左边一半和右边一半，两边分别排序
 * 将已排序好的左边一半和右边一半合并
 * mergeTwoArrays方法：
 * 建立一个临时数组tmp用于存储排序后的数组分片
 * 进入循环，分别从两个数组分片的头部开始遍历，比较大小，加到tmp中
 * 两个数组分片未必完全等分，所以在循环完成后将剩余的值也加到tmp中
 * 将tmp的值依次替换原本nums的对应位置的值
 */