package main

func main171() {}
func titleToNumber(s string) (res int) {
	res = 0
	runes := []rune(s) //make只能为slice, map, channel分配内存
	for _, c := range runes {
		res = 26*res + (int(c-'A') + 1)
	}
	return
}
