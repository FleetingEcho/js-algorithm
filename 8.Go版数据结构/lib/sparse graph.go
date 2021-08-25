package lib

import "errors"

// SparseGraph 稀疏图
type SparseGraph struct {
    node     int     // 节点数
    side     int     // 边数
    directed bool    // 是否为有向图
    graph    [][]int // 储存数组
}

// InitSparseGraph 初始化稀疏图
func InitSparseGraph(nodeNum int, directed bool) *SparseGraph {
    arr := make([][]int, nodeNum)
    return &SparseGraph{
        node:     nodeNum,
        side:     0,
        directed: directed,
        graph:    arr,
    }
}

// NodeNum 获取节点数
func (graph *SparseGraph) NodeNum() int {
    return graph.node
}

// SideNum 获取边数
func (graph *SparseGraph) SideNum() int {
    return graph.side
}

// AddSide 添加边
func (graph *SparseGraph) AddSide(node1, node2 int) error {
    if node1 < 0 || node2 < 0 || node1 >= graph.node || node2 >= graph.node {
        return errors.New("索引越界")
    }
    if node1 == node2 {
        return errors.New("索引错误")
    }
    graph.graph[node1] = append(graph.graph[node1], node2)
    // 如果图是无向图
    if !graph.directed {
        graph.graph[node2] = append(graph.graph[node2], node1)
    }
    graph.side++
    return nil
}

// HasConnect 返回两节点是否已连接
func (graph *SparseGraph) HasConnect(node1, node2 int) (bool, error) {
    if node1 < 0 || node2 < 0 || node1 >= graph.node || node2 >= graph.node {
        return false, errors.New("索引越界")
    }
    if node1 == node2 {
        return false, errors.New("索引错误")
    }
    for i := range graph.graph[node1] {
        if graph.graph[node1][i] == node2 {
            return true, nil
        }
    }
    for i := range graph.graph[node2] {
        if graph.graph[node2][i] == node1 {
            return true, nil
        }
    }
    return false, nil
}

// Iterator 节点迭代器
func (graph *SparseGraph) Iterator(node int) ([]int, error) {
    if node < 0 || node > graph.side {
        return nil, errors.New("索引越界")
    }
    return graph.graph[node], nil
}
