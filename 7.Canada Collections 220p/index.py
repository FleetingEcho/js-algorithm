i = 1
ll = [
    "674 Longest Continuous Increasing Subsequence (接龙型 dp)",
    "62 Unique Paths II",
    "70 Climbing Stairs",
    "64 Minimum Path Sum",
    "368 Largest Divisible Subset (接龙型 dp)",
    "300 Longest Increasing Subsequence (接龙型 dp)",
    "354 Russian Doll Envelopes (接龙型 dp， 300 的 2D 版)",
    "256 Paint House",
    "121 Best Time to Buy and Sell Stock",
    "55 Jump Game",
    "45 Jump Game II",
    "132 Palindrome Partitioning II",
    "312 Burst Balloons (区间型 dp)",
    "1143 Longest Common Subsequence (前缀型 dp)",
    "1062 Longest Repeating Substring (dp 方法与 longest common substring 一致)",
    "718 Maximum Length of Repeated Subarray (和 1062 本质上一样)",
    "174 Dungeon Game",
    "115 Distinct Subsequences",
    "72 Edit Distance",
    "91 Decode Ways",
    "639 Decode Ways II",
    "712 Minimum ASCII Delete Sum for Two Strings",
    "221 Maximal Square",
    "1277 Count Square Submatrices with All Ones (可以使用 221 一样的解法)",
    "198 House Robber",
    "213 House Robber II",
    "740 Delete and Earn",
    "87 Scramble String",
    "1140 Stone Game II",
    "322 Coin Change",
    "518 Coin Change II (01 背包型)",
    "1048 Longest String Chain",
    "44 Wildcard Matching",
    "10 Regular Expression Matching",
    "32 Longest Valid Parentheses",
    "1235 Maximum Profit in Job Scheduling (DP + binary search)",
    "1043 Partition Array for Maximum Sum",
]
for item in ll:
    # i_str = str(i)
    filename = item + '.ts'
    f = open(filename, 'w')
    content = '// ' + filename
    f.write(content)
    f.close()
    i = i + 1
