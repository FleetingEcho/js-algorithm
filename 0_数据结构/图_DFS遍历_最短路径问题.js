// 深度优先搜索
/* 
深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径直到这条路径最后一个顶点被访问了，
接着原路回退并探索下一条路径。

(1) 标注 v 为被发现的（灰色）；
(2) 对于 v 的所有未访问（白色）的邻点 w，访问顶点 w；
(3) 标注 v 为已被探索的（黑色）。
深度优先搜索的步骤是递归的，这意味着深度优先搜索算法使用栈来存储函数调
用（由递归调用所创建的栈）。

!  使用图来解决最短路径问题
!  著名的有Dijkstra 算法和 Floyd-Warshall 算法。


* Dijkstra 算法 -----计算从单个源到所有其他源的最短路径的贪心算法
* Floyd-Warshall算法-----是一种计算图中所有最短路径的动态规划算法



! 最小生成树（MST）  有 Prim 算法和 Kruskal 算法。
*/

import Graph from './图'

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
}

const initializeColor = (points) => {
  const color = {}
  for (let i = 0; i < points.length; i++) {
    color[points[i]] = Colors.WHITE
  }
  return color
}
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
*/
const depthFirstSearchVisit = (u, color, linkList, callback) => {
  // 标注为被发现的顶点
  color[u] = Colors.GREY 
  if (callback) {
    // 打印探索结果
    callback(u)
  }
  const neighbors = linkList.get(u) // {7}
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i] 
    // 如果没有被访问过，则继续调用(其他顶点颜色会相应改变)
    if (color[w] === Colors.WHITE) {
      //添加顶点w 入栈
      depthFirstSearchVisit(w, color, linkList, callback) 
    }
  }
  // 在该顶点和邻点按深度访问之后，该顶点已经被完全探索， 标注为黑色！
  color[u] = Colors.BLACK // {12}
}

const DFS_Graph = (graph, callback) => {
  const points = graph.getPoints()  //所有顶点
  const linkList = graph.getLinkList()
  const color = initializeColor(points)  //初始化所有顶点颜色
  // 对每个未被访问过的顶点---调用函数。 
  // 传递的参数为要访问的顶点 u、颜色数组以及回调函数
  for (let i = 0; i < points.length; i++) {
    if (color[points[i]] === Colors.WHITE) {
      // 访问顶点points
      depthFirstSearchVisit(points[i], color, linkList, callback) // {4}
    }
  }
}

// ! 调用
const graph = new Graph()
// Graph已经调用过了

/* 
DFS_Graph(graph, printVertex); 打印结果
A -> B C D
B -> A E F
C -> A D G
D -> A C G H
E -> B I
F -> B
G -> C D
H -> D
I -> E

*/

const printVertex = (value) => console.log('Visited vertex: ' + value)
DFS_Graph(graph, printVertex)


/* 
! 对于给定的图 G，我们希望 "深度优先搜索算法" 遍历图 G 的所有节点，构建“森林”（有根树
! 的一个集合）以及一组源顶点（根），并输出两个数组：发现时间和完成探索时间。我们可以修
! 改 depthFirstSearch 函数来返回一些信息：

顶点 u 的发现时间 d[u]；
当顶点 u 被标注为黑色时，u 的完成探索时间 f[u]；
顶点 u 的前溯点 p[u]。

*/
const DFSVisit = (u, color, d, f, p, time, linkList) => { 
  color[u] = Colors.GREY; 
  // 当一个顶点第一次被发现时，追踪其发现时间
  d[u] = ++time.count; 
  const neighbors = linkList.get(u); 
  for (let i = 0; i < neighbors.length; i++) { 
  const w = neighbors[i]; 
  if (color[w] === Colors.WHITE) { 
  // 当它是由引自顶点 u 的边而被发现的，追踪它的前溯点
    p[w] = u;  
  DFSVisit(w, color, d, f, p, time, linkList); 
  } 
  } 
  color[u] = Colors.BLACK; 
  // 当这个顶点被完全探索后，我们追踪其完成时间
  f[u] = ++time.count; // {6} 
 };
/* 
时间（time）变量值的范围只可能在图顶点数量的一倍到两倍（2|V|）之间；
对于所有的顶点 u，d[u]<f[u]（意味着，发现时间的值比完成时间的值小，完成时间意思是所有顶点都已经被探索过了）
*/
export const DFS = graph => { 
  const points = graph.getPoints(); 
  const linkList = graph.getLinkList(); 
  const color = initializeColor(points); 
  // 初始化所有顶点
  // color是 { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0 }
  const d = {}; 
  const f = {}; 
  const p = {}; 
  const time = { count : 0}; 
  for (let i = 0; i < points.length; i++) {  
    // 为图的每一个顶点来初始化这些数组
  f[points[i]] = 0; 
  d[points[i]] = 0; 
  p[points[i]] = null; 
  } 
  for (let i = 0; i < points.length; i++) { 
  if (color[points[i]] === Colors.WHITE) { 
  DFSVisit(points[i], color, d, f, p, time, linkList); 
  } 
  } 
  return { // {3} 
  discovery: d, 
  finished: f, 
  predecessors: p 
  }; 
 }; 




// ! 有向无环图（DAG）
// ! 拓扑排序只能应用于 DAG。
