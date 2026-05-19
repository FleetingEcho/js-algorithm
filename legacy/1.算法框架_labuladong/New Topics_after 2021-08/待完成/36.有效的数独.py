from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row = [set() for _ in range(9)]
        col = [set() for _ in range(9)]
        palace = [[set() for _ in range(3)] for _ in range(3)]

        for i in range(9):
            for j in range(9):
                ch = board[i][j]
                if ch == ".":
                    continue
                if ch in row[i] or ch in col[j] or ch in palace[i // 3][j // 3]:
                    return False
                row[i].add(ch)
                col[j].add(ch)
                palace[i // 3][j // 3].add(ch)

        return True
