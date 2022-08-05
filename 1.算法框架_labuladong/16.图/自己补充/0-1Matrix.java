class Solution542 {
  static int[][] dirs = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };

  public int[][] updateMatrix(int[][] matrix) {
    int m = matrix.length, n = matrix[0].length;
    int[][] dist = new int[m][n];
    boolean[][] visited = new boolean[m][n];
    Queue<int[]> queue = new LinkedList<int[]>();
    // add all 0 to queue;
    for (int i = 0; i < m; ++i) {
      for (int j = 0; j < n; ++j) {
        if (matrix[i][j] == 0) {
          queue.offer(new int[] { i, j });
          visited[i][j] = true;
        }
      }
    }

    // BFS 以0为起点， 计算周围，没0会自动累加
    while (!queue.isEmpty()) {
      int[] cur = queue.poll();
      for (int[] dir : dirs) {
        int x = cur[0] + dir[0];
        int y = cur[1] + dir[1];
        if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
          int i = cur[0], j = cur[1];
          dist[x][y] = dist[i][j] + 1;
          queue.offer(new int[] { x, y });
          visited[x][y] = true;
        }
      }
    }

    return dist;
  }
}

// 934. Shortest Bridge DFS + BFS
class Solution934 {
  private int[][] dirs = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };
  private int res = 0;
  private Queue<int[]> queue = new LinkedList<>();

  public int shortestBridge(int[][] A) {
    // dfs 找出并标记第一个岛屿;顺带注入所有的0
    boolean dfsFlag = false;
    for (int i = 0; i < A.length; i++) {
      if (dfsFlag)
        break;
      for (int j = 0; j < A[0].length; j++) {
        if (A[i][j] == 1) {
          dfs(A, queue, i, j, A.length, A[0].length);
          dfsFlag = true;
          break;
        }
      }
    }
    // BFS find another 1;
    while (!queue.isEmpty()) {
      res++;
      int len = queue.size();
      while (len > 0) {
        int[] root = queue.poll();
        for (int[] dir : dirs) {
          int x1 = root[0] + dir[0]; // search adjacent;
          int y1 = root[1] + dir[1];// search adjacent;
          if (x1 >= 0 && x1 < A.length && y1 >= 0 && y1 < A[0].length) {
            if (A[x1][y1] == 2)
              continue;
            if (A[x1][y1] == 1)
              return res;
            A[x1][y1] = 2;// 标注
            queue.add(new int[] { x1, y1 });
          }
        }
        len--;
      }
    }
    return res;
  }

  private void dfs(int[][] A, Queue<int[]> queue, int x, int y, int n, int m) {
    if (x < 0 || x == n || y < 0 || y == m || A[x][y] == 2) {
      return;
    }
    if (A[x][y] == 0) {
      queue.add(new int[] { x, y });
      return;
    }
    A[x][y] = 2;
    for (int[] dir : dirs) {
      int x1 = x + dir[0];
      int y1 = y + dir[1];
      dfs(A, queue, x1, y1, n, m);
    }
  }
}

/*
 * 1. 先 dfs 将找到的第一座桥的值全部赋值为2，并将第一座桥旁边的 0 全部插入队列中
 * 2. 再 while 循环判断队列是否为空，循环体里会判断是否发现了第二座桥；
 * 先 dfs，将第一座岛上所有值都该为 2
 * bfs 寻找下一座岛屿，遍历时将所有 0 值赋值为 2
 * 
 * 插入所有为 0 的值的坐标到队列中
 * 为 1 的值就改变为 2 并且继续遍历四个方向
 * 为 2 的值就直接退出
 * 
 */