/* 方法:
! BFS 广度优先搜索（breadth-first search）   将顶点存入 “栈”，顶点是沿着路径被探索的，存在新的相邻顶点
就去访问
! DFS 深度优先搜索（depth-first search）     将顶点存入 “队列”，最先入队列的顶点先被探索


图遍历算法的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探索。
完全探索一个顶点要求我们查看该顶点的每一条边。对于每一条边所连接的没有被访问过的顶点，
将其标注为被发现的，并将其加进待访问顶点列表中。

* 标注已经访问过的顶点时，用三种颜色
白色：还没有被访问。
灰色：被访问过，但并未被探索过。
黑色：被访问过且被完全探索过。
*/
import Graph from './图'
import { Queue } from './队列'
import {Stack} from './栈'
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

// 广度优先搜索算法
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
export const BFS_Graph = (graph, startVertex, callback) => {
  const linkList = graph.getLinkList()
  const points = graph.getPoints()
  // 将 color 数组初始化为白色
  const color = initializeColor(points)
  // color是 { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0 }
  const queue = new Queue()
  // 将顶点 加入队列
  queue.enqueue(startVertex)
  // 不断的出队
  while (!queue.isEmpty()) {
    // u出队列
    const u = queue.dequeue()
    const neighbors = linkList.get(u)
    color[u] = Colors.GREY // 标注为被发现
    // 将 u 所有未被访问过的邻点（白色）入队列
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        queue.enqueue(w) //A  BCD 入队
      }
    }
    // 标注 u 为已被探索的（黑色）。
    color[u] = Colors.BLACK
    if (callback) {
      callback(u)
    }
  }
}

// 当题目是: 给定一个图 G 和源顶点 v，找出每个顶点 u 和 v 之间最短路径的距离（以边的数量计）。
/* 对于给定顶点 v，广度优先算法会访问所有与其距离为 1 的顶点，接着是距离为 2 的顶点，以此类推。
从 v 到 u 的距离 distances[u]；
前溯点 predecessors[u]，用来推导出从 v 到其他每个顶点 u 的最短路径。
 */
/* 
{
  distances: { A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 },
  predecessors: {
    A: null,
    B: 'A',
    C: 'A',
    D: 'A',
    E: 'B',
    F: 'B',
    G: 'C',
    H: 'D',
    I: 'E'
  }
}
这意味着顶点 A 与顶点 B、C 和 D 的距离为 1；与顶点 E、F、G 和 H 的距离为 2；与顶点 I
的距离为 3。

对应关系：
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
// ! 改进后的广度有限算法！  
const BFS = (graph, startVertex) => {
  const points = graph.getPoints()
  const linkList = graph.getLinkList()
  const color = initializeColor(points)
  const queue = new Queue()
  // 声明一个对象表示距离
  const distances = {}
  // 前溯点
  const predecessors = {}
  queue.enqueue(startVertex)
  // 初始化每个顶点
  for (let i = 0; i < points.length; i++) {
    distances[points[i]] = 0
    predecessors[points[i]] = null
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeue()  // A
    const neighbors = linkList.get(u)  // BCD
    color[u] = Colors.GREY   // 标注为被发现
    // 将 u 所有未被访问过的邻点（白色）入队列
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        // 找到U的邻点W时，则设置 w 的前溯点值为 u
        distances[w] = distances[u] + 1 // 增加 u 和 w 之间的距离
        predecessors[w] = u
        queue.enqueue(w)
      }
    }
    color[u] = Colors.BLACK
  }
  return {
    distances,
    predecessors,
  }
}


// ! 调用
const graph = new Graph()
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertices.length; i++) {
  graph.addPoints(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

// const printVertex = (value) => console.log('Visited vertex: ' + value)
// BFS_Graph( graph, myVertices[0], printVertex)

const shortestPathA = BFS(graph, myVertices[0])
console.log(shortestPathA)



/* 

{
  distances: { A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 },
  predecessors: {
    A: null,
    B: 'A',
    C: 'A',
    D: 'A',
    E: 'B',
    F: 'B',
    G: 'C',
    H: 'D',
    I: 'E'
  }
}
这意味着顶点 A 与顶点 B、C 和 D 的距离为 1；与顶点 E、F、G 和 H 的距离为 2；与顶点 I
的距离为 3。
*/

// 通过前溯点数组，我们可以用下面这段代码来构建从顶点 A 到其他顶点的路径。
const fromPoints = myVertices[0]; // A 
// 遍历所有顶点
for (let i = 1; i < myVertices.length; i++) {
 const toPoints = myVertices[i]; //从B开始  [B C D E F]
//  创建一个 栈 来存储 路径值
 const path = new Stack()
 for (let v = toPoints; v !== fromPoints; v = shortestPathA.predecessors[v]) { 
  path.push(v); // {14} 
  } 
  path.push(fromPoints); // {15} 
  let s = path.pop(); // {16} 
  while (!path.isEmpty()) { // {17} 
  s += ' - ' + path.pop(); // {18} 
  } 
  console.log(s); // {19} 
 }

 /* 
A - B
A - C
A - D
A - B - E
A - B - F
A - C - G
A - D - H
A - B - E - I
 */
