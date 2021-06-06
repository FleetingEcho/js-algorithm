// 图是一组由边连接的节点（或顶点）。学习图是重要的，因为任何二元关系都可以用图来表示。
/* 
一个图 G = (V, E)由以下元素组成。
V：一组顶点
E：一组边，连接 V 中的顶点


一个顶点的度是其相邻顶点的数量。
简单路径要求不包含重复的顶点。
环也是一个简单路径，比如 A D C A（最后一个顶点重新回到 A）
如果图中不存在环，则称该图是无环的。如果图中每两个顶点间都存在路径，则该图是连通的。

* 强连通   如果图中每两个顶点间在双向上都存在路径。例如，C <--> D 是强连通的 。而 A-->B 不是强连通的。

图还可以是未加权的（目前为止我们看到的图都是未加权的）或是加权的。加权图的边被赋予了权值。



! 1. 邻接矩阵  (形式1,最常见)
每个节点都和一个整数相关联，该整数将作为数组的索引。我
们用一个二维数组来表示顶点之间的连接。如果索引为 i 的节点和索引为 j 的节点相邻，则
array[i][j] === 1，否则 array[i][j] === 0
! 不是强连通的图（稀疏图）如果用邻接矩阵来表示，则矩阵中将会有很多 0
! 并且会浪费计算机资源


! 2.邻接表     --可以用列表（数组）、链表，甚至是散列表或是字典来表示相邻顶点列表。
要找出顶点 v 和 w 是否相邻，使用邻接矩阵会比较快）


! 关联矩阵  (通常用于边的数量比顶点多)
在关联矩阵中，矩阵的行表示顶点，列表示边。如下图所示，
使用二维数组来表示两者之间的连通性，如果顶点 v 是边 e 的入射点，则 array[v][e] === 1；
否则，array[v][e] === 0。

 */

import Dictionary from './字典_Map类'
// 图
export default class Graph {
  // 默认情况下，图是无向的。
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.points = [];
    this.linkList = new Dictionary();
  }
  // 添加一个新的顶点
  addPoints(v) {
    if (!this.points.includes(v)) {
      this.points.push(v);
      this.linkList.set(v, []);
    }
  }
  // 添加顶点之间的边
  addEdge(a, b) {
    // 没有点，则添加
    if (!this.linkList.get(a)) {
      this.addPoints(a);
    }
    if (!this.linkList.get(b)) {
      this.addPoints(b);
    }
    // 往a数组内添加b点，即为边
    // 无向图需要互相添加点
    this.linkList.get(a).push(b);
    if (this.isDirected !== true) {
      this.linkList.get(b).push(a);
    }
  }
  // 返回顶点列表
  getPoints() {
    return this.points;
  }
  // 返回邻接表
  getLinkList() {
    return this.linkList;
  }
  // 实现 Graph 类的 toString 方法，以便在控制台输出图
  toString() {
    let s = '';
    for (let i = 0; i < this.points.length; i++) {
      s += `${this.points[i]} -> `;
      const neighbors = this.linkList.get(this.points[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}


// 测试用
const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
 graph.addPoints(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());

/* 

A -> B C D 
B -> A E F
C -> A D G
D -> A C G H
E -> B I
F -> B
G -> C D
H -> D
I -> E


Dictionary {
  dictionary: Map {
    'A' => [ 'B', 'C', 'D' ],
    'B' => [ 'A', 'E', 'F' ],
    'C' => [ 'A', 'D', 'G' ],
    'D' => [ 'A', 'C', 'G', 'H' ],
    'E' => [ 'B', 'I' ],
    'F' => [ 'B' ],
    'G' => [ 'C', 'D' ],
    'H' => [ 'D' ],
    'I' => [ 'E' ]
  }
}

*/