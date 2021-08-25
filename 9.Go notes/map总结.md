自定义 set 结构， 混合类型的数组 去重

map 如果用 for range 遍历, 顺序每次是随机的，return 或者 break 可以跳出 for range

检测是否有一个值

```go
原生方法没有 linkedHashMap，只能自己实现，或者用第三方包
if val, ok = map1[key1]; ok{

}

删除一个键 key
delete(map1, key)
```

```go
func mySet(arr []interface{}) (res []interface{}) {
	hashSet := make(map[interface{}]struct{})
	for _, v := range arr { //始终无序，随机访问， break或者return基本无用
		hashSet[v] = struct{}{}
	}
	for key := range hashSet {
		res = append(res, key)
	}
	fmt.Println(res) // [3213 Hello World 213]
	return
}
```

Map

```go
obj:=make(map[string]int)
delete(obj,"alice")
```

自定义任意组合的 map 和 Arr

```go

type myMap map[interface{}]interface{}
type myArr []interface{}

func MapToSlice(input myMap) myArr {
	output := make(myArr, 0)
	for _, val := range input {
		output = append(output, val)
	}
	return output
}
func main() {
	var test = myMap{
		0: "Iron Man",
		1: "Soul",
	}
	test[2] = "jake"
	res := MapToSlice(test)
	fmt.Println(res)
}
```
