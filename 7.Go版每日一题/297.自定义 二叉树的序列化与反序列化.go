package leetcode297

import (
	"fmt"
	"reflect"
	"strconv"
	"strings"
)

func main() {}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Codec struct{}

func Constructor() (_ Codec) {
	return
}

func (this *Codec) serialize(root *TreeNode) string {
	sb := []string{}
	var dfs func(*TreeNode)
	dfs = func(root *TreeNode) {
		if root == nil {
			sb = append(sb, "null", ",")
			return
		}
		val := strconv.Itoa(root.Val)
		sb = append(sb, val, ",")
		dfs(root.Left)
		dfs(root.Right)
	}
	dfs(root)
	str := strings.Builder{}
	for i := 0; i < len(sb); i++ {
		str.WriteString(sb[i])
	}
	fmt.Println(reflect.ValueOf(str.String())) //"1,2,null,null,3,4,null,null,5,null,null,"
	return str.String()
}

func (this *Codec) deserialize(data string) *TreeNode {
	nodes := strings.Split(data, ",")
	fmt.Println(reflect.ValueOf(nodes)) //[1 2 null null 3 4 null null 5 null null ]
	var build func() *TreeNode
	build = func() *TreeNode {
		if len(nodes) == 0 {
			return nil
		}
		first := nodes[0]
		nodes = nodes[1:]
		if first == "null" {
			return nil
		}
		val, _ := strconv.Atoi(first)
		return &TreeNode{val, build(), build()}
	}
	return build()
}

/*
func (this *Codec) serialize(root *TreeNode) string {
	sb := []string{}
	dfs(root, &sb)
	str := strings.Builder{}
	for i := 0; i < len(sb); i++ {
		str.WriteString(sb[i])
	}
	// fmt.Println(reflect.ValueOf(str.String())) //"1,2,null,null,3,4,null,null,5,null,null,"
	return str.String()
}
func dfs(root *TreeNode, sb *[]string) {
	if root == nil {
		*sb = append((*sb), "null", ",")
		return
	}
	val := strconv.Itoa(root.Val)
	*sb = append((*sb), val, ",")
	dfs(root.Left, sb)
	dfs(root.Right, sb)
}

func (this *Codec) deserialize(data string) *TreeNode {
	nodes := strings.Split(data, ",")
	var res *TreeNode
	// fmt.Println(reflect.ValueOf(nodes))//[1 2 null null 3 4 null null 5 null null ]
	res = build(&nodes, res)
	return res
}

func build(nodes *[]string, res *TreeNode) *TreeNode {
	if len(*nodes) == 0 {
		return nil
	}
	first := (*nodes)[0]
	(*nodes) = (*nodes)[1:]
	if first == "null" {
		return nil
	}
	var root = new(TreeNode)
	val, _ := strconv.Atoi(first)
	root.Val = val
	root.Left = build(nodes, res)
	root.Right = build(nodes, res)
	return root
}
*/
