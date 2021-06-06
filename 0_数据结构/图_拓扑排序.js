import Dictionary from './字典_Map类'
// 图
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

// 深度有限算法--改进型
export const DFSVisit = (u, color, d, f, p, time, linkList) => { 
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



const graph = new Graph(true); // 有向图
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F']; 
for (let i = 0; i < myVertices.length; i++) { 
 graph.addPoints(myVertices[i]); 
} 
graph.addEdge('A', 'C'); 
graph.addEdge('A', 'D'); 
graph.addEdge('B', 'D'); 
graph.addEdge('B', 'E'); 
graph.addEdge('C', 'F'); 
graph.addEdge('F', 'E'); 


const result = DFS(graph);//   - B - A - D - C - F - E

const fTimes = result.finished; 
let s = ''; 
for (let count = 0; count < myVertices.length; count++) { 
 let max = 0; 
 let maxName = null; 
 for (let i = 0; i < myVertices.length; i++) { 
 if (fTimes[myVertices[i]] > max) { 
 max = fTimes[myVertices[i]]; 
 maxName = myVertices[i]; 
 } 
 } 
 s += ' - ' + maxName; 
 delete fTimes[maxName]; 
} 
console.log(s);