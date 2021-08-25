package lib

import (
    "errors"
    "fmt"
)

// String 字符串
type String struct {
    chart  [MAX]byte
    length int
}

// InitString 初始化字符串
func InitString() *String {
    return new(String)
}

// Show 字符串展示
func (str *String) Show() {
    for i := range str.chart {
        fmt.Print(str.chart[i])
    }
    fmt.Println()
}

// Append 尾部追加字符串
func (str *String) Append(a []byte) error {
    if len(a)+str.length > MAX {
        return errors.New("超过字符串长度")
    }
    for i := range a {
        str.chart[str.length+i] = a[i]
        str.length++
    }
    return nil
}

// DeleteLocate 删除某位置的字符
func (str *String) DeleteLocate(location int) error {
    if str.length < location {
        return errors.New("该位置不存在字符")
    }
    for i := location; i < str.length-1; i++ {
        str.chart[location] = str.chart[location+1]
    }
    str.length--
    return nil
}

// Length 求字符串长
func (str *String) Length() int {
    return str.length
}

// Empty 字符串是否为空
func (str *String) Empty() bool {
    if str.length == 0 {
        return true
    }
    return false
}

// Clear 清空字符串
func (str *String) Clear() {
    for i := range str.chart {
        str.chart[i] = 0
    }
}
