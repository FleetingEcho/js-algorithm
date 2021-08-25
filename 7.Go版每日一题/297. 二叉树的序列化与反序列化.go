package leetcode297

import (
	"strconv"
	"strings"
)

func main() {}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

var SEP = ','
var NULL = '#'

type Codec struct{}

func Constructor() (_ Codec) {
	return
}

func (this *Codec) serialize(root *TreeNode) string {
	sb := &strings.Builder{}
	dfs(root, sb)

	return sb.String()
}
func dfs(root *TreeNode, sb *strings.Builder) {
	if root == nil {
		sb.WriteString("#,")
		return
	}
	sb.WriteString(strconv.Itoa(root.Val))
	sb.WriteByte(',')
	dfs(root.Left, sb)
	dfs(root.Right, sb)
}

func (Codec) deserialize(data string) *TreeNode {
	sp := strings.Split(data, ",")
	var build func() *TreeNode
	build = func() *TreeNode {
		if sp[0] == "#" {
			sp = sp[1:]
			return nil
		}
		val, _ := strconv.Atoi(sp[0])
		sp = sp[1:]
		var res = new(TreeNode) //&TreeNode{}
		res.Val = val
		res.Left = build()
		res.Right = build()
		return res // return &TreeNode{val, build(), build()}
	}
	return build()
}
