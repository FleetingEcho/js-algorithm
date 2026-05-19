from typing import List


class Solution:

    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        # 完全背包问题，每个元素可以选多次
        n = len(s)
        dp = [False] * (n + 1)
        dp[0] = True
        for i in range(n):
            for j in range(i + 1, n + 1):
                if dp[i] and s[i:j] in wordDict:
                    dp[j] = True
        return dp[-1]


# O(N^2)