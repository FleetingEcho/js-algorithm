# 图算法

> **Dijkstra**（单源最短路径，无权= BFS，正权= Dijkstra，负权= Bellman-Ford）
> **拓扑排序**（DAG 的线性排序，Kahn 算法 = BFS + 入度表）
> **二分图**（用两种颜色染色，相邻节点不同色）

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                                                | 题目             | 难度 | 核心考点             | 推荐指数 |
| --- | ------------------------------------------------------------------- | ---------------- | :--: | -------------------- | :------: |
| 1   | [743](https://leetcode.cn/problems/network-delay-time/)             | 网络延迟时间     |  🟡  | Dijkstra             |   ⭐⭐   |
| 2   | [1514](https://leetcode.cn/problems/path-with-maximum-probability/) | 概率最大的路径   |  🟡  | Dijkstra（最大概率） |   ⭐⭐   |
| 3   | [1631](https://leetcode.cn/problems/path-with-minimum-effort/)      | 最小体力消耗路径 |  🟡  | Dijkstra 变种        |  ⭐⭐⭐  |
| 4   | [207](https://leetcode.cn/problems/course-schedule/)                | 课程表           |  🟡  | 拓扑排序判环         |    ⭐    |
| 5   | [210](https://leetcode.cn/problems/course-schedule-ii/)             | 课程表 II        |  🟡  | 拓扑排序顺序         |   ⭐⭐   |
| 6   | [269](https://leetcode.cn/problems/alien-dictionary/)               | 火星词典         |  🔴  | 拓扑排序建图         |  ⭐⭐⭐  |
| 7   | [785](https://leetcode.cn/problems/is-graph-bipartite/)             | 判断二分图       |  🟡  | DFS/BFS 染色         |   ⭐⭐   |
| 8   | [886](https://leetcode.cn/problems/possible-bipartition/)           | 可能的二分法     |  🟡  | 染色法               |   ⭐⭐   |
| 9   | [277](https://leetcode.cn/problems/find-the-celebrity/)             | 搜寻名人         |  🟡  | 两遍遍历             |   ⭐⭐   |

---

## 📐 Dijkstra 模板

```typescript
// dijkstra.ts
function dijkstra(graph: [number, number][][], start: number): number[] {
  const n = graph.length;
  const dist = new Array(n).fill(Infinity);
  dist[start] = 0;

  // 优先队列（小顶堆）：[distance, node]
  const pq: [number, number][] = [[0, start]];

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift()!;

    if (d > dist[u]) continue; // 过期条目

    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        pq.push([dist[v], v]);
      }
    }
  }

  return dist;
}
```

### 拓扑排序（Kahn 算法）

```typescript
// topological-sort.ts
function topologicalSort(n: number, edges: number[][]): number[] {
  const indegree = new Array(n).fill(0);
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [from, to] of edges) {
    graph[from].push(to);
    indegree[to]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const result: number[] = [];
  while (queue.length > 0) {
    const u = queue.shift()!;
    result.push(u);

    for (const v of graph[u]) {
      indegree[v]--;
      if (indegree[v] === 0) queue.push(v);
    }
  }

  return result.length === n ? result : []; // 有环返回 []
}
```

### 二分图染色

```typescript
// is-bipartite.ts
function isBipartite(graph: number[][]): boolean {
  const n = graph.length;
  const color = new Array(n).fill(0); // 0=未染色, 1=红色, -1=蓝色

  for (let i = 0; i < n; i++) {
    if (color[i] !== 0) continue;

    color[i] = 1;
    const queue: number[] = [i];

    while (queue.length > 0) {
      const u = queue.shift()!;
      for (const v of graph[u]) {
        if (color[v] === 0) {
          color[v] = -color[u];
          queue.push(v);
        } else if (color[v] === color[u]) {
          return false;
        }
      }
    }
  }

  return true;
}
```

---

## 📊 复杂度速查表

| 算法     | 时间复杂度 | 空间复杂度 | 适用场景       |
| -------- | :--------: | :--------: | -------------- |
| Dijkstra | O(E log V) |    O(V)    | 正权图最短路径 |
| 拓扑排序 |   O(V+E)   |    O(V)    | DAG 排序判环   |
| 二分图   |   O(V+E)   |    O(V)    | 相邻异色       |

---

> **关联阅读：** `25-union-find.md` → `03-bfs-framework.md`
