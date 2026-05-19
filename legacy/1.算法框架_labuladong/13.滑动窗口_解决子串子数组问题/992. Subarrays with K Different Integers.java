class Solution992 {
  int count[] = {};
  int size = 0;

  public int subarraysWithKDistinct(int[] A, int K) {
    return getMaxK(A, K) - getMaxK(A, K - 1);
  }

  private int getMaxK(int[] A, int k) {
    count = new int[A.length + 1];
    size = 0;
    int result = 0;
    int left = 0, right = 0;
    while (left < A.length) {
      while (right < A.length && size <= k && (size != k || count[A[right]] != 0)) {
        add(A[right++]);
      }
      result += right - left;
      remove(A[left++]);
    }
    return result;
  }

  private void add(int i) {
    if (count[i] == 0)
      size++;
    count[i]++;
  }

  private void remove(int i) {
    if (count[i] == 1)
      size--;
    count[i]--;
  }
}

/*
 * 
 * 滑动窗口题目:
 * 
 * 3. 无重复字符的最长子串
 * 
 * 30. 串联所有单词的子串
 * 
 * 76. 最小覆盖子串
 * 
 * 159. 至多包含两个不同字符的最长子串
 * 
 * 209. 长度最小的子数组
 * 
 * 239. 滑动窗口最大值
 * 
 * 567. 字符串的排列
 * 
 * 632. 最小区间
 * 
 * 727. 最小窗口子序列
 *
 * 
 */