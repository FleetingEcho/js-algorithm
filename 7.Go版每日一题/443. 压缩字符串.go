package main

func main() {}

func compress(cs []byte) int {
	n := len(cs)
	var i, j int //i 当前处理到的位置, j 答案待插入的位置
	for i < n {
		idx := i
		for idx < n && cs[idx] == cs[i] {
			idx++
		}
		count := idx - i
		cs[j] = cs[i]
		j++
		//后跟count位
		if count > 1 {
			start := j
			end := start
			for count != 0 {
				cs[end] = byte((count % 10) + '0')
				end++
				count /= 10
			}
			reverse(cs, start, end-1)
			j = end
		}
		i = idx
	}
	return j
}
func reverse(cs []byte, start, end int) {
	for start < end {
		cs[start], cs[end] = cs[end], cs[start]
		start++
		end--
	}
}
