package main

import "strings"

/*
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


输入: num = 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.

*/
func main12() {

}

var chars = []string{"I", "II", "III", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"}
var _list = [15]int{1, 2, 3, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000}

func intToRoman(num int) string {
	ans := strings.Builder{}
	index := len(chars) - 1
	for num != 0 {
		if num-_list[index] >= 0 {
			num -= _list[index]
			ans.WriteString(chars[index]) // faster than '+'
		} else {
			index--
		}
	}
	return ans.String()

}
