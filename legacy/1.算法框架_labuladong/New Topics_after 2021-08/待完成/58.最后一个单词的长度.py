class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        n = len(s)
        ans = 0
        # 倒序遍历
        for i in range(n - 1, -1, -1):
            if s[i] != " ":
                ans += 1
            else:
                if ans:
                    return ans
        return ans
